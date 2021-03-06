goog.provide('cells.cell');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('clojure.set');
goog.require('cells.util');
goog.require('cells.eval_context');
cells.cell._STAR_cell_stack_STAR_ = cljs.core.List.EMPTY;
cells.cell._STAR_computing_dependents_STAR_ = false;
cells.cell._STAR_debug_STAR_ = false;
if((typeof cells !== 'undefined') && (typeof cells.cell !== 'undefined') && (typeof cells.cell._cells !== 'undefined')){
} else {
cells.cell._cells = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
cells.cell.log = (function cells$cell$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33801 = arguments.length;
var i__4532__auto___33802 = (0);
while(true){
if((i__4532__auto___33802 < len__4531__auto___33801)){
args__4534__auto__.push((arguments[i__4532__auto___33802]));

var G__33805 = (i__4532__auto___33802 + (1));
i__4532__auto___33802 = G__33805;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cells.cell.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cells.cell._STAR_debug_STAR_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
} else {
return null;
}
});

cells.cell.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cells.cell.log.cljs$lang$applyTo = (function (seq33800){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33800));
});


/**
 * Protocol for getting and putting cell values.
 *   This allows an interactive environment to control how cell values are persisted,
 *   and to facilitate reactivity.
 * @interface
 */
cells.cell.ICellStore = function(){};

cells.cell.put_value_BANG_ = (function cells$cell$put_value_BANG_(this$,value){
if(((!((this$ == null))) && (!((this$.cells$cell$ICellStore$put_value_BANG_$arity$2 == null))))){
return this$.cells$cell$ICellStore$put_value_BANG_$arity$2(this$,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.put_value_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4244__auto__.call(null,this$,value));
} else {
var m__4244__auto____$1 = (cells.cell.put_value_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4244__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("ICellStore.put-value!",this$);
}
}
}
});

cells.cell.get_value = (function cells$cell$get_value(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$ICellStore$get_value$arity$1 == null))))){
return this$.cells$cell$ICellStore$get_value$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.get_value[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.get_value["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellStore.get-value",this$);
}
}
}
});

cells.cell.invalidate_BANG_ = (function cells$cell$invalidate_BANG_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$ICellStore$invalidate_BANG_$arity$1 == null))))){
return this$.cells$cell$ICellStore$invalidate_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.invalidate_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.invalidate_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellStore.invalidate!",this$);
}
}
}
});


/**
 * Cell views are attached as metadata & allow multiple (different) views on identical cells.
 * @interface
 */
cells.cell.ICellView = function(){};

cells.cell.view = (function cells$cell$view(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$ICellView$view$arity$1 == null))))){
return this$.cells$cell$ICellView$view$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.view[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.view["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellView.view",this$);
}
}
}
});

/**
 * Wraps a cell with a view
 */
cells.cell.with_view = (function cells$cell$with_view(this$,view_fn){
if(((!((this$ == null))) && (!((this$.cells$cell$ICellView$with_view$arity$2 == null))))){
return this$.cells$cell$ICellView$with_view$arity$2(this$,view_fn);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.with_view[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,view_fn) : m__4244__auto__.call(null,this$,view_fn));
} else {
var m__4244__auto____$1 = (cells.cell.with_view["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,view_fn) : m__4244__auto____$1.call(null,this$,view_fn));
} else {
throw cljs.core.missing_protocol("ICellView.with-view",this$);
}
}
}
});


/**
 * Protocol for
 * @interface
 */
cells.cell.IRenderHiccup = function(){};

cells.cell.render_hiccup = (function cells$cell$render_hiccup(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IRenderHiccup$render_hiccup$arity$1 == null))))){
return this$.cells$cell$IRenderHiccup$render_hiccup$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.render_hiccup[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.render_hiccup["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderHiccup.render-hiccup",this$);
}
}
}
});


/**
 * @interface
 */
cells.cell.ISet_BANG_ = function(){};

/**
 * Set cell value without notifying dependent cells.
 */
cells.cell._set_BANG_ = (function cells$cell$_set_BANG_(this$,newval){
if(((!((this$ == null))) && (!((this$.cells$cell$ISet_BANG_$_set_BANG_$arity$2 == null))))){
return this$.cells$cell$ISet_BANG_$_set_BANG_$arity$2(this$,newval);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._set_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,newval) : m__4244__auto__.call(null,this$,newval));
} else {
var m__4244__auto____$1 = (cells.cell._set_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,newval) : m__4244__auto____$1.call(null,this$,newval));
} else {
throw cljs.core.missing_protocol("ISet!.-set!",this$);
}
}
}
});

/**
 * Accepts a cell or its name, and returns its name.
 */
cells.cell.cell_name = (function cells$cell$cell_name(cell){
var G__33845 = cell;
if(!((cell instanceof cljs.core.Keyword))){
return cljs.core.name(G__33845);
} else {
return G__33845;
}
});
if((typeof cells !== 'undefined') && (typeof cells.cell !== 'undefined') && (typeof cells.cell.dep_graph !== 'undefined')){
} else {
cells.cell.dep_graph = cljs.core.volatile_BANG_(com.stuartsierra.dependency.graph());
}
cells.cell.dependencies = (function cells$cell$dependencies(cell){
return com.stuartsierra.dependency.immediate_dependencies(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.dependents = (function cells$cell$dependents(cell){
return com.stuartsierra.dependency.immediate_dependents(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.remove_node = (function cells$cell$remove_node(cell){
return cljs.core._vreset_BANG_(cells.cell.dep_graph,com.stuartsierra.dependency.remove_node(cljs.core._deref(cells.cell.dep_graph),cells.cell.cell_name(cell)));
});
cells.cell.remove_edge = (function cells$cell$remove_edge(cell,other_cell){
return cljs.core._vreset_BANG_(cells.cell.dep_graph,com.stuartsierra.dependency.remove_edge(cljs.core._deref(cells.cell.dep_graph),cells.cell.cell_name(cell),cells.cell.cell_name(other_cell)));
});
cells.cell.remove_all = (function cells$cell$remove_all(cell){
return cljs.core._vreset_BANG_(cells.cell.dep_graph,com.stuartsierra.dependency.remove_all(cljs.core._deref(cells.cell.dep_graph),cells.cell.cell_name(cell)));
});
cells.cell.depend = (function cells$cell$depend(cell,other_cell){
return cljs.core._vreset_BANG_(cells.cell.dep_graph,com.stuartsierra.dependency.depend(cljs.core._deref(cells.cell.dep_graph),cells.cell.cell_name(cell),cells.cell.cell_name(other_cell)));
});
cells.cell.transitive_dependents = (function cells$cell$transitive_dependents(cell){
return com.stuartsierra.dependency.transitive_dependents(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.topo_sort = (function cells$cell$topo_sort(cells__$1){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(cljs.core.deref(cells.cell.dep_graph)),cells__$1);
});
cells.cell.transitive_dependents_sorted = (function cells$cell$transitive_dependents_sorted(cell){
return cells.cell.topo_sort(cells.cell.transitive_dependents(cell));
});
cells.cell._STAR_eval_context_STAR_ = cells.eval_context.new_context();

/**
 * @interface
 */
cells.cell.IReactiveCompute = function(){};

cells.cell._set_function_BANG_ = (function cells$cell$_set_function_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2 == null))))){
return this$.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2(this$,f);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._set_function_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4244__auto__.call(null,this$,f));
} else {
var m__4244__auto____$1 = (cells.cell._set_function_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4244__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-set-function!",this$);
}
}
}
});

/**
 * evaluate cell
 */
cells.cell._compute = (function cells$cell$_compute(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IReactiveCompute$_compute$arity$1 == null))))){
return this$.cells$cell$IReactiveCompute$_compute$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._compute[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell._compute["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute",this$);
}
}
}
});

cells.cell._compute_dependents_BANG_ = (function cells$cell$_compute_dependents_BANG_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1 == null))))){
return this$.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._compute_dependents_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell._compute_dependents_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute-dependents!",this$);
}
}
}
});

/**
 * evaluate cell and set value
 */
cells.cell._compute_BANG_ = (function cells$cell$_compute_BANG_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IReactiveCompute$_compute_BANG_$arity$1 == null))))){
return this$.cells$cell$IReactiveCompute$_compute_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._compute_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell._compute_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute!",this$);
}
}
}
});

/**
 * evaluate cell and flow updates to dependent cells
 */
cells.cell._compute_with_dependents_BANG_ = (function cells$cell$_compute_with_dependents_BANG_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1 == null))))){
return this$.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell._compute_with_dependents_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell._compute_with_dependents_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute-with-dependents!",this$);
}
}
}
});

cells.cell._STAR_allow_deref_while_loading_QMARK__STAR_ = true;

/**
 * Experimental: protocol to store 'status' information on a cell.
 *   Differs from metadata, in that mutations to the status of a cell
 *   propagate to all copies.
 * @interface
 */
cells.cell.IStatus = function(){};

/**
 * Set loading status
 */
cells.cell.status_BANG_ = (function cells$cell$status_BANG_(var_args){
var G__33954 = arguments.length;
switch (G__33954) {
case 1:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$status_BANG_$arity$1 == null))))){
return this$.cells$cell$IStatus$status_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.status_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
}
});

cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,status){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$status_BANG_$arity$2 == null))))){
return this$.cells$cell$IStatus$status_BANG_$arity$2(this$,status);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,status) : m__4244__auto__.call(null,this$,status));
} else {
var m__4244__auto____$1 = (cells.cell.status_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,status) : m__4244__auto____$1.call(null,this$,status));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
}
});

cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,status,message){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$status_BANG_$arity$3 == null))))){
return this$.cells$cell$IStatus$status_BANG_$arity$3(this$,status,message);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,status,message) : m__4244__auto__.call(null,this$,status,message));
} else {
var m__4244__auto____$1 = (cells.cell.status_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,status,message) : m__4244__auto____$1.call(null,this$,status,message));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
}
});

cells.cell.status_BANG_.cljs$lang$maxFixedArity = 3;


cells.cell.status = (function cells$cell$status(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$status$arity$1 == null))))){
return this$.cells$cell$IStatus$status$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.status[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.status["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.status",this$);
}
}
}
});

/**
 * Read message associated with async state
 */
cells.cell.message = (function cells$cell$message(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$message$arity$1 == null))))){
return this$.cells$cell$IStatus$message$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.message[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.message["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.message",this$);
}
}
}
});

cells.cell.error_QMARK_ = (function cells$cell$error_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$error_QMARK_$arity$1 == null))))){
return this$.cells$cell$IStatus$error_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.error_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.error_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.error?",this$);
}
}
}
});

cells.cell.loading_QMARK_ = (function cells$cell$loading_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.cells$cell$IStatus$loading_QMARK_$arity$1 == null))))){
return this$.cells$cell$IStatus$loading_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.cell.loading_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (cells.cell.loading_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.loading?",this$);
}
}
}
});

/**
 * Experimental: cells that implement IStatus can 'show' themselves differently depending on status.
 */
cells.cell.status_view = (function cells$cell$status_view(this$){
return cells.cell.render_hiccup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cell-status",".cell-status",-923817673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34044 = cells.cell.status(this$);
var G__34044__$1 = (((G__34044 instanceof cljs.core.Keyword))?G__34044.fqn:null);
switch (G__34044__$1) {
case "loading":
return new cljs.core.Keyword(null,".circle-loading",".circle-loading",1989425347);

break;
case "error":
return new cljs.core.Keyword(null,".circle-error",".circle-error",1037940815);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34044__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null)], null));
});
cells.cell.default_view = (function cells$cell$default_view(self){
if(cljs.core.truth_(cells.cell.status(self))){
return cells.cell.status_view(self);
} else {
return cljs.core.deref(self);
}
});
/**
 * Dynamic var to track dependencies of a cell while its function is evaluated.
 */
cells.cell._STAR_read_log_STAR_ = null;

/**
* @constructor
 * @implements {cells.cell.IStatus}
 * @implements {cljs.core.IWatchable}
 * @implements {cells.eval_context.IDispose}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.INamed}
 * @implements {cells.cell.ICellView}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cells.cell.IReactiveCompute}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cells.cell.ICellStore}
 * @implements {cells.cell.ISet_BANG_}
*/
cells.cell.Cell = (function (id,f,state,eval_context,__meta){
this.id = id;
this.f = f;
this.state = state;
this.eval_context = eval_context;
this.__meta = __meta;
this.cljs$lang$protocol_mask$partition0$ = 2156298240;
this.cljs$lang$protocol_mask$partition1$ = 110594;
});
cells.cell.Cell.prototype.cells$cell$IStatus$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cells$cell$IStatus$status_BANG_$arity$3(null,null,null);
});

cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.cells$cell$IStatus$status_BANG_$arity$3(null,value,null);
});

cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$3 = (function (this$,value,message){
var self__ = this;
var this$__$1 = this;
self__.state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.state,new cljs.core.Keyword("cell.status","status","cell.status/status",577963505),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cell.status","message","cell.status/message",-2043079232),message], 0));

this$__$1.cells$cell$ICellStore$invalidate_BANG_$arity$1(null);

return this$__$1.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(null);
});

cells.cell.Cell.prototype.cells$cell$IStatus$status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.deref(this$__$1);

return new cljs.core.Keyword("cell.status","status","cell.status/status",577963505).cljs$core$IFn$_invoke$arity$1(self__.state);
});

cells.cell.Cell.prototype.cells$cell$IStatus$message$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.deref(this$__$1);

return new cljs.core.Keyword("cell.status","message","cell.status/message",-2043079232).cljs$core$IFn$_invoke$arity$1(self__.state);
});

cells.cell.Cell.prototype.cells$cell$IStatus$loading_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),this$__$1.cells$cell$IStatus$status$arity$1(null));
});

cells.cell.Cell.prototype.cells$cell$IStatus$error_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),this$__$1.cells$cell$IStatus$status$arity$1(null));
});

cells.cell.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["cell#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)].join('')], 0));
});

cells.cell.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__meta;
});

cells.cell.Cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__34069 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(self__.id),cells.util.unique_id());
var G__34070 = self__.f;
var G__34071 = self__.state;
return (cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3 ? cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3(G__34069,G__34070,G__34071) : cells.cell.cell_STAR_.call(null,G__34069,G__34070,G__34071));
});

cells.cell.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-reset!","cells.cell/-reset!",-102834125),this$__$1,newval], 0));

var oldval_34178 = cljs.core.deref(this$__$1);
this$__$1.cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,newval);

this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,oldval_34178,newval);

this$__$1.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(null);

return newval;
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__34072 = cljs.core.deref(this$__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__34072) : f__$1.call(null,G__34072));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f__$1,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__34075 = cljs.core.deref(this$__$1);
var G__34076 = a;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__34075,G__34076) : f__$1.call(null,G__34075,G__34076));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f__$1,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__34077 = cljs.core.deref(this$__$1);
var G__34078 = a;
var G__34079 = b;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__34077,G__34078,G__34079) : f__$1.call(null,G__34077,G__34078,G__34079));
})());
});

cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f__$1,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,cljs.core.deref(this$__$1),a,b,xs));
});

cells.cell.Cell.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

cells.cell.Cell.prototype.cells$cell$ICellView$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$ICellView$view$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var fexpr__34083 = (function (){var or__3949__auto__ = new cljs.core.Keyword("cells.cell","view","cells.cell/view",770075107).cljs$core$IFn$_invoke$arity$1(self__.__meta);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cells.cell.default_view;
}
})();
return (fexpr__34083.cljs$core$IFn$_invoke$arity$1 ? fexpr__34083.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__34083.call(null,this$__$1));
});

cells.cell.Cell.prototype.cells$cell$ICellView$with_view$arity$2 = (function (this$,view_fn){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(this$__$1),new cljs.core.Keyword("cells.cell","view","cells.cell/view",770075107),view_fn));
});

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cells.cell._STAR_computing_dependents_STAR_){
return null;
} else {
var _STAR_computing_dependents_STAR_34084 = cells.cell._STAR_computing_dependents_STAR_;
cells.cell._STAR_computing_dependents_STAR_ = true;

try{var deps = cells.cell.transitive_dependents_sorted(this$__$1);
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-compute-dependents!","-compute-dependents!",283544650),this$__$1,deps], 0));

var seq__34085 = cljs.core.seq(deps);
var chunk__34086 = null;
var count__34087 = (0);
var i__34088 = (0);
while(true){
if((i__34088 < count__34087)){
var cell_id = chunk__34086.cljs$core$IIndexed$_nth$arity$2(null,i__34088);
var G__34090_34200 = (function (){var fexpr__34092 = cljs.core.deref(cells.cell._cells);
return (fexpr__34092.cljs$core$IFn$_invoke$arity$1 ? fexpr__34092.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__34092.call(null,cell_id));
})();
if((G__34090_34200 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__34090_34200);
}


var G__34204 = seq__34085;
var G__34205 = chunk__34086;
var G__34206 = count__34087;
var G__34207 = (i__34088 + (1));
seq__34085 = G__34204;
chunk__34086 = G__34205;
count__34087 = G__34206;
i__34088 = G__34207;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34085);
if(temp__5457__auto__){
var seq__34085__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34085__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34085__$1);
var G__34208 = cljs.core.chunk_rest(seq__34085__$1);
var G__34209 = c__4351__auto__;
var G__34210 = cljs.core.count(c__4351__auto__);
var G__34211 = (0);
seq__34085 = G__34208;
chunk__34086 = G__34209;
count__34087 = G__34210;
i__34088 = G__34211;
continue;
} else {
var cell_id = cljs.core.first(seq__34085__$1);
var G__34093_34212 = (function (){var fexpr__34094 = cljs.core.deref(cells.cell._cells);
return (fexpr__34094.cljs$core$IFn$_invoke$arity$1 ? fexpr__34094.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__34094.call(null,cell_id));
})();
if((G__34093_34212 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__34093_34212);
}


var G__34213 = cljs.core.next(seq__34085__$1);
var G__34214 = null;
var G__34215 = (0);
var G__34216 = (0);
seq__34085 = G__34213;
chunk__34086 = G__34214;
count__34087 = G__34215;
i__34088 = G__34216;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cells.cell._STAR_computing_dependents_STAR_ = _STAR_computing_dependents_STAR_34084;
}}
});

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2 = (function (this$,newf){
var self__ = this;
var this$__$1 = this;
return self__.f = newf;
});

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var _STAR_cell_stack_STAR_34095 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_eval_context_STAR_34096 = cells.cell._STAR_eval_context_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(this$__$1,cells.cell._STAR_cell_stack_STAR_);

cells.cell._STAR_eval_context_STAR_ = self__.eval_context;

try{try{return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.f.call(null,this$__$1));
}catch (e34098){if((e34098 instanceof Error)){
var e = e34098;
cells.eval_context.dispose_BANG_(this$__$1);

throw e;
} else {
throw e34098;

}
}}finally {cells.cell._STAR_eval_context_STAR_ = _STAR_eval_context_STAR_34096;

cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_34095;
}});

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,this$__$1.cells$cell$IReactiveCompute$_compute$arity$1(null));
});

cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.first(cells.cell._STAR_cell_stack_STAR_))){
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-compute-with-dependents!","cells.cell/-compute-with-dependents!",297438736),this$__$1,"Return - in current cell"], 0));
} else {
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-compute-with-dependents!","cells.cell/-compute-with-dependents!",297438736),this$__$1], 0));

cells.eval_context.dispose_BANG_(this$__$1);

var _STAR_read_log_STAR_34102_34218 = cells.cell._STAR_read_log_STAR_;
cells.cell._STAR_read_log_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var value_34219 = this$__$1.cells$cell$IReactiveCompute$_compute$arity$1(null);
var next_dependencies_34220 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._STAR_read_log_STAR_),cljs.core.name(this$__$1));
var prev_dependencies_34221 = cells.cell.dependencies(this$__$1);
var seq__34103_34222 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_dependencies_34220,prev_dependencies_34221));
var chunk__34104_34223 = null;
var count__34105_34224 = (0);
var i__34106_34225 = (0);
while(true){
if((i__34106_34225 < count__34105_34224)){
var added_34226 = chunk__34104_34223.cljs$core$IIndexed$_nth$arity$2(null,i__34106_34225);
cells.cell.depend(this$__$1,added_34226);


var G__34227 = seq__34103_34222;
var G__34228 = chunk__34104_34223;
var G__34229 = count__34105_34224;
var G__34230 = (i__34106_34225 + (1));
seq__34103_34222 = G__34227;
chunk__34104_34223 = G__34228;
count__34105_34224 = G__34229;
i__34106_34225 = G__34230;
continue;
} else {
var temp__5457__auto___34231 = cljs.core.seq(seq__34103_34222);
if(temp__5457__auto___34231){
var seq__34103_34232__$1 = temp__5457__auto___34231;
if(cljs.core.chunked_seq_QMARK_(seq__34103_34232__$1)){
var c__4351__auto___34233 = cljs.core.chunk_first(seq__34103_34232__$1);
var G__34234 = cljs.core.chunk_rest(seq__34103_34232__$1);
var G__34235 = c__4351__auto___34233;
var G__34236 = cljs.core.count(c__4351__auto___34233);
var G__34237 = (0);
seq__34103_34222 = G__34234;
chunk__34104_34223 = G__34235;
count__34105_34224 = G__34236;
i__34106_34225 = G__34237;
continue;
} else {
var added_34238 = cljs.core.first(seq__34103_34232__$1);
cells.cell.depend(this$__$1,added_34238);


var G__34239 = cljs.core.next(seq__34103_34232__$1);
var G__34240 = null;
var G__34241 = (0);
var G__34242 = (0);
seq__34103_34222 = G__34239;
chunk__34104_34223 = G__34240;
count__34105_34224 = G__34241;
i__34106_34225 = G__34242;
continue;
}
} else {
}
}
break;
}

var seq__34111_34243 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_dependencies_34221,next_dependencies_34220));
var chunk__34112_34244 = null;
var count__34113_34245 = (0);
var i__34114_34246 = (0);
while(true){
if((i__34114_34246 < count__34113_34245)){
var removed_34249 = chunk__34112_34244.cljs$core$IIndexed$_nth$arity$2(null,i__34114_34246);
cells.cell.remove_edge(this$__$1,removed_34249);


var G__34251 = seq__34111_34243;
var G__34252 = chunk__34112_34244;
var G__34253 = count__34113_34245;
var G__34254 = (i__34114_34246 + (1));
seq__34111_34243 = G__34251;
chunk__34112_34244 = G__34252;
count__34113_34245 = G__34253;
i__34114_34246 = G__34254;
continue;
} else {
var temp__5457__auto___34255 = cljs.core.seq(seq__34111_34243);
if(temp__5457__auto___34255){
var seq__34111_34256__$1 = temp__5457__auto___34255;
if(cljs.core.chunked_seq_QMARK_(seq__34111_34256__$1)){
var c__4351__auto___34262 = cljs.core.chunk_first(seq__34111_34256__$1);
var G__34263 = cljs.core.chunk_rest(seq__34111_34256__$1);
var G__34264 = c__4351__auto___34262;
var G__34265 = cljs.core.count(c__4351__auto___34262);
var G__34266 = (0);
seq__34111_34243 = G__34263;
chunk__34112_34244 = G__34264;
count__34113_34245 = G__34265;
i__34114_34246 = G__34266;
continue;
} else {
var removed_34267 = cljs.core.first(seq__34111_34256__$1);
cells.cell.remove_edge(this$__$1,removed_34267);


var G__34268 = cljs.core.next(seq__34111_34256__$1);
var G__34269 = null;
var G__34270 = (0);
var G__34271 = (0);
seq__34111_34243 = G__34268;
chunk__34112_34244 = G__34269;
count__34113_34245 = G__34270;
i__34114_34246 = G__34271;
continue;
}
} else {
}
}
break;
}

this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,value_34219);
}finally {cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR_34102_34218;
}}

return this$__$1;
});

cells.cell.Cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__34120 = cljs.core.clone(this$__$1);
var fexpr__34119 = ((function (G__34120,this$__$1){
return (function cells$cell$cell_seq(this$__$2){
return cljs.core.cons(cljs.core.deref(this$__$2),(new cljs.core.LazySeq(null,((function (G__34120,this$__$1){
return (function (){
return cells$cell$cell_seq(cells.cell._compute_with_dependents_BANG_(this$__$2));
});})(G__34120,this$__$1))
,null,null)));
});})(G__34120,this$__$1))
;
return fexpr__34119(G__34120);
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__34127 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(self__.state)));
var chunk__34128 = null;
var count__34129 = (0);
var i__34130 = (0);
while(true){
if((i__34130 < count__34129)){
var f__$1 = chunk__34128.cljs$core$IIndexed$_nth$arity$2(null,i__34130);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__34291 = seq__34127;
var G__34292 = chunk__34128;
var G__34293 = count__34129;
var G__34294 = (i__34130 + (1));
seq__34127 = G__34291;
chunk__34128 = G__34292;
count__34129 = G__34293;
i__34130 = G__34294;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34127);
if(temp__5457__auto__){
var seq__34127__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34127__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34127__$1);
var G__34296 = cljs.core.chunk_rest(seq__34127__$1);
var G__34297 = c__4351__auto__;
var G__34298 = cljs.core.count(c__4351__auto__);
var G__34299 = (0);
seq__34127 = G__34296;
chunk__34128 = G__34297;
count__34129 = G__34298;
i__34130 = G__34299;
continue;
} else {
var f__$1 = cljs.core.first(seq__34127__$1);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__34300 = cljs.core.next(seq__34127__$1);
var G__34301 = null;
var G__34302 = (0);
var G__34303 = (0);
seq__34127 = G__34300;
chunk__34128 = G__34301;
count__34129 = G__34302;
i__34130 = G__34303;
continue;
}
} else {
return null;
}
}
break;
}
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.state,new cljs.core.Keyword(null,"watches","watches",-273097535),cljs.core.assoc,key,f__$1);
});

cells.cell.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.state,new cljs.core.Keyword(null,"watches","watches",-273097535),cljs.core.dissoc,key,self__.f);
});

cells.cell.Cell.prototype.cells$cell$ISet_BANG_$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$ISet_BANG_$_set_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-set-cell!","cells.cell/-set-cell!",-1896447085),this$__$1], 0));

this$__$1.cells$cell$ICellStore$put_value_BANG_$arity$2(null,newval);

return this$__$1;
});

cells.cell.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cells.cell.Cell(self__.id,self__.f,self__.state,self__.eval_context,new_meta)).cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,cljs.core.deref(this$__$1));
});

cells.cell.Cell.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
return self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$4(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f__$1);
});

cells.cell.Cell.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__34142_34311 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251)));
var chunk__34143_34312 = null;
var count__34144_34313 = (0);
var i__34145_34314 = (0);
while(true){
if((i__34145_34314 < count__34144_34313)){
var f_34315__$1 = chunk__34143_34312.cljs$core$IIndexed$_nth$arity$2(null,i__34145_34314);
(f_34315__$1.cljs$core$IFn$_invoke$arity$0 ? f_34315__$1.cljs$core$IFn$_invoke$arity$0() : f_34315__$1.call(null));


var G__34316 = seq__34142_34311;
var G__34317 = chunk__34143_34312;
var G__34318 = count__34144_34313;
var G__34319 = (i__34145_34314 + (1));
seq__34142_34311 = G__34316;
chunk__34143_34312 = G__34317;
count__34144_34313 = G__34318;
i__34145_34314 = G__34319;
continue;
} else {
var temp__5457__auto___34320 = cljs.core.seq(seq__34142_34311);
if(temp__5457__auto___34320){
var seq__34142_34321__$1 = temp__5457__auto___34320;
if(cljs.core.chunked_seq_QMARK_(seq__34142_34321__$1)){
var c__4351__auto___34322 = cljs.core.chunk_first(seq__34142_34321__$1);
var G__34323 = cljs.core.chunk_rest(seq__34142_34321__$1);
var G__34324 = c__4351__auto___34322;
var G__34325 = cljs.core.count(c__4351__auto___34322);
var G__34326 = (0);
seq__34142_34311 = G__34323;
chunk__34143_34312 = G__34324;
count__34144_34313 = G__34325;
i__34145_34314 = G__34326;
continue;
} else {
var f_34327__$1 = cljs.core.first(seq__34142_34321__$1);
(f_34327__$1.cljs$core$IFn$_invoke$arity$0 ? f_34327__$1.cljs$core$IFn$_invoke$arity$0() : f_34327__$1.call(null));


var G__34328 = cljs.core.next(seq__34142_34321__$1);
var G__34329 = null;
var G__34330 = (0);
var G__34331 = (0);
seq__34142_34311 = G__34328;
chunk__34143_34312 = G__34329;
count__34144_34313 = G__34330;
i__34145_34314 = G__34331;
continue;
}
} else {
}
}
break;
}

self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.empty);

return this$__$1;
});

cells.cell.Cell.prototype.cells$cell$ICellStore$ = cljs.core.PROTOCOL_SENTINEL;

cells.cell.Cell.prototype.cells$cell$ICellStore$get_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state);
});

cells.cell.Cell.prototype.cells$cell$ICellStore$put_value_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.state,new cljs.core.Keyword(null,"value","value",305978217),value);
});

cells.cell.Cell.prototype.cells$cell$ICellStore$invalidate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cells.cell.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cells.cell._STAR_read_log_STAR_)){
cljs.core._vreset_BANG_(cells.cell._STAR_read_log_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_read_log_STAR_),cljs.core.name(this$__$1)));
} else {
}

var G__34153 = this$__$1;
if(((cells.cell._STAR_allow_deref_while_loading_QMARK__STAR_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cell.status","status","cell.status/status",577963505).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"loading","loading",-737050189))))){
return G__34153.cells$cell$ICellStore$get_value$arity$1(null);
} else {
return G__34153;
}
});

cells.cell.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"eval-context","eval-context",-2118180155,null),new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)], null);
});

cells.cell.Cell.cljs$lang$type = true;

cells.cell.Cell.cljs$lang$ctorStr = "cells.cell/Cell";

cells.cell.Cell.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cells.cell/Cell");
});

/**
 * Positional factory function for cells.cell/Cell.
 */
cells.cell.__GT_Cell = (function cells$cell$__GT_Cell(id,f,state,eval_context,__meta){
return (new cells.cell.Cell(id,f,state,eval_context,__meta));
});

cells.cell.purge_cell_BANG_ = (function cells$cell$purge_cell_BANG_(cell){
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","purge-cell!","cells.cell/purge-cell!",331370582),cell], 0));

cells.eval_context._dispose_BANG_(cell);

cells.cell._set_BANG_(cell,null);

cljs.core._vreset_BANG_(cells.cell._cells,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._cells),cljs.core.name(cell)));

cells.cell.remove_node(cell);

return cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"purged-cell-dependents","purged-cell-dependents",45516134),cells.cell.dependents(cell)], 0));
});
cells.cell.empty_cell_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),null,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.PersistentVector.EMPTY], null);
/**
 * Should not be called directly, use `cell` macro or function instead.
 * 
 *   Returns a new cell, or an existing cell if `id` has been seen before.
 *   `f` should be a function that, given the cell's previous value, returns its next value.
 *   `state` is not for public use.
 */
cells.cell.cell_STAR_ = (function cells$cell$cell_STAR_(var_args){
var G__34356 = arguments.length;
switch (G__34356) {
case 1:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("cells.temp",["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.util.unique_id())].join('')),f);
});

cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3(id,f,cljs.core.PersistentArrayMap.EMPTY);
});

cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (id,f,state){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._cells),id);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var cell = cells.cell.__GT_Cell(id,f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cells.cell.empty_cell_state,state], 0)),cells.cell._STAR_eval_context_STAR_,cljs.core.PersistentArrayMap.EMPTY);
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","cell*","cells.cell/cell*",1591171642),id], 0));

cells.eval_context.on_dispose(cells.cell._STAR_eval_context_STAR_,((function (cell,or__3949__auto__){
return (function (){
return cells.cell.purge_cell_BANG_(cell);
});})(cell,or__3949__auto__))
);

cljs.core._vreset_BANG_(cells.cell._cells,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cells.cell._cells),id,cell));

cells.cell._set_BANG_(cell,new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(state));

return cells.cell._compute_with_dependents_BANG_(cell);
}
});

cells.cell.cell_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Returns a cell, given initial `value` and a `key` which should be unique per cell container.
 */
cells.cell.cell = (function cells$cell$cell(key,value){
var cell_container_id = (function (){var G__34364 = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
if((G__34364 == null)){
return null;
} else {
return cljs.core.name(G__34364);
}
})();
var ns = (cljs.core.truth_(cell_container_id)?cljs.core.namespace(cell_container_id):"cells.temp");
var prefix = (cljs.core.truth_(cell_container_id)?cljs.core.name(cell_container_id):"base");
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')),cljs.core.constantly(value));
});
/**
 * Purges and removes all cells in the provided namespace.
 */
cells.cell.reset_namespace = (function cells$cell$reset_namespace(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var the_cells = cljs.core.filterv(((function (ns__$1){
return (function (p__34370){
var vec__34371 = p__34370;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34371,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34371,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id),ns__$1);
});})(ns__$1))
,cljs.core.deref(cells.cell._cells));
var seq__34376 = cljs.core.seq(cells.cell.topo_sort(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,the_cells)));
var chunk__34377 = null;
var count__34378 = (0);
var i__34379 = (0);
while(true){
if((i__34379 < count__34378)){
var cell = chunk__34377.cljs$core$IIndexed$_nth$arity$2(null,i__34379);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__34394 = seq__34376;
var G__34395 = chunk__34377;
var G__34396 = count__34378;
var G__34397 = (i__34379 + (1));
seq__34376 = G__34394;
chunk__34377 = G__34395;
count__34378 = G__34396;
i__34379 = G__34397;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34376);
if(temp__5457__auto__){
var seq__34376__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34376__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34376__$1);
var G__34402 = cljs.core.chunk_rest(seq__34376__$1);
var G__34403 = c__4351__auto__;
var G__34404 = cljs.core.count(c__4351__auto__);
var G__34405 = (0);
seq__34376 = G__34402;
chunk__34377 = G__34403;
count__34378 = G__34404;
i__34379 = G__34405;
continue;
} else {
var cell = cljs.core.first(seq__34376__$1);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__34406 = cljs.core.next(seq__34376__$1);
var G__34407 = null;
var G__34408 = (0);
var G__34409 = (0);
seq__34376 = G__34406;
chunk__34377 = G__34407;
count__34378 = G__34408;
i__34379 = G__34409;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=cells.cell.js.map
