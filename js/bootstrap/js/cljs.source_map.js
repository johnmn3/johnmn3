goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__17170){
var vec__17171 = p__17170;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17171,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__17182 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17182,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__17190 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(4),null);
var vec__17193 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3949__auto__ = source;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3949__auto__ = line;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3949__auto__ = col;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__17196 = segmap;
var map__17196__$1 = ((((!((map__17196 == null)))?(((((map__17196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17196):map__17196);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__17196,map__17196__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__17203 = arguments.length;
switch (G__17203) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__17205 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__17212 = cljs.core.next(segs__$1);
var G__17213 = nrelseg;
var G__17214 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__17212;
relseg__$1 = G__17213;
result__$1 = G__17214;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17205,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17205,(1),null);
var G__17221 = (gline + (1));
var G__17222 = cljs.core.next(lines__$1);
var G__17223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__17224 = result__$1;
gline = G__17221;
lines__$1 = G__17222;
relseg = G__17223;
result = G__17224;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__17226 = segmap;
var map__17226__$1 = ((((!((map__17226 == null)))?(((((map__17226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17226):map__17226);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__17226,map__17226__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__17226,map__17226__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__17225_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17225_SHARP_,d__$1);
});})(map__17226,map__17226__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__17226,map__17226__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__17235 = arguments.length;
switch (G__17235) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__17236 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__17250 = cljs.core.next(segs__$1);
var G__17251 = nrelseg;
var G__17252 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__17250;
relseg__$1 = G__17251;
result__$1 = G__17252;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17236,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17236,(1),null);
var G__17253 = (gline + (1));
var G__17254 = cljs.core.next(lines__$1);
var G__17255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__17256 = result__$1;
gline = G__17253;
lines__$1 = G__17254;
relseg = G__17255;
result = G__17256;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__17257){
var vec__17258 = p__17257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17258,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__17261){
var vec__17262 = p__17261;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(4),null);
var seg = vec__17262;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__17262,gcol,sidx,line,col,name,seg,relseg){
return (function (p__17266){
var vec__17267 = p__17266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__17262,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__17283 = cljs.core.seq(infos);
var chunk__17284 = null;
var count__17285 = (0);
var i__17286 = (0);
while(true){
if((i__17286 < count__17285)){
var info = chunk__17284.cljs$core$IIndexed$_nth$arity$2(null,i__17286);
var segv_17433 = info__GT_segv(info,source_idx,line,col);
var gline_17434 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17435 = cljs.core.count(cljs.core.deref(lines));
if((gline_17434 > (lc_17435 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17283,chunk__17284,count__17285,i__17286,segv_17433,gline_17434,lc_17435,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17434 - (lc_17435 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17433], null));
});})(seq__17283,chunk__17284,count__17285,i__17286,segv_17433,gline_17434,lc_17435,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17283,chunk__17284,count__17285,i__17286,segv_17433,gline_17434,lc_17435,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17434], null),cljs.core.conj,segv_17433);
});})(seq__17283,chunk__17284,count__17285,i__17286,segv_17433,gline_17434,lc_17435,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__17441 = seq__17283;
var G__17442 = chunk__17284;
var G__17443 = count__17285;
var G__17444 = (i__17286 + (1));
seq__17283 = G__17441;
chunk__17284 = G__17442;
count__17285 = G__17443;
i__17286 = G__17444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17283);
if(temp__5457__auto__){
var seq__17283__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17283__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__17283__$1);
var G__17447 = cljs.core.chunk_rest(seq__17283__$1);
var G__17448 = c__4351__auto__;
var G__17449 = cljs.core.count(c__4351__auto__);
var G__17450 = (0);
seq__17283 = G__17447;
chunk__17284 = G__17448;
count__17285 = G__17449;
i__17286 = G__17450;
continue;
} else {
var info = cljs.core.first(seq__17283__$1);
var segv_17453 = info__GT_segv(info,source_idx,line,col);
var gline_17454 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17455 = cljs.core.count(cljs.core.deref(lines));
if((gline_17454 > (lc_17455 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17283,chunk__17284,count__17285,i__17286,segv_17453,gline_17454,lc_17455,info,seq__17283__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17454 - (lc_17455 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17453], null));
});})(seq__17283,chunk__17284,count__17285,i__17286,segv_17453,gline_17454,lc_17455,info,seq__17283__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__17283,chunk__17284,count__17285,i__17286,segv_17453,gline_17454,lc_17455,info,seq__17283__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17454], null),cljs.core.conj,segv_17453);
});})(seq__17283,chunk__17284,count__17285,i__17286,segv_17453,gline_17454,lc_17455,info,seq__17283__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__17456 = cljs.core.next(seq__17283__$1);
var G__17457 = null;
var G__17458 = (0);
var G__17459 = (0);
seq__17283 = G__17456;
chunk__17284 = G__17457;
count__17285 = G__17458;
i__17286 = G__17459;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__17301_17460 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__17302_17461 = null;
var count__17303_17462 = (0);
var i__17304_17463 = (0);
while(true){
if((i__17304_17463 < count__17303_17462)){
var vec__17306_17464 = chunk__17302_17461.cljs$core$IIndexed$_nth$arity$2(null,i__17304_17463);
var source_idx_17465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306_17464,(0),null);
var vec__17309_17466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17306_17464,(1),null);
var __17467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309_17466,(0),null);
var lines_17468__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17309_17466,(1),null);
var seq__17312_17469 = cljs.core.seq(lines_17468__$1);
var chunk__17313_17470 = null;
var count__17314_17471 = (0);
var i__17315_17472 = (0);
while(true){
if((i__17315_17472 < count__17314_17471)){
var vec__17316_17473 = chunk__17313_17470.cljs$core$IIndexed$_nth$arity$2(null,i__17315_17472);
var line_17474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17316_17473,(0),null);
var cols_17475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17316_17473,(1),null);
var seq__17319_17476 = cljs.core.seq(cols_17475);
var chunk__17320_17477 = null;
var count__17321_17478 = (0);
var i__17322_17479 = (0);
while(true){
if((i__17322_17479 < count__17321_17478)){
var vec__17326_17480 = chunk__17320_17477.cljs$core$IIndexed$_nth$arity$2(null,i__17322_17479);
var col_17481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17326_17480,(0),null);
var infos_17482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17326_17480,(1),null);
encode_cols(infos_17482,source_idx_17465,line_17474,col_17481);


var G__17483 = seq__17319_17476;
var G__17484 = chunk__17320_17477;
var G__17485 = count__17321_17478;
var G__17486 = (i__17322_17479 + (1));
seq__17319_17476 = G__17483;
chunk__17320_17477 = G__17484;
count__17321_17478 = G__17485;
i__17322_17479 = G__17486;
continue;
} else {
var temp__5457__auto___17487 = cljs.core.seq(seq__17319_17476);
if(temp__5457__auto___17487){
var seq__17319_17488__$1 = temp__5457__auto___17487;
if(cljs.core.chunked_seq_QMARK_(seq__17319_17488__$1)){
var c__4351__auto___17489 = cljs.core.chunk_first(seq__17319_17488__$1);
var G__17490 = cljs.core.chunk_rest(seq__17319_17488__$1);
var G__17491 = c__4351__auto___17489;
var G__17492 = cljs.core.count(c__4351__auto___17489);
var G__17493 = (0);
seq__17319_17476 = G__17490;
chunk__17320_17477 = G__17491;
count__17321_17478 = G__17492;
i__17322_17479 = G__17493;
continue;
} else {
var vec__17330_17494 = cljs.core.first(seq__17319_17488__$1);
var col_17495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17330_17494,(0),null);
var infos_17496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17330_17494,(1),null);
encode_cols(infos_17496,source_idx_17465,line_17474,col_17495);


var G__17497 = cljs.core.next(seq__17319_17488__$1);
var G__17498 = null;
var G__17499 = (0);
var G__17500 = (0);
seq__17319_17476 = G__17497;
chunk__17320_17477 = G__17498;
count__17321_17478 = G__17499;
i__17322_17479 = G__17500;
continue;
}
} else {
}
}
break;
}


var G__17501 = seq__17312_17469;
var G__17502 = chunk__17313_17470;
var G__17503 = count__17314_17471;
var G__17504 = (i__17315_17472 + (1));
seq__17312_17469 = G__17501;
chunk__17313_17470 = G__17502;
count__17314_17471 = G__17503;
i__17315_17472 = G__17504;
continue;
} else {
var temp__5457__auto___17505 = cljs.core.seq(seq__17312_17469);
if(temp__5457__auto___17505){
var seq__17312_17506__$1 = temp__5457__auto___17505;
if(cljs.core.chunked_seq_QMARK_(seq__17312_17506__$1)){
var c__4351__auto___17507 = cljs.core.chunk_first(seq__17312_17506__$1);
var G__17508 = cljs.core.chunk_rest(seq__17312_17506__$1);
var G__17509 = c__4351__auto___17507;
var G__17510 = cljs.core.count(c__4351__auto___17507);
var G__17511 = (0);
seq__17312_17469 = G__17508;
chunk__17313_17470 = G__17509;
count__17314_17471 = G__17510;
i__17315_17472 = G__17511;
continue;
} else {
var vec__17333_17512 = cljs.core.first(seq__17312_17506__$1);
var line_17513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17333_17512,(0),null);
var cols_17514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17333_17512,(1),null);
var seq__17336_17515 = cljs.core.seq(cols_17514);
var chunk__17337_17516 = null;
var count__17338_17517 = (0);
var i__17339_17518 = (0);
while(true){
if((i__17339_17518 < count__17338_17517)){
var vec__17340_17519 = chunk__17337_17516.cljs$core$IIndexed$_nth$arity$2(null,i__17339_17518);
var col_17520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340_17519,(0),null);
var infos_17521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340_17519,(1),null);
encode_cols(infos_17521,source_idx_17465,line_17513,col_17520);


var G__17522 = seq__17336_17515;
var G__17523 = chunk__17337_17516;
var G__17524 = count__17338_17517;
var G__17525 = (i__17339_17518 + (1));
seq__17336_17515 = G__17522;
chunk__17337_17516 = G__17523;
count__17338_17517 = G__17524;
i__17339_17518 = G__17525;
continue;
} else {
var temp__5457__auto___17526__$1 = cljs.core.seq(seq__17336_17515);
if(temp__5457__auto___17526__$1){
var seq__17336_17533__$1 = temp__5457__auto___17526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17336_17533__$1)){
var c__4351__auto___17534 = cljs.core.chunk_first(seq__17336_17533__$1);
var G__17535 = cljs.core.chunk_rest(seq__17336_17533__$1);
var G__17536 = c__4351__auto___17534;
var G__17537 = cljs.core.count(c__4351__auto___17534);
var G__17538 = (0);
seq__17336_17515 = G__17535;
chunk__17337_17516 = G__17536;
count__17338_17517 = G__17537;
i__17339_17518 = G__17538;
continue;
} else {
var vec__17349_17539 = cljs.core.first(seq__17336_17533__$1);
var col_17540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349_17539,(0),null);
var infos_17541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17349_17539,(1),null);
encode_cols(infos_17541,source_idx_17465,line_17513,col_17540);


var G__17542 = cljs.core.next(seq__17336_17533__$1);
var G__17543 = null;
var G__17544 = (0);
var G__17545 = (0);
seq__17336_17515 = G__17542;
chunk__17337_17516 = G__17543;
count__17338_17517 = G__17544;
i__17339_17518 = G__17545;
continue;
}
} else {
}
}
break;
}


var G__17546 = cljs.core.next(seq__17312_17506__$1);
var G__17547 = null;
var G__17548 = (0);
var G__17549 = (0);
seq__17312_17469 = G__17546;
chunk__17313_17470 = G__17547;
count__17314_17471 = G__17548;
i__17315_17472 = G__17549;
continue;
}
} else {
}
}
break;
}


var G__17550 = seq__17301_17460;
var G__17551 = chunk__17302_17461;
var G__17552 = count__17303_17462;
var G__17553 = (i__17304_17463 + (1));
seq__17301_17460 = G__17550;
chunk__17302_17461 = G__17551;
count__17303_17462 = G__17552;
i__17304_17463 = G__17553;
continue;
} else {
var temp__5457__auto___17554 = cljs.core.seq(seq__17301_17460);
if(temp__5457__auto___17554){
var seq__17301_17555__$1 = temp__5457__auto___17554;
if(cljs.core.chunked_seq_QMARK_(seq__17301_17555__$1)){
var c__4351__auto___17556 = cljs.core.chunk_first(seq__17301_17555__$1);
var G__17557 = cljs.core.chunk_rest(seq__17301_17555__$1);
var G__17558 = c__4351__auto___17556;
var G__17559 = cljs.core.count(c__4351__auto___17556);
var G__17560 = (0);
seq__17301_17460 = G__17557;
chunk__17302_17461 = G__17558;
count__17303_17462 = G__17559;
i__17304_17463 = G__17560;
continue;
} else {
var vec__17353_17561 = cljs.core.first(seq__17301_17555__$1);
var source_idx_17562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17353_17561,(0),null);
var vec__17356_17563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17353_17561,(1),null);
var __17564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17356_17563,(0),null);
var lines_17565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17356_17563,(1),null);
var seq__17359_17566 = cljs.core.seq(lines_17565__$1);
var chunk__17360_17567 = null;
var count__17361_17568 = (0);
var i__17362_17569 = (0);
while(true){
if((i__17362_17569 < count__17361_17568)){
var vec__17363_17570 = chunk__17360_17567.cljs$core$IIndexed$_nth$arity$2(null,i__17362_17569);
var line_17571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17570,(0),null);
var cols_17572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17570,(1),null);
var seq__17366_17573 = cljs.core.seq(cols_17572);
var chunk__17367_17574 = null;
var count__17368_17575 = (0);
var i__17369_17576 = (0);
while(true){
if((i__17369_17576 < count__17368_17575)){
var vec__17370_17577 = chunk__17367_17574.cljs$core$IIndexed$_nth$arity$2(null,i__17369_17576);
var col_17578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17370_17577,(0),null);
var infos_17579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17370_17577,(1),null);
encode_cols(infos_17579,source_idx_17562,line_17571,col_17578);


var G__17580 = seq__17366_17573;
var G__17581 = chunk__17367_17574;
var G__17582 = count__17368_17575;
var G__17583 = (i__17369_17576 + (1));
seq__17366_17573 = G__17580;
chunk__17367_17574 = G__17581;
count__17368_17575 = G__17582;
i__17369_17576 = G__17583;
continue;
} else {
var temp__5457__auto___17584__$1 = cljs.core.seq(seq__17366_17573);
if(temp__5457__auto___17584__$1){
var seq__17366_17585__$1 = temp__5457__auto___17584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17366_17585__$1)){
var c__4351__auto___17586 = cljs.core.chunk_first(seq__17366_17585__$1);
var G__17587 = cljs.core.chunk_rest(seq__17366_17585__$1);
var G__17588 = c__4351__auto___17586;
var G__17589 = cljs.core.count(c__4351__auto___17586);
var G__17590 = (0);
seq__17366_17573 = G__17587;
chunk__17367_17574 = G__17588;
count__17368_17575 = G__17589;
i__17369_17576 = G__17590;
continue;
} else {
var vec__17376_17591 = cljs.core.first(seq__17366_17585__$1);
var col_17592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376_17591,(0),null);
var infos_17593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376_17591,(1),null);
encode_cols(infos_17593,source_idx_17562,line_17571,col_17592);


var G__17596 = cljs.core.next(seq__17366_17585__$1);
var G__17597 = null;
var G__17598 = (0);
var G__17599 = (0);
seq__17366_17573 = G__17596;
chunk__17367_17574 = G__17597;
count__17368_17575 = G__17598;
i__17369_17576 = G__17599;
continue;
}
} else {
}
}
break;
}


var G__17602 = seq__17359_17566;
var G__17603 = chunk__17360_17567;
var G__17604 = count__17361_17568;
var G__17605 = (i__17362_17569 + (1));
seq__17359_17566 = G__17602;
chunk__17360_17567 = G__17603;
count__17361_17568 = G__17604;
i__17362_17569 = G__17605;
continue;
} else {
var temp__5457__auto___17606__$1 = cljs.core.seq(seq__17359_17566);
if(temp__5457__auto___17606__$1){
var seq__17359_17607__$1 = temp__5457__auto___17606__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17359_17607__$1)){
var c__4351__auto___17608 = cljs.core.chunk_first(seq__17359_17607__$1);
var G__17609 = cljs.core.chunk_rest(seq__17359_17607__$1);
var G__17610 = c__4351__auto___17608;
var G__17611 = cljs.core.count(c__4351__auto___17608);
var G__17612 = (0);
seq__17359_17566 = G__17609;
chunk__17360_17567 = G__17610;
count__17361_17568 = G__17611;
i__17362_17569 = G__17612;
continue;
} else {
var vec__17379_17613 = cljs.core.first(seq__17359_17607__$1);
var line_17614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17379_17613,(0),null);
var cols_17615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17379_17613,(1),null);
var seq__17382_17616 = cljs.core.seq(cols_17615);
var chunk__17383_17617 = null;
var count__17384_17618 = (0);
var i__17385_17619 = (0);
while(true){
if((i__17385_17619 < count__17384_17618)){
var vec__17386_17620 = chunk__17383_17617.cljs$core$IIndexed$_nth$arity$2(null,i__17385_17619);
var col_17621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17386_17620,(0),null);
var infos_17622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17386_17620,(1),null);
encode_cols(infos_17622,source_idx_17562,line_17614,col_17621);


var G__17623 = seq__17382_17616;
var G__17624 = chunk__17383_17617;
var G__17625 = count__17384_17618;
var G__17626 = (i__17385_17619 + (1));
seq__17382_17616 = G__17623;
chunk__17383_17617 = G__17624;
count__17384_17618 = G__17625;
i__17385_17619 = G__17626;
continue;
} else {
var temp__5457__auto___17627__$2 = cljs.core.seq(seq__17382_17616);
if(temp__5457__auto___17627__$2){
var seq__17382_17628__$1 = temp__5457__auto___17627__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17382_17628__$1)){
var c__4351__auto___17629 = cljs.core.chunk_first(seq__17382_17628__$1);
var G__17630 = cljs.core.chunk_rest(seq__17382_17628__$1);
var G__17631 = c__4351__auto___17629;
var G__17632 = cljs.core.count(c__4351__auto___17629);
var G__17633 = (0);
seq__17382_17616 = G__17630;
chunk__17383_17617 = G__17631;
count__17384_17618 = G__17632;
i__17385_17619 = G__17633;
continue;
} else {
var vec__17402_17636 = cljs.core.first(seq__17382_17628__$1);
var col_17637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402_17636,(0),null);
var infos_17638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402_17636,(1),null);
encode_cols(infos_17638,source_idx_17562,line_17614,col_17637);


var G__17641 = cljs.core.next(seq__17382_17628__$1);
var G__17642 = null;
var G__17643 = (0);
var G__17644 = (0);
seq__17382_17616 = G__17641;
chunk__17383_17617 = G__17642;
count__17384_17618 = G__17643;
i__17385_17619 = G__17644;
continue;
}
} else {
}
}
break;
}


var G__17645 = cljs.core.next(seq__17359_17607__$1);
var G__17646 = null;
var G__17647 = (0);
var G__17648 = (0);
seq__17359_17566 = G__17645;
chunk__17360_17567 = G__17646;
count__17361_17568 = G__17647;
i__17362_17569 = G__17648;
continue;
}
} else {
}
}
break;
}


var G__17649 = cljs.core.next(seq__17301_17555__$1);
var G__17650 = null;
var G__17651 = (0);
var G__17652 = (0);
seq__17301_17460 = G__17649;
chunk__17302_17461 = G__17650;
count__17303_17462 = G__17651;
i__17304_17463 = G__17652;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__17411 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17278_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17278_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17279_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__17279_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__17280_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__17280_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__17422 = G__17411;
var G__17423_17655 = G__17422;
var G__17424_17656 = "sourcesContent";
var G__17425_17657 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__17423_17655,G__17424_17656,G__17425_17657);

return G__17422;
} else {
return G__17411;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__17658 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__17661 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17661,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17661,(1),null);
var G__17667 = cljs.core.next(col_map_seq);
var G__17668 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__17661,col,infos,vec__17658,line,col_map){
return (function (v,p__17664){
var map__17665 = p__17664;
var map__17665__$1 = ((((!((map__17665 == null)))?(((((map__17665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17665):map__17665);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__17661,col,infos,vec__17658,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__17667;
new_cols = G__17668;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__17669 = cljs.core.next(line_map_seq);
var G__17670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__17669;
new_lines = G__17670;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__17671_17760 = cljs.core.seq(reverse_map);
var chunk__17672_17761 = null;
var count__17673_17762 = (0);
var i__17674_17763 = (0);
while(true){
if((i__17674_17763 < count__17673_17762)){
var vec__17675_17764 = chunk__17672_17761.cljs$core$IIndexed$_nth$arity$2(null,i__17674_17763);
var line_17765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675_17764,(0),null);
var columns_17766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675_17764,(1),null);
var seq__17678_17767 = cljs.core.seq(columns_17766);
var chunk__17679_17768 = null;
var count__17680_17769 = (0);
var i__17681_17770 = (0);
while(true){
if((i__17681_17770 < count__17680_17769)){
var vec__17682_17771 = chunk__17679_17768.cljs$core$IIndexed$_nth$arity$2(null,i__17681_17770);
var column_17772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17771,(0),null);
var column_info_17773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682_17771,(1),null);
var seq__17685_17774 = cljs.core.seq(column_info_17773);
var chunk__17686_17775 = null;
var count__17687_17776 = (0);
var i__17688_17777 = (0);
while(true){
if((i__17688_17777 < count__17687_17776)){
var map__17689_17778 = chunk__17686_17775.cljs$core$IIndexed$_nth$arity$2(null,i__17688_17777);
var map__17689_17779__$1 = ((((!((map__17689_17778 == null)))?(((((map__17689_17778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17689_17778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17689_17778):map__17689_17778);
var gline_17780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17689_17779__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17689_17779__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17689_17779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17780], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17685_17774,chunk__17686_17775,count__17687_17776,i__17688_17777,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17689_17778,map__17689_17779__$1,gline_17780,gcol_17781,name_17782,vec__17682_17771,column_17772,column_info_17773,vec__17675_17764,line_17765,columns_17766,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17781], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17765,new cljs.core.Keyword(null,"col","col",-1959363084),column_17772,new cljs.core.Keyword(null,"name","name",1843675177),name_17782], null));
});})(seq__17685_17774,chunk__17686_17775,count__17687_17776,i__17688_17777,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17689_17778,map__17689_17779__$1,gline_17780,gcol_17781,name_17782,vec__17682_17771,column_17772,column_info_17773,vec__17675_17764,line_17765,columns_17766,inverted))
,cljs.core.sorted_map()));


var G__17787 = seq__17685_17774;
var G__17788 = chunk__17686_17775;
var G__17789 = count__17687_17776;
var G__17790 = (i__17688_17777 + (1));
seq__17685_17774 = G__17787;
chunk__17686_17775 = G__17788;
count__17687_17776 = G__17789;
i__17688_17777 = G__17790;
continue;
} else {
var temp__5457__auto___17793 = cljs.core.seq(seq__17685_17774);
if(temp__5457__auto___17793){
var seq__17685_17796__$1 = temp__5457__auto___17793;
if(cljs.core.chunked_seq_QMARK_(seq__17685_17796__$1)){
var c__4351__auto___17797 = cljs.core.chunk_first(seq__17685_17796__$1);
var G__17798 = cljs.core.chunk_rest(seq__17685_17796__$1);
var G__17799 = c__4351__auto___17797;
var G__17800 = cljs.core.count(c__4351__auto___17797);
var G__17801 = (0);
seq__17685_17774 = G__17798;
chunk__17686_17775 = G__17799;
count__17687_17776 = G__17800;
i__17688_17777 = G__17801;
continue;
} else {
var map__17691_17803 = cljs.core.first(seq__17685_17796__$1);
var map__17691_17804__$1 = ((((!((map__17691_17803 == null)))?(((((map__17691_17803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17691_17803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17691_17803):map__17691_17803);
var gline_17805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691_17804__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691_17804__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17691_17804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17805], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17685_17774,chunk__17686_17775,count__17687_17776,i__17688_17777,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17691_17803,map__17691_17804__$1,gline_17805,gcol_17806,name_17807,seq__17685_17796__$1,temp__5457__auto___17793,vec__17682_17771,column_17772,column_info_17773,vec__17675_17764,line_17765,columns_17766,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17806], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17765,new cljs.core.Keyword(null,"col","col",-1959363084),column_17772,new cljs.core.Keyword(null,"name","name",1843675177),name_17807], null));
});})(seq__17685_17774,chunk__17686_17775,count__17687_17776,i__17688_17777,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17691_17803,map__17691_17804__$1,gline_17805,gcol_17806,name_17807,seq__17685_17796__$1,temp__5457__auto___17793,vec__17682_17771,column_17772,column_info_17773,vec__17675_17764,line_17765,columns_17766,inverted))
,cljs.core.sorted_map()));


var G__17813 = cljs.core.next(seq__17685_17796__$1);
var G__17814 = null;
var G__17815 = (0);
var G__17816 = (0);
seq__17685_17774 = G__17813;
chunk__17686_17775 = G__17814;
count__17687_17776 = G__17815;
i__17688_17777 = G__17816;
continue;
}
} else {
}
}
break;
}


var G__17817 = seq__17678_17767;
var G__17818 = chunk__17679_17768;
var G__17819 = count__17680_17769;
var G__17820 = (i__17681_17770 + (1));
seq__17678_17767 = G__17817;
chunk__17679_17768 = G__17818;
count__17680_17769 = G__17819;
i__17681_17770 = G__17820;
continue;
} else {
var temp__5457__auto___17821 = cljs.core.seq(seq__17678_17767);
if(temp__5457__auto___17821){
var seq__17678_17822__$1 = temp__5457__auto___17821;
if(cljs.core.chunked_seq_QMARK_(seq__17678_17822__$1)){
var c__4351__auto___17823 = cljs.core.chunk_first(seq__17678_17822__$1);
var G__17824 = cljs.core.chunk_rest(seq__17678_17822__$1);
var G__17825 = c__4351__auto___17823;
var G__17826 = cljs.core.count(c__4351__auto___17823);
var G__17827 = (0);
seq__17678_17767 = G__17824;
chunk__17679_17768 = G__17825;
count__17680_17769 = G__17826;
i__17681_17770 = G__17827;
continue;
} else {
var vec__17693_17828 = cljs.core.first(seq__17678_17822__$1);
var column_17829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17693_17828,(0),null);
var column_info_17830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17693_17828,(1),null);
var seq__17696_17832 = cljs.core.seq(column_info_17830);
var chunk__17697_17833 = null;
var count__17698_17834 = (0);
var i__17699_17835 = (0);
while(true){
if((i__17699_17835 < count__17698_17834)){
var map__17700_17836 = chunk__17697_17833.cljs$core$IIndexed$_nth$arity$2(null,i__17699_17835);
var map__17700_17837__$1 = ((((!((map__17700_17836 == null)))?(((((map__17700_17836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17700_17836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17700_17836):map__17700_17836);
var gline_17838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700_17837__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700_17837__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700_17837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17838], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17696_17832,chunk__17697_17833,count__17698_17834,i__17699_17835,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17700_17836,map__17700_17837__$1,gline_17838,gcol_17839,name_17840,vec__17693_17828,column_17829,column_info_17830,seq__17678_17822__$1,temp__5457__auto___17821,vec__17675_17764,line_17765,columns_17766,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17839], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17765,new cljs.core.Keyword(null,"col","col",-1959363084),column_17829,new cljs.core.Keyword(null,"name","name",1843675177),name_17840], null));
});})(seq__17696_17832,chunk__17697_17833,count__17698_17834,i__17699_17835,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17700_17836,map__17700_17837__$1,gline_17838,gcol_17839,name_17840,vec__17693_17828,column_17829,column_info_17830,seq__17678_17822__$1,temp__5457__auto___17821,vec__17675_17764,line_17765,columns_17766,inverted))
,cljs.core.sorted_map()));


var G__17841 = seq__17696_17832;
var G__17842 = chunk__17697_17833;
var G__17843 = count__17698_17834;
var G__17844 = (i__17699_17835 + (1));
seq__17696_17832 = G__17841;
chunk__17697_17833 = G__17842;
count__17698_17834 = G__17843;
i__17699_17835 = G__17844;
continue;
} else {
var temp__5457__auto___17849__$1 = cljs.core.seq(seq__17696_17832);
if(temp__5457__auto___17849__$1){
var seq__17696_17850__$1 = temp__5457__auto___17849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17696_17850__$1)){
var c__4351__auto___17852 = cljs.core.chunk_first(seq__17696_17850__$1);
var G__17853 = cljs.core.chunk_rest(seq__17696_17850__$1);
var G__17854 = c__4351__auto___17852;
var G__17855 = cljs.core.count(c__4351__auto___17852);
var G__17856 = (0);
seq__17696_17832 = G__17853;
chunk__17697_17833 = G__17854;
count__17698_17834 = G__17855;
i__17699_17835 = G__17856;
continue;
} else {
var map__17702_17857 = cljs.core.first(seq__17696_17850__$1);
var map__17702_17858__$1 = ((((!((map__17702_17857 == null)))?(((((map__17702_17857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17702_17857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17702_17857):map__17702_17857);
var gline_17859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702_17858__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702_17858__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702_17858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17859], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17696_17832,chunk__17697_17833,count__17698_17834,i__17699_17835,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17702_17857,map__17702_17858__$1,gline_17859,gcol_17860,name_17861,seq__17696_17850__$1,temp__5457__auto___17849__$1,vec__17693_17828,column_17829,column_info_17830,seq__17678_17822__$1,temp__5457__auto___17821,vec__17675_17764,line_17765,columns_17766,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17765,new cljs.core.Keyword(null,"col","col",-1959363084),column_17829,new cljs.core.Keyword(null,"name","name",1843675177),name_17861], null));
});})(seq__17696_17832,chunk__17697_17833,count__17698_17834,i__17699_17835,seq__17678_17767,chunk__17679_17768,count__17680_17769,i__17681_17770,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17702_17857,map__17702_17858__$1,gline_17859,gcol_17860,name_17861,seq__17696_17850__$1,temp__5457__auto___17849__$1,vec__17693_17828,column_17829,column_info_17830,seq__17678_17822__$1,temp__5457__auto___17821,vec__17675_17764,line_17765,columns_17766,inverted))
,cljs.core.sorted_map()));


var G__17865 = cljs.core.next(seq__17696_17850__$1);
var G__17866 = null;
var G__17867 = (0);
var G__17868 = (0);
seq__17696_17832 = G__17865;
chunk__17697_17833 = G__17866;
count__17698_17834 = G__17867;
i__17699_17835 = G__17868;
continue;
}
} else {
}
}
break;
}


var G__17870 = cljs.core.next(seq__17678_17822__$1);
var G__17871 = null;
var G__17872 = (0);
var G__17873 = (0);
seq__17678_17767 = G__17870;
chunk__17679_17768 = G__17871;
count__17680_17769 = G__17872;
i__17681_17770 = G__17873;
continue;
}
} else {
}
}
break;
}


var G__17875 = seq__17671_17760;
var G__17876 = chunk__17672_17761;
var G__17877 = count__17673_17762;
var G__17878 = (i__17674_17763 + (1));
seq__17671_17760 = G__17875;
chunk__17672_17761 = G__17876;
count__17673_17762 = G__17877;
i__17674_17763 = G__17878;
continue;
} else {
var temp__5457__auto___17879 = cljs.core.seq(seq__17671_17760);
if(temp__5457__auto___17879){
var seq__17671_17880__$1 = temp__5457__auto___17879;
if(cljs.core.chunked_seq_QMARK_(seq__17671_17880__$1)){
var c__4351__auto___17884 = cljs.core.chunk_first(seq__17671_17880__$1);
var G__17885 = cljs.core.chunk_rest(seq__17671_17880__$1);
var G__17886 = c__4351__auto___17884;
var G__17887 = cljs.core.count(c__4351__auto___17884);
var G__17888 = (0);
seq__17671_17760 = G__17885;
chunk__17672_17761 = G__17886;
count__17673_17762 = G__17887;
i__17674_17763 = G__17888;
continue;
} else {
var vec__17704_17889 = cljs.core.first(seq__17671_17880__$1);
var line_17890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704_17889,(0),null);
var columns_17891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17704_17889,(1),null);
var seq__17707_17893 = cljs.core.seq(columns_17891);
var chunk__17708_17894 = null;
var count__17709_17895 = (0);
var i__17710_17896 = (0);
while(true){
if((i__17710_17896 < count__17709_17895)){
var vec__17711_17903 = chunk__17708_17894.cljs$core$IIndexed$_nth$arity$2(null,i__17710_17896);
var column_17904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17711_17903,(0),null);
var column_info_17905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17711_17903,(1),null);
var seq__17714_17906 = cljs.core.seq(column_info_17905);
var chunk__17715_17907 = null;
var count__17716_17908 = (0);
var i__17717_17909 = (0);
while(true){
if((i__17717_17909 < count__17716_17908)){
var map__17718_17910 = chunk__17715_17907.cljs$core$IIndexed$_nth$arity$2(null,i__17717_17909);
var map__17718_17911__$1 = ((((!((map__17718_17910 == null)))?(((((map__17718_17910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17718_17910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17718_17910):map__17718_17910);
var gline_17912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17718_17911__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17718_17911__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17718_17911__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17912], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17714_17906,chunk__17715_17907,count__17716_17908,i__17717_17909,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17718_17910,map__17718_17911__$1,gline_17912,gcol_17913,name_17914,vec__17711_17903,column_17904,column_info_17905,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17913], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17890,new cljs.core.Keyword(null,"col","col",-1959363084),column_17904,new cljs.core.Keyword(null,"name","name",1843675177),name_17914], null));
});})(seq__17714_17906,chunk__17715_17907,count__17716_17908,i__17717_17909,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17718_17910,map__17718_17911__$1,gline_17912,gcol_17913,name_17914,vec__17711_17903,column_17904,column_info_17905,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted))
,cljs.core.sorted_map()));


var G__17915 = seq__17714_17906;
var G__17916 = chunk__17715_17907;
var G__17917 = count__17716_17908;
var G__17918 = (i__17717_17909 + (1));
seq__17714_17906 = G__17915;
chunk__17715_17907 = G__17916;
count__17716_17908 = G__17917;
i__17717_17909 = G__17918;
continue;
} else {
var temp__5457__auto___17919__$1 = cljs.core.seq(seq__17714_17906);
if(temp__5457__auto___17919__$1){
var seq__17714_17920__$1 = temp__5457__auto___17919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17714_17920__$1)){
var c__4351__auto___17921 = cljs.core.chunk_first(seq__17714_17920__$1);
var G__17922 = cljs.core.chunk_rest(seq__17714_17920__$1);
var G__17923 = c__4351__auto___17921;
var G__17924 = cljs.core.count(c__4351__auto___17921);
var G__17925 = (0);
seq__17714_17906 = G__17922;
chunk__17715_17907 = G__17923;
count__17716_17908 = G__17924;
i__17717_17909 = G__17925;
continue;
} else {
var map__17727_17926 = cljs.core.first(seq__17714_17920__$1);
var map__17727_17927__$1 = ((((!((map__17727_17926 == null)))?(((((map__17727_17926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17727_17926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17727_17926):map__17727_17926);
var gline_17928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17727_17927__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17727_17927__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17727_17927__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17928], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17714_17906,chunk__17715_17907,count__17716_17908,i__17717_17909,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17727_17926,map__17727_17927__$1,gline_17928,gcol_17929,name_17930,seq__17714_17920__$1,temp__5457__auto___17919__$1,vec__17711_17903,column_17904,column_info_17905,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17929], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17890,new cljs.core.Keyword(null,"col","col",-1959363084),column_17904,new cljs.core.Keyword(null,"name","name",1843675177),name_17930], null));
});})(seq__17714_17906,chunk__17715_17907,count__17716_17908,i__17717_17909,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17727_17926,map__17727_17927__$1,gline_17928,gcol_17929,name_17930,seq__17714_17920__$1,temp__5457__auto___17919__$1,vec__17711_17903,column_17904,column_info_17905,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted))
,cljs.core.sorted_map()));


var G__17941 = cljs.core.next(seq__17714_17920__$1);
var G__17942 = null;
var G__17943 = (0);
var G__17944 = (0);
seq__17714_17906 = G__17941;
chunk__17715_17907 = G__17942;
count__17716_17908 = G__17943;
i__17717_17909 = G__17944;
continue;
}
} else {
}
}
break;
}


var G__17945 = seq__17707_17893;
var G__17946 = chunk__17708_17894;
var G__17947 = count__17709_17895;
var G__17948 = (i__17710_17896 + (1));
seq__17707_17893 = G__17945;
chunk__17708_17894 = G__17946;
count__17709_17895 = G__17947;
i__17710_17896 = G__17948;
continue;
} else {
var temp__5457__auto___17949__$1 = cljs.core.seq(seq__17707_17893);
if(temp__5457__auto___17949__$1){
var seq__17707_17950__$1 = temp__5457__auto___17949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17707_17950__$1)){
var c__4351__auto___17951 = cljs.core.chunk_first(seq__17707_17950__$1);
var G__17952 = cljs.core.chunk_rest(seq__17707_17950__$1);
var G__17953 = c__4351__auto___17951;
var G__17954 = cljs.core.count(c__4351__auto___17951);
var G__17955 = (0);
seq__17707_17893 = G__17952;
chunk__17708_17894 = G__17953;
count__17709_17895 = G__17954;
i__17710_17896 = G__17955;
continue;
} else {
var vec__17730_17956 = cljs.core.first(seq__17707_17950__$1);
var column_17957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730_17956,(0),null);
var column_info_17958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17730_17956,(1),null);
var seq__17734_17959 = cljs.core.seq(column_info_17958);
var chunk__17735_17960 = null;
var count__17736_17961 = (0);
var i__17737_17962 = (0);
while(true){
if((i__17737_17962 < count__17736_17961)){
var map__17738_17963 = chunk__17735_17960.cljs$core$IIndexed$_nth$arity$2(null,i__17737_17962);
var map__17738_17964__$1 = ((((!((map__17738_17963 == null)))?(((((map__17738_17963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17738_17963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17738_17963):map__17738_17963);
var gline_17965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17738_17964__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17738_17964__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17738_17964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17965], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17734_17959,chunk__17735_17960,count__17736_17961,i__17737_17962,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17738_17963,map__17738_17964__$1,gline_17965,gcol_17966,name_17967,vec__17730_17956,column_17957,column_info_17958,seq__17707_17950__$1,temp__5457__auto___17949__$1,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17890,new cljs.core.Keyword(null,"col","col",-1959363084),column_17957,new cljs.core.Keyword(null,"name","name",1843675177),name_17967], null));
});})(seq__17734_17959,chunk__17735_17960,count__17736_17961,i__17737_17962,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17738_17963,map__17738_17964__$1,gline_17965,gcol_17966,name_17967,vec__17730_17956,column_17957,column_info_17958,seq__17707_17950__$1,temp__5457__auto___17949__$1,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted))
,cljs.core.sorted_map()));


var G__17969 = seq__17734_17959;
var G__17970 = chunk__17735_17960;
var G__17971 = count__17736_17961;
var G__17972 = (i__17737_17962 + (1));
seq__17734_17959 = G__17969;
chunk__17735_17960 = G__17970;
count__17736_17961 = G__17971;
i__17737_17962 = G__17972;
continue;
} else {
var temp__5457__auto___17973__$2 = cljs.core.seq(seq__17734_17959);
if(temp__5457__auto___17973__$2){
var seq__17734_17974__$1 = temp__5457__auto___17973__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17734_17974__$1)){
var c__4351__auto___17975 = cljs.core.chunk_first(seq__17734_17974__$1);
var G__17976 = cljs.core.chunk_rest(seq__17734_17974__$1);
var G__17977 = c__4351__auto___17975;
var G__17978 = cljs.core.count(c__4351__auto___17975);
var G__17979 = (0);
seq__17734_17959 = G__17976;
chunk__17735_17960 = G__17977;
count__17736_17961 = G__17978;
i__17737_17962 = G__17979;
continue;
} else {
var map__17749_17980 = cljs.core.first(seq__17734_17974__$1);
var map__17749_17981__$1 = ((((!((map__17749_17980 == null)))?(((((map__17749_17980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17749_17980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17749_17980):map__17749_17980);
var gline_17982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17749_17981__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17749_17981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17749_17981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17982], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17734_17959,chunk__17735_17960,count__17736_17961,i__17737_17962,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17749_17980,map__17749_17981__$1,gline_17982,gcol_17983,name_17984,seq__17734_17974__$1,temp__5457__auto___17973__$2,vec__17730_17956,column_17957,column_info_17958,seq__17707_17950__$1,temp__5457__auto___17949__$1,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17983], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17890,new cljs.core.Keyword(null,"col","col",-1959363084),column_17957,new cljs.core.Keyword(null,"name","name",1843675177),name_17984], null));
});})(seq__17734_17959,chunk__17735_17960,count__17736_17961,i__17737_17962,seq__17707_17893,chunk__17708_17894,count__17709_17895,i__17710_17896,seq__17671_17760,chunk__17672_17761,count__17673_17762,i__17674_17763,map__17749_17980,map__17749_17981__$1,gline_17982,gcol_17983,name_17984,seq__17734_17974__$1,temp__5457__auto___17973__$2,vec__17730_17956,column_17957,column_info_17958,seq__17707_17950__$1,temp__5457__auto___17949__$1,vec__17704_17889,line_17890,columns_17891,seq__17671_17880__$1,temp__5457__auto___17879,inverted))
,cljs.core.sorted_map()));


var G__17996 = cljs.core.next(seq__17734_17974__$1);
var G__17997 = null;
var G__17998 = (0);
var G__17999 = (0);
seq__17734_17959 = G__17996;
chunk__17735_17960 = G__17997;
count__17736_17961 = G__17998;
i__17737_17962 = G__17999;
continue;
}
} else {
}
}
break;
}


var G__18000 = cljs.core.next(seq__17707_17950__$1);
var G__18001 = null;
var G__18002 = (0);
var G__18003 = (0);
seq__17707_17893 = G__18000;
chunk__17708_17894 = G__18001;
count__17709_17895 = G__18002;
i__17710_17896 = G__18003;
continue;
}
} else {
}
}
break;
}


var G__18004 = cljs.core.next(seq__17671_17880__$1);
var G__18005 = null;
var G__18006 = (0);
var G__18007 = (0);
seq__17671_17760 = G__18004;
chunk__17672_17761 = G__18005;
count__17673_17762 = G__18006;
i__17674_17763 = G__18007;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
