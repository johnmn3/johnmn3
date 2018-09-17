goog.provide('re_db.core');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.set');
goog.require('re_db.patterns');
cljs.core.enable_console_print_BANG_();
re_db.core._STAR_notify_STAR_ = true;
re_db.core._STAR_db_log_STAR_ = null;
re_db.core.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
re_db.core.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Create a new db, with optional schema, which should be a mapping of attribute keys to
 *   the following options:
 * 
 *  :db/index       [true, :db.index/unique]
 *  :db/cardinality [:db.cardinality/many]
 */
re_db.core.create = (function re_db$core$create(var_args){
var G__32581 = arguments.length;
switch (G__32581) {
case 0:
return re_db.core.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_db.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_db.core.create.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

re_db.core.create.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ave","ave",1316899405),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
});

re_db.core.create.cljs$lang$maxFixedArity = 1;

/**
 * Merge additional schema options into a db. Indexes are not created for existing data.
 */
re_db.core.merge_schema_BANG_ = (function re_db$core$merge_schema_BANG_(db,schema){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
});
re_db.core.get_schema = (function re_db$core$get_schema(db_snap,a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"schema","schema",-1582001791)),a);
});
/**
 * Returns true if attribute is indexed.
 */
re_db.core.index_QMARK_ = (function re_db$core$index_QMARK_(var_args){
var G__32584 = arguments.length;
switch (G__32584) {
case 1:
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.contains_QMARK_(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
});

re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
});

re_db.core.index_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true for attributes with cardinality `many`, which store a set of values for each attribute.
 */
re_db.core.many_QMARK_ = (function re_db$core$many_QMARK_(var_args){
var G__32603 = arguments.length;
switch (G__32603) {
case 1:
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)));
});

re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
});

re_db.core.many_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true for attributes where :db/index is :db.index/unique.
 */
re_db.core.unique_QMARK_ = (function re_db$core$unique_QMARK_(var_args){
var G__32610 = arguments.length;
switch (G__32610) {
case 1:
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669)));
});

re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
});

re_db.core.unique_QMARK_.cljs$lang$maxFixedArity = 2;

re_db.core.ref_QMARK_ = (function re_db$core$ref_QMARK_(schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","type","db/type",1174271242)));
});
/**
 * Returns id, resolving lookup refs (vectors of the form `[attribute value]`) to ids.
 *   Lookup refs are only supported for indexed attributes.
 *   The 3-arity version is for known lookup refs, and does not check for uniqueness.
 */
re_db.core.resolve_id = (function re_db$core$resolve_id(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
case 3:
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,attr,val){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val));
});

re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,id){
if(cljs.core.vector_QMARK_(id)){
var vec__32638 = id;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32638,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32638,(1),null);
if(cljs.core.not(re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))){
throw (new Error(["Not a unique attribute: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),", with value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')));
} else {
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3(db_snap,attr,val);
}
} else {
return id;
}
});

re_db.core.resolve_id.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if entity with given id exists in db.
 */
re_db.core.contains_QMARK_ = (function re_db$core$contains_QMARK_(db_snap,id){
var id__$1 = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if((id__$1 == null)){
} else {
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);
}

return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1) === true;
});

/**
 * Returns entity for resolved id.
 */
re_db.core.entity = (function re_db$core$entity(db_snap,id){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);

var G__32669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1);
if((G__32669 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32669,new cljs.core.Keyword("db","id","db/id",-1388397098),id__$1);
}
} else {
return null;
}
});
/**
 * Get attribute in entity with given id.
 */
re_db.core.get = (function re_db$core$get(var_args){
var G__32672 = arguments.length;
switch (G__32672) {
case 3:
return re_db.core.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.get.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,id,attr){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,attr], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),attr);
} else {
return null;
}
});

re_db.core.get.cljs$core$IFn$_invoke$arity$4 = (function (db_snap,id,attr,not_found){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,attr], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),attr,not_found);
} else {
return null;
}
});

re_db.core.get.cljs$lang$maxFixedArity = 4;

/**
 * Get-in the entity with given id.
 */
re_db.core.get_in = (function re_db$core$get_in(var_args){
var G__32680 = arguments.length;
switch (G__32680) {
case 3:
return re_db.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,id,ks){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,cljs.core.first(ks)], null));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),ks);
} else {
return null;
}
});

re_db.core.get_in.cljs$core$IFn$_invoke$arity$4 = (function (db_snap,id,ks,not_found){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,cljs.core.first(ks)], null));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),ks,not_found);
} else {
return null;
}
});

re_db.core.get_in.cljs$lang$maxFixedArity = 4;

/**
 * Select keys from entity of id
 */
re_db.core.select_keys = (function re_db$core$select_keys(db_snap,id,ks){
var temp__5457__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5457__auto__)){
var id__$1 = temp__5457__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (id__$1,temp__5457__auto__){
return (function (p1__32696_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,p1__32696_SHARP_], null);
});})(id__$1,temp__5457__auto__))
,ks),true);

return cljs.core.select_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),new cljs.core.Keyword("db","id","db/id",-1388397098),id__$1),ks);
} else {
return null;
}
});
/**
 * Add refs to entity
 */
re_db.core.touch = (function re_db$core$touch(db_snap,p__32709){
var map__32710 = p__32709;
var map__32710__$1 = ((((!((map__32710 == null)))?(((((map__32710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32710):map__32710);
var entity = map__32710__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32710__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce_kv(((function (map__32710,map__32710__$1,entity,id){
return (function (m,attr,ids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))].join('')),ids);
});})(map__32710,map__32710__$1,entity,id))
,entity,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"vae","vae",1087935261)),id));
});
re_db.core.assert_uniqueness = (function re_db$core$assert_uniqueness(db_snap,id,attr,val){
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val))){
return null;
} else {
throw (new Error(["Unique index on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"; attempted to write duplicate value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," on id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"."].join('')));
}
});
re_db.core.add_index = (function re_db$core$add_index(db_snap,id,a,v,schema){
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
if(cljs.core.keyword_identical_QMARK_(index,new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872))){
re_db.core.assert_uniqueness(db_snap,id,a,v);
} else {
}

var G__32732 = db_snap;
var G__32732__$1 = ((!((index == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32732,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),a,v], null),re_db.core.conj_set,id):G__32732);
if(cljs.core.truth_(re_db.core.ref_QMARK_(schema))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32732__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),v,a], null),re_db.core.conj_set,id);
} else {
return G__32732__$1;
}
});
re_db.core.add_index_many = (function re_db$core$add_index_many(db_snap,id,attr,added,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,v){
return re_db.core.add_index(state,id,attr,v,schema);
}),db_snap,added);
});
re_db.core.remove_index = (function re_db$core$remove_index(db_snap,id,attr,removed,schema){
var G__32745 = db_snap;
var G__32745__$1 = (cljs.core.truth_(re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,removed], null),cljs.core.disj,id):G__32745);
if(cljs.core.truth_(re_db.core.ref_QMARK_(schema))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32745__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),removed,attr], null),cljs.core.disj,id);
} else {
return G__32745__$1;
}
});
re_db.core.remove_index_many = (function re_db$core$remove_index_many(db_snap,id,attr,removals,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (db_snap__$1,v){
return re_db.core.remove_index(db_snap__$1,id,attr,v,schema);
}),db_snap,removals);
});
re_db.core.update_index = (function re_db$core$update_index(db_snap,id,attr,added,removed,schema){
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))){
var G__32749 = db_snap;
var G__32749__$1 = (cljs.core.truth_(added)?re_db.core.add_index_many(G__32749,id,attr,added,schema):G__32749);
if(cljs.core.truth_(removed)){
return re_db.core.remove_index_many(G__32749__$1,id,attr,removed,schema);
} else {
return G__32749__$1;
}
} else {
var G__32750 = db_snap;
var G__32750__$1 = (cljs.core.truth_(added)?re_db.core.add_index(G__32750,id,attr,added,schema):G__32750);
if(cljs.core.truth_(removed)){
return re_db.core.remove_index(G__32750__$1,id,attr,added,schema);
} else {
return G__32750__$1;
}
}
});
re_db.core.clear_empty_ent = (function re_db$core$clear_empty_ent(db_snap,id){
var G__32757 = db_snap;
if(cljs.core.truth_((function (){var G__32762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
var fexpr__32761 = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),cljs.core.PersistentArrayMap.EMPTY]);
return (fexpr__32761.cljs$core$IFn$_invoke$arity$1 ? fexpr__32761.cljs$core$IFn$_invoke$arity$1(G__32762) : fexpr__32761.call(null,G__32762));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32757,new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.dissoc,id);
} else {
return G__32757;
}
});
re_db.core.retract_attr_many = (function re_db$core$retract_attr_many(p__32772,id,attr,value,schema){
var vec__32773 = p__32772;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773,(1),null);
var state = vec__32773;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var removals = (((value == null))?prev_val:clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(value,prev_val));
var kill_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(removals,prev_val);
if(cljs.core.empty_QMARK_(removals)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.update_index(((kill_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),clojure.set.difference,removals)),id,attr,null,removals,schema),id),(function (){var G__32776 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__32776,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,removals], null));
} else {
return G__32776;
}
})()], null);
}
});
re_db.core.retract_attr = (function re_db$core$retract_attr(var_args){
var G__32780 = arguments.length;
switch (G__32780) {
case 3:
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$3 = (function (state,id,attr){
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state,id,attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
});

re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4 = (function (p__32781,id,attr,value){
var vec__32782 = p__32781;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(1),null);
var state = vec__32782;
var schema = re_db.core.get_schema(db_snap,attr);
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))){
return re_db.core.retract_attr_many(state,id,attr,value,schema);
} else {
var prev_val = ((!((value == null)))?value:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
if(!((prev_val == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr),id,attr,null,prev_val,re_db.core.get_schema(db_snap,attr)),id),(function (){var G__32785 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__32785,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,prev_val], null));
} else {
return G__32785;
}
})()], null);
} else {
return state;
}
}
});

re_db.core.retract_attr.cljs$lang$maxFixedArity = 4;

re_db.core.retract_entity = (function re_db$core$retract_entity(state,id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__32794){
var vec__32795 = p__32794;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795,(1),null);
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state__$1,id,a,v);
}),state,re_db.core.entity((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),id));
});
re_db.core.add = (function re_db$core$add(p__32801,id,attr,val){
var vec__32802 = p__32801;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32802,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32802,(1),null);
var state = vec__32802;
if(!(cljs.core.keyword_identical_QMARK_(attr,new cljs.core.Keyword("db","id","db/id",-1388397098)))){
} else {
throw (new Error("Assert failed: (not (keyword-identical? attr :db/id))"));
}

var schema = re_db.core.get_schema(db_snap,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val);
if(cljs.core.empty_QMARK_(additions)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),re_db.core.into_set,additions),id,attr,additions,null,schema),(function (){var G__32805 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__32805,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,additions,null], null));
} else {
return G__32805;
}
})()], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_val,val)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.update_index(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),val),id,attr,val,prev_val,schema),(function (){var G__32810 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__32810,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null));
} else {
return G__32810;
}
})()], null);
}
}
});
re_db.core.add_map_indexes = (function re_db$core$add_map_indexes(db_snap,id,m,prev_m){
return cljs.core.reduce_kv((function (db_snap__$1,attr,val){
var schema = re_db.core.get_schema(db_snap__$1,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))){
return re_db.core.update_index(db_snap__$1,id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val),schema);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return re_db.core.update_index(db_snap__$1,id,attr,val,prev_val,schema);
} else {
return db_snap__$1;

}
}
}),db_snap,m);
});
re_db.core.add_map_datoms = (function re_db$core$add_map_datoms(datoms,id,m,prev_m,db_snap){
return cljs.core.reduce_kv((function (datoms__$1,attr,val){
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
var G__32832 = datoms__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__32832,(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null)));
} else {
return G__32832;
}
}),datoms,m);
});
re_db.core.remove_nils = (function re_db$core$remove_nils(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
var G__32839 = m__$1;
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32839,k);
} else {
return G__32839;
}
}),m,m);
});
re_db.core.add_map = (function re_db$core$add_map(p__32856,m){
var vec__32858 = p__32856;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var prev_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.add_map_indexes(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),re_db.core.remove_nils(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_m,m__$1], 0)))),id,m__$1,prev_m),id),(function (){var G__32861 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return re_db.core.add_map_datoms(G__32861,id,m__$1,prev_m,db_snap);
} else {
return G__32861;
}
})()], null);
});
re_db.core.update_attr = (function re_db$core$update_attr(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32945 = arguments.length;
var i__4532__auto___32946 = (0);
while(true){
if((i__4532__auto___32946 < len__4531__auto___32945)){
args__4534__auto__.push((arguments[i__4532__auto___32946]));

var G__32948 = (i__4532__auto___32946 + (1));
i__4532__auto___32946 = G__32948;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic = (function (p__32922,id,attr,f,args){
var vec__32927 = p__32922;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32927,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32927,(1),null);
var state = vec__32927;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,prev_val,args);
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_val,prev_val);
var removals = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,new_val);
var G__32936 = state;
var G__32936__$1 = ((!(cljs.core.empty_QMARK_(additions)))?re_db.core.add(G__32936,id,attr,additions):G__32936);
if(!(cljs.core.empty_QMARK_(removals))){
return re_db.core.add(G__32936__$1,id,attr,removals);
} else {
return G__32936__$1;
}
} else {
return re_db.core.add(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,new_val);
}
});

re_db.core.update_attr.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
re_db.core.update_attr.cljs$lang$applyTo = (function (seq32906){
var G__32907 = cljs.core.first(seq32906);
var seq32906__$1 = cljs.core.next(seq32906);
var G__32908 = cljs.core.first(seq32906__$1);
var seq32906__$2 = cljs.core.next(seq32906__$1);
var G__32909 = cljs.core.first(seq32906__$2);
var seq32906__$3 = cljs.core.next(seq32906__$2);
var G__32910 = cljs.core.first(seq32906__$3);
var seq32906__$4 = cljs.core.next(seq32906__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32907,G__32908,G__32909,G__32910,seq32906__$4);
});

re_db.core.assoc_in_attr = (function re_db$core$assoc_in_attr(p__32961,id,attr,path,new_val){
var vec__32962 = p__32961;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962,(1),null);
return re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_val], 0));
});
/**
 * Returns set of attribute keys with db.cardinality/schema
 */
re_db.core.many_attrs = (function re_db$core$many_attrs(schema){
return cljs.core.reduce_kv((function (s,attr,k_schema){
var G__32977 = s;
if(cljs.core.truth_(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(k_schema))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32977,attr);
} else {
return G__32977;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
 * Remove listener from patterns (if provided) or :tx-log.
 */
re_db.core.unlisten = (function re_db$core$unlisten(var_args){
var G__32989 = arguments.length;
switch (G__32989) {
case 2:
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2 = (function (db,f){
var G__32991 = db;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32991,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));

return G__32991;
});

re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,f){
return re_db.patterns.unlisten(db,patterns,f);
});

re_db.core.unlisten.cljs$lang$maxFixedArity = 3;

/**
 * Adds listener for transactions which contain datom(s) matching the provided pattern. If patterns not provided, matches all transactions.
 * 
 * Patterns should be a map containing any of the following keys, each containing a collection of patterns:
 * 
 *  :e__      entity                              [id _ _]
 *  :ea_      entity-attribute                    [id attr _]
 *  :_av      attribute-value                     [_ attr val]
 *  :_a_      attribute                           [_ attr _]
 */
re_db.core.listen = (function re_db$core$listen(var_args){
var G__33011 = arguments.length;
switch (G__33011) {
case 2:
return re_db.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (db,f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),re_db.core.conj_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));

return (function (){
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2(db,f);
});
});

re_db.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,f){
re_db.patterns.listen(db,patterns,f);

return (function (){
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3(db,patterns,f);
});
});

re_db.core.listen.cljs$lang$maxFixedArity = 3;

/**
 * Notify listeners for supported patterns matched by datoms in transaction.
 * 
 *   Listeners are called with the complete :tx-report. A listener is called at most once per transaction.
 */
re_db.core.notify_listeners = (function re_db$core$notify_listeners(p__33034){
var map__33035 = p__33034;
var map__33035__$1 = ((((!((map__33035 == null)))?(((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33035):map__33035);
var tx_report = map__33035__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33035__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33035__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var temp__5457__auto___33078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"listeners","listeners",394544445));
if(cljs.core.truth_(temp__5457__auto___33078)){
var pattern_value_map_33079 = temp__5457__auto___33078;
var seq__33046_33080 = cljs.core.seq(re_db.patterns.datom_values(pattern_value_map_33079,datoms,re_db.core.many_attrs(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after))));
var chunk__33047_33081 = null;
var count__33048_33082 = (0);
var i__33049_33083 = (0);
while(true){
if((i__33049_33083 < count__33048_33082)){
var listener_33088 = chunk__33047_33081.cljs$core$IIndexed$_nth$arity$2(null,i__33049_33083);
(listener_33088.cljs$core$IFn$_invoke$arity$1 ? listener_33088.cljs$core$IFn$_invoke$arity$1(tx_report) : listener_33088.call(null,tx_report));


var G__33089 = seq__33046_33080;
var G__33090 = chunk__33047_33081;
var G__33091 = count__33048_33082;
var G__33092 = (i__33049_33083 + (1));
seq__33046_33080 = G__33089;
chunk__33047_33081 = G__33090;
count__33048_33082 = G__33091;
i__33049_33083 = G__33092;
continue;
} else {
var temp__5457__auto___33093__$1 = cljs.core.seq(seq__33046_33080);
if(temp__5457__auto___33093__$1){
var seq__33046_33094__$1 = temp__5457__auto___33093__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33046_33094__$1)){
var c__4351__auto___33095 = cljs.core.chunk_first(seq__33046_33094__$1);
var G__33096 = cljs.core.chunk_rest(seq__33046_33094__$1);
var G__33097 = c__4351__auto___33095;
var G__33098 = cljs.core.count(c__4351__auto___33095);
var G__33099 = (0);
seq__33046_33080 = G__33096;
chunk__33047_33081 = G__33097;
count__33048_33082 = G__33098;
i__33049_33083 = G__33099;
continue;
} else {
var listener_33100 = cljs.core.first(seq__33046_33094__$1);
(listener_33100.cljs$core$IFn$_invoke$arity$1 ? listener_33100.cljs$core$IFn$_invoke$arity$1(tx_report) : listener_33100.call(null,tx_report));


var G__33101 = cljs.core.next(seq__33046_33094__$1);
var G__33102 = null;
var G__33103 = (0);
var G__33104 = (0);
seq__33046_33080 = G__33101;
chunk__33047_33081 = G__33102;
count__33048_33082 = G__33103;
i__33049_33083 = G__33104;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__33058 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001)));
var chunk__33060 = null;
var count__33061 = (0);
var i__33062 = (0);
while(true){
if((i__33062 < count__33061)){
var listener = chunk__33060.cljs$core$IIndexed$_nth$arity$2(null,i__33062);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(tx_report) : listener.call(null,tx_report));


var G__33105 = seq__33058;
var G__33106 = chunk__33060;
var G__33107 = count__33061;
var G__33108 = (i__33062 + (1));
seq__33058 = G__33105;
chunk__33060 = G__33106;
count__33061 = G__33107;
i__33062 = G__33108;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33058);
if(temp__5457__auto__){
var seq__33058__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33058__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33058__$1);
var G__33112 = cljs.core.chunk_rest(seq__33058__$1);
var G__33113 = c__4351__auto__;
var G__33114 = cljs.core.count(c__4351__auto__);
var G__33115 = (0);
seq__33058 = G__33112;
chunk__33060 = G__33113;
count__33061 = G__33114;
i__33062 = G__33115;
continue;
} else {
var listener = cljs.core.first(seq__33058__$1);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(tx_report) : listener.call(null,tx_report));


var G__33120 = cljs.core.next(seq__33058__$1);
var G__33121 = null;
var G__33122 = (0);
var G__33123 = (0);
seq__33058 = G__33120;
chunk__33060 = G__33121;
count__33061 = G__33122;
i__33062 = G__33123;
continue;
}
} else {
return null;
}
}
break;
}
});
re_db.core.commit_tx = (function re_db$core$commit_tx(state,tx){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__33132 = (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0)));
var G__33132__$1 = (((G__33132 instanceof cljs.core.Keyword))?G__33132.fqn:null);
switch (G__33132__$1) {
case "db/add":
return re_db.core.add;

break;
case "db/add-map":
return re_db.core.add_map;

break;
case "db/update-attr":
return re_db.core.update_attr;

break;
case "db/assoc-in-attr":
return re_db.core.assoc_in_attr;

break;
case "db/retract-entity":
return re_db.core.retract_entity;

break;
case "db/retract-attr":
return re_db.core.retract_attr;

break;
default:
return ((function (G__33132,G__33132__$1){
return (function (){
throw Error(["No re-db op: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0))))].join(''));
});
;})(G__33132,G__33132__$1))

}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,(0),state));
});
re_db.core.transaction = (function re_db$core$transaction(db_before,new_txs){
var resolve_id = (function (p1__33138_SHARP_){
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_before,p1__33138_SHARP_);
});
var vec__33141 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (resolve_id){
return (function (state,tx){
if(cljs.core.vector_QMARK_(tx)){
return re_db.core.commit_tx(state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,(1),resolve_id));
} else {
return re_db.core.commit_tx(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add-map","db/add-map",679156732),cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword("db","id","db/id",-1388397098),resolve_id)], null));
}
});})(resolve_id))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_before,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),new_txs);
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db_after,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.persistent_BANG_(datoms)], null);
});
re_db.core._STAR_prevent_notify_STAR_ = false;
re_db.core.transact_BANG_ = (function re_db$core$transact_BANG_(var_args){
var G__33207 = arguments.length;
switch (G__33207) {
case 2:
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db,txs){
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(db,txs,cljs.core.PersistentArrayMap.EMPTY);
});

re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (db,txs,p__33212){
var map__33213 = p__33212;
var map__33213__$1 = ((((!((map__33213 == null)))?(((((map__33213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33213):map__33213);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33213__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814),true);
var log_datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33213__$1,new cljs.core.Keyword(null,"log-datoms","log-datoms",-1857368166));
var _STAR_notify_STAR_33219 = re_db.core._STAR_notify_STAR_;
re_db.core._STAR_notify_STAR_ = (function (){var or__3949__auto__ = notify;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return log_datoms;
}
})();

try{var temp__5457__auto__ = (((txs == null))?null:((((cljs.core.map_QMARK_(txs)) && (cljs.core.contains_QMARK_(txs,new cljs.core.Keyword(null,"datoms","datoms",-290874434)))))?txs:((((cljs.core.vector_QMARK_(txs)) || (cljs.core.list_QMARK_(txs)) || (cljs.core.seq_QMARK_(txs))))?re_db.core.transaction(cljs.core.deref(db),txs):(function(){throw Error("Transact! was not passed a valid transaction")})()
)));
if(cljs.core.truth_(temp__5457__auto__)){
var map__33220 = temp__5457__auto__;
var map__33220__$1 = ((((!((map__33220 == null)))?(((((map__33220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33220):map__33220);
var tx = map__33220__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33220__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33220__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
cljs.core.reset_BANG_(db,db_after);

if((re_db.core._STAR_db_log_STAR_ == null)){
} else {
cljs.core.reset_BANG_(re_db.core._STAR_db_log_STAR_,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_db.core._STAR_db_log_STAR_),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db_after),new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.into,datoms));
}

if(cljs.core.truth_((function (){var and__3938__auto__ = notify;
if(cljs.core.truth_(and__3938__auto__)){
return !(re_db.core._STAR_prevent_notify_STAR_);
} else {
return and__3938__auto__;
}
})())){
re_db.core.notify_listeners(tx);
} else {
}

return db;
} else {
return null;
}
}finally {re_db.core._STAR_notify_STAR_ = _STAR_notify_STAR_33219;
}});

re_db.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

re_db.core.entity_ids = (function re_db$core$entity_ids(db_snap,qs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return cljs.core.set(((cljs.core.fn_QMARK_(q))?cljs.core.reduce_kv((function (s,id,entity){
if(cljs.core.truth_((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(entity) : q.call(null,entity)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308))):(((q instanceof cljs.core.Keyword))?(function (){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_a_","_a_",1238688032),q);

return cljs.core.reduce_kv((function (s,id,entity){
if(cljs.core.contains_QMARK_(entity,q)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)));
})()
:(function (){var vec__33257 = q;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257,(1),null);
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

if(cljs.core.truth_(re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val);
} else {
var G__33271 = db_snap;
var G__33272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (G__33271,vec__33257,attr,val){
return (function (p1__33244_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__33244_SHARP_,attr));
});})(G__33271,vec__33257,attr,val))
], null);
return (re_db.core.entity_ids.cljs$core$IFn$_invoke$arity$2 ? re_db.core.entity_ids.cljs$core$IFn$_invoke$arity$2(G__33271,G__33272) : re_db.core.entity_ids.call(null,G__33271,G__33272));
}
})()
)));
}),qs));
});
re_db.core.entities = (function re_db$core$entities(db_snap,qs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33301_SHARP_){
return re_db.core.entity(db_snap,p1__33301_SHARP_);
}),re_db.core.entity_ids(db_snap,qs));
});
/**
 * Returns a unique id (string).
 */
re_db.core.unique_id = (function re_db$core$unique_id(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid_utils.core.make_random_uuid())].join('');
});

//# sourceMappingURL=re_db.core.js.map
