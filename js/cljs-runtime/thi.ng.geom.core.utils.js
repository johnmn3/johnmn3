goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
goog.require('clojure.core.reducers');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a);
return (thi.ng.geom.core.dot(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,a),d) / thi.ng.geom.core.mag_squared(d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.core.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38884_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.closest_point_on_segment,p,p1__38884_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b2,a2);
if(cljs.core.not(thi.ng.geom.core.vector.V3.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b1,a1);
if(cljs.core.not(thi.ng.geom.core.vector.V3.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(a1,a2);
var d1343 = thi.ng.geom.core.dot(p13,p43);
var d4321 = thi.ng.geom.core.dot(p43,p21);
var d1321 = thi.ng.geom.core.dot(p13,p21);
var d4343 = thi.ng.geom.core.dot(p43,p43);
var d2121 = thi.ng.geom.core.dot(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.geom.core.madd(p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.geom.core.madd(p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
var G__38886 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38885_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__38885_SHARP_);
})),rf,(0),points);
return Math.sqrt(G__38886);
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38887_SHARP_){
return thi.ng.geom.core.dist((p1__38887_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38887_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__38887_SHARP_.call(null,(0))),(p1__38887_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38887_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__38887_SHARP_.call(null,(1))));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__38888){
var vec__38889 = p__38888;
var seq__38890 = cljs.core.seq(vec__38889);
var first__38891 = cljs.core.first(seq__38890);
var seq__38890__$1 = cljs.core.next(seq__38890);
var x = first__38891;
var xs = seq__38890__$1;
var coll = vec__38889;
var G__38892 = cljs.core.count(coll);
switch (G__38892) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(xs));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = ((function (s,G__38892,vec__38889,seq__38890,first__38891,seq__38890__$1,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__38892,vec__38889,seq__38890,first__38891,seq__38890__$1,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4(x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(var_args){
var G__38896 = arguments.length;
switch (G__38896) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (d){
return (function (p1__38894_SHARP_){
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__38894_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(var_args){
var G__38900 = arguments.length;
switch (G__38900) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),s,coll);
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38898_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p1__38898_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__38902){
var vec__38903 = p__38902;
var seq__38904 = cljs.core.seq(vec__38903);
var first__38905 = cljs.core.first(seq__38904);
var seq__38904__$1 = cljs.core.next(seq__38904);
var x = first__38905;
var xs = seq__38904__$1;
var coll = vec__38903;
var c = cljs.core.count(coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q,p)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(c) : ctor.call(null,c)),((cljs.core.coll_QMARK_(r_or_points))?(thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.core.utils.max_dist.cljs$core$IFn$_invoke$arity$2(c,r_or_points) : thi.ng.geom.core.utils.max_dist.call(null,c,r_or_points)):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38906_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38906_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.core.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__38907_SHARP_){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__38907_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)))){
var G__38908 = (i__$1 + (1));
i__$1 = G__38908;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i1) : idx.call(null,i1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(var_args){
var G__38910 = arguments.length;
switch (G__38910) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__3949__auto__ = idx;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.core.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__38912 = thi.ng.geom.core.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38912,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38912,(1),null);
var G__38915 = (t + delta);
var G__38916 = (i__$1 | (0));
var G__38917 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__38915;
i = G__38916;
acc = G__38917;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__4324__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__38918(s__38919){
return (new cljs.core.LazySeq(null,(function (){
var s__38919__$1 = s__38919;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__38919__$1);
if(temp__5457__auto__){
var s__38919__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38919__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__38919__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__38921 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__38920 = (0);
while(true){
if((i__38920 < size__4323__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__38920);
cljs.core.chunk_append(b__38921,thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t));

var G__38922 = (i__38920 + (1));
i__38920 = G__38922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38921),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__38918(cljs.core.chunk_rest(s__38919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38921),null);
}
} else {
var t = cljs.core.first(s__38919__$2);
return cljs.core.cons(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__38918(cljs.core.rest(s__38919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(thi.ng.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__38923,p__38924){
var vec__38925 = p__38923;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38925,(3),null);
var vec__38928 = p__38924;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38928,(1),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__38931,p__38932){
var vec__38933 = p__38931;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(7),null);
var vec__38936 = p__38932;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936,(2),null);
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(a,d,e,h,u,v),thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6(b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(var_args){
var G__38941 = arguments.length;
switch (G__38941) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38939_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,(p1__38939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38939_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__38939_SHARP_.call(null,(0))),(p1__38939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38939_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__38939_SHARP_.call(null,(1)))],null));
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var vec__38943 = points;
var seq__38944 = cljs.core.seq(vec__38943);
var first__38945 = cljs.core.first(seq__38944);
var seq__38944__$1 = cljs.core.next(seq__38944);
var v0 = first__38945;
var more = seq__38944__$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__38943,seq__38944,first__38945,seq__38944__$1,v0,more){
return (function (p__38946){
var vec__38947 = p__38946;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__38943,seq__38944,first__38945,seq__38944__$1,v0,more))
,thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__38950){
var vec__38951 = p__38950;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38951,(2),null);
var ab = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
var bc = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(b,c);
var ca = thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__38954 = cljs.core._EQ_;
var expr__38955 = cljs.core.count(points);
if(cljs.core.truth_((pred__38954.cljs$core$IFn$_invoke$arity$2 ? pred__38954.cljs$core$IFn$_invoke$arity$2((3),expr__38955) : pred__38954.call(null,(3),expr__38955)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((pred__38954.cljs$core$IFn$_invoke$arity$2 ? pred__38954.cljs$core$IFn$_invoke$arity$2((4),expr__38955) : pred__38954.call(null,(4),expr__38955)))){
var vec__38957 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38957,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(var_args){
var G__38961 = arguments.length;
switch (G__38961) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__38962){
var vec__38963 = p__38962;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38963,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38963,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38963,(2),null);
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__38967,p__38968,p__38969){
var vec__38970 = p__38967;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(1),null);
var vec__38973 = p__38968;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(1),null);
var vec__38976 = p__38969;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38976,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38976,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2(a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3(a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot(thi.ng.geom.core.cross(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(var_args){
var G__38980 = arguments.length;
switch (G__38980) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__38981,p){
var vec__38982 = p__38981;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var uu = thi.ng.geom.core.mag_squared(u);
var vv = thi.ng.geom.core.mag_squared(v);
var uv = thi.ng.geom.core.dot(u,v);
var wu = thi.ng.geom.core.dot(w,u);
var wv = thi.ng.geom.core.dot(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;

thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.core.utils.clockwise2_QMARK_(a,b,c))){
return (((thi.ng.geom.core.utils.norm_sign2(a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,b,p) >= 0.0)));
} else {
return (((thi.ng.geom.core.utils.norm_sign2(b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,a,p) >= 0.0)));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.geom.core.dot(n,p) - thi.ng.geom.core.dot(n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,cl))){
var vec__38986 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38986,(2),null);
var and__3938__auto__ = (u__$1 >= 0.0);
if(and__3938__auto__){
var and__3938__auto____$1 = (w >= 0.0);
if(and__3938__auto____$1){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__38989_SHARP_){
var G__38990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.tri_area3,p1__38989_SHARP_);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__38990) : thi.ng.math.core.abs.call(null,G__38990));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__38991_SHARP_){
return thi.ng.geom.core.dot((p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__38991_SHARP_.call(null,(0))),thi.ng.geom.core.cross((p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__38991_SHARP_.call(null,(1))),(p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__38991_SHARP_.call(null,(2)))));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

//# sourceMappingURL=thi.ng.geom.core.utils.js.map
