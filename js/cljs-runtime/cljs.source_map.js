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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__30497){
var vec__30498 = p__30497;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(1),null);
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
var vec__30505 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(4),null);
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
var vec__30511 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30511,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30511,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30511,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30511,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30511,(4),null);
var vec__30514 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30514,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30514,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30514,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30514,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30514,(4),null);
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
var map__30521 = segmap;
var map__30521__$1 = ((((!((map__30521 == null)))?(((((map__30521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30521):map__30521);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30521__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30521__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30521__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__30521,map__30521__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__30534 = arguments.length;
switch (G__30534) {
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
var vec__30535 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30545 = cljs.core.next(segs__$1);
var G__30546 = nrelseg;
var G__30547 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30545;
relseg__$1 = G__30546;
result__$1 = G__30547;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(1),null);
var G__30548 = (gline + (1));
var G__30549 = cljs.core.next(lines__$1);
var G__30550 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30551 = result__$1;
gline = G__30548;
lines__$1 = G__30549;
relseg = G__30550;
result = G__30551;
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
var map__30553 = segmap;
var map__30553__$1 = ((((!((map__30553 == null)))?(((((map__30553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30553):map__30553);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__30553,map__30553__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__30553,map__30553__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__30552_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30552_SHARP_,d__$1);
});})(map__30553,map__30553__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__30553,map__30553__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__30578 = arguments.length;
switch (G__30578) {
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
var vec__30582 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__30590 = cljs.core.next(segs__$1);
var G__30591 = nrelseg;
var G__30592 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__30590;
relseg__$1 = G__30591;
result__$1 = G__30592;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30582,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30582,(1),null);
var G__30594 = (gline + (1));
var G__30595 = cljs.core.next(lines__$1);
var G__30596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__30597 = result__$1;
gline = G__30594;
lines__$1 = G__30595;
relseg = G__30596;
result = G__30597;
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
return (function (p__30598){
var vec__30599 = p__30598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30599,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__30603){
var vec__30607 = p__30603;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(4),null);
var seg = vec__30607;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__30607,gcol,sidx,line,col,name,seg,relseg){
return (function (p__30616){
var vec__30617 = p__30616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__30607,gcol,sidx,line,col,name,seg,relseg))
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
var seq__30653 = cljs.core.seq(infos);
var chunk__30654 = null;
var count__30655 = (0);
var i__30656 = (0);
while(true){
if((i__30656 < count__30655)){
var info = chunk__30654.cljs$core$IIndexed$_nth$arity$2(null,i__30656);
var segv_30785 = info__GT_segv(info,source_idx,line,col);
var gline_30786 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30787 = cljs.core.count(cljs.core.deref(lines));
if((gline_30786 > (lc_30787 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30653,chunk__30654,count__30655,i__30656,segv_30785,gline_30786,lc_30787,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30786 - (lc_30787 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30785], null));
});})(seq__30653,chunk__30654,count__30655,i__30656,segv_30785,gline_30786,lc_30787,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30653,chunk__30654,count__30655,i__30656,segv_30785,gline_30786,lc_30787,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30786], null),cljs.core.conj,segv_30785);
});})(seq__30653,chunk__30654,count__30655,i__30656,segv_30785,gline_30786,lc_30787,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30791 = seq__30653;
var G__30792 = chunk__30654;
var G__30793 = count__30655;
var G__30794 = (i__30656 + (1));
seq__30653 = G__30791;
chunk__30654 = G__30792;
count__30655 = G__30793;
i__30656 = G__30794;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30653);
if(temp__5457__auto__){
var seq__30653__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30653__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__30653__$1);
var G__30796 = cljs.core.chunk_rest(seq__30653__$1);
var G__30797 = c__4351__auto__;
var G__30798 = cljs.core.count(c__4351__auto__);
var G__30799 = (0);
seq__30653 = G__30796;
chunk__30654 = G__30797;
count__30655 = G__30798;
i__30656 = G__30799;
continue;
} else {
var info = cljs.core.first(seq__30653__$1);
var segv_30804 = info__GT_segv(info,source_idx,line,col);
var gline_30805 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_30806 = cljs.core.count(cljs.core.deref(lines));
if((gline_30805 > (lc_30806 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30653,chunk__30654,count__30655,i__30656,segv_30804,gline_30805,lc_30806,info,seq__30653__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_30805 - (lc_30806 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_30804], null));
});})(seq__30653,chunk__30654,count__30655,i__30656,segv_30804,gline_30805,lc_30806,info,seq__30653__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30653,chunk__30654,count__30655,i__30656,segv_30804,gline_30805,lc_30806,info,seq__30653__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30805], null),cljs.core.conj,segv_30804);
});})(seq__30653,chunk__30654,count__30655,i__30656,segv_30804,gline_30805,lc_30806,info,seq__30653__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__30825 = cljs.core.next(seq__30653__$1);
var G__30826 = null;
var G__30827 = (0);
var G__30828 = (0);
seq__30653 = G__30825;
chunk__30654 = G__30826;
count__30655 = G__30827;
i__30656 = G__30828;
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
var seq__30677_30829 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__30678_30830 = null;
var count__30679_30831 = (0);
var i__30680_30832 = (0);
while(true){
if((i__30680_30832 < count__30679_30831)){
var vec__30681_30838 = chunk__30678_30830.cljs$core$IIndexed$_nth$arity$2(null,i__30680_30832);
var source_idx_30839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30681_30838,(0),null);
var vec__30684_30840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30681_30838,(1),null);
var __30841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684_30840,(0),null);
var lines_30842__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684_30840,(1),null);
var seq__30687_30843 = cljs.core.seq(lines_30842__$1);
var chunk__30688_30844 = null;
var count__30689_30845 = (0);
var i__30690_30846 = (0);
while(true){
if((i__30690_30846 < count__30689_30845)){
var vec__30691_30847 = chunk__30688_30844.cljs$core$IIndexed$_nth$arity$2(null,i__30690_30846);
var line_30848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30691_30847,(0),null);
var cols_30849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30691_30847,(1),null);
var seq__30694_30857 = cljs.core.seq(cols_30849);
var chunk__30695_30858 = null;
var count__30696_30859 = (0);
var i__30697_30860 = (0);
while(true){
if((i__30697_30860 < count__30696_30859)){
var vec__30698_30861 = chunk__30695_30858.cljs$core$IIndexed$_nth$arity$2(null,i__30697_30860);
var col_30862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30698_30861,(0),null);
var infos_30863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30698_30861,(1),null);
encode_cols(infos_30863,source_idx_30839,line_30848,col_30862);


var G__30864 = seq__30694_30857;
var G__30865 = chunk__30695_30858;
var G__30866 = count__30696_30859;
var G__30867 = (i__30697_30860 + (1));
seq__30694_30857 = G__30864;
chunk__30695_30858 = G__30865;
count__30696_30859 = G__30866;
i__30697_30860 = G__30867;
continue;
} else {
var temp__5457__auto___30868 = cljs.core.seq(seq__30694_30857);
if(temp__5457__auto___30868){
var seq__30694_30869__$1 = temp__5457__auto___30868;
if(cljs.core.chunked_seq_QMARK_(seq__30694_30869__$1)){
var c__4351__auto___30870 = cljs.core.chunk_first(seq__30694_30869__$1);
var G__30871 = cljs.core.chunk_rest(seq__30694_30869__$1);
var G__30872 = c__4351__auto___30870;
var G__30873 = cljs.core.count(c__4351__auto___30870);
var G__30874 = (0);
seq__30694_30857 = G__30871;
chunk__30695_30858 = G__30872;
count__30696_30859 = G__30873;
i__30697_30860 = G__30874;
continue;
} else {
var vec__30708_30875 = cljs.core.first(seq__30694_30869__$1);
var col_30876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708_30875,(0),null);
var infos_30877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708_30875,(1),null);
encode_cols(infos_30877,source_idx_30839,line_30848,col_30876);


var G__30878 = cljs.core.next(seq__30694_30869__$1);
var G__30879 = null;
var G__30880 = (0);
var G__30881 = (0);
seq__30694_30857 = G__30878;
chunk__30695_30858 = G__30879;
count__30696_30859 = G__30880;
i__30697_30860 = G__30881;
continue;
}
} else {
}
}
break;
}


var G__30885 = seq__30687_30843;
var G__30886 = chunk__30688_30844;
var G__30887 = count__30689_30845;
var G__30888 = (i__30690_30846 + (1));
seq__30687_30843 = G__30885;
chunk__30688_30844 = G__30886;
count__30689_30845 = G__30887;
i__30690_30846 = G__30888;
continue;
} else {
var temp__5457__auto___30889 = cljs.core.seq(seq__30687_30843);
if(temp__5457__auto___30889){
var seq__30687_30890__$1 = temp__5457__auto___30889;
if(cljs.core.chunked_seq_QMARK_(seq__30687_30890__$1)){
var c__4351__auto___30891 = cljs.core.chunk_first(seq__30687_30890__$1);
var G__30892 = cljs.core.chunk_rest(seq__30687_30890__$1);
var G__30893 = c__4351__auto___30891;
var G__30894 = cljs.core.count(c__4351__auto___30891);
var G__30895 = (0);
seq__30687_30843 = G__30892;
chunk__30688_30844 = G__30893;
count__30689_30845 = G__30894;
i__30690_30846 = G__30895;
continue;
} else {
var vec__30715_30896 = cljs.core.first(seq__30687_30890__$1);
var line_30897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30715_30896,(0),null);
var cols_30898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30715_30896,(1),null);
var seq__30721_30899 = cljs.core.seq(cols_30898);
var chunk__30722_30900 = null;
var count__30723_30901 = (0);
var i__30724_30902 = (0);
while(true){
if((i__30724_30902 < count__30723_30901)){
var vec__30725_30904 = chunk__30722_30900.cljs$core$IIndexed$_nth$arity$2(null,i__30724_30902);
var col_30905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725_30904,(0),null);
var infos_30906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30725_30904,(1),null);
encode_cols(infos_30906,source_idx_30839,line_30897,col_30905);


var G__30909 = seq__30721_30899;
var G__30910 = chunk__30722_30900;
var G__30911 = count__30723_30901;
var G__30912 = (i__30724_30902 + (1));
seq__30721_30899 = G__30909;
chunk__30722_30900 = G__30910;
count__30723_30901 = G__30911;
i__30724_30902 = G__30912;
continue;
} else {
var temp__5457__auto___30913__$1 = cljs.core.seq(seq__30721_30899);
if(temp__5457__auto___30913__$1){
var seq__30721_30914__$1 = temp__5457__auto___30913__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30721_30914__$1)){
var c__4351__auto___30915 = cljs.core.chunk_first(seq__30721_30914__$1);
var G__30916 = cljs.core.chunk_rest(seq__30721_30914__$1);
var G__30917 = c__4351__auto___30915;
var G__30918 = cljs.core.count(c__4351__auto___30915);
var G__30919 = (0);
seq__30721_30899 = G__30916;
chunk__30722_30900 = G__30917;
count__30723_30901 = G__30918;
i__30724_30902 = G__30919;
continue;
} else {
var vec__30728_30921 = cljs.core.first(seq__30721_30914__$1);
var col_30922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30728_30921,(0),null);
var infos_30923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30728_30921,(1),null);
encode_cols(infos_30923,source_idx_30839,line_30897,col_30922);


var G__30925 = cljs.core.next(seq__30721_30914__$1);
var G__30926 = null;
var G__30927 = (0);
var G__30928 = (0);
seq__30721_30899 = G__30925;
chunk__30722_30900 = G__30926;
count__30723_30901 = G__30927;
i__30724_30902 = G__30928;
continue;
}
} else {
}
}
break;
}


var G__30929 = cljs.core.next(seq__30687_30890__$1);
var G__30930 = null;
var G__30931 = (0);
var G__30932 = (0);
seq__30687_30843 = G__30929;
chunk__30688_30844 = G__30930;
count__30689_30845 = G__30931;
i__30690_30846 = G__30932;
continue;
}
} else {
}
}
break;
}


var G__30934 = seq__30677_30829;
var G__30935 = chunk__30678_30830;
var G__30936 = count__30679_30831;
var G__30937 = (i__30680_30832 + (1));
seq__30677_30829 = G__30934;
chunk__30678_30830 = G__30935;
count__30679_30831 = G__30936;
i__30680_30832 = G__30937;
continue;
} else {
var temp__5457__auto___30938 = cljs.core.seq(seq__30677_30829);
if(temp__5457__auto___30938){
var seq__30677_30940__$1 = temp__5457__auto___30938;
if(cljs.core.chunked_seq_QMARK_(seq__30677_30940__$1)){
var c__4351__auto___30942 = cljs.core.chunk_first(seq__30677_30940__$1);
var G__30943 = cljs.core.chunk_rest(seq__30677_30940__$1);
var G__30944 = c__4351__auto___30942;
var G__30945 = cljs.core.count(c__4351__auto___30942);
var G__30946 = (0);
seq__30677_30829 = G__30943;
chunk__30678_30830 = G__30944;
count__30679_30831 = G__30945;
i__30680_30832 = G__30946;
continue;
} else {
var vec__30731_30947 = cljs.core.first(seq__30677_30940__$1);
var source_idx_30948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30731_30947,(0),null);
var vec__30734_30949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30731_30947,(1),null);
var __30950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734_30949,(0),null);
var lines_30951__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734_30949,(1),null);
var seq__30737_30952 = cljs.core.seq(lines_30951__$1);
var chunk__30738_30953 = null;
var count__30739_30954 = (0);
var i__30740_30955 = (0);
while(true){
if((i__30740_30955 < count__30739_30954)){
var vec__30744_30956 = chunk__30738_30953.cljs$core$IIndexed$_nth$arity$2(null,i__30740_30955);
var line_30957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30744_30956,(0),null);
var cols_30958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30744_30956,(1),null);
var seq__30747_30963 = cljs.core.seq(cols_30958);
var chunk__30748_30964 = null;
var count__30749_30965 = (0);
var i__30750_30966 = (0);
while(true){
if((i__30750_30966 < count__30749_30965)){
var vec__30752_30967 = chunk__30748_30964.cljs$core$IIndexed$_nth$arity$2(null,i__30750_30966);
var col_30968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30752_30967,(0),null);
var infos_30969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30752_30967,(1),null);
encode_cols(infos_30969,source_idx_30948,line_30957,col_30968);


var G__30974 = seq__30747_30963;
var G__30975 = chunk__30748_30964;
var G__30976 = count__30749_30965;
var G__30977 = (i__30750_30966 + (1));
seq__30747_30963 = G__30974;
chunk__30748_30964 = G__30975;
count__30749_30965 = G__30976;
i__30750_30966 = G__30977;
continue;
} else {
var temp__5457__auto___30978__$1 = cljs.core.seq(seq__30747_30963);
if(temp__5457__auto___30978__$1){
var seq__30747_30979__$1 = temp__5457__auto___30978__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30747_30979__$1)){
var c__4351__auto___30981 = cljs.core.chunk_first(seq__30747_30979__$1);
var G__30982 = cljs.core.chunk_rest(seq__30747_30979__$1);
var G__30983 = c__4351__auto___30981;
var G__30984 = cljs.core.count(c__4351__auto___30981);
var G__30985 = (0);
seq__30747_30963 = G__30982;
chunk__30748_30964 = G__30983;
count__30749_30965 = G__30984;
i__30750_30966 = G__30985;
continue;
} else {
var vec__30758_30986 = cljs.core.first(seq__30747_30979__$1);
var col_30987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30758_30986,(0),null);
var infos_30988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30758_30986,(1),null);
encode_cols(infos_30988,source_idx_30948,line_30957,col_30987);


var G__30990 = cljs.core.next(seq__30747_30979__$1);
var G__30991 = null;
var G__30992 = (0);
var G__30993 = (0);
seq__30747_30963 = G__30990;
chunk__30748_30964 = G__30991;
count__30749_30965 = G__30992;
i__30750_30966 = G__30993;
continue;
}
} else {
}
}
break;
}


var G__30994 = seq__30737_30952;
var G__30995 = chunk__30738_30953;
var G__30996 = count__30739_30954;
var G__30997 = (i__30740_30955 + (1));
seq__30737_30952 = G__30994;
chunk__30738_30953 = G__30995;
count__30739_30954 = G__30996;
i__30740_30955 = G__30997;
continue;
} else {
var temp__5457__auto___30998__$1 = cljs.core.seq(seq__30737_30952);
if(temp__5457__auto___30998__$1){
var seq__30737_30999__$1 = temp__5457__auto___30998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30737_30999__$1)){
var c__4351__auto___31004 = cljs.core.chunk_first(seq__30737_30999__$1);
var G__31005 = cljs.core.chunk_rest(seq__30737_30999__$1);
var G__31006 = c__4351__auto___31004;
var G__31007 = cljs.core.count(c__4351__auto___31004);
var G__31008 = (0);
seq__30737_30952 = G__31005;
chunk__30738_30953 = G__31006;
count__30739_30954 = G__31007;
i__30740_30955 = G__31008;
continue;
} else {
var vec__30761_31009 = cljs.core.first(seq__30737_30999__$1);
var line_31010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30761_31009,(0),null);
var cols_31011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30761_31009,(1),null);
var seq__30764_31012 = cljs.core.seq(cols_31011);
var chunk__30765_31013 = null;
var count__30766_31014 = (0);
var i__30767_31015 = (0);
while(true){
if((i__30767_31015 < count__30766_31014)){
var vec__30768_31016 = chunk__30765_31013.cljs$core$IIndexed$_nth$arity$2(null,i__30767_31015);
var col_31017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30768_31016,(0),null);
var infos_31018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30768_31016,(1),null);
encode_cols(infos_31018,source_idx_30948,line_31010,col_31017);


var G__31023 = seq__30764_31012;
var G__31024 = chunk__30765_31013;
var G__31025 = count__30766_31014;
var G__31026 = (i__30767_31015 + (1));
seq__30764_31012 = G__31023;
chunk__30765_31013 = G__31024;
count__30766_31014 = G__31025;
i__30767_31015 = G__31026;
continue;
} else {
var temp__5457__auto___31027__$2 = cljs.core.seq(seq__30764_31012);
if(temp__5457__auto___31027__$2){
var seq__30764_31028__$1 = temp__5457__auto___31027__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30764_31028__$1)){
var c__4351__auto___31029 = cljs.core.chunk_first(seq__30764_31028__$1);
var G__31030 = cljs.core.chunk_rest(seq__30764_31028__$1);
var G__31031 = c__4351__auto___31029;
var G__31032 = cljs.core.count(c__4351__auto___31029);
var G__31033 = (0);
seq__30764_31012 = G__31030;
chunk__30765_31013 = G__31031;
count__30766_31014 = G__31032;
i__30767_31015 = G__31033;
continue;
} else {
var vec__30771_31034 = cljs.core.first(seq__30764_31028__$1);
var col_31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771_31034,(0),null);
var infos_31036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30771_31034,(1),null);
encode_cols(infos_31036,source_idx_30948,line_31010,col_31035);


var G__31037 = cljs.core.next(seq__30764_31028__$1);
var G__31038 = null;
var G__31039 = (0);
var G__31040 = (0);
seq__30764_31012 = G__31037;
chunk__30765_31013 = G__31038;
count__30766_31014 = G__31039;
i__30767_31015 = G__31040;
continue;
}
} else {
}
}
break;
}


var G__31041 = cljs.core.next(seq__30737_30999__$1);
var G__31042 = null;
var G__31043 = (0);
var G__31044 = (0);
seq__30737_30952 = G__31041;
chunk__30738_30953 = G__31042;
count__30739_30954 = G__31043;
i__30740_30955 = G__31044;
continue;
}
} else {
}
}
break;
}


var G__31045 = cljs.core.next(seq__30677_30940__$1);
var G__31046 = null;
var G__31047 = (0);
var G__31048 = (0);
seq__30677_30829 = G__31045;
chunk__30678_30830 = G__31046;
count__30679_30831 = G__31047;
i__30680_30832 = G__31048;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__30774 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__30638_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30638_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__30643_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__30643_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__30644_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__30644_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__30779 = G__30774;
var G__30781_31051 = G__30779;
var G__30782_31052 = "sourcesContent";
var G__30783_31053 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__30781_31051,G__30782_31052,G__30783_31053);

return G__30779;
} else {
return G__30774;
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
var vec__31054 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31054,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__31057 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31057,(1),null);
var G__31069 = cljs.core.next(col_map_seq);
var G__31070 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__31057,col,infos,vec__31054,line,col_map){
return (function (v,p__31060){
var map__31061 = p__31060;
var map__31061__$1 = ((((!((map__31061 == null)))?(((((map__31061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31061):map__31061);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31061__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31061__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__31057,col,infos,vec__31054,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__31069;
new_cols = G__31070;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__31076 = cljs.core.next(line_map_seq);
var G__31077 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__31076;
new_lines = G__31077;
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
var seq__31084_31169 = cljs.core.seq(reverse_map);
var chunk__31085_31170 = null;
var count__31086_31171 = (0);
var i__31087_31172 = (0);
while(true){
if((i__31087_31172 < count__31086_31171)){
var vec__31090_31174 = chunk__31085_31170.cljs$core$IIndexed$_nth$arity$2(null,i__31087_31172);
var line_31175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31090_31174,(0),null);
var columns_31176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31090_31174,(1),null);
var seq__31093_31180 = cljs.core.seq(columns_31176);
var chunk__31094_31181 = null;
var count__31095_31182 = (0);
var i__31096_31183 = (0);
while(true){
if((i__31096_31183 < count__31095_31182)){
var vec__31097_31185 = chunk__31094_31181.cljs$core$IIndexed$_nth$arity$2(null,i__31096_31183);
var column_31186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097_31185,(0),null);
var column_info_31187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097_31185,(1),null);
var seq__31100_31191 = cljs.core.seq(column_info_31187);
var chunk__31101_31192 = null;
var count__31102_31193 = (0);
var i__31103_31194 = (0);
while(true){
if((i__31103_31194 < count__31102_31193)){
var map__31104_31195 = chunk__31101_31192.cljs$core$IIndexed$_nth$arity$2(null,i__31103_31194);
var map__31104_31196__$1 = ((((!((map__31104_31195 == null)))?(((((map__31104_31195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31104_31195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31104_31195):map__31104_31195);
var gline_31197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104_31196__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104_31196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31104_31196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31197], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31100_31191,chunk__31101_31192,count__31102_31193,i__31103_31194,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31104_31195,map__31104_31196__$1,gline_31197,gcol_31198,name_31199,vec__31097_31185,column_31186,column_info_31187,vec__31090_31174,line_31175,columns_31176,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31198], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31175,new cljs.core.Keyword(null,"col","col",-1959363084),column_31186,new cljs.core.Keyword(null,"name","name",1843675177),name_31199], null));
});})(seq__31100_31191,chunk__31101_31192,count__31102_31193,i__31103_31194,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31104_31195,map__31104_31196__$1,gline_31197,gcol_31198,name_31199,vec__31097_31185,column_31186,column_info_31187,vec__31090_31174,line_31175,columns_31176,inverted))
,cljs.core.sorted_map()));


var G__31213 = seq__31100_31191;
var G__31214 = chunk__31101_31192;
var G__31215 = count__31102_31193;
var G__31216 = (i__31103_31194 + (1));
seq__31100_31191 = G__31213;
chunk__31101_31192 = G__31214;
count__31102_31193 = G__31215;
i__31103_31194 = G__31216;
continue;
} else {
var temp__5457__auto___31217 = cljs.core.seq(seq__31100_31191);
if(temp__5457__auto___31217){
var seq__31100_31218__$1 = temp__5457__auto___31217;
if(cljs.core.chunked_seq_QMARK_(seq__31100_31218__$1)){
var c__4351__auto___31219 = cljs.core.chunk_first(seq__31100_31218__$1);
var G__31220 = cljs.core.chunk_rest(seq__31100_31218__$1);
var G__31221 = c__4351__auto___31219;
var G__31222 = cljs.core.count(c__4351__auto___31219);
var G__31223 = (0);
seq__31100_31191 = G__31220;
chunk__31101_31192 = G__31221;
count__31102_31193 = G__31222;
i__31103_31194 = G__31223;
continue;
} else {
var map__31106_31228 = cljs.core.first(seq__31100_31218__$1);
var map__31106_31229__$1 = ((((!((map__31106_31228 == null)))?(((((map__31106_31228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31106_31228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31106_31228):map__31106_31228);
var gline_31230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31106_31229__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31106_31229__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31106_31229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31230], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31100_31191,chunk__31101_31192,count__31102_31193,i__31103_31194,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31106_31228,map__31106_31229__$1,gline_31230,gcol_31231,name_31232,seq__31100_31218__$1,temp__5457__auto___31217,vec__31097_31185,column_31186,column_info_31187,vec__31090_31174,line_31175,columns_31176,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31231], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31175,new cljs.core.Keyword(null,"col","col",-1959363084),column_31186,new cljs.core.Keyword(null,"name","name",1843675177),name_31232], null));
});})(seq__31100_31191,chunk__31101_31192,count__31102_31193,i__31103_31194,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31106_31228,map__31106_31229__$1,gline_31230,gcol_31231,name_31232,seq__31100_31218__$1,temp__5457__auto___31217,vec__31097_31185,column_31186,column_info_31187,vec__31090_31174,line_31175,columns_31176,inverted))
,cljs.core.sorted_map()));


var G__31244 = cljs.core.next(seq__31100_31218__$1);
var G__31245 = null;
var G__31246 = (0);
var G__31247 = (0);
seq__31100_31191 = G__31244;
chunk__31101_31192 = G__31245;
count__31102_31193 = G__31246;
i__31103_31194 = G__31247;
continue;
}
} else {
}
}
break;
}


var G__31249 = seq__31093_31180;
var G__31250 = chunk__31094_31181;
var G__31251 = count__31095_31182;
var G__31252 = (i__31096_31183 + (1));
seq__31093_31180 = G__31249;
chunk__31094_31181 = G__31250;
count__31095_31182 = G__31251;
i__31096_31183 = G__31252;
continue;
} else {
var temp__5457__auto___31253 = cljs.core.seq(seq__31093_31180);
if(temp__5457__auto___31253){
var seq__31093_31254__$1 = temp__5457__auto___31253;
if(cljs.core.chunked_seq_QMARK_(seq__31093_31254__$1)){
var c__4351__auto___31255 = cljs.core.chunk_first(seq__31093_31254__$1);
var G__31256 = cljs.core.chunk_rest(seq__31093_31254__$1);
var G__31257 = c__4351__auto___31255;
var G__31258 = cljs.core.count(c__4351__auto___31255);
var G__31259 = (0);
seq__31093_31180 = G__31256;
chunk__31094_31181 = G__31257;
count__31095_31182 = G__31258;
i__31096_31183 = G__31259;
continue;
} else {
var vec__31108_31261 = cljs.core.first(seq__31093_31254__$1);
var column_31262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31108_31261,(0),null);
var column_info_31263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31108_31261,(1),null);
var seq__31111_31264 = cljs.core.seq(column_info_31263);
var chunk__31112_31265 = null;
var count__31113_31266 = (0);
var i__31114_31267 = (0);
while(true){
if((i__31114_31267 < count__31113_31266)){
var map__31115_31268 = chunk__31112_31265.cljs$core$IIndexed$_nth$arity$2(null,i__31114_31267);
var map__31115_31269__$1 = ((((!((map__31115_31268 == null)))?(((((map__31115_31268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31115_31268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31115_31268):map__31115_31268);
var gline_31270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31115_31269__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31115_31269__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31115_31269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31270], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31111_31264,chunk__31112_31265,count__31113_31266,i__31114_31267,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31115_31268,map__31115_31269__$1,gline_31270,gcol_31271,name_31272,vec__31108_31261,column_31262,column_info_31263,seq__31093_31254__$1,temp__5457__auto___31253,vec__31090_31174,line_31175,columns_31176,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31271], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31175,new cljs.core.Keyword(null,"col","col",-1959363084),column_31262,new cljs.core.Keyword(null,"name","name",1843675177),name_31272], null));
});})(seq__31111_31264,chunk__31112_31265,count__31113_31266,i__31114_31267,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31115_31268,map__31115_31269__$1,gline_31270,gcol_31271,name_31272,vec__31108_31261,column_31262,column_info_31263,seq__31093_31254__$1,temp__5457__auto___31253,vec__31090_31174,line_31175,columns_31176,inverted))
,cljs.core.sorted_map()));


var G__31279 = seq__31111_31264;
var G__31280 = chunk__31112_31265;
var G__31281 = count__31113_31266;
var G__31282 = (i__31114_31267 + (1));
seq__31111_31264 = G__31279;
chunk__31112_31265 = G__31280;
count__31113_31266 = G__31281;
i__31114_31267 = G__31282;
continue;
} else {
var temp__5457__auto___31283__$1 = cljs.core.seq(seq__31111_31264);
if(temp__5457__auto___31283__$1){
var seq__31111_31284__$1 = temp__5457__auto___31283__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31111_31284__$1)){
var c__4351__auto___31287 = cljs.core.chunk_first(seq__31111_31284__$1);
var G__31290 = cljs.core.chunk_rest(seq__31111_31284__$1);
var G__31291 = c__4351__auto___31287;
var G__31292 = cljs.core.count(c__4351__auto___31287);
var G__31293 = (0);
seq__31111_31264 = G__31290;
chunk__31112_31265 = G__31291;
count__31113_31266 = G__31292;
i__31114_31267 = G__31293;
continue;
} else {
var map__31123_31294 = cljs.core.first(seq__31111_31284__$1);
var map__31123_31295__$1 = ((((!((map__31123_31294 == null)))?(((((map__31123_31294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31123_31294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31123_31294):map__31123_31294);
var gline_31296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31123_31295__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31123_31295__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31123_31295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31296], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31111_31264,chunk__31112_31265,count__31113_31266,i__31114_31267,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31123_31294,map__31123_31295__$1,gline_31296,gcol_31297,name_31298,seq__31111_31284__$1,temp__5457__auto___31283__$1,vec__31108_31261,column_31262,column_info_31263,seq__31093_31254__$1,temp__5457__auto___31253,vec__31090_31174,line_31175,columns_31176,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31297], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31175,new cljs.core.Keyword(null,"col","col",-1959363084),column_31262,new cljs.core.Keyword(null,"name","name",1843675177),name_31298], null));
});})(seq__31111_31264,chunk__31112_31265,count__31113_31266,i__31114_31267,seq__31093_31180,chunk__31094_31181,count__31095_31182,i__31096_31183,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31123_31294,map__31123_31295__$1,gline_31296,gcol_31297,name_31298,seq__31111_31284__$1,temp__5457__auto___31283__$1,vec__31108_31261,column_31262,column_info_31263,seq__31093_31254__$1,temp__5457__auto___31253,vec__31090_31174,line_31175,columns_31176,inverted))
,cljs.core.sorted_map()));


var G__31309 = cljs.core.next(seq__31111_31284__$1);
var G__31310 = null;
var G__31311 = (0);
var G__31312 = (0);
seq__31111_31264 = G__31309;
chunk__31112_31265 = G__31310;
count__31113_31266 = G__31311;
i__31114_31267 = G__31312;
continue;
}
} else {
}
}
break;
}


var G__31313 = cljs.core.next(seq__31093_31254__$1);
var G__31314 = null;
var G__31315 = (0);
var G__31316 = (0);
seq__31093_31180 = G__31313;
chunk__31094_31181 = G__31314;
count__31095_31182 = G__31315;
i__31096_31183 = G__31316;
continue;
}
} else {
}
}
break;
}


var G__31319 = seq__31084_31169;
var G__31320 = chunk__31085_31170;
var G__31321 = count__31086_31171;
var G__31322 = (i__31087_31172 + (1));
seq__31084_31169 = G__31319;
chunk__31085_31170 = G__31320;
count__31086_31171 = G__31321;
i__31087_31172 = G__31322;
continue;
} else {
var temp__5457__auto___31324 = cljs.core.seq(seq__31084_31169);
if(temp__5457__auto___31324){
var seq__31084_31325__$1 = temp__5457__auto___31324;
if(cljs.core.chunked_seq_QMARK_(seq__31084_31325__$1)){
var c__4351__auto___31328 = cljs.core.chunk_first(seq__31084_31325__$1);
var G__31331 = cljs.core.chunk_rest(seq__31084_31325__$1);
var G__31332 = c__4351__auto___31328;
var G__31333 = cljs.core.count(c__4351__auto___31328);
var G__31334 = (0);
seq__31084_31169 = G__31331;
chunk__31085_31170 = G__31332;
count__31086_31171 = G__31333;
i__31087_31172 = G__31334;
continue;
} else {
var vec__31132_31335 = cljs.core.first(seq__31084_31325__$1);
var line_31336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132_31335,(0),null);
var columns_31337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31132_31335,(1),null);
var seq__31136_31341 = cljs.core.seq(columns_31337);
var chunk__31137_31342 = null;
var count__31138_31343 = (0);
var i__31139_31344 = (0);
while(true){
if((i__31139_31344 < count__31138_31343)){
var vec__31140_31345 = chunk__31137_31342.cljs$core$IIndexed$_nth$arity$2(null,i__31139_31344);
var column_31346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140_31345,(0),null);
var column_info_31347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140_31345,(1),null);
var seq__31144_31348 = cljs.core.seq(column_info_31347);
var chunk__31145_31349 = null;
var count__31146_31350 = (0);
var i__31147_31351 = (0);
while(true){
if((i__31147_31351 < count__31146_31350)){
var map__31148_31352 = chunk__31145_31349.cljs$core$IIndexed$_nth$arity$2(null,i__31147_31351);
var map__31148_31353__$1 = ((((!((map__31148_31352 == null)))?(((((map__31148_31352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31148_31352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31148_31352):map__31148_31352);
var gline_31354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31148_31353__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31148_31353__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31148_31353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31354], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31144_31348,chunk__31145_31349,count__31146_31350,i__31147_31351,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31148_31352,map__31148_31353__$1,gline_31354,gcol_31355,name_31356,vec__31140_31345,column_31346,column_info_31347,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31355], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31336,new cljs.core.Keyword(null,"col","col",-1959363084),column_31346,new cljs.core.Keyword(null,"name","name",1843675177),name_31356], null));
});})(seq__31144_31348,chunk__31145_31349,count__31146_31350,i__31147_31351,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31148_31352,map__31148_31353__$1,gline_31354,gcol_31355,name_31356,vec__31140_31345,column_31346,column_info_31347,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted))
,cljs.core.sorted_map()));


var G__31362 = seq__31144_31348;
var G__31363 = chunk__31145_31349;
var G__31364 = count__31146_31350;
var G__31365 = (i__31147_31351 + (1));
seq__31144_31348 = G__31362;
chunk__31145_31349 = G__31363;
count__31146_31350 = G__31364;
i__31147_31351 = G__31365;
continue;
} else {
var temp__5457__auto___31367__$1 = cljs.core.seq(seq__31144_31348);
if(temp__5457__auto___31367__$1){
var seq__31144_31368__$1 = temp__5457__auto___31367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31144_31368__$1)){
var c__4351__auto___31369 = cljs.core.chunk_first(seq__31144_31368__$1);
var G__31375 = cljs.core.chunk_rest(seq__31144_31368__$1);
var G__31376 = c__4351__auto___31369;
var G__31377 = cljs.core.count(c__4351__auto___31369);
var G__31378 = (0);
seq__31144_31348 = G__31375;
chunk__31145_31349 = G__31376;
count__31146_31350 = G__31377;
i__31147_31351 = G__31378;
continue;
} else {
var map__31150_31379 = cljs.core.first(seq__31144_31368__$1);
var map__31150_31380__$1 = ((((!((map__31150_31379 == null)))?(((((map__31150_31379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31150_31379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31150_31379):map__31150_31379);
var gline_31381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150_31380__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150_31380__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31150_31380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31381], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31144_31348,chunk__31145_31349,count__31146_31350,i__31147_31351,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31150_31379,map__31150_31380__$1,gline_31381,gcol_31382,name_31383,seq__31144_31368__$1,temp__5457__auto___31367__$1,vec__31140_31345,column_31346,column_info_31347,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31382], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31336,new cljs.core.Keyword(null,"col","col",-1959363084),column_31346,new cljs.core.Keyword(null,"name","name",1843675177),name_31383], null));
});})(seq__31144_31348,chunk__31145_31349,count__31146_31350,i__31147_31351,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31150_31379,map__31150_31380__$1,gline_31381,gcol_31382,name_31383,seq__31144_31368__$1,temp__5457__auto___31367__$1,vec__31140_31345,column_31346,column_info_31347,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted))
,cljs.core.sorted_map()));


var G__31398 = cljs.core.next(seq__31144_31368__$1);
var G__31399 = null;
var G__31400 = (0);
var G__31401 = (0);
seq__31144_31348 = G__31398;
chunk__31145_31349 = G__31399;
count__31146_31350 = G__31400;
i__31147_31351 = G__31401;
continue;
}
} else {
}
}
break;
}


var G__31402 = seq__31136_31341;
var G__31403 = chunk__31137_31342;
var G__31404 = count__31138_31343;
var G__31405 = (i__31139_31344 + (1));
seq__31136_31341 = G__31402;
chunk__31137_31342 = G__31403;
count__31138_31343 = G__31404;
i__31139_31344 = G__31405;
continue;
} else {
var temp__5457__auto___31406__$1 = cljs.core.seq(seq__31136_31341);
if(temp__5457__auto___31406__$1){
var seq__31136_31407__$1 = temp__5457__auto___31406__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31136_31407__$1)){
var c__4351__auto___31408 = cljs.core.chunk_first(seq__31136_31407__$1);
var G__31409 = cljs.core.chunk_rest(seq__31136_31407__$1);
var G__31410 = c__4351__auto___31408;
var G__31411 = cljs.core.count(c__4351__auto___31408);
var G__31412 = (0);
seq__31136_31341 = G__31409;
chunk__31137_31342 = G__31410;
count__31138_31343 = G__31411;
i__31139_31344 = G__31412;
continue;
} else {
var vec__31156_31413 = cljs.core.first(seq__31136_31407__$1);
var column_31414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31156_31413,(0),null);
var column_info_31415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31156_31413,(1),null);
var seq__31160_31416 = cljs.core.seq(column_info_31415);
var chunk__31161_31417 = null;
var count__31162_31418 = (0);
var i__31163_31419 = (0);
while(true){
if((i__31163_31419 < count__31162_31418)){
var map__31164_31420 = chunk__31161_31417.cljs$core$IIndexed$_nth$arity$2(null,i__31163_31419);
var map__31164_31421__$1 = ((((!((map__31164_31420 == null)))?(((((map__31164_31420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31164_31420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31164_31420):map__31164_31420);
var gline_31422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164_31421__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164_31421__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31164_31421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31422], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31160_31416,chunk__31161_31417,count__31162_31418,i__31163_31419,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31164_31420,map__31164_31421__$1,gline_31422,gcol_31423,name_31424,vec__31156_31413,column_31414,column_info_31415,seq__31136_31407__$1,temp__5457__auto___31406__$1,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31423], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31336,new cljs.core.Keyword(null,"col","col",-1959363084),column_31414,new cljs.core.Keyword(null,"name","name",1843675177),name_31424], null));
});})(seq__31160_31416,chunk__31161_31417,count__31162_31418,i__31163_31419,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31164_31420,map__31164_31421__$1,gline_31422,gcol_31423,name_31424,vec__31156_31413,column_31414,column_info_31415,seq__31136_31407__$1,temp__5457__auto___31406__$1,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted))
,cljs.core.sorted_map()));


var G__31425 = seq__31160_31416;
var G__31426 = chunk__31161_31417;
var G__31427 = count__31162_31418;
var G__31428 = (i__31163_31419 + (1));
seq__31160_31416 = G__31425;
chunk__31161_31417 = G__31426;
count__31162_31418 = G__31427;
i__31163_31419 = G__31428;
continue;
} else {
var temp__5457__auto___31429__$2 = cljs.core.seq(seq__31160_31416);
if(temp__5457__auto___31429__$2){
var seq__31160_31430__$1 = temp__5457__auto___31429__$2;
if(cljs.core.chunked_seq_QMARK_(seq__31160_31430__$1)){
var c__4351__auto___31431 = cljs.core.chunk_first(seq__31160_31430__$1);
var G__31432 = cljs.core.chunk_rest(seq__31160_31430__$1);
var G__31433 = c__4351__auto___31431;
var G__31434 = cljs.core.count(c__4351__auto___31431);
var G__31435 = (0);
seq__31160_31416 = G__31432;
chunk__31161_31417 = G__31433;
count__31162_31418 = G__31434;
i__31163_31419 = G__31435;
continue;
} else {
var map__31167_31436 = cljs.core.first(seq__31160_31430__$1);
var map__31167_31437__$1 = ((((!((map__31167_31436 == null)))?(((((map__31167_31436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31167_31436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31167_31436):map__31167_31436);
var gline_31438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31167_31437__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31167_31437__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31167_31437__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31438], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31160_31416,chunk__31161_31417,count__31162_31418,i__31163_31419,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31167_31436,map__31167_31437__$1,gline_31438,gcol_31439,name_31440,seq__31160_31430__$1,temp__5457__auto___31429__$2,vec__31156_31413,column_31414,column_info_31415,seq__31136_31407__$1,temp__5457__auto___31406__$1,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31439], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31336,new cljs.core.Keyword(null,"col","col",-1959363084),column_31414,new cljs.core.Keyword(null,"name","name",1843675177),name_31440], null));
});})(seq__31160_31416,chunk__31161_31417,count__31162_31418,i__31163_31419,seq__31136_31341,chunk__31137_31342,count__31138_31343,i__31139_31344,seq__31084_31169,chunk__31085_31170,count__31086_31171,i__31087_31172,map__31167_31436,map__31167_31437__$1,gline_31438,gcol_31439,name_31440,seq__31160_31430__$1,temp__5457__auto___31429__$2,vec__31156_31413,column_31414,column_info_31415,seq__31136_31407__$1,temp__5457__auto___31406__$1,vec__31132_31335,line_31336,columns_31337,seq__31084_31325__$1,temp__5457__auto___31324,inverted))
,cljs.core.sorted_map()));


var G__31441 = cljs.core.next(seq__31160_31430__$1);
var G__31442 = null;
var G__31443 = (0);
var G__31444 = (0);
seq__31160_31416 = G__31441;
chunk__31161_31417 = G__31442;
count__31162_31418 = G__31443;
i__31163_31419 = G__31444;
continue;
}
} else {
}
}
break;
}


var G__31445 = cljs.core.next(seq__31136_31407__$1);
var G__31446 = null;
var G__31447 = (0);
var G__31448 = (0);
seq__31136_31341 = G__31445;
chunk__31137_31342 = G__31446;
count__31138_31343 = G__31447;
i__31139_31344 = G__31448;
continue;
}
} else {
}
}
break;
}


var G__31453 = cljs.core.next(seq__31084_31325__$1);
var G__31454 = null;
var G__31455 = (0);
var G__31456 = (0);
seq__31084_31169 = G__31453;
chunk__31085_31170 = G__31454;
count__31086_31171 = G__31455;
i__31087_31172 = G__31456;
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
