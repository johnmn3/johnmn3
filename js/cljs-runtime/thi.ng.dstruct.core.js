goog.provide('thi.ng.dstruct.core');
goog.require('cljs.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__5455__auto__)){
var tt = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__5455__auto__)){
var tt = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__5455__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__34593 = temp__5455__auto__;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(0),null);
var vv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34593,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.createAsIfByAssoc([v]));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var vv = temp__5455__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.createAsIfByAssoc([v]));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var G__34613 = arguments.length;
switch (G__34613) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34610_SHARP_,p2__34611_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__34610_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__34611_SHARP_) : f.call(null,p2__34611_SHARP_)));
}),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v)));
});

thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__34618_SHARP_,p2__34619_SHARP_){
if((p1__34618_SHARP_ == null)){
return p2__34619_SHARP_;
} else {
if(cljs.core.set_QMARK_(p1__34618_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__34618_SHARP_,p2__34619_SHARP_);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([p1__34618_SHARP_,p2__34619_SHARP_]);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__34624_SHARP_,p2__34625_SHARP_){
if((p1__34624_SHARP_ == null)){
return p2__34625_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__34624_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__34624_SHARP_,p2__34625_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34624_SHARP_,p2__34625_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set(f,coll);
return cljs.core.zipmap(keys,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.identity))?keys:cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,keys)));
});
thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34643 = arguments.length;
var i__4532__auto___34644 = (0);
while(true){
if((i__4532__auto___34644 < len__4531__auto___34643)){
args__4534__auto__.push((arguments[i__4532__auto___34644]));

var G__34645 = (i__4532__auto___34644 + (1));
i__4532__auto___34644 = G__34645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1((0)) : v.call(null,(0))),((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1((1)) : v.call(null,(1))) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ivals], 0)));
});

thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq34639){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34639));
});

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34674 = arguments.length;
var i__4532__auto___34675 = (0);
while(true){
if((i__4532__auto___34675 < len__4531__auto___34674)){
args__4534__auto__.push((arguments[i__4532__auto___34675]));

var G__34676 = (i__4532__auto___34675 + (1));
i__4532__auto___34675 = G__34676;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__34653 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34656,v){
var vec__34657 = p__34656;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34657,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34657,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34653,(0),null);
var const$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34653,(1),null);
return ((function (vec__34653,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_((const$.cljs$core$IFn$_invoke$arity$1 ? const$.cljs$core$IFn$_invoke$arity$1(x) : const$.call(null,x)))){
return x;
} else {
return cljs.core.some(((function (vec__34653,ivals__$1,const$){
return (function (p__34661){
var vec__34662 = p__34661;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34662,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34662,(1),null);
return (((a <= x)) && ((x <= b)));
});})(vec__34653,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__34653,ivals__$1,const$))
});

thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq34648){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34648));
});

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34707 = arguments.length;
var i__4532__auto___34708 = (0);
while(true){
if((i__4532__auto___34708 < len__4531__auto___34707)){
args__4534__auto__.push((arguments[i__4532__auto___34708]));

var G__34709 = (i__4532__auto___34708 + (1));
i__4532__auto___34708 = G__34709;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$dstruct$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__34713 = (i - (1));
var G__34714 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__34713;
v_seqs__$2 = G__34714;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$dstruct$core$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq34701){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34701));
});

/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,node);
} else {
if(cljs.core.coll_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(walk,cljs.core.PersistentVector.EMPTY,root);
});
thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var G__34723 = arguments.length;
switch (G__34723) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__34725 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34728,v){
var vec__34733 = p__34728;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(1),null);
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(m),cljs.core.persistent_BANG_(n)], null);
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
var vec__34739 = thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2(f,coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(m) : f2.call(null,m)),(f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(n) : f2.call(null,n))], null);
});

thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count(coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i) : coll.call(null,i)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34760 = (((i > (0)))?(i - (1)):n);
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__34760) : coll.call(null,G__34760));
})(),(function (){var G__34761 = (((i < n))?(i + (1)):(0));
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(G__34761) : coll.call(null,G__34761));
})()], null);
} else {
var G__34775 = (i - (1));
i = G__34775;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 *   a successive elements of the original collection.
 * 
 *    (successive-nth 3 [1 2 3 4])
 *    => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.dstruct.core.successive_nth = (function thi$ng$dstruct$core$successive_nth(var_args){
var G__34782 = arguments.length;
switch (G__34782) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$lang$maxFixedArity = 3;

/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 *   a vector of `n` successive elements of the original collection and
 *   an sequence index.
 * 
 *    (successive-nth-indexed 2 [10 20 30 40])
 *    => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.dstruct.core.successive_nth_indexed = (function thi$ng$dstruct$core$successive_nth_indexed(var_args){
var G__34825 = arguments.length;
switch (G__34825) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(0),coll);
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(idx + (1)),cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;

/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.dstruct.core.apply_to_keys = (function thi$ng$dstruct$core$apply_to_keys(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34846 = arguments.length;
var i__4532__auto___34851 = (0);
while(true){
if((i__4532__auto___34851 < len__4531__auto___34846)){
args__4534__auto__.push((arguments[i__4532__auto___34851]));

var G__34854 = (i__4532__auto___34851 + (1));
i__4532__auto___34851 = G__34854;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(type,k),args));
}),type,keys);
});

thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq34838){
var G__34839 = cljs.core.first(seq34838);
var seq34838__$1 = cljs.core.next(seq34838);
var G__34840 = cljs.core.first(seq34838__$1);
var seq34838__$2 = cljs.core.next(seq34838__$1);
var G__34841 = cljs.core.first(seq34838__$2);
var seq34838__$3 = cljs.core.next(seq34838__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34839,G__34840,G__34841,seq34838__$3);
});

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var G__34861 = arguments.length;
switch (G__34861) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4(f1,f2,null,coll);
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count(coll) > (1))){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34864){
var vec__34865 = p__34864;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34865,(1),null);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(a,b) : f2.call(null,a,b));
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f1,acc,pairs);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f1,pairs);
}
} else {
return null;
}
});

thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4;

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.sequential_QMARK_(head))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,s):cljs.core.cons(head,s)),((cljs.core.sequential_QMARK_(tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,(0),n));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,xs),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(coll__$1))){
return i;
} else {
var G__34899 = (i + (1));
var G__34900 = cljs.core.next(coll__$1);
i = G__34899;
coll__$1 = G__34900;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 *   If `coll` is a vector, the new collection is created with `subvec`.
 *   Returns original coll if item isn't found.
 */
thi.ng.dstruct.core.all_after = (function thi$ng$dstruct$core$all_after(item,coll){
var idx = (thi.ng.dstruct.core.index_of(coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,idx);
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.cons(x,(function (){var G__34927 = pred;
var G__34928 = f;
var G__34929 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3 ? thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3(G__34927,G__34928,G__34929) : thi.ng.dstruct.core.iterate_while.call(null,G__34927,G__34928,G__34929));
})());
} else {
return null;
}
}),null,null));
});
thi.ng.dstruct.core.iterate_n = (function thi$ng$dstruct$core$iterate_n(n,f,x){
return cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(f,x)));
});
thi.ng.dstruct.core.unwrap_string = (function thi$ng$dstruct$core$unwrap_string(s,n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,n,(cljs.core.count(s) - n));
});
thi.ng.dstruct.core.wrap = (function thi$ng$dstruct$core$wrap(a,b,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34936){
var vec__34937 = p__34936;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(1),null);
var e = vec__34937;
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return e;
}
}),m));
});
/**
 * Takes a keyword or string and string/seq of items, returns map with
 *   items as keys and boolean values indicating if an item has been
 *   found in the string representation of the kw. If `kw` is nil, returns
 *   nil.
 * 
 *    (demunge-flags :cad "abcd")
 *    #_=> {:a true :b false :c true :d true}
 */
thi.ng.dstruct.core.demunge_flags = (function thi$ng$dstruct$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 *    (demunge-flags-seq :cad "abcd")
 *    #_=> [true false true true]
 */
thi.ng.dstruct.core.demunge_flags_seq = (function thi$ng$dstruct$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (flags){
return (function (p1__34954_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34954_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});

//# sourceMappingURL=thi.ng.dstruct.core.js.map
