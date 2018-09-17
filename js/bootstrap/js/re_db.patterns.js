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
var G__15312 = arguments.length;
switch (G__15312) {
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
re_db.patterns.listen_lookup_ref = (function re_db$patterns$listen_lookup_ref(p__15353,kind,pattern,listeners,db,f){
var vec__15358 = p__15353;
var lookup_attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(0),null);
var lookup_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(1),null);
var lookup_ref = vec__15358;
var lookup_target = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_db.patterns.resolve_id(cljs.core.deref(db),lookup_attr,lookup_val));
var lookup_cb = ((function (lookup_target,vec__15358,lookup_attr,lookup_val,lookup_ref){
return (function (p__15365){
var map__15366 = p__15365;
var map__15366__$1 = ((((!((map__15366 == null)))?(((((map__15366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15366):map__15366);
var tx_report = map__15366__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15366__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var next_lookup_target = re_db.patterns.resolve_id(db_after,lookup_attr,lookup_val);
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
var G__15372_15395 = db;
var G__15373_15396 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__15377 = kind;
var G__15377__$1 = (((G__15377 instanceof cljs.core.Keyword))?G__15377.fqn:null);
switch (G__15377__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(lookup_target)], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15377__$1)].join('')));

}
})()]);
var G__15374_15397 = f;
(re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3(G__15372_15395,G__15373_15396,G__15374_15397) : re_db.patterns.unlisten.call(null,G__15372_15395,G__15373_15396,G__15374_15397));
} else {
}

if((next_lookup_target == null)){
} else {
var G__15386_15400 = db;
var G__15387_15401 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__15389 = kind;
var G__15389__$1 = (((G__15389 instanceof cljs.core.Keyword))?G__15389.fqn:null);
switch (G__15389__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15389__$1)].join('')));

}
})()]);
var G__15388_15402 = f;
(re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3(G__15386_15400,G__15387_15401,G__15388_15402) : re_db.patterns.listen.call(null,G__15386_15400,G__15387_15401,G__15388_15402));
}

cljs.core.reset_BANG_(lookup_target,next_lookup_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tx_report) : f.call(null,tx_report));
});})(lookup_target,vec__15358,lookup_attr,lookup_val,lookup_ref))
;
return cljs.core.assoc_in(re_db.patterns.add_value((function (){var G__15394 = listeners;
if(!((cljs.core.deref(lookup_target) == null))){
return re_db.patterns.add_value(G__15394,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.deref(lookup_target),f);
} else {
return G__15394;
}
})(),new cljs.core.Keyword(null,"_av","_av",354871436),lookup_ref,lookup_cb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622),lookup_cb,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601),lookup_target], null));
});
/**
 * Removes lookup ref listener.
 */
re_db.patterns.unlisten_lookup_ref = (function re_db$patterns$unlisten_lookup_ref(lookup_ref,kind,pattern,listeners,db,f){
var map__15405 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null));
var map__15405__$1 = ((((!((map__15405 == null)))?(((((map__15405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15405):map__15405);
var lookup_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15405__$1,new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622));
var lookup_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15405__$1,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_db.patterns.remove_value((function (){var G__15407 = listeners;
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
return re_db.patterns.remove_value(G__15407,kind,pattern,f);
} else {
return G__15407;
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
var G__15425 = ks;
if(!(cljs.core.empty_QMARK_(v))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__15425,k);
} else {
return G__15425;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
/**
 * Returns a map of patterns matched by a list of datoms.
 *   Limits patterns to those listed in pattern-keys.
 *   many? should return true for attributes which have schema value :db.cardinality/many?.
 */
re_db.patterns.datom_patterns = (function re_db$patterns$datom_patterns(var_args){
var G__15427 = arguments.length;
switch (G__15427) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pattern_map,p__15431){
var vec__15448 = p__15431;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15448,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15448,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15448,(2),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15448,(3),null);
var G__15451 = pattern_map;
var G__15451__$1 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"e__","e__",302856739)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15451,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.conj,e):G__15451);
var G__15451__$2 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"ea_","ea_",-139041839)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15451__$1,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)):G__15451__$1);
var G__15451__$3 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_av","_av",354871436)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15451__$2,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.into,(cljs.core.truth_((many_QMARK_.cljs$core$IFn$_invoke$arity$1 ? many_QMARK_.cljs$core$IFn$_invoke$arity$1(a) : many_QMARK_.call(null,a)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__15451,G__15451__$1,G__15451__$2,vec__15448,e,a,v,pv){
return (function (patterns,v__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(patterns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v__$1], null));
});})(G__15451,G__15451__$1,G__15451__$2,vec__15448,e,a,v,pv))
,cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,pv)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,pv], null)], null))):G__15451__$2);
if(cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_a_","_a_",1238688032))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__15451__$3,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.conj,a);
} else {
return G__15451__$3;
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
var seq__15472 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),pattern_key,pattern], null)));
var chunk__15473 = null;
var count__15474 = (0);
var i__15475 = (0);
while(true){
if((i__15475 < count__15474)){
var f = chunk__15473.cljs$core$IIndexed$_nth$arity$2(null,i__15475);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__15479 = seq__15472;
var G__15480 = chunk__15473;
var G__15481 = count__15474;
var G__15482 = (i__15475 + (1));
seq__15472 = G__15479;
chunk__15473 = G__15480;
count__15474 = G__15481;
i__15475 = G__15482;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15472);
if(temp__5457__auto__){
var seq__15472__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15472__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15472__$1);
var G__15483 = cljs.core.chunk_rest(seq__15472__$1);
var G__15484 = c__4351__auto__;
var G__15485 = cljs.core.count(c__4351__auto__);
var G__15486 = (0);
seq__15472 = G__15483;
chunk__15473 = G__15484;
count__15474 = G__15485;
i__15475 = G__15486;
continue;
} else {
var f = cljs.core.first(seq__15472__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__15487 = cljs.core.next(seq__15472__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__15472 = G__15487;
chunk__15473 = G__15488;
count__15474 = G__15489;
i__15475 = G__15490;
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
