(ns shadow-eval.core
  (:require

    ;; evaluate
    [cljs.js :as cljs]
    [shadow.cljs.bootstrap.browser :as boot]

    [clojure.set :refer [difference]]

    ;; view
    [re-view.core :as v :refer [defview]]
    [re-view.hiccup.core :refer [element]]


    ;; things to eval and display
    [lark.value-viewer.core :as views]
    [re-db.d :as d]
    [re-db.patterns :as patterns]
    [cells.cell :as cellc]
    [cells.lib :as cell
     :refer [interval timeout fetch geo-location with-view]
     :refer-macros [wait]]

    [cljs.reader :refer [read-string]]
    [clojure.string :as string])
  (:require-macros [cells.cell :refer [defcell cell]]))


;; Source text to eval

(def source-examples ["(for [n (range 10)] n)"
                      "(defcell x 10)"
                      "(cell (interval 100 inc))"
                      "(require '[cljs.js :as cljs])\n\n(fn? cljs/eval-str)"])

;; Set up eval environment

(defonce c-state (cljs/empty-state))

(defn eval-str [source cb]
  (cljs/eval-str
    c-state
    source
    "[test]"
    {:eval cljs/js-eval
     :load (partial boot/load c-state)
     :ns   (symbol "shadow-eval.user")}
    cb))

;; Views

(defview show-example
  "Shows a single example, with an editable textarea and value-view."
  {:key                (fn [_ source] source)
   :view/initial-state (fn [_ source]
                         {:source source})
   :view/did-mount     (fn [this source]
                         (eval-str source (partial swap! (:view/state this) assoc :result)))}
  [{:keys [view/state]}]
  (let [{:keys [source result]} @state]
    [:.ma3.flex
     [:.bg-near-white.pa3.flex-none
      {:style {:width 450}}
      [:textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto
       {:value     (:source @state)
        :style     {:height (str (+ 1.75 (* 1.3125 (count (re-seq #"\n|\r\n" source)))) "rem")}
        :on-change #(let [source (.. % -target -value)]
                      (swap! state assoc :source source)
                      (eval-str source (partial swap! state assoc :result)))}]]

     (let [{:keys [error value]} result]
       [:.pre-wrap
        (if error (element [:.pa3.bg-washed-red
                            [:.b (ex-message error)]
                            [:div (str (ex-data error))]
                            (pr-str (ex-cause error))])

                  [:.pa3 (views/format-value value)])])]))

(defview incept
  "Shows a single example, with an editable textarea and value-view."
  {:key                (fn [_ content posts post cb] content)
   :view/initial-state (fn [_ content posts post cb]
                         {:source content :post post :posts posts :cb cb})
   :view/did-mount     (fn [this content posts post cb]
                         (eval-str content
                           (partial swap! (:view/state this) assoc :result)))}
  [{:keys [view/state]}]
  (let [{:keys [source result post posts cb]} @state]
    [:div
     (let [{:keys [error value]} result]
       [:div
        (if error (element [:.pa3.bg-washed-red
                            [:.b (ex-message error)]
                            [:div (str (ex-data error))]
                            (pr-str (ex-cause error))])
                  value)
        [:textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto
          {:value     (:source @state)
           :style     (if-not source
                        {}
                        {:height (str (+ 1.75 (* 1.3125 (count (re-seq #"\n|\r\n" source)))) "rem")})
           :on-change #(let [source (.. % -target -value)]
                         (swap! state assoc :source source)
                         (eval-str source (partial swap! state assoc :result))
                         (when cb (cb post source)))}]])]))


(def admin
  "(def sync-repo-button
     [:button {:on-click sync-repo} \"Pull\"])

  (def push-button
     [:button {:on-click do-commit} \"Push\"])

  (def username-input
     [:input#username {:name \"username\" :type \"text\"}])

  (def password-input
     [:input#password {:name \"password\" :type \"password\"}])

  (def client-id-input
    [:input#clientid  {:name \"clientid\" :type \"password\"}])

  (def client-secret-input
    [:input#clientsecret  {:name \"clientsecret\" :type \"password\"}])

  (def text1 \"Like git pages, but for people - a Pull, Eval, Push, Loop (PEPL) is a REPL on a git stick.

  With PEPLs you can generate static blogs or sites by following these four basic steps:

  1. Pull in your templates from Github
  2. Live edit your site within your browser
  3. Push the new HTML back to Github
  4. Repeat!

  \")

  (defcell text-atom {:text text1 :refresh true})

  (defview show-lines [this]
    [:.pa3.flex-none
      {:style {:border-color \"black\",
               :align-text \"top\",
               :padding 5,
               :float \"left\",
               :width \"100%\",
               :height \"auto\",
               :border-radius 13}}
      [:h1 \"The PEPL\"]
      [:.pa3 (apply concat
               (for [x (clojure.string/split-lines (:text @text-atom))]
                 [x [:br]]))
      [:hr]
      [:.pa3 \"Enter your credentials below and then click \\\"Pull\\\".\"]
      [:.pa3 \"Github Username:\" [:br] username-input]
      [:.pa3 \"Github Password:\" [:br] password-input]
      [:.pa3 \"Github Oauth Client-ID:\" [:br] client-id-input]
      [:.pa3 \"Github Oauth Client-Secret:\" [:br] client-secret-input]
      [:.pa3 sync-repo-button]
  [:.pa3 \"Once they've loaded, you can edit your posts below:\"]
  (render-current-posts)
  [:.pa3 push-button \" Click here to send your updates back to Github\"]
  [:hr]
  [:.pa3 \"This interface is being constructed by the ClojureScript code below. Edit it to change the functionality of this PEPL.\"]
  ]])

  (show-lines)")

(def ex2
  "(def frob 'niner)
[:.pa3 1 [:br] 2 [:br] 3 [:br] 4 \"frob\"]")

(def circ
  [:div.circle
   {:on-click #()}
   [:.pa3.text "Blog"]
   [:.pa3.text "Bio"]
   [:.pa3.text "Projects"]
   [:.pa3.text "Gists"]
   [:.pa3.text "About"]
   [:.pa3.text "Admin"]])

(defview examples
  "Root view for the page"
  []
  (if-not (d/get ::eval-state :ready?)
    "Loading..."
    [:.f3
     (incept admin nil nil nil)
     ; circ
     [:hr]
     [:.pa3 "Below are some traditional maria.cloud based evaluation boxes you can use to test expressions in."]
     (map show-example source-examples)]))

(defonce _
         (boot/init c-state
                    {:path         "/js/bootstrap"
                     :load-on-init '#{shadow-eval.user}}
                    (fn []
                      (d/transact! [[:db/add ::eval-state :ready? true]]))))

(defn render []
  (v/render-to-dom (examples) "shadow-eval"))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Protocol extensions to enable rendering of cells and shapes

(extend-type cells.cell/Cell
  cells.cell/ICellStore
  (put-value! [this value]
    (d/transact! [[:db/add :cells (name this) value]]))
  (get-value [this]
    (d/get :cells (name this)))
  (invalidate! [this]
    (patterns/invalidate! d/*db* :ea_ [:cells (name this)]))
  lark.value-viewer.core/IView
  (view [this] (cells.cell/view this)))

(extend-protocol lark.value-viewer.core/IView
  Var
  (view [this] (@this)))

(extend-protocol cells.cell/IRenderHiccup
  object
  (render-hiccup [this] (re-view.hiccup.core/element this)))
