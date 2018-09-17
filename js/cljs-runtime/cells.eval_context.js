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
if((typeof cells !== 'undefined') && (typeof cells.eval_context !== 'undefined') && (typeof cells.eval_context.t_cells$eval_context33667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cells.eval_context.IDispose}
 * @implements {cells.eval_context.IHandleError}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cells.eval_context.t_cells$eval_context33667 = (function (_context_state,meta33668){
this._context_state = _context_state;
this.meta33668 = meta33668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cells.eval_context.t_cells$eval_context33667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_context_state){
return (function (_33669,meta33668__$1){
var self__ = this;
var _33669__$1 = this;
return (new cells.eval_context.t_cells$eval_context33667(self__._context_state,meta33668__$1));
});})(_context_state))
;

cells.eval_context.t_cells$eval_context33667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_context_state){
return (function (_33669){
var self__ = this;
var _33669__$1 = this;
return self__.meta33668;
});})(_context_state))
;

cells.eval_context.t_cells$eval_context33667.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL;

cells.eval_context.t_cells$eval_context33667.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = ((function (_context_state){
return (function (context,f){
var self__ = this;
var context__$1 = this;
return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f));
});})(_context_state))
;

cells.eval_context.t_cells$eval_context33667.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = ((function (_context_state){
return (function (context){
var self__ = this;
var context__$1 = this;
var seq__33679_33688 = cljs.core.seq(new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._context_state)));
var chunk__33680_33689 = null;
var count__33681_33690 = (0);
var i__33682_33691 = (0);
while(true){
if((i__33682_33691 < count__33681_33690)){
var f_33692 = chunk__33680_33689.cljs$core$IIndexed$_nth$arity$2(null,i__33682_33691);
(f_33692.cljs$core$IFn$_invoke$arity$0 ? f_33692.cljs$core$IFn$_invoke$arity$0() : f_33692.call(null));


var G__33693 = seq__33679_33688;
var G__33694 = chunk__33680_33689;
var G__33695 = count__33681_33690;
var G__33696 = (i__33682_33691 + (1));
seq__33679_33688 = G__33693;
chunk__33680_33689 = G__33694;
count__33681_33690 = G__33695;
i__33682_33691 = G__33696;
continue;
} else {
var temp__5457__auto___33697 = cljs.core.seq(seq__33679_33688);
if(temp__5457__auto___33697){
var seq__33679_33698__$1 = temp__5457__auto___33697;
if(cljs.core.chunked_seq_QMARK_(seq__33679_33698__$1)){
var c__4351__auto___33700 = cljs.core.chunk_first(seq__33679_33698__$1);
var G__33701 = cljs.core.chunk_rest(seq__33679_33698__$1);
var G__33702 = c__4351__auto___33700;
var G__33703 = cljs.core.count(c__4351__auto___33700);
var G__33704 = (0);
seq__33679_33688 = G__33701;
chunk__33680_33689 = G__33702;
count__33681_33690 = G__33703;
i__33682_33691 = G__33704;
continue;
} else {
var f_33705 = cljs.core.first(seq__33679_33698__$1);
(f_33705.cljs$core$IFn$_invoke$arity$0 ? f_33705.cljs$core$IFn$_invoke$arity$0() : f_33705.call(null));


var G__33706 = cljs.core.next(seq__33679_33698__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__33679_33688 = G__33706;
chunk__33680_33689 = G__33707;
count__33681_33690 = G__33708;
i__33682_33691 = G__33709;
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

cells.eval_context.t_cells$eval_context33667.prototype.cells$eval_context$IHandleError$ = cljs.core.PROTOCOL_SENTINEL;

cells.eval_context.t_cells$eval_context33667.prototype.cells$eval_context$IHandleError$handle_error$arity$2 = ((function (_context_state){
return (function (this$,e){
var self__ = this;
var this$__$1 = this;
throw e;
});})(_context_state))
;

cells.eval_context.t_cells$eval_context33667.getBasis = ((function (_context_state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-context-state","-context-state",-508732155,null),new cljs.core.Symbol(null,"meta33668","meta33668",-1458106311,null)], null);
});})(_context_state))
;

cells.eval_context.t_cells$eval_context33667.cljs$lang$type = true;

cells.eval_context.t_cells$eval_context33667.cljs$lang$ctorStr = "cells.eval-context/t_cells$eval_context33667";

cells.eval_context.t_cells$eval_context33667.cljs$lang$ctorPrWriter = ((function (_context_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cells.eval-context/t_cells$eval_context33667");
});})(_context_state))
;

/**
 * Positional factory function for cells.eval-context/t_cells$eval_context33667.
 */
cells.eval_context.__GT_t_cells$eval_context33667 = ((function (_context_state){
return (function cells$eval_context$new_context_$___GT_t_cells$eval_context33667(_context_state__$1,meta33668){
return (new cells.eval_context.t_cells$eval_context33667(_context_state__$1,meta33668));
});})(_context_state))
;

}

return (new cells.eval_context.t_cells$eval_context33667(_context_state,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=cells.eval_context.js.map
