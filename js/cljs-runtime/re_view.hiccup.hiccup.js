goog.provide('re_view.hiccup.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),(1),(function (p1__32965_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__32965_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__32965_SHARP_,"/",":");
}
})),(3),(function (p1__32966_SHARP_){
if(cljs.core.truth_(p1__32966_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__32966_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__32998){
var vec__32999 = p__32998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(1),null);
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
var G__33014 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__33014);
} else {
return G__33014;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = {};
var seq__33018_33037 = cljs.core.seq(style);
var chunk__33019_33038 = null;
var count__33020_33039 = (0);
var i__33021_33040 = (0);
while(true){
if((i__33021_33040 < count__33020_33039)){
var vec__33022_33042 = chunk__33019_33038.cljs$core$IIndexed$_nth$arity$2(null,i__33021_33040);
var k_33043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33022_33042,(0),null);
var v_33044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33022_33042,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_33043))] = v_33044);


var G__33050 = seq__33018_33037;
var G__33051 = chunk__33019_33038;
var G__33052 = count__33020_33039;
var G__33053 = (i__33021_33040 + (1));
seq__33018_33037 = G__33050;
chunk__33019_33038 = G__33051;
count__33020_33039 = G__33052;
i__33021_33040 = G__33053;
continue;
} else {
var temp__5457__auto___33054 = cljs.core.seq(seq__33018_33037);
if(temp__5457__auto___33054){
var seq__33018_33055__$1 = temp__5457__auto___33054;
if(cljs.core.chunked_seq_QMARK_(seq__33018_33055__$1)){
var c__4351__auto___33057 = cljs.core.chunk_first(seq__33018_33055__$1);
var G__33063 = cljs.core.chunk_rest(seq__33018_33055__$1);
var G__33064 = c__4351__auto___33057;
var G__33065 = cljs.core.count(c__4351__auto___33057);
var G__33066 = (0);
seq__33018_33037 = G__33063;
chunk__33019_33038 = G__33064;
count__33020_33039 = G__33065;
i__33021_33040 = G__33066;
continue;
} else {
var vec__33031_33068 = cljs.core.first(seq__33018_33055__$1);
var k_33069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031_33068,(0),null);
var v_33070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031_33068,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_33069))] = v_33070);


var G__33071 = cljs.core.next(seq__33018_33055__$1);
var G__33072 = null;
var G__33073 = (0);
var G__33074 = (0);
seq__33018_33037 = G__33071;
chunk__33019_33038 = G__33072;
count__33020_33039 = G__33073;
i__33021_33040 = G__33074;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__33087 = cljs.core.PersistentVector.EMPTY;
var G__33087__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__33087,k_classes):G__33087);
var G__33087__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__33087__$1,class$):G__33087__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__33087__$2,classes);
} else {
return G__33087__$2;
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
var map__33109 = (function (){var G__33110 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return (re_view.hiccup.hiccup._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2 ? re_view.hiccup.hiccup._STAR_wrap_props_STAR_.cljs$core$IFn$_invoke$arity$2(G__33110,tag) : re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__33110,tag));
} else {
return G__33110;
}
})();
var map__33109__$1 = ((((!((map__33109 == null)))?(((((map__33109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33109):map__33109);
var props__$1 = map__33109__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__33116 = {};
var G__33116__$1 = (cljs.core.truth_(k_id)?(function (){var G__33119 = G__33116;
(G__33119["id"] = k_id);

return G__33119;
})():G__33116);
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
var G__33124 = G__33116__$1;
(G__33124["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__3949__auto__ = class$;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return class_name;
}
})(),classes));

return G__33124;
} else {
return G__33116__$1;
}
})();
var seq__33125_33159 = cljs.core.seq(props__$1);
var chunk__33126_33160 = null;
var count__33127_33161 = (0);
var i__33128_33162 = (0);
while(true){
if((i__33128_33162 < count__33127_33161)){
var vec__33129_33164 = chunk__33126_33160.cljs$core$IIndexed$_nth$arity$2(null,i__33128_33162);
var k_33165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33129_33164,(0),null);
var v_33166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33129_33164,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_33165,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_33165,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_33165)] = re_view.hiccup.hiccup.map__GT_js(v_33166));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_33165,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_33165,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_33165)] = v_33166);

}
}


var G__33184 = seq__33125_33159;
var G__33185 = chunk__33126_33160;
var G__33186 = count__33127_33161;
var G__33187 = (i__33128_33162 + (1));
seq__33125_33159 = G__33184;
chunk__33126_33160 = G__33185;
count__33127_33161 = G__33186;
i__33128_33162 = G__33187;
continue;
} else {
var temp__5457__auto___33188 = cljs.core.seq(seq__33125_33159);
if(temp__5457__auto___33188){
var seq__33125_33190__$1 = temp__5457__auto___33188;
if(cljs.core.chunked_seq_QMARK_(seq__33125_33190__$1)){
var c__4351__auto___33194 = cljs.core.chunk_first(seq__33125_33190__$1);
var G__33195 = cljs.core.chunk_rest(seq__33125_33190__$1);
var G__33196 = c__4351__auto___33194;
var G__33197 = cljs.core.count(c__4351__auto___33194);
var G__33198 = (0);
seq__33125_33159 = G__33195;
chunk__33126_33160 = G__33196;
count__33127_33161 = G__33197;
i__33128_33162 = G__33198;
continue;
} else {
var vec__33133_33204 = cljs.core.first(seq__33125_33190__$1);
var k_33205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33204,(0),null);
var v_33206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33204,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_33205,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_33205,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_33205)] = re_view.hiccup.hiccup.map__GT_js(v_33206));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_33205,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_33205,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_33205)] = v_33206);

}
}


var G__33208 = cljs.core.next(seq__33125_33190__$1);
var G__33209 = null;
var G__33210 = (0);
var G__33211 = (0);
seq__33125_33159 = G__33208;
chunk__33126_33160 = G__33209;
count__33127_33161 = G__33210;
i__33128_33162 = G__33211;
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
