goog.provide('re_view.render_loop');
goog.require('cljs.core');
goog.require('goog.object');
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop._STAR_immediate_state_update_STAR_ !== 'undefined')){
} else {
re_view.render_loop._STAR_immediate_state_update_STAR_ = false;
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.count_fps_QMARK_ !== 'undefined')){
} else {
re_view.render_loop.count_fps_QMARK_ = false;
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.last_fps_time !== 'undefined')){
} else {
re_view.render_loop.last_fps_time = (1);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.frame_rate !== 'undefined')){
} else {
re_view.render_loop.frame_rate = (0);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.frame_count !== 'undefined')){
} else {
re_view.render_loop.frame_count = (0);
}
re_view.render_loop.count_fps_BANG_ = (function re_view$render_loop$count_fps_BANG_(enable_QMARK_){
return re_view.render_loop.count_fps_QMARK_ = enable_QMARK_;
});
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop._raf_polyfill !== 'undefined')){
} else {
re_view.render_loop._raf_polyfill = (cljs.core.truth_(typeof window !== 'undefined')?((cljs.core.not(window.requestAnimationFrame))?window.requestAnimationFrame = (function (){var or__3949__auto__ = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return ((function (or__3949__auto____$3,or__3949__auto____$2,or__3949__auto____$1,or__3949__auto__){
return (function (cb){
return setTimeout(cb,((1000) / (60)));
});
;})(or__3949__auto____$3,or__3949__auto____$2,or__3949__auto____$1,or__3949__auto__))
}
}
}
}
})():null):null);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.to_render !== 'undefined')){
} else {
re_view.render_loop.to_render = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.to_run !== 'undefined')){
} else {
re_view.render_loop.to_run = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
}
re_view.render_loop.schedule_BANG_ = (function re_view$render_loop$schedule_BANG_(f){
cljs.core._vreset_BANG_(re_view.render_loop.to_run,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(re_view.render_loop.to_run),f));

return (re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0 ? re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0() : re_view.render_loop.request_render.call(null));
});
re_view.render_loop.force_update_caught = (function re_view$render_loop$force_update_caught(this$){
if((this$["unmounted"]) === true){
return null;
} else {
try{return this$.forceUpdate();
}catch (e32827){if((e32827 instanceof Error)){
var e = e32827;
var temp__5455__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5455__auto__)){
var catch_fn = temp__5455__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e32827;

}
}}
});
re_view.render_loop.force_update_BANG_ = (function re_view$render_loop$force_update_BANG_(this$){
cljs.core._vreset_BANG_(re_view.render_loop.to_render,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(re_view.render_loop.to_render),this$));

return re_view.render_loop.force_update_caught(this$);
});
re_view.render_loop.force_update = (function re_view$render_loop$force_update(this$){
if(re_view.render_loop._STAR_immediate_state_update_STAR_ === true){
return re_view.render_loop.force_update_BANG_(this$);
} else {
cljs.core._vreset_BANG_(re_view.render_loop.to_render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(re_view.render_loop.to_render),this$));

return (re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0 ? re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0() : re_view.render_loop.request_render.call(null));
}
});
re_view.render_loop.flush_BANG_ = (function re_view$render_loop$flush_BANG_(){
if(cljs.core.empty_QMARK_(cljs.core.deref(re_view.render_loop.to_render))){
} else {
var components_32871 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__32848_32872 = cljs.core.seq(components_32871);
var chunk__32849_32873 = null;
var count__32851_32874 = (0);
var i__32852_32875 = (0);
while(true){
if((i__32852_32875 < count__32851_32874)){
var c_32880 = chunk__32849_32873.cljs$core$IIndexed$_nth$arity$2(null,i__32852_32875);
re_view.render_loop.force_update_caught(c_32880);


var G__32883 = seq__32848_32872;
var G__32884 = chunk__32849_32873;
var G__32885 = count__32851_32874;
var G__32886 = (i__32852_32875 + (1));
seq__32848_32872 = G__32883;
chunk__32849_32873 = G__32884;
count__32851_32874 = G__32885;
i__32852_32875 = G__32886;
continue;
} else {
var temp__5457__auto___32887 = cljs.core.seq(seq__32848_32872);
if(temp__5457__auto___32887){
var seq__32848_32889__$1 = temp__5457__auto___32887;
if(cljs.core.chunked_seq_QMARK_(seq__32848_32889__$1)){
var c__4351__auto___32893 = cljs.core.chunk_first(seq__32848_32889__$1);
var G__32895 = cljs.core.chunk_rest(seq__32848_32889__$1);
var G__32896 = c__4351__auto___32893;
var G__32897 = cljs.core.count(c__4351__auto___32893);
var G__32898 = (0);
seq__32848_32872 = G__32895;
chunk__32849_32873 = G__32896;
count__32851_32874 = G__32897;
i__32852_32875 = G__32898;
continue;
} else {
var c_32899 = cljs.core.first(seq__32848_32889__$1);
re_view.render_loop.force_update_caught(c_32899);


var G__32901 = cljs.core.next(seq__32848_32889__$1);
var G__32902 = null;
var G__32903 = (0);
var G__32904 = (0);
seq__32848_32872 = G__32901;
chunk__32849_32873 = G__32902;
count__32851_32874 = G__32903;
i__32852_32875 = G__32904;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.empty_QMARK_(cljs.core.deref(re_view.render_loop.to_run))){
return null;
} else {
var fns = cljs.core.deref(re_view.render_loop.to_run);
cljs.core.vreset_BANG_(re_view.render_loop.to_run,cljs.core.PersistentVector.EMPTY);

var seq__32862 = cljs.core.seq(fns);
var chunk__32863 = null;
var count__32864 = (0);
var i__32865 = (0);
while(true){
if((i__32865 < count__32864)){
var f = chunk__32863.cljs$core$IIndexed$_nth$arity$2(null,i__32865);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32914 = seq__32862;
var G__32915 = chunk__32863;
var G__32916 = count__32864;
var G__32917 = (i__32865 + (1));
seq__32862 = G__32914;
chunk__32863 = G__32915;
count__32864 = G__32916;
i__32865 = G__32917;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32862);
if(temp__5457__auto__){
var seq__32862__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32862__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__32862__$1);
var G__32923 = cljs.core.chunk_rest(seq__32862__$1);
var G__32924 = c__4351__auto__;
var G__32925 = cljs.core.count(c__4351__auto__);
var G__32926 = (0);
seq__32862 = G__32923;
chunk__32863 = G__32924;
count__32864 = G__32925;
i__32865 = G__32926;
continue;
} else {
var f = cljs.core.first(seq__32862__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32932 = cljs.core.next(seq__32862__$1);
var G__32933 = null;
var G__32934 = (0);
var G__32935 = (0);
seq__32862 = G__32932;
chunk__32863 = G__32933;
count__32864 = G__32934;
i__32865 = G__32935;
continue;
}
} else {
return null;
}
}
break;
}
}
});
re_view.render_loop.render_loop = (function re_view$render_loop$render_loop(frame_ms){
re_view.render_loop.frame_count = (re_view.render_loop.frame_count + (1));

if(((re_view.render_loop.count_fps_QMARK_ === true) && (((0) === cljs.core.mod(re_view.render_loop.frame_count,(29)))))){
re_view.render_loop.frame_rate = ((1000) * ((30) / (frame_ms - re_view.render_loop.last_fps_time)));

re_view.render_loop.last_fps_time = frame_ms;
} else {
}

return re_view.render_loop.flush_BANG_();
});
re_view.render_loop.request_render = (function re_view$render_loop$request_render(){
return requestAnimationFrame(re_view.render_loop.render_loop);
});
/**
 * Wraps function `f` to flush the render loop before returning.
 */
re_view.render_loop.apply_sync_BANG_ = (function re_view$render_loop$apply_sync_BANG_(f){
return (function() { 
var G__32954__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__32954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32955__i = 0, G__32955__a = new Array(arguments.length -  0);
while (G__32955__i < G__32955__a.length) {G__32955__a[G__32955__i] = arguments[G__32955__i + 0]; ++G__32955__i;}
  args = new cljs.core.IndexedSeq(G__32955__a,0,null);
} 
return G__32954__delegate.call(this,args);};
G__32954.cljs$lang$maxFixedArity = 0;
G__32954.cljs$lang$applyTo = (function (arglist__32956){
var args = cljs.core.seq(arglist__32956);
return G__32954__delegate(args);
});
G__32954.cljs$core$IFn$_invoke$arity$variadic = G__32954__delegate;
return G__32954;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
