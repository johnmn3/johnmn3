goog.provide('shadow_eval.hiccups$macros');
goog.require('cljs.core');
goog.require('hiccups.runtime');
shadow_eval.hiccups$macros.doctype = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html4","html4",1872652391),["<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01//EN\" ","\"http://www.w3.org/TR/html4/strict.dtd\">\n"].join(''),new cljs.core.Keyword(null,"xhtml-strict","xhtml-strict",-1104936910),["<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" ","\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n"].join(''),new cljs.core.Keyword(null,"xhtml-transitional","xhtml-transitional",-1917909840),["<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" ","\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n"].join(''),new cljs.core.Keyword(null,"html5","html5",1541457142),"<!DOCTYPE html>\n"], null);
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
shadow_eval.hiccups$macros.wrap_attrs = (function shadow_eval$hiccups$macros$wrap_attrs(func){
return (function() { 
var G__11020__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__11017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__11018 = cljs.core.seq(vec__11017);
var first__11019 = cljs.core.first(seq__11018);
var seq__11018__$1 = cljs.core.next(seq__11018);
var tag = first__11019;
var body = seq__11018__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__11020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11021__i = 0, G__11021__a = new Array(arguments.length -  0);
while (G__11021__i < G__11021__a.length) {G__11021__a[G__11021__i] = arguments[G__11021__i + 0]; ++G__11021__i;}
  args = new cljs.core.IndexedSeq(G__11021__a,0,null);
} 
return G__11020__delegate.call(this,args);};
G__11020.cljs$lang$maxFixedArity = 0;
G__11020.cljs$lang$applyTo = (function (arglist__11022){
var args = cljs.core.seq(arglist__11022);
return G__11020__delegate(args);
});
G__11020.cljs$core$IFn$_invoke$arity$variadic = G__11020__delegate;
return G__11020;
})()
;
});
shadow_eval.hiccups$macros.update_arglists = (function shadow_eval$hiccups$macros$update_arglists(arglists){
var iter__4324__auto__ = (function shadow_eval$hiccups$macros$update_arglists_$_iter__11023(s__11024){
return (new cljs.core.LazySeq(null,(function (){
var s__11024__$1 = s__11024;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11024__$1);
if(temp__5457__auto__){
var s__11024__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11024__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11024__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11026 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11025 = (0);
while(true){
if((i__11025 < size__4323__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11025);
cljs.core.chunk_append(b__11026,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11029 = (i__11025 + (1));
i__11025 = G__11029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11026),shadow_eval$hiccups$macros$update_arglists_$_iter__11023(cljs.core.chunk_rest(s__11024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11026),null);
}
} else {
var args = cljs.core.first(s__11024__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),shadow_eval$hiccups$macros$update_arglists_$_iter__11023(cljs.core.rest(s__11024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(arglists);
});
var ret__4565__auto___11062 = (function (){
/**
 * Defines a function that will return a element vector. If the first argument
 *   passed to the resulting function is a map, it merges it with the attribute
 *   map of the returned element value.
 */
shadow_eval.hiccups$macros.defelem = (function shadow_eval$hiccups$macros$defelem(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11063 = arguments.length;
var i__4532__auto___11064 = (0);
while(true){
if((i__4532__auto___11064 < len__4531__auto___11063)){
args__4534__auto__.push((arguments[i__4532__auto___11064]));

var G__11067 = (i__4532__auto___11064 + (1));
i__4532__auto___11064 = G__11067;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return shadow_eval.hiccups$macros.defelem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.defelem.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","defn","shadow-eval.hiccups/defn",1122232604,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fdecl], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","alter-meta!","shadow-eval.hiccups/alter-meta!",-989973649,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","update-in","shadow-eval.hiccups/update-in",525157413,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","update-arglists","shadow-eval.hiccups/update-arglists",446559609,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","alter-var-root","shadow-eval.hiccups/alter-var-root",221229595,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","wrap-attrs","shadow-eval.hiccups/wrap-attrs",1660667633,null),null,(1),null))], 0)))),null,(1),null))], 0))));
});

shadow_eval.hiccups$macros.defelem.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
shadow_eval.hiccups$macros.defelem.cljs$lang$applyTo = (function (seq11032){
var G__11034 = cljs.core.first(seq11032);
var seq11032__$1 = cljs.core.next(seq11032);
var G__11035 = cljs.core.first(seq11032__$1);
var seq11032__$2 = cljs.core.next(seq11032__$1);
var G__11036 = cljs.core.first(seq11032__$2);
var seq11032__$3 = cljs.core.next(seq11032__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11034,G__11035,G__11036,seq11032__$3);
});

return null;
})()
;
shadow_eval.hiccups$macros.defelem.cljs$lang$macro = true;

var G__11129_11138 = shadow_eval.hiccups$macros.xhtml_tag;
var G__11130_11139 = "Create an XHTML element for the specified language.";
var G__11131_11140 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow_eval.hiccups$macros.lang,shadow_eval.hiccups$macros._AMPERSAND_,shadow_eval.hiccups$macros.contents], null);
var G__11132_11141 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/1999/xhtml","xml:lang",shadow_eval.hiccups$macros.lang,new cljs.core.Keyword(null,"lang","lang",-1819677104),shadow_eval.hiccups$macros.lang], null),shadow_eval.hiccups$macros.contents], null);
(shadow_eval.hiccups$macros.defelem.cljs$core$IFn$_invoke$arity$4 ? shadow_eval.hiccups$macros.defelem.cljs$core$IFn$_invoke$arity$4(G__11129_11138,G__11130_11139,G__11131_11140,G__11132_11141) : shadow_eval.hiccups$macros.defelem.call(null,G__11129_11138,G__11130_11139,G__11131_11140,G__11132_11141));
/**
 * Create a standard XML declaration for the following encoding.
 */
shadow_eval.hiccups$macros.xml_declaration = (function shadow_eval$hiccups$macros$xml_declaration(encoding){
return ["<?xml version=\"1.0\" encoding=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoding),"\"?>\n"].join('');
});
var ret__4565__auto___11183 = (function (){
/**
 * Create a HTML 4 document with the supplied contents. The first argument
 *   may be an optional attribute map.
 */
shadow_eval.hiccups$macros.html4 = (function shadow_eval$hiccups$macros$html4(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11185 = arguments.length;
var i__4532__auto___11186 = (0);
while(true){
if((i__4532__auto___11186 < len__4531__auto___11185)){
args__4534__auto__.push((arguments[i__4532__auto___11186]));

var G__11193 = (i__4532__auto___11186 + (1));
i__4532__auto___11186 = G__11193;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow_eval.hiccups$macros.html4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.html4.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,contents){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"mode","mode",654403691),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sgml","sgml",-839636152),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function (){var G__11176 = new cljs.core.Keyword(null,"html4","html4",1872652391);
return (shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1(G__11176) : shadow_eval.hiccups$macros.doctype.call(null,G__11176));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"html","html",-998796897),null,(1),null)),contents)))),null,(1),null))], 0))));
});

shadow_eval.hiccups$macros.html4.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow_eval.hiccups$macros.html4.cljs$lang$applyTo = (function (seq11156){
var G__11157 = cljs.core.first(seq11156);
var seq11156__$1 = cljs.core.next(seq11156);
var G__11158 = cljs.core.first(seq11156__$1);
var seq11156__$2 = cljs.core.next(seq11156__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11157,G__11158,seq11156__$2);
});

return null;
})()
;
shadow_eval.hiccups$macros.html4.cljs$lang$macro = true;

var ret__4565__auto___11273 = (function (){
/**
 * Create a XHTML 1.0 strict document with the supplied contents. The first
 *   argument may be an optional attribute may. The following attributes are
 *   treated specially:
 *  :lang     - The language of the document
 *  :encoding - The character encoding of the document, defaults to UTF-8.
 */
shadow_eval.hiccups$macros.xhtml = (function shadow_eval$hiccups$macros$xhtml(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11279 = arguments.length;
var i__4532__auto___11280 = (0);
while(true){
if((i__4532__auto___11280 < len__4531__auto___11279)){
args__4534__auto__.push((arguments[i__4532__auto___11280]));

var G__11281 = (i__4532__auto___11280 + (1));
i__4532__auto___11280 = G__11281;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return shadow_eval.hiccups$macros.xhtml.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.xhtml.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options,contents){
if(!(cljs.core.map_QMARK_(options))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","xhtml","shadow-eval.hiccups/xhtml",1498877779,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,options,null,(1),null)),contents], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11217__auto__","options__11217__auto__",1844752687,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"mode","mode",654403691),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","xml-declaration","shadow-eval.hiccups/xml-declaration",-221700758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11217__auto__","options__11217__auto__",1844752687,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"encoding","encoding",1728578272),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"UTF-8",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var G__11263 = new cljs.core.Keyword(null,"xhtml-strict","xhtml-strict",-1104936910);
return (shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1(G__11263) : shadow_eval.hiccups$macros.doctype.call(null,G__11263));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","xhtml-tag","shadow-eval.hiccups/xhtml-tag",-1836474871,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11217__auto__","options__11217__auto__",1844752687,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([contents], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});

shadow_eval.hiccups$macros.xhtml.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
shadow_eval.hiccups$macros.xhtml.cljs$lang$applyTo = (function (seq11219){
var G__11220 = cljs.core.first(seq11219);
var seq11219__$1 = cljs.core.next(seq11219);
var G__11221 = cljs.core.first(seq11219__$1);
var seq11219__$2 = cljs.core.next(seq11219__$1);
var G__11222 = cljs.core.first(seq11219__$2);
var seq11219__$3 = cljs.core.next(seq11219__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11220,G__11221,G__11222,seq11219__$3);
});

return null;
})()
;
shadow_eval.hiccups$macros.xhtml.cljs$lang$macro = true;

var ret__4565__auto___11388 = (function (){
/**
 * Create a HTML5 document with the supplied contents.
 */
shadow_eval.hiccups$macros.html5 = (function shadow_eval$hiccups$macros$html5(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11390 = arguments.length;
var i__4532__auto___11391 = (0);
while(true){
if((i__4532__auto___11391 < len__4531__auto___11390)){
args__4534__auto__.push((arguments[i__4532__auto___11391]));

var G__11393 = (i__4532__auto___11391 + (1));
i__4532__auto___11391 = G__11393;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return shadow_eval.hiccups$macros.html5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.html5.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options,contents){
if(!(cljs.core.map_QMARK_(options))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html5","shadow-eval.hiccups/html5",1261672427,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,options,null,(1),null)),contents], 0))));
} else {
if(cljs.core.truth_((function (){var G__11374 = new cljs.core.Keyword(null,"xml?","xml?",-1398677005);
return (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(G__11374) : options.call(null,G__11374));
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11350__auto__","options__11350__auto__",-1781344306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","dissoc","clojure.core/dissoc",-334178853,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"xml?","xml?",-1398677005),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"mode","mode",654403691),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","xml-declaration","shadow-eval.hiccups/xml-declaration",-221700758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11350__auto__","options__11350__auto__",-1781344306,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"encoding","encoding",1728578272),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"UTF-8",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var G__11379 = new cljs.core.Keyword(null,"html5","html5",1541457142);
return (shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1(G__11379) : shadow_eval.hiccups$macros.doctype.call(null,G__11379));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","xhtml-tag","shadow-eval.hiccups/xhtml-tag",-1836474871,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__11350__auto__","options__11350__auto__",-1781344306,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11350__auto__","options__11350__auto__",-1781344306,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,(1),null))))),null,(1),null)),contents], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"options__11351__auto__","options__11351__auto__",594682486,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","dissoc","clojure.core/dissoc",-334178853,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"xml?","xml?",-1398677005),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"mode","mode",654403691),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"html","html",-998796897),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function (){var G__11385 = new cljs.core.Keyword(null,"html5","html5",1541457142);
return (shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.doctype.cljs$core$IFn$_invoke$arity$1(G__11385) : shadow_eval.hiccups$macros.doctype.call(null,G__11385));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"html","html",-998796897),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__11351__auto__","options__11351__auto__",594682486,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([contents], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}
});

shadow_eval.hiccups$macros.html5.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
shadow_eval.hiccups$macros.html5.cljs$lang$applyTo = (function (seq11354){
var G__11355 = cljs.core.first(seq11354);
var seq11354__$1 = cljs.core.next(seq11354);
var G__11356 = cljs.core.first(seq11354__$1);
var seq11354__$2 = cljs.core.next(seq11354__$1);
var G__11357 = cljs.core.first(seq11354__$2);
var seq11354__$3 = cljs.core.next(seq11354__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11355,G__11356,G__11357,seq11354__$3);
});

return null;
})()
;
shadow_eval.hiccups$macros.html5.cljs$lang$macro = true;

/**
 * True if the expression has not been evaluated.
 */
shadow_eval.hiccups$macros.unevaluated_QMARK_ = (function shadow_eval$hiccups$macros$unevaluated_QMARK_(expr){
return (((expr instanceof cljs.core.Symbol)) || (((cljs.core.seq_QMARK_(expr)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))));
});
/**
 * Returns an unevaluated form that will render the supplied map as HTML
 * attributes.
 */
shadow_eval.hiccups$macros.compile_attr_map = (function shadow_eval$hiccups$macros$compile_attr_map(attrs){
if(cljs.core.truth_(cljs.core.some(shadow_eval.hiccups$macros.unevaluated_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-attr-map","hiccups.runtime/render-attr-map",-1456952815,null),null,(1),null)),(new cljs.core.List(null,attrs,null,(1),null)))));
} else {
return hiccups.runtime.render_attr_map(attrs);
}
});
/**
 * Get the name of the supplied form.
 */
shadow_eval.hiccups$macros.form_name = (function shadow_eval$hiccups$macros$form_name(form){
if(((cljs.core.seq_QMARK_(form)) && ((cljs.core.first(form) instanceof cljs.core.Symbol)))){
return cljs.core.name(cljs.core.first(form));
} else {
return null;
}
});
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.hiccups$macros !== 'undefined') && (typeof shadow_eval.hiccups$macros.compile_form !== 'undefined')){
} else {
/**
 * Pre-compile certain standard forms, where possible.
 */
shadow_eval.hiccups$macros.compile_form = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shadow-eval.hiccups$macros","compile-form"),shadow_eval.hiccups$macros.form_name,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
shadow_eval.hiccups$macros.compile_form.cljs$core$IMultiFn$_add_method$arity$3(null,"for",(function (p__11394){
var vec__11395 = p__11394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11395,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
shadow_eval.hiccups$macros.compile_form.cljs$core$IMultiFn$_add_method$arity$3(null,"if",(function (p__11398){
var vec__11399 = p__11398;
var seq__11400 = cljs.core.seq(vec__11399);
var first__11401 = cljs.core.first(seq__11400);
var seq__11400__$1 = cljs.core.next(seq__11400);
var _ = first__11401;
var first__11401__$1 = cljs.core.first(seq__11400__$1);
var seq__11400__$2 = cljs.core.next(seq__11400__$1);
var condition = first__11401__$1;
var body = seq__11400__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,condition,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4324__auto__ = ((function (vec__11399,seq__11400,first__11401,seq__11400__$1,_,first__11401__$1,seq__11400__$2,condition,body){
return (function shadow_eval$hiccups$macros$iter__11402(s__11403){
return (new cljs.core.LazySeq(null,((function (vec__11399,seq__11400,first__11401,seq__11400__$1,_,first__11401__$1,seq__11400__$2,condition,body){
return (function (){
var s__11403__$1 = s__11403;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11403__$1);
if(temp__5457__auto__){
var s__11403__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11403__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11403__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11405 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11404 = (0);
while(true){
if((i__11404 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11404);
cljs.core.chunk_append(b__11405,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));

var G__11406 = (i__11404 + (1));
i__11404 = G__11406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11405),shadow_eval$hiccups$macros$iter__11402(cljs.core.chunk_rest(s__11403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11405),null);
}
} else {
var x = cljs.core.first(s__11403__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),shadow_eval$hiccups$macros$iter__11402(cljs.core.rest(s__11403__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11399,seq__11400,first__11401,seq__11400__$1,_,first__11401__$1,seq__11400__$2,condition,body))
,null,null));
});})(vec__11399,seq__11400,first__11401,seq__11400__$1,_,first__11401__$1,seq__11400__$2,condition,body))
;
return iter__4324__auto__(body);
})()], 0))));
}));
shadow_eval.hiccups$macros.compile_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-html","hiccups.runtime/render-html",-17003557,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));
/**
 * True if x is a literal value that can be rendered as-is.
 */
shadow_eval.hiccups$macros.literal_QMARK_ = (function shadow_eval$hiccups$macros$literal_QMARK_(x){
return ((cljs.core.not(shadow_eval.hiccups$macros.unevaluated_QMARK_(x))) && (((!(((cljs.core.vector_QMARK_(x)) || (cljs.core.map_QMARK_(x))))) || (cljs.core.every_QMARK_(shadow_eval.hiccups$macros.literal_QMARK_,x)))));
});
/**
 * True if we can infer that x is not a map.
 */
shadow_eval.hiccups$macros.not_implicit_map_QMARK_ = (function shadow_eval$hiccups$macros$not_implicit_map_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow_eval.hiccups$macros.form_name(x),"for")) || (cljs.core.not(shadow_eval.hiccups$macros.unevaluated_QMARK_(x))));
});
/**
 * Returns the compilation strategy to use for a given element.
 */
shadow_eval.hiccups$macros.element_compile_strategy = (function shadow_eval$hiccups$macros$element_compile_strategy(p__11407){
var vec__11408 = p__11407;
var seq__11409 = cljs.core.seq(vec__11408);
var first__11410 = cljs.core.first(seq__11409);
var seq__11409__$1 = cljs.core.next(seq__11409);
var tag = first__11410;
var first__11410__$1 = cljs.core.first(seq__11409__$1);
var seq__11409__$2 = cljs.core.next(seq__11409__$1);
var attrs = first__11410__$1;
var content = seq__11409__$2;
var element = vec__11408;
if(cljs.core.every_QMARK_(shadow_eval.hiccups$macros.literal_QMARK_,element)){
return new cljs.core.Keyword("shadow-eval.hiccups","all-literal","shadow-eval.hiccups/all-literal",-1829393447);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = shadow_eval.hiccups$macros.literal_QMARK_(tag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.map_QMARK_(attrs);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.Keyword("shadow-eval.hiccups","literal-tag-and-attributes","shadow-eval.hiccups/literal-tag-and-attributes",439289151);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = shadow_eval.hiccups$macros.literal_QMARK_(tag);
if(cljs.core.truth_(and__3938__auto__)){
return shadow_eval.hiccups$macros.not_implicit_map_QMARK_(attrs);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.Keyword("shadow-eval.hiccups","literal-tag-and-no-attributes","shadow-eval.hiccups/literal-tag-and-no-attributes",-296613229);
} else {
if(cljs.core.truth_(shadow_eval.hiccups$macros.literal_QMARK_(tag))){
return new cljs.core.Keyword("shadow-eval.hiccups","literal-tag","shadow-eval.hiccups/literal-tag",408310447);
} else {
return new cljs.core.Keyword("shadow-eval.hiccups","default","shadow-eval.hiccups/default",1189962);

}
}
}
}
});
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.hiccups$macros !== 'undefined') && (typeof shadow_eval.hiccups$macros.compile_element !== 'undefined')){
} else {
/**
 * Returns an unevaluated form that will render the supplied vector as a HTML
 * element.
 */
shadow_eval.hiccups$macros.compile_element = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shadow-eval.hiccups$macros","compile-element"),shadow_eval.hiccups$macros.element_compile_strategy,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
shadow_eval.hiccups$macros.compile_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shadow-eval.hiccups","all-literal","shadow-eval.hiccups/all-literal",-1829393447),(function (element){
return hiccups.runtime.render_element(cljs.core.eval(element));
}));
shadow_eval.hiccups$macros.compile_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shadow-eval.hiccups","literal-tag-and-attributes","shadow-eval.hiccups/literal-tag-and-attributes",439289151),(function (p__11411){
var vec__11412 = p__11411;
var seq__11413 = cljs.core.seq(vec__11412);
var first__11414 = cljs.core.first(seq__11413);
var seq__11413__$1 = cljs.core.next(seq__11413);
var tag = first__11414;
var first__11414__$1 = cljs.core.first(seq__11413__$1);
var seq__11413__$2 = cljs.core.next(seq__11413__$1);
var attrs = first__11414__$1;
var content = seq__11413__$2;
var vec__11415 = hiccups.runtime.normalize_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null));
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11415,(0),null);
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11415,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11415,(2),null);
if(cljs.core.truth_((function (){var or__3949__auto__ = content;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return (hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1 ? hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1(tag__$1) : hiccups.runtime.container_tags.call(null,tag__$1));
}
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,shadow_eval.hiccups$macros.compile_attr_map(attrs__$1),null,(1),null)),(new cljs.core.List(null,">",null,(1),null)),(shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1(content) : shadow_eval.hiccups$macros.compile_html.call(null,content)),(new cljs.core.List(null,["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),">"].join(''),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"<",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tag__$1,null,(1),null)),(new cljs.core.List(null,shadow_eval.hiccups$macros.compile_attr_map(attrs__$1),null,(1),null)),(new cljs.core.List(null,hiccups.runtime.end_tag(),null,(1),null))], 0))));
}
}));
shadow_eval.hiccups$macros.compile_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shadow-eval.hiccups","literal-tag-and-no-attributes","shadow-eval.hiccups/literal-tag-and-no-attributes",-296613229),(function (p__11418){
var vec__11419 = p__11418;
var seq__11420 = cljs.core.seq(vec__11419);
var first__11421 = cljs.core.first(seq__11420);
var seq__11420__$1 = cljs.core.next(seq__11420);
var tag = first__11421;
var content = seq__11420__$1;
var G__11422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.PersistentArrayMap.EMPTY,content);
return (shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1(G__11422) : shadow_eval.hiccups$macros.compile_element.call(null,G__11422));
}));
shadow_eval.hiccups$macros.compile_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shadow-eval.hiccups","literal-tag","shadow-eval.hiccups/literal-tag",408310447),(function (p__11423){
var vec__11424 = p__11423;
var seq__11425 = cljs.core.seq(vec__11424);
var first__11426 = cljs.core.first(seq__11425);
var seq__11425__$1 = cljs.core.next(seq__11425);
var tag = first__11426;
var first__11426__$1 = cljs.core.first(seq__11425__$1);
var seq__11425__$2 = cljs.core.next(seq__11425__$1);
var attrs = first__11426__$1;
var content = seq__11425__$2;
var vec__11427 = hiccups.runtime.normalize_element(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null));
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11427,(0),null);
var tag_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11427,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11427,(2),null);
var attrs_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("attrs");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,attrs_sym,null,(1),null)),(new cljs.core.List(null,attrs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","map?","clojure.core/map?",-1425864013,null),null,(1),null)),(new cljs.core.List(null,attrs_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.truth_((function (){var or__3949__auto__ = content;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return (hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1 ? hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1(tag__$1) : hiccups.runtime.container_tags.call(null,tag__$1));
}
})())?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-attr-map","hiccups.runtime/render-attr-map",-1456952815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","merge","clojure.core/merge",-1005031633,null),null,(1),null)),(new cljs.core.List(null,tag_attrs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,attrs_sym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,">",null,(1),null)),(shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1(content) : shadow_eval.hiccups$macros.compile_html.call(null,content)),(new cljs.core.List(null,["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),">"].join(''),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-attr-map","hiccups.runtime/render-attr-map",-1456952815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","merge","clojure.core/merge",-1005031633,null),null,(1),null)),(new cljs.core.List(null,tag_attrs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,attrs_sym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hiccups.runtime.end_tag(),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__3949__auto__ = attrs;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1 ? hiccups.runtime.container_tags.cljs$core$IFn$_invoke$arity$1(tag__$1) : hiccups.runtime.container_tags.call(null,tag__$1));
}
})())?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(tag_attrs)),">"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__11430 = cljs.core.cons(attrs_sym,content);
return (shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_html.cljs$core$IFn$_invoke$arity$1(G__11430) : shadow_eval.hiccups$macros.compile_html.call(null,G__11430));
})(),(new cljs.core.List(null,["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),">"].join(''),null,(1),null))], 0)))):["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(tag_attrs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.end_tag())].join('')),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
shadow_eval.hiccups$macros.compile_element.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-element","hiccups.runtime/render-element",-842079989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(element),null,(1),null)),(function (){var iter__4324__auto__ = (function shadow_eval$hiccups$macros$iter__11431(s__11432){
return (new cljs.core.LazySeq(null,(function (){
var s__11432__$1 = s__11432;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11432__$1);
if(temp__5457__auto__){
var s__11432__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11432__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11432__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11434 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11433 = (0);
while(true){
if((i__11433 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11433);
cljs.core.chunk_append(b__11434,((cljs.core.vector_QMARK_(x))?(shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1(x) : shadow_eval.hiccups$macros.compile_element.call(null,x)):x));

var G__11435 = (i__11433 + (1));
i__11433 = G__11435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11434),shadow_eval$hiccups$macros$iter__11431(cljs.core.chunk_rest(s__11432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11434),null);
}
} else {
var x = cljs.core.first(s__11432__$2);
return cljs.core.cons(((cljs.core.vector_QMARK_(x))?(shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1(x) : shadow_eval.hiccups$macros.compile_element.call(null,x)):x),shadow_eval$hiccups$macros$iter__11431(cljs.core.rest(s__11432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.rest(element));
})())))),null,(1),null)))));
}));
/**
 * Pre-compile data structures into HTML where possible
 */
shadow_eval.hiccups$macros.compile_html = (function shadow_eval$hiccups$macros$compile_html(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function shadow_eval$hiccups$macros$compile_html_$_iter__11436(s__11437){
return (new cljs.core.LazySeq(null,(function (){
var s__11437__$1 = s__11437;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11437__$1);
if(temp__5457__auto__){
var s__11437__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11437__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11437__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11439 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11438 = (0);
while(true){
if((i__11438 < size__4323__auto__)){
var expr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11438);
cljs.core.chunk_append(b__11439,((cljs.core.vector_QMARK_(expr))?(shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1(expr) : shadow_eval.hiccups$macros.compile_element.call(null,expr)):(cljs.core.truth_(shadow_eval.hiccups$macros.literal_QMARK_(expr))?expr:((cljs.core.seq_QMARK_(expr))?(shadow_eval.hiccups$macros.compile_form.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_form.cljs$core$IFn$_invoke$arity$1(expr) : shadow_eval.hiccups$macros.compile_form.call(null,expr)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-html","hiccups.runtime/render-html",-17003557,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))
))));

var G__11440 = (i__11438 + (1));
i__11438 = G__11440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11439),shadow_eval$hiccups$macros$compile_html_$_iter__11436(cljs.core.chunk_rest(s__11437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11439),null);
}
} else {
var expr = cljs.core.first(s__11437__$2);
return cljs.core.cons(((cljs.core.vector_QMARK_(expr))?(shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_element.cljs$core$IFn$_invoke$arity$1(expr) : shadow_eval.hiccups$macros.compile_element.call(null,expr)):(cljs.core.truth_(shadow_eval.hiccups$macros.literal_QMARK_(expr))?expr:((cljs.core.seq_QMARK_(expr))?(shadow_eval.hiccups$macros.compile_form.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.compile_form.cljs$core$IFn$_invoke$arity$1(expr) : shadow_eval.hiccups$macros.compile_form.call(null,expr)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","render-html","hiccups.runtime/render-html",-17003557,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))
))),shadow_eval$hiccups$macros$compile_html_$_iter__11436(cljs.core.rest(s__11437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(content);
})());
});
/**
 * Collapse nested str expressions into one, where possible.
 */
shadow_eval.hiccups$macros.collapse_strs = (function shadow_eval$hiccups$macros$collapse_strs(expr){
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.cons(cljs.core.first(expr),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11441_SHARP_){
if(((cljs.core.seq_QMARK_(p1__11441_SHARP_)) && ((cljs.core.first(p1__11441_SHARP_) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(p1__11441_SHARP_),cljs.core.first(expr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)], 0))))){
return cljs.core.rest((shadow_eval.hiccups$macros.collapse_strs.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.collapse_strs.cljs$core$IFn$_invoke$arity$1(p1__11441_SHARP_) : shadow_eval.hiccups$macros.collapse_strs.call(null,p1__11441_SHARP_)));
} else {
return (new cljs.core.List(null,(shadow_eval.hiccups$macros.collapse_strs.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups$macros.collapse_strs.cljs$core$IFn$_invoke$arity$1(p1__11441_SHARP_) : shadow_eval.hiccups$macros.collapse_strs.call(null,p1__11441_SHARP_)),null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(expr)], 0)));
} else {
return expr;
}
});
var ret__4565__auto___11447 = (function (){
/**
 * Render Clojure data structures to a string of HTML.
 */
shadow_eval.hiccups$macros.html = (function shadow_eval$hiccups$macros$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11448 = arguments.length;
var i__4532__auto___11449 = (0);
while(true){
if((i__4532__auto___11449 < len__4531__auto___11448)){
args__4534__auto__.push((arguments[i__4532__auto___11449]));

var G__11450 = (i__4532__auto___11449 + (1));
i__4532__auto___11449 = G__11450;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return shadow_eval.hiccups$macros.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.html.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,options,content){
var make_html = (function shadow_eval$hiccups$macros$make_html(content__$1){
return shadow_eval.hiccups$macros.collapse_strs(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),shadow_eval.hiccups$macros.compile_html(content__$1)))));
});
var temp__5455__auto__ = (function (){var and__3938__auto__ = cljs.core.map_QMARK_(options);
if(and__3938__auto__){
return new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(options);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var mode = temp__5455__auto__;
var _STAR_html_mode_STAR_11446 = hiccups.runtime._STAR_html_mode_STAR_;
hiccups.runtime._STAR_html_mode_STAR_ = mode;

try{return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hiccups.runtime","in-mode","hiccups.runtime/in-mode",1974821111,null),null,(1),null)),(new cljs.core.List(null,mode,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,make_html(content),null,(1),null))], 0)))),null,(1),null))], 0))));
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_11446;
}} else {
return make_html(cljs.core.cons(options,content));
}
});

shadow_eval.hiccups$macros.html.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
shadow_eval.hiccups$macros.html.cljs$lang$applyTo = (function (seq11442){
var G__11443 = cljs.core.first(seq11442);
var seq11442__$1 = cljs.core.next(seq11442);
var G__11444 = cljs.core.first(seq11442__$1);
var seq11442__$2 = cljs.core.next(seq11442__$1);
var G__11445 = cljs.core.first(seq11442__$2);
var seq11442__$3 = cljs.core.next(seq11442__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11443,G__11444,G__11445,seq11442__$3);
});

return null;
})()
;
shadow_eval.hiccups$macros.html.cljs$lang$macro = true;

var ret__4565__auto___11463 = (function (){
/**
 * Define a function, but wrap its output in an implicit html macro.
 */
shadow_eval.hiccups$macros.defhtml = (function shadow_eval$hiccups$macros$defhtml(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11464 = arguments.length;
var i__4532__auto___11465 = (0);
while(true){
if((i__4532__auto___11465 < len__4531__auto___11464)){
args__4534__auto__.push((arguments[i__4532__auto___11465]));

var G__11466 = (i__4532__auto___11465 + (1));
i__4532__auto___11465 = G__11466;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return shadow_eval.hiccups$macros.defhtml.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

shadow_eval.hiccups$macros.defhtml.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
var vec__11456 = cljs.core.split_with((function (p1__11451_SHARP_){
return !(((cljs.core.list_QMARK_(p1__11451_SHARP_)) || (cljs.core.vector_QMARK_(p1__11451_SHARP_))));
}),fdecl);
var fhead = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11456,(0),null);
var fbody = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11456,(1),null);
var wrap_html = ((function (vec__11456,fhead,fbody){
return (function (p__11459){
var vec__11460 = p__11459;
var seq__11461 = cljs.core.seq(vec__11460);
var first__11462 = cljs.core.first(seq__11461);
var seq__11461__$1 = cljs.core.next(seq__11461);
var args = first__11462;
var body = seq__11461__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("shadow-eval.hiccups","html","shadow-eval.hiccups/html",-1680442828,null),null,(1),null)),body))),null,(1),null)))));
});})(vec__11456,fhead,fbody))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fhead,((cljs.core.vector_QMARK_(cljs.core.first(fbody)))?wrap_html(fbody):cljs.core.map.cljs$core$IFn$_invoke$arity$2(wrap_html,fbody))], 0))));
});

shadow_eval.hiccups$macros.defhtml.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
shadow_eval.hiccups$macros.defhtml.cljs$lang$applyTo = (function (seq11452){
var G__11453 = cljs.core.first(seq11452);
var seq11452__$1 = cljs.core.next(seq11452);
var G__11454 = cljs.core.first(seq11452__$1);
var seq11452__$2 = cljs.core.next(seq11452__$1);
var G__11455 = cljs.core.first(seq11452__$2);
var seq11452__$3 = cljs.core.next(seq11452__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11453,G__11454,G__11455,seq11452__$3);
});

return null;
})()
;
shadow_eval.hiccups$macros.defhtml.cljs$lang$macro = true;


//# sourceMappingURL=shadow-eval.hiccups$macros.js.map
