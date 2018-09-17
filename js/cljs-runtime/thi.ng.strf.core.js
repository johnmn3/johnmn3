goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35168 = arguments.length;
var i__4532__auto___35170 = (0);
while(true){
if((i__4532__auto___35170 < len__4531__auto___35168)){
args__4534__auto__.push((arguments[i__4532__auto___35170]));

var G__35172 = (i__4532__auto___35170 + (1));
i__4532__auto___35170 = G__35172;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__35156){
var vec__35157 = p__35156;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq35141){
var G__35142 = cljs.core.first(seq35141);
var seq35141__$1 = cljs.core.next(seq35141);
var G__35143 = cljs.core.first(seq35141__$1);
var seq35141__$2 = cljs.core.next(seq35141__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35142,G__35143,seq35141__$2);
});

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35213 = arguments.length;
var i__4532__auto___35214 = (0);
while(true){
if((i__4532__auto___35214 < len__4531__auto___35213)){
args__4534__auto__.push((arguments[i__4532__auto___35214]));

var G__35215 = (i__4532__auto___35214 + (1));
i__4532__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__35209){
var vec__35210 = p__35209;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210,(0),null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(x,radix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq35197){
var G__35198 = cljs.core.first(seq35197);
var seq35197__$1 = cljs.core.next(seq35197);
var G__35199 = cljs.core.first(seq35197__$1);
var seq35197__$2 = cljs.core.next(seq35197__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35198,G__35199,seq35197__$2);
});

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35226 = arguments.length;
var i__4532__auto___35227 = (0);
while(true){
if((i__4532__auto___35227 < len__4531__auto___35226)){
args__4534__auto__.push((arguments[i__4532__auto___35227]));

var G__35228 = (i__4532__auto___35227 + (1));
i__4532__auto___35227 = G__35228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__35221){
var vec__35222 = p__35221;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35222,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq35219){
var G__35220 = cljs.core.first(seq35219);
var seq35219__$1 = cljs.core.next(seq35219);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35220,seq35219__$1);
});

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35243 = arguments.length;
var i__4532__auto___35244 = (0);
while(true){
if((i__4532__auto___35244 < len__4531__auto___35243)){
args__4534__auto__.push((arguments[i__4532__auto___35244]));

var G__35245 = (i__4532__auto___35244 + (1));
i__4532__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__35239){
var vec__35240 = p__35239;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35240,(0),null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq35235){
var G__35236 = cljs.core.first(seq35235);
var seq35235__$1 = cljs.core.next(seq35235);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35236,seq35235__$1);
});

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize((function (len){
var pad = (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(len,"0") : thi.ng.strf.core.pad_left.call(null,len,"0"));
return ((function (pad){
return (function (x){
var G__35253 = (new Number((thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.strf.core.int$.call(null,x)))).toString((16));
return (pad.cljs$core$IFn$_invoke$arity$1 ? pad.cljs$core$IFn$_invoke$arity$1(G__35253) : pad.call(null,G__35253));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___35269 = arguments.length;
var i__4532__auto___35270 = (0);
while(true){
if((i__4532__auto___35270 < len__4531__auto___35269)){
args__4534__auto__.push((arguments[i__4532__auto___35270]));

var G__35271 = (i__4532__auto___35270 + (1));
i__4532__auto___35270 = G__35271;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.PersistentVector.EMPTY;
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5455__auto__ = cljs.core.first(fmt__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
if(typeof f === 'string'){
var G__35272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,f);
var G__35273 = cljs.core.next(fmt__$1);
var G__35274 = args__$1;
s = G__35272;
fmt__$1 = G__35273;
args__$1 = G__35274;
continue;
} else {
var G__35278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,(function (){var G__35261 = cljs.core.first(args__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35261) : f.call(null,G__35261));
})());
var G__35279 = cljs.core.next(fmt__$1);
var G__35280 = cljs.core.next(args__$1);
s = G__35278;
fmt__$1 = G__35279;
args__$1 = G__35280;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq35256){
var G__35257 = cljs.core.first(seq35256);
var seq35256__$1 = cljs.core.next(seq35256);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35257,seq35256__$1);
});

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2((2),"0") : thi.ng.strf.core.pad_left.call(null,(2),"0")),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields(d));
});})(d2))
,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields(d));
});})(d2))
,new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields(d));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),((function (d2){
return (function (d){
var vec__35297 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35297,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
});})(d2))
,new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),((function (d2){
return (function (d){
var vec__35300 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d__$1,y], 0));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),((function (d2){
return (function (d){
var vec__35307 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d2,((function (vec__35307,y,m,d__$1,d2){
return (function (p1__35292_SHARP_){
return cljs.core.mod(p1__35292_SHARP_,(100));
});})(vec__35307,y,m,d__$1,d2))
)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
});})(d2))
,new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields(d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__35339 = arguments.length;
switch (G__35339) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
var fexpr__35341 = (function (){var G__35342 = new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629);
return (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(G__35342) : thi.ng.strf.core.date_formatters.call(null,G__35342));
})();
return (fexpr__35341.cljs$core$IFn$_invoke$arity$1 ? fexpr__35341.cljs$core$IFn$_invoke$arity$1(d) : fexpr__35341.call(null,d));
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(d) : fmt.call(null,d));
} else {
var fexpr__35343 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(fmt) : thi.ng.strf.core.date_formatters.call(null,fmt));
return (fexpr__35343.cljs$core$IFn$_invoke$arity$1 ? fexpr__35343.cljs$core$IFn$_invoke$arity$1(d) : fexpr__35343.call(null,d));
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = (function (){var G__35348 = (4);
var G__35349 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__35348,G__35349) : thi.ng.strf.core.pad_left.call(null,G__35348,G__35349));
})();
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
var G__35350 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((1) << bits));
return (thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(G__35350) : thi.ng.strf.core.int$.call(null,G__35350));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
var G__35355 = thi.ng.strf.core.rand_bits(bits).toString((16));
var fexpr__35354 = (function (){var G__35356 = (function (){var G__35358 = (bits / (4));
return Math.ceil(G__35358);
})();
var G__35357 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__35356,G__35357) : thi.ng.strf.core.pad_left.call(null,G__35356,G__35357));
})();
return (fexpr__35354.cljs$core$IFn$_invoke$arity$1 ? fexpr__35354.cljs$core$IFn$_invoke$arity$1(G__35355) : fexpr__35354.call(null,G__35355));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
var G__35359 = cljs.core.rand_int((65536)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__35359) : thi.ng.strf.core.format_16bit_hex.call(null,G__35359));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__35360 = ((thi.ng.strf.core.rand_bits((16)) & (4095)) | (16384)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__35360) : thi.ng.strf.core.format_16bit_hex.call(null,G__35360));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__35361 = ((thi.ng.strf.core.rand_bits((16)) & (16383)) | (32768)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__35361) : thi.ng.strf.core.format_16bit_hex.call(null,G__35361));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex())].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name(x);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape(thi.ng.strf.core.as_str(x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=thi.ng.strf.core.js.map
