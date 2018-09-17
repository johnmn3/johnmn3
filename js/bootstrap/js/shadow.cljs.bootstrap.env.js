goog.provide('shadow.cljs.bootstrap.env');
goog.require('cljs.core');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.loaded_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.loaded_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.bootstrap.env.set_loaded = (function shadow$cljs$bootstrap$env$set_loaded(namespaces){
var loaded = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),namespaces);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.bootstrap.env.loaded_ref,clojure.set.union,loaded);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.bootstrap !== 'undefined') && (typeof shadow.cljs.bootstrap.env !== 'undefined') && (typeof shadow.cljs.bootstrap.env.index_ref !== 'undefined')){
} else {
shadow.cljs.bootstrap.env.index_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.bootstrap.env.build_index = (function shadow$cljs$bootstrap$env$build_index(p__16574){
var map__16575 = p__16574;
var map__16575__$1 = ((((!((map__16575 == null)))?(((((map__16575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16575):map__16575);
var data = map__16575__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16575__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16575__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__16575,map__16575__$1,data,sources,exclude){
return (function (idx,p__16579){
var map__16580 = p__16579;
var map__16580__$1 = ((((!((map__16580 == null)))?(((((map__16580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16580):map__16580);
var rc = map__16580__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16580__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return cljs.core.assoc_in(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),resource_id], null),rc);
});})(map__16575,map__16575__$1,data,sources,exclude))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146),sources,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),exclude], null),sources);
var idx__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idx,map__16575,map__16575__$1,data,sources,exclude){
return (function (idx__$1,p__16584){
var vec__16585 = p__16584;
var provide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
return cljs.core.assoc_in(idx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),provide], null),resource_id);
});})(idx,map__16575,map__16575__$1,data,sources,exclude))
,idx,(function (){var iter__4324__auto__ = ((function (idx,map__16575,map__16575__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__16592(s__16593){
return (new cljs.core.LazySeq(null,((function (idx,map__16575,map__16575__$1,data,sources,exclude){
return (function (){
var s__16593__$1 = s__16593;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16593__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__16598 = cljs.core.first(xs__6012__auto__);
var map__16598__$1 = ((((!((map__16598 == null)))?(((((map__16598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16598):map__16598);
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var iterys__4320__auto__ = ((function (s__16593__$1,map__16598,map__16598__$1,resource_id,provides,xs__6012__auto__,temp__5457__auto__,idx,map__16575,map__16575__$1,data,sources,exclude){
return (function shadow$cljs$bootstrap$env$build_index_$_iter__16592_$_iter__16594(s__16595){
return (new cljs.core.LazySeq(null,((function (s__16593__$1,map__16598,map__16598__$1,resource_id,provides,xs__6012__auto__,temp__5457__auto__,idx,map__16575,map__16575__$1,data,sources,exclude){
return (function (){
var s__16595__$1 = s__16595;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__16595__$1);
if(temp__5457__auto____$1){
var s__16595__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16595__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__16595__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__16597 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__16596 = (0);
while(true){
if((i__16596 < size__4323__auto__)){
var provide = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__16596);
cljs.core.chunk_append(b__16597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null));

var G__16618 = (i__16596 + (1));
i__16596 = G__16618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16597),shadow$cljs$bootstrap$env$build_index_$_iter__16592_$_iter__16594(cljs.core.chunk_rest(s__16595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16597),null);
}
} else {
var provide = cljs.core.first(s__16595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [provide,resource_id], null),shadow$cljs$bootstrap$env$build_index_$_iter__16592_$_iter__16594(cljs.core.rest(s__16595__$2)));
}
} else {
return null;
}
break;
}
});})(s__16593__$1,map__16598,map__16598__$1,resource_id,provides,xs__6012__auto__,temp__5457__auto__,idx,map__16575,map__16575__$1,data,sources,exclude))
,null,null));
});})(s__16593__$1,map__16598,map__16598__$1,resource_id,provides,xs__6012__auto__,temp__5457__auto__,idx,map__16575,map__16575__$1,data,sources,exclude))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(provides));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$bootstrap$env$build_index_$_iter__16592(cljs.core.rest(s__16593__$1)));
} else {
var G__16631 = cljs.core.rest(s__16593__$1);
s__16593__$1 = G__16631;
continue;
}
} else {
return null;
}
break;
}
});})(idx,map__16575,map__16575__$1,data,sources,exclude))
,null,null));
});})(idx,map__16575,map__16575__$1,data,sources,exclude))
;
return iter__4324__auto__(sources);
})());
cljs.core.reset_BANG_(shadow.cljs.bootstrap.env.index_ref,idx__$1);

return idx__$1;
});
shadow.cljs.bootstrap.env.get_ns_info = (function shadow$cljs$bootstrap$env$get_ns_info(ns){
var idx = cljs.core.deref(shadow.cljs.bootstrap.env.index_ref);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym->id","sym->id",368996282),ns], null));
var or__3949__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not available"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}
});
shadow.cljs.bootstrap.env.find_deps = (function shadow$cljs$bootstrap$env$find_deps(entries){
if(cljs.core.set_QMARK_(entries)){
} else {
throw (new Error("Assert failed: (set? entries)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,entries)){
} else {
throw (new Error("Assert failed: (every? symbol? entries)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16672,p__16673){
var map__16675 = p__16672;
var map__16675__$1 = ((((!((map__16675 == null)))?(((((map__16675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16675):map__16675);
var x = map__16675__$1;
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16675__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16675__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var map__16677 = p__16673;
var map__16677__$1 = ((((!((map__16677 == null)))?(((((map__16677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16677):map__16677);
var src = map__16677__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16677__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core.not(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(deps,provides)))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),clojure.set.union.cljs$core$IFn$_invoke$arity$2(deps,requires),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,src)], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),entries,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY], null),cljs.core.reverse(new cljs.core.Keyword(null,"sources-ordered","sources-ordered",-861287146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.cljs.bootstrap.env.index_ref)))))));
});

//# sourceMappingURL=shadow.cljs.bootstrap.env.js.map
