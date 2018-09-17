goog.provide('re_view.core');
goog.require('cljs.core');
goog.require('re_db.d');
goog.require('re_db.patterns');
goog.require('re_view.render_loop');
goog.require('re_view.hiccup.core');
goog.require('goog.object');
goog.require('re_view.util');
goog.require('re_view.view_spec');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_view.core.schedule_BANG_ = re_view.render_loop.schedule_BANG_;
re_view.core.force_update = re_view.render_loop.force_update;
re_view.core.force_update_BANG_ = re_view.render_loop.force_update_BANG_;
re_view.core.flush_BANG_ = re_view.render_loop.flush_BANG_;
re_view.core._STAR_trigger_state_render_STAR_ = true;

/** @define {boolean} */
goog.define("re_view.core.INSTRUMENT_BANG_",false);
/**
 * Return DOM node for component
 */
re_view.core.dom_node = (function re_view$core$dom_node(component){
return module$node_modules$react_dom$index.findDOMNode(component);
});
/**
 * Returns true if component is still mounted to the DOM.
 *   This is necessary to avoid updating unmounted components.
 */
re_view.core.mounted_QMARK_ = (function re_view$core$mounted_QMARK_(component){
return !(goog.object.get(component,"unmounted") === true);
});
/**
 * Wraps :on-change handlers of text inputs to apply changes synchronously.
 */
re_view.core.wrap_props = (function re_view$core$wrap_props(props,tag){
var G__33655 = props;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(and__3938__auto__){
var fexpr__33658 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__33658.cljs$core$IFn$_invoke$arity$1 ? fexpr__33658.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33658.call(null,tag));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__33655,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__33655;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__33661 = (function (){var _STAR_pattern_log_STAR_33662 = re_db.patterns._STAR_pattern_log_STAR_;
re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

try{var map__33663 = (function (){var _STAR_db_log_STAR_33664 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR_33665 = re_db.core._STAR_prevent_notify_STAR_;
re_db.core._STAR_db_log_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);

re_db.core._STAR_prevent_notify_STAR_ = true;

try{var value__15667__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__15667__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR_33665;

re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR_33664;
}})();
var map__33663__$1 = ((((!((map__33663 == null)))?(((((map__33663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33663):map__33663);
var value__16429__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx_report__16430__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var patterns__16431__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__16430__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__16431__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__16429__auto__], null);
}finally {re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR_33662;
}})();
var map__33661__$1 = ((((!((map__33661 == null)))?(((((map__33661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33661):map__33661);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33661__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33661__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5457__auto___33683 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5457__auto___33683)){
var un_sub_33684 = temp__5457__auto___33683;
(un_sub_33684.cljs$core$IFn$_invoke$arity$0 ? un_sub_33684.cljs$core$IFn$_invoke$arity$0() : un_sub_33684.call(null));
} else {
}

var G__33673_33685 = this$;
var G__33674_33686 = "reactiveUnsubscribe";
var G__33675_33687 = ((cljs.core.empty_QMARK_(patterns))?null:(function (){var G__33677 = patterns;
var G__33678 = ((function (G__33677,G__33673_33685,G__33674_33686,re$view,map__33661,map__33661__$1,patterns,value,prev_patterns,this$){
return (function (){
return (re_view.core.force_update.cljs$core$IFn$_invoke$arity$1 ? re_view.core.force_update.cljs$core$IFn$_invoke$arity$1(this$) : re_view.core.force_update.call(null,this$));
});})(G__33677,G__33673_33685,G__33674_33686,re$view,map__33661,map__33661__$1,patterns,value,prev_patterns,this$))
;
return (re_db.d.listen.cljs$core$IFn$_invoke$arity$2 ? re_db.d.listen.cljs$core$IFn$_invoke$arity$2(G__33677,G__33678) : re_db.d.listen.call(null,G__33677,G__33678));
})());
goog.object.set(G__33673_33685,G__33674_33686,G__33675_33687);

cljs.core._vreset_BANG_(re$view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(re$view),new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888),patterns));
}

return value;
});
});
/**
 * Mapping of methods-map keys to React lifecycle keys.
 */
re_view.core.kmap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","will-receive-state","view/will-receive-state",22798499),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),new cljs.core.Keyword("view","render","view/render",-1412767573),new cljs.core.Keyword("view","will-update","view/will-update",323358447),new cljs.core.Keyword("view","did-catch","view/did-catch",2134788208),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),new cljs.core.Keyword("view","state","view/state",-1991815820),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),new cljs.core.Keyword("view","will-mount","view/will-mount",-435076322)],["componentWillReceiveState","shouldComponentUpdate","$initialState","componentWillReceiveProps","render","componentWillUpdate","componentDidCatch","componentDidUpdate","$state","constructor","componentDidMount","componentWillUnmount","componentWillMount"]);
/**
 * Compose fns to execute sequentially over the same arguments
 */
re_view.core.compseq = (function re_view$core$compseq(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33715 = arguments.length;
var i__4532__auto___33716 = (0);
while(true){
if((i__4532__auto___33716 < len__4531__auto___33715)){
args__4534__auto__.push((arguments[i__4532__auto___33716]));

var G__33717 = (i__4532__auto___33716 + (1));
i__4532__auto___33716 = G__33717;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_view.core.compseq.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_view.core.compseq.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__33718__delegate = function (args){
var seq__33710 = cljs.core.seq(fns);
var chunk__33711 = null;
var count__33712 = (0);
var i__33713 = (0);
while(true){
if((i__33713 < count__33712)){
var f = chunk__33711.cljs$core$IIndexed$_nth$arity$2(null,i__33713);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__33723 = seq__33710;
var G__33724 = chunk__33711;
var G__33725 = count__33712;
var G__33726 = (i__33713 + (1));
seq__33710 = G__33723;
chunk__33711 = G__33724;
count__33712 = G__33725;
i__33713 = G__33726;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33710);
if(temp__5457__auto__){
var seq__33710__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33710__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__33710__$1);
var G__33727 = cljs.core.chunk_rest(seq__33710__$1);
var G__33728 = c__4351__auto__;
var G__33729 = cljs.core.count(c__4351__auto__);
var G__33730 = (0);
seq__33710 = G__33727;
chunk__33711 = G__33728;
count__33712 = G__33729;
i__33713 = G__33730;
continue;
} else {
var f = cljs.core.first(seq__33710__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__33731 = cljs.core.next(seq__33710__$1);
var G__33732 = null;
var G__33733 = (0);
var G__33734 = (0);
seq__33710 = G__33731;
chunk__33711 = G__33732;
count__33712 = G__33733;
i__33713 = G__33734;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__33718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33735__i = 0, G__33735__a = new Array(arguments.length -  0);
while (G__33735__i < G__33735__a.length) {G__33735__a[G__33735__i] = arguments[G__33735__i + 0]; ++G__33735__i;}
  args = new cljs.core.IndexedSeq(G__33735__a,0,null);
} 
return G__33718__delegate.call(this,args);};
G__33718.cljs$lang$maxFixedArity = 0;
G__33718.cljs$lang$applyTo = (function (arglist__33736){
var args = cljs.core.seq(arglist__33736);
return G__33718__delegate(args);
});
G__33718.cljs$core$IFn$_invoke$arity$variadic = G__33718__delegate;
return G__33718;
})()
;
});

re_view.core.compseq.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.core.compseq.cljs$lang$applyTo = (function (seq33699){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33699));
});

/**
 * Merge a list of method maps. Multiple lifecycle methods execute sequentially. Only the last-defined :should-update function is applied.
 */
re_view.core.collect = (function re_view$core$collect(methods$){
var methods$__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (a,b){
if(cljs.core.vector_QMARK_(a)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}),methods$);
return cljs.core.reduce_kv(((function (methods$__$1){
return (function (m,method_k,fns){
var G__33737 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33737,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__33737;
}
});})(methods$__$1))
,methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__33739 = cljs.core.deref(re$view);
var map__33739__$1 = ((((!((map__33739 == null)))?(((((map__33739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33739):map__33739);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__33748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33748,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__33748;
}
})());
});
/**
 * Wrap a component's methods, binding arguments and specifying lifecycle update behaviour.
 */
re_view.core.wrap_methods = (function re_view$core$wrap_methods(method_k,f){
if(!(cljs.core.fn_QMARK_(f))){
return f;
} else {
var G__33749 = method_k;
var G__33749__$1 = (((G__33749 instanceof cljs.core.Keyword))?G__33749.fqn:null);
switch (G__33749__$1) {
case "view/initial-state":
case "view/state":
case "key":
case "constructor":
return f;

break;
case "view/render":
return re_view.core.reactive_render(f);

break;
case "view/will-receive-props":
return ((function (G__33749,G__33749__$1){
return (function (props){
var _STAR_trigger_state_render_STAR_33753 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_33753;
}});
;})(G__33749,G__33749__$1))

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return ((function (G__33749,G__33749__$1){
return (function (){
var _STAR_trigger_state_render_STAR_33757 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_33757;
}});
;})(G__33749,G__33749__$1))

break;
case "view/did-mount":
case "view/did-update":
return ((function (G__33749,G__33749__$1){
return (function (){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
});
;})(G__33749,G__33749__$1))

break;
default:
return ((function (G__33749,G__33749__$1){
return (function() { 
var G__33773__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__33773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33776__i = 0, G__33776__a = new Array(arguments.length -  0);
while (G__33776__i < G__33776__a.length) {G__33776__a[G__33776__i] = arguments[G__33776__i + 0]; ++G__33776__i;}
  args = new cljs.core.IndexedSeq(G__33776__a,0,null);
} 
return G__33773__delegate.call(this,args);};
G__33773.cljs$lang$maxFixedArity = 0;
G__33773.cljs$lang$applyTo = (function (arglist__33779){
var args = cljs.core.seq(arglist__33779);
return G__33773__delegate(args);
});
G__33773.cljs$core$IFn$_invoke$arity$variadic = G__33773__delegate;
return G__33773;
})()
;
;})(G__33749,G__33749__$1))

}
}
});
/**
 * Bind a component to update whenever `state` changes.
 *   `state` can be any type which implements IWatchable and IDeref.
 */
re_view.core.init_state_BANG_ = (function re_view$core$init_state_BANG_(component,state){
cljs.core._vreset_BANG_(goog.object.get(component,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(component,"re$view")),new cljs.core.Keyword("view","state","view/state",-1991815820),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state)], 0)));

cljs.core.add_watch(state,component,(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
cljs.core._vreset_BANG_(goog.object.get(component,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(goog.object.get(component,"re$view")),new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),old_state));

var temp__5457__auto___33783 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5457__auto___33783)){
var will_receive_33785 = temp__5457__auto___33783;
will_receive_33785.call(component);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = re_view.core._STAR_trigger_state_render_STAR_;
if(and__3938__auto__){
var temp__5455__auto__ = goog.object.get(component,"shouldComponentUpdate");
if(cljs.core.truth_(temp__5455__auto__)){
var should_update = temp__5455__auto__;
return should_update.call(component);
} else {
return true;
}
} else {
return and__3938__auto__;
}
})())){
return (re_view.core.force_update.cljs$core$IFn$_invoke$arity$1 ? re_view.core.force_update.cljs$core$IFn$_invoke$arity$1(component) : re_view.core.force_update.call(null,component));
} else {
return null;
}
} else {
return null;
}
}));

return state;
});
/**
 * Lazily create and bind a state atom for `component`
 */
re_view.core.ensure_state_BANG_ = (function re_view$core$ensure_state_BANG_(component){
if(cljs.core.contains_QMARK_(cljs.core.deref((component["re$view"])),new cljs.core.Keyword("view","state","view/state",-1991815820))){
return null;
} else {
return re_view.core.init_state_BANG_(component,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
module$node_modules$react$index.Component.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

module$node_modules$react$index.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__33804 = cljs.core.namespace(k);
var fexpr__33803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__33803.cljs$core$IFn$_invoke$arity$1 ? fexpr__33803.cljs$core$IFn$_invoke$arity$1(G__33804) : fexpr__33803.call(null,G__33804));
})())){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword("view","state","view/state",-1991815820))){
re_view.core.ensure_state_BANG_(this$__$1);
} else {
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),k);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","props","view/props",449562012),k], null));
}
});

module$node_modules$react$index.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__33807 = cljs.core.namespace(k);
var fexpr__33806 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__33806.cljs$core$IFn$_invoke$arity$1 ? fexpr__33806.cljs$core$IFn$_invoke$arity$1(G__33807) : fexpr__33806.call(null,G__33807));
})())){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword("view","state","view/state",-1991815820))){
re_view.core.ensure_state_BANG_(this$__$1);
} else {
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),k);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(goog.object.get(this$__$1,"re$view")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","props","view/props",449562012),k], null),not_found);
}
});
/**
 * Augment lifecycle methods with default behaviour.
 */
re_view.core.lifecycle_methods = (function re_view$core$lifecycle_methods(methods$){
return cljs.core.reduce_kv((function (obj,method_k,method){
var G__33814 = obj;
var G__33815_33835 = G__33814;
var G__33816_33836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k);
var G__33817_33837 = re_view.core.wrap_methods(method_k,method);
goog.object.set(G__33815_33835,G__33816_33836,G__33817_33837);

return G__33814;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__33822 = this$;
var map__33822__$1 = ((((!((map__33822 == null)))?(((((map__33822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33822):map__33822);
var this$__$1 = map__33822__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33822__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33822__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__33824){
var map__33825 = p__33824;
var map__33825__$1 = ((((!((map__33825 == null)))?(((((map__33825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33825):map__33825);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33825__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
var or__3949__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(props,prev_props);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(children,prev_children);
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
if((state == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),prev_state);
}
}
}
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__33828){
var map__33829 = p__33828;
var map__33829__$1 = ((((!((map__33829 == null)))?(((((map__33829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33829):map__33829);
var this$ = map__33829__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33829__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5457__auto___33838 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5457__auto___33838)){
var un_sub_33839 = temp__5457__auto___33838;
(un_sub_33839.cljs$core$IFn$_invoke$arity$0 ? un_sub_33839.cljs$core$IFn$_invoke$arity$0() : un_sub_33839.call(null));
} else {
}

var G__33831 = state;
if((G__33831 == null)){
return null;
} else {
return cljs.core.remove_watch(G__33831,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33842 = arguments.length;
var i__4532__auto___33843 = (0);
while(true){
if((i__4532__auto___33843 < len__4531__auto___33842)){
args__4534__auto__.push((arguments[i__4532__auto___33843]));

var G__33844 = (i__4532__auto___33843 + (1));
i__4532__auto___33843 = G__33844;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR_33841 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_33841;
}});

re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq33840){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33840));
});

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_33868 = goog.object.get($props,"props");
var children_33869 = goog.object.get($props,"children");
var G__33846_33870 = component;
var G__33847_33871 = "re$view";
var G__33848_33872 = cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_33868,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_33869], 0)));
goog.object.set(G__33846_33870,G__33847_33871,G__33848_33872);

var temp__5457__auto___33873 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5457__auto___33873)){
var instance_keys_33874 = temp__5457__auto___33873;
var seq__33849_33875 = cljs.core.seq(goog.object.getKeys(instance_keys_33874));
var chunk__33850_33876 = null;
var count__33851_33877 = (0);
var i__33852_33878 = (0);
while(true){
if((i__33852_33878 < count__33851_33877)){
var k_33880 = chunk__33850_33876.cljs$core$IIndexed$_nth$arity$2(null,i__33852_33878);
var f_33881 = goog.object.get(instance_keys_33874,k_33880);
var G__33853_33882 = component;
var G__33854_33883 = k_33880;
var G__33855_33884 = ((cljs.core.fn_QMARK_(f_33881))?((function (seq__33849_33875,chunk__33850_33876,count__33851_33877,i__33852_33878,G__33853_33882,G__33854_33883,f_33881,k_33880,instance_keys_33874,temp__5457__auto___33873,props_33868,children_33869){
return (function() { 
var G__33885__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33881,component,args);
};
var G__33885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33886__i = 0, G__33886__a = new Array(arguments.length -  0);
while (G__33886__i < G__33886__a.length) {G__33886__a[G__33886__i] = arguments[G__33886__i + 0]; ++G__33886__i;}
  args = new cljs.core.IndexedSeq(G__33886__a,0,null);
} 
return G__33885__delegate.call(this,args);};
G__33885.cljs$lang$maxFixedArity = 0;
G__33885.cljs$lang$applyTo = (function (arglist__33887){
var args = cljs.core.seq(arglist__33887);
return G__33885__delegate(args);
});
G__33885.cljs$core$IFn$_invoke$arity$variadic = G__33885__delegate;
return G__33885;
})()
;})(seq__33849_33875,chunk__33850_33876,count__33851_33877,i__33852_33878,G__33853_33882,G__33854_33883,f_33881,k_33880,instance_keys_33874,temp__5457__auto___33873,props_33868,children_33869))
:f_33881);
goog.object.set(G__33853_33882,G__33854_33883,G__33855_33884);


var G__33888 = seq__33849_33875;
var G__33889 = chunk__33850_33876;
var G__33890 = count__33851_33877;
var G__33891 = (i__33852_33878 + (1));
seq__33849_33875 = G__33888;
chunk__33850_33876 = G__33889;
count__33851_33877 = G__33890;
i__33852_33878 = G__33891;
continue;
} else {
var temp__5457__auto___33893__$1 = cljs.core.seq(seq__33849_33875);
if(temp__5457__auto___33893__$1){
var seq__33849_33894__$1 = temp__5457__auto___33893__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33849_33894__$1)){
var c__4351__auto___33895 = cljs.core.chunk_first(seq__33849_33894__$1);
var G__33896 = cljs.core.chunk_rest(seq__33849_33894__$1);
var G__33897 = c__4351__auto___33895;
var G__33898 = cljs.core.count(c__4351__auto___33895);
var G__33899 = (0);
seq__33849_33875 = G__33896;
chunk__33850_33876 = G__33897;
count__33851_33877 = G__33898;
i__33852_33878 = G__33899;
continue;
} else {
var k_33900 = cljs.core.first(seq__33849_33894__$1);
var f_33901 = goog.object.get(instance_keys_33874,k_33900);
var G__33856_33902 = component;
var G__33857_33903 = k_33900;
var G__33858_33904 = ((cljs.core.fn_QMARK_(f_33901))?((function (seq__33849_33875,chunk__33850_33876,count__33851_33877,i__33852_33878,G__33856_33902,G__33857_33903,f_33901,k_33900,seq__33849_33894__$1,temp__5457__auto___33893__$1,instance_keys_33874,temp__5457__auto___33873,props_33868,children_33869){
return (function() { 
var G__33905__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_33901,component,args);
};
var G__33905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33907__i = 0, G__33907__a = new Array(arguments.length -  0);
while (G__33907__i < G__33907__a.length) {G__33907__a[G__33907__i] = arguments[G__33907__i + 0]; ++G__33907__i;}
  args = new cljs.core.IndexedSeq(G__33907__a,0,null);
} 
return G__33905__delegate.call(this,args);};
G__33905.cljs$lang$maxFixedArity = 0;
G__33905.cljs$lang$applyTo = (function (arglist__33909){
var args = cljs.core.seq(arglist__33909);
return G__33905__delegate(args);
});
G__33905.cljs$core$IFn$_invoke$arity$variadic = G__33905__delegate;
return G__33905;
})()
;})(seq__33849_33875,chunk__33850_33876,count__33851_33877,i__33852_33878,G__33856_33902,G__33857_33903,f_33901,k_33900,seq__33849_33894__$1,temp__5457__auto___33893__$1,instance_keys_33874,temp__5457__auto___33873,props_33868,children_33869))
:f_33901);
goog.object.set(G__33856_33902,G__33857_33903,G__33858_33904);


var G__33911 = cljs.core.next(seq__33849_33894__$1);
var G__33912 = null;
var G__33913 = (0);
var G__33914 = (0);
seq__33849_33875 = G__33911;
chunk__33850_33876 = G__33912;
count__33851_33877 = G__33913;
i__33852_33878 = G__33914;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5457__auto___33915 = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_33868,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var temp__5457__auto__ = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5457__auto__)){
var initial_state = temp__5457__auto__;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__33862 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__33862,component,children_33869);
} else {
return G__33862;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var temp__5457__auto__ = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5457__auto__)){
var watchable_state = temp__5457__auto__;
var G__33863 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__33863,component,children_33869);
} else {
return G__33863;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5457__auto___33915)){
var state_33917 = temp__5457__auto___33915;
re_view.core.init_state_BANG_(component,state_33917);
} else {
}
} else {
var G__33864_33918 = component;
var G__33865_33919 = "re$view";
var G__33866_33920 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
goog.object.set(G__33864_33918,G__33865_33919,G__33866_33920);
}

return component;
});
/**
 * Return a function which returns a React element when called with props and children.
 */
re_view.core.factory = (function re_view$core$factory(constructor$){
var map__33922 = goog.object.get(constructor$,"re$view$base");
var map__33922__$1 = ((((!((map__33922 == null)))?(((((map__33922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33922):map__33922);
var re$view$base = map__33922__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33922__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33922__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__33923 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__33923__$1 = ((((!((map__33923 == null)))?(((((map__33923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33923):map__33923);
var class_keys__$1 = map__33923__$1;
var map__33924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__33924__$1 = ((((!((map__33924 == null)))?(((((map__33924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33924):map__33924);
var prop_spec = map__33924__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33924__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33923__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__33928 = ((function (map__33922,map__33922__$1,re$view$base,class_keys,instance_keys,map__33923,map__33923__$1,class_keys__$1,map__33924,map__33924__$1,prop_spec,defaults,children_spec,class_react_key,display_name){
return (function() { 
var G__33952__delegate = function (props,children){
var vec__33929 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929,(1),null);
var props__$2 = (function (){var G__33932 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__33932], 0));
} else {
return G__33932;
}
})();
var key = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (cljs.core.truth_(class_react_key)?((typeof class_react_key === 'string')?class_react_key:(((class_react_key instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,class_react_key):((cljs.core.fn_QMARK_(class_react_key))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(class_react_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword("view","children","view/children",-946116505),children__$1),children__$1):(function(){throw Error("Invalid key supplied to component")})()
))):null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return display_name;
}
}
})();
if(re_view.core.INSTRUMENT_BANG_ === true){
re_view.view_spec.validate_props(display_name,prop_spec,props__$2);

re_view.view_spec.validate_children(display_name,children_spec,children__$1);
} else {
}

var G__33941 = constructor$;
var G__33942 = ({"key": key, "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "children": children__$1, "instance": instance_keys, "class": class_keys__$1});
return module$node_modules$react$index.createElement(G__33941,G__33942);
};
var G__33952 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__33958__i = 0, G__33958__a = new Array(arguments.length -  1);
while (G__33958__i < G__33958__a.length) {G__33958__a[G__33958__i] = arguments[G__33958__i + 1]; ++G__33958__i;}
  children = new cljs.core.IndexedSeq(G__33958__a,0,null);
} 
return G__33952__delegate.call(this,props,children);};
G__33952.cljs$lang$maxFixedArity = 1;
G__33952.cljs$lang$applyTo = (function (arglist__33959){
var props = cljs.core.first(arglist__33959);
var children = cljs.core.rest(arglist__33959);
return G__33952__delegate(props,children);
});
G__33952.cljs$core$IFn$_invoke$arity$variadic = G__33952__delegate;
return G__33952;
})()
;})(map__33922,map__33922__$1,re$view$base,class_keys,instance_keys,map__33923,map__33923__$1,class_keys__$1,map__33924,map__33924__$1,prop_spec,defaults,children_spec,class_react_key,display_name))
;
goog.object.set(G__33928,"re$view$base",re$view$base);

return G__33928;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__33960){
var map__33961 = p__33960;
var map__33961__$1 = ((((!((map__33961 == null)))?(((((map__33961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33961):map__33961);
var re_view_base = map__33961__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = (function (){var G__33963 = prototype;
var G__33964 = re_view.core.lifecycle_methods(lifecycle_keys);
return goog.object.extend(G__33963,G__33964);
})();
var constructor$ = ((function (prototype,_,map__33961,map__33961__$1,re_view_base,lifecycle_keys,react_keys){
return (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});})(prototype,_,map__33961,map__33961__$1,re_view_base,lifecycle_keys,react_keys))
;
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__33965_33994 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__33966_33995 = null;
var count__33967_33996 = (0);
var i__33968_33997 = (0);
while(true){
if((i__33968_33997 < count__33967_33996)){
var vec__33969_33998 = chunk__33966_33995.cljs$core$IIndexed$_nth$arity$2(null,i__33968_33997);
var k_33999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969_33998,(0),null);
var v_34000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969_33998,(1),null);
var G__33972_34005 = constructor$;
var G__33973_34006 = (re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1 ? re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1(k_33999) : re_view.util.camelCase.call(null,k_33999));
var G__33974_34007 = v_34000;
goog.object.set(G__33972_34005,G__33973_34006,G__33974_34007);


var G__34009 = seq__33965_33994;
var G__34010 = chunk__33966_33995;
var G__34011 = count__33967_33996;
var G__34012 = (i__33968_33997 + (1));
seq__33965_33994 = G__34009;
chunk__33966_33995 = G__34010;
count__33967_33996 = G__34011;
i__33968_33997 = G__34012;
continue;
} else {
var temp__5457__auto___34013 = cljs.core.seq(seq__33965_33994);
if(temp__5457__auto___34013){
var seq__33965_34014__$1 = temp__5457__auto___34013;
if(cljs.core.chunked_seq_QMARK_(seq__33965_34014__$1)){
var c__4351__auto___34016 = cljs.core.chunk_first(seq__33965_34014__$1);
var G__34017 = cljs.core.chunk_rest(seq__33965_34014__$1);
var G__34018 = c__4351__auto___34016;
var G__34019 = cljs.core.count(c__4351__auto___34016);
var G__34020 = (0);
seq__33965_33994 = G__34017;
chunk__33966_33995 = G__34018;
count__33967_33996 = G__34019;
i__33968_33997 = G__34020;
continue;
} else {
var vec__33975_34021 = cljs.core.first(seq__33965_34014__$1);
var k_34022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975_34021,(0),null);
var v_34023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975_34021,(1),null);
var G__33980_34027 = constructor$;
var G__33981_34028 = (re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1 ? re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1(k_34022) : re_view.util.camelCase.call(null,k_34022));
var G__33982_34029 = v_34023;
goog.object.set(G__33980_34027,G__33981_34028,G__33982_34029);


var G__34031 = cljs.core.next(seq__33965_34014__$1);
var G__34032 = null;
var G__34033 = (0);
var G__34034 = (0);
seq__33965_33994 = G__34031;
chunk__33966_33995 = G__34032;
count__33967_33996 = G__34033;
i__33968_33997 = G__34034;
continue;
}
} else {
}
}
break;
}

var G__33983 = constructor$;
var G__33984_34038 = G__33983;
var G__33985_34039 = "re$view$base";
var G__33986_34040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype);
goog.object.set(G__33984_34038,G__33985_34039,G__33986_34040);

return G__33983;
});
goog.exportSymbol('re_view.core.class_STAR_', re_view.core.class_STAR_);
/**
 * Returns a React component factory for supplied lifecycle methods.
 * Expects a single map of functions, or any number of key-function pairs,
 * 
 * (component {:render (fn [this] [:div ...])})
 * 
 * -or-
 * 
 * (component
 * 
 *   :get-initial-state
 *   (fn [this] {:apple-state :ripe})
 * 
 *   :render
 *   (fn [this] [:div ...]))
 * 
 * See other functions in this namespace for how to work with props and state.
 * Result of :render function is automatically passed through hiccup/element,
 * unless it is already a valid React element.
 * 
 */
re_view.core.view_STAR_ = (function re_view$core$view_STAR_(re_view_base){
return re_view.core.factory(re_view.core.class_STAR_(re_view_base));
});
goog.exportSymbol('re_view.core.view_STAR_', re_view.core.view_STAR_);
re_view.core.prototype = (function re_view$core$prototype(class$){
return new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(goog.object.get(class$,"re$view$base"));
});
/**
 * Render view to element, which should be a DOM element or id of element on page.
 */
re_view.core.render_to_dom = (function re_view$core$render_to_dom(component,element){
var G__34041 = component;
var G__34042 = (function (){var G__34043 = element;
if(typeof element === 'string'){
return document.getElementById(G__34043);
} else {
return G__34043;
}
})();
return module$node_modules$react_dom$index.render(G__34041,G__34042);
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__34049 = arguments.length;
switch (G__34049) {
case 2:
return re_view.core.partial.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_view.core.partial.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_view.core.partial.cljs$core$IFn$_invoke$arity$2 = (function (base,props){
var G__34051 = (function() { 
var G__34062__delegate = function (args){
var vec__34052 = (function (){var G__34055 = args;
if(!(cljs.core.map_QMARK_(cljs.core.first(args)))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__34055);
} else {
return G__34055;
}
})();
var seq__34053 = cljs.core.seq(vec__34052);
var first__34054 = cljs.core.first(seq__34053);
var seq__34053__$1 = cljs.core.next(seq__34053);
var user_props = first__34054;
var children = seq__34053__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__34062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34063__i = 0, G__34063__a = new Array(arguments.length -  0);
while (G__34063__i < G__34063__a.length) {G__34063__a[G__34063__i] = arguments[G__34063__i + 0]; ++G__34063__i;}
  args = new cljs.core.IndexedSeq(G__34063__a,0,null);
} 
return G__34062__delegate.call(this,args);};
G__34062.cljs$lang$maxFixedArity = 0;
G__34062.cljs$lang$applyTo = (function (arglist__34064){
var args = cljs.core.seq(arglist__34064);
return G__34062__delegate(args);
});
G__34062.cljs$core$IFn$_invoke$arity$variadic = G__34062__delegate;
return G__34062;
})()
;
var G__34056_34065 = G__34051;
var G__34057_34066 = "re$view$base";
var G__34058_34067 = goog.object.get(base,"re$view$base");
goog.object.set(G__34056_34065,G__34057_34066,G__34058_34067);

return G__34051;
});

re_view.core.partial.cljs$core$IFn$_invoke$arity$3 = (function (base,base_overrides,props){
return re_view.core.partial.cljs$core$IFn$_invoke$arity$2(re_view.core.view_STAR_(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(base,"re$view$base"),base_overrides], 0))),props);
});

re_view.core.partial.cljs$lang$maxFixedArity = 3;

/**
 * Remove prop keys handled by component, useful for passing down unhandled props to a child component.
 *   By default, removes all keys listed in the component's :spec/props map. Set `:consume false` for props
 *   that should be passed through.
 */
re_view.core.pass_props = (function re_view$core$pass_props(this$){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("view","props","view/props",449562012)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","props","spec/props",450064562),new cljs.core.Keyword("props","consumed","props/consumed",174753542)], null)));
});
re_view.core.is_react_element_QMARK_ = re_view.util.is_react_element_QMARK_;

//# sourceMappingURL=re_view.core.js.map
