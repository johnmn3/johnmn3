goog.provide('cells.cell$macros');
goog.require('cljs.core');
goog.require('cells.util');
cells.cell$macros.lib_bindings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bindings,sym){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)),sym], null));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cells.lib","interval","cells.lib/interval",565835640,null),new cljs.core.Symbol("cells.lib","timeout","cells.lib/timeout",-1464887735,null),new cljs.core.Symbol("cells.lib","fetch","cells.lib/fetch",-2089843221,null)], null));
var ret__4565__auto___18493 = (function (){
/**
 * Defines a named cell.
 */
cells.cell$macros.defcell = (function cells$cell$macros$defcell(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18496 = arguments.length;
var i__4532__auto___18497 = (0);
while(true){
if((i__4532__auto___18497 < len__4531__auto___18496)){
args__4534__auto__.push((arguments[i__4532__auto___18497]));

var G__18498 = (i__4532__auto___18497 + (1));
i__4532__auto___18497 = G__18498;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cells.cell$macros.defcell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cells.cell$macros.defcell.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,the_name,body){
var vec__18490 = ((typeof cljs.core.first(body) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(body),cljs.core.rest(body)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18490,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18490,(1),null);
var cell_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_name)].join(''));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,the_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(docstring)?(new cljs.core.List(null,docstring,null,(1),null)):null),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cells.cell$macros.lib_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.cell","cell*","cells.cell/cell*",-1063264127,null),null,(1),null)),(new cljs.core.List(null,cell_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"self","self",93102628,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cells.cell$macros.defcell.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cells.cell$macros.defcell.cljs$lang$applyTo = (function (seq18486){
var G__18487 = cljs.core.first(seq18486);
var seq18486__$1 = cljs.core.next(seq18486);
var G__18488 = cljs.core.first(seq18486__$1);
var seq18486__$2 = cljs.core.next(seq18486__$1);
var G__18489 = cljs.core.first(seq18486__$2);
var seq18486__$3 = cljs.core.next(seq18486__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18487,G__18488,G__18489,seq18486__$3);
});

return null;
})()
;
cells.cell$macros.defcell.cljs$lang$macro = true;

/**
 * Construct a cell-name, incorporating the runtime-value of `key` if provided.
 */
cells.cell$macros.cell_name = (function cells$cell$macros$cell_name(key){
var uuid = ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.util.unique_id())].join('');
var namespace_segment = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join('');
if(cljs.core.truth_(key)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","keyword","clojure.core/keyword",-535102189,null),null,(1),null)),(new cljs.core.List(null,namespace_segment,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","str","clojure.core/str",-1801552045,null),null,(1),null)),(new cljs.core.List(null,uuid,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"._",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","hash","clojure.core/hash",1317758800,null),null,(1),null)),(new cljs.core.List(null,key,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(namespace_segment,uuid);
}
});
var ret__4565__auto___18526 = (function (){
/**
 * Returns an anonymous cell. Only one cell will be returned per lexical instance of `cell`,
 *   unless a unique `key` is provided. Helper functions in `lib-bindings` (eg. interval) are
 *   hoisted into scope, as is `self`, which refers to the current cell.
 */
cells.cell$macros.cell = (function cells$cell$macros$cell(var_args){
var G__18515 = arguments.length;
switch (G__18515) {
case 3:
return cells.cell$macros.cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cells.cell$macros.cell.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cells.cell$macros.cell.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.cell","cell","cells.cell/cell",1843097732,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0))));
});

cells.cell$macros.cell.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,key,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cells.cell$macros.lib_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.cell","cell*","cells.cell/cell*",-1063264127,null),null,(1),null)),(new cljs.core.List(null,cells.cell$macros.cell_name(key),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"self","self",93102628,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cells.cell$macros.cell.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cells.cell$macros.cell.cljs$lang$macro = true;

var ret__4565__auto___18567 = (function (){
/**
 * Returns an anonymous function which will evaluate with the current cell in the stack.
 *   Similar to Clojure's `bound-fn`, but only cares about the currently bound cell.
 */
cells.cell$macros.cell_fn = (function cells$cell$macros$cell_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18569 = arguments.length;
var i__4532__auto___18570 = (0);
while(true){
if((i__4532__auto___18570 < len__4531__auto___18569)){
args__4534__auto__.push((arguments[i__4532__auto___18570]));

var G__18571 = (i__4532__auto___18570 + (1));
i__4532__auto___18570 = G__18571;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return cells.cell$macros.cell_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

cells.cell$macros.cell_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"the-cell__18549__auto__","the-cell__18549__auto__",-624899611,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","first","clojure.core/first",-716493206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cells.cell","*cell-stack*","cells.cell/*cell-stack*",-1963501134,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"context__18550__auto__","context__18550__auto__",1155412672,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cells.cell","*eval-context*","cells.cell/*eval-context*",-1673556093,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__18551__auto__","args__18551__auto__",-885425437,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cells.cell","*cell-stack*","cells.cell/*cell-stack*",-1963501134,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","cons","clojure.core/cons",534945327,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"the-cell__18549__auto__","the-cell__18549__auto__",-624899611,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cells.cell","*cell-stack*","cells.cell/*cell-stack*",-1963501134,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__18551__auto__","args__18551__auto__",-885425437,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"error__18552__auto__","error__18552__auto__",-742915108,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.eval-context","handle-error","cells.eval-context/handle-error",1126198856,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"context__18550__auto__","context__18550__auto__",1155412672,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"error__18552__auto__","error__18552__auto__",-742915108,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cells.cell$macros.cell_fn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cells.cell$macros.cell_fn.cljs$lang$applyTo = (function (seq18554){
var G__18555 = cljs.core.first(seq18554);
var seq18554__$1 = cljs.core.next(seq18554);
var G__18556 = cljs.core.first(seq18554__$1);
var seq18554__$2 = cljs.core.next(seq18554__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18555,G__18556,seq18554__$2);
});

return null;
})()
;
cells.cell$macros.cell_fn.cljs$lang$macro = true;


//# sourceMappingURL=cells.cell$macros.js.map
