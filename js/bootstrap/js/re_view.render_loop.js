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
}catch (e15499){if((e15499 instanceof Error)){
var e = e15499;
var temp__5455__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5455__auto__)){
var catch_fn = temp__5455__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e15499;

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
var components_15522 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__15508_15525 = cljs.core.seq(components_15522);
var chunk__15509_15526 = null;
var count__15510_15527 = (0);
var i__15511_15528 = (0);
while(true){
if((i__15511_15528 < count__15510_15527)){
var c_15534 = chunk__15509_15526.cljs$core$IIndexed$_nth$arity$2(null,i__15511_15528);
re_view.render_loop.force_update_caught(c_15534);


var G__15536 = seq__15508_15525;
var G__15537 = chunk__15509_15526;
var G__15538 = count__15510_15527;
var G__15539 = (i__15511_15528 + (1));
seq__15508_15525 = G__15536;
chunk__15509_15526 = G__15537;
count__15510_15527 = G__15538;
i__15511_15528 = G__15539;
continue;
} else {
var temp__5457__auto___15540 = cljs.core.seq(seq__15508_15525);
if(temp__5457__auto___15540){
var seq__15508_15542__$1 = temp__5457__auto___15540;
if(cljs.core.chunked_seq_QMARK_(seq__15508_15542__$1)){
var c__4351__auto___15544 = cljs.core.chunk_first(seq__15508_15542__$1);
var G__15545 = cljs.core.chunk_rest(seq__15508_15542__$1);
var G__15546 = c__4351__auto___15544;
var G__15547 = cljs.core.count(c__4351__auto___15544);
var G__15548 = (0);
seq__15508_15525 = G__15545;
chunk__15509_15526 = G__15546;
count__15510_15527 = G__15547;
i__15511_15528 = G__15548;
continue;
} else {
var c_15550 = cljs.core.first(seq__15508_15542__$1);
re_view.render_loop.force_update_caught(c_15550);


var G__15552 = cljs.core.next(seq__15508_15542__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__15508_15525 = G__15552;
chunk__15509_15526 = G__15553;
count__15510_15527 = G__15554;
i__15511_15528 = G__15555;
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

var seq__15516 = cljs.core.seq(fns);
var chunk__15517 = null;
var count__15518 = (0);
var i__15519 = (0);
while(true){
if((i__15519 < count__15518)){
var f = chunk__15517.cljs$core$IIndexed$_nth$arity$2(null,i__15519);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__15561 = seq__15516;
var G__15562 = chunk__15517;
var G__15563 = count__15518;
var G__15564 = (i__15519 + (1));
seq__15516 = G__15561;
chunk__15517 = G__15562;
count__15518 = G__15563;
i__15519 = G__15564;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15516);
if(temp__5457__auto__){
var seq__15516__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15516__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15516__$1);
var G__15572 = cljs.core.chunk_rest(seq__15516__$1);
var G__15573 = c__4351__auto__;
var G__15574 = cljs.core.count(c__4351__auto__);
var G__15575 = (0);
seq__15516 = G__15572;
chunk__15517 = G__15573;
count__15518 = G__15574;
i__15519 = G__15575;
continue;
} else {
var f = cljs.core.first(seq__15516__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__15577 = cljs.core.next(seq__15516__$1);
var G__15578 = null;
var G__15579 = (0);
var G__15580 = (0);
seq__15516 = G__15577;
chunk__15517 = G__15578;
count__15518 = G__15579;
i__15519 = G__15580;
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
var G__15592__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__15592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15593__i = 0, G__15593__a = new Array(arguments.length -  0);
while (G__15593__i < G__15593__a.length) {G__15593__a[G__15593__i] = arguments[G__15593__i + 0]; ++G__15593__i;}
  args = new cljs.core.IndexedSeq(G__15593__a,0,null);
} 
return G__15592__delegate.call(this,args);};
G__15592.cljs$lang$maxFixedArity = 0;
G__15592.cljs$lang$applyTo = (function (arglist__15594){
var args = cljs.core.seq(arglist__15594);
return G__15592__delegate(args);
});
G__15592.cljs$core$IFn$_invoke$arity$variadic = G__15592__delegate;
return G__15592;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
