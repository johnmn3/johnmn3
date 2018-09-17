goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
goog.require('thi.ng.color.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = (thi.ng.strf.core.float$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.float$.cljs$core$IFn$_invoke$arity$1((2)) : thi.ng.strf.core.float$.call(null,(2)));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__39106 = cljs.core.first(p);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__39106) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__39106));
})()),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__39107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__39107) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__39107));
})())].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * (100)) | (0))),"%"].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__39108 = (n | (0));
switch (G__39108) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.PSVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if(((!((_ == null))) && (!((_.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2 == null))))){
return _.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2(_,opts);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4244__auto__.call(null,_,opts));
} else {
var m__4244__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4244__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PSVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__5455__auto__ = (attribs.cljs$core$IFn$_invoke$arity$1 ? attribs.cljs$core$IFn$_invoke$arity$1(id) : attribs.call(null,id));
if(cljs.core.truth_(temp__5455__auto__)){
var att = temp__5455__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,cljs.core.deref(thi.ng.color.core.as_css(att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__5455__auto__ = (attribs.cljs$core$IFn$_invoke$arity$1 ? attribs.cljs$core$IFn$_invoke$arity$1(id) : attribs.call(null,id));
if(cljs.core.truth_(temp__5455__auto__)){
var mat = temp__5455__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__39110 = mat;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(3),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39110,(5),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$(attribs);
var ks = cljs.core.keys(attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__39113 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("__",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(cljs.core.first(ks)),(0),(2))))?cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(ks)):acc);
var G__39114 = cljs.core.next(ks);
acc = G__39113;
ks = G__39114;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq(attribs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.matrix_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.filter_attribs(attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39117 = arguments.length;
var i__4532__auto___39118 = (0);
while(true){
if((i__4532__auto___39118 < len__4531__auto___39117)){
args__4534__auto__.push((arguments[i__4532__auto___39118]));

var G__39119 = (i__4532__auto___39118 + (1));
i__4532__auto___39118 = G__39119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq39115){
var G__39116 = cljs.core.first(seq39115);
var seq39115__$1 = cljs.core.next(seq39115);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39116,seq39115__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39121 = arguments.length;
var i__4532__auto___39122 = (0);
while(true){
if((i__4532__auto___39122 < len__4531__auto___39121)){
args__4534__auto__.push((arguments[i__4532__auto___39122]));

var G__39123 = (i__4532__auto___39122 + (1));
i__4532__auto___39122 = G__39123;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq39120){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39120));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__39124){
var vec__39125 = p__39124;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref(thi.ng.color.core.as_css(col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.cljs$core$IFn$_invoke$arity$1(pos) : thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos)),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39131 = arguments.length;
var i__4532__auto___39132 = (0);
while(true){
if((i__4532__auto___39132 < len__4531__auto___39131)){
args__4534__auto__.push((arguments[i__4532__auto___39132]));

var G__39133 = (i__4532__auto___39132 + (1));
i__4532__auto___39132 = G__39133;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq39128){
var G__39129 = cljs.core.first(seq39128);
var seq39128__$1 = cljs.core.next(seq39128);
var G__39130 = cljs.core.first(seq39128__$1);
var seq39128__$2 = cljs.core.next(seq39128__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39129,G__39130,seq39128__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39137 = arguments.length;
var i__4532__auto___39138 = (0);
while(true){
if((i__4532__auto___39138 < len__4531__auto___39137)){
args__4534__auto__.push((arguments[i__4532__auto___39138]));

var G__39139 = (i__4532__auto___39138 + (1));
i__4532__auto___39138 = G__39139;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq39134){
var G__39135 = cljs.core.first(seq39134);
var seq39134__$1 = cljs.core.next(seq39134);
var G__39136 = cljs.core.first(seq39134__$1);
var seq39134__$2 = cljs.core.next(seq39134__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39135,G__39136,seq39134__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39142 = arguments.length;
var i__4532__auto___39143 = (0);
while(true){
if((i__4532__auto___39143 < len__4531__auto___39142)){
args__4534__auto__.push((arguments[i__4532__auto___39143]));

var G__39144 = (i__4532__auto___39143 + (1));
i__4532__auto___39143 = G__39144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs(attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq39140){
var G__39141 = cljs.core.first(seq39140);
var seq39140__$1 = cljs.core.next(seq39140);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39141,seq39140__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39151 = arguments.length;
var i__4532__auto___39152 = (0);
while(true){
if((i__4532__auto___39152 < len__4531__auto___39151)){
args__4534__auto__.push((arguments[i__4532__auto___39152]));

var G__39153 = (i__4532__auto___39152 + (1));
i__4532__auto___39152 = G__39153;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (segments,p__39147){
var vec__39148 = p__39147;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([segments], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([segments], 0)))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.path.cljs$lang$applyTo = (function (seq39145){
var G__39146 = cljs.core.first(seq39145);
var seq39145__$1 = cljs.core.next(seq39145);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39146,seq39145__$1);
});

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39165 = arguments.length;
var i__4532__auto___39166 = (0);
while(true){
if((i__4532__auto___39166 < len__4531__auto___39165)){
args__4534__auto__.push((arguments[i__4532__auto___39166]));

var G__39167 = (i__4532__auto___39166 + (1));
i__4532__auto___39166 = G__39167;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__39157,txt,p__39158){
var vec__39159 = p__39157;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39159,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39159,(1),null);
var vec__39162 = p__39158;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39162,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x)),new cljs.core.Keyword(null,"y","y",-1757859776),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y))], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.text.cljs$lang$applyTo = (function (seq39154){
var G__39155 = cljs.core.first(seq39154);
var seq39154__$1 = cljs.core.next(seq39154);
var G__39156 = cljs.core.first(seq39154__$1);
var seq39154__$2 = cljs.core.next(seq39154__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39155,G__39156,seq39154__$2);
});

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39179 = arguments.length;
var i__4532__auto___39180 = (0);
while(true){
if((i__4532__auto___39180 < len__4531__auto___39179)){
args__4534__auto__.push((arguments[i__4532__auto___39180]));

var G__39181 = (i__4532__auto___39180 + (1));
i__4532__auto___39180 = G__39181;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__39171,radius,p__39172){
var vec__39173 = p__39171;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(1),null);
var vec__39176 = p__39172;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39176,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x)),new cljs.core.Keyword(null,"cy","cy",755331060),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.circle.cljs$lang$applyTo = (function (seq39168){
var G__39169 = cljs.core.first(seq39168);
var seq39168__$1 = cljs.core.next(seq39168);
var G__39170 = cljs.core.first(seq39168__$1);
var seq39168__$2 = cljs.core.next(seq39168__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39169,G__39170,seq39168__$2);
});

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(radius);
var p = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.as_cartesian(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.x(radius__$1),theta1)));
var q = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.as_cartesian(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.y(radius__$1),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39193 = arguments.length;
var i__4532__auto___39194 = (0);
while(true){
if((i__4532__auto___39194 < len__4531__auto___39193)){
args__4534__auto__.push((arguments[i__4532__auto___39194]));

var G__39195 = (i__4532__auto___39194 + (1));
i__4532__auto___39194 = G__39195;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((6) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((6)),(0),null)):null);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,p__39189){
var vec__39190 = p__39189;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39190,(0),null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic(thi.ng.geom.svg.core.arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0));
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = (6);

/** @this {Function} */
thi.ng.geom.svg.core.arc.cljs$lang$applyTo = (function (seq39182){
var G__39183 = cljs.core.first(seq39182);
var seq39182__$1 = cljs.core.next(seq39182);
var G__39184 = cljs.core.first(seq39182__$1);
var seq39182__$2 = cljs.core.next(seq39182__$1);
var G__39185 = cljs.core.first(seq39182__$2);
var seq39182__$3 = cljs.core.next(seq39182__$2);
var G__39186 = cljs.core.first(seq39182__$3);
var seq39182__$4 = cljs.core.next(seq39182__$3);
var G__39187 = cljs.core.first(seq39182__$4);
var seq39182__$5 = cljs.core.next(seq39182__$4);
var G__39188 = cljs.core.first(seq39182__$5);
var seq39182__$6 = cljs.core.next(seq39182__$5);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39183,G__39184,G__39185,G__39186,G__39187,G__39188,seq39182__$6);
});

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39208 = arguments.length;
var i__4532__auto___39209 = (0);
while(true){
if((i__4532__auto___39209 < len__4531__auto___39208)){
args__4534__auto__.push((arguments[i__4532__auto___39209]));

var G__39210 = (i__4532__auto___39209 + (1));
i__4532__auto___39209 = G__39210;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39200,w,h,p__39201){
var vec__39202 = p__39200;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
var vec__39205 = p__39201;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x)),new cljs.core.Keyword(null,"y","y",-1757859776),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
thi.ng.geom.svg.core.rect.cljs$lang$applyTo = (function (seq39196){
var G__39197 = cljs.core.first(seq39196);
var seq39196__$1 = cljs.core.next(seq39196);
var G__39198 = cljs.core.first(seq39196__$1);
var seq39196__$2 = cljs.core.next(seq39196__$1);
var G__39199 = cljs.core.first(seq39196__$2);
var seq39196__$3 = cljs.core.next(seq39196__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39197,G__39198,G__39199,seq39196__$3);
});

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39226 = arguments.length;
var i__4532__auto___39227 = (0);
while(true){
if((i__4532__auto___39227 < len__4531__auto___39226)){
args__4534__auto__.push((arguments[i__4532__auto___39227]));

var G__39228 = (i__4532__auto___39227 + (1));
i__4532__auto___39227 = G__39228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__39214,p__39215,p__39216){
var vec__39217 = p__39214;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(1),null);
var vec__39220 = p__39215;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39220,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39220,(1),null);
var vec__39223 = p__39216;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(ax) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ax)),new cljs.core.Keyword(null,"y1","y1",589123466),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(ay) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ay)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(bx) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,bx)),new cljs.core.Keyword(null,"y2","y2",-718691301),(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(by) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,by))], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
thi.ng.geom.svg.core.line.cljs$lang$applyTo = (function (seq39211){
var G__39212 = cljs.core.first(seq39211);
var seq39211__$1 = cljs.core.next(seq39211);
var G__39213 = cljs.core.first(seq39211__$1);
var seq39211__$2 = cljs.core.next(seq39211__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39212,G__39213,seq39211__$2);
});

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39238 = arguments.length;
var i__4532__auto___39239 = (0);
while(true){
if((i__4532__auto___39239 < len__4531__auto___39238)){
args__4534__auto__.push((arguments[i__4532__auto___39239]));

var G__39240 = (i__4532__auto___39239 + (1));
i__4532__auto___39239 = G__39240;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,start,end,p__39234){
var vec__39235 = p__39234;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39235,(0),null);
return (new cljs.core.List(null,thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic(p,q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0)),(new cljs.core.List(null,(cljs.core.truth_(start)?(start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(q,p,(0),attribs) : start.call(null,q,p,(0),attribs)):null),(new cljs.core.List(null,(cljs.core.truth_(end)?(end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(p,q,(0),attribs) : end.call(null,p,q,(0),attribs)):null),null,(1),null)),(2),null)),(3),null));
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
thi.ng.geom.svg.core.line_decorated.cljs$lang$applyTo = (function (seq39229){
var G__39230 = cljs.core.first(seq39229);
var seq39229__$1 = cljs.core.next(seq39229);
var G__39231 = cljs.core.first(seq39229__$1);
var seq39229__$2 = cljs.core.next(seq39229__$1);
var G__39232 = cljs.core.first(seq39229__$2);
var seq39229__$3 = cljs.core.next(seq39229__$2);
var G__39233 = cljs.core.first(seq39229__$3);
var seq39229__$4 = cljs.core.next(seq39229__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39230,G__39231,G__39232,G__39233,seq39229__$4);
});

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39247 = arguments.length;
var i__4532__auto___39248 = (0);
while(true){
if((i__4532__auto___39248 < len__4531__auto___39247)){
args__4534__auto__.push((arguments[i__4532__auto___39248]));

var G__39249 = (i__4532__auto___39248 + (1));
i__4532__auto___39248 = G__39249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__39243){
var vec__39244 = p__39243;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39244,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.line_strip.cljs$lang$applyTo = (function (seq39241){
var G__39242 = cljs.core.first(seq39241);
var seq39241__$1 = cljs.core.next(seq39241);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39242,seq39241__$1);
});

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39272 = arguments.length;
var i__4532__auto___39273 = (0);
while(true){
if((i__4532__auto___39273 < len__4531__auto___39272)){
args__4534__auto__.push((arguments[i__4532__auto___39273]));

var G__39274 = (i__4532__auto___39273 + (1));
i__4532__auto___39273 = G__39274;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (points,start,seg,end,p__39255){
var vec__39256 = p__39255;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39256,(0),null);
var n = (cljs.core.count(points) - (1));
return (new cljs.core.List(null,thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic(points,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0)),(new cljs.core.List(null,(cljs.core.truth_(start)?(function (){var G__39259 = (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1((1)) : points.call(null,(1)));
var G__39260 = (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1((0)) : points.call(null,(0)));
var G__39261 = (0);
var G__39262 = attribs;
return (start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(G__39259,G__39260,G__39261,G__39262) : start.call(null,G__39259,G__39260,G__39261,G__39262));
})():null),(new cljs.core.List(null,(cljs.core.truth_(seg)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (n,vec__39256,attribs){
return (function (i,p__39263){
var vec__39264 = p__39263;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39264,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39264,(1),null);
return (seg.cljs$core$IFn$_invoke$arity$4 ? seg.cljs$core$IFn$_invoke$arity$4(p,q,i,attribs) : seg.call(null,p,q,i,attribs));
});})(n,vec__39256,attribs))
,thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points)):null),(new cljs.core.List(null,(cljs.core.truth_(end)?(function (){var G__39267 = (function (){var G__39271 = (n - (1));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__39271) : points.call(null,G__39271));
})();
var G__39268 = cljs.core.peek(points);
var G__39269 = n;
var G__39270 = attribs;
return (end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(G__39267,G__39268,G__39269,G__39270) : end.call(null,G__39267,G__39268,G__39269,G__39270));
})():null),null,(1),null)),(2),null)),(3),null)),(4),null));
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$applyTo = (function (seq39250){
var G__39251 = cljs.core.first(seq39250);
var seq39250__$1 = cljs.core.next(seq39250);
var G__39252 = cljs.core.first(seq39250__$1);
var seq39250__$2 = cljs.core.next(seq39250__$1);
var G__39253 = cljs.core.first(seq39250__$2);
var seq39250__$3 = cljs.core.next(seq39250__$2);
var G__39254 = cljs.core.first(seq39250__$3);
var seq39250__$4 = cljs.core.next(seq39250__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39251,G__39252,G__39253,G__39254,seq39250__$4);
});

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39281 = arguments.length;
var i__4532__auto___39282 = (0);
while(true){
if((i__4532__auto___39282 < len__4531__auto___39281)){
args__4534__auto__.push((arguments[i__4532__auto___39282]));

var G__39283 = (i__4532__auto___39282 + (1));
i__4532__auto___39282 = G__39283;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__39277){
var vec__39278 = p__39277;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39278,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.polygon.cljs$lang$applyTo = (function (seq39275){
var G__39276 = cljs.core.first(seq39275);
var seq39275__$1 = cljs.core.next(seq39275);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39276,seq39275__$1);
});

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39290 = arguments.length;
var i__4532__auto___39291 = (0);
while(true){
if((i__4532__auto___39291 < len__4531__auto___39290)){
args__4534__auto__.push((arguments[i__4532__auto___39291]));

var G__39292 = (i__4532__auto___39291 + (1));
i__4532__auto___39291 = G__39292;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__39286){
var vec__39287 = p__39286;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39287,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
thi.ng.geom.svg.core.instance.cljs$lang$applyTo = (function (seq39284){
var G__39285 = cljs.core.first(seq39284);
var seq39284__$1 = cljs.core.next(seq39284);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39285,seq39284__$1);
});

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39308 = arguments.length;
var i__4532__auto___39309 = (0);
while(true){
if((i__4532__auto___39309 < len__4531__auto___39308)){
args__4534__auto__.push((arguments[i__4532__auto___39309]));

var G__39310 = (i__4532__auto___39309 + (1));
i__4532__auto___39309 = G__39310;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic = (function (len,theta,solid_QMARK_,p__39297){
var vec__39298 = p__39297;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39298,(0),null);
return ((function (vec__39298,opts){
return (function() { 
var G__39311__delegate = function (p,q,idx,p__39301){
var vec__39302 = p__39301;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39302,(0),null);
var q__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var d = thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p),len);
return (new cljs.core.List(null,(function (){var G__39306 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,thi.ng.geom.core.rotate(d,(- theta))),q__$1,thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(q__$1,thi.ng.geom.core.rotate(d,theta))], null);
var G__39307 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs,opts], 0));
var fexpr__39305 = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip);
return (fexpr__39305.cljs$core$IFn$_invoke$arity$2 ? fexpr__39305.cljs$core$IFn$_invoke$arity$2(G__39306,G__39307) : fexpr__39305.call(null,G__39306,G__39307));
})(),null,(1),null));
};
var G__39311 = function (p,q,idx,var_args){
var p__39301 = null;
if (arguments.length > 3) {
var G__39312__i = 0, G__39312__a = new Array(arguments.length -  3);
while (G__39312__i < G__39312__a.length) {G__39312__a[G__39312__i] = arguments[G__39312__i + 3]; ++G__39312__i;}
  p__39301 = new cljs.core.IndexedSeq(G__39312__a,0,null);
} 
return G__39311__delegate.call(this,p,q,idx,p__39301);};
G__39311.cljs$lang$maxFixedArity = 3;
G__39311.cljs$lang$applyTo = (function (arglist__39313){
var p = cljs.core.first(arglist__39313);
arglist__39313 = cljs.core.next(arglist__39313);
var q = cljs.core.first(arglist__39313);
arglist__39313 = cljs.core.next(arglist__39313);
var idx = cljs.core.first(arglist__39313);
var p__39301 = cljs.core.rest(arglist__39313);
return G__39311__delegate(p,q,idx,p__39301);
});
G__39311.cljs$core$IFn$_invoke$arity$variadic = G__39311__delegate;
return G__39311;
})()
;
;})(vec__39298,opts))
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
thi.ng.geom.svg.core.arrow_head.cljs$lang$applyTo = (function (seq39293){
var G__39294 = cljs.core.first(seq39293);
var seq39293__$1 = cljs.core.next(seq39293);
var G__39295 = cljs.core.first(seq39293__$1);
var seq39293__$2 = cljs.core.next(seq39293__$1);
var G__39296 = cljs.core.first(seq39293__$2);
var seq39293__$3 = cljs.core.next(seq39293__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39294,G__39295,G__39296,seq39293__$3);
});

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39326 = arguments.length;
var i__4532__auto___39327 = (0);
while(true){
if((i__4532__auto___39327 < len__4531__auto___39326)){
args__4534__auto__.push((arguments[i__4532__auto___39327]));

var G__39328 = (i__4532__auto___39327 + (1));
i__4532__auto___39327 = G__39328;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__39316){
var vec__39317 = p__39316;
var map__39320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39317,(0),null);
var map__39320__$1 = ((((!((map__39320 == null)))?(((((map__39320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39320):map__39320);
var opts = map__39320__$1;
var __rotate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39320__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39320__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"__offset","__offset",-9560190)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),((function (vec__39317,map__39320,map__39320__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__39314_SHARP_){
var or__3949__auto__ = p1__39314_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "middle";
}
});})(vec__39317,map__39320,map__39320__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,vec__39317,map__39320,map__39320__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__39329__delegate = function (p,q,idx,p__39322){
var vec__39323 = p__39322;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39323,(0),null);
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__5455__auto__)){
var label = temp__5455__auto__;
var p__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var m = thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.degrees(thi.ng.geom.core.heading(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2(p__$1,q)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((0)) : m.call(null,(0))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)))),")"].join('')):opts__$1);
return (new cljs.core.List(null,thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic(m,label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2], 0))], 0)),null,(1),null));
} else {
return null;
}
};
var G__39329 = function (p,q,idx,var_args){
var p__39322 = null;
if (arguments.length > 3) {
var G__39330__i = 0, G__39330__a = new Array(arguments.length -  3);
while (G__39330__i < G__39330__a.length) {G__39330__a[G__39330__i] = arguments[G__39330__i + 3]; ++G__39330__i;}
  p__39322 = new cljs.core.IndexedSeq(G__39330__a,0,null);
} 
return G__39329__delegate.call(this,p,q,idx,p__39322);};
G__39329.cljs$lang$maxFixedArity = 3;
G__39329.cljs$lang$applyTo = (function (arglist__39331){
var p = cljs.core.first(arglist__39331);
arglist__39331 = cljs.core.next(arglist__39331);
var q = cljs.core.first(arglist__39331);
arglist__39331 = cljs.core.next(arglist__39331);
var idx = cljs.core.first(arglist__39331);
var p__39322 = cljs.core.rest(arglist__39331);
return G__39329__delegate(p,q,idx,p__39322);
});
G__39329.cljs$core$IFn$_invoke$arity$variadic = G__39329__delegate;
return G__39329;
})()
;
;})(opts__$1,vec__39317,map__39320,map__39320__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.geom.svg.core.line_label.cljs$lang$applyTo = (function (seq39315){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39315));
});

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39337 = arguments.length;
var i__4532__auto___39338 = (0);
while(true){
if((i__4532__auto___39338 < len__4531__auto___39337)){
args__4534__auto__.push((arguments[i__4532__auto___39338]));

var G__39339 = (i__4532__auto___39338 + (1));
i__4532__auto___39338 = G__39339;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__39340__delegate = function (p,q,idx,p__39333){
var vec__39334 = p__39333;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__39334,attribs){
return (function (acc,f){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(p,q,idx,attribs) : f.call(null,p,q,idx,attribs)));
});})(vec__39334,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__39340 = function (p,q,idx,var_args){
var p__39333 = null;
if (arguments.length > 3) {
var G__39341__i = 0, G__39341__a = new Array(arguments.length -  3);
while (G__39341__i < G__39341__a.length) {G__39341__a[G__39341__i] = arguments[G__39341__i + 3]; ++G__39341__i;}
  p__39333 = new cljs.core.IndexedSeq(G__39341__a,0,null);
} 
return G__39340__delegate.call(this,p,q,idx,p__39333);};
G__39340.cljs$lang$maxFixedArity = 3;
G__39340.cljs$lang$applyTo = (function (arglist__39342){
var p = cljs.core.first(arglist__39342);
arglist__39342 = cljs.core.next(arglist__39342);
var q = cljs.core.first(arglist__39342);
arglist__39342 = cljs.core.next(arglist__39342);
var idx = cljs.core.first(arglist__39342);
var p__39333 = cljs.core.rest(arglist__39342);
return G__39340__delegate(p,q,idx,p__39333);
});
G__39340.cljs$core$IFn$_invoke$arity$variadic = G__39340__delegate;
return G__39340;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq39332){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39332));
});


//# sourceMappingURL=thi.ng.geom.svg.core.js.map
