goog.provide('re_view.core$macros');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_view.util');
/**
 * Convert a Clojure map to javascript object using `set!`, to play well with Closure Compiler.
 *   Keys are converted to camelCase. Shallow.
 */
re_view.core$macros.js_obj_with_set_BANG_ = (function re_view$core$macros$js_obj_with_set_BANG_(m){
var temp__5457__auto__ = cljs.core.seq(m);
if(temp__5457__auto__){
var m__$1 = temp__5457__auto__;
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var exprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym,m__$1,temp__5457__auto__){
return (function (p__11012){
var vec__11013 = p__11012;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11016 = cljs.core.name(k);
return (re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1 ? re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1(G__11016) : re_view.util.camelCase.call(null,G__11016));
})())].join('')),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0))));
});})(sym,m__$1,temp__5457__auto__))
,m__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"js-obj","js-obj",342383250,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exprs,(new cljs.core.List(null,sym,null,(1),null))], 0))));
} else {
return null;
}
});
/**
 * Groups methods by role in a React component.
 */
re_view.core$macros.group_methods = (function re_view$core$macros$group_methods(methods$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11027 = k;
var G__11027__$1 = (((G__11027 instanceof cljs.core.Keyword))?G__11027.fqn:null);
switch (G__11027__$1) {
case "key":
case "display-name":
case "docstring":
return new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002);

break;
default:
var G__11028 = cljs.core.namespace(k);
switch (G__11028) {
case "spec":
return new cljs.core.Keyword(null,"class-keys","class-keys",106917605);

break;
case "view":
return new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896);

break;
default:
return new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647);

}

}
})(),k], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,methods$),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),re_view.core$macros.js_obj_with_set_BANG_);
});
re_view.core$macros.parse_view_args = (function re_view$core$macros$parse_view_args(args){
var args__$1 = re_view.util.parse_opt_args(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),args);
var G__11033 = args__$1;
if((cljs.core.first(args__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11033,(0),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
} else {
return G__11033;
}
});
/**
 * Generate a meaningful name to identify React components while debugging
 */
re_view.core$macros.display_name = (function re_view$core$macros$display_name(ns,given_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(ns)),/\./))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(given_name)].join('');
});
/**
 * Wrap body in anonymous function form.
 */
re_view.core$macros.wrap_body = (function re_view$core$macros$wrap_body(name,p__11049){
var vec__11052 = p__11049;
var seq__11053 = cljs.core.seq(vec__11052);
var first__11054 = cljs.core.first(seq__11053);
var seq__11053__$1 = cljs.core.next(seq__11053);
var args = first__11054;
var body = seq__11053__$1;
if(cljs.core.vector_QMARK_(args)){
} else {
throw (new Error("Assert failed: (vector? args)"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("re-view.hiccup.core","element","re-view.hiccup.core/element",1962189646,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-view.core","wrap-props","re-view.core/wrap-props",-353464731,null),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4565__auto___11142 = (function (){
/**
 * Define a view function.
 * 
 * Expects optional docstring and methods map, followed by
 *  the argslist and body for the render function, which should
 *  return a Hiccup vector or React element.
 */
re_view.core$macros.defview = (function re_view$core$macros$defview(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11145 = arguments.length;
var i__4532__auto___11146 = (0);
while(true){
if((i__4532__auto___11146 < len__4531__auto___11145)){
args__4534__auto__.push((arguments[i__4532__auto___11146]));

var G__11149 = (i__4532__auto___11146 + (1));
i__4532__auto___11146 = G__11149;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.defview.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_view.core$macros.defview.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__11104 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104,(3),null);
var _ = (((view_name instanceof cljs.core.Symbol))?null:(function(){throw (new Error("Assert failed: (symbol? view-name)"))})());
var methods$__$1 = re_view.core$macros.group_methods(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([methods$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"docstring","docstring",879233117),docstring,new cljs.core.Keyword(null,"display-name","display-name",694513143),re_view.core$macros.display_name(cljs.core._STAR_ns_STAR_,view_name),new cljs.core.Keyword("view","render","view/render",-1412767573),re_view.core$macros.wrap_body(view_name,body)], null)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__11092__auto__","the-class__11092__auto__",40576740,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","class*","re-view.core/class*",-1122325355,null),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_name),"Class"].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__11092__auto__","the-class__11092__auto__",40576740,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,view_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__11127 = docstring;
if((G__11127 == null)){
return null;
} else {
return (new cljs.core.List(null,G__11127,null,(1),null));
}
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","factory","re-view.core/factory",-1445032693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__11092__auto__","the-class__11092__auto__",40576740,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

re_view.core$macros.defview.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_view.core$macros.defview.cljs$lang$applyTo = (function (seq11095){
var G__11096 = cljs.core.first(seq11095);
var seq11095__$1 = cljs.core.next(seq11095);
var G__11097 = cljs.core.first(seq11095__$1);
var seq11095__$2 = cljs.core.next(seq11095__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11096,G__11097,seq11095__$2);
});

return null;
})()
;
re_view.core$macros.defview.cljs$lang$macro = true;

var ret__4565__auto___11247 = (function (){
/**
 * Returns anonymous view, given the same args as `defview`.
 */
re_view.core$macros.view = (function re_view$core$macros$view(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11250 = arguments.length;
var i__4532__auto___11251 = (0);
while(true){
if((i__4532__auto___11251 < len__4531__auto___11250)){
args__4534__auto__.push((arguments[i__4532__auto___11251]));

var G__11253 = (i__4532__auto___11251 + (1));
i__4532__auto___11251 = G__11253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_view.core$macros.view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__11235 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(3),null);
var methods$__$1 = re_view.core$macros.group_methods(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([methods$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"docstring","docstring",879233117),docstring,new cljs.core.Keyword(null,"display-name","display-name",694513143),re_view.core$macros.display_name(cljs.core._STAR_ns_STAR_,view_name),new cljs.core.Keyword("view","render","view/render",-1412767573),re_view.core$macros.wrap_body(view_name,body)], null)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","view*","re-view.core/view*",-1696367698,null),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null)))));
});

re_view.core$macros.view.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_view.core$macros.view.cljs$lang$applyTo = (function (seq11225){
var G__11226 = cljs.core.first(seq11225);
var seq11225__$1 = cljs.core.next(seq11225);
var G__11227 = cljs.core.first(seq11225__$1);
var seq11225__$2 = cljs.core.next(seq11225__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11226,G__11227,seq11225__$2);
});

return null;
})()
;
re_view.core$macros.view.cljs$lang$macro = true;

var ret__4565__auto___11341 = (function (){
/**
 * Defines a stateless view function
 */
re_view.core$macros.defn = (function re_view$core$macros$defn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11342 = arguments.length;
var i__4532__auto___11343 = (0);
while(true){
if((i__4532__auto___11343 < len__4531__auto___11342)){
args__4534__auto__.push((arguments[i__4532__auto___11343]));

var G__11346 = (i__4532__auto___11343 + (1));
i__4532__auto___11343 = G__11346;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_view.core$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__11309 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),null,(1),null)),(new cljs.core.List(null,view_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [docstring], null):cljs.core.PersistentVector.EMPTY),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11294__auto__","args__11294__auto__",1144773303,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","apply","clojure.core/apply",1654646389,null),null,(1),null)),(new cljs.core.List(null,re_view.core$macros.wrap_body(view_name,body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","map?","clojure.core/map?",-1425864013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","first","clojure.core/first",-716493206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11294__auto__","args__11294__auto__",1144773303,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11294__auto__","args__11294__auto__",1144773303,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","cons","clojure.core/cons",534945327,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11294__auto__","args__11294__auto__",1144773303,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

re_view.core$macros.defn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_view.core$macros.defn.cljs$lang$applyTo = (function (seq11296){
var G__11297 = cljs.core.first(seq11296);
var seq11296__$1 = cljs.core.next(seq11296);
var G__11298 = cljs.core.first(seq11296__$1);
var seq11296__$2 = cljs.core.next(seq11296__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11297,G__11298,seq11296__$2);
});

return null;
})()
;
re_view.core$macros.defn.cljs$lang$macro = true;

var ret__4565__auto___11386 = (function (){
re_view.core$macros.extend_view = (function re_view$core$macros$extend_view(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11387 = arguments.length;
var i__4532__auto___11389 = (0);
while(true){
if((i__4532__auto___11389 < len__4531__auto___11387)){
args__4534__auto__.push((arguments[i__4532__auto___11389]));

var G__11392 = (i__4532__auto___11389 + (1));
i__4532__auto___11389 = G__11392;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return re_view.core$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

re_view.core$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,view,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"prototype__11380__auto__","prototype__11380__auto__",2107392521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,view,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"re$view$base",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","specify!","clojure.core/specify!",-684113107,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prototype__11380__auto__","prototype__11380__auto__",2107392521,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
});

re_view.core$macros.extend_view.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
re_view.core$macros.extend_view.cljs$lang$applyTo = (function (seq11381){
var G__11382 = cljs.core.first(seq11381);
var seq11381__$1 = cljs.core.next(seq11381);
var G__11383 = cljs.core.first(seq11381__$1);
var seq11381__$2 = cljs.core.next(seq11381__$1);
var G__11384 = cljs.core.first(seq11381__$2);
var seq11381__$3 = cljs.core.next(seq11381__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11382,G__11383,G__11384,seq11381__$3);
});

return null;
})()
;
re_view.core$macros.extend_view.cljs$lang$macro = true;


//# sourceMappingURL=re-view.core$macros.js.map
