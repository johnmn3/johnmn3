goog.provide('re_db.patterns');
goog.require('cljs.core');
/**
 * Dynamic var used in conjunction with re-db.patterns/capture-patterns macro to
 *   identify patterns read by a block of code.
 */
re_db.patterns._STAR_pattern_log_STAR_ = null;
/**
 * Map for building sets of patterns.
 */
re_db.patterns.empty_pattern_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.PersistentHashSet.EMPTY], null);
re_db.patterns.supported_pattern_keys = cljs.core.set(cljs.core.keys(re_db.patterns.empty_pattern_map));
re_db.patterns.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
re_db.patterns.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Record pattern to *pattern-log*.
 */
re_db.patterns.log_read = (function re_db$patterns$log_read(var_args){
var G__32297 = arguments.length;
switch (G__32297) {
case 2:
return re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2 = (function (kind,pattern){
if((re_db.patterns._STAR_pattern_log_STAR_ == null)){
return null;
} else {
return re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_db.patterns._STAR_pattern_log_STAR_,kind,re_db.patterns.conj_set,pattern);
}
});

re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,multiple_QMARK_){
if((re_db.patterns._STAR_pattern_log_STAR_ == null)){
return null;
} else {
return re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_db.patterns._STAR_pattern_log_STAR_,kind,(cljs.core.truth_(multiple_QMARK_)?re_db.patterns.into_set:re_db.patterns.conj_set),pattern);
}
});

re_db.patterns.log_read.cljs$lang$maxFixedArity = 3;

/**
 * Associates value with pattern in value-map.
 */
re_db.patterns.add_value = (function re_db$patterns$add_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),re_db.patterns.conj_set,value);
});
/**
 * Removes value associated with pattern in value-map.
 */
re_db.patterns.remove_value = (function re_db$patterns$remove_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),cljs.core.disj,value);
});

/**
 * Copied from re-db.core.
 */
re_db.patterns.resolve_id = (function re_db$patterns$resolve_id(db_snap,attr,val){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,val], null)));
});
/**
 * Adds lookup ref listener, which uses an intermediate listener to update when
 *   the target of a lookup ref changes.
 */
re_db.patterns.listen_lookup_ref = (function re_db$patterns$listen_lookup_ref(p__32314,kind,pattern,listeners,db,f){
var vec__32317 = p__32314;
var lookup_attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32317,(0),null);
var lookup_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32317,(1),null);
var lookup_ref = vec__32317;
var lookup_target = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_db.patterns.resolve_id(cljs.core.deref(db),lookup_attr,lookup_val));
var lookup_cb = ((function (lookup_target,vec__32317,lookup_attr,lookup_val,lookup_ref){
return (function (p__32322){
var map__32323 = p__32322;
var map__32323__$1 = ((((!((map__32323 == null)))?(((((map__32323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32323):map__32323);
var tx_report = map__32323__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32323__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var next_lookup_target = re_db.patterns.resolve_id(db_after,lookup_attr,lookup_val);
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
var G__32328_32350 = db;
var G__32329_32351 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__32331 = kind;
var G__32331__$1 = (((G__32331 instanceof cljs.core.Keyword))?G__32331.fqn:null);
switch (G__32331__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(lookup_target)], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32331__$1)].join('')));

}
})()]);
var G__32330_32352 = f;
(re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3(G__32328_32350,G__32329_32351,G__32330_32352) : re_db.patterns.unlisten.call(null,G__32328_32350,G__32329_32351,G__32330_32352));
} else {
}

if((next_lookup_target == null)){
} else {
var G__32332_32360 = db;
var G__32333_32361 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__32335 = kind;
var G__32335__$1 = (((G__32335 instanceof cljs.core.Keyword))?G__32335.fqn:null);
switch (G__32335__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32335__$1)].join('')));

}
})()]);
var G__32334_32362 = f;
(re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3(G__32332_32360,G__32333_32361,G__32334_32362) : re_db.patterns.listen.call(null,G__32332_32360,G__32333_32361,G__32334_32362));
}

cljs.core.reset_BANG_(lookup_target,next_lookup_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tx_report) : f.call(null,tx_report));
});})(lookup_target,vec__32317,lookup_attr,lookup_val,lookup_ref))
;
return cljs.core.assoc_in(re_db.patterns.add_value((function (){var G__32340 = listeners;
if(!((cljs.core.deref(lookup_target) == null))){
return re_db.patterns.add_value(G__32340,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.deref(lookup_target),f);
} else {
return G__32340;
}
})(),new cljs.core.Keyword(null,"_av","_av",354871436),lookup_ref,lookup_cb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622),lookup_cb,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601),lookup_target], null));
});
/**
 * Removes lookup ref listener.
 */
re_db.patterns.unlisten_lookup_ref = (function re_db$patterns$unlisten_lookup_ref(lookup_ref,kind,pattern,listeners,db,f){
var map__32372 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null));
var map__32372__$1 = ((((!((map__32372 == null)))?(((((map__32372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32372):map__32372);
var lookup_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622));
var lookup_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_db.patterns.remove_value((function (){var G__32374 = listeners;
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
return re_db.patterns.remove_value(G__32374,kind,pattern,f);
} else {
return G__32374;
}
})(),new cljs.core.Keyword(null,"_av","_av",354871436),lookup_ref,lookup_cb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null));
});
/**
 * Returns true if pattern has lookup ref in id position.
 */
re_db.patterns.lookup_ref_QMARK_ = (function re_db$patterns$lookup_ref_QMARK_(kind,pattern){
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core.keyword_identical_QMARK_(kind,new cljs.core.Keyword(null,"e__","e__",302856739));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.vector_QMARK_(pattern);
if(and__3938__auto____$1){
return pattern;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = cljs.core.keyword_identical_QMARK_(kind,new cljs.core.Keyword(null,"ea_","ea_",-139041839));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.vector_QMARK_(cljs.core.first(pattern));
if(and__3938__auto____$1){
return cljs.core.first(pattern);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
/**
 * Adds pattern listener.
 */
re_db.patterns.listen = (function re_db$patterns$listen(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
var temp__5455__auto__ = re_db.patterns.lookup_ref_QMARK_(kind,pattern);
if(cljs.core.truth_(temp__5455__auto__)){
var lookup_ref = temp__5455__auto__;
return re_db.patterns.listen_lookup_ref(lookup_ref,kind,pattern,listeners__$1,db,value);
} else {
return re_db.patterns.add_value(listeners__$1,kind,pattern,value);
}
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Removes pattern listener.
 */
re_db.patterns.unlisten = (function re_db$patterns$unlisten(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
var temp__5455__auto__ = re_db.patterns.lookup_ref_QMARK_(kind,pattern);
if(cljs.core.truth_(temp__5455__auto__)){
var lookup_ref = temp__5455__auto__;
return re_db.patterns.unlisten_lookup_ref(lookup_ref,kind,pattern,listeners__$1,db,value);
} else {
return re_db.patterns.remove_value(listeners__$1,kind,pattern,value);
}
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Returns list of keys for which map contains a non-empty value.
 */
re_db.patterns.non_empty_keys = (function re_db$patterns$non_empty_keys(m){
return cljs.core.reduce_kv((function (ks,k,v){
var G__32439 = ks;
if(!(cljs.core.empty_QMARK_(v))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32439,k);
} else {
return G__32439;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
/**
 * Returns a map of patterns matched by a list of datoms.
 *   Limits patterns to those listed in pattern-keys.
 *   many? should return true for attributes which have schema value :db.cardinality/many?.
 */
re_db.patterns.datom_patterns = (function re_db$patterns$datom_patterns(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 2:
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2 = (function (datoms,many_QMARK_){
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e__","e__",302856739),new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.Keyword(null,"_a_","_a_",1238688032)], null));
});

re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3 = (function (datoms,many_QMARK_,pattern_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pattern_map,p__32474){
var vec__32476 = p__32474;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(2),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(3),null);
var G__32483 = pattern_map;
var G__32483__$1 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"e__","e__",302856739)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32483,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.conj,e):G__32483);
var G__32483__$2 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"ea_","ea_",-139041839)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32483__$1,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)):G__32483__$1);
var G__32483__$3 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_av","_av",354871436)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32483__$2,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.into,(cljs.core.truth_((many_QMARK_.cljs$core$IFn$_invoke$arity$1 ? many_QMARK_.cljs$core$IFn$_invoke$arity$1(a) : many_QMARK_.call(null,a)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__32483,G__32483__$1,G__32483__$2,vec__32476,e,a,v,pv){
return (function (patterns,v__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(patterns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v__$1], null));
});})(G__32483,G__32483__$1,G__32483__$2,vec__32476,e,a,v,pv))
,cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,pv)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,pv], null)], null))):G__32483__$2);
if(cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_a_","_a_",1238688032))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32483__$3,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.conj,a);
} else {
return G__32483__$3;
}
}),cljs.core.select_keys(re_db.patterns.empty_pattern_map,pattern_keys),datoms);
});

re_db.patterns.datom_patterns.cljs$lang$maxFixedArity = 3;

/**
 * Returns values associated with patterns.
 * 
 *   value-map is of form {<pattern-key> {<pattern> #{...set of values...}}}.
 *   pattern-map is of form {<pattern-key> #{...set of patterns...}}
 */
re_db.patterns.pattern_values = (function re_db$patterns$pattern_values(pattern_map,value_map){
return cljs.core.reduce_kv((function (values,pattern_key,patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (values__$1,pattern){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(values__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null)));
}),values,patterns);
}),cljs.core.PersistentHashSet.EMPTY,pattern_map);
});
/**
 * Returns the set of values in value-map associated with patterns matched by datoms.
 */
re_db.patterns.datom_values = (function re_db$patterns$datom_values(value_map,datoms,many_QMARK_){
var active_keys = re_db.patterns.non_empty_keys(value_map);
return re_db.patterns.pattern_values(re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,active_keys),value_map);
});
/**
 * Invalidate a pattern, ie. invoke callbacks that match pattern
 */
re_db.patterns.invalidate_BANG_ = (function re_db$patterns$invalidate_BANG_(db,pattern_key,pattern){
var seq__32515 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),pattern_key,pattern], null)));
var chunk__32516 = null;
var count__32517 = (0);
var i__32518 = (0);
while(true){
if((i__32518 < count__32517)){
var f = chunk__32516.cljs$core$IIndexed$_nth$arity$2(null,i__32518);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32532 = seq__32515;
var G__32533 = chunk__32516;
var G__32534 = count__32517;
var G__32535 = (i__32518 + (1));
seq__32515 = G__32532;
chunk__32516 = G__32533;
count__32517 = G__32534;
i__32518 = G__32535;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32515);
if(temp__5457__auto__){
var seq__32515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32515__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__32515__$1);
var G__32537 = cljs.core.chunk_rest(seq__32515__$1);
var G__32538 = c__4351__auto__;
var G__32539 = cljs.core.count(c__4351__auto__);
var G__32540 = (0);
seq__32515 = G__32537;
chunk__32516 = G__32538;
count__32517 = G__32539;
i__32518 = G__32540;
continue;
} else {
var f = cljs.core.first(seq__32515__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__32541 = cljs.core.next(seq__32515__$1);
var G__32542 = null;
var G__32543 = (0);
var G__32544 = (0);
seq__32515 = G__32541;
chunk__32516 = G__32542;
count__32517 = G__32543;
i__32518 = G__32544;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
 * @interface
 */
re_db.patterns.IPatternListen = function(){};

/**
 * the action to take when a listened pattern matches
 */
re_db.patterns.reaction = (function re_db$patterns$reaction(this$){
if(((!((this$ == null))) && (!((this$.re_db$patterns$IPatternListen$reaction$arity$1 == null))))){
return this$.re_db$patterns$IPatternListen$reaction$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (re_db.patterns.reaction[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (re_db.patterns.reaction["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPatternListen.reaction",this$);
}
}
}
});

/**
 * Return the patterns currently listened to
 */
re_db.patterns.patterns = (function re_db$patterns$patterns(this$){
if(((!((this$ == null))) && (!((this$.re_db$patterns$IPatternListen$patterns$arity$1 == null))))){
return this$.re_db$patterns$IPatternListen$patterns$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (re_db.patterns.patterns[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (re_db.patterns.patterns["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPatternListen.patterns",this$);
}
}
}
});


//# sourceMappingURL=re_db.patterns.js.map
