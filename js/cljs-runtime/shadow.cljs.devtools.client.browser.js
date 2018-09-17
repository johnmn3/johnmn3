goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32821 = arguments.length;
var i__4532__auto___32822 = (0);
while(true){
if((i__4532__auto___32822 < len__4531__auto___32821)){
args__4534__auto__.push((arguments[i__4532__auto___32822]));

var G__32823 = (i__4532__auto___32822 + (1));
i__4532__auto___32822 = G__32823;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32819){
var G__32820 = cljs.core.first(seq32819);
var seq32819__$1 = cljs.core.next(seq32819);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32820,seq32819__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__32844){
var map__32845 = p__32844;
var map__32845__$1 = ((((!((map__32845 == null)))?(((((map__32845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32845):map__32845);
var src = map__32845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32876 = cljs.core.seq(sources);
var chunk__32877 = null;
var count__32878 = (0);
var i__32879 = (0);
while(true){
if((i__32879 < count__32878)){
var map__32881 = chunk__32877.cljs$core$IIndexed$_nth$arity$2(null,i__32879);
var map__32881__$1 = ((((!((map__32881 == null)))?(((((map__32881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32881):map__32881);
var src = map__32881__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32937 = seq__32876;
var G__32938 = chunk__32877;
var G__32939 = count__32878;
var G__32940 = (i__32879 + (1));
seq__32876 = G__32937;
chunk__32877 = G__32938;
count__32878 = G__32939;
i__32879 = G__32940;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32876);
if(temp__5457__auto__){
var seq__32876__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32876__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__32876__$1);
var G__32941 = cljs.core.chunk_rest(seq__32876__$1);
var G__32942 = c__4351__auto__;
var G__32943 = cljs.core.count(c__4351__auto__);
var G__32944 = (0);
seq__32876 = G__32941;
chunk__32877 = G__32942;
count__32878 = G__32943;
i__32879 = G__32944;
continue;
} else {
var map__32900 = cljs.core.first(seq__32876__$1);
var map__32900__$1 = ((((!((map__32900 == null)))?(((((map__32900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32900):map__32900);
var src = map__32900__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32900__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32900__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32900__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32950 = cljs.core.next(seq__32876__$1);
var G__32951 = null;
var G__32952 = (0);
var G__32953 = (0);
seq__32876 = G__32950;
chunk__32877 = G__32951;
count__32878 = G__32952;
i__32879 = G__32953;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32957 = cljs.core.seq(js_requires);
var chunk__32958 = null;
var count__32959 = (0);
var i__32960 = (0);
while(true){
if((i__32960 < count__32959)){
var js_ns = chunk__32958.cljs$core$IIndexed$_nth$arity$2(null,i__32960);
var require_str_32967 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32967);


var G__32968 = seq__32957;
var G__32969 = chunk__32958;
var G__32970 = count__32959;
var G__32971 = (i__32960 + (1));
seq__32957 = G__32968;
chunk__32958 = G__32969;
count__32959 = G__32970;
i__32960 = G__32971;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32957);
if(temp__5457__auto__){
var seq__32957__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32957__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__32957__$1);
var G__32972 = cljs.core.chunk_rest(seq__32957__$1);
var G__32973 = c__4351__auto__;
var G__32974 = cljs.core.count(c__4351__auto__);
var G__32975 = (0);
seq__32957 = G__32972;
chunk__32958 = G__32973;
count__32959 = G__32974;
i__32960 = G__32975;
continue;
} else {
var js_ns = cljs.core.first(seq__32957__$1);
var require_str_32976 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32976);


var G__32978 = cljs.core.next(seq__32957__$1);
var G__32979 = null;
var G__32980 = (0);
var G__32981 = (0);
seq__32957 = G__32978;
chunk__32958 = G__32979;
count__32959 = G__32980;
i__32960 = G__32981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__32982 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32982) : callback.call(null,G__32982));
} else {
var G__32983 = shadow.cljs.devtools.client.env.files_url();
var G__32984 = ((function (G__32983){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__32983))
;
var G__32985 = "POST";
var G__32986 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__32987 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32983,G__32984,G__32985,G__32986,G__32987);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__32994){
var map__32995 = p__32994;
var map__32995__$1 = ((((!((map__32995 == null)))?(((((map__32995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32995):map__32995);
var msg = map__32995__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32995__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32995__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__33002 = info;
var map__33002__$1 = ((((!((map__33002 == null)))?(((((map__33002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33002):map__33002);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33002__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33002__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33004(s__33005){
return (new cljs.core.LazySeq(null,((function (map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info){
return (function (){
var s__33005__$1 = s__33005;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33005__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__33012 = cljs.core.first(xs__6012__auto__);
var map__33012__$1 = ((((!((map__33012 == null)))?(((((map__33012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33012):map__33012);
var src = map__33012__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33012__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__33005__$1,map__33012,map__33012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33004_$_iter__33006(s__33007){
return (new cljs.core.LazySeq(null,((function (s__33005__$1,map__33012,map__33012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info){
return (function (){
var s__33007__$1 = s__33007;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__33007__$1);
if(temp__5457__auto____$1){
var s__33007__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33007__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__33007__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__33009 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__33008 = (0);
while(true){
if((i__33008 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__33008);
cljs.core.chunk_append(b__33009,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33137 = (i__33008 + (1));
i__33008 = G__33137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33009),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33004_$_iter__33006(cljs.core.chunk_rest(s__33007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33009),null);
}
} else {
var warning = cljs.core.first(s__33007__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33004_$_iter__33006(cljs.core.rest(s__33007__$2)));
}
} else {
return null;
}
break;
}
});})(s__33005__$1,map__33012,map__33012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info))
,null,null));
});})(s__33005__$1,map__33012,map__33012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33004(cljs.core.rest(s__33005__$1)));
} else {
var G__33139 = cljs.core.rest(s__33005__$1);
s__33005__$1 = G__33139;
continue;
}
} else {
var G__33140 = cljs.core.rest(s__33005__$1);
s__33005__$1 = G__33140;
continue;
}
} else {
return null;
}
break;
}
});})(map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info))
,null,null));
});})(map__33002,map__33002__$1,sources,compiled,map__32995,map__32995__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__33025_33144 = cljs.core.seq(warnings);
var chunk__33026_33145 = null;
var count__33027_33146 = (0);
var i__33028_33147 = (0);
while(true){
if((i__33028_33147 < count__33027_33146)){
var map__33029_33148 = chunk__33026_33145.cljs$core$IIndexed$_nth$arity$2(null,i__33028_33147);
var map__33029_33149__$1 = ((((!((map__33029_33148 == null)))?(((((map__33029_33148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33029_33148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33029_33148):map__33029_33148);
var w_33150 = map__33029_33149__$1;
var msg_33151__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33029_33149__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33029_33149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33029_33149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33029_33149__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33154)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33152),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33153),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33151__$1)].join(''));


var G__33155 = seq__33025_33144;
var G__33156 = chunk__33026_33145;
var G__33157 = count__33027_33146;
var G__33158 = (i__33028_33147 + (1));
seq__33025_33144 = G__33155;
chunk__33026_33145 = G__33156;
count__33027_33146 = G__33157;
i__33028_33147 = G__33158;
continue;
} else {
var temp__5457__auto___33163 = cljs.core.seq(seq__33025_33144);
if(temp__5457__auto___33163){
var seq__33025_33167__$1 = temp__5457__auto___33163;
if(cljs.core.chunked_seq_QMARK_(seq__33025_33167__$1)){
var c__4351__auto___33168 = cljs.core.chunk_first(seq__33025_33167__$1);
var G__33169 = cljs.core.chunk_rest(seq__33025_33167__$1);
var G__33170 = c__4351__auto___33168;
var G__33171 = cljs.core.count(c__4351__auto___33168);
var G__33172 = (0);
seq__33025_33144 = G__33169;
chunk__33026_33145 = G__33170;
count__33027_33146 = G__33171;
i__33028_33147 = G__33172;
continue;
} else {
var map__33041_33177 = cljs.core.first(seq__33025_33167__$1);
var map__33041_33178__$1 = ((((!((map__33041_33177 == null)))?(((((map__33041_33177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33041_33177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33041_33177):map__33041_33177);
var w_33179 = map__33041_33178__$1;
var msg_33180__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041_33178__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041_33178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041_33178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33041_33178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33183)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33181),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33182),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33180__$1)].join(''));


var G__33199 = cljs.core.next(seq__33025_33167__$1);
var G__33200 = null;
var G__33201 = (0);
var G__33202 = (0);
seq__33025_33144 = G__33199;
chunk__33026_33145 = G__33200;
count__33027_33146 = G__33201;
i__33028_33147 = G__33202;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info){
return (function (p__33056){
var map__33059 = p__33056;
var map__33059__$1 = ((((!((map__33059 == null)))?(((((map__33059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33059):map__33059);
var src = map__33059__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33059__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info){
return (function (p__33075){
var map__33076 = p__33075;
var map__33076__$1 = ((((!((map__33076 == null)))?(((((map__33076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33076):map__33076);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33076__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info){
return (function (p__33084){
var map__33085 = p__33084;
var map__33085__$1 = ((((!((map__33085 == null)))?(((((map__33085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33085):map__33085);
var rc = map__33085__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33085__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info){
return (function (p1__32992_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32992_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__33002,map__33002__$1,sources,compiled,warnings,map__32995,map__32995__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__33247){
var map__33248 = p__33247;
var map__33248__$1 = ((((!((map__33248 == null)))?(((((map__33248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33248):map__33248);
var msg = map__33248__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__33250 = cljs.core.seq(updates);
var chunk__33252 = null;
var count__33253 = (0);
var i__33254 = (0);
while(true){
if((i__33254 < count__33253)){
var path = chunk__33252.cljs$core$IIndexed$_nth$arity$2(null,i__33254);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33260_33317 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33263_33318 = null;
var count__33264_33319 = (0);
var i__33265_33320 = (0);
while(true){
if((i__33265_33320 < count__33264_33319)){
var node_33323 = chunk__33263_33318.cljs$core$IIndexed$_nth$arity$2(null,i__33265_33320);
var path_match_33324 = shadow.cljs.devtools.client.browser.match_paths(node_33323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33324)){
var new_link_33327 = (function (){var G__33273 = node_33323.cloneNode(true);
G__33273.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33273;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33324], 0));

goog.dom.insertSiblingAfter(new_link_33327,node_33323);

goog.dom.removeNode(node_33323);


var G__33332 = seq__33260_33317;
var G__33333 = chunk__33263_33318;
var G__33334 = count__33264_33319;
var G__33335 = (i__33265_33320 + (1));
seq__33260_33317 = G__33332;
chunk__33263_33318 = G__33333;
count__33264_33319 = G__33334;
i__33265_33320 = G__33335;
continue;
} else {
var G__33336 = seq__33260_33317;
var G__33337 = chunk__33263_33318;
var G__33338 = count__33264_33319;
var G__33339 = (i__33265_33320 + (1));
seq__33260_33317 = G__33336;
chunk__33263_33318 = G__33337;
count__33264_33319 = G__33338;
i__33265_33320 = G__33339;
continue;
}
} else {
var temp__5457__auto___33343 = cljs.core.seq(seq__33260_33317);
if(temp__5457__auto___33343){
var seq__33260_33345__$1 = temp__5457__auto___33343;
if(cljs.core.chunked_seq_QMARK_(seq__33260_33345__$1)){
var c__4351__auto___33346 = cljs.core.chunk_first(seq__33260_33345__$1);
var G__33347 = cljs.core.chunk_rest(seq__33260_33345__$1);
var G__33348 = c__4351__auto___33346;
var G__33349 = cljs.core.count(c__4351__auto___33346);
var G__33350 = (0);
seq__33260_33317 = G__33347;
chunk__33263_33318 = G__33348;
count__33264_33319 = G__33349;
i__33265_33320 = G__33350;
continue;
} else {
var node_33354 = cljs.core.first(seq__33260_33345__$1);
var path_match_33356 = shadow.cljs.devtools.client.browser.match_paths(node_33354.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33356)){
var new_link_33359 = (function (){var G__33286 = node_33354.cloneNode(true);
G__33286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33356),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33286;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33356], 0));

goog.dom.insertSiblingAfter(new_link_33359,node_33354);

goog.dom.removeNode(node_33354);


var G__33361 = cljs.core.next(seq__33260_33345__$1);
var G__33362 = null;
var G__33363 = (0);
var G__33364 = (0);
seq__33260_33317 = G__33361;
chunk__33263_33318 = G__33362;
count__33264_33319 = G__33363;
i__33265_33320 = G__33364;
continue;
} else {
var G__33365 = cljs.core.next(seq__33260_33345__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__33260_33317 = G__33365;
chunk__33263_33318 = G__33366;
count__33264_33319 = G__33367;
i__33265_33320 = G__33368;
continue;
}
}
} else {
}
}
break;
}


var G__33369 = seq__33250;
var G__33370 = chunk__33252;
var G__33371 = count__33253;
var G__33372 = (i__33254 + (1));
seq__33250 = G__33369;
chunk__33252 = G__33370;
count__33253 = G__33371;
i__33254 = G__33372;
continue;
} else {
var G__33373 = seq__33250;
var G__33374 = chunk__33252;
var G__33375 = count__33253;
var G__33376 = (i__33254 + (1));
seq__33250 = G__33373;
chunk__33252 = G__33374;
count__33253 = G__33375;
i__33254 = G__33376;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33250);
if(temp__5457__auto__){
var seq__33250__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33250__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33250__$1);
var G__33377 = cljs.core.chunk_rest(seq__33250__$1);
var G__33378 = c__4351__auto__;
var G__33379 = cljs.core.count(c__4351__auto__);
var G__33380 = (0);
seq__33250 = G__33377;
chunk__33252 = G__33378;
count__33253 = G__33379;
i__33254 = G__33380;
continue;
} else {
var path = cljs.core.first(seq__33250__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33293_33381 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33296_33382 = null;
var count__33297_33383 = (0);
var i__33298_33384 = (0);
while(true){
if((i__33298_33384 < count__33297_33383)){
var node_33385 = chunk__33296_33382.cljs$core$IIndexed$_nth$arity$2(null,i__33298_33384);
var path_match_33386 = shadow.cljs.devtools.client.browser.match_paths(node_33385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33386)){
var new_link_33387 = (function (){var G__33307 = node_33385.cloneNode(true);
G__33307.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33307;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33386], 0));

goog.dom.insertSiblingAfter(new_link_33387,node_33385);

goog.dom.removeNode(node_33385);


var G__33388 = seq__33293_33381;
var G__33389 = chunk__33296_33382;
var G__33390 = count__33297_33383;
var G__33391 = (i__33298_33384 + (1));
seq__33293_33381 = G__33388;
chunk__33296_33382 = G__33389;
count__33297_33383 = G__33390;
i__33298_33384 = G__33391;
continue;
} else {
var G__33392 = seq__33293_33381;
var G__33393 = chunk__33296_33382;
var G__33394 = count__33297_33383;
var G__33395 = (i__33298_33384 + (1));
seq__33293_33381 = G__33392;
chunk__33296_33382 = G__33393;
count__33297_33383 = G__33394;
i__33298_33384 = G__33395;
continue;
}
} else {
var temp__5457__auto___33396__$1 = cljs.core.seq(seq__33293_33381);
if(temp__5457__auto___33396__$1){
var seq__33293_33397__$1 = temp__5457__auto___33396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33293_33397__$1)){
var c__4351__auto___33398 = cljs.core.chunk_first(seq__33293_33397__$1);
var G__33399 = cljs.core.chunk_rest(seq__33293_33397__$1);
var G__33400 = c__4351__auto___33398;
var G__33401 = cljs.core.count(c__4351__auto___33398);
var G__33402 = (0);
seq__33293_33381 = G__33399;
chunk__33296_33382 = G__33400;
count__33297_33383 = G__33401;
i__33298_33384 = G__33402;
continue;
} else {
var node_33403 = cljs.core.first(seq__33293_33397__$1);
var path_match_33404 = shadow.cljs.devtools.client.browser.match_paths(node_33403.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33404)){
var new_link_33405 = (function (){var G__33309 = node_33403.cloneNode(true);
G__33309.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33404),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33309;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33404], 0));

goog.dom.insertSiblingAfter(new_link_33405,node_33403);

goog.dom.removeNode(node_33403);


var G__33406 = cljs.core.next(seq__33293_33397__$1);
var G__33407 = null;
var G__33408 = (0);
var G__33409 = (0);
seq__33293_33381 = G__33406;
chunk__33296_33382 = G__33407;
count__33297_33383 = G__33408;
i__33298_33384 = G__33409;
continue;
} else {
var G__33410 = cljs.core.next(seq__33293_33397__$1);
var G__33411 = null;
var G__33412 = (0);
var G__33413 = (0);
seq__33293_33381 = G__33410;
chunk__33296_33382 = G__33411;
count__33297_33383 = G__33412;
i__33298_33384 = G__33413;
continue;
}
}
} else {
}
}
break;
}


var G__33414 = cljs.core.next(seq__33250__$1);
var G__33415 = null;
var G__33416 = (0);
var G__33417 = (0);
seq__33250 = G__33414;
chunk__33252 = G__33415;
count__33253 = G__33416;
i__33254 = G__33417;
continue;
} else {
var G__33418 = cljs.core.next(seq__33250__$1);
var G__33419 = null;
var G__33420 = (0);
var G__33421 = (0);
seq__33250 = G__33418;
chunk__33252 = G__33419;
count__33253 = G__33420;
i__33254 = G__33421;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__33428){
var map__33432 = p__33428;
var map__33432__$1 = ((((!((map__33432 == null)))?(((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33432):map__33432);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__33432,map__33432__$1,id,js){
return (function (){
return eval(js);
});})(map__33432,map__33432__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__33436){
var map__33437 = p__33436;
var map__33437__$1 = ((((!((map__33437 == null)))?(((((map__33437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33437):map__33437);
var msg = map__33437__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__33437,map__33437__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__33440){
var map__33441 = p__33440;
var map__33441__$1 = ((((!((map__33441 == null)))?(((((map__33441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33441):map__33441);
var src = map__33441__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33441__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__33437,map__33437__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__33437,map__33437__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__33437,map__33437__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__33450){
var map__33451 = p__33450;
var map__33451__$1 = ((((!((map__33451 == null)))?(((((map__33451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33451):map__33451);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33451__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__33451,map__33451__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__33451,map__33451__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__33463){
var map__33464 = p__33463;
var map__33464__$1 = ((((!((map__33464 == null)))?(((((map__33464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33464):map__33464);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33464__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33464__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__33469){
var map__33470 = p__33469;
var map__33470__$1 = ((((!((map__33470 == null)))?(((((map__33470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33470):map__33470);
var msg = map__33470__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33470__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__33472 = type;
var G__33472__$1 = (((G__33472 instanceof cljs.core.Keyword))?G__33472.fqn:null);
switch (G__33472__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__33480 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__33481 = ((function (G__33480){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__33480))
;
var G__33482 = "POST";
var G__33483 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__33484 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__33480,G__33481,G__33482,G__33483,G__33484);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e33486){var e = e33486;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___33495 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___33495)){
var s_33496 = temp__5457__auto___33495;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_33496.onclose = ((function (s_33496,temp__5457__auto___33495){
return (function (e){
return null;
});})(s_33496,temp__5457__auto___33495))
;

s_33496.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
