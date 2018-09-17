goog.provide('re_view.hiccup.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),(1),(function (p1__15184_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__15184_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__15184_SHARP_,"/",":");
}
})),(3),(function (p1__15185_SHARP_){
if(cljs.core.truth_(p1__15185_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__15185_SHARP_,(1)),"."," ");
} else {
return null;
}
}));
});
re_view.hiccup.hiccup.parse_key_memoized = cljs.core.memoize(re_view.hiccup.hiccup.parse_key);
/**
 * Recursively apply f to nested vectors, unwrapping seqs. Similar to recursive `mapcat` but returns a vector.
 */
re_view.hiccup.hiccup.reduce_flatten_seqs = (function re_view$hiccup$hiccup$reduce_flatten_seqs(f,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function re_view$hiccup$hiccup$reduce_flatten_seqs_$_my_f(c,x){
if(cljs.core.seq_QMARK_(x)){
return (re_view.hiccup.hiccup.reduce_flatten_seqs.cljs$core$IFn$_invoke$arity$3 ? re_view.hiccup.hiccup.reduce_flatten_seqs.cljs$core$IFn$_invoke$arity$3(f,c,x) : re_view.hiccup.hiccup.reduce_flatten_seqs.call(null,f,c,x));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}
}),init,coll);
});
/**
 * Return props and children for a hiccup form. If the second element is not a map, supplies an empty map as props.
 */
re_view.hiccup.hiccup.parse_args = (function re_view$hiccup$hiccup$parse_args(form){
var len = cljs.core.count(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], null);
} else {
if((function (){var first_child = (form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1((1)) : form.call(null,(1)));
return (((first_child == null)) || ((first_child instanceof cljs.core.PersistentArrayMap)) || ((first_child instanceof cljs.core.PersistentHashMap)));
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1((1)) : form.call(null,(1))),(((len > (2)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(form,(2),len):cljs.core.PersistentVector.EMPTY)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(form,(1),len)], null);

}
}
});
re_view.hiccup.hiccup.camelCase = (function re_view$hiccup$hiccup$camelCase(s){
return clojure.string.replace(s,/-([a-z])/,(function (p__15221){
var vec__15227 = p__15221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15227,(1),null);
return clojure.string.upper_case(s__$1);
}));
});
/**
 * CamelCase by default, only exceptions are data- and aria- attributes.
 */
re_view.hiccup.hiccup.camelCase_QMARK_ = (function re_view$hiccup$hiccup$camelCase_QMARK_(attr_name){
return cljs.core.not(cljs.core.re_find(/^(?:data\-|aria\-)/,attr_name));
});
/**
 * CamelCase react keys, except for aria- and data- attributes
 */
re_view.hiccup.hiccup.key__GT_react_attr = (function re_view$hiccup$hiccup$key__GT_react_attr(k){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword(null,"for","for",-1323786319))){
return "htmlFor";
} else {
var k_str = cljs.core.name(k);
var G__15254 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__15254);
} else {
return G__15254;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = {};
var seq__15261_15275 = cljs.core.seq(style);
var chunk__15262_15276 = null;
var count__15263_15277 = (0);
var i__15264_15278 = (0);
while(true){
if((i__15264_15278 < count__15263_15277)){
var vec__15265_15279 = chunk__15262_15276.cljs$core$IIndexed$_nth$arity$2(null,i__15264_15278);
var k_15280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15265_15279,(0),null);
var v_15281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15265_15279,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_15280))] = v_15281);


var G__15282 = seq__15261_15275;
var G__15283 = chunk__15262_15276;
var G__15284 = count__15263_15277;
var G__15285 = (i__15264_15278 + (1));
seq__15261_15275 = G__15282;
chunk__15262_15276 = G__15283;
count__15263_15277 = G__15284;
i__15264_15278 = G__15285;
continue;
} else {
var temp__5457__auto___15286 = cljs.core.seq(seq__15261_15275);
if(temp__5457__auto___15286){
var seq__15261_15287__$1 = temp__5457__auto___15286;
if(cljs.core.chunked_seq_QMARK_(seq__15261_15287__$1)){
var c__4351__auto___15288 = cljs.core.chunk_first(seq__15261_15287__$1);
var G__15289 = cljs.core.chunk_rest(seq__15261_15287__$1);
var G__15290 = c__4351__auto___15288;
var G__15291 = cljs.core.count(c__4351__auto___15288);
var G__15292 = (0);
seq__15261_15275 = G__15289;
chunk__15262_15276 = G__15290;
count__15263_15277 = G__15291;
i__15264_15278 = G__15292;
continue;
} else {
var vec__15272_15293 = cljs.core.first(seq__15261_15287__$1);
var k_15294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272_15293,(0),null);
var v_15295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272_15293,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_15294))] = v_15295);


var G__15297 = cljs.core.next(seq__15261_15287__$1);
var G__15298 = null;
var G__15299 = (0);
var G__15300 = (0);
seq__15261_15275 = G__15297;
chunk__15262_15276 = G__15298;
count__15263_15277 = G__15299;
i__15264_15278 = G__15300;
continue;
}
} else {
}
}
break;
}

return style_js;
});
/**
 * Build className from keyword classes, :class and :classes.
 */
re_view.hiccup.hiccup.concat_classes = (function re_view$hiccup$hiccup$concat_classes(k_classes,class$,classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__15303 = cljs.core.PersistentVector.EMPTY;
var G__15303__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__15303,k_classes):G__15303);
var G__15303__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__15303__$1,class$):G__15303__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__15303__$2,classes);
} else {
return G__15303__$2;
}
})());
});
re_view.hiccup.hiccup._STAR_wrap_props_STAR_ = null;
/**
 * Returns a React-conformant javascript object. An alternative to clj->js,
 *   allowing for key renaming without an extra loop through every prop map.
 */
re_view.hiccup.hiccup.props__GT_js = (function re_view$hiccup$hiccup$props__GT_js(tag,k_id,k_classes,props){
if(cljs.core.truth_((function (){var or__3949__auto__ = props;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = k_id;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return k_classes;
}
}
})())){
var map__15313 = (function (){var G__15314 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return (re_view.hiccup.hiccup._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2 ? re_view.hiccup.hiccup._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2(G__15314,tag) : re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__15314,tag));
} else {
return G__15314;
}
})();
var map__15313__$1 = ((((!((map__15313 == null)))?(((((map__15313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15313):map__15313);
var props__$1 = map__15313__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15313__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__15322 = {};
var G__15322__$1 = (cljs.core.truth_(k_id)?(function (){var G__15328 = G__15322;
(G__15328["id"] = k_id);

return G__15328;
})():G__15322);
if(cljs.core.truth_((function (){var or__3949__auto__ = k_classes;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = class$;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = class_name;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return classes;
}
}
}
})())){
var G__15329 = G__15322__$1;
(G__15329["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__3949__auto__ = class$;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return class_name;
}
})(),classes));

return G__15329;
} else {
return G__15322__$1;
}
})();
var seq__15330_15354 = cljs.core.seq(props__$1);
var chunk__15331_15355 = null;
var count__15332_15356 = (0);
var i__15333_15357 = (0);
while(true){
if((i__15333_15357 < count__15332_15356)){
var vec__15335_15361 = chunk__15331_15355.cljs$core$IIndexed$_nth$arity$2(null,i__15333_15357);
var k_15362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335_15361,(0),null);
var v_15363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335_15361,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_15362,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_15362,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_15362)] = re_view.hiccup.hiccup.map__GT_js(v_15363));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_15362,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_15362,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_15362)] = v_15363);

}
}


var G__15368 = seq__15330_15354;
var G__15369 = chunk__15331_15355;
var G__15370 = count__15332_15356;
var G__15371 = (i__15333_15357 + (1));
seq__15330_15354 = G__15368;
chunk__15331_15355 = G__15369;
count__15332_15356 = G__15370;
i__15333_15357 = G__15371;
continue;
} else {
var temp__5457__auto___15375 = cljs.core.seq(seq__15330_15354);
if(temp__5457__auto___15375){
var seq__15330_15376__$1 = temp__5457__auto___15375;
if(cljs.core.chunked_seq_QMARK_(seq__15330_15376__$1)){
var c__4351__auto___15378 = cljs.core.chunk_first(seq__15330_15376__$1);
var G__15379 = cljs.core.chunk_rest(seq__15330_15376__$1);
var G__15380 = c__4351__auto___15378;
var G__15381 = cljs.core.count(c__4351__auto___15378);
var G__15382 = (0);
seq__15330_15354 = G__15379;
chunk__15331_15355 = G__15380;
count__15332_15356 = G__15381;
i__15333_15357 = G__15382;
continue;
} else {
var vec__15339_15383 = cljs.core.first(seq__15330_15376__$1);
var k_15384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339_15383,(0),null);
var v_15385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339_15383,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_15384,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_15384,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_15384)] = re_view.hiccup.hiccup.map__GT_js(v_15385));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_15384,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_15384,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_15384)] = v_15385);

}
}


var G__15390 = cljs.core.next(seq__15330_15376__$1);
var G__15391 = null;
var G__15392 = (0);
var G__15393 = (0);
seq__15330_15354 = G__15390;
chunk__15331_15355 = G__15391;
count__15332_15356 = G__15392;
i__15333_15357 = G__15393;
continue;
}
} else {
}
}
break;
}

return prop_js;
} else {
return null;
}
});
re_view.hiccup.hiccup._STAR_create_element_STAR_ = module$node_modules$react$index.createElement;

//# sourceMappingURL=re_view.hiccup.hiccup.js.map
