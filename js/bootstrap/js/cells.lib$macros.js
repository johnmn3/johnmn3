goog.provide('cells.lib$macros');
goog.require('cljs.core');
var ret__4565__auto___18504 = (function (){
/**
 * Returns cell with body wrapped in timeout of n milliseconds.
 */
cells.lib$macros.wait = (function cells$lib$macros$wait(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18505 = arguments.length;
var i__4532__auto___18506 = (0);
while(true){
if((i__4532__auto___18506 < len__4531__auto___18505)){
args__4534__auto__.push((arguments[i__4532__auto___18506]));

var G__18507 = (i__4532__auto___18506 + (1));
i__4532__auto___18506 = G__18507;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cells.lib$macros.wait.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cells.lib$macros.wait.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.lib","timeout","cells.lib/timeout",-1464887735,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
});

cells.lib$macros.wait.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cells.lib$macros.wait.cljs$lang$applyTo = (function (seq18500){
var G__18501 = cljs.core.first(seq18500);
var seq18500__$1 = cljs.core.next(seq18500);
var G__18502 = cljs.core.first(seq18500__$1);
var seq18500__$2 = cljs.core.next(seq18500__$1);
var G__18503 = cljs.core.first(seq18500__$2);
var seq18500__$3 = cljs.core.next(seq18500__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18501,G__18502,G__18503,seq18500__$3);
});

return null;
})()
;
cells.lib$macros.wait.cljs$lang$macro = true;


//# sourceMappingURL=cells.lib$macros.js.map
