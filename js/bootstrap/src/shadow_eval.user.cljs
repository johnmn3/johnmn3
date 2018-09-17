(ns shadow-eval.user
  (:require re-view.hiccup.core
            [cells.cell :refer [cell]]
            [shadow-eval.hiccups :as hiccupsrt]
            [shadow-eval.core :refer [eval-str incept render]]
            [re-db.d :as d]
            [clojure.set :refer [difference]]
            [cells.lib :as cell
             :refer [interval timeout fetch geo-location with-view]
             :refer-macros [wait]]
            [shapes.core :as shapes :refer [listen
                                            circle square rectangle triangle path text image
                                            position opacity rotate scale
                                            colorize stroke no-stroke fill no-fill
                                            color-names rgb hsl rescale
                                            layer beside above
                                                        ; for functional geometry demo
                                            ;; are these internal only? -jar
                                            assure-shape-seq shape-bounds bounds shape->vector]]
            [re-view.core  :as v :refer [defview] :include-macros true]
            [re-view.hiccup.core :refer [element]]
            [lark.value-viewer.core :as views]
            ; #_[thi.ng.geom.svg.core :as svg]
            [cljs.reader :refer [read-string]]
            [clojure.string :as str]
            [cljs.js :refer [empty-state eval js-eval]])
  (:import [goog.net XhrManager])
  (:require-macros [cells.cell :refer [defcell cell]]
                   [shadow-eval.hiccups :as hiccups]))

(defn- eval-post [s]
  (eval (empty-state)
        (cljs.reader/read-string
          (str "(do #_ (enable-console-print!)" s ")"))
        {:eval js-eval
         :source-map true
         :context :expr}
        (fn [result]
          (println "got result: " (pr-str result))
          (:value result ::no-value))))

(defn ->date [js-date]
  (str js-date))

;; common wrapper for all pages
(defn html [& forms]
  [:html
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1"}]
    [:link {:rel "stylesheet"
            :href "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.1/tufte.min.css"}]]
   [:body forms]])

;; wrapper for the index page (home page)
(defn index [post-infos]
  (html
    [:article
     [:h1 "My Blog"]
     [:p "Welcome or some-such."]
     (into
       [:ul]
       ;; Example post info:
       (for [{:keys [here title creation-time]}
             post-infos]
         [:li
          [:a {:href (str "posts/" here)} title]
          [:span " - (posted on: " (->date creation-time) ")"]]))]))

;; wrapper common to all posts
(defn post [content {:keys [title creation-time here next prev up]}]
  (html
    [:h1 [:a {:href here} title]]
    [:span "Posted on: " (->date creation-time)]
    content
    (when prev
      [:a {:href prev} "<--"])
    [:span {:style "margin: auto 10px;"}
     [:a {:href up} "back"]]
    (when next
      [:a {:href next} "-->"])))

;; user's own tags:
(defn title [s] [:h1 s])

(defn p [& xs]
  [:p (str/join \newline xs)])


(defn posts [branch]
  (->> branch :old-files
    (filterv #(-> (:path %) (.startsWith "_posts")))))

(defn add-next-prev [posts]
  (vec
    (map-indexed
      (fn [idx p]
        (let [next-file (:here (get posts (inc idx)))
              prev-file (:here (get posts (dec idx)))]
          (assoc p :next next-file :prev prev-file)))
      posts)))

(defn- get-file-name [path]
  (last (last (re-seq #"/(.[^/|*].+)" path))))

(defn ->title [path]
  (as-> path $
    (get-file-name $)
    (str/replace $ ".edn" "")
    (str/replace $ "_" " ")
    (str/split $ " ")
    (map str/capitalize $)
    (str/join " " $)))

(defn process-post [post-map]
  (let [process-hiccup (comp eval-post pr-str)]
    (when post-map
      (println :process-post post-map)
      (assoc post-map
        :content (process-hiccup (:edn post-map))
        :mode "100644"
        :type "blob"
        :creation-time "recently"
        :time-stamp "recently"
        :title (->title (or (:path post-map) (:here post-map)))
        :here (-> (or (:path post-map) (:here post-map)) get-file-name (str/replace "edn" "html"))))))

(defn- process-posts [post-maps]
  (->> post-maps
       (mapv process-post)
       (sort-by :path)
       vec
       add-next-prev))

(def fake-fs (atom {}))

(defn fake-spit! [fname f]
  (swap! fake-fs assoc fname f))

(defn- write-post [out-dir {:keys [content path here title time-stamp prev next]}]
  (println "writing post -> " path)
  (fake-spit!
    (str out-dir "/" here)
    (hiccups/html
      (post content {:title title
                     :creation-time time-stamp
                     :here here
                     :next next
                     :prev prev
                     :up "../index.html"}))))



(defn- write-posts [processed-posts out-dir]
  (doseq [post-info processed-posts]
    (write-post out-dir post-info)))

(defn- write-index [processed-posts out-dir]
  (let [out-str (-> processed-posts index hiccups/html)
        out-file "index.html"]
    (println "writing index -> " out-file)
    (fake-spit! out-file out-str)))

(defn post->map [[slug html]]
  {:content html
   :mode "100644"
   :type "blob"
   :here slug})

(defn compile-blog [post-maps out-dir]
  (println "branch: master")
  (let [processed-posts (process-posts post-maps)]
    (println "writing posts...")
    (write-posts processed-posts out-dir)
    (println "writing index...")
    (write-index processed-posts out-dir)
    (into #{} (mapv post->map @fake-fs))))

(defn qs
  ([x] (qs js/document x))
  ([target x] (array-seq (.querySelectorAll target x))))

(defn load [aname url]
  (let [tag (.createElement js/document "script")]
    (set! (.-id tag) (str aname))
    (set! (.-src tag) url)
    (let [first-script-tag (first (array-seq (.querySelectorAll js/document "script")))]
      (.insertBefore (.-parentNode first-script-tag) tag first-script-tag))))

(defn load-gh-api []
  (load "github-api" "//unpkg.com/github-api/dist/GitHub.bundle.min.js"))

(load-gh-api)

(defn set-branch [gh arepo acurrent-branch branch-name]
  (if-not arepo
    (throw (ex-info "Repository is not initialized"
             {:causes #{:repo-was-nilled :repo-never-set}
              :params {:gh gh :repo arepo :current-branch @acurrent-branch
                       :set-branch branch-name}}))
    (-> (.listBranches arepo)
      (.then
        (fn [branches]
          (let [branch-exists? (.find (.-data branches) #(= (.-name %) branch-name))]
            (println :branch-exists? branch-exists?)
            (if-not branch-exists?
              (-> (.createBranch "master" branch-name)
                (.then #(swap! acurrent-branch assoc :name branch-name)))
              (swap! acurrent-branch assoc :name branch-name))))))))

(defn get-current-commit-sha [arepo acurrent-branch]
  (-> (.getRef arepo (str "heads/" (:name @acurrent-branch)))
    (.then (fn [ref] (swap! acurrent-branch assoc :commit-sha
                       (-> ref .-data .-object .-sha))))))

(defn get-current-tree-sha [arepo acurrent-branch]
  (-> (.getCommit arepo (:commit-sha @acurrent-branch))
    (.then (fn [commit] (swap! acurrent-branch assoc :tree-sha
                          (-> commit .-data .-tree .-sha))))))

(defn get-current-tree [arepo acurrent-branch]
  (-> (.getTree arepo (str (:tree-sha @acurrent-branch) "?recursive=true"))
    (.then (fn [blob] (swap! acurrent-branch assoc :tree-blobs
                             (js->clj blob :keywordize-keys true))))))

(defn create-file [arepo afiles-to-commit file-info]
  (println :file-info file-info)
  (-> (.createBlob arepo (:content file-info))
    (.then (fn [blob] (swap! afiles-to-commit conj
                        #js {:sha (-> blob .-data .-sha)
                             :path (:path file-info)
                             :mode "100644"
                             :type "blob"})))))

(defn create-files [arepo afiles-to-commit files-info]
  (js/Promise.all (mapv (partial create-file arepo afiles-to-commit) files-info)))

(defn create-tree [arepo afiles-to-commit acurrent-branch anew-commit]
  (-> (.createTree arepo (clj->js @afiles-to-commit) (:tree-sha @acurrent-branch))
    (.then (fn [tree] (swap! anew-commit assoc :tree-sha
                        (-> tree .-data .-sha))))))

(defn create-commit [arepo acurrent-branch anew-commit message]
  (-> (.commit arepo (:commit-sha @acurrent-branch) (:tree-sha @anew-commit) message)
    (.then (fn [commit] (swap! anew-commit assoc :sha (-> commit .-data .-sha))))))

(defn update-head [arepo acurrent-branch anew-commit]
  (.updateHead arepo (str "heads/" (:name @acurrent-branch)) (:sha @anew-commit)))

(defn push-files [gh arepo message files]
  (let [afiles-to-commit (atom [])
        acurrent-branch (atom {})
        anew-commit (atom {})]
    (-> (set-branch gh arepo acurrent-branch "master")
      (.then
         (fn []
           (when-not arepo (throw (ex-info "Repository not initialized" {})))
           (when-not (:name @acurrent-branch)
             (throw (ex-info "Branch is not set" {:cur-branch @acurrent-branch})))
           (-> (get-current-commit-sha arepo acurrent-branch)
             (.then #(do (println :creating-files) (create-files arepo afiles-to-commit files)))
             (.then #(do (println :creating-tree) (create-tree arepo afiles-to-commit acurrent-branch anew-commit)))
             (.then #(do (println :creating-commit) (create-commit arepo acurrent-branch anew-commit message)))
             (.then #(do (println :updating-head) (update-head arepo acurrent-branch anew-commit)))
             (.catch (fn [e] (println e)))))))))

(defn gh-auth [auth] (js/GitHub. (clj->js auth)))

(defn commit-files [gh arepo files]
  (-> (push-files gh arepo "test commit from web" files)
    (.then #(println "Files committed!"))))

(def send-retries     10)
(def send-timeout     (* 30 1000))
(def send-max-pool    6)

(def xhrm (goog.net.XhrManager. send-retries nil 2 send-max-pool send-timeout true))

(defn send-request
  [{:keys [id url method content headers priority callback max-retries response-type with-credentials]
    :or {id (gensym "msg") method "GET" content "text/html"
         response-type "application/vnd.github.v3.raw"
         headers #js {"Content-Type" "application/vnd.github.v3.raw"} with-credentials false}}]
  (.send xhrm id url method nil headers priority callback max-retries response-type with-credentials))

(defn xget
  ([url content callback]
   (send-request
     {:url url :content content :callback callback :headers #js {"Content-Type" "application/vnd.github.v3.raw"}}))
  ([url client-id client-secret content callback]
   (xget (str url "?client_id=" client-id "&client_secret=" client-secret)
     content callback)))

(defn b64-dec [s]
  (let [res (-> s
              js/atob
              (.split "")
              (.map #(str "%" (.slice (str "00" (-> % (.charCodeAt 0) (.toString 16))) -2)))
              (.join ""))]
    (try
      (js/decodeURIComponent res)
      (catch js/URIError e
        (println :b64-dec-URIError e)))))

(defn get-client-id []
  (when-let [el (first (qs "#clientid"))]
    (-> el .-value)))

(defn get-client-secret []
  (when-let [el (first (qs "#clientsecret"))]
    (-> el .-value)))

(defn geit [afn u]
  (let [client-id (get-client-id)
        client-secret (get-client-secret)]
    (if (and (seq client-id) (seq client-secret))
      (xget u client-id client-secret nil
        #(afn
          (-> % .-target .getResponseText js/JSON.parse
            (js->clj :keywordize-keys true))))
      (xget u nil
        #(afn
          (-> % .-target .getResponseText js/JSON.parse
            (js->clj :keywordize-keys true)))))))

(defn get-old-branch [repo my-branch completed-callback]
  (-> (get-current-commit-sha repo my-branch)
    (.then #(get-current-tree-sha repo my-branch))
    (.then #(get-current-tree repo my-branch))
    (.then
     #(let [post-maps (get-in %1 [:tree-blobs :data :tree])
            blob-maps (filterv (fn [m] (= "blob" (:type m))) post-maps)]
        (mapv (fn [m]
                (geit
                  (fn [{:keys [content]}]
                    (swap! my-branch update :old-files conj
                      (assoc m :content (-> content b64-dec)))
                    (when (:last m)
                      (completed-callback)))
                  (get m :url)))
              (update blob-maps (dec (count blob-maps)) assoc :last true))))))

(defn get-token []
  (-> js/window .-location .-href js/URL. .-searchParams (.get "code")))

(defcell master {:name "master"})

(defcell current-posts #{})

(defcell new-posts #{})

(defn read-posts [post-maps]
  (mapv #(assoc % :edn (read-string (:content %))) post-maps))

(defn store-posts [current-posts post-maps]
  (swap! current-posts into (read-posts post-maps)))

(defn get-username []
  (when-let [el (first (qs "#username"))]
    (-> el .-value)))

(defn get-password []
  (when-let [el (first (qs "#password"))]
    (-> el .-value)))

(defn sync-repo []
  (let [username (get-username)
        password (get-password)
        gh (gh-auth
            {:username username
             :password password})
        _ (def gh gh)
        repo (.getRepo gh username username)]
    (def repo repo)
    (reset! current-posts #{})
    (reset! new-posts #{})
    (reset! master {:name "master"})
    (get-old-branch repo master
      #(do (store-posts current-posts (posts @master))))))

(defn clicked [] (println "clicked"))

(defn update-blog-post []
  (swap! new-posts
    (fn [s]
      (-> s (difference (set (filter :here s)))
        (into (compile-blog (filter :path s) "posts"))))))

(defn do-post [post source]
  (when-let [sha (:sha post)]
    (update-blog-post)
    (swap! new-posts
      (fn [s]
        (-> s (disj (first (filter #(= (:sha %) sha) s)))
          (conj (assoc post :content source :edn (read-string source))))))))

(defview render-current-posts [this]
  (if-let [cposts @current-posts]
    (into
     [:.pa3
      [:hr]]
     (mapv #(do (println :rcp-post %)
              [:div
               [:span "Title: " (->title (:path %))]
               [:br]
               [:span "Size: " (:size %)]
               [:br]
               [:span "SHA: " (:sha %)]
               [:br]
               [:span "Edit: " (incept (:content %)
                                 current-posts
                                 %
                                 do-post)]
               [:hr]])
       (sort-by :path (filter :path cposts))))))

(defn cposts []
  (->> @current-posts
    (map #(or (:path %) (:here %)))))

(defn nposts []
  (->> @new-posts
    (map #(or (:path %) (:here %)))))

(defn oposts []
  (into #{}
    (filter #((set (nposts)) (or (:path %) (:here %)))
      (->> @master :old-files))))

(defn cleaned-posts []
  (difference (set (->> @master :old-files)) (oposts)))

(defn do-commit []
  (update-blog-post)
  (commit-files gh repo
    (concat
      (filter (complement nil?)
        (mapv #(if (:here %)
                 (assoc % :path (:here %))
                 %)
          @new-posts))
      (cleaned-posts))))
