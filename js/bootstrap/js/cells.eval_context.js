goog.provide('cells.eval_context');
goog.require('cljs.core');

/**
 * Cells are designed to be used within interactive interfaces where users re-evaluate
 * code frequently. Implement the IDispose protocol on an editor context to control the
 *  'disposal' of side-effects like intervals when code is (re)-evaluated.
 * @interface
 */
cells.eval_context.IDispose = function(){};

/**
 * Register a callback to be fired when context is disposed.
 */
cells.eval_context.on_dispose = (function cells$eval_context$on_dispose(context,f){
if(((!((context == null))) && (!((context.cells$eval_context$IDispose$on_dispose$arity$2 == null))))){
return context.cells$eval_context$IDispose$on_dispose$arity$2(context,f);
} else {
var x__4243__auto__ = (((context == null))?null:context);
var m__4244__auto__ = (cells.eval_context.on_dispose[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(context,f) : m__4244__auto__.call(null,context,f));
} else {
var m__4244__auto____$1 = (cells.eval_context.on_dispose["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(context,f) : m__4244__auto____$1.call(null,context,f));
} else {
throw cljs.core.missing_protocol("IDispose.on-dispose",context);
}
}
}
});

cells.eval_context._dispose_BANG_ = (function cells$eval_context$_dispose_BANG_(context){
if(((!((context == null))) && (!((context.cells$eval_context$IDispose$_dispose_BANG_$arity$1 == null))))){
return context.cells$eval_context$IDispose$_dispose_BANG_$arity$1(context);
} else {
var x__4243__auto__ = (((context == null))?null:context);
var m__4244__auto__ = (cells.eval_context._dispose_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(context) : m__4244__auto__.call(null,context));
} else {
var m__4244__auto____$1 = (cells.eval_context._dispose_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(context) : m__4244__auto____$1.call(null,context));
} else {
throw cljs.core.missing_protocol("IDispose.-dispose!",context);
}
}
}
});

cells.eval_context.dispose_BANG_ = (function cells$eval_context$dispose_BANG_(value){
if(((!((value == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.cells$eval_context$IDispose$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cells.eval_context.IDispose,value):false)):cljs.core.native_satisfies_QMARK_(cells.eval_context.IDispose,value))){
return cells.eval_context._dispose_BANG_(value);
} else {
return null;
}
});

/**
 * @interface
 */
cells.eval_context.IHandleError = function(){};

cells.eval_context.handle_error = (function cells$eval_context$handle_error(this$,e){
if(((!((this$ == null))) && (!((this$.cells$eval_context$IHandleError$handle_error$arity$2 == null))))){
return this$.cells$eval_context$IHandleError$handle_error$arity$2(this$,e);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cells.eval_context.handle_error[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__4244__auto__.call(null,this$,e));
} else {
var m__4244__auto____$1 = (cells.eval_context.handle_error["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,e) : m__4244__auto____$1.call(null,this$,e));
} else {
throw cljs.core.missing_protocol("IHandleError.handle-error",this$);
}
}
}
});

cells.eval_context.new_context = (function cells$eval_context$new_context(){
var _context_state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.PersistentHashSet.EMPTY], null));
if((typeof cells !== 'undefined') && (typeof cells.eval_context !== 'undefined') && (typeof cells.eval_context.t_cells$eval_context15186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cells.eval_context.IDispose}
 * @implements {cells.eval_context.IHandleError}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cells.eval_context.t_cells$eval_context15186 = (function (_context_state,meta15187){
this._context_state = _context_state;
this.meta15187 = meta15187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cells.eval_context.t_cells$eval_context15186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_context_state){
return (function (_15188,meta15187__$1){
var self__ = this;
var _15188__$1 = this;
return (new cells.eval_context.t_cells$eval_context15186(self__._context_state,meta15187__$1));
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_context_state){
return (function (_15188){
var self__ = this;
var _15188__$1 = this;
return self__.meta15187;
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL;

cells.eval_context.t_cells$eval_context15186.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = ((function (_context_state){
return (function (context,f){
var self__ = this;
var context__$1 = this;
return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f));
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = ((function (_context_state){
return (function (context){
var self__ = this;
var context__$1 = this;
var seq__15193_15223 = cljs.core.seq(new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._context_state)));
var chunk__15194_15224 = null;
var count__15195_15225 = (0);
var i__15196_15226 = (0);
while(true){
if((i__15196_15226 < count__15195_15225)){
var f_15237 = chunk__15194_15224.cljs$core$IIndexed$_nth$arity$2(null,i__15196_15226);
(f_15237.cljs$core$IFn$_invoke$arity$0 ? f_15237.cljs$core$IFn$_invoke$arity$0() : f_15237.call(null));


var G__15238 = seq__15193_15223;
var G__15239 = chunk__15194_15224;
var G__15240 = count__15195_15225;
var G__15241 = (i__15196_15226 + (1));
seq__15193_15223 = G__15238;
chunk__15194_15224 = G__15239;
count__15195_15225 = G__15240;
i__15196_15226 = G__15241;
continue;
} else {
var temp__5457__auto___15242 = cljs.core.seq(seq__15193_15223);
if(temp__5457__auto___15242){
var seq__15193_15243__$1 = temp__5457__auto___15242;
if(cljs.core.chunked_seq_QMARK_(seq__15193_15243__$1)){
var c__4351__auto___15244 = cljs.core.chunk_first(seq__15193_15243__$1);
var G__15245 = cljs.core.chunk_rest(seq__15193_15243__$1);
var G__15246 = c__4351__auto___15244;
var G__15247 = cljs.core.count(c__4351__auto___15244);
var G__15248 = (0);
seq__15193_15223 = G__15245;
chunk__15194_15224 = G__15246;
count__15195_15225 = G__15247;
i__15196_15226 = G__15248;
continue;
} else {
var f_15249 = cljs.core.first(seq__15193_15243__$1);
(f_15249.cljs$core$IFn$_invoke$arity$0 ? f_15249.cljs$core$IFn$_invoke$arity$0() : f_15249.call(null));


var G__15250 = cljs.core.next(seq__15193_15243__$1);
var G__15251 = null;
var G__15252 = (0);
var G__15253 = (0);
seq__15193_15223 = G__15250;
chunk__15194_15224 = G__15251;
count__15195_15225 = G__15252;
i__15196_15226 = G__15253;
continue;
}
} else {
}
}
break;
}

return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.empty));
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.prototype.cells$eval_context$IHandleError$ = cljs.core.PROTOCOL_SENTINEL;

cells.eval_context.t_cells$eval_context15186.prototype.cells$eval_context$IHandleError$handle_error$arity$2 = ((function (_context_state){
return (function (this$,e){
var self__ = this;
var this$__$1 = this;
throw e;
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.getBasis = ((function (_context_state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-context-state","-context-state",-508732155,null),new cljs.core.Symbol(null,"meta15187","meta15187",-503395526,null)], null);
});})(_context_state))
;

cells.eval_context.t_cells$eval_context15186.cljs$lang$type = true;

cells.eval_context.t_cells$eval_context15186.cljs$lang$ctorStr = "cells.eval-context/t_cells$eval_context15186";

cells.eval_context.t_cells$eval_context15186.cljs$lang$ctorPrWriter = ((function (_context_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cells.eval-context/t_cells$eval_context15186");
});})(_context_state))
;

/**
 * Positional factory function for cells.eval-context/t_cells$eval_context15186.
 */
cells.eval_context.__GT_t_cells$eval_context15186 = ((function (_context_state){
return (function cells$eval_context$new_context_$___GT_t_cells$eval_context15186(_context_state__$1,meta15187){
return (new cells.eval_context.t_cells$eval_context15186(_context_state__$1,meta15187));
});})(_context_state))
;

}

return (new cells.eval_context.t_cells$eval_context15186(_context_state,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=cells.eval_context.js.map
