goog.provide('cljs.reader$macros');
goog.require('cljs.core');
goog.require('cljs.env');
var ret__4565__auto___18976 = cljs.reader$macros.add_data_readers = (function cljs$reader$macros$add_data_readers(_AMPERSAND_form,_AMPERSAND_env,default_readers){
var data_readers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18972){
var vec__18973 = p__18972;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__18971__auto__","x__18971__auto__",1254124634,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__18971__auto__","x__18971__auto__",1254124634,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","data-readers","cljs.analyzer/data-readers",1778544933))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","merge","clojure.core/merge",-1005031633,null),null,(1),null)),(new cljs.core.List(null,default_readers,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,data_readers,null,(1),null))], 0)))),null,(1),null)))));
});
cljs.reader$macros.add_data_readers.cljs$lang$macro = true;


//# sourceMappingURL=cljs.reader$macros.js.map
