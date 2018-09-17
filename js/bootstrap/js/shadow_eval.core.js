goog.provide('shadow_eval.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('shadow.cljs.bootstrap.browser');
goog.require('clojure.set');
goog.require('re_view.core');
goog.require('re_view.hiccup.core');
goog.require('lark.value_viewer.core');
goog.require('re_db.d');
goog.require('re_db.patterns');
goog.require('cells.cell');
goog.require('cells.lib');
goog.require('cljs.reader');
goog.require('clojure.string');
shadow_eval.core.source_examples = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(for [n (range 10)] n)","(defcell x 10)","(cell (interval 100 inc))","(require '[cljs.js :as cljs])\n\n(fn? cljs/eval-str)"], null);
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core.c_state !== 'undefined')){
} else {
shadow_eval.core.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
shadow_eval.core.eval_str = (function shadow_eval$core$eval_str(source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(shadow_eval.core.c_state,source,"[test]",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,shadow_eval.core.c_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("shadow-eval.user")], null),cb);
});
var the_class__7323__auto___12155 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (_,source){
return source;
}),new cljs.core.Keyword(null,"docstring","docstring",879233117),"Shows a single example, with an editable textarea and value-view.",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/show-example"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_,source){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,source){
return shadow_eval.core.eval_str(source,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$core$show_example(p__12144){
var map__12145 = p__12144;
var map__12145__$1 = ((((!((map__12145 == null)))?(((((map__12145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12145):map__12145);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12145__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__12148 = cljs.core.deref(state);
var map__12148__$1 = ((((!((map__12148 == null)))?(((((map__12148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12148):map__12148);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12148__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ma3.flex",".ma3.flex",-1429097780),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-near-white.pa3.flex-none",".bg-near-white.pa3.flex-none",1379540009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(450)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto","textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto",1251654161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.75 + (1.3125 * cljs.core.count(cljs.core.re_seq(/\n|\r\n/,source))))),"rem"].join('')], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__12148,map__12148__$1,source,result,map__12145,map__12145__$1,state){
return (function (p1__12140_SHARP_){
var source__$1 = p1__12140_SHARP_.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source__$1);

return shadow_eval.core.eval_str(source__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
});})(map__12148,map__12148__$1,source,result,map__12145,map__12145__$1,state))
], null)], null)], null),(function (){var map__12153 = result;
var map__12153__$1 = ((((!((map__12153 == null)))?(((((map__12153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12153):map__12153);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pre-wrap",".pre-wrap",116019005),(cljs.core.truth_(error)?re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.bg-washed-red",".pa3.bg-washed-red",270898254),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b",".b",-335131582),cljs.core.ex_message(error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error))].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_cause(error)], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3",".pa3",1465128375),lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1(value)], null))], null);
})()], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.core.show_exampleClass = the_class__7323__auto___12155;

/**
 * Shows a single example, with an editable textarea and value-view.
 */
shadow_eval.core.show_example = re_view.core.factory(the_class__7323__auto___12155);
var the_class__7323__auto___12199 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (_,content,posts,post,cb){
return content;
}),new cljs.core.Keyword(null,"docstring","docstring",879233117),"Shows a single example, with an editable textarea and value-view.",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/incept"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_,content,posts,post,cb){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),content,new cljs.core.Keyword(null,"post","post",269697687),post,new cljs.core.Keyword(null,"posts","posts",760043164),posts,new cljs.core.Keyword(null,"cb","cb",589947841),cb], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,content,posts,post,cb){
return shadow_eval.core.eval_str(content,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$core$incept(p__12181){
var map__12182 = p__12181;
var map__12182__$1 = ((((!((map__12182 == null)))?(((((map__12182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12182):map__12182);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12182__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__12186 = cljs.core.deref(state);
var map__12186__$1 = ((((!((map__12186 == null)))?(((((map__12186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12186):map__12186);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,new cljs.core.Keyword(null,"post","post",269697687));
var posts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,new cljs.core.Keyword(null,"posts","posts",760043164));
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12186__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var map__12188 = result;
var map__12188__$1 = ((((!((map__12188 == null)))?(((((map__12188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12188):map__12188);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12188__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12188__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(error)?re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.bg-washed-red",".pa3.bg-washed-red",270898254),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b",".b",-335131582),cljs.core.ex_message(error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error))].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_cause(error)], 0))], null)):value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto","textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto",1251654161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not(source))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.75 + (1.3125 * cljs.core.count(cljs.core.re_seq(/\n|\r\n/,source))))),"rem"].join('')], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__12188,map__12188__$1,error,value,map__12186,map__12186__$1,source,result,post,posts,cb,map__12182,map__12182__$1,state){
return (function (p1__12177_SHARP_){
var source__$1 = p1__12177_SHARP_.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source__$1);

shadow_eval.core.eval_str(source__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(post,source__$1) : cb.call(null,post,source__$1));
} else {
return null;
}
});})(map__12188,map__12188__$1,error,value,map__12186,map__12186__$1,source,result,post,posts,cb,map__12182,map__12182__$1,state))
], null)], null)], null);
})()], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.core.inceptClass = the_class__7323__auto___12199;

/**
 * Shows a single example, with an editable textarea and value-view.
 */
shadow_eval.core.incept = re_view.core.factory(the_class__7323__auto___12199);
shadow_eval.core.admin = "(def sync-repo-button\n     [:button {:on-click sync-repo} \"Pull\"])\n\n  (def push-button\n     [:button {:on-click do-commit} \"Push\"])\n\n  (def username-input\n     [:input#username {:name \"username\" :type \"text\"}])\n\n  (def password-input\n     [:input#password {:name \"password\" :type \"password\"}])\n\n  (def client-id-input\n    [:input#clientid  {:name \"clientid\" :type \"password\"}])\n\n  (def client-secret-input\n    [:input#clientsecret  {:name \"clientsecret\" :type \"password\"}])\n\n  (def text1 \"Like git pages, but for people - a Pull, Eval, Push, Loop (PEPL) is a REPL on a git stick.\n\n  With PEPLs you can generate static blogs or sites by following these four basic steps:\n\n  1. Pull in your templates from Github\n  2. Live edit your site within your browser\n  3. Push the new HTML back to Github\n  4. Repeat!\n\n  \")\n\n  (defcell text-atom {:text text1 :refresh true})\n\n  (defview show-lines [this]\n    [:.pa3.flex-none\n      {:style {:border-color \"black\",\n               :align-text \"top\",\n               :padding 5,\n               :float \"left\",\n               :width \"100%\",\n               :height \"auto\",\n               :border-radius 13}}\n      [:h1 \"The PEPL\"]\n      [:.pa3 (apply concat\n               (for [x (clojure.string/split-lines (:text @text-atom))]\n                 [x [:br]]))\n      [:hr]\n      [:.pa3 \"Enter your credentials below and then click \\\"Pull\\\".\"]\n      [:.pa3 \"Github Username:\" [:br] username-input]\n      [:.pa3 \"Github Password:\" [:br] password-input]\n      [:.pa3 \"Github Oauth Client-ID:\" [:br] client-id-input]\n      [:.pa3 \"Github Oauth Client-Secret:\" [:br] client-secret-input]\n      [:.pa3 sync-repo-button]\n  [:.pa3 \"Once they've loaded, you can edit your posts below:\"]\n  (render-current-posts)\n  [:.pa3 push-button \" Click here to send your updates back to Github\"]\n  [:hr]\n  [:.pa3 \"This interface is being constructed by the ClojureScript code below. Edit it to change the functionality of this PEPL.\"]\n  ]])\n\n  (show-lines)";
shadow_eval.core.ex2 = "(def frob 'niner)\n[:.pa3 1 [:br] 2 [:br] 3 [:br] 4 \"frob\"]";
shadow_eval.core.circ = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle","div.circle",2134211799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"Blog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"Bio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"Projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"Gists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"About"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.text",".pa3.text",715614332),"Admin"], null)], null);
var the_class__7323__auto___12235 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),"Root view for the page",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/examples"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$core$examples(){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(((cljs.core.not((function (){var G__12230 = new cljs.core.Keyword("shadow-eval.core","eval-state","shadow-eval.core/eval-state",1569921134);
var G__12231 = new cljs.core.Keyword(null,"ready?","ready?",-105765697);
return (re_db.d.get.cljs$core$IFn$_invoke$arity$2 ? re_db.d.get.cljs$core$IFn$_invoke$arity$2(G__12230,G__12231) : re_db.d.get.call(null,G__12230,G__12231));
})()))?"Loading...":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".f3",".f3",1860966069),(shadow_eval.core.incept.cljs$core$IFn$_invoke$arity$4 ? shadow_eval.core.incept.cljs$core$IFn$_invoke$arity$4(shadow_eval.core.admin,null,null,null) : shadow_eval.core.incept.call(null,shadow_eval.core.admin,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3",".pa3",1465128375),"Below are some traditional maria.cloud based evaluation boxes you can use to test expressions in."], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow_eval.core.show_example,shadow_eval.core.source_examples)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.core.examplesClass = the_class__7323__auto___12235;

/**
 * Root view for the page
 */
shadow_eval.core.examples = re_view.core.factory(the_class__7323__auto___12235);
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core._ !== 'undefined')){
} else {
shadow_eval.core._ = shadow.cljs.bootstrap.browser.init(shadow_eval.core.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"shadow-eval.user","shadow-eval.user",-2103561177,null),null], null), null)], null),(function (){
var G__12245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("shadow-eval.core","eval-state","shadow-eval.core/eval-state",1569921134),new cljs.core.Keyword(null,"ready?","ready?",-105765697),true], null)], null);
return (re_db.d.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_db.d.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__12245) : re_db.d.transact_BANG_.call(null,G__12245));
}));
}
shadow_eval.core.render = (function shadow_eval$core$render(){
return re_view.core.render_to_dom((shadow_eval.core.examples.cljs$core$IFn$_invoke$arity$0 ? shadow_eval.core.examples.cljs$core$IFn$_invoke$arity$0() : shadow_eval.core.examples.call(null)),"shadow-eval");
});
cells.cell.Cell.prototype.cells$cell$ICellStore$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$ICellStore$put_value_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
var G__12251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.name(this$__$1),value], null)], null);
return (re_db.d.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_db.d.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__12251) : re_db.d.transact_BANG_.call(null,G__12251));
});

cells.cell.Cell.prototype.cells$cell$ICellStore$get_value$arity$1 = (function (this$){
var this$__$1 = this;
var G__12252 = new cljs.core.Keyword(null,"cells","cells",-985166822);
var G__12253 = cljs.core.name(this$__$1);
return (re_db.d.get.cljs$core$IFn$_invoke$arity$2 ? re_db.d.get.cljs$core$IFn$_invoke$arity$2(G__12252,G__12253) : re_db.d.get.call(null,G__12252,G__12253));
});

cells.cell.Cell.prototype.cells$cell$ICellStore$invalidate_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return re_db.patterns.invalidate_BANG_(re_db.d._STAR_db_STAR_,new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.name(this$__$1)], null));
});

cells.cell.Cell.prototype.lark$value_viewer$core$IView$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.lark$value_viewer$core$IView$view$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.cells$cell$ICellView$view$arity$1(null);
});
cljs.core.Var.prototype.lark$value_viewer$core$IView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.lark$value_viewer$core$IView$view$arity$1 = (function (this$){
var this$__$1 = this;
var fexpr__12272 = cljs.core.deref(this$__$1);
return (fexpr__12272.cljs$core$IFn$_invoke$arity$0 ? fexpr__12272.cljs$core$IFn$_invoke$arity$0() : fexpr__12272.call(null));
});
goog.object.set(cells.cell.IRenderHiccup,"object",true);

var G__12276_12279 = cells.cell.render_hiccup;
var G__12277_12280 = "object";
var G__12278_12281 = ((function (G__12276_12279,G__12277_12280){
return (function (this$){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__12276_12279,G__12277_12280))
;
goog.object.set(G__12276_12279,G__12277_12280,G__12278_12281);

//# sourceMappingURL=shadow_eval.core.js.map
