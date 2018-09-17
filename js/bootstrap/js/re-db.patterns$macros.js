goog.provide('re_db.patterns$macros');
goog.require('cljs.core');
var ret__4565__auto___18665 = (function (){
/**
 * Evaluates body, returning map with evaluation result and read patterns.
 */
re_db.patterns$macros.capture_patterns = (function re_db$patterns$macros$capture_patterns(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18666 = arguments.length;
var i__4532__auto___18667 = (0);
while(true){
if((i__4532__auto___18667 < len__4531__auto___18666)){
args__4534__auto__.push((arguments[i__4532__auto___18667]));

var G__18668 = (i__4532__auto___18667 + (1));
i__4532__auto___18667 = G__18668;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_db.patterns$macros.capture_patterns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_db.patterns$macros.capture_patterns.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.patterns","*pattern-log*","re-db.patterns/*pattern-log*",1198888530,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"value__18651__auto__","value__18651__auto__",1127460293,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"tx-report__18652__auto__","tx-report__18652__auto__",1635977895,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","db-log","re-db.core/db-log",-2129235416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"patterns__18653__auto__","patterns__18653__auto__",587454400,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-db.patterns","*pattern-log*","re-db.patterns/*pattern-log*",1198888530,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","notify-listeners","re-db.core/notify-listeners",1121877296,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tx-report__18652__auto__","tx-report__18652__auto__",1635977895,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18651__auto__","value__18651__auto__",1127460293,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"patterns__18653__auto__","patterns__18653__auto__",587454400,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

re_db.patterns$macros.capture_patterns.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_db.patterns$macros.capture_patterns.cljs$lang$applyTo = (function (seq18654){
var G__18655 = cljs.core.first(seq18654);
var seq18654__$1 = cljs.core.next(seq18654);
var G__18656 = cljs.core.first(seq18654__$1);
var seq18654__$2 = cljs.core.next(seq18654__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18655,G__18656,seq18654__$2);
});

return null;
})()
;
re_db.patterns$macros.capture_patterns.cljs$lang$macro = true;


//# sourceMappingURL=re-db.patterns$macros.js.map
