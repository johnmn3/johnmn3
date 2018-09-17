goog.provide('thi.ng.math.core');
goog.require('cljs.core');
thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
var G__34632 = (x - y);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__34632) : thi.ng.math.core.abs.call(null,G__34632));
});
thi.ng.math.core.sign = (function thi$ng$math$core$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);
}
}
});

/**
 * @interface
 */
thi.ng.math.core.PDeltaEquals = function(){};

thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var G__34635 = arguments.length;
switch (G__34635) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((!((a == null))) && (!((a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 == null))))){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("PDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if(((!((a == null))) && (!((a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 == null))))){
return a.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__4244__auto__.call(null,a,b,eps));
} else {
var m__4244__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__4244__auto____$1.call(null,a,b,eps));
} else {
throw cljs.core.missing_protocol("PDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;


goog.object.set(thi.ng.math.core.PDeltaEquals,"number",true);

var G__34665_34779 = thi.ng.math.core.delta_EQ_;
var G__34666_34780 = "number";
var G__34667_34781 = ((function (G__34665_34779,G__34666_34780){
return (function() {
var G__34783 = null;
var G__34783__2 = (function (a,b){
if(typeof b === 'number'){
return ((function (){var G__34668 = (a - b);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__34668) : thi.ng.math.core.abs.call(null,G__34668));
})() <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__34783__3 = (function (a,b,eps){
if(typeof b === 'number'){
return ((function (){var G__34669 = (a - b);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__34669) : thi.ng.math.core.abs.call(null,G__34669));
})() <= eps);
} else {
return null;
}
});
G__34783 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__34783__2.call(this,a,b);
case 3:
return G__34783__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34783.cljs$core$IFn$_invoke$arity$2 = G__34783__2;
G__34783.cljs$core$IFn$_invoke$arity$3 = G__34783__3;
return G__34783;
})()
;})(G__34665_34779,G__34666_34780))
;
goog.object.set(G__34665_34779,G__34666_34780,G__34667_34781);

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__34792 = cljs.core.next(a__$2);
var G__34793 = cljs.core.next(b__$1);
a__$2 = G__34792;
b__$1 = G__34793;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.PersistentVector.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__34799 = cljs.core.next(a__$2);
var G__34801 = cljs.core.next(b__$1);
a__$2 = G__34799;
b__$1 = G__34801;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__34805 = cljs.core.next(a__$2);
var G__34806 = cljs.core.next(b__$1);
a__$2 = G__34805;
b__$1 = G__34806;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.List.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__34810 = cljs.core.next(a__$2);
var G__34811 = cljs.core.next(b__$1);
a__$2 = G__34810;
b__$1 = G__34811;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__34815 = cljs.core.next(a__$2);
var G__34816 = cljs.core.next(b__$1);
a__$2 = G__34815;
b__$1 = G__34816;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__34823 = cljs.core.next(a__$2);
var G__34824 = cljs.core.next(b__$1);
a__$2 = G__34823;
b__$1 = G__34824;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a__$2),cljs.core.first(b__$1)))){
var G__34828 = cljs.core.next(a__$2);
var G__34829 = cljs.core.next(b__$1);
a__$2 = G__34828;
b__$1 = G__34829;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
var and__3938__auto__ = cljs.core.sequential_QMARK_(b);
if(and__3938__auto__){
var and__3938__auto____$1 = (cljs.core.count(a__$1) === cljs.core.count(b));
if(and__3938__auto____$1){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__34832 = cljs.core.next(a__$2);
var G__34833 = cljs.core.next(b__$1);
a__$2 = G__34832;
b__$1 = G__34833;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

goog.object.set(thi.ng.math.core.PDeltaEquals,"null",true);

var G__34736_34834 = thi.ng.math.core.delta_EQ_;
var G__34737_34835 = "null";
var G__34738_34836 = ((function (G__34736_34834,G__34737_34835){
return (function() {
var G__34837 = null;
var G__34837__2 = (function (_,b){
return (b == null);
});
var G__34837__3 = (function (_,b,___$1){
return (b == null);
});
G__34837 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__34837__2.call(this,_,b);
case 3:
return G__34837__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34837.cljs$core$IFn$_invoke$arity$2 = G__34837__2;
G__34837.cljs$core$IFn$_invoke$arity$3 = G__34837__3;
return G__34837;
})()
;})(G__34736_34834,G__34737_34835))
;
goog.object.set(G__34736_34834,G__34737_34835,G__34738_34836);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_(x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_(x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(var_args){
var G__34853 = arguments.length;
switch (G__34853) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Maps x from one interval into another. Intervals can be defined as vectors.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var G__34875 = arguments.length;
switch (G__34875) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__34877,p__34878){
var vec__34879 = p__34877;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34879,(1),null);
var vec__34882 = p__34878;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(1),null);
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
});

thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5;

thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(var_args){
var G__34894 = arguments.length;
switch (G__34894) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__34903,p__34904){
var vec__34905 = p__34903;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905,(1),null);
var vec__34908 = p__34904;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(1),null);
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
}
}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__34914,p__34915,p__34916){
var vec__34917 = p__34914;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34917,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34917,(1),null);
var vec__34920 = p__34915;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(1),null);
var vec__34923 = p__34916;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34923,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34923,(1),null);
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;

/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(var_args){
var G__34946 = arguments.length;
switch (G__34946) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__34947,x){
var vec__34948 = p__34947;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34948,(1),null);
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;

thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem(x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
 *   resolution 1/x.
 */
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34959_SHARP_){
return (p1__34959_SHARP_ / n);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1))));
});
thi.ng.math.core.mix = (function thi$ng$math$core$mix(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step = (function thi$ng$math$core$step(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(e0,e1,x){
var t = thi.ng.math.core.clamp(((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.mix_circular = (function thi$ng$math$core$mix_circular(a,b,t){
var t__$1 = (1.0 - t);
return (((b - a) * (function (){var G__34964 = (1.0 - (t__$1 * t__$1));
return Math.sqrt(G__34964);
})()) + a);
});
thi.ng.math.core.mix_circular_flipped = (function thi$ng$math$core$mix_circular_flipped(a,b,t){
return (((b - a) * (- ((function (){var G__34968 = (1.0 - (t * t));
return Math.sqrt(G__34968);
})() - 1.0))) + a);
});
thi.ng.math.core.mix_cosine = (function thi$ng$math$core$mix_cosine(a,b,t){
return (((a - b) * (((function (){var G__34969 = (t * thi.ng.math.core.PI);
return Math.cos(G__34969);
})() * 0.5) + 0.5)) + b);
});
thi.ng.math.core.mix_bezier = (function thi$ng$math$core$mix_bezier(a,b,t,c1,c2){
var tsq = (t * t);
var invt = (1.0 - t);
var itsq = (invt * invt);
return (((((a * t) * itsq) + ((((((b - a) * c1) + a) * 3.0) * t) * itsq)) + ((((((b - a) * c2) + b) * 3.0) * tsq) * invt)) + ((b * t) * tsq));
});
thi.ng.math.core.mix_exp = (function thi$ng$math$core$mix_exp(a,b,t,e){
return (((b - a) * Math.pow(t,e)) + a);
});
thi.ng.math.core.mix_decimated = (function thi$ng$math$core$mix_decimated(a,b,t,n){
return (((b - a) * (((t * n) | (0)) / n)) + a);
});
thi.ng.math.core.mix_lens = (function thi$ng$math$core$mix_lens(a,b,t,pos,strength){
var v = (((b - a) * t) + a);
return ((((t < pos))?(((function (){var G__34989 = a;
var G__34990 = (((b - a) * pos) + a);
var G__34991 = (t / pos);
var fexpr__34988 = (((strength > (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular);
return (fexpr__34988.cljs$core$IFn$_invoke$arity$3 ? fexpr__34988.cljs$core$IFn$_invoke$arity$3(G__34989,G__34990,G__34991) : fexpr__34988.call(null,G__34989,G__34990,G__34991));
})() - v) * (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(strength) : thi.ng.math.core.abs.call(null,strength))):(((function (){var G__34993 = (((b - a) * pos) + a);
var G__34994 = b;
var G__34995 = ((t - pos) / (1.0 - pos));
var fexpr__34992 = (((strength < (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular);
return (fexpr__34992.cljs$core$IFn$_invoke$arity$3 ? fexpr__34992.cljs$core$IFn$_invoke$arity$3(G__34993,G__34994,G__34995) : fexpr__34992.call(null,G__34993,G__34994,G__34995));
})() - v) * (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(strength) : thi.ng.math.core.abs.call(null,strength)))) + v);
});
thi.ng.math.core.mix_bounce = (function thi$ng$math$core$mix_bounce(a,b,t,k){
if(!((t === (0)))){
var t_SINGLEQUOTE_ = (t * k);
var t_SINGLEQUOTE___$1 = (1.0 - ((Math.sin(t_SINGLEQUOTE_) / t_SINGLEQUOTE_) * (function (){var G__35001 = (t * thi.ng.math.core.HALF_PI);
return Math.cos(G__35001);
})()));
return (((b - a) * t) + a);
} else {
return a;
}
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor(((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__35006 = (pow2 << (1));
pow2 = G__35006;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
var G__35015 = (2);
var G__35016 = ((Math.log(x) / thi.ng.math.core.LOG2) | (0));
return Math.pow(G__35015,G__35016);
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil((Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil(x);
} else {
return thi.ng.math.core.floor(x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs.call(null,x));
var ay = (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs.call(null,y));
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs.call(null,x));
var ay = (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs.call(null,y));
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * (function (){var G__35070 = (2);
var G__35071 = (k | (0));
return Math.pow(G__35070,G__35071);
})());
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract(k);
var k__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,0.5))?((cljs.core.even_QMARK_((k | (0))))?(k | (0)):thi.ng.math.core.ceil(k)):(((f < 0.5))?thi.ng.math.core.floor(k):thi.ng.math.core.ceil(k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
var G__35076 = ((x * x) + (y * y));
return Math.sqrt(G__35076);
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
var G__35081 = x;
var G__35082 = (1.0 / y);
return Math.pow(G__35081,G__35082);
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * (function (){var G__35084 = (1.0 - h);
return Math.exp(G__35084);
})());
});
thi.ng.math.core.sinc = (function thi$ng$math$core$sinc(var_args){
var G__35087 = arguments.length;
switch (G__35087) {
case 1:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x === (0))){
return 0.0;
} else {
return (Math.sin(x) / x);
}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2 = (function (x,freq){
if((x === (0))){
return 0.0;
} else {
var x_SINGLEQUOTE_ = (x * freq);
return (Math.sin(x_SINGLEQUOTE_) / x_SINGLEQUOTE_);
}
});

thi.ng.math.core.sinc.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.random = (function thi$ng$math$core$random(var_args){
var G__35093 = arguments.length;
switch (G__35093) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null));
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return ((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * max);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null))) + min);
});

thi.ng.math.core.random.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return (((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?((function (){var G__35097 = (((n / 100.0) * num) + 0.5);
return Math.round(G__35097);
})() | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,thi.ng.math.core.percentile_index(n,cljs.core.count(sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index((n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index((n - (1)),num);
var b = thi.ng.math.core.quartile_index(n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__35101 = thi.ng.math.core.quartile_range(n,cljs.core.count(sorted));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35101,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35101,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((b - a),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var G__35113 = arguments.length;
switch (G__35113) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2(n,1.0);
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,ws));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ws,s){
return (function (p1__35107_SHARP_){
return (s * p1__35107_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=thi.ng.math.core.js.map
