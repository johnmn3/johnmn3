goog.provide('re_view.view_spec');
goog.require('cljs.core');
goog.require('re_view.util');
goog.require('clojure.string');
/**
 * Global registry for view specs
 */
re_view.view_spec.spec_registry = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Define a view spec
 */
re_view.view_spec.defspecs = (function re_view$view_spec$defspecs(specs){
return re_view.view_spec.spec_registry = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.view_spec.spec_registry,cljs.core.reduce_kv((function (m,k,v){
var G__16291 = m;
if(!(cljs.core.map_QMARK_(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16291,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__16291;
}
}),specs,specs)], 0));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__16295_SHARP_){
return ((cljs.core.vector_QMARK_(p1__16295_SHARP_)) && ((cljs.core.first(p1__16295_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__16297_SHARP_){
var and__3938__auto__ = re_view.view_spec.Hiccup_QMARK_(p1__16297_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__16297_SHARP_)),"svg");
} else {
return and__3938__auto__;
}
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16305){
var vec__16306 = p__16305;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__16310 = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__16310) : re_view.view_spec.resolve_spec.call(null,G__16310));
} else {
if(cljs.core.set_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),k,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"Set","Set",-1553598550)], null);
} else {
if(cljs.core.fn_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),k], null);
} else {
if(cljs.core.map_QMARK_(k)){
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"spec","spec",347520401));
if(((cljs.core.fn_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
return k;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,(re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(spec) : re_view.view_spec.resolve_spec.call(null,spec))], 0));
}
} else {
throw Error(["Invalid spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

}
}
}
}
});
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__16315){
var map__16316 = p__16315;
var map__16316__$1 = ((((!((map__16316 == null)))?(((((map__16316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16316):map__16316);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16316__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16316__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_kinds,spec);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword(null,"Set","Set",-1553598550);
} else {
return spec_name;
}
}
});
/**
 * Resolves specs in map
 */
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__16319){
var map__16320 = p__16319;
var map__16320__$1 = ((((!((map__16320 == null)))?(((((map__16320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16320):map__16320);
var props = map__16320__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16320__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16320__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var props__$1 = props;
var props__$2 = cljs.core.reduce_kv(((function (props__$1,map__16320,map__16320__$1,props,keys,required){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,re_view.view_spec.resolve_spec(v));
});})(props__$1,map__16320,map__16320__$1,props,keys,required))
,props__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918)], 0)));
var props__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (props__$1,props__$2,map__16320,map__16320__$1,props,keys,required){
return (function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),re_view.view_spec.resolve_spec(k));
});})(props__$1,props__$2,map__16320,map__16320__$1,props,keys,required))
,props__$2,keys);
var props__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (props__$1,props__$2,props__$3,map__16320,map__16320__$1,props,keys,required){
return (function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view.view_spec.resolve_spec(k),new cljs.core.Keyword(null,"required","required",1807647006),true));
});})(props__$1,props__$2,props__$3,map__16320,map__16320__$1,props,keys,required))
,props__$3,required);
return cljs.core.reduce_kv(((function (props__$1,props__$2,props__$3,props__$4,map__16320,map__16320__$1,props,keys,required){
return (function (m,k,v){
var map__16322 = v;
var map__16322__$1 = ((((!((map__16322 == null)))?(((((map__16322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16322):map__16322);
var spec = map__16322__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16322__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16322__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16322__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__16325 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__16325__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16325,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__16325);
var G__16325__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__16325__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__16325__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__16325__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__16325__$2;
}
});})(props__$1,props__$2,props__$3,props__$4,map__16320,map__16320__$1,props,keys,required))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__16328 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__16331 = cljs.core.second(opt);
if((G__16331 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__16331);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__16333,value){
var map__16334 = p__16333;
var map__16334__$1 = ((((!((map__16334 == null)))?(((((map__16334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16334):map__16334);
var spec_map = map__16334__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16334__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16334__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16334__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
if(cljs.core.truth_((function (){var and__3938__auto__ = spec_map;
if(cljs.core.truth_(and__3938__auto__)){
return ((!(cljs.core.fn_QMARK_(spec))) && (!(cljs.core.set_QMARK_(spec))));
} else {
return and__3938__auto__;
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-spec?","invalid-spec?",541170561),k,spec_map], 0));
} else {
}

if((value == null)){
if(cljs.core.truth_(required)){
throw Error(["Prop is required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = spec;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not((spec.cljs$core$IFn$_invoke$arity$1 ? spec.cljs$core$IFn$_invoke$arity$1(value) : spec.call(null,value)));
} else {
return and__3938__auto__;
}
})())){
console.log("value",value);

console.log("spec",spec);

throw Error(["Validation failed for prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," with spec ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = spec_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return spec;
}
})())," and value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
} else {
return null;
}
}
});
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__16339,props){
var map__16340 = p__16339;
var map__16340__$1 = ((((!((map__16340 == null)))?(((((map__16340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16340):map__16340);
var prop_specs = map__16340__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16340__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_16350 = cljs.core.keys(props);
try{var seq__16344_16351 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_16350,map__16340,map__16340__$1,prop_specs,required){
return (function (p1__16338_SHARP_){
return cljs.core.not((function (){var G__16349 = cljs.core.namespace(p1__16338_SHARP_);
var fexpr__16348 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__16348.cljs$core$IFn$_invoke$arity$1 ? fexpr__16348.cljs$core$IFn$_invoke$arity$1(G__16349) : fexpr__16348.call(null,G__16349));
})());
});})(prop_keys_16350,map__16340,map__16340__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__16345_16352 = null;
var count__16346_16353 = (0);
var i__16347_16354 = (0);
while(true){
if((i__16347_16354 < count__16346_16353)){
var k_16356 = chunk__16345_16352.cljs$core$IIndexed$_nth$arity$2(null,i__16347_16354);
re_view.view_spec.validate_spec(k_16356,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_16356),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_16356));


var G__16357 = seq__16344_16351;
var G__16358 = chunk__16345_16352;
var G__16359 = count__16346_16353;
var G__16360 = (i__16347_16354 + (1));
seq__16344_16351 = G__16357;
chunk__16345_16352 = G__16358;
count__16346_16353 = G__16359;
i__16347_16354 = G__16360;
continue;
} else {
var temp__5457__auto___16361 = cljs.core.seq(seq__16344_16351);
if(temp__5457__auto___16361){
var seq__16344_16362__$1 = temp__5457__auto___16361;
if(cljs.core.chunked_seq_QMARK_(seq__16344_16362__$1)){
var c__4351__auto___16363 = cljs.core.chunk_first(seq__16344_16362__$1);
var G__16364 = cljs.core.chunk_rest(seq__16344_16362__$1);
var G__16365 = c__4351__auto___16363;
var G__16366 = cljs.core.count(c__4351__auto___16363);
var G__16367 = (0);
seq__16344_16351 = G__16364;
chunk__16345_16352 = G__16365;
count__16346_16353 = G__16366;
i__16347_16354 = G__16367;
continue;
} else {
var k_16368 = cljs.core.first(seq__16344_16362__$1);
re_view.view_spec.validate_spec(k_16368,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_16368),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_16368));


var G__16369 = cljs.core.next(seq__16344_16362__$1);
var G__16370 = null;
var G__16371 = (0);
var G__16372 = (0);
seq__16344_16351 = G__16369;
chunk__16345_16352 = G__16370;
count__16346_16353 = G__16371;
i__16347_16354 = G__16372;
continue;
}
} else {
}
}
break;
}
}catch (e16342){if((e16342 instanceof Error)){
var e_16373 = e16342;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_16373;
} else {
throw e16342;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__16375,children){
var map__16376 = p__16375;
var map__16376__$1 = ((((!((map__16376 == null)))?(((((map__16376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16376):map__16376);
var children_spec = map__16376__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16376__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16376__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_16385__$1 = re_view.util.flatten_seqs(children);
var remaining_req_16386 = req;
var remaining_children_16387 = children_16385__$1;
var i_16388 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_16386)){
if(cljs.core.empty_QMARK_(remaining_children_16387)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__16379_16389 = cljs.core.seq(remaining_children_16387);
var chunk__16380_16390 = null;
var count__16381_16391 = (0);
var i__16382_16392 = (0);
while(true){
if((i__16382_16392 < count__16381_16391)){
var child_16393 = chunk__16380_16390.cljs$core$IIndexed$_nth$arity$2(null,i__16382_16392);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_16393);


var G__16394 = seq__16379_16389;
var G__16395 = chunk__16380_16390;
var G__16396 = count__16381_16391;
var G__16397 = (i__16382_16392 + (1));
seq__16379_16389 = G__16394;
chunk__16380_16390 = G__16395;
count__16381_16391 = G__16396;
i__16382_16392 = G__16397;
continue;
} else {
var temp__5457__auto___16398 = cljs.core.seq(seq__16379_16389);
if(temp__5457__auto___16398){
var seq__16379_16399__$1 = temp__5457__auto___16398;
if(cljs.core.chunked_seq_QMARK_(seq__16379_16399__$1)){
var c__4351__auto___16400 = cljs.core.chunk_first(seq__16379_16399__$1);
var G__16401 = cljs.core.chunk_rest(seq__16379_16399__$1);
var G__16402 = c__4351__auto___16400;
var G__16403 = cljs.core.count(c__4351__auto___16400);
var G__16404 = (0);
seq__16379_16389 = G__16401;
chunk__16380_16390 = G__16402;
count__16381_16391 = G__16403;
i__16382_16392 = G__16404;
continue;
} else {
var child_16405 = cljs.core.first(seq__16379_16399__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_16405);


var G__16406 = cljs.core.next(seq__16379_16399__$1);
var G__16407 = null;
var G__16408 = (0);
var G__16409 = (0);
seq__16379_16389 = G__16406;
chunk__16380_16390 = G__16407;
count__16381_16391 = G__16408;
i__16382_16392 = G__16409;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_16385__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_AMPERSAND_more)?" or more":null)),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_16387)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_16385__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_AMPERSAND_more)?" or more":null)),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16388)].join('')),cljs.core.first(remaining_req_16386),cljs.core.first(remaining_children_16387));

var G__16411 = cljs.core.rest(remaining_req_16386);
var G__16412 = cljs.core.rest(remaining_children_16387);
var G__16413 = (i_16388 + (1));
remaining_req_16386 = G__16411;
remaining_children_16387 = G__16412;
i_16388 = G__16413;
continue;
}
}
break;
}
}catch (e16378){if((e16378 instanceof Error)){
var e_16414 = e16378;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_16414);
} else {
throw e16378;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
