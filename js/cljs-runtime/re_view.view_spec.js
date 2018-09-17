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
var G__33491 = m;
if(!(cljs.core.map_QMARK_(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33491,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__33491;
}
}),specs,specs)], 0));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__33492_SHARP_){
return ((cljs.core.vector_QMARK_(p1__33492_SHARP_)) && ((cljs.core.first(p1__33492_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__33494_SHARP_){
var and__3938__auto__ = re_view.view_spec.Hiccup_QMARK_(p1__33494_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__33494_SHARP_)),"svg");
} else {
return and__3938__auto__;
}
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__33497){
var vec__33498 = p__33497;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33498,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33498,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__33505 = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__33505) : re_view.view_spec.resolve_spec.call(null,G__33505));
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
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__33510){
var map__33511 = p__33510;
var map__33511__$1 = ((((!((map__33511 == null)))?(((((map__33511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33511):map__33511);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33511__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33511__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
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
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__33513){
var map__33514 = p__33513;
var map__33514__$1 = ((((!((map__33514 == null)))?(((((map__33514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33514):map__33514);
var props = map__33514__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var props__$1 = props;
var props__$2 = cljs.core.reduce_kv(((function (props__$1,map__33514,map__33514__$1,props,keys,required){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,re_view.view_spec.resolve_spec(v));
});})(props__$1,map__33514,map__33514__$1,props,keys,required))
,props__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918)], 0)));
var props__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (props__$1,props__$2,map__33514,map__33514__$1,props,keys,required){
return (function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),re_view.view_spec.resolve_spec(k));
});})(props__$1,props__$2,map__33514,map__33514__$1,props,keys,required))
,props__$2,keys);
var props__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (props__$1,props__$2,props__$3,map__33514,map__33514__$1,props,keys,required){
return (function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view.view_spec.resolve_spec(k),new cljs.core.Keyword(null,"required","required",1807647006),true));
});})(props__$1,props__$2,props__$3,map__33514,map__33514__$1,props,keys,required))
,props__$3,required);
return cljs.core.reduce_kv(((function (props__$1,props__$2,props__$3,props__$4,map__33514,map__33514__$1,props,keys,required){
return (function (m,k,v){
var map__33520 = v;
var map__33520__$1 = ((((!((map__33520 == null)))?(((((map__33520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33520):map__33520);
var spec = map__33520__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33520__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33520__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33520__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__33526 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__33526__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33526,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__33526);
var G__33526__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33526__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__33526__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__33526__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__33526__$2;
}
});})(props__$1,props__$2,props__$3,props__$4,map__33514,map__33514__$1,props,keys,required))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__33534 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33534,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__33537 = cljs.core.second(opt);
if((G__33537 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__33537);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__33545,value){
var map__33546 = p__33545;
var map__33546__$1 = ((((!((map__33546 == null)))?(((((map__33546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33546):map__33546);
var spec_map = map__33546__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33546__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33546__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33546__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
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
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__33551,props){
var map__33552 = p__33551;
var map__33552__$1 = ((((!((map__33552 == null)))?(((((map__33552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33552):map__33552);
var prop_specs = map__33552__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33552__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_33564 = cljs.core.keys(props);
try{var seq__33555_33565 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_33564,map__33552,map__33552__$1,prop_specs,required){
return (function (p1__33550_SHARP_){
return cljs.core.not((function (){var G__33560 = cljs.core.namespace(p1__33550_SHARP_);
var fexpr__33559 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__33559.cljs$core$IFn$_invoke$arity$1 ? fexpr__33559.cljs$core$IFn$_invoke$arity$1(G__33560) : fexpr__33559.call(null,G__33560));
})());
});})(prop_keys_33564,map__33552,map__33552__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__33556_33566 = null;
var count__33557_33567 = (0);
var i__33558_33568 = (0);
while(true){
if((i__33558_33568 < count__33557_33567)){
var k_33570 = chunk__33556_33566.cljs$core$IIndexed$_nth$arity$2(null,i__33558_33568);
re_view.view_spec.validate_spec(k_33570,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_33570),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_33570));


var G__33571 = seq__33555_33565;
var G__33572 = chunk__33556_33566;
var G__33573 = count__33557_33567;
var G__33574 = (i__33558_33568 + (1));
seq__33555_33565 = G__33571;
chunk__33556_33566 = G__33572;
count__33557_33567 = G__33573;
i__33558_33568 = G__33574;
continue;
} else {
var temp__5457__auto___33576 = cljs.core.seq(seq__33555_33565);
if(temp__5457__auto___33576){
var seq__33555_33577__$1 = temp__5457__auto___33576;
if(cljs.core.chunked_seq_QMARK_(seq__33555_33577__$1)){
var c__4351__auto___33578 = cljs.core.chunk_first(seq__33555_33577__$1);
var G__33579 = cljs.core.chunk_rest(seq__33555_33577__$1);
var G__33580 = c__4351__auto___33578;
var G__33581 = cljs.core.count(c__4351__auto___33578);
var G__33582 = (0);
seq__33555_33565 = G__33579;
chunk__33556_33566 = G__33580;
count__33557_33567 = G__33581;
i__33558_33568 = G__33582;
continue;
} else {
var k_33583 = cljs.core.first(seq__33555_33577__$1);
re_view.view_spec.validate_spec(k_33583,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_33583),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_33583));


var G__33584 = cljs.core.next(seq__33555_33577__$1);
var G__33585 = null;
var G__33586 = (0);
var G__33587 = (0);
seq__33555_33565 = G__33584;
chunk__33556_33566 = G__33585;
count__33557_33567 = G__33586;
i__33558_33568 = G__33587;
continue;
}
} else {
}
}
break;
}
}catch (e33554){if((e33554 instanceof Error)){
var e_33588 = e33554;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_33588;
} else {
throw e33554;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__33589,children){
var map__33590 = p__33589;
var map__33590__$1 = ((((!((map__33590 == null)))?(((((map__33590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33590):map__33590);
var children_spec = map__33590__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_33609__$1 = re_view.util.flatten_seqs(children);
var remaining_req_33610 = req;
var remaining_children_33611 = children_33609__$1;
var i_33612 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_33610)){
if(cljs.core.empty_QMARK_(remaining_children_33611)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__33597_33613 = cljs.core.seq(remaining_children_33611);
var chunk__33598_33614 = null;
var count__33599_33615 = (0);
var i__33600_33616 = (0);
while(true){
if((i__33600_33616 < count__33599_33615)){
var child_33617 = chunk__33598_33614.cljs$core$IIndexed$_nth$arity$2(null,i__33600_33616);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_33617);


var G__33618 = seq__33597_33613;
var G__33619 = chunk__33598_33614;
var G__33620 = count__33599_33615;
var G__33621 = (i__33600_33616 + (1));
seq__33597_33613 = G__33618;
chunk__33598_33614 = G__33619;
count__33599_33615 = G__33620;
i__33600_33616 = G__33621;
continue;
} else {
var temp__5457__auto___33626 = cljs.core.seq(seq__33597_33613);
if(temp__5457__auto___33626){
var seq__33597_33627__$1 = temp__5457__auto___33626;
if(cljs.core.chunked_seq_QMARK_(seq__33597_33627__$1)){
var c__4351__auto___33628 = cljs.core.chunk_first(seq__33597_33627__$1);
var G__33629 = cljs.core.chunk_rest(seq__33597_33627__$1);
var G__33630 = c__4351__auto___33628;
var G__33631 = cljs.core.count(c__4351__auto___33628);
var G__33632 = (0);
seq__33597_33613 = G__33629;
chunk__33598_33614 = G__33630;
count__33599_33615 = G__33631;
i__33600_33616 = G__33632;
continue;
} else {
var child_33634 = cljs.core.first(seq__33597_33627__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_33634);


var G__33635 = cljs.core.next(seq__33597_33627__$1);
var G__33636 = null;
var G__33637 = (0);
var G__33638 = (0);
seq__33597_33613 = G__33635;
chunk__33598_33614 = G__33636;
count__33599_33615 = G__33637;
i__33600_33616 = G__33638;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_33609__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_AMPERSAND_more)?" or more":null)),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_33611)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_33609__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(_AMPERSAND_more)?" or more":null)),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_33612)].join('')),cljs.core.first(remaining_req_33610),cljs.core.first(remaining_children_33611));

var G__33639 = cljs.core.rest(remaining_req_33610);
var G__33640 = cljs.core.rest(remaining_children_33611);
var G__33641 = (i_33612 + (1));
remaining_req_33610 = G__33639;
remaining_children_33611 = G__33640;
i_33612 = G__33641;
continue;
}
}
break;
}
}catch (e33592){if((e33592 instanceof Error)){
var e_33643 = e33592;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_33643);
} else {
throw e33592;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
