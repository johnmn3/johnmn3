goog.provide('shadow.cljs.bootstrap.browser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.js');
goog.require('cognitect.transit');
goog.require('shadow.js');
goog.require('shadow.cljs.bootstrap.env');
goog.require('goog.async.run');
goog.require('goog.net.XhrIo');
goog.require('goog.net.BulkLoader');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.browser !== 'undefined') && (typeof shadow.cljs.bootstrap.browser.init_opts !== 'undefined')){
} else {
shadow.cljs.bootstrap.browser.init_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),cljs.core.PersistentVector.EMPTY], null));
}
shadow.cljs.bootstrap.browser.asset_path = (function shadow$cljs$bootstrap$browser$asset_path(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38117 = arguments.length;
var i__4532__auto___38118 = (0);
while(true){
if((i__4532__auto___38118 < len__4531__auto___38117)){
args__4534__auto__.push((arguments[i__4532__auto___38118]));

var G__38120 = (i__4532__auto___38118 + (1));
i__4532__auto___38118 = G__38120;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts)),args);
});

shadow.cljs.bootstrap.browser.asset_path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.cljs.bootstrap.browser.asset_path.cljs$lang$applyTo = (function (seq38114){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38114));
});

shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_ = (function shadow$cljs$bootstrap$browser$compile_state_ref_QMARK_(x){
return (((x instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(x))));
});
shadow.cljs.bootstrap.browser.transit_read = (function shadow$cljs$bootstrap$browser$transit_read(txt){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,txt);
});
shadow.cljs.bootstrap.browser.transit_load = (function shadow$cljs$bootstrap$browser$transit_load(path,callback){
var G__38141 = path;
var G__38142 = ((function (G__38141){
return (function (res){
var req = this;
if(cljs.core.not(req.isSuccess())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed to download boostrap file:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," status:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.getStatus())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null));
} else {
var data = shadow.cljs.bootstrap.browser.transit_read(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}
});})(G__38141))
;
return goog.net.XhrIo.send(G__38141,G__38142);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.bootstrap.browser.script_eval = (function shadow$cljs$bootstrap$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.bootstrap.browser.execute_load_BANG_ = (function shadow$cljs$bootstrap$browser$execute_load_BANG_(compile_state_ref,p__38160){
var map__38161 = p__38160;
var map__38161__$1 = ((((!((map__38161 == null)))?(((((map__38161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38161):map__38161);
var load_info = map__38161__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var temp__5457__auto___38171 = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.browser.init_opts));
if(cljs.core.truth_(temp__5457__auto___38171)){
var load_fn_38172 = temp__5457__auto___38171;
(load_fn_38172.cljs$core$IFn$_invoke$arity$1 ? load_fn_38172.cljs$core$IFn$_invoke$arity$1(load_info) : load_fn_38172.call(null,load_info));
} else {
}

var G__38163 = type;
var G__38163__$1 = (((G__38163 instanceof cljs.core.Keyword))?G__38163.fqn:null);
switch (G__38163__$1) {
case "analyzer":
var data = shadow.cljs.bootstrap.browser.transit_read(text);
return cljs.js.load_analysis_cache_BANG_(compile_state_ref,ns,data);

break;
case "js":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,provides);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,provides);

var js = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"\n"].join('');
return shadow.cljs.bootstrap.browser.script_eval(js);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38163__$1)].join('')));

}
});
shadow.cljs.bootstrap.browser.queue_task_BANG_ = (function shadow$cljs$bootstrap$browser$queue_task_BANG_(task){
return goog.async.run(task);
});
/**
 * loads a set of namespaces, must be called after init
 */
shadow.cljs.bootstrap.browser.load_namespaces = (function shadow$cljs$bootstrap$browser$load_namespaces(compile_state_ref,namespaces,cb){
if(cljs.core.truth_(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref))){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,namespaces)){
} else {
throw (new Error("Assert failed: (every? symbol? namespaces)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

var deps_to_load_for_ns = shadow.cljs.bootstrap.env.find_deps(namespaces);
var macro_deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns){
return (function (p1__38192_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38192_SHARP_),"$macros"].join(''));
});})(deps_to_load_for_ns))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro-requires","macro-requires",-798347981),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns){
return (function (p1__38191_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__38191_SHARP_));
});})(deps_to_load_for_ns))
,deps_to_load_for_ns)))));
var deps_to_load_with_macros = shadow.cljs.bootstrap.env.find_deps(clojure.set.union.cljs$core$IFn$_invoke$arity$2(namespaces,macro_deps));
var compile_state = cljs.core.deref(compile_state_ref);
var things_already_loaded = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"provides","provides",-1634397992),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state){
return (function (p1__38193_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__38193_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state))
,deps_to_load_with_macros)));
var js_files_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded){
return (function (p__38199){
var map__38200 = p__38199;
var map__38200__$1 = ((((!((map__38200 == null)))?(((((map__38200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38200):map__38200);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"provides","provides",-1634397992),provides,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_name], 0))], null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded){
return (function (p1__38194_SHARP_){
return clojure.set.superset_QMARK_(cljs.core.deref(shadow.cljs.bootstrap.env.loaded_ref),new cljs.core.Keyword(null,"provides","provides",-1634397992).cljs$core$IFn$_invoke$arity$1(p1__38194_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded))
,deps_to_load_with_macros));
var analyzer_data_to_load = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p__38202){
var map__38203 = p__38202;
var map__38203__$1 = ((((!((map__38203 == null)))?(((((map__38203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38203):map__38203);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var ana_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38203__$1,new cljs.core.Keyword(null,"ana-name","ana-name",-1835677673));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"analyzer","analyzer",2075759383),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"uri","uri",-774711847),shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ana_name], 0))], null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p1__38196_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compile_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__38196_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177)], null)) == null);
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load){
return (function (p1__38195_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__38195_SHARP_));
});})(deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load))
,deps_to_load_with_macros)));
var load_info = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,js_files_to_load),analyzer_data_to_load);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,things_already_loaded);

if(cljs.core.empty_QMARK_(load_info)){
var G__38205 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__38205) : cb.call(null,G__38205));
} else {
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",-774711847)),load_info);
var loader = (new goog.net.BulkLoader(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(uris)));
loader.listen(goog.net.EventType.SUCCESS,((function (uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (e){
var texts = loader.getResponseTexts();
var seq__38206_38247 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (p1__38197_SHARP_,p2__38198_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38197_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),p2__38198_SHARP_);
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
,load_info,texts));
var chunk__38207_38248 = null;
var count__38208_38249 = (0);
var i__38209_38250 = (0);
while(true){
if((i__38209_38250 < count__38208_38249)){
var load_38257 = chunk__38207_38248.cljs$core$IIndexed$_nth$arity$2(null,i__38209_38250);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__38206_38247,chunk__38207_38248,count__38208_38249,i__38209_38250,load_38257,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_38257);
});})(seq__38206_38247,chunk__38207_38248,count__38208_38249,i__38209_38250,load_38257,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__38260 = seq__38206_38247;
var G__38261 = chunk__38207_38248;
var G__38262 = count__38208_38249;
var G__38263 = (i__38209_38250 + (1));
seq__38206_38247 = G__38260;
chunk__38207_38248 = G__38261;
count__38208_38249 = G__38262;
i__38209_38250 = G__38263;
continue;
} else {
var temp__5457__auto___38264 = cljs.core.seq(seq__38206_38247);
if(temp__5457__auto___38264){
var seq__38206_38265__$1 = temp__5457__auto___38264;
if(cljs.core.chunked_seq_QMARK_(seq__38206_38265__$1)){
var c__4351__auto___38266 = cljs.core.chunk_first(seq__38206_38265__$1);
var G__38267 = cljs.core.chunk_rest(seq__38206_38265__$1);
var G__38268 = c__4351__auto___38266;
var G__38269 = cljs.core.count(c__4351__auto___38266);
var G__38270 = (0);
seq__38206_38247 = G__38267;
chunk__38207_38248 = G__38268;
count__38208_38249 = G__38269;
i__38209_38250 = G__38270;
continue;
} else {
var load_38271 = cljs.core.first(seq__38206_38265__$1);
shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (seq__38206_38247,chunk__38207_38248,count__38208_38249,i__38209_38250,load_38271,seq__38206_38265__$1,temp__5457__auto___38264,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
return shadow.cljs.bootstrap.browser.execute_load_BANG_(compile_state_ref,load_38271);
});})(seq__38206_38247,chunk__38207_38248,count__38208_38249,i__38209_38250,load_38271,seq__38206_38265__$1,temp__5457__auto___38264,texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);


var G__38277 = cljs.core.next(seq__38206_38265__$1);
var G__38278 = null;
var G__38279 = (0);
var G__38280 = (0);
seq__38206_38247 = G__38277;
chunk__38207_38248 = G__38278;
count__38208_38249 = G__38279;
i__38209_38250 = G__38280;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.bootstrap.browser.queue_task_BANG_(((function (texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info){
return (function (){
var G__38212 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__38212) : cb.call(null,G__38212));
});})(texts,uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);
});})(uris,loader,deps_to_load_for_ns,macro_deps,deps_to_load_with_macros,compile_state,things_already_loaded,js_files_to_load,analyzer_data_to_load,load_info))
);

return loader.load();
}
});
/**
 * :load fn for cljs.js, must be passed the compile-state as first arg
 * eg. :load (partial boot/load compile-state-ref)
 */
shadow.cljs.bootstrap.browser.load = (function shadow$cljs$bootstrap$browser$load(compile_state_ref,p__38287,cb){
var map__38288 = p__38287;
var map__38288__$1 = ((((!((map__38288 == null)))?(((((map__38288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38288):map__38288);
var rc = map__38288__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
if(cljs.core.truth_(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref))){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? name)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

var ns = (cljs.core.truth_(macros)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"$macros"].join('')):name);
var or__3949__auto___38322 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(compile_state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
if(cljs.core.truth_(or__3949__auto___38322)){
} else {
shadow.cljs.bootstrap.env.get_ns_info(ns);
}

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cb);
});
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_ = (function shadow$cljs$bootstrap$browser$fix_provide_conflict_BANG_(){
return delete cljs["core$macros"];
});
/**
 * initializes the bootstrapped compiler by loading the dependency index
 * and loading cljs.core + macros (and namespaces specified in :load-on-init)
 */
shadow.cljs.bootstrap.browser.init = (function shadow$cljs$bootstrap$browser$init(compile_state_ref,p__38324,init_cb){
var map__38326 = p__38324;
var map__38326__$1 = ((((!((map__38326 == null)))?(((((map__38326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38326):map__38326);
var opts = map__38326__$1;
var load_on_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877));
if(cljs.core.truth_(shadow.cljs.bootstrap.browser.compile_state_ref_QMARK_(compile_state_ref))){
} else {
throw (new Error("Assert failed: (compile-state-ref? compile-state-ref)"));
}

if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

if(cljs.core.fn_QMARK_(init_cb)){
} else {
throw (new Error("Assert failed: (fn? init-cb)"));
}

if(typeof new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts) === 'string'){
} else {
throw (new Error("Assert failed: (string? (:path opts))"));
}

cljs.core.reset_BANG_(shadow.cljs.bootstrap.browser.init_opts,opts);

if(cljs.core.truth_(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref))){
return (init_cb.cljs$core$IFn$_invoke$arity$0 ? init_cb.cljs$core$IFn$_invoke$arity$0() : init_cb.call(null));
} else {
shadow.cljs.bootstrap.browser.fix_provide_conflict_BANG_();

return shadow.cljs.bootstrap.browser.transit_load(shadow.cljs.bootstrap.browser.asset_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/index.transit.json"], 0)),((function (map__38326,map__38326__$1,opts,load_on_init){
return (function (data){
var map__38330_38332 = shadow.cljs.bootstrap.env.build_index(data);
var map__38330_38333__$1 = ((((!((map__38330_38332 == null)))?(((((map__38330_38332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38330_38332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38330_38332):map__38330_38332);
var idx_38334 = map__38330_38333__$1;
var exclude_38335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38330_38333__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,clojure.set.union,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__38330_38332,map__38330_38333__$1,idx_38334,exclude_38335,map__38326,map__38326__$1,opts,load_on_init){
return (function (p1__38323_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38323_SHARP_),"$macros"].join(''));
});})(map__38330_38332,map__38330_38333__$1,idx_38334,exclude_38335,map__38326,map__38326__$1,opts,load_on_init))
),exclude_38335));

return shadow.cljs.bootstrap.browser.load_namespaces(compile_state_ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null], null), null),load_on_init),init_cb);
});})(map__38326,map__38326__$1,opts,load_on_init))
);
}
});

//# sourceMappingURL=shadow.cljs.bootstrap.browser.js.map
