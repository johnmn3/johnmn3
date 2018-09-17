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
var G__16648 = props;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(and__3938__auto__){
var fexpr__16650 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__16650.cljs$core$IFn$_invoke$arity$1 ? fexpr__16650.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16650.call(null,tag));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__16648,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__16648;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__16656 = (function (){var _STAR_pattern_log_STAR_16657 = re_db.patterns._STAR_pattern_log_STAR_;
re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

try{var map__16658 = (function (){var _STAR_db_log_STAR_16659 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR_16660 = re_db.core._STAR_prevent_notify_STAR_;
re_db.core._STAR_db_log_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);

re_db.core._STAR_prevent_notify_STAR_ = true;

try{var value__15667__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__15667__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR_16660;

re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR_16659;
}})();
var map__16658__$1 = ((((!((map__16658 == null)))?(((((map__16658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16658):map__16658);
var value__16429__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx_report__16430__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var patterns__16431__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__16430__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__16431__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__16429__auto__], null);
}finally {re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR_16657;
}})();
var map__16656__$1 = ((((!((map__16656 == null)))?(((((map__16656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16656):map__16656);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5457__auto___16675 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5457__auto___16675)){
var un_sub_16676 = temp__5457__auto___16675;
(un_sub_16676.cljs$core$IFn$_invoke$arity$0 ? un_sub_16676.cljs$core$IFn$_invoke$arity$0() : un_sub_16676.call(null));
} else {
}

var G__16665_16679 = this$;
var G__16666_16680 = "reactiveUnsubscribe";
var G__16667_16681 = ((cljs.core.empty_QMARK_(patterns))?null:(function (){var G__16668 = patterns;
var G__16669 = ((function (G__16668,G__16665_16679,G__16666_16680,re$view,map__16656,map__16656__$1,patterns,value,prev_patterns,this$){
return (function (){
return (re_view.core.force_update.cljs$core$IFn$_invoke$arity$1 ? re_view.core.force_update.cljs$core$IFn$_invoke$arity$1(this$) : re_view.core.force_update.call(null,this$));
});})(G__16668,G__16665_16679,G__16666_16680,re$view,map__16656,map__16656__$1,patterns,value,prev_patterns,this$))
;
return (re_db.d.listen.cljs$core$IFn$_invoke$arity$2 ? re_db.d.listen.cljs$core$IFn$_invoke$arity$2(G__16668,G__16669) : re_db.d.listen.call(null,G__16668,G__16669));
})());
goog.object.set(G__16665_16679,G__16666_16680,G__16667_16681);

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
var len__4531__auto___16697 = arguments.length;
var i__4532__auto___16698 = (0);
while(true){
if((i__4532__auto___16698 < len__4531__auto___16697)){
args__4534__auto__.push((arguments[i__4532__auto___16698]));

var G__16699 = (i__4532__auto___16698 + (1));
i__4532__auto___16698 = G__16699;
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
var G__16700__delegate = function (args){
var seq__16691 = cljs.core.seq(fns);
var chunk__16692 = null;
var count__16693 = (0);
var i__16694 = (0);
while(true){
if((i__16694 < count__16693)){
var f = chunk__16692.cljs$core$IIndexed$_nth$arity$2(null,i__16694);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__16702 = seq__16691;
var G__16703 = chunk__16692;
var G__16704 = count__16693;
var G__16705 = (i__16694 + (1));
seq__16691 = G__16702;
chunk__16692 = G__16703;
count__16693 = G__16704;
i__16694 = G__16705;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16691);
if(temp__5457__auto__){
var seq__16691__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16691__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__16691__$1);
var G__16706 = cljs.core.chunk_rest(seq__16691__$1);
var G__16707 = c__4351__auto__;
var G__16708 = cljs.core.count(c__4351__auto__);
var G__16709 = (0);
seq__16691 = G__16706;
chunk__16692 = G__16707;
count__16693 = G__16708;
i__16694 = G__16709;
continue;
} else {
var f = cljs.core.first(seq__16691__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__16710 = cljs.core.next(seq__16691__$1);
var G__16711 = null;
var G__16712 = (0);
var G__16713 = (0);
seq__16691 = G__16710;
chunk__16692 = G__16711;
count__16693 = G__16712;
i__16694 = G__16713;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__16700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16714__i = 0, G__16714__a = new Array(arguments.length -  0);
while (G__16714__i < G__16714__a.length) {G__16714__a[G__16714__i] = arguments[G__16714__i + 0]; ++G__16714__i;}
  args = new cljs.core.IndexedSeq(G__16714__a,0,null);
} 
return G__16700__delegate.call(this,args);};
G__16700.cljs$lang$maxFixedArity = 0;
G__16700.cljs$lang$applyTo = (function (arglist__16715){
var args = cljs.core.seq(arglist__16715);
return G__16700__delegate(args);
});
G__16700.cljs$core$IFn$_invoke$arity$variadic = G__16700__delegate;
return G__16700;
})()
;
});

re_view.core.compseq.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.core.compseq.cljs$lang$applyTo = (function (seq16687){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16687));
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
var G__16716 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16716,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__16716;
}
});})(methods$__$1))
,methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__16717 = cljs.core.deref(re$view);
var map__16717__$1 = ((((!((map__16717 == null)))?(((((map__16717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16717):map__16717);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16717__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16717__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16717__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__16719 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16719,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__16719;
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
var G__16720 = method_k;
var G__16720__$1 = (((G__16720 instanceof cljs.core.Keyword))?G__16720.fqn:null);
switch (G__16720__$1) {
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
return ((function (G__16720,G__16720__$1){
return (function (props){
var _STAR_trigger_state_render_STAR_16721 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_16721;
}});
;})(G__16720,G__16720__$1))

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return ((function (G__16720,G__16720__$1){
return (function (){
var _STAR_trigger_state_render_STAR_16722 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_16722;
}});
;})(G__16720,G__16720__$1))

break;
case "view/did-mount":
case "view/did-update":
return ((function (G__16720,G__16720__$1){
return (function (){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
});
;})(G__16720,G__16720__$1))

break;
default:
return ((function (G__16720,G__16720__$1){
return (function() { 
var G__16728__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__16728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16729__i = 0, G__16729__a = new Array(arguments.length -  0);
while (G__16729__i < G__16729__a.length) {G__16729__a[G__16729__i] = arguments[G__16729__i + 0]; ++G__16729__i;}
  args = new cljs.core.IndexedSeq(G__16729__a,0,null);
} 
return G__16728__delegate.call(this,args);};
G__16728.cljs$lang$maxFixedArity = 0;
G__16728.cljs$lang$applyTo = (function (arglist__16730){
var args = cljs.core.seq(arglist__16730);
return G__16728__delegate(args);
});
G__16728.cljs$core$IFn$_invoke$arity$variadic = G__16728__delegate;
return G__16728;
})()
;
;})(G__16720,G__16720__$1))

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

var temp__5457__auto___16735 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5457__auto___16735)){
var will_receive_16736 = temp__5457__auto___16735;
will_receive_16736.call(component);
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
if(cljs.core.truth_((function (){var G__16738 = cljs.core.namespace(k);
var fexpr__16737 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__16737.cljs$core$IFn$_invoke$arity$1 ? fexpr__16737.cljs$core$IFn$_invoke$arity$1(G__16738) : fexpr__16737.call(null,G__16738));
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
if(cljs.core.truth_((function (){var G__16740 = cljs.core.namespace(k);
var fexpr__16739 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__16739.cljs$core$IFn$_invoke$arity$1 ? fexpr__16739.cljs$core$IFn$_invoke$arity$1(G__16740) : fexpr__16739.call(null,G__16740));
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
var G__16742 = obj;
var G__16743_16757 = G__16742;
var G__16744_16758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k);
var G__16745_16759 = re_view.core.wrap_methods(method_k,method);
goog.object.set(G__16743_16757,G__16744_16758,G__16745_16759);

return G__16742;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__16746 = this$;
var map__16746__$1 = ((((!((map__16746 == null)))?(((((map__16746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16746):map__16746);
var this$__$1 = map__16746__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16746__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16746__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__16748){
var map__16749 = p__16748;
var map__16749__$1 = ((((!((map__16749 == null)))?(((((map__16749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16749):map__16749);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__16752){
var map__16753 = p__16752;
var map__16753__$1 = ((((!((map__16753 == null)))?(((((map__16753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16753):map__16753);
var this$ = map__16753__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16753__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5457__auto___16775 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5457__auto___16775)){
var un_sub_16776 = temp__5457__auto___16775;
(un_sub_16776.cljs$core$IFn$_invoke$arity$0 ? un_sub_16776.cljs$core$IFn$_invoke$arity$0() : un_sub_16776.call(null));
} else {
}

var G__16755 = state;
if((G__16755 == null)){
return null;
} else {
return cljs.core.remove_watch(G__16755,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16785 = arguments.length;
var i__4532__auto___16786 = (0);
while(true){
if((i__4532__auto___16786 < len__4531__auto___16785)){
args__4534__auto__.push((arguments[i__4532__auto___16786]));

var G__16787 = (i__4532__auto___16786 + (1));
i__4532__auto___16786 = G__16787;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR_16784 = re_view.core._STAR_trigger_state_render_STAR_;
re_view.core._STAR_trigger_state_render_STAR_ = false;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR_16784;
}});

re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq16780){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16780));
});

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_16812 = goog.object.get($props,"props");
var children_16813 = goog.object.get($props,"children");
var G__16791_16814 = component;
var G__16792_16815 = "re$view";
var G__16793_16816 = cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_16812,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_16813], 0)));
goog.object.set(G__16791_16814,G__16792_16815,G__16793_16816);

var temp__5457__auto___16818 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5457__auto___16818)){
var instance_keys_16819 = temp__5457__auto___16818;
var seq__16794_16820 = cljs.core.seq(goog.object.getKeys(instance_keys_16819));
var chunk__16795_16821 = null;
var count__16796_16822 = (0);
var i__16797_16823 = (0);
while(true){
if((i__16797_16823 < count__16796_16822)){
var k_16824 = chunk__16795_16821.cljs$core$IIndexed$_nth$arity$2(null,i__16797_16823);
var f_16825 = goog.object.get(instance_keys_16819,k_16824);
var G__16798_16826 = component;
var G__16799_16827 = k_16824;
var G__16800_16828 = ((cljs.core.fn_QMARK_(f_16825))?((function (seq__16794_16820,chunk__16795_16821,count__16796_16822,i__16797_16823,G__16798_16826,G__16799_16827,f_16825,k_16824,instance_keys_16819,temp__5457__auto___16818,props_16812,children_16813){
return (function() { 
var G__16829__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_16825,component,args);
};
var G__16829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16830__i = 0, G__16830__a = new Array(arguments.length -  0);
while (G__16830__i < G__16830__a.length) {G__16830__a[G__16830__i] = arguments[G__16830__i + 0]; ++G__16830__i;}
  args = new cljs.core.IndexedSeq(G__16830__a,0,null);
} 
return G__16829__delegate.call(this,args);};
G__16829.cljs$lang$maxFixedArity = 0;
G__16829.cljs$lang$applyTo = (function (arglist__16831){
var args = cljs.core.seq(arglist__16831);
return G__16829__delegate(args);
});
G__16829.cljs$core$IFn$_invoke$arity$variadic = G__16829__delegate;
return G__16829;
})()
;})(seq__16794_16820,chunk__16795_16821,count__16796_16822,i__16797_16823,G__16798_16826,G__16799_16827,f_16825,k_16824,instance_keys_16819,temp__5457__auto___16818,props_16812,children_16813))
:f_16825);
goog.object.set(G__16798_16826,G__16799_16827,G__16800_16828);


var G__16832 = seq__16794_16820;
var G__16833 = chunk__16795_16821;
var G__16834 = count__16796_16822;
var G__16835 = (i__16797_16823 + (1));
seq__16794_16820 = G__16832;
chunk__16795_16821 = G__16833;
count__16796_16822 = G__16834;
i__16797_16823 = G__16835;
continue;
} else {
var temp__5457__auto___16836__$1 = cljs.core.seq(seq__16794_16820);
if(temp__5457__auto___16836__$1){
var seq__16794_16837__$1 = temp__5457__auto___16836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16794_16837__$1)){
var c__4351__auto___16838 = cljs.core.chunk_first(seq__16794_16837__$1);
var G__16839 = cljs.core.chunk_rest(seq__16794_16837__$1);
var G__16840 = c__4351__auto___16838;
var G__16841 = cljs.core.count(c__4351__auto___16838);
var G__16842 = (0);
seq__16794_16820 = G__16839;
chunk__16795_16821 = G__16840;
count__16796_16822 = G__16841;
i__16797_16823 = G__16842;
continue;
} else {
var k_16843 = cljs.core.first(seq__16794_16837__$1);
var f_16844 = goog.object.get(instance_keys_16819,k_16843);
var G__16803_16845 = component;
var G__16804_16846 = k_16843;
var G__16805_16847 = ((cljs.core.fn_QMARK_(f_16844))?((function (seq__16794_16820,chunk__16795_16821,count__16796_16822,i__16797_16823,G__16803_16845,G__16804_16846,f_16844,k_16843,seq__16794_16837__$1,temp__5457__auto___16836__$1,instance_keys_16819,temp__5457__auto___16818,props_16812,children_16813){
return (function() { 
var G__16848__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_16844,component,args);
};
var G__16848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16849__i = 0, G__16849__a = new Array(arguments.length -  0);
while (G__16849__i < G__16849__a.length) {G__16849__a[G__16849__i] = arguments[G__16849__i + 0]; ++G__16849__i;}
  args = new cljs.core.IndexedSeq(G__16849__a,0,null);
} 
return G__16848__delegate.call(this,args);};
G__16848.cljs$lang$maxFixedArity = 0;
G__16848.cljs$lang$applyTo = (function (arglist__16851){
var args = cljs.core.seq(arglist__16851);
return G__16848__delegate(args);
});
G__16848.cljs$core$IFn$_invoke$arity$variadic = G__16848__delegate;
return G__16848;
})()
;})(seq__16794_16820,chunk__16795_16821,count__16796_16822,i__16797_16823,G__16803_16845,G__16804_16846,f_16844,k_16843,seq__16794_16837__$1,temp__5457__auto___16836__$1,instance_keys_16819,temp__5457__auto___16818,props_16812,children_16813))
:f_16844);
goog.object.set(G__16803_16845,G__16804_16846,G__16805_16847);


var G__16855 = cljs.core.next(seq__16794_16837__$1);
var G__16856 = null;
var G__16857 = (0);
var G__16858 = (0);
seq__16794_16820 = G__16855;
chunk__16795_16821 = G__16856;
count__16796_16822 = G__16857;
i__16797_16823 = G__16858;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5457__auto___16859 = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_16812,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var temp__5457__auto__ = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5457__auto__)){
var initial_state = temp__5457__auto__;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__16807 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__16807,component,children_16813);
} else {
return G__16807;
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
var G__16808 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__16808,component,children_16813);
} else {
return G__16808;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5457__auto___16859)){
var state_16860 = temp__5457__auto___16859;
re_view.core.init_state_BANG_(component,state_16860);
} else {
}
} else {
var G__16809_16864 = component;
var G__16810_16865 = "re$view";
var G__16811_16866 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
goog.object.set(G__16809_16864,G__16810_16865,G__16811_16866);
}

return component;
});
/**
 * Return a function which returns a React element when called with props and children.
 */
re_view.core.factory = (function re_view$core$factory(constructor$){
var map__16869 = goog.object.get(constructor$,"re$view$base");
var map__16869__$1 = ((((!((map__16869 == null)))?(((((map__16869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16869):map__16869);
var re$view$base = map__16869__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__16870 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__16870__$1 = ((((!((map__16870 == null)))?(((((map__16870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16870):map__16870);
var class_keys__$1 = map__16870__$1;
var map__16871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16870__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__16871__$1 = ((((!((map__16871 == null)))?(((((map__16871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16871):map__16871);
var prop_spec = map__16871__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16871__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16870__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__16876 = ((function (map__16869,map__16869__$1,re$view$base,class_keys,instance_keys,map__16870,map__16870__$1,class_keys__$1,map__16871,map__16871__$1,prop_spec,defaults,children_spec,class_react_key,display_name){
return (function() { 
var G__16884__delegate = function (props,children){
var vec__16877 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877,(1),null);
var props__$2 = (function (){var G__16880 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__16880], 0));
} else {
return G__16880;
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

var G__16882 = constructor$;
var G__16883 = ({"key": key, "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "children": children__$1, "instance": instance_keys, "class": class_keys__$1});
return module$node_modules$react$index.createElement(G__16882,G__16883);
};
var G__16884 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__16888__i = 0, G__16888__a = new Array(arguments.length -  1);
while (G__16888__i < G__16888__a.length) {G__16888__a[G__16888__i] = arguments[G__16888__i + 1]; ++G__16888__i;}
  children = new cljs.core.IndexedSeq(G__16888__a,0,null);
} 
return G__16884__delegate.call(this,props,children);};
G__16884.cljs$lang$maxFixedArity = 1;
G__16884.cljs$lang$applyTo = (function (arglist__16889){
var props = cljs.core.first(arglist__16889);
var children = cljs.core.rest(arglist__16889);
return G__16884__delegate(props,children);
});
G__16884.cljs$core$IFn$_invoke$arity$variadic = G__16884__delegate;
return G__16884;
})()
;})(map__16869,map__16869__$1,re$view$base,class_keys,instance_keys,map__16870,map__16870__$1,class_keys__$1,map__16871,map__16871__$1,prop_spec,defaults,children_spec,class_react_key,display_name))
;
goog.object.set(G__16876,"re$view$base",re$view$base);

return G__16876;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__16890){
var map__16891 = p__16890;
var map__16891__$1 = ((((!((map__16891 == null)))?(((((map__16891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16891):map__16891);
var re_view_base = map__16891__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16891__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = (function (){var G__16893 = prototype;
var G__16894 = re_view.core.lifecycle_methods(lifecycle_keys);
return goog.object.extend(G__16893,G__16894);
})();
var constructor$ = ((function (prototype,_,map__16891,map__16891__$1,re_view_base,lifecycle_keys,react_keys){
return (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});})(prototype,_,map__16891,map__16891__$1,re_view_base,lifecycle_keys,react_keys))
;
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__16895_16920 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__16896_16921 = null;
var count__16897_16922 = (0);
var i__16898_16923 = (0);
while(true){
if((i__16898_16923 < count__16897_16922)){
var vec__16899_16924 = chunk__16896_16921.cljs$core$IIndexed$_nth$arity$2(null,i__16898_16923);
var k_16925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899_16924,(0),null);
var v_16926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899_16924,(1),null);
var G__16902_16927 = constructor$;
var G__16903_16928 = (re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1 ? re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1(k_16925) : re_view.util.camelCase.call(null,k_16925));
var G__16904_16929 = v_16926;
goog.object.set(G__16902_16927,G__16903_16928,G__16904_16929);


var G__16930 = seq__16895_16920;
var G__16931 = chunk__16896_16921;
var G__16932 = count__16897_16922;
var G__16933 = (i__16898_16923 + (1));
seq__16895_16920 = G__16930;
chunk__16896_16921 = G__16931;
count__16897_16922 = G__16932;
i__16898_16923 = G__16933;
continue;
} else {
var temp__5457__auto___16934 = cljs.core.seq(seq__16895_16920);
if(temp__5457__auto___16934){
var seq__16895_16935__$1 = temp__5457__auto___16934;
if(cljs.core.chunked_seq_QMARK_(seq__16895_16935__$1)){
var c__4351__auto___16937 = cljs.core.chunk_first(seq__16895_16935__$1);
var G__16938 = cljs.core.chunk_rest(seq__16895_16935__$1);
var G__16939 = c__4351__auto___16937;
var G__16940 = cljs.core.count(c__4351__auto___16937);
var G__16941 = (0);
seq__16895_16920 = G__16938;
chunk__16896_16921 = G__16939;
count__16897_16922 = G__16940;
i__16898_16923 = G__16941;
continue;
} else {
var vec__16905_16943 = cljs.core.first(seq__16895_16935__$1);
var k_16944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16905_16943,(0),null);
var v_16945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16905_16943,(1),null);
var G__16908_16947 = constructor$;
var G__16909_16948 = (re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1 ? re_view.util.camelCase.cljs$core$IFn$_invoke$arity$1(k_16944) : re_view.util.camelCase.call(null,k_16944));
var G__16910_16949 = v_16945;
goog.object.set(G__16908_16947,G__16909_16948,G__16910_16949);


var G__16951 = cljs.core.next(seq__16895_16935__$1);
var G__16952 = null;
var G__16953 = (0);
var G__16954 = (0);
seq__16895_16920 = G__16951;
chunk__16896_16921 = G__16952;
count__16897_16922 = G__16953;
i__16898_16923 = G__16954;
continue;
}
} else {
}
}
break;
}

var G__16913 = constructor$;
var G__16914_16955 = G__16913;
var G__16915_16956 = "re$view$base";
var G__16916_16957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype);
goog.object.set(G__16914_16955,G__16915_16956,G__16916_16957);

return G__16913;
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
var G__16970 = component;
var G__16971 = (function (){var G__16972 = element;
if(typeof element === 'string'){
return document.getElementById(G__16972);
} else {
return G__16972;
}
})();
return module$node_modules$react_dom$index.render(G__16970,G__16971);
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
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
var G__16983 = (function() { 
var G__17008__delegate = function (args){
var vec__16986 = (function (){var G__16989 = args;
if(!(cljs.core.map_QMARK_(cljs.core.first(args)))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__16989);
} else {
return G__16989;
}
})();
var seq__16987 = cljs.core.seq(vec__16986);
var first__16988 = cljs.core.first(seq__16987);
var seq__16987__$1 = cljs.core.next(seq__16987);
var user_props = first__16988;
var children = seq__16987__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__17008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17013__i = 0, G__17013__a = new Array(arguments.length -  0);
while (G__17013__i < G__17013__a.length) {G__17013__a[G__17013__i] = arguments[G__17013__i + 0]; ++G__17013__i;}
  args = new cljs.core.IndexedSeq(G__17013__a,0,null);
} 
return G__17008__delegate.call(this,args);};
G__17008.cljs$lang$maxFixedArity = 0;
G__17008.cljs$lang$applyTo = (function (arglist__17015){
var args = cljs.core.seq(arglist__17015);
return G__17008__delegate(args);
});
G__17008.cljs$core$IFn$_invoke$arity$variadic = G__17008__delegate;
return G__17008;
})()
;
var G__16990_17018 = G__16983;
var G__16991_17019 = "re$view$base";
var G__16992_17020 = goog.object.get(base,"re$view$base");
goog.object.set(G__16990_17018,G__16991_17019,G__16992_17020);

return G__16983;
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
