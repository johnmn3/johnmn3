goog.provide('re_view.util');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('re_db.d');
/**
 * Return camelCased string, eg. hello-there to helloThere. Does not modify existing case.
 */
re_view.util.camelCase = cljs.core.memoize((function (s){
return clojure.string.replace(cljs.core.name(s),/-(.)/,(function (p__33424){
var vec__33425 = p__33424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33425,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33425,(1),null);
return clojure.string.upper_case(match);
}));
}));
re_view.util.update_attrs = (function re_view$util$update_attrs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33434 = arguments.length;
var i__4532__auto___33435 = (0);
while(true){
if((i__4532__auto___33435 < len__4531__auto___33434)){
args__4534__auto__.push((arguments[i__4532__auto___33435]));

var G__33438 = (i__4532__auto___33435 + (1));
i__4532__auto___33435 = G__33438;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (el,f,args){
if(!(cljs.core.vector_QMARK_(el))){
return el;
} else {
var attrs_QMARK_ = cljs.core.map_QMARK_(cljs.core.second(el));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(el.cljs$core$IFn$_invoke$arity$1 ? el.cljs$core$IFn$_invoke$arity$1((0)) : el.call(null,(0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,((attrs_QMARK_)?(el.cljs$core$IFn$_invoke$arity$1 ? el.cljs$core$IFn$_invoke$arity$1((1)) : el.call(null,(1))):cljs.core.PersistentArrayMap.EMPTY),args)], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(el,((attrs_QMARK_)?(2):(1))));
}
});

re_view.util.update_attrs.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_view.util.update_attrs.cljs$lang$applyTo = (function (seq33429){
var G__33430 = cljs.core.first(seq33429);
var seq33429__$1 = cljs.core.next(seq33429);
var G__33431 = cljs.core.first(seq33429__$1);
var seq33429__$2 = cljs.core.next(seq33429__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33430,G__33431,seq33429__$2);
});

re_view.util.ensure_keys = (function re_view$util$ensure_keys(forms){
var seen = cljs.core.PersistentHashSet.EMPTY;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (seen){
return (function (p1__33444_SHARP_,p2__33443_SHARP_){
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic(p2__33443_SHARP_,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),((function (seen){
return (function (k){
if((((k == null)) || (cljs.core.contains_QMARK_(seen,k)))){
return p1__33444_SHARP_;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,k);

return k;
}
});})(seen))
], 0));
});})(seen))
,forms);
});
re_view.util.map_with_keys = (function re_view$util$map_with_keys(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33446 = arguments.length;
var i__4532__auto___33447 = (0);
while(true){
if((i__4532__auto___33447 < len__4531__auto___33446)){
args__4534__auto__.push((arguments[i__4532__auto___33447]));

var G__33448 = (i__4532__auto___33447 + (1));
i__4532__auto___33447 = G__33448;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_view.util.map_with_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_view.util.map_with_keys.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_view.util.ensure_keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,args));
});

re_view.util.map_with_keys.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.util.map_with_keys.cljs$lang$applyTo = (function (seq33445){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33445));
});

/**
 * Evaluate fns sequentially, stopping if any return true.
 */
re_view.util.any_pred = (function re_view$util$any_pred(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33455 = arguments.length;
var i__4532__auto___33456 = (0);
while(true){
if((i__4532__auto___33456 < len__4531__auto___33455)){
args__4534__auto__.push((arguments[i__4532__auto___33456]));

var G__33457 = (i__4532__auto___33456 + (1));
i__4532__auto___33456 = G__33457;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function (this$){
var fns__$1 = fns;
while(true){
if(cljs.core.empty_QMARK_(fns__$1)){
return false;
} else {
var or__3949__auto__ = (function (){var fexpr__33454 = cljs.core.first(fns__$1);
return (fexpr__33454.cljs$core$IFn$_invoke$arity$1 ? fexpr__33454.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__33454.call(null,this$));
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__33462 = cljs.core.rest(fns__$1);
fns__$1 = G__33462;
continue;
}
}
break;
}
});
});

re_view.util.any_pred.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.util.any_pred.cljs$lang$applyTo = (function (seq33449){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33449));
});

re_view.util.is_react_element_QMARK_ = (function re_view$util$is_react_element_QMARK_(x){
var and__3938__auto__ = x;
if(cljs.core.truth_(and__3938__auto__)){
return module$node_modules$react$index.isValidElement(x);
} else {
return and__3938__auto__;
}
});
/**
 * Flatten collection, only unwrap sequences
 */
re_view.util.flatten_seqs = (function re_view$util$flatten_seqs(children){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33468_SHARP_){
return !(cljs.core.seq_QMARK_(p1__33468_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.seq_QMARK_,cljs.core.seq,children)));
});
re_view.util.parse_opt_args = (function re_view$util$parse_opt_args(preds,args){
var preds__$1 = preds;
var args__$1 = args;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(preds__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,args__$1);
} else {
var match_QMARK_ = (function (){var G__33474 = cljs.core.first(args__$1);
var fexpr__33473 = cljs.core.first(preds__$1);
return (fexpr__33473.cljs$core$IFn$_invoke$arity$1 ? fexpr__33473.cljs$core$IFn$_invoke$arity$1(G__33474) : fexpr__33473.call(null,G__33474));
})();
var G__33477 = cljs.core.rest(preds__$1);
var G__33478 = (function (){var G__33475 = args__$1;
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.rest(G__33475);
} else {
return G__33475;
}
})();
var G__33479 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cljs.core.truth_(match_QMARK_)?cljs.core.first(args__$1):null));
preds__$1 = G__33477;
args__$1 = G__33478;
out = G__33479;
continue;
}
break;
}
});

//# sourceMappingURL=re_view.util.js.map
