goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29417 = coll;
var G__29418 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29417,G__29418) : shadow.dom.lazy_native_coll_seq.call(null,G__29417,G__29418));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__29435 = arguments.length;
switch (G__29435) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__29438 = arguments.length;
switch (G__29438) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__29441 = arguments.length;
switch (G__29441) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__29452 = arguments.length;
switch (G__29452) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29463 = arguments.length;
switch (G__29463) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__29464 = document;
var G__29465 = shadow.dom.dom_node(el);
return goog.dom.contains(G__29464,G__29465);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__29467 = shadow.dom.dom_node(parent);
var G__29468 = shadow.dom.dom_node(el);
return goog.dom.contains(G__29467,G__29468);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__29476 = shadow.dom.dom_node(el);
var G__29477 = cls;
return goog.dom.classlist.add(G__29476,G__29477);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__29481 = shadow.dom.dom_node(el);
var G__29482 = cls;
return goog.dom.classlist.remove(G__29481,G__29482);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29484 = arguments.length;
switch (G__29484) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__29485 = shadow.dom.dom_node(el);
var G__29486 = cls;
return goog.dom.classlist.toggle(G__29485,G__29486);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29488){if((e29488 instanceof Object)){
var e = e29488;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29488;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29489 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29490 = null;
var count__29491 = (0);
var i__29492 = (0);
while(true){
if((i__29492 < count__29491)){
var el = chunk__29490.cljs$core$IIndexed$_nth$arity$2(null,i__29492);
var handler_29502__$1 = ((function (seq__29489,chunk__29490,count__29491,i__29492,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29489,chunk__29490,count__29491,i__29492,el))
;
var G__29494_29503 = el;
var G__29495_29504 = cljs.core.name(ev);
var G__29496_29505 = handler_29502__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29494_29503,G__29495_29504,G__29496_29505) : shadow.dom.dom_listen.call(null,G__29494_29503,G__29495_29504,G__29496_29505));


var G__29506 = seq__29489;
var G__29507 = chunk__29490;
var G__29508 = count__29491;
var G__29509 = (i__29492 + (1));
seq__29489 = G__29506;
chunk__29490 = G__29507;
count__29491 = G__29508;
i__29492 = G__29509;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29489);
if(temp__5457__auto__){
var seq__29489__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29489__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__29489__$1);
var G__29510 = cljs.core.chunk_rest(seq__29489__$1);
var G__29511 = c__4351__auto__;
var G__29512 = cljs.core.count(c__4351__auto__);
var G__29513 = (0);
seq__29489 = G__29510;
chunk__29490 = G__29511;
count__29491 = G__29512;
i__29492 = G__29513;
continue;
} else {
var el = cljs.core.first(seq__29489__$1);
var handler_29514__$1 = ((function (seq__29489,chunk__29490,count__29491,i__29492,el,seq__29489__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29489,chunk__29490,count__29491,i__29492,el,seq__29489__$1,temp__5457__auto__))
;
var G__29497_29515 = el;
var G__29498_29516 = cljs.core.name(ev);
var G__29499_29517 = handler_29514__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29497_29515,G__29498_29516,G__29499_29517) : shadow.dom.dom_listen.call(null,G__29497_29515,G__29498_29516,G__29499_29517));


var G__29518 = cljs.core.next(seq__29489__$1);
var G__29519 = null;
var G__29520 = (0);
var G__29521 = (0);
seq__29489 = G__29518;
chunk__29490 = G__29519;
count__29491 = G__29520;
i__29492 = G__29521;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29524 = arguments.length;
switch (G__29524) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__29525 = shadow.dom.dom_node(el);
var G__29526 = cljs.core.name(ev);
var G__29527 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29525,G__29526,G__29527) : shadow.dom.dom_listen.call(null,G__29525,G__29526,G__29527));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__29529 = shadow.dom.dom_node(el);
var G__29530 = cljs.core.name(ev);
var G__29531 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__29529,G__29530,G__29531) : shadow.dom.dom_listen_remove.call(null,G__29529,G__29530,G__29531));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29532 = cljs.core.seq(events);
var chunk__29533 = null;
var count__29534 = (0);
var i__29535 = (0);
while(true){
if((i__29535 < count__29534)){
var vec__29536 = chunk__29533.cljs$core$IIndexed$_nth$arity$2(null,i__29535);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29544 = seq__29532;
var G__29545 = chunk__29533;
var G__29546 = count__29534;
var G__29547 = (i__29535 + (1));
seq__29532 = G__29544;
chunk__29533 = G__29545;
count__29534 = G__29546;
i__29535 = G__29547;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29532);
if(temp__5457__auto__){
var seq__29532__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29532__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__29532__$1);
var G__29548 = cljs.core.chunk_rest(seq__29532__$1);
var G__29549 = c__4351__auto__;
var G__29550 = cljs.core.count(c__4351__auto__);
var G__29551 = (0);
seq__29532 = G__29548;
chunk__29533 = G__29549;
count__29534 = G__29550;
i__29535 = G__29551;
continue;
} else {
var vec__29539 = cljs.core.first(seq__29532__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29539,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29554 = cljs.core.next(seq__29532__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__29532 = G__29554;
chunk__29533 = G__29555;
count__29534 = G__29556;
i__29535 = G__29557;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29559 = cljs.core.seq(styles);
var chunk__29560 = null;
var count__29561 = (0);
var i__29562 = (0);
while(true){
if((i__29562 < count__29561)){
var vec__29564 = chunk__29560.cljs$core$IIndexed$_nth$arity$2(null,i__29562);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29564,(1),null);
var G__29567_29578 = dom;
var G__29568_29579 = cljs.core.name(k);
var G__29569_29580 = (((v == null))?"":v);
goog.style.setStyle(G__29567_29578,G__29568_29579,G__29569_29580);


var G__29581 = seq__29559;
var G__29582 = chunk__29560;
var G__29583 = count__29561;
var G__29584 = (i__29562 + (1));
seq__29559 = G__29581;
chunk__29560 = G__29582;
count__29561 = G__29583;
i__29562 = G__29584;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29559);
if(temp__5457__auto__){
var seq__29559__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29559__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__29559__$1);
var G__29585 = cljs.core.chunk_rest(seq__29559__$1);
var G__29586 = c__4351__auto__;
var G__29587 = cljs.core.count(c__4351__auto__);
var G__29588 = (0);
seq__29559 = G__29585;
chunk__29560 = G__29586;
count__29561 = G__29587;
i__29562 = G__29588;
continue;
} else {
var vec__29571 = cljs.core.first(seq__29559__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(1),null);
var G__29574_29589 = dom;
var G__29575_29590 = cljs.core.name(k);
var G__29576_29591 = (((v == null))?"":v);
goog.style.setStyle(G__29574_29589,G__29575_29590,G__29576_29591);


var G__29592 = cljs.core.next(seq__29559__$1);
var G__29593 = null;
var G__29594 = (0);
var G__29595 = (0);
seq__29559 = G__29592;
chunk__29560 = G__29593;
count__29561 = G__29594;
i__29562 = G__29595;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29596_29602 = key;
var G__29596_29603__$1 = (((G__29596_29602 instanceof cljs.core.Keyword))?G__29596_29602.fqn:null);
switch (G__29596_29603__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29606 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_29606,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_29606,"aria-");
}
})())){
el.setAttribute(ks_29606,value);
} else {
(el[ks_29606] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__29614 = shadow.dom.dom_node(el);
var G__29615 = cls;
return goog.dom.classlist.contains(G__29614,G__29615);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29626){
var map__29627 = p__29626;
var map__29627__$1 = ((((!((map__29627 == null)))?(((((map__29627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29627):map__29627);
var props = map__29627__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29630 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29637 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29637,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29637;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29708){
var vec__29711 = p__29708;
var seq__29712 = cljs.core.seq(vec__29711);
var first__29713 = cljs.core.first(seq__29712);
var seq__29712__$1 = cljs.core.next(seq__29712);
var nn = first__29713;
var first__29713__$1 = cljs.core.first(seq__29712__$1);
var seq__29712__$2 = cljs.core.next(seq__29712__$1);
var np = first__29713__$1;
var nc = seq__29712__$2;
var node = vec__29711;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29715 = nn;
var G__29716 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29715,G__29716) : create_fn.call(null,G__29715,G__29716));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29717 = nn;
var G__29718 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29717,G__29718) : create_fn.call(null,G__29717,G__29718));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29722 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(1),null);
var seq__29725_29747 = cljs.core.seq(node_children);
var chunk__29726_29748 = null;
var count__29727_29749 = (0);
var i__29728_29750 = (0);
while(true){
if((i__29728_29750 < count__29727_29749)){
var child_struct_29751 = chunk__29726_29748.cljs$core$IIndexed$_nth$arity$2(null,i__29728_29750);
var children_29752 = shadow.dom.dom_node(child_struct_29751);
if(cljs.core.seq_QMARK_(children_29752)){
var seq__29732_29753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29752));
var chunk__29734_29754 = null;
var count__29735_29755 = (0);
var i__29736_29756 = (0);
while(true){
if((i__29736_29756 < count__29735_29755)){
var child_29757 = chunk__29734_29754.cljs$core$IIndexed$_nth$arity$2(null,i__29736_29756);
if(cljs.core.truth_(child_29757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29757);


var G__29758 = seq__29732_29753;
var G__29759 = chunk__29734_29754;
var G__29760 = count__29735_29755;
var G__29761 = (i__29736_29756 + (1));
seq__29732_29753 = G__29758;
chunk__29734_29754 = G__29759;
count__29735_29755 = G__29760;
i__29736_29756 = G__29761;
continue;
} else {
var G__29762 = seq__29732_29753;
var G__29763 = chunk__29734_29754;
var G__29764 = count__29735_29755;
var G__29765 = (i__29736_29756 + (1));
seq__29732_29753 = G__29762;
chunk__29734_29754 = G__29763;
count__29735_29755 = G__29764;
i__29736_29756 = G__29765;
continue;
}
} else {
var temp__5457__auto___29771 = cljs.core.seq(seq__29732_29753);
if(temp__5457__auto___29771){
var seq__29732_29772__$1 = temp__5457__auto___29771;
if(cljs.core.chunked_seq_QMARK_(seq__29732_29772__$1)){
var c__4351__auto___29773 = cljs.core.chunk_first(seq__29732_29772__$1);
var G__29774 = cljs.core.chunk_rest(seq__29732_29772__$1);
var G__29775 = c__4351__auto___29773;
var G__29776 = cljs.core.count(c__4351__auto___29773);
var G__29777 = (0);
seq__29732_29753 = G__29774;
chunk__29734_29754 = G__29775;
count__29735_29755 = G__29776;
i__29736_29756 = G__29777;
continue;
} else {
var child_29778 = cljs.core.first(seq__29732_29772__$1);
if(cljs.core.truth_(child_29778)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29778);


var G__29779 = cljs.core.next(seq__29732_29772__$1);
var G__29780 = null;
var G__29781 = (0);
var G__29782 = (0);
seq__29732_29753 = G__29779;
chunk__29734_29754 = G__29780;
count__29735_29755 = G__29781;
i__29736_29756 = G__29782;
continue;
} else {
var G__29783 = cljs.core.next(seq__29732_29772__$1);
var G__29784 = null;
var G__29785 = (0);
var G__29786 = (0);
seq__29732_29753 = G__29783;
chunk__29734_29754 = G__29784;
count__29735_29755 = G__29785;
i__29736_29756 = G__29786;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29752);
}


var G__29787 = seq__29725_29747;
var G__29788 = chunk__29726_29748;
var G__29789 = count__29727_29749;
var G__29790 = (i__29728_29750 + (1));
seq__29725_29747 = G__29787;
chunk__29726_29748 = G__29788;
count__29727_29749 = G__29789;
i__29728_29750 = G__29790;
continue;
} else {
var temp__5457__auto___29791 = cljs.core.seq(seq__29725_29747);
if(temp__5457__auto___29791){
var seq__29725_29792__$1 = temp__5457__auto___29791;
if(cljs.core.chunked_seq_QMARK_(seq__29725_29792__$1)){
var c__4351__auto___29794 = cljs.core.chunk_first(seq__29725_29792__$1);
var G__29795 = cljs.core.chunk_rest(seq__29725_29792__$1);
var G__29796 = c__4351__auto___29794;
var G__29797 = cljs.core.count(c__4351__auto___29794);
var G__29798 = (0);
seq__29725_29747 = G__29795;
chunk__29726_29748 = G__29796;
count__29727_29749 = G__29797;
i__29728_29750 = G__29798;
continue;
} else {
var child_struct_29801 = cljs.core.first(seq__29725_29792__$1);
var children_29802 = shadow.dom.dom_node(child_struct_29801);
if(cljs.core.seq_QMARK_(children_29802)){
var seq__29738_29803 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29802));
var chunk__29740_29804 = null;
var count__29741_29805 = (0);
var i__29742_29806 = (0);
while(true){
if((i__29742_29806 < count__29741_29805)){
var child_29808 = chunk__29740_29804.cljs$core$IIndexed$_nth$arity$2(null,i__29742_29806);
if(cljs.core.truth_(child_29808)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29808);


var G__29809 = seq__29738_29803;
var G__29810 = chunk__29740_29804;
var G__29811 = count__29741_29805;
var G__29812 = (i__29742_29806 + (1));
seq__29738_29803 = G__29809;
chunk__29740_29804 = G__29810;
count__29741_29805 = G__29811;
i__29742_29806 = G__29812;
continue;
} else {
var G__29813 = seq__29738_29803;
var G__29814 = chunk__29740_29804;
var G__29815 = count__29741_29805;
var G__29816 = (i__29742_29806 + (1));
seq__29738_29803 = G__29813;
chunk__29740_29804 = G__29814;
count__29741_29805 = G__29815;
i__29742_29806 = G__29816;
continue;
}
} else {
var temp__5457__auto___29817__$1 = cljs.core.seq(seq__29738_29803);
if(temp__5457__auto___29817__$1){
var seq__29738_29818__$1 = temp__5457__auto___29817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29738_29818__$1)){
var c__4351__auto___29819 = cljs.core.chunk_first(seq__29738_29818__$1);
var G__29820 = cljs.core.chunk_rest(seq__29738_29818__$1);
var G__29821 = c__4351__auto___29819;
var G__29822 = cljs.core.count(c__4351__auto___29819);
var G__29823 = (0);
seq__29738_29803 = G__29820;
chunk__29740_29804 = G__29821;
count__29741_29805 = G__29822;
i__29742_29806 = G__29823;
continue;
} else {
var child_29824 = cljs.core.first(seq__29738_29818__$1);
if(cljs.core.truth_(child_29824)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29824);


var G__29825 = cljs.core.next(seq__29738_29818__$1);
var G__29826 = null;
var G__29827 = (0);
var G__29828 = (0);
seq__29738_29803 = G__29825;
chunk__29740_29804 = G__29826;
count__29741_29805 = G__29827;
i__29742_29806 = G__29828;
continue;
} else {
var G__29829 = cljs.core.next(seq__29738_29818__$1);
var G__29830 = null;
var G__29831 = (0);
var G__29832 = (0);
seq__29738_29803 = G__29829;
chunk__29740_29804 = G__29830;
count__29741_29805 = G__29831;
i__29742_29806 = G__29832;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29802);
}


var G__29833 = cljs.core.next(seq__29725_29792__$1);
var G__29834 = null;
var G__29835 = (0);
var G__29836 = (0);
seq__29725_29747 = G__29833;
chunk__29726_29748 = G__29834;
count__29727_29749 = G__29835;
i__29728_29750 = G__29836;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__29840 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__29840);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29842 = cljs.core.seq(node);
var chunk__29843 = null;
var count__29844 = (0);
var i__29845 = (0);
while(true){
if((i__29845 < count__29844)){
var n = chunk__29843.cljs$core$IIndexed$_nth$arity$2(null,i__29845);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29846 = seq__29842;
var G__29847 = chunk__29843;
var G__29848 = count__29844;
var G__29849 = (i__29845 + (1));
seq__29842 = G__29846;
chunk__29843 = G__29847;
count__29844 = G__29848;
i__29845 = G__29849;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29842);
if(temp__5457__auto__){
var seq__29842__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29842__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__29842__$1);
var G__29855 = cljs.core.chunk_rest(seq__29842__$1);
var G__29856 = c__4351__auto__;
var G__29857 = cljs.core.count(c__4351__auto__);
var G__29858 = (0);
seq__29842 = G__29855;
chunk__29843 = G__29856;
count__29844 = G__29857;
i__29845 = G__29858;
continue;
} else {
var n = cljs.core.first(seq__29842__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29865 = cljs.core.next(seq__29842__$1);
var G__29866 = null;
var G__29867 = (0);
var G__29868 = (0);
seq__29842 = G__29865;
chunk__29843 = G__29866;
count__29844 = G__29867;
i__29845 = G__29868;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__29869 = shadow.dom.dom_node(new$);
var G__29870 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__29869,G__29870);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29875 = arguments.length;
switch (G__29875) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29878 = arguments.length;
switch (G__29878) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29889 = arguments.length;
switch (G__29889) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29913 = arguments.length;
var i__4532__auto___29914 = (0);
while(true){
if((i__4532__auto___29914 < len__4531__auto___29913)){
args__4534__auto__.push((arguments[i__4532__auto___29914]));

var G__29915 = (i__4532__auto___29914 + (1));
i__4532__auto___29914 = G__29915;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29905_29916 = cljs.core.seq(nodes);
var chunk__29906_29917 = null;
var count__29907_29918 = (0);
var i__29908_29919 = (0);
while(true){
if((i__29908_29919 < count__29907_29918)){
var node_29920 = chunk__29906_29917.cljs$core$IIndexed$_nth$arity$2(null,i__29908_29919);
fragment.appendChild(shadow.dom._to_dom(node_29920));


var G__29921 = seq__29905_29916;
var G__29922 = chunk__29906_29917;
var G__29923 = count__29907_29918;
var G__29924 = (i__29908_29919 + (1));
seq__29905_29916 = G__29921;
chunk__29906_29917 = G__29922;
count__29907_29918 = G__29923;
i__29908_29919 = G__29924;
continue;
} else {
var temp__5457__auto___29928 = cljs.core.seq(seq__29905_29916);
if(temp__5457__auto___29928){
var seq__29905_29929__$1 = temp__5457__auto___29928;
if(cljs.core.chunked_seq_QMARK_(seq__29905_29929__$1)){
var c__4351__auto___29930 = cljs.core.chunk_first(seq__29905_29929__$1);
var G__29931 = cljs.core.chunk_rest(seq__29905_29929__$1);
var G__29932 = c__4351__auto___29930;
var G__29933 = cljs.core.count(c__4351__auto___29930);
var G__29934 = (0);
seq__29905_29916 = G__29931;
chunk__29906_29917 = G__29932;
count__29907_29918 = G__29933;
i__29908_29919 = G__29934;
continue;
} else {
var node_29935 = cljs.core.first(seq__29905_29929__$1);
fragment.appendChild(shadow.dom._to_dom(node_29935));


var G__29936 = cljs.core.next(seq__29905_29929__$1);
var G__29937 = null;
var G__29938 = (0);
var G__29939 = (0);
seq__29905_29916 = G__29936;
chunk__29906_29917 = G__29937;
count__29907_29918 = G__29938;
i__29908_29919 = G__29939;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq29901){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29901));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29943_29960 = cljs.core.seq(scripts);
var chunk__29944_29961 = null;
var count__29945_29962 = (0);
var i__29946_29963 = (0);
while(true){
if((i__29946_29963 < count__29945_29962)){
var vec__29947_29964 = chunk__29944_29961.cljs$core$IIndexed$_nth$arity$2(null,i__29946_29963);
var script_tag_29965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947_29964,(0),null);
var script_body_29966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29947_29964,(1),null);
eval(script_body_29966);


var G__29968 = seq__29943_29960;
var G__29969 = chunk__29944_29961;
var G__29970 = count__29945_29962;
var G__29971 = (i__29946_29963 + (1));
seq__29943_29960 = G__29968;
chunk__29944_29961 = G__29969;
count__29945_29962 = G__29970;
i__29946_29963 = G__29971;
continue;
} else {
var temp__5457__auto___29972 = cljs.core.seq(seq__29943_29960);
if(temp__5457__auto___29972){
var seq__29943_29974__$1 = temp__5457__auto___29972;
if(cljs.core.chunked_seq_QMARK_(seq__29943_29974__$1)){
var c__4351__auto___29975 = cljs.core.chunk_first(seq__29943_29974__$1);
var G__29976 = cljs.core.chunk_rest(seq__29943_29974__$1);
var G__29977 = c__4351__auto___29975;
var G__29978 = cljs.core.count(c__4351__auto___29975);
var G__29979 = (0);
seq__29943_29960 = G__29976;
chunk__29944_29961 = G__29977;
count__29945_29962 = G__29978;
i__29946_29963 = G__29979;
continue;
} else {
var vec__29950_29980 = cljs.core.first(seq__29943_29974__$1);
var script_tag_29981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950_29980,(0),null);
var script_body_29982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950_29980,(1),null);
eval(script_body_29982);


var G__29983 = cljs.core.next(seq__29943_29974__$1);
var G__29984 = null;
var G__29985 = (0);
var G__29986 = (0);
seq__29943_29960 = G__29983;
chunk__29944_29961 = G__29984;
count__29945_29962 = G__29985;
i__29946_29963 = G__29986;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__29953){
var vec__29954 = p__29953;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__29991 = shadow.dom.dom_node(el);
var G__29992 = cls;
return goog.dom.getAncestorByClass(G__29991,G__29992);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29999 = arguments.length;
switch (G__29999) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__30000 = shadow.dom.dom_node(el);
var G__30001 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__30000,G__30001);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__30002 = shadow.dom.dom_node(el);
var G__30003 = cljs.core.name(tag);
var G__30004 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__30002,G__30003,G__30004);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__30007 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__30007);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__30008 = shadow.dom.dom_node(dom);
var G__30009 = value;
return goog.dom.forms.setValue(G__30008,G__30009);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__30021 = cljs.core.seq(style_keys);
var chunk__30022 = null;
var count__30023 = (0);
var i__30024 = (0);
while(true){
if((i__30024 < count__30023)){
var it = chunk__30022.cljs$core$IIndexed$_nth$arity$2(null,i__30024);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30025 = seq__30021;
var G__30026 = chunk__30022;
var G__30027 = count__30023;
var G__30028 = (i__30024 + (1));
seq__30021 = G__30025;
chunk__30022 = G__30026;
count__30023 = G__30027;
i__30024 = G__30028;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30021);
if(temp__5457__auto__){
var seq__30021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30021__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__30021__$1);
var G__30029 = cljs.core.chunk_rest(seq__30021__$1);
var G__30030 = c__4351__auto__;
var G__30031 = cljs.core.count(c__4351__auto__);
var G__30032 = (0);
seq__30021 = G__30029;
chunk__30022 = G__30030;
count__30023 = G__30031;
i__30024 = G__30032;
continue;
} else {
var it = cljs.core.first(seq__30021__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30033 = cljs.core.next(seq__30021__$1);
var G__30034 = null;
var G__30035 = (0);
var G__30036 = (0);
seq__30021 = G__30033;
chunk__30022 = G__30034;
count__30023 = G__30035;
i__30024 = G__30036;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k30038,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__30045 = k30038;
var G__30045__$1 = (((G__30045 instanceof cljs.core.Keyword))?G__30045.fqn:null);
switch (G__30045__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30038,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30037){
var self__ = this;
var G__30037__$1 = this;
return (new cljs.core.RecordIter((0),G__30037__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__30047 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__30047(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30039,other30040){
var self__ = this;
var this30039__$1 = this;
return ((!((other30040 == null))) && ((this30039__$1.constructor === other30040.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30039__$1.x,other30040.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30039__$1.y,other30040.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30039__$1.__extmap,other30040.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__30037){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__30055 = cljs.core.keyword_identical_QMARK_;
var expr__30056 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__30059 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__30060 = expr__30056;
return (pred__30055.cljs$core$IFn$_invoke$arity$2 ? pred__30055.cljs$core$IFn$_invoke$arity$2(G__30059,G__30060) : pred__30055.call(null,G__30059,G__30060));
})())){
return (new shadow.dom.Coordinate(G__30037,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30061 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__30062 = expr__30056;
return (pred__30055.cljs$core$IFn$_invoke$arity$2 ? pred__30055.cljs$core$IFn$_invoke$arity$2(G__30061,G__30062) : pred__30055.call(null,G__30061,G__30062));
})())){
return (new shadow.dom.Coordinate(self__.x,G__30037,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__30037),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__30037){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30037,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30041){
var extmap__4236__auto__ = (function (){var G__30067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30041,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30041)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30067);
} else {
return G__30067;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30041),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30041),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__30089 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__30089);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__30090 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__30090);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__30094 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__30094);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k30099,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__30104 = k30099;
var G__30104__$1 = (((G__30104 instanceof cljs.core.Keyword))?G__30104.fqn:null);
switch (G__30104__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30099,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30098){
var self__ = this;
var G__30098__$1 = this;
return (new cljs.core.RecordIter((0),G__30098__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__30109 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__30109(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30100,other30101){
var self__ = this;
var this30100__$1 = this;
return ((!((other30101 == null))) && ((this30100__$1.constructor === other30101.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30100__$1.w,other30101.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30100__$1.h,other30101.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30100__$1.__extmap,other30101.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__30098){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__30126 = cljs.core.keyword_identical_QMARK_;
var expr__30127 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__30129 = new cljs.core.Keyword(null,"w","w",354169001);
var G__30130 = expr__30127;
return (pred__30126.cljs$core$IFn$_invoke$arity$2 ? pred__30126.cljs$core$IFn$_invoke$arity$2(G__30129,G__30130) : pred__30126.call(null,G__30129,G__30130));
})())){
return (new shadow.dom.Size(G__30098,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30131 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__30132 = expr__30127;
return (pred__30126.cljs$core$IFn$_invoke$arity$2 ? pred__30126.cljs$core$IFn$_invoke$arity$2(G__30131,G__30132) : pred__30126.call(null,G__30131,G__30132));
})())){
return (new shadow.dom.Size(self__.w,G__30098,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__30098),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__30098){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30098,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30102){
var extmap__4236__auto__ = (function (){var G__30141 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30102,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30102)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30141);
} else {
return G__30141;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30102),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30102),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__30158 = shadow.dom.dom_node(el);
return goog.style.getSize(G__30158);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__30166 = (i + (1));
var G__30167 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30166;
ret = G__30167;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30168){
var vec__30169 = p__30168;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30169,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30174 = arguments.length;
switch (G__30174) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__30185_30187 = new_node;
var G__30186_30188 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__30185_30187,G__30186_30188);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__30191_30193 = new_node;
var G__30192_30194 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__30191_30193,G__30192_30194);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30200 = ps;
var G__30201 = (i + (1));
el__$1 = G__30200;
i = G__30201;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__30202 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__30202);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__30207 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__30207);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__30208 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__30208);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30210 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30215_30226 = cljs.core.seq(props);
var chunk__30216_30227 = null;
var count__30217_30228 = (0);
var i__30218_30229 = (0);
while(true){
if((i__30218_30229 < count__30217_30228)){
var vec__30220_30230 = chunk__30216_30227.cljs$core$IIndexed$_nth$arity$2(null,i__30218_30229);
var k_30231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30220_30230,(0),null);
var v_30232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30220_30230,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_30231);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30231),v_30232);


var G__30233 = seq__30215_30226;
var G__30234 = chunk__30216_30227;
var G__30235 = count__30217_30228;
var G__30236 = (i__30218_30229 + (1));
seq__30215_30226 = G__30233;
chunk__30216_30227 = G__30234;
count__30217_30228 = G__30235;
i__30218_30229 = G__30236;
continue;
} else {
var temp__5457__auto___30237 = cljs.core.seq(seq__30215_30226);
if(temp__5457__auto___30237){
var seq__30215_30238__$1 = temp__5457__auto___30237;
if(cljs.core.chunked_seq_QMARK_(seq__30215_30238__$1)){
var c__4351__auto___30239 = cljs.core.chunk_first(seq__30215_30238__$1);
var G__30240 = cljs.core.chunk_rest(seq__30215_30238__$1);
var G__30241 = c__4351__auto___30239;
var G__30242 = cljs.core.count(c__4351__auto___30239);
var G__30243 = (0);
seq__30215_30226 = G__30240;
chunk__30216_30227 = G__30241;
count__30217_30228 = G__30242;
i__30218_30229 = G__30243;
continue;
} else {
var vec__30223_30245 = cljs.core.first(seq__30215_30238__$1);
var k_30246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30223_30245,(0),null);
var v_30247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30223_30245,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_30246);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30246),v_30247);


var G__30248 = cljs.core.next(seq__30215_30238__$1);
var G__30249 = null;
var G__30250 = (0);
var G__30251 = (0);
seq__30215_30226 = G__30248;
chunk__30216_30227 = G__30249;
count__30217_30228 = G__30250;
i__30218_30229 = G__30251;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__30257 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(1),null);
var seq__30260_30286 = cljs.core.seq(node_children);
var chunk__30262_30287 = null;
var count__30263_30288 = (0);
var i__30264_30289 = (0);
while(true){
if((i__30264_30289 < count__30263_30288)){
var child_struct_30293 = chunk__30262_30287.cljs$core$IIndexed$_nth$arity$2(null,i__30264_30289);
if(!((child_struct_30293 == null))){
if(typeof child_struct_30293 === 'string'){
var text_30295 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30295),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_30293)].join(''));
} else {
var children_30298 = shadow.dom.svg_node(child_struct_30293);
if(cljs.core.seq_QMARK_(children_30298)){
var seq__30269_30300 = cljs.core.seq(children_30298);
var chunk__30271_30301 = null;
var count__30272_30302 = (0);
var i__30273_30303 = (0);
while(true){
if((i__30273_30303 < count__30272_30302)){
var child_30304 = chunk__30271_30301.cljs$core$IIndexed$_nth$arity$2(null,i__30273_30303);
if(cljs.core.truth_(child_30304)){
node.appendChild(child_30304);


var G__30306 = seq__30269_30300;
var G__30307 = chunk__30271_30301;
var G__30308 = count__30272_30302;
var G__30309 = (i__30273_30303 + (1));
seq__30269_30300 = G__30306;
chunk__30271_30301 = G__30307;
count__30272_30302 = G__30308;
i__30273_30303 = G__30309;
continue;
} else {
var G__30310 = seq__30269_30300;
var G__30311 = chunk__30271_30301;
var G__30312 = count__30272_30302;
var G__30313 = (i__30273_30303 + (1));
seq__30269_30300 = G__30310;
chunk__30271_30301 = G__30311;
count__30272_30302 = G__30312;
i__30273_30303 = G__30313;
continue;
}
} else {
var temp__5457__auto___30314 = cljs.core.seq(seq__30269_30300);
if(temp__5457__auto___30314){
var seq__30269_30315__$1 = temp__5457__auto___30314;
if(cljs.core.chunked_seq_QMARK_(seq__30269_30315__$1)){
var c__4351__auto___30316 = cljs.core.chunk_first(seq__30269_30315__$1);
var G__30317 = cljs.core.chunk_rest(seq__30269_30315__$1);
var G__30318 = c__4351__auto___30316;
var G__30319 = cljs.core.count(c__4351__auto___30316);
var G__30320 = (0);
seq__30269_30300 = G__30317;
chunk__30271_30301 = G__30318;
count__30272_30302 = G__30319;
i__30273_30303 = G__30320;
continue;
} else {
var child_30321 = cljs.core.first(seq__30269_30315__$1);
if(cljs.core.truth_(child_30321)){
node.appendChild(child_30321);


var G__30322 = cljs.core.next(seq__30269_30315__$1);
var G__30323 = null;
var G__30324 = (0);
var G__30325 = (0);
seq__30269_30300 = G__30322;
chunk__30271_30301 = G__30323;
count__30272_30302 = G__30324;
i__30273_30303 = G__30325;
continue;
} else {
var G__30326 = cljs.core.next(seq__30269_30315__$1);
var G__30327 = null;
var G__30328 = (0);
var G__30329 = (0);
seq__30269_30300 = G__30326;
chunk__30271_30301 = G__30327;
count__30272_30302 = G__30328;
i__30273_30303 = G__30329;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30298);
}
}


var G__30330 = seq__30260_30286;
var G__30331 = chunk__30262_30287;
var G__30332 = count__30263_30288;
var G__30333 = (i__30264_30289 + (1));
seq__30260_30286 = G__30330;
chunk__30262_30287 = G__30331;
count__30263_30288 = G__30332;
i__30264_30289 = G__30333;
continue;
} else {
var G__30337 = seq__30260_30286;
var G__30338 = chunk__30262_30287;
var G__30339 = count__30263_30288;
var G__30340 = (i__30264_30289 + (1));
seq__30260_30286 = G__30337;
chunk__30262_30287 = G__30338;
count__30263_30288 = G__30339;
i__30264_30289 = G__30340;
continue;
}
} else {
var temp__5457__auto___30344 = cljs.core.seq(seq__30260_30286);
if(temp__5457__auto___30344){
var seq__30260_30345__$1 = temp__5457__auto___30344;
if(cljs.core.chunked_seq_QMARK_(seq__30260_30345__$1)){
var c__4351__auto___30346 = cljs.core.chunk_first(seq__30260_30345__$1);
var G__30347 = cljs.core.chunk_rest(seq__30260_30345__$1);
var G__30348 = c__4351__auto___30346;
var G__30349 = cljs.core.count(c__4351__auto___30346);
var G__30350 = (0);
seq__30260_30286 = G__30347;
chunk__30262_30287 = G__30348;
count__30263_30288 = G__30349;
i__30264_30289 = G__30350;
continue;
} else {
var child_struct_30351 = cljs.core.first(seq__30260_30345__$1);
if(!((child_struct_30351 == null))){
if(typeof child_struct_30351 === 'string'){
var text_30352 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30352),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_30351)].join(''));
} else {
var children_30354 = shadow.dom.svg_node(child_struct_30351);
if(cljs.core.seq_QMARK_(children_30354)){
var seq__30277_30357 = cljs.core.seq(children_30354);
var chunk__30279_30358 = null;
var count__30280_30359 = (0);
var i__30281_30360 = (0);
while(true){
if((i__30281_30360 < count__30280_30359)){
var child_30363 = chunk__30279_30358.cljs$core$IIndexed$_nth$arity$2(null,i__30281_30360);
if(cljs.core.truth_(child_30363)){
node.appendChild(child_30363);


var G__30365 = seq__30277_30357;
var G__30366 = chunk__30279_30358;
var G__30367 = count__30280_30359;
var G__30368 = (i__30281_30360 + (1));
seq__30277_30357 = G__30365;
chunk__30279_30358 = G__30366;
count__30280_30359 = G__30367;
i__30281_30360 = G__30368;
continue;
} else {
var G__30369 = seq__30277_30357;
var G__30370 = chunk__30279_30358;
var G__30371 = count__30280_30359;
var G__30372 = (i__30281_30360 + (1));
seq__30277_30357 = G__30369;
chunk__30279_30358 = G__30370;
count__30280_30359 = G__30371;
i__30281_30360 = G__30372;
continue;
}
} else {
var temp__5457__auto___30373__$1 = cljs.core.seq(seq__30277_30357);
if(temp__5457__auto___30373__$1){
var seq__30277_30374__$1 = temp__5457__auto___30373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30277_30374__$1)){
var c__4351__auto___30375 = cljs.core.chunk_first(seq__30277_30374__$1);
var G__30376 = cljs.core.chunk_rest(seq__30277_30374__$1);
var G__30377 = c__4351__auto___30375;
var G__30378 = cljs.core.count(c__4351__auto___30375);
var G__30379 = (0);
seq__30277_30357 = G__30376;
chunk__30279_30358 = G__30377;
count__30280_30359 = G__30378;
i__30281_30360 = G__30379;
continue;
} else {
var child_30380 = cljs.core.first(seq__30277_30374__$1);
if(cljs.core.truth_(child_30380)){
node.appendChild(child_30380);


var G__30381 = cljs.core.next(seq__30277_30374__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__30277_30357 = G__30381;
chunk__30279_30358 = G__30382;
count__30280_30359 = G__30383;
i__30281_30360 = G__30384;
continue;
} else {
var G__30385 = cljs.core.next(seq__30277_30374__$1);
var G__30386 = null;
var G__30387 = (0);
var G__30388 = (0);
seq__30277_30357 = G__30385;
chunk__30279_30358 = G__30386;
count__30280_30359 = G__30387;
i__30281_30360 = G__30388;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30354);
}
}


var G__30389 = cljs.core.next(seq__30260_30345__$1);
var G__30390 = null;
var G__30391 = (0);
var G__30392 = (0);
seq__30260_30286 = G__30389;
chunk__30262_30287 = G__30390;
count__30263_30288 = G__30391;
i__30264_30289 = G__30392;
continue;
} else {
var G__30394 = cljs.core.next(seq__30260_30345__$1);
var G__30395 = null;
var G__30396 = (0);
var G__30397 = (0);
seq__30260_30286 = G__30394;
chunk__30262_30287 = G__30395;
count__30263_30288 = G__30396;
i__30264_30289 = G__30397;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__30401_30410 = shadow.dom._to_svg;
var G__30402_30411 = "string";
var G__30403_30412 = ((function (G__30401_30410,G__30402_30411){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__30401_30410,G__30402_30411))
;
goog.object.set(G__30401_30410,G__30402_30411,G__30403_30412);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__30404_30416 = shadow.dom._to_svg;
var G__30405_30417 = "null";
var G__30406_30418 = ((function (G__30404_30416,G__30405_30417){
return (function (_){
return null;
});})(G__30404_30416,G__30405_30417))
;
goog.object.set(G__30404_30416,G__30405_30417,G__30406_30418);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30428 = arguments.length;
var i__4532__auto___30430 = (0);
while(true){
if((i__4532__auto___30430 < len__4531__auto___30428)){
args__4534__auto__.push((arguments[i__4532__auto___30430]));

var G__30431 = (i__4532__auto___30430 + (1));
i__4532__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq30419){
var G__30420 = cljs.core.first(seq30419);
var seq30419__$1 = cljs.core.next(seq30419);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30420,seq30419__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__30437 = arguments.length;
switch (G__30437) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__30438_30463 = shadow.dom.dom_node(el);
var G__30439_30464 = cljs.core.name(event);
var G__30440_30465 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30438_30463,G__30439_30464,G__30440_30465) : shadow.dom.dom_listen.call(null,G__30438_30463,G__30439_30464,G__30440_30465));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__26242__auto___30466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___30466,buf,chan,event_fn){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___30466,buf,chan,event_fn){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (1))){
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30445__$1,(2),once_or_cleanup);
} else {
if((state_val_30446 === (2))){
var inst_30442 = (state_30445[(2)]);
var inst_30443 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30445__$1 = (function (){var statearr_30450 = state_30445;
(statearr_30450[(7)] = inst_30442);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30445__$1,inst_30443);
} else {
return null;
}
}
});})(c__26242__auto___30466,buf,chan,event_fn))
;
return ((function (switch__25864__auto__,c__26242__auto___30466,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__25865__auto__ = null;
var shadow$dom$state_machine__25865__auto____0 = (function (){
var statearr_30451 = [null,null,null,null,null,null,null,null];
(statearr_30451[(0)] = shadow$dom$state_machine__25865__auto__);

(statearr_30451[(1)] = (1));

return statearr_30451;
});
var shadow$dom$state_machine__25865__auto____1 = (function (state_30445){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_30445);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e30452){if((e30452 instanceof Object)){
var ex__25868__auto__ = e30452;
var statearr_30453_30468 = state_30445;
(statearr_30453_30468[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30445;
state_30445 = G__30469;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
shadow$dom$state_machine__25865__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25865__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25865__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25865__auto____0;
shadow$dom$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25865__auto____1;
return shadow$dom$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___30466,buf,chan,event_fn))
})();
var state__26244__auto__ = (function (){var statearr_30454 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_30454[(6)] = c__26242__auto___30466);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___30466,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
