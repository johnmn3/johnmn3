goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26383 = arguments.length;
switch (G__26383) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26388 = (function (f,blockable,meta26389){
this.f = f;
this.blockable = blockable;
this.meta26389 = meta26389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26390,meta26389__$1){
var self__ = this;
var _26390__$1 = this;
return (new cljs.core.async.t_cljs$core$async26388(self__.f,self__.blockable,meta26389__$1));
});

cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26390){
var self__ = this;
var _26390__$1 = this;
return self__.meta26389;
});

cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26389","meta26389",-1896849457,null)], null);
});

cljs.core.async.t_cljs$core$async26388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26388";

cljs.core.async.t_cljs$core$async26388.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async26388");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26388.
 */
cljs.core.async.__GT_t_cljs$core$async26388 = (function cljs$core$async$__GT_t_cljs$core$async26388(f__$1,blockable__$1,meta26389){
return (new cljs.core.async.t_cljs$core$async26388(f__$1,blockable__$1,meta26389));
});

}

return (new cljs.core.async.t_cljs$core$async26388(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26444 = arguments.length;
switch (G__26444) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26452 = arguments.length;
switch (G__26452) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26457 = arguments.length;
switch (G__26457) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26475 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26475) : fn1.call(null,val_26475));
} else {
cljs.core.async.impl.dispatch.run(((function (val_26475,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26475) : fn1.call(null,val_26475));
});})(val_26475,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26483 = arguments.length;
switch (G__26483) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___26497 = n;
var x_26498 = (0);
while(true){
if((x_26498 < n__4408__auto___26497)){
(a[x_26498] = (0));

var G__26499 = (x_26498 + (1));
x_26498 = G__26499;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__26500 = (i + (1));
i = G__26500;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26501 = (function (flag,meta26502){
this.flag = flag;
this.meta26502 = meta26502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26503,meta26502__$1){
var self__ = this;
var _26503__$1 = this;
return (new cljs.core.async.t_cljs$core$async26501(self__.flag,meta26502__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26503){
var self__ = this;
var _26503__$1 = this;
return self__.meta26502;
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26502","meta26502",-1268923739,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26501";

cljs.core.async.t_cljs$core$async26501.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async26501");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26501.
 */
cljs.core.async.__GT_t_cljs$core$async26501 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26501(flag__$1,meta26502){
return (new cljs.core.async.t_cljs$core$async26501(flag__$1,meta26502));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26501(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26516 = (function (flag,cb,meta26517){
this.flag = flag;
this.cb = cb;
this.meta26517 = meta26517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26518,meta26517__$1){
var self__ = this;
var _26518__$1 = this;
return (new cljs.core.async.t_cljs$core$async26516(self__.flag,self__.cb,meta26517__$1));
});

cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26518){
var self__ = this;
var _26518__$1 = this;
return self__.meta26517;
});

cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26517","meta26517",-2084941309,null)], null);
});

cljs.core.async.t_cljs$core$async26516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26516";

cljs.core.async.t_cljs$core$async26516.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async26516");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26516.
 */
cljs.core.async.__GT_t_cljs$core$async26516 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26516(flag__$1,cb__$1,meta26517){
return (new cljs.core.async.t_cljs$core$async26516(flag__$1,cb__$1,meta26517));
});

}

return (new cljs.core.async.t_cljs$core$async26516(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26523_SHARP_){
var G__26530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26523_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26530) : fret.call(null,G__26530));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26524_SHARP_){
var G__26531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26524_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26531) : fret.call(null,G__26531));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26540 = (i + (1));
i = G__26540;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26554 = arguments.length;
var i__4532__auto___26555 = (0);
while(true){
if((i__4532__auto___26555 < len__4531__auto___26554)){
args__4534__auto__.push((arguments[i__4532__auto___26555]));

var G__26557 = (i__4532__auto___26555 + (1));
i__4532__auto___26555 = G__26557;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26551){
var map__26552 = p__26551;
var map__26552__$1 = ((((!((map__26552 == null)))?(((((map__26552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26552):map__26552);
var opts = map__26552__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26545){
var G__26546 = cljs.core.first(seq26545);
var seq26545__$1 = cljs.core.next(seq26545);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26546,seq26545__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26570 = arguments.length;
switch (G__26570) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26242__auto___26662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___26662){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___26662){
return (function (state_26636){
var state_val_26637 = (state_26636[(1)]);
if((state_val_26637 === (7))){
var inst_26630 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26640_26664 = state_26636__$1;
(statearr_26640_26664[(2)] = inst_26630);

(statearr_26640_26664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (1))){
var state_26636__$1 = state_26636;
var statearr_26641_26665 = state_26636__$1;
(statearr_26641_26665[(2)] = null);

(statearr_26641_26665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (4))){
var inst_26599 = (state_26636[(7)]);
var inst_26599__$1 = (state_26636[(2)]);
var inst_26600 = (inst_26599__$1 == null);
var state_26636__$1 = (function (){var statearr_26642 = state_26636;
(statearr_26642[(7)] = inst_26599__$1);

return statearr_26642;
})();
if(cljs.core.truth_(inst_26600)){
var statearr_26643_26669 = state_26636__$1;
(statearr_26643_26669[(1)] = (5));

} else {
var statearr_26644_26670 = state_26636__$1;
(statearr_26644_26670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (13))){
var state_26636__$1 = state_26636;
var statearr_26645_26671 = state_26636__$1;
(statearr_26645_26671[(2)] = null);

(statearr_26645_26671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (6))){
var inst_26599 = (state_26636[(7)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26636__$1,(11),to,inst_26599);
} else {
if((state_val_26637 === (3))){
var inst_26632 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26636__$1,inst_26632);
} else {
if((state_val_26637 === (12))){
var state_26636__$1 = state_26636;
var statearr_26647_26672 = state_26636__$1;
(statearr_26647_26672[(2)] = null);

(statearr_26647_26672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (2))){
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26636__$1,(4),from);
} else {
if((state_val_26637 === (11))){
var inst_26610 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
if(cljs.core.truth_(inst_26610)){
var statearr_26648_26673 = state_26636__$1;
(statearr_26648_26673[(1)] = (12));

} else {
var statearr_26650_26674 = state_26636__$1;
(statearr_26650_26674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (9))){
var state_26636__$1 = state_26636;
var statearr_26651_26675 = state_26636__$1;
(statearr_26651_26675[(2)] = null);

(statearr_26651_26675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (5))){
var state_26636__$1 = state_26636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26652_26676 = state_26636__$1;
(statearr_26652_26676[(1)] = (8));

} else {
var statearr_26653_26677 = state_26636__$1;
(statearr_26653_26677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (14))){
var inst_26628 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26654_26678 = state_26636__$1;
(statearr_26654_26678[(2)] = inst_26628);

(statearr_26654_26678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (10))){
var inst_26607 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26655_26679 = state_26636__$1;
(statearr_26655_26679[(2)] = inst_26607);

(statearr_26655_26679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (8))){
var inst_26604 = cljs.core.async.close_BANG_(to);
var state_26636__$1 = state_26636;
var statearr_26656_26680 = state_26636__$1;
(statearr_26656_26680[(2)] = inst_26604);

(statearr_26656_26680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___26662))
;
return ((function (switch__25864__auto__,c__26242__auto___26662){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_26636){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26636);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__25868__auto__ = e26658;
var statearr_26659_26681 = state_26636;
(statearr_26659_26681[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26683 = state_26636;
state_26636 = G__26683;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_26636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_26636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___26662))
})();
var state__26244__auto__ = (function (){var statearr_26660 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26660[(6)] = c__26242__auto___26662);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___26662))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__26684){
var vec__26685 = p__26684;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26685,(1),null);
var job = vec__26685;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26242__auto___26909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results){
return (function (state_26692){
var state_val_26693 = (state_26692[(1)]);
if((state_val_26693 === (1))){
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26692__$1,(2),res,v);
} else {
if((state_val_26693 === (2))){
var inst_26689 = (state_26692[(2)]);
var inst_26690 = cljs.core.async.close_BANG_(res);
var state_26692__$1 = (function (){var statearr_26698 = state_26692;
(statearr_26698[(7)] = inst_26689);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26692__$1,inst_26690);
} else {
return null;
}
}
});})(c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results))
;
return ((function (switch__25864__auto__,c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_26705 = [null,null,null,null,null,null,null,null];
(statearr_26705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__);

(statearr_26705[(1)] = (1));

return statearr_26705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1 = (function (state_26692){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26692);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26706){if((e26706 instanceof Object)){
var ex__25868__auto__ = e26706;
var statearr_26707_26916 = state_26692;
(statearr_26707_26916[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26692;
state_26692 = G__26918;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = function(state_26692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1.call(this,state_26692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results))
})();
var state__26244__auto__ = (function (){var statearr_26708 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26708[(6)] = c__26242__auto___26909);

return statearr_26708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___26909,res,vec__26685,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26709){
var vec__26710 = p__26709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26710,(1),null);
var job = vec__26710;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___26919 = n;
var __26920 = (0);
while(true){
if((__26920 < n__4408__auto___26919)){
var G__26720_26921 = type;
var G__26720_26922__$1 = (((G__26720_26921 instanceof cljs.core.Keyword))?G__26720_26921.fqn:null);
switch (G__26720_26922__$1) {
case "compute":
var c__26242__auto___26924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26920,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (__26920,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function (state_26733){
var state_val_26734 = (state_26733[(1)]);
if((state_val_26734 === (1))){
var state_26733__$1 = state_26733;
var statearr_26735_26929 = state_26733__$1;
(statearr_26735_26929[(2)] = null);

(statearr_26735_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (2))){
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26733__$1,(4),jobs);
} else {
if((state_val_26734 === (3))){
var inst_26731 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26733__$1,inst_26731);
} else {
if((state_val_26734 === (4))){
var inst_26723 = (state_26733[(2)]);
var inst_26724 = process(inst_26723);
var state_26733__$1 = state_26733;
if(cljs.core.truth_(inst_26724)){
var statearr_26736_26932 = state_26733__$1;
(statearr_26736_26932[(1)] = (5));

} else {
var statearr_26737_26933 = state_26733__$1;
(statearr_26737_26933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (5))){
var state_26733__$1 = state_26733;
var statearr_26739_26934 = state_26733__$1;
(statearr_26739_26934[(2)] = null);

(statearr_26739_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (6))){
var state_26733__$1 = state_26733;
var statearr_26742_26935 = state_26733__$1;
(statearr_26742_26935[(2)] = null);

(statearr_26742_26935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (7))){
var inst_26729 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26744_26936 = state_26733__$1;
(statearr_26744_26936[(2)] = inst_26729);

(statearr_26744_26936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26920,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
;
return ((function (__26920,switch__25864__auto__,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_26745 = [null,null,null,null,null,null,null];
(statearr_26745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__);

(statearr_26745[(1)] = (1));

return statearr_26745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1 = (function (state_26733){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26733);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26746){if((e26746 instanceof Object)){
var ex__25868__auto__ = e26746;
var statearr_26747_26941 = state_26733;
(statearr_26747_26941[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26942 = state_26733;
state_26733 = G__26942;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = function(state_26733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1.call(this,state_26733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__;
})()
;})(__26920,switch__25864__auto__,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
})();
var state__26244__auto__ = (function (){var statearr_26748 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26748[(6)] = c__26242__auto___26924);

return statearr_26748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(__26920,c__26242__auto___26924,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
);


break;
case "async":
var c__26242__auto___26943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26920,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (__26920,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function (state_26762){
var state_val_26763 = (state_26762[(1)]);
if((state_val_26763 === (1))){
var state_26762__$1 = state_26762;
var statearr_26766_26947 = state_26762__$1;
(statearr_26766_26947[(2)] = null);

(statearr_26766_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (2))){
var state_26762__$1 = state_26762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26762__$1,(4),jobs);
} else {
if((state_val_26763 === (3))){
var inst_26760 = (state_26762[(2)]);
var state_26762__$1 = state_26762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26762__$1,inst_26760);
} else {
if((state_val_26763 === (4))){
var inst_26751 = (state_26762[(2)]);
var inst_26753 = async(inst_26751);
var state_26762__$1 = state_26762;
if(cljs.core.truth_(inst_26753)){
var statearr_26767_26950 = state_26762__$1;
(statearr_26767_26950[(1)] = (5));

} else {
var statearr_26768_26951 = state_26762__$1;
(statearr_26768_26951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (5))){
var state_26762__$1 = state_26762;
var statearr_26769_26952 = state_26762__$1;
(statearr_26769_26952[(2)] = null);

(statearr_26769_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (6))){
var state_26762__$1 = state_26762;
var statearr_26770_26955 = state_26762__$1;
(statearr_26770_26955[(2)] = null);

(statearr_26770_26955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (7))){
var inst_26758 = (state_26762[(2)]);
var state_26762__$1 = state_26762;
var statearr_26771_26956 = state_26762__$1;
(statearr_26771_26956[(2)] = inst_26758);

(statearr_26771_26956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26920,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
;
return ((function (__26920,switch__25864__auto__,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_26772 = [null,null,null,null,null,null,null];
(statearr_26772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__);

(statearr_26772[(1)] = (1));

return statearr_26772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1 = (function (state_26762){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26762);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__25868__auto__ = e26774;
var statearr_26775_26963 = state_26762;
(statearr_26775_26963[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26964 = state_26762;
state_26762 = G__26964;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = function(state_26762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1.call(this,state_26762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__;
})()
;})(__26920,switch__25864__auto__,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
})();
var state__26244__auto__ = (function (){var statearr_26780 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26780[(6)] = c__26242__auto___26943);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(__26920,c__26242__auto___26943,G__26720_26921,G__26720_26922__$1,n__4408__auto___26919,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26720_26922__$1)].join('')));

}

var G__26965 = (__26920 + (1));
__26920 = G__26965;
continue;
} else {
}
break;
}

var c__26242__auto___26966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___26966,jobs,results,process,async){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___26966,jobs,results,process,async){
return (function (state_26807){
var state_val_26808 = (state_26807[(1)]);
if((state_val_26808 === (1))){
var state_26807__$1 = state_26807;
var statearr_26809_26968 = state_26807__$1;
(statearr_26809_26968[(2)] = null);

(statearr_26809_26968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (2))){
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26807__$1,(4),from);
} else {
if((state_val_26808 === (3))){
var inst_26805 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26807__$1,inst_26805);
} else {
if((state_val_26808 === (4))){
var inst_26787 = (state_26807[(7)]);
var inst_26787__$1 = (state_26807[(2)]);
var inst_26788 = (inst_26787__$1 == null);
var state_26807__$1 = (function (){var statearr_26810 = state_26807;
(statearr_26810[(7)] = inst_26787__$1);

return statearr_26810;
})();
if(cljs.core.truth_(inst_26788)){
var statearr_26811_26972 = state_26807__$1;
(statearr_26811_26972[(1)] = (5));

} else {
var statearr_26812_26973 = state_26807__$1;
(statearr_26812_26973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (5))){
var inst_26791 = cljs.core.async.close_BANG_(jobs);
var state_26807__$1 = state_26807;
var statearr_26813_26977 = state_26807__$1;
(statearr_26813_26977[(2)] = inst_26791);

(statearr_26813_26977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (6))){
var inst_26787 = (state_26807[(7)]);
var inst_26793 = (state_26807[(8)]);
var inst_26793__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26795 = [inst_26787,inst_26793__$1];
var inst_26796 = (new cljs.core.PersistentVector(null,2,(5),inst_26794,inst_26795,null));
var state_26807__$1 = (function (){var statearr_26814 = state_26807;
(statearr_26814[(8)] = inst_26793__$1);

return statearr_26814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26807__$1,(8),jobs,inst_26796);
} else {
if((state_val_26808 === (7))){
var inst_26803 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26815_26981 = state_26807__$1;
(statearr_26815_26981[(2)] = inst_26803);

(statearr_26815_26981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (8))){
var inst_26793 = (state_26807[(8)]);
var inst_26798 = (state_26807[(2)]);
var state_26807__$1 = (function (){var statearr_26817 = state_26807;
(statearr_26817[(9)] = inst_26798);

return statearr_26817;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26807__$1,(9),results,inst_26793);
} else {
if((state_val_26808 === (9))){
var inst_26800 = (state_26807[(2)]);
var state_26807__$1 = (function (){var statearr_26821 = state_26807;
(statearr_26821[(10)] = inst_26800);

return statearr_26821;
})();
var statearr_26822_26983 = state_26807__$1;
(statearr_26822_26983[(2)] = null);

(statearr_26822_26983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___26966,jobs,results,process,async))
;
return ((function (switch__25864__auto__,c__26242__auto___26966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_26823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__);

(statearr_26823[(1)] = (1));

return statearr_26823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1 = (function (state_26807){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26807);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26825){if((e26825 instanceof Object)){
var ex__25868__auto__ = e26825;
var statearr_26827_26988 = state_26807;
(statearr_26827_26988[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26991 = state_26807;
state_26807 = G__26991;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = function(state_26807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1.call(this,state_26807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___26966,jobs,results,process,async))
})();
var state__26244__auto__ = (function (){var statearr_26828 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26828[(6)] = c__26242__auto___26966);

return statearr_26828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___26966,jobs,results,process,async))
);


var c__26242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto__,jobs,results,process,async){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto__,jobs,results,process,async){
return (function (state_26873){
var state_val_26874 = (state_26873[(1)]);
if((state_val_26874 === (7))){
var inst_26863 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26876_26996 = state_26873__$1;
(statearr_26876_26996[(2)] = inst_26863);

(statearr_26876_26996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (20))){
var state_26873__$1 = state_26873;
var statearr_26877_26997 = state_26873__$1;
(statearr_26877_26997[(2)] = null);

(statearr_26877_26997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (1))){
var state_26873__$1 = state_26873;
var statearr_26878_27000 = state_26873__$1;
(statearr_26878_27000[(2)] = null);

(statearr_26878_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (4))){
var inst_26831 = (state_26873[(7)]);
var inst_26831__$1 = (state_26873[(2)]);
var inst_26832 = (inst_26831__$1 == null);
var state_26873__$1 = (function (){var statearr_26880 = state_26873;
(statearr_26880[(7)] = inst_26831__$1);

return statearr_26880;
})();
if(cljs.core.truth_(inst_26832)){
var statearr_26882_27005 = state_26873__$1;
(statearr_26882_27005[(1)] = (5));

} else {
var statearr_26884_27006 = state_26873__$1;
(statearr_26884_27006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (15))){
var inst_26845 = (state_26873[(8)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26873__$1,(18),to,inst_26845);
} else {
if((state_val_26874 === (21))){
var inst_26858 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26886_27011 = state_26873__$1;
(statearr_26886_27011[(2)] = inst_26858);

(statearr_26886_27011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (13))){
var inst_26860 = (state_26873[(2)]);
var state_26873__$1 = (function (){var statearr_26887 = state_26873;
(statearr_26887[(9)] = inst_26860);

return statearr_26887;
})();
var statearr_26888_27014 = state_26873__$1;
(statearr_26888_27014[(2)] = null);

(statearr_26888_27014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (6))){
var inst_26831 = (state_26873[(7)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26873__$1,(11),inst_26831);
} else {
if((state_val_26874 === (17))){
var inst_26853 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
if(cljs.core.truth_(inst_26853)){
var statearr_26889_27015 = state_26873__$1;
(statearr_26889_27015[(1)] = (19));

} else {
var statearr_26890_27016 = state_26873__$1;
(statearr_26890_27016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (3))){
var inst_26865 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26873__$1,inst_26865);
} else {
if((state_val_26874 === (12))){
var inst_26842 = (state_26873[(10)]);
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26873__$1,(14),inst_26842);
} else {
if((state_val_26874 === (2))){
var state_26873__$1 = state_26873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26873__$1,(4),results);
} else {
if((state_val_26874 === (19))){
var state_26873__$1 = state_26873;
var statearr_26891_27017 = state_26873__$1;
(statearr_26891_27017[(2)] = null);

(statearr_26891_27017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (11))){
var inst_26842 = (state_26873[(2)]);
var state_26873__$1 = (function (){var statearr_26892 = state_26873;
(statearr_26892[(10)] = inst_26842);

return statearr_26892;
})();
var statearr_26893_27018 = state_26873__$1;
(statearr_26893_27018[(2)] = null);

(statearr_26893_27018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (9))){
var state_26873__$1 = state_26873;
var statearr_26894_27019 = state_26873__$1;
(statearr_26894_27019[(2)] = null);

(statearr_26894_27019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (5))){
var state_26873__$1 = state_26873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26895_27020 = state_26873__$1;
(statearr_26895_27020[(1)] = (8));

} else {
var statearr_26896_27021 = state_26873__$1;
(statearr_26896_27021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (14))){
var inst_26847 = (state_26873[(11)]);
var inst_26845 = (state_26873[(8)]);
var inst_26845__$1 = (state_26873[(2)]);
var inst_26846 = (inst_26845__$1 == null);
var inst_26847__$1 = cljs.core.not(inst_26846);
var state_26873__$1 = (function (){var statearr_26897 = state_26873;
(statearr_26897[(11)] = inst_26847__$1);

(statearr_26897[(8)] = inst_26845__$1);

return statearr_26897;
})();
if(inst_26847__$1){
var statearr_26898_27024 = state_26873__$1;
(statearr_26898_27024[(1)] = (15));

} else {
var statearr_26899_27026 = state_26873__$1;
(statearr_26899_27026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (16))){
var inst_26847 = (state_26873[(11)]);
var state_26873__$1 = state_26873;
var statearr_26900_27027 = state_26873__$1;
(statearr_26900_27027[(2)] = inst_26847);

(statearr_26900_27027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (10))){
var inst_26839 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26901_27028 = state_26873__$1;
(statearr_26901_27028[(2)] = inst_26839);

(statearr_26901_27028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (18))){
var inst_26850 = (state_26873[(2)]);
var state_26873__$1 = state_26873;
var statearr_26902_27029 = state_26873__$1;
(statearr_26902_27029[(2)] = inst_26850);

(statearr_26902_27029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26874 === (8))){
var inst_26836 = cljs.core.async.close_BANG_(to);
var state_26873__$1 = state_26873;
var statearr_26903_27030 = state_26873__$1;
(statearr_26903_27030[(2)] = inst_26836);

(statearr_26903_27030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto__,jobs,results,process,async))
;
return ((function (switch__25864__auto__,c__26242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_26904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__);

(statearr_26904[(1)] = (1));

return statearr_26904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1 = (function (state_26873){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_26873);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e26905){if((e26905 instanceof Object)){
var ex__25868__auto__ = e26905;
var statearr_26906_27031 = state_26873;
(statearr_26906_27031[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27032 = state_26873;
state_26873 = G__27032;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__ = function(state_26873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1.call(this,state_26873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto__,jobs,results,process,async))
})();
var state__26244__auto__ = (function (){var statearr_26908 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_26908[(6)] = c__26242__auto__);

return statearr_26908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto__,jobs,results,process,async))
);

return c__26242__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27034 = arguments.length;
switch (G__27034) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27043 = arguments.length;
switch (G__27043) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27056 = arguments.length;
switch (G__27056) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26242__auto___27109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___27109,tc,fc){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___27109,tc,fc){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (7))){
var inst_27082 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27088_27116 = state_27086__$1;
(statearr_27088_27116[(2)] = inst_27082);

(statearr_27088_27116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (1))){
var state_27086__$1 = state_27086;
var statearr_27089_27117 = state_27086__$1;
(statearr_27089_27117[(2)] = null);

(statearr_27089_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (4))){
var inst_27063 = (state_27086[(7)]);
var inst_27063__$1 = (state_27086[(2)]);
var inst_27064 = (inst_27063__$1 == null);
var state_27086__$1 = (function (){var statearr_27090 = state_27086;
(statearr_27090[(7)] = inst_27063__$1);

return statearr_27090;
})();
if(cljs.core.truth_(inst_27064)){
var statearr_27091_27121 = state_27086__$1;
(statearr_27091_27121[(1)] = (5));

} else {
var statearr_27092_27122 = state_27086__$1;
(statearr_27092_27122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (13))){
var state_27086__$1 = state_27086;
var statearr_27093_27129 = state_27086__$1;
(statearr_27093_27129[(2)] = null);

(statearr_27093_27129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (6))){
var inst_27063 = (state_27086[(7)]);
var inst_27069 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27063) : p.call(null,inst_27063));
var state_27086__$1 = state_27086;
if(cljs.core.truth_(inst_27069)){
var statearr_27094_27131 = state_27086__$1;
(statearr_27094_27131[(1)] = (9));

} else {
var statearr_27095_27132 = state_27086__$1;
(statearr_27095_27132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (3))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27086__$1,inst_27084);
} else {
if((state_val_27087 === (12))){
var state_27086__$1 = state_27086;
var statearr_27096_27133 = state_27086__$1;
(statearr_27096_27133[(2)] = null);

(statearr_27096_27133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (2))){
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27086__$1,(4),ch);
} else {
if((state_val_27087 === (11))){
var inst_27063 = (state_27086[(7)]);
var inst_27073 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27086__$1,(8),inst_27073,inst_27063);
} else {
if((state_val_27087 === (9))){
var state_27086__$1 = state_27086;
var statearr_27097_27134 = state_27086__$1;
(statearr_27097_27134[(2)] = tc);

(statearr_27097_27134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (5))){
var inst_27066 = cljs.core.async.close_BANG_(tc);
var inst_27067 = cljs.core.async.close_BANG_(fc);
var state_27086__$1 = (function (){var statearr_27098 = state_27086;
(statearr_27098[(8)] = inst_27066);

return statearr_27098;
})();
var statearr_27099_27136 = state_27086__$1;
(statearr_27099_27136[(2)] = inst_27067);

(statearr_27099_27136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (14))){
var inst_27080 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27100_27137 = state_27086__$1;
(statearr_27100_27137[(2)] = inst_27080);

(statearr_27100_27137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (10))){
var state_27086__$1 = state_27086;
var statearr_27101_27138 = state_27086__$1;
(statearr_27101_27138[(2)] = fc);

(statearr_27101_27138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (8))){
var inst_27075 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
if(cljs.core.truth_(inst_27075)){
var statearr_27102_27142 = state_27086__$1;
(statearr_27102_27142[(1)] = (12));

} else {
var statearr_27103_27143 = state_27086__$1;
(statearr_27103_27143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___27109,tc,fc))
;
return ((function (switch__25864__auto__,c__26242__auto___27109,tc,fc){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_27104 = [null,null,null,null,null,null,null,null,null];
(statearr_27104[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_27104[(1)] = (1));

return statearr_27104;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_27086){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_27086);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e27105){if((e27105 instanceof Object)){
var ex__25868__auto__ = e27105;
var statearr_27106_27153 = state_27086;
(statearr_27106_27153[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27154 = state_27086;
state_27086 = G__27154;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___27109,tc,fc))
})();
var state__26244__auto__ = (function (){var statearr_27107 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_27107[(6)] = c__26242__auto___27109);

return statearr_27107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___27109,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto__){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto__){
return (function (state_27180){
var state_val_27181 = (state_27180[(1)]);
if((state_val_27181 === (7))){
var inst_27176 = (state_27180[(2)]);
var state_27180__$1 = state_27180;
var statearr_27183_27231 = state_27180__$1;
(statearr_27183_27231[(2)] = inst_27176);

(statearr_27183_27231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (1))){
var inst_27159 = init;
var state_27180__$1 = (function (){var statearr_27184 = state_27180;
(statearr_27184[(7)] = inst_27159);

return statearr_27184;
})();
var statearr_27185_27234 = state_27180__$1;
(statearr_27185_27234[(2)] = null);

(statearr_27185_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (4))){
var inst_27162 = (state_27180[(8)]);
var inst_27162__$1 = (state_27180[(2)]);
var inst_27164 = (inst_27162__$1 == null);
var state_27180__$1 = (function (){var statearr_27188 = state_27180;
(statearr_27188[(8)] = inst_27162__$1);

return statearr_27188;
})();
if(cljs.core.truth_(inst_27164)){
var statearr_27195_27235 = state_27180__$1;
(statearr_27195_27235[(1)] = (5));

} else {
var statearr_27196_27240 = state_27180__$1;
(statearr_27196_27240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (6))){
var inst_27167 = (state_27180[(9)]);
var inst_27162 = (state_27180[(8)]);
var inst_27159 = (state_27180[(7)]);
var inst_27167__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27159,inst_27162) : f.call(null,inst_27159,inst_27162));
var inst_27168 = cljs.core.reduced_QMARK_(inst_27167__$1);
var state_27180__$1 = (function (){var statearr_27197 = state_27180;
(statearr_27197[(9)] = inst_27167__$1);

return statearr_27197;
})();
if(inst_27168){
var statearr_27198_27243 = state_27180__$1;
(statearr_27198_27243[(1)] = (8));

} else {
var statearr_27199_27244 = state_27180__$1;
(statearr_27199_27244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (3))){
var inst_27178 = (state_27180[(2)]);
var state_27180__$1 = state_27180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27180__$1,inst_27178);
} else {
if((state_val_27181 === (2))){
var state_27180__$1 = state_27180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27180__$1,(4),ch);
} else {
if((state_val_27181 === (9))){
var inst_27167 = (state_27180[(9)]);
var inst_27159 = inst_27167;
var state_27180__$1 = (function (){var statearr_27203 = state_27180;
(statearr_27203[(7)] = inst_27159);

return statearr_27203;
})();
var statearr_27205_27248 = state_27180__$1;
(statearr_27205_27248[(2)] = null);

(statearr_27205_27248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (5))){
var inst_27159 = (state_27180[(7)]);
var state_27180__$1 = state_27180;
var statearr_27206_27254 = state_27180__$1;
(statearr_27206_27254[(2)] = inst_27159);

(statearr_27206_27254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (10))){
var inst_27174 = (state_27180[(2)]);
var state_27180__$1 = state_27180;
var statearr_27209_27258 = state_27180__$1;
(statearr_27209_27258[(2)] = inst_27174);

(statearr_27209_27258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27181 === (8))){
var inst_27167 = (state_27180[(9)]);
var inst_27170 = cljs.core.deref(inst_27167);
var state_27180__$1 = state_27180;
var statearr_27210_27260 = state_27180__$1;
(statearr_27210_27260[(2)] = inst_27170);

(statearr_27210_27260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto__))
;
return ((function (switch__25864__auto__,c__26242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25865__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25865__auto____0 = (function (){
var statearr_27213 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27213[(0)] = cljs$core$async$reduce_$_state_machine__25865__auto__);

(statearr_27213[(1)] = (1));

return statearr_27213;
});
var cljs$core$async$reduce_$_state_machine__25865__auto____1 = (function (state_27180){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_27180);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__25868__auto__ = e27215;
var statearr_27222_27263 = state_27180;
(statearr_27222_27263[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27265 = state_27180;
state_27180 = G__27265;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25865__auto__ = function(state_27180){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25865__auto____1.call(this,state_27180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25865__auto____0;
cljs$core$async$reduce_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25865__auto____1;
return cljs$core$async$reduce_$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto__))
})();
var state__26244__auto__ = (function (){var statearr_27224 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_27224[(6)] = c__26242__auto__);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto__))
);

return c__26242__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto__,f__$1){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto__,f__$1){
return (function (state_27277){
var state_val_27278 = (state_27277[(1)]);
if((state_val_27278 === (1))){
var inst_27272 = cljs.core.async.reduce(f__$1,init,ch);
var state_27277__$1 = state_27277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27277__$1,(2),inst_27272);
} else {
if((state_val_27278 === (2))){
var inst_27274 = (state_27277[(2)]);
var inst_27275 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27274) : f__$1.call(null,inst_27274));
var state_27277__$1 = state_27277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27277__$1,inst_27275);
} else {
return null;
}
}
});})(c__26242__auto__,f__$1))
;
return ((function (switch__25864__auto__,c__26242__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25865__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25865__auto____0 = (function (){
var statearr_27284 = [null,null,null,null,null,null,null];
(statearr_27284[(0)] = cljs$core$async$transduce_$_state_machine__25865__auto__);

(statearr_27284[(1)] = (1));

return statearr_27284;
});
var cljs$core$async$transduce_$_state_machine__25865__auto____1 = (function (state_27277){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_27277);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e27287){if((e27287 instanceof Object)){
var ex__25868__auto__ = e27287;
var statearr_27291_27304 = state_27277;
(statearr_27291_27304[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27307 = state_27277;
state_27277 = G__27307;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25865__auto__ = function(state_27277){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25865__auto____1.call(this,state_27277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25865__auto____0;
cljs$core$async$transduce_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25865__auto____1;
return cljs$core$async$transduce_$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto__,f__$1))
})();
var state__26244__auto__ = (function (){var statearr_27292 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_27292[(6)] = c__26242__auto__);

return statearr_27292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto__,f__$1))
);

return c__26242__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27310 = arguments.length;
switch (G__27310) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto__){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto__){
return (function (state_27340){
var state_val_27341 = (state_27340[(1)]);
if((state_val_27341 === (7))){
var inst_27319 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27346_27391 = state_27340__$1;
(statearr_27346_27391[(2)] = inst_27319);

(statearr_27346_27391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (1))){
var inst_27313 = cljs.core.seq(coll);
var inst_27314 = inst_27313;
var state_27340__$1 = (function (){var statearr_27349 = state_27340;
(statearr_27349[(7)] = inst_27314);

return statearr_27349;
})();
var statearr_27350_27392 = state_27340__$1;
(statearr_27350_27392[(2)] = null);

(statearr_27350_27392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (4))){
var inst_27314 = (state_27340[(7)]);
var inst_27317 = cljs.core.first(inst_27314);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27340__$1,(7),ch,inst_27317);
} else {
if((state_val_27341 === (13))){
var inst_27331 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27353_27393 = state_27340__$1;
(statearr_27353_27393[(2)] = inst_27331);

(statearr_27353_27393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (6))){
var inst_27322 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
if(cljs.core.truth_(inst_27322)){
var statearr_27356_27394 = state_27340__$1;
(statearr_27356_27394[(1)] = (8));

} else {
var statearr_27357_27395 = state_27340__$1;
(statearr_27357_27395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (3))){
var inst_27335 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27340__$1,inst_27335);
} else {
if((state_val_27341 === (12))){
var state_27340__$1 = state_27340;
var statearr_27359_27397 = state_27340__$1;
(statearr_27359_27397[(2)] = null);

(statearr_27359_27397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (2))){
var inst_27314 = (state_27340[(7)]);
var state_27340__$1 = state_27340;
if(cljs.core.truth_(inst_27314)){
var statearr_27363_27402 = state_27340__$1;
(statearr_27363_27402[(1)] = (4));

} else {
var statearr_27364_27404 = state_27340__$1;
(statearr_27364_27404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (11))){
var inst_27328 = cljs.core.async.close_BANG_(ch);
var state_27340__$1 = state_27340;
var statearr_27366_27408 = state_27340__$1;
(statearr_27366_27408[(2)] = inst_27328);

(statearr_27366_27408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (9))){
var state_27340__$1 = state_27340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27368_27410 = state_27340__$1;
(statearr_27368_27410[(1)] = (11));

} else {
var statearr_27369_27414 = state_27340__$1;
(statearr_27369_27414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (5))){
var inst_27314 = (state_27340[(7)]);
var state_27340__$1 = state_27340;
var statearr_27371_27417 = state_27340__$1;
(statearr_27371_27417[(2)] = inst_27314);

(statearr_27371_27417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (10))){
var inst_27333 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27373_27418 = state_27340__$1;
(statearr_27373_27418[(2)] = inst_27333);

(statearr_27373_27418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (8))){
var inst_27314 = (state_27340[(7)]);
var inst_27324 = cljs.core.next(inst_27314);
var inst_27314__$1 = inst_27324;
var state_27340__$1 = (function (){var statearr_27374 = state_27340;
(statearr_27374[(7)] = inst_27314__$1);

return statearr_27374;
})();
var statearr_27375_27420 = state_27340__$1;
(statearr_27375_27420[(2)] = null);

(statearr_27375_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto__))
;
return ((function (switch__25864__auto__,c__26242__auto__){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null,null];
(statearr_27379[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_27340){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_27340);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__25868__auto__ = e27380;
var statearr_27381_27421 = state_27340;
(statearr_27381_27421[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27423 = state_27340;
state_27340 = G__27423;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_27340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_27340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto__))
})();
var state__26244__auto__ = (function (){var statearr_27383 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_27383[(6)] = c__26242__auto__);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto__))
);

return c__26242__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27458 = (function (ch,cs,meta27459){
this.ch = ch;
this.cs = cs;
this.meta27459 = meta27459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27460,meta27459__$1){
var self__ = this;
var _27460__$1 = this;
return (new cljs.core.async.t_cljs$core$async27458(self__.ch,self__.cs,meta27459__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27460){
var self__ = this;
var _27460__$1 = this;
return self__.meta27459;
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27459","meta27459",984069104,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27458";

cljs.core.async.t_cljs$core$async27458.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async27458");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27458.
 */
cljs.core.async.__GT_t_cljs$core$async27458 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27458(ch__$1,cs__$1,meta27459){
return (new cljs.core.async.t_cljs$core$async27458(ch__$1,cs__$1,meta27459));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27458(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26242__auto___27791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___27791,cs,m,dchan,dctr,done){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___27791,cs,m,dchan,dctr,done){
return (function (state_27634){
var state_val_27635 = (state_27634[(1)]);
if((state_val_27635 === (7))){
var inst_27625 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27640_27795 = state_27634__$1;
(statearr_27640_27795[(2)] = inst_27625);

(statearr_27640_27795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (20))){
var inst_27510 = (state_27634[(7)]);
var inst_27526 = cljs.core.first(inst_27510);
var inst_27527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27526,(0),null);
var inst_27528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27526,(1),null);
var state_27634__$1 = (function (){var statearr_27643 = state_27634;
(statearr_27643[(8)] = inst_27527);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27528)){
var statearr_27644_27797 = state_27634__$1;
(statearr_27644_27797[(1)] = (22));

} else {
var statearr_27645_27798 = state_27634__$1;
(statearr_27645_27798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (27))){
var inst_27558 = (state_27634[(9)]);
var inst_27476 = (state_27634[(10)]);
var inst_27560 = (state_27634[(11)]);
var inst_27566 = (state_27634[(12)]);
var inst_27566__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27558,inst_27560);
var inst_27567 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27566__$1,inst_27476,done);
var state_27634__$1 = (function (){var statearr_27646 = state_27634;
(statearr_27646[(12)] = inst_27566__$1);

return statearr_27646;
})();
if(cljs.core.truth_(inst_27567)){
var statearr_27647_27800 = state_27634__$1;
(statearr_27647_27800[(1)] = (30));

} else {
var statearr_27650_27802 = state_27634__$1;
(statearr_27650_27802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (1))){
var state_27634__$1 = state_27634;
var statearr_27651_27803 = state_27634__$1;
(statearr_27651_27803[(2)] = null);

(statearr_27651_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (24))){
var inst_27510 = (state_27634[(7)]);
var inst_27533 = (state_27634[(2)]);
var inst_27534 = cljs.core.next(inst_27510);
var inst_27486 = inst_27534;
var inst_27487 = null;
var inst_27488 = (0);
var inst_27489 = (0);
var state_27634__$1 = (function (){var statearr_27653 = state_27634;
(statearr_27653[(13)] = inst_27488);

(statearr_27653[(14)] = inst_27489);

(statearr_27653[(15)] = inst_27533);

(statearr_27653[(16)] = inst_27487);

(statearr_27653[(17)] = inst_27486);

return statearr_27653;
})();
var statearr_27654_27804 = state_27634__$1;
(statearr_27654_27804[(2)] = null);

(statearr_27654_27804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (39))){
var state_27634__$1 = state_27634;
var statearr_27660_27806 = state_27634__$1;
(statearr_27660_27806[(2)] = null);

(statearr_27660_27806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (4))){
var inst_27476 = (state_27634[(10)]);
var inst_27476__$1 = (state_27634[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var state_27634__$1 = (function (){var statearr_27661 = state_27634;
(statearr_27661[(10)] = inst_27476__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27662_27810 = state_27634__$1;
(statearr_27662_27810[(1)] = (5));

} else {
var statearr_27663_27811 = state_27634__$1;
(statearr_27663_27811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (15))){
var inst_27488 = (state_27634[(13)]);
var inst_27489 = (state_27634[(14)]);
var inst_27487 = (state_27634[(16)]);
var inst_27486 = (state_27634[(17)]);
var inst_27506 = (state_27634[(2)]);
var inst_27507 = (inst_27489 + (1));
var tmp27655 = inst_27488;
var tmp27656 = inst_27487;
var tmp27657 = inst_27486;
var inst_27486__$1 = tmp27657;
var inst_27487__$1 = tmp27656;
var inst_27488__$1 = tmp27655;
var inst_27489__$1 = inst_27507;
var state_27634__$1 = (function (){var statearr_27667 = state_27634;
(statearr_27667[(13)] = inst_27488__$1);

(statearr_27667[(18)] = inst_27506);

(statearr_27667[(14)] = inst_27489__$1);

(statearr_27667[(16)] = inst_27487__$1);

(statearr_27667[(17)] = inst_27486__$1);

return statearr_27667;
})();
var statearr_27669_27812 = state_27634__$1;
(statearr_27669_27812[(2)] = null);

(statearr_27669_27812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (21))){
var inst_27537 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27675_27813 = state_27634__$1;
(statearr_27675_27813[(2)] = inst_27537);

(statearr_27675_27813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (31))){
var inst_27566 = (state_27634[(12)]);
var inst_27572 = done(null);
var inst_27573 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27566);
var state_27634__$1 = (function (){var statearr_27678 = state_27634;
(statearr_27678[(19)] = inst_27572);

return statearr_27678;
})();
var statearr_27679_27816 = state_27634__$1;
(statearr_27679_27816[(2)] = inst_27573);

(statearr_27679_27816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (32))){
var inst_27558 = (state_27634[(9)]);
var inst_27559 = (state_27634[(20)]);
var inst_27560 = (state_27634[(11)]);
var inst_27557 = (state_27634[(21)]);
var inst_27575 = (state_27634[(2)]);
var inst_27576 = (inst_27560 + (1));
var tmp27670 = inst_27558;
var tmp27671 = inst_27559;
var tmp27672 = inst_27557;
var inst_27557__$1 = tmp27672;
var inst_27558__$1 = tmp27670;
var inst_27559__$1 = tmp27671;
var inst_27560__$1 = inst_27576;
var state_27634__$1 = (function (){var statearr_27683 = state_27634;
(statearr_27683[(9)] = inst_27558__$1);

(statearr_27683[(20)] = inst_27559__$1);

(statearr_27683[(11)] = inst_27560__$1);

(statearr_27683[(21)] = inst_27557__$1);

(statearr_27683[(22)] = inst_27575);

return statearr_27683;
})();
var statearr_27684_27821 = state_27634__$1;
(statearr_27684_27821[(2)] = null);

(statearr_27684_27821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (40))){
var inst_27591 = (state_27634[(23)]);
var inst_27595 = done(null);
var inst_27596 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27591);
var state_27634__$1 = (function (){var statearr_27685 = state_27634;
(statearr_27685[(24)] = inst_27595);

return statearr_27685;
})();
var statearr_27686_27824 = state_27634__$1;
(statearr_27686_27824[(2)] = inst_27596);

(statearr_27686_27824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (33))){
var inst_27582 = (state_27634[(25)]);
var inst_27584 = cljs.core.chunked_seq_QMARK_(inst_27582);
var state_27634__$1 = state_27634;
if(inst_27584){
var statearr_27687_27827 = state_27634__$1;
(statearr_27687_27827[(1)] = (36));

} else {
var statearr_27688_27828 = state_27634__$1;
(statearr_27688_27828[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (13))){
var inst_27499 = (state_27634[(26)]);
var inst_27503 = cljs.core.async.close_BANG_(inst_27499);
var state_27634__$1 = state_27634;
var statearr_27689_27831 = state_27634__$1;
(statearr_27689_27831[(2)] = inst_27503);

(statearr_27689_27831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (22))){
var inst_27527 = (state_27634[(8)]);
var inst_27530 = cljs.core.async.close_BANG_(inst_27527);
var state_27634__$1 = state_27634;
var statearr_27691_27832 = state_27634__$1;
(statearr_27691_27832[(2)] = inst_27530);

(statearr_27691_27832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (36))){
var inst_27582 = (state_27634[(25)]);
var inst_27586 = cljs.core.chunk_first(inst_27582);
var inst_27587 = cljs.core.chunk_rest(inst_27582);
var inst_27588 = cljs.core.count(inst_27586);
var inst_27557 = inst_27587;
var inst_27558 = inst_27586;
var inst_27559 = inst_27588;
var inst_27560 = (0);
var state_27634__$1 = (function (){var statearr_27694 = state_27634;
(statearr_27694[(9)] = inst_27558);

(statearr_27694[(20)] = inst_27559);

(statearr_27694[(11)] = inst_27560);

(statearr_27694[(21)] = inst_27557);

return statearr_27694;
})();
var statearr_27695_27837 = state_27634__$1;
(statearr_27695_27837[(2)] = null);

(statearr_27695_27837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (41))){
var inst_27582 = (state_27634[(25)]);
var inst_27600 = (state_27634[(2)]);
var inst_27601 = cljs.core.next(inst_27582);
var inst_27557 = inst_27601;
var inst_27558 = null;
var inst_27559 = (0);
var inst_27560 = (0);
var state_27634__$1 = (function (){var statearr_27697 = state_27634;
(statearr_27697[(9)] = inst_27558);

(statearr_27697[(20)] = inst_27559);

(statearr_27697[(27)] = inst_27600);

(statearr_27697[(11)] = inst_27560);

(statearr_27697[(21)] = inst_27557);

return statearr_27697;
})();
var statearr_27698_27838 = state_27634__$1;
(statearr_27698_27838[(2)] = null);

(statearr_27698_27838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (43))){
var state_27634__$1 = state_27634;
var statearr_27699_27839 = state_27634__$1;
(statearr_27699_27839[(2)] = null);

(statearr_27699_27839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (29))){
var inst_27611 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27702_27840 = state_27634__$1;
(statearr_27702_27840[(2)] = inst_27611);

(statearr_27702_27840[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (44))){
var inst_27620 = (state_27634[(2)]);
var state_27634__$1 = (function (){var statearr_27707 = state_27634;
(statearr_27707[(28)] = inst_27620);

return statearr_27707;
})();
var statearr_27709_27841 = state_27634__$1;
(statearr_27709_27841[(2)] = null);

(statearr_27709_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (6))){
var inst_27547 = (state_27634[(29)]);
var inst_27546 = cljs.core.deref(cs);
var inst_27547__$1 = cljs.core.keys(inst_27546);
var inst_27548 = cljs.core.count(inst_27547__$1);
var inst_27549 = cljs.core.reset_BANG_(dctr,inst_27548);
var inst_27556 = cljs.core.seq(inst_27547__$1);
var inst_27557 = inst_27556;
var inst_27558 = null;
var inst_27559 = (0);
var inst_27560 = (0);
var state_27634__$1 = (function (){var statearr_27712 = state_27634;
(statearr_27712[(30)] = inst_27549);

(statearr_27712[(9)] = inst_27558);

(statearr_27712[(29)] = inst_27547__$1);

(statearr_27712[(20)] = inst_27559);

(statearr_27712[(11)] = inst_27560);

(statearr_27712[(21)] = inst_27557);

return statearr_27712;
})();
var statearr_27713_27843 = state_27634__$1;
(statearr_27713_27843[(2)] = null);

(statearr_27713_27843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (28))){
var inst_27582 = (state_27634[(25)]);
var inst_27557 = (state_27634[(21)]);
var inst_27582__$1 = cljs.core.seq(inst_27557);
var state_27634__$1 = (function (){var statearr_27717 = state_27634;
(statearr_27717[(25)] = inst_27582__$1);

return statearr_27717;
})();
if(inst_27582__$1){
var statearr_27719_27844 = state_27634__$1;
(statearr_27719_27844[(1)] = (33));

} else {
var statearr_27720_27845 = state_27634__$1;
(statearr_27720_27845[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (25))){
var inst_27559 = (state_27634[(20)]);
var inst_27560 = (state_27634[(11)]);
var inst_27562 = (inst_27560 < inst_27559);
var inst_27563 = inst_27562;
var state_27634__$1 = state_27634;
if(cljs.core.truth_(inst_27563)){
var statearr_27723_27846 = state_27634__$1;
(statearr_27723_27846[(1)] = (27));

} else {
var statearr_27724_27847 = state_27634__$1;
(statearr_27724_27847[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (34))){
var state_27634__$1 = state_27634;
var statearr_27725_27849 = state_27634__$1;
(statearr_27725_27849[(2)] = null);

(statearr_27725_27849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (17))){
var state_27634__$1 = state_27634;
var statearr_27726_27850 = state_27634__$1;
(statearr_27726_27850[(2)] = null);

(statearr_27726_27850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (3))){
var inst_27627 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27634__$1,inst_27627);
} else {
if((state_val_27635 === (12))){
var inst_27542 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27729_27854 = state_27634__$1;
(statearr_27729_27854[(2)] = inst_27542);

(statearr_27729_27854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (2))){
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27634__$1,(4),ch);
} else {
if((state_val_27635 === (23))){
var state_27634__$1 = state_27634;
var statearr_27732_27863 = state_27634__$1;
(statearr_27732_27863[(2)] = null);

(statearr_27732_27863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (35))){
var inst_27609 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27734_27864 = state_27634__$1;
(statearr_27734_27864[(2)] = inst_27609);

(statearr_27734_27864[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (19))){
var inst_27510 = (state_27634[(7)]);
var inst_27516 = cljs.core.chunk_first(inst_27510);
var inst_27517 = cljs.core.chunk_rest(inst_27510);
var inst_27518 = cljs.core.count(inst_27516);
var inst_27486 = inst_27517;
var inst_27487 = inst_27516;
var inst_27488 = inst_27518;
var inst_27489 = (0);
var state_27634__$1 = (function (){var statearr_27740 = state_27634;
(statearr_27740[(13)] = inst_27488);

(statearr_27740[(14)] = inst_27489);

(statearr_27740[(16)] = inst_27487);

(statearr_27740[(17)] = inst_27486);

return statearr_27740;
})();
var statearr_27741_27865 = state_27634__$1;
(statearr_27741_27865[(2)] = null);

(statearr_27741_27865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (11))){
var inst_27510 = (state_27634[(7)]);
var inst_27486 = (state_27634[(17)]);
var inst_27510__$1 = cljs.core.seq(inst_27486);
var state_27634__$1 = (function (){var statearr_27742 = state_27634;
(statearr_27742[(7)] = inst_27510__$1);

return statearr_27742;
})();
if(inst_27510__$1){
var statearr_27743_27869 = state_27634__$1;
(statearr_27743_27869[(1)] = (16));

} else {
var statearr_27744_27870 = state_27634__$1;
(statearr_27744_27870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (9))){
var inst_27544 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27745_27871 = state_27634__$1;
(statearr_27745_27871[(2)] = inst_27544);

(statearr_27745_27871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (5))){
var inst_27484 = cljs.core.deref(cs);
var inst_27485 = cljs.core.seq(inst_27484);
var inst_27486 = inst_27485;
var inst_27487 = null;
var inst_27488 = (0);
var inst_27489 = (0);
var state_27634__$1 = (function (){var statearr_27746 = state_27634;
(statearr_27746[(13)] = inst_27488);

(statearr_27746[(14)] = inst_27489);

(statearr_27746[(16)] = inst_27487);

(statearr_27746[(17)] = inst_27486);

return statearr_27746;
})();
var statearr_27747_27872 = state_27634__$1;
(statearr_27747_27872[(2)] = null);

(statearr_27747_27872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (14))){
var state_27634__$1 = state_27634;
var statearr_27748_27873 = state_27634__$1;
(statearr_27748_27873[(2)] = null);

(statearr_27748_27873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (45))){
var inst_27617 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27751_27874 = state_27634__$1;
(statearr_27751_27874[(2)] = inst_27617);

(statearr_27751_27874[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (26))){
var inst_27547 = (state_27634[(29)]);
var inst_27613 = (state_27634[(2)]);
var inst_27614 = cljs.core.seq(inst_27547);
var state_27634__$1 = (function (){var statearr_27752 = state_27634;
(statearr_27752[(31)] = inst_27613);

return statearr_27752;
})();
if(inst_27614){
var statearr_27753_27875 = state_27634__$1;
(statearr_27753_27875[(1)] = (42));

} else {
var statearr_27754_27876 = state_27634__$1;
(statearr_27754_27876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (16))){
var inst_27510 = (state_27634[(7)]);
var inst_27514 = cljs.core.chunked_seq_QMARK_(inst_27510);
var state_27634__$1 = state_27634;
if(inst_27514){
var statearr_27756_27877 = state_27634__$1;
(statearr_27756_27877[(1)] = (19));

} else {
var statearr_27757_27878 = state_27634__$1;
(statearr_27757_27878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (38))){
var inst_27604 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27760_27879 = state_27634__$1;
(statearr_27760_27879[(2)] = inst_27604);

(statearr_27760_27879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (30))){
var state_27634__$1 = state_27634;
var statearr_27761_27880 = state_27634__$1;
(statearr_27761_27880[(2)] = null);

(statearr_27761_27880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (10))){
var inst_27489 = (state_27634[(14)]);
var inst_27487 = (state_27634[(16)]);
var inst_27498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27487,inst_27489);
var inst_27499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27498,(0),null);
var inst_27500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27498,(1),null);
var state_27634__$1 = (function (){var statearr_27762 = state_27634;
(statearr_27762[(26)] = inst_27499);

return statearr_27762;
})();
if(cljs.core.truth_(inst_27500)){
var statearr_27763_27883 = state_27634__$1;
(statearr_27763_27883[(1)] = (13));

} else {
var statearr_27764_27884 = state_27634__$1;
(statearr_27764_27884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (18))){
var inst_27540 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27765_27888 = state_27634__$1;
(statearr_27765_27888[(2)] = inst_27540);

(statearr_27765_27888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (42))){
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27634__$1,(45),dchan);
} else {
if((state_val_27635 === (37))){
var inst_27582 = (state_27634[(25)]);
var inst_27591 = (state_27634[(23)]);
var inst_27476 = (state_27634[(10)]);
var inst_27591__$1 = cljs.core.first(inst_27582);
var inst_27592 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27591__$1,inst_27476,done);
var state_27634__$1 = (function (){var statearr_27766 = state_27634;
(statearr_27766[(23)] = inst_27591__$1);

return statearr_27766;
})();
if(cljs.core.truth_(inst_27592)){
var statearr_27767_27889 = state_27634__$1;
(statearr_27767_27889[(1)] = (39));

} else {
var statearr_27768_27890 = state_27634__$1;
(statearr_27768_27890[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (8))){
var inst_27488 = (state_27634[(13)]);
var inst_27489 = (state_27634[(14)]);
var inst_27492 = (inst_27489 < inst_27488);
var inst_27493 = inst_27492;
var state_27634__$1 = state_27634;
if(cljs.core.truth_(inst_27493)){
var statearr_27771_27891 = state_27634__$1;
(statearr_27771_27891[(1)] = (10));

} else {
var statearr_27772_27892 = state_27634__$1;
(statearr_27772_27892[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___27791,cs,m,dchan,dctr,done))
;
return ((function (switch__25864__auto__,c__26242__auto___27791,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25865__auto__ = null;
var cljs$core$async$mult_$_state_machine__25865__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$mult_$_state_machine__25865__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$mult_$_state_machine__25865__auto____1 = (function (state_27634){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_27634);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e27779){if((e27779 instanceof Object)){
var ex__25868__auto__ = e27779;
var statearr_27780_27893 = state_27634;
(statearr_27780_27893[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27894 = state_27634;
state_27634 = G__27894;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25865__auto__ = function(state_27634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25865__auto____1.call(this,state_27634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25865__auto____0;
cljs$core$async$mult_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25865__auto____1;
return cljs$core$async$mult_$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___27791,cs,m,dchan,dctr,done))
})();
var state__26244__auto__ = (function (){var statearr_27783 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_27783[(6)] = c__26242__auto___27791);

return statearr_27783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___27791,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27896 = arguments.length;
switch (G__27896) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27957 = arguments.length;
var i__4532__auto___27958 = (0);
while(true){
if((i__4532__auto___27958 < len__4531__auto___27957)){
args__4534__auto__.push((arguments[i__4532__auto___27958]));

var G__27959 = (i__4532__auto___27958 + (1));
i__4532__auto___27958 = G__27959;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27950){
var map__27951 = p__27950;
var map__27951__$1 = ((((!((map__27951 == null)))?(((((map__27951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27951):map__27951);
var opts = map__27951__$1;
var statearr_27953_27960 = state;
(statearr_27953_27960[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__27951,map__27951__$1,opts){
return (function (val){
var statearr_27955_27961 = state;
(statearr_27955_27961[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27951,map__27951__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27956_27963 = state;
(statearr_27956_27963[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27946){
var G__27947 = cljs.core.first(seq27946);
var seq27946__$1 = cljs.core.next(seq27946);
var G__27948 = cljs.core.first(seq27946__$1);
var seq27946__$2 = cljs.core.next(seq27946__$1);
var G__27949 = cljs.core.first(seq27946__$2);
var seq27946__$3 = cljs.core.next(seq27946__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27947,G__27948,G__27949,seq27946__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27976 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27977){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27977 = meta27977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27978,meta27977__$1){
var self__ = this;
var _27978__$1 = this;
return (new cljs.core.async.t_cljs$core$async27976(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27977__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27978){
var self__ = this;
var _27978__$1 = this;
return self__.meta27977;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27977","meta27977",-349539134,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27976";

cljs.core.async.t_cljs$core$async27976.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async27976");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27976.
 */
cljs.core.async.__GT_t_cljs$core$async27976 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27976(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27977){
return (new cljs.core.async.t_cljs$core$async27976(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27977));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27976(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26242__auto___28174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28080){
var state_val_28081 = (state_28080[(1)]);
if((state_val_28081 === (7))){
var inst_27995 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
var statearr_28082_28175 = state_28080__$1;
(statearr_28082_28175[(2)] = inst_27995);

(statearr_28082_28175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (20))){
var inst_28007 = (state_28080[(7)]);
var state_28080__$1 = state_28080;
var statearr_28083_28176 = state_28080__$1;
(statearr_28083_28176[(2)] = inst_28007);

(statearr_28083_28176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (27))){
var state_28080__$1 = state_28080;
var statearr_28084_28179 = state_28080__$1;
(statearr_28084_28179[(2)] = null);

(statearr_28084_28179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (1))){
var inst_27982 = (state_28080[(8)]);
var inst_27982__$1 = calc_state();
var inst_27984 = (inst_27982__$1 == null);
var inst_27985 = cljs.core.not(inst_27984);
var state_28080__$1 = (function (){var statearr_28085 = state_28080;
(statearr_28085[(8)] = inst_27982__$1);

return statearr_28085;
})();
if(inst_27985){
var statearr_28086_28181 = state_28080__$1;
(statearr_28086_28181[(1)] = (2));

} else {
var statearr_28087_28182 = state_28080__$1;
(statearr_28087_28182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (24))){
var inst_28054 = (state_28080[(9)]);
var inst_28040 = (state_28080[(10)]);
var inst_28031 = (state_28080[(11)]);
var inst_28054__$1 = (inst_28031.cljs$core$IFn$_invoke$arity$1 ? inst_28031.cljs$core$IFn$_invoke$arity$1(inst_28040) : inst_28031.call(null,inst_28040));
var state_28080__$1 = (function (){var statearr_28088 = state_28080;
(statearr_28088[(9)] = inst_28054__$1);

return statearr_28088;
})();
if(cljs.core.truth_(inst_28054__$1)){
var statearr_28089_28184 = state_28080__$1;
(statearr_28089_28184[(1)] = (29));

} else {
var statearr_28090_28185 = state_28080__$1;
(statearr_28090_28185[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (4))){
var inst_27998 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_27998)){
var statearr_28091_28186 = state_28080__$1;
(statearr_28091_28186[(1)] = (8));

} else {
var statearr_28092_28187 = state_28080__$1;
(statearr_28092_28187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (15))){
var inst_28025 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_28025)){
var statearr_28093_28189 = state_28080__$1;
(statearr_28093_28189[(1)] = (19));

} else {
var statearr_28094_28190 = state_28080__$1;
(statearr_28094_28190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (21))){
var inst_28030 = (state_28080[(12)]);
var inst_28030__$1 = (state_28080[(2)]);
var inst_28031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28080__$1 = (function (){var statearr_28095 = state_28080;
(statearr_28095[(13)] = inst_28032);

(statearr_28095[(12)] = inst_28030__$1);

(statearr_28095[(11)] = inst_28031);

return statearr_28095;
})();
return cljs.core.async.ioc_alts_BANG_(state_28080__$1,(22),inst_28033);
} else {
if((state_val_28081 === (31))){
var inst_28062 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_28062)){
var statearr_28096_28191 = state_28080__$1;
(statearr_28096_28191[(1)] = (32));

} else {
var statearr_28097_28192 = state_28080__$1;
(statearr_28097_28192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (32))){
var inst_28039 = (state_28080[(14)]);
var state_28080__$1 = state_28080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28080__$1,(35),out,inst_28039);
} else {
if((state_val_28081 === (33))){
var inst_28030 = (state_28080[(12)]);
var inst_28007 = inst_28030;
var state_28080__$1 = (function (){var statearr_28098 = state_28080;
(statearr_28098[(7)] = inst_28007);

return statearr_28098;
})();
var statearr_28099_28193 = state_28080__$1;
(statearr_28099_28193[(2)] = null);

(statearr_28099_28193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (13))){
var inst_28007 = (state_28080[(7)]);
var inst_28014 = inst_28007.cljs$lang$protocol_mask$partition0$;
var inst_28015 = (inst_28014 & (64));
var inst_28016 = inst_28007.cljs$core$ISeq$;
var inst_28017 = (cljs.core.PROTOCOL_SENTINEL === inst_28016);
var inst_28018 = ((inst_28015) || (inst_28017));
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_28018)){
var statearr_28100_28194 = state_28080__$1;
(statearr_28100_28194[(1)] = (16));

} else {
var statearr_28101_28195 = state_28080__$1;
(statearr_28101_28195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (22))){
var inst_28040 = (state_28080[(10)]);
var inst_28039 = (state_28080[(14)]);
var inst_28038 = (state_28080[(2)]);
var inst_28039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28038,(0),null);
var inst_28040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28038,(1),null);
var inst_28041 = (inst_28039__$1 == null);
var inst_28042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28040__$1,change);
var inst_28043 = ((inst_28041) || (inst_28042));
var state_28080__$1 = (function (){var statearr_28102 = state_28080;
(statearr_28102[(10)] = inst_28040__$1);

(statearr_28102[(14)] = inst_28039__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28043)){
var statearr_28103_28196 = state_28080__$1;
(statearr_28103_28196[(1)] = (23));

} else {
var statearr_28104_28198 = state_28080__$1;
(statearr_28104_28198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (36))){
var inst_28030 = (state_28080[(12)]);
var inst_28007 = inst_28030;
var state_28080__$1 = (function (){var statearr_28105 = state_28080;
(statearr_28105[(7)] = inst_28007);

return statearr_28105;
})();
var statearr_28106_28201 = state_28080__$1;
(statearr_28106_28201[(2)] = null);

(statearr_28106_28201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (29))){
var inst_28054 = (state_28080[(9)]);
var state_28080__$1 = state_28080;
var statearr_28109_28206 = state_28080__$1;
(statearr_28109_28206[(2)] = inst_28054);

(statearr_28109_28206[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (6))){
var state_28080__$1 = state_28080;
var statearr_28110_28207 = state_28080__$1;
(statearr_28110_28207[(2)] = false);

(statearr_28110_28207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (28))){
var inst_28050 = (state_28080[(2)]);
var inst_28051 = calc_state();
var inst_28007 = inst_28051;
var state_28080__$1 = (function (){var statearr_28113 = state_28080;
(statearr_28113[(7)] = inst_28007);

(statearr_28113[(15)] = inst_28050);

return statearr_28113;
})();
var statearr_28114_28208 = state_28080__$1;
(statearr_28114_28208[(2)] = null);

(statearr_28114_28208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (25))){
var inst_28076 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
var statearr_28115_28209 = state_28080__$1;
(statearr_28115_28209[(2)] = inst_28076);

(statearr_28115_28209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (34))){
var inst_28074 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
var statearr_28116_28210 = state_28080__$1;
(statearr_28116_28210[(2)] = inst_28074);

(statearr_28116_28210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (17))){
var state_28080__$1 = state_28080;
var statearr_28118_28211 = state_28080__$1;
(statearr_28118_28211[(2)] = false);

(statearr_28118_28211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (3))){
var state_28080__$1 = state_28080;
var statearr_28119_28212 = state_28080__$1;
(statearr_28119_28212[(2)] = false);

(statearr_28119_28212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (12))){
var inst_28078 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28080__$1,inst_28078);
} else {
if((state_val_28081 === (2))){
var inst_27982 = (state_28080[(8)]);
var inst_27987 = inst_27982.cljs$lang$protocol_mask$partition0$;
var inst_27988 = (inst_27987 & (64));
var inst_27989 = inst_27982.cljs$core$ISeq$;
var inst_27990 = (cljs.core.PROTOCOL_SENTINEL === inst_27989);
var inst_27991 = ((inst_27988) || (inst_27990));
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_27991)){
var statearr_28120_28221 = state_28080__$1;
(statearr_28120_28221[(1)] = (5));

} else {
var statearr_28122_28226 = state_28080__$1;
(statearr_28122_28226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (23))){
var inst_28039 = (state_28080[(14)]);
var inst_28045 = (inst_28039 == null);
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_28045)){
var statearr_28124_28227 = state_28080__$1;
(statearr_28124_28227[(1)] = (26));

} else {
var statearr_28125_28228 = state_28080__$1;
(statearr_28125_28228[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (35))){
var inst_28065 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
if(cljs.core.truth_(inst_28065)){
var statearr_28126_28229 = state_28080__$1;
(statearr_28126_28229[(1)] = (36));

} else {
var statearr_28127_28230 = state_28080__$1;
(statearr_28127_28230[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (19))){
var inst_28007 = (state_28080[(7)]);
var inst_28027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28007);
var state_28080__$1 = state_28080;
var statearr_28128_28231 = state_28080__$1;
(statearr_28128_28231[(2)] = inst_28027);

(statearr_28128_28231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (11))){
var inst_28007 = (state_28080[(7)]);
var inst_28011 = (inst_28007 == null);
var inst_28012 = cljs.core.not(inst_28011);
var state_28080__$1 = state_28080;
if(inst_28012){
var statearr_28129_28232 = state_28080__$1;
(statearr_28129_28232[(1)] = (13));

} else {
var statearr_28130_28233 = state_28080__$1;
(statearr_28130_28233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (9))){
var inst_27982 = (state_28080[(8)]);
var state_28080__$1 = state_28080;
var statearr_28131_28234 = state_28080__$1;
(statearr_28131_28234[(2)] = inst_27982);

(statearr_28131_28234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (5))){
var state_28080__$1 = state_28080;
var statearr_28133_28237 = state_28080__$1;
(statearr_28133_28237[(2)] = true);

(statearr_28133_28237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (14))){
var state_28080__$1 = state_28080;
var statearr_28134_28238 = state_28080__$1;
(statearr_28134_28238[(2)] = false);

(statearr_28134_28238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (26))){
var inst_28040 = (state_28080[(10)]);
var inst_28047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28040);
var state_28080__$1 = state_28080;
var statearr_28136_28239 = state_28080__$1;
(statearr_28136_28239[(2)] = inst_28047);

(statearr_28136_28239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (16))){
var state_28080__$1 = state_28080;
var statearr_28137_28245 = state_28080__$1;
(statearr_28137_28245[(2)] = true);

(statearr_28137_28245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (38))){
var inst_28070 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
var statearr_28139_28246 = state_28080__$1;
(statearr_28139_28246[(2)] = inst_28070);

(statearr_28139_28246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (30))){
var inst_28040 = (state_28080[(10)]);
var inst_28032 = (state_28080[(13)]);
var inst_28031 = (state_28080[(11)]);
var inst_28057 = cljs.core.empty_QMARK_(inst_28031);
var inst_28058 = (inst_28032.cljs$core$IFn$_invoke$arity$1 ? inst_28032.cljs$core$IFn$_invoke$arity$1(inst_28040) : inst_28032.call(null,inst_28040));
var inst_28059 = cljs.core.not(inst_28058);
var inst_28060 = ((inst_28057) && (inst_28059));
var state_28080__$1 = state_28080;
var statearr_28143_28247 = state_28080__$1;
(statearr_28143_28247[(2)] = inst_28060);

(statearr_28143_28247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (10))){
var inst_27982 = (state_28080[(8)]);
var inst_28003 = (state_28080[(2)]);
var inst_28004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28003,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28003,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28003,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28007 = inst_27982;
var state_28080__$1 = (function (){var statearr_28146 = state_28080;
(statearr_28146[(16)] = inst_28006);

(statearr_28146[(7)] = inst_28007);

(statearr_28146[(17)] = inst_28004);

(statearr_28146[(18)] = inst_28005);

return statearr_28146;
})();
var statearr_28147_28248 = state_28080__$1;
(statearr_28147_28248[(2)] = null);

(statearr_28147_28248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (18))){
var inst_28022 = (state_28080[(2)]);
var state_28080__$1 = state_28080;
var statearr_28148_28249 = state_28080__$1;
(statearr_28148_28249[(2)] = inst_28022);

(statearr_28148_28249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (37))){
var state_28080__$1 = state_28080;
var statearr_28149_28250 = state_28080__$1;
(statearr_28149_28250[(2)] = null);

(statearr_28149_28250[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28081 === (8))){
var inst_27982 = (state_28080[(8)]);
var inst_28000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27982);
var state_28080__$1 = state_28080;
var statearr_28150_28251 = state_28080__$1;
(statearr_28150_28251[(2)] = inst_28000);

(statearr_28150_28251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25864__auto__,c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25865__auto__ = null;
var cljs$core$async$mix_$_state_machine__25865__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = cljs$core$async$mix_$_state_machine__25865__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var cljs$core$async$mix_$_state_machine__25865__auto____1 = (function (state_28080){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28080);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__25868__auto__ = e28154;
var statearr_28155_28252 = state_28080;
(statearr_28155_28252[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28253 = state_28080;
state_28080 = G__28253;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25865__auto__ = function(state_28080){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25865__auto____1.call(this,state_28080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25865__auto____0;
cljs$core$async$mix_$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25865__auto____1;
return cljs$core$async$mix_$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26244__auto__ = (function (){var statearr_28156 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28156[(6)] = c__26242__auto___28174);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28259 = arguments.length;
switch (G__28259) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28276 = arguments.length;
switch (G__28276) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__28270_SHARP_){
if(cljs.core.truth_((p1__28270_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28270_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28270_SHARP_.call(null,topic)))){
return p1__28270_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28270_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28283 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28284){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28284 = meta28284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28285,meta28284__$1){
var self__ = this;
var _28285__$1 = this;
return (new cljs.core.async.t_cljs$core$async28283(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28284__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28285){
var self__ = this;
var _28285__$1 = this;
return self__.meta28284;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28284","meta28284",-1834406392,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28283";

cljs.core.async.t_cljs$core$async28283.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async28283");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28283.
 */
cljs.core.async.__GT_t_cljs$core$async28283 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28284){
return (new cljs.core.async.t_cljs$core$async28283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28284));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28283(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26242__auto___28427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28427,mults,ensure_mult,p){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28427,mults,ensure_mult,p){
return (function (state_28365){
var state_val_28366 = (state_28365[(1)]);
if((state_val_28366 === (7))){
var inst_28361 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28367_28428 = state_28365__$1;
(statearr_28367_28428[(2)] = inst_28361);

(statearr_28367_28428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (20))){
var state_28365__$1 = state_28365;
var statearr_28368_28429 = state_28365__$1;
(statearr_28368_28429[(2)] = null);

(statearr_28368_28429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (1))){
var state_28365__$1 = state_28365;
var statearr_28369_28430 = state_28365__$1;
(statearr_28369_28430[(2)] = null);

(statearr_28369_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (24))){
var inst_28344 = (state_28365[(7)]);
var inst_28353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28344);
var state_28365__$1 = state_28365;
var statearr_28370_28431 = state_28365__$1;
(statearr_28370_28431[(2)] = inst_28353);

(statearr_28370_28431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (4))){
var inst_28288 = (state_28365[(8)]);
var inst_28288__$1 = (state_28365[(2)]);
var inst_28289 = (inst_28288__$1 == null);
var state_28365__$1 = (function (){var statearr_28372 = state_28365;
(statearr_28372[(8)] = inst_28288__$1);

return statearr_28372;
})();
if(cljs.core.truth_(inst_28289)){
var statearr_28373_28432 = state_28365__$1;
(statearr_28373_28432[(1)] = (5));

} else {
var statearr_28374_28433 = state_28365__$1;
(statearr_28374_28433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (15))){
var inst_28338 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28377_28434 = state_28365__$1;
(statearr_28377_28434[(2)] = inst_28338);

(statearr_28377_28434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (21))){
var inst_28358 = (state_28365[(2)]);
var state_28365__$1 = (function (){var statearr_28379 = state_28365;
(statearr_28379[(9)] = inst_28358);

return statearr_28379;
})();
var statearr_28380_28435 = state_28365__$1;
(statearr_28380_28435[(2)] = null);

(statearr_28380_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (13))){
var inst_28316 = (state_28365[(10)]);
var inst_28318 = cljs.core.chunked_seq_QMARK_(inst_28316);
var state_28365__$1 = state_28365;
if(inst_28318){
var statearr_28381_28436 = state_28365__$1;
(statearr_28381_28436[(1)] = (16));

} else {
var statearr_28382_28437 = state_28365__$1;
(statearr_28382_28437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (22))){
var inst_28350 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28350)){
var statearr_28383_28438 = state_28365__$1;
(statearr_28383_28438[(1)] = (23));

} else {
var statearr_28384_28439 = state_28365__$1;
(statearr_28384_28439[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (6))){
var inst_28344 = (state_28365[(7)]);
var inst_28288 = (state_28365[(8)]);
var inst_28346 = (state_28365[(11)]);
var inst_28344__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28288) : topic_fn.call(null,inst_28288));
var inst_28345 = cljs.core.deref(mults);
var inst_28346__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28345,inst_28344__$1);
var state_28365__$1 = (function (){var statearr_28385 = state_28365;
(statearr_28385[(7)] = inst_28344__$1);

(statearr_28385[(11)] = inst_28346__$1);

return statearr_28385;
})();
if(cljs.core.truth_(inst_28346__$1)){
var statearr_28386_28440 = state_28365__$1;
(statearr_28386_28440[(1)] = (19));

} else {
var statearr_28387_28441 = state_28365__$1;
(statearr_28387_28441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (25))){
var inst_28355 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28388_28442 = state_28365__$1;
(statearr_28388_28442[(2)] = inst_28355);

(statearr_28388_28442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (17))){
var inst_28316 = (state_28365[(10)]);
var inst_28326 = cljs.core.first(inst_28316);
var inst_28327 = cljs.core.async.muxch_STAR_(inst_28326);
var inst_28328 = cljs.core.async.close_BANG_(inst_28327);
var inst_28332 = cljs.core.next(inst_28316);
var inst_28298 = inst_28332;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28365__$1 = (function (){var statearr_28389 = state_28365;
(statearr_28389[(12)] = inst_28300);

(statearr_28389[(13)] = inst_28301);

(statearr_28389[(14)] = inst_28299);

(statearr_28389[(15)] = inst_28328);

(statearr_28389[(16)] = inst_28298);

return statearr_28389;
})();
var statearr_28390_28443 = state_28365__$1;
(statearr_28390_28443[(2)] = null);

(statearr_28390_28443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (3))){
var inst_28363 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28365__$1,inst_28363);
} else {
if((state_val_28366 === (12))){
var inst_28340 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28395_28444 = state_28365__$1;
(statearr_28395_28444[(2)] = inst_28340);

(statearr_28395_28444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (2))){
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28365__$1,(4),ch);
} else {
if((state_val_28366 === (23))){
var state_28365__$1 = state_28365;
var statearr_28400_28445 = state_28365__$1;
(statearr_28400_28445[(2)] = null);

(statearr_28400_28445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (19))){
var inst_28288 = (state_28365[(8)]);
var inst_28346 = (state_28365[(11)]);
var inst_28348 = cljs.core.async.muxch_STAR_(inst_28346);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28365__$1,(22),inst_28348,inst_28288);
} else {
if((state_val_28366 === (11))){
var inst_28316 = (state_28365[(10)]);
var inst_28298 = (state_28365[(16)]);
var inst_28316__$1 = cljs.core.seq(inst_28298);
var state_28365__$1 = (function (){var statearr_28401 = state_28365;
(statearr_28401[(10)] = inst_28316__$1);

return statearr_28401;
})();
if(inst_28316__$1){
var statearr_28402_28446 = state_28365__$1;
(statearr_28402_28446[(1)] = (13));

} else {
var statearr_28404_28447 = state_28365__$1;
(statearr_28404_28447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (9))){
var inst_28342 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28408_28448 = state_28365__$1;
(statearr_28408_28448[(2)] = inst_28342);

(statearr_28408_28448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (5))){
var inst_28295 = cljs.core.deref(mults);
var inst_28296 = cljs.core.vals(inst_28295);
var inst_28297 = cljs.core.seq(inst_28296);
var inst_28298 = inst_28297;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28365__$1 = (function (){var statearr_28409 = state_28365;
(statearr_28409[(12)] = inst_28300);

(statearr_28409[(13)] = inst_28301);

(statearr_28409[(14)] = inst_28299);

(statearr_28409[(16)] = inst_28298);

return statearr_28409;
})();
var statearr_28410_28449 = state_28365__$1;
(statearr_28410_28449[(2)] = null);

(statearr_28410_28449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (14))){
var state_28365__$1 = state_28365;
var statearr_28414_28450 = state_28365__$1;
(statearr_28414_28450[(2)] = null);

(statearr_28414_28450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (16))){
var inst_28316 = (state_28365[(10)]);
var inst_28320 = cljs.core.chunk_first(inst_28316);
var inst_28321 = cljs.core.chunk_rest(inst_28316);
var inst_28322 = cljs.core.count(inst_28320);
var inst_28298 = inst_28321;
var inst_28299 = inst_28320;
var inst_28300 = inst_28322;
var inst_28301 = (0);
var state_28365__$1 = (function (){var statearr_28415 = state_28365;
(statearr_28415[(12)] = inst_28300);

(statearr_28415[(13)] = inst_28301);

(statearr_28415[(14)] = inst_28299);

(statearr_28415[(16)] = inst_28298);

return statearr_28415;
})();
var statearr_28416_28451 = state_28365__$1;
(statearr_28416_28451[(2)] = null);

(statearr_28416_28451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (10))){
var inst_28300 = (state_28365[(12)]);
var inst_28301 = (state_28365[(13)]);
var inst_28299 = (state_28365[(14)]);
var inst_28298 = (state_28365[(16)]);
var inst_28307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28299,inst_28301);
var inst_28308 = cljs.core.async.muxch_STAR_(inst_28307);
var inst_28309 = cljs.core.async.close_BANG_(inst_28308);
var inst_28313 = (inst_28301 + (1));
var tmp28411 = inst_28300;
var tmp28412 = inst_28299;
var tmp28413 = inst_28298;
var inst_28298__$1 = tmp28413;
var inst_28299__$1 = tmp28412;
var inst_28300__$1 = tmp28411;
var inst_28301__$1 = inst_28313;
var state_28365__$1 = (function (){var statearr_28417 = state_28365;
(statearr_28417[(12)] = inst_28300__$1);

(statearr_28417[(13)] = inst_28301__$1);

(statearr_28417[(14)] = inst_28299__$1);

(statearr_28417[(16)] = inst_28298__$1);

(statearr_28417[(17)] = inst_28309);

return statearr_28417;
})();
var statearr_28418_28452 = state_28365__$1;
(statearr_28418_28452[(2)] = null);

(statearr_28418_28452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (18))){
var inst_28335 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28419_28453 = state_28365__$1;
(statearr_28419_28453[(2)] = inst_28335);

(statearr_28419_28453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (8))){
var inst_28300 = (state_28365[(12)]);
var inst_28301 = (state_28365[(13)]);
var inst_28303 = (inst_28301 < inst_28300);
var inst_28304 = inst_28303;
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28304)){
var statearr_28420_28457 = state_28365__$1;
(statearr_28420_28457[(1)] = (10));

} else {
var statearr_28421_28458 = state_28365__$1;
(statearr_28421_28458[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28427,mults,ensure_mult,p))
;
return ((function (switch__25864__auto__,c__26242__auto___28427,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_28422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28422[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_28422[(1)] = (1));

return statearr_28422;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_28365){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28365);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28423){if((e28423 instanceof Object)){
var ex__25868__auto__ = e28423;
var statearr_28424_28459 = state_28365;
(statearr_28424_28459[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28460 = state_28365;
state_28365 = G__28460;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28427,mults,ensure_mult,p))
})();
var state__26244__auto__ = (function (){var statearr_28425 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28425[(6)] = c__26242__auto___28427);

return statearr_28425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28427,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28462 = arguments.length;
switch (G__28462) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28466 = arguments.length;
switch (G__28466) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28469 = arguments.length;
switch (G__28469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26242__auto___28540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28511){
var state_val_28512 = (state_28511[(1)]);
if((state_val_28512 === (7))){
var state_28511__$1 = state_28511;
var statearr_28513_28541 = state_28511__$1;
(statearr_28513_28541[(2)] = null);

(statearr_28513_28541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (1))){
var state_28511__$1 = state_28511;
var statearr_28514_28542 = state_28511__$1;
(statearr_28514_28542[(2)] = null);

(statearr_28514_28542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (4))){
var inst_28472 = (state_28511[(7)]);
var inst_28474 = (inst_28472 < cnt);
var state_28511__$1 = state_28511;
if(cljs.core.truth_(inst_28474)){
var statearr_28515_28543 = state_28511__$1;
(statearr_28515_28543[(1)] = (6));

} else {
var statearr_28516_28544 = state_28511__$1;
(statearr_28516_28544[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (15))){
var inst_28507 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28517_28545 = state_28511__$1;
(statearr_28517_28545[(2)] = inst_28507);

(statearr_28517_28545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (13))){
var inst_28500 = cljs.core.async.close_BANG_(out);
var state_28511__$1 = state_28511;
var statearr_28518_28546 = state_28511__$1;
(statearr_28518_28546[(2)] = inst_28500);

(statearr_28518_28546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (6))){
var state_28511__$1 = state_28511;
var statearr_28519_28547 = state_28511__$1;
(statearr_28519_28547[(2)] = null);

(statearr_28519_28547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (3))){
var inst_28509 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28511__$1,inst_28509);
} else {
if((state_val_28512 === (12))){
var inst_28497 = (state_28511[(8)]);
var inst_28497__$1 = (state_28511[(2)]);
var inst_28498 = cljs.core.some(cljs.core.nil_QMARK_,inst_28497__$1);
var state_28511__$1 = (function (){var statearr_28521 = state_28511;
(statearr_28521[(8)] = inst_28497__$1);

return statearr_28521;
})();
if(cljs.core.truth_(inst_28498)){
var statearr_28522_28548 = state_28511__$1;
(statearr_28522_28548[(1)] = (13));

} else {
var statearr_28523_28549 = state_28511__$1;
(statearr_28523_28549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (2))){
var inst_28471 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28472 = (0);
var state_28511__$1 = (function (){var statearr_28524 = state_28511;
(statearr_28524[(9)] = inst_28471);

(statearr_28524[(7)] = inst_28472);

return statearr_28524;
})();
var statearr_28525_28550 = state_28511__$1;
(statearr_28525_28550[(2)] = null);

(statearr_28525_28550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (11))){
var inst_28472 = (state_28511[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28511,(10),Object,null,(9));
var inst_28484 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28472) : chs__$1.call(null,inst_28472));
var inst_28485 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28472) : done.call(null,inst_28472));
var inst_28486 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28484,inst_28485);
var state_28511__$1 = state_28511;
var statearr_28526_28551 = state_28511__$1;
(statearr_28526_28551[(2)] = inst_28486);


cljs.core.async.impl.ioc_helpers.process_exception(state_28511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (9))){
var inst_28472 = (state_28511[(7)]);
var inst_28488 = (state_28511[(2)]);
var inst_28489 = (inst_28472 + (1));
var inst_28472__$1 = inst_28489;
var state_28511__$1 = (function (){var statearr_28527 = state_28511;
(statearr_28527[(10)] = inst_28488);

(statearr_28527[(7)] = inst_28472__$1);

return statearr_28527;
})();
var statearr_28528_28552 = state_28511__$1;
(statearr_28528_28552[(2)] = null);

(statearr_28528_28552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (5))){
var inst_28495 = (state_28511[(2)]);
var state_28511__$1 = (function (){var statearr_28529 = state_28511;
(statearr_28529[(11)] = inst_28495);

return statearr_28529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28511__$1,(12),dchan);
} else {
if((state_val_28512 === (14))){
var inst_28497 = (state_28511[(8)]);
var inst_28502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28497);
var state_28511__$1 = state_28511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28511__$1,(16),out,inst_28502);
} else {
if((state_val_28512 === (16))){
var inst_28504 = (state_28511[(2)]);
var state_28511__$1 = (function (){var statearr_28530 = state_28511;
(statearr_28530[(12)] = inst_28504);

return statearr_28530;
})();
var statearr_28531_28556 = state_28511__$1;
(statearr_28531_28556[(2)] = null);

(statearr_28531_28556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (10))){
var inst_28479 = (state_28511[(2)]);
var inst_28480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28511__$1 = (function (){var statearr_28532 = state_28511;
(statearr_28532[(13)] = inst_28479);

return statearr_28532;
})();
var statearr_28533_28557 = state_28511__$1;
(statearr_28533_28557[(2)] = inst_28480);


cljs.core.async.impl.ioc_helpers.process_exception(state_28511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28512 === (8))){
var inst_28493 = (state_28511[(2)]);
var state_28511__$1 = state_28511;
var statearr_28534_28558 = state_28511__$1;
(statearr_28534_28558[(2)] = inst_28493);

(statearr_28534_28558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25864__auto__,c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_28535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28535[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_28535[(1)] = (1));

return statearr_28535;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_28511){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28511);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28536){if((e28536 instanceof Object)){
var ex__25868__auto__ = e28536;
var statearr_28537_28559 = state_28511;
(statearr_28537_28559[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28560 = state_28511;
state_28511 = G__28560;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_28511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_28511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26244__auto__ = (function (){var statearr_28538 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28538[(6)] = c__26242__auto___28540);

return statearr_28538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28540,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28567 = arguments.length;
switch (G__28567) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___28637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28637,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28637,out){
return (function (state_28600){
var state_val_28603 = (state_28600[(1)]);
if((state_val_28603 === (7))){
var inst_28578 = (state_28600[(7)]);
var inst_28579 = (state_28600[(8)]);
var inst_28578__$1 = (state_28600[(2)]);
var inst_28579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28578__$1,(0),null);
var inst_28580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28578__$1,(1),null);
var inst_28581 = (inst_28579__$1 == null);
var state_28600__$1 = (function (){var statearr_28604 = state_28600;
(statearr_28604[(7)] = inst_28578__$1);

(statearr_28604[(8)] = inst_28579__$1);

(statearr_28604[(9)] = inst_28580);

return statearr_28604;
})();
if(cljs.core.truth_(inst_28581)){
var statearr_28605_28641 = state_28600__$1;
(statearr_28605_28641[(1)] = (8));

} else {
var statearr_28606_28642 = state_28600__$1;
(statearr_28606_28642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (1))){
var inst_28568 = cljs.core.vec(chs);
var inst_28569 = inst_28568;
var state_28600__$1 = (function (){var statearr_28607 = state_28600;
(statearr_28607[(10)] = inst_28569);

return statearr_28607;
})();
var statearr_28608_28643 = state_28600__$1;
(statearr_28608_28643[(2)] = null);

(statearr_28608_28643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (4))){
var inst_28569 = (state_28600[(10)]);
var state_28600__$1 = state_28600;
return cljs.core.async.ioc_alts_BANG_(state_28600__$1,(7),inst_28569);
} else {
if((state_val_28603 === (6))){
var inst_28595 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28613_28644 = state_28600__$1;
(statearr_28613_28644[(2)] = inst_28595);

(statearr_28613_28644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (3))){
var inst_28597 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28600__$1,inst_28597);
} else {
if((state_val_28603 === (2))){
var inst_28569 = (state_28600[(10)]);
var inst_28571 = cljs.core.count(inst_28569);
var inst_28572 = (inst_28571 > (0));
var state_28600__$1 = state_28600;
if(cljs.core.truth_(inst_28572)){
var statearr_28615_28645 = state_28600__$1;
(statearr_28615_28645[(1)] = (4));

} else {
var statearr_28616_28646 = state_28600__$1;
(statearr_28616_28646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (11))){
var inst_28569 = (state_28600[(10)]);
var inst_28588 = (state_28600[(2)]);
var tmp28614 = inst_28569;
var inst_28569__$1 = tmp28614;
var state_28600__$1 = (function (){var statearr_28617 = state_28600;
(statearr_28617[(11)] = inst_28588);

(statearr_28617[(10)] = inst_28569__$1);

return statearr_28617;
})();
var statearr_28618_28647 = state_28600__$1;
(statearr_28618_28647[(2)] = null);

(statearr_28618_28647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (9))){
var inst_28579 = (state_28600[(8)]);
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28600__$1,(11),out,inst_28579);
} else {
if((state_val_28603 === (5))){
var inst_28593 = cljs.core.async.close_BANG_(out);
var state_28600__$1 = state_28600;
var statearr_28619_28648 = state_28600__$1;
(statearr_28619_28648[(2)] = inst_28593);

(statearr_28619_28648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (10))){
var inst_28591 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28620_28649 = state_28600__$1;
(statearr_28620_28649[(2)] = inst_28591);

(statearr_28620_28649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (8))){
var inst_28569 = (state_28600[(10)]);
var inst_28578 = (state_28600[(7)]);
var inst_28579 = (state_28600[(8)]);
var inst_28580 = (state_28600[(9)]);
var inst_28583 = (function (){var cs = inst_28569;
var vec__28574 = inst_28578;
var v = inst_28579;
var c = inst_28580;
return ((function (cs,vec__28574,v,c,inst_28569,inst_28578,inst_28579,inst_28580,state_val_28603,c__26242__auto___28637,out){
return (function (p1__28565_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28565_SHARP_);
});
;})(cs,vec__28574,v,c,inst_28569,inst_28578,inst_28579,inst_28580,state_val_28603,c__26242__auto___28637,out))
})();
var inst_28584 = cljs.core.filterv(inst_28583,inst_28569);
var inst_28569__$1 = inst_28584;
var state_28600__$1 = (function (){var statearr_28621 = state_28600;
(statearr_28621[(10)] = inst_28569__$1);

return statearr_28621;
})();
var statearr_28626_28654 = state_28600__$1;
(statearr_28626_28654[(2)] = null);

(statearr_28626_28654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28637,out))
;
return ((function (switch__25864__auto__,c__26242__auto___28637,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_28627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28627[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_28627[(1)] = (1));

return statearr_28627;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_28600){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28600);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28628){if((e28628 instanceof Object)){
var ex__25868__auto__ = e28628;
var statearr_28629_28655 = state_28600;
(statearr_28629_28655[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28656 = state_28600;
state_28600 = G__28656;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_28600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_28600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28637,out))
})();
var state__26244__auto__ = (function (){var statearr_28631 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28631[(6)] = c__26242__auto___28637);

return statearr_28631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28637,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28662 = arguments.length;
switch (G__28662) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___28723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28723,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28723,out){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var inst_28668 = (state_28692[(7)]);
var inst_28668__$1 = (state_28692[(2)]);
var inst_28670 = (inst_28668__$1 == null);
var inst_28671 = cljs.core.not(inst_28670);
var state_28692__$1 = (function (){var statearr_28694 = state_28692;
(statearr_28694[(7)] = inst_28668__$1);

return statearr_28694;
})();
if(inst_28671){
var statearr_28695_28724 = state_28692__$1;
(statearr_28695_28724[(1)] = (8));

} else {
var statearr_28696_28725 = state_28692__$1;
(statearr_28696_28725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var inst_28663 = (0);
var state_28692__$1 = (function (){var statearr_28697 = state_28692;
(statearr_28697[(8)] = inst_28663);

return statearr_28697;
})();
var statearr_28698_28726 = state_28692__$1;
(statearr_28698_28726[(2)] = null);

(statearr_28698_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28692__$1,(7),ch);
} else {
if((state_val_28693 === (6))){
var inst_28682 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28705_28727 = state_28692__$1;
(statearr_28705_28727[(2)] = inst_28682);

(statearr_28705_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28684 = (state_28692[(2)]);
var inst_28685 = cljs.core.async.close_BANG_(out);
var state_28692__$1 = (function (){var statearr_28706 = state_28692;
(statearr_28706[(9)] = inst_28684);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28692__$1,inst_28685);
} else {
if((state_val_28693 === (2))){
var inst_28663 = (state_28692[(8)]);
var inst_28665 = (inst_28663 < n);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28665)){
var statearr_28707_28728 = state_28692__$1;
(statearr_28707_28728[(1)] = (4));

} else {
var statearr_28708_28729 = state_28692__$1;
(statearr_28708_28729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (11))){
var inst_28663 = (state_28692[(8)]);
var inst_28674 = (state_28692[(2)]);
var inst_28675 = (inst_28663 + (1));
var inst_28663__$1 = inst_28675;
var state_28692__$1 = (function (){var statearr_28709 = state_28692;
(statearr_28709[(10)] = inst_28674);

(statearr_28709[(8)] = inst_28663__$1);

return statearr_28709;
})();
var statearr_28710_28730 = state_28692__$1;
(statearr_28710_28730[(2)] = null);

(statearr_28710_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (9))){
var state_28692__$1 = state_28692;
var statearr_28711_28731 = state_28692__$1;
(statearr_28711_28731[(2)] = null);

(statearr_28711_28731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var state_28692__$1 = state_28692;
var statearr_28712_28732 = state_28692__$1;
(statearr_28712_28732[(2)] = null);

(statearr_28712_28732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28679 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28713_28733 = state_28692__$1;
(statearr_28713_28733[(2)] = inst_28679);

(statearr_28713_28733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (8))){
var inst_28668 = (state_28692[(7)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28692__$1,(11),out,inst_28668);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28723,out))
;
return ((function (switch__25864__auto__,c__26242__auto___28723,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_28718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28718[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_28718[(1)] = (1));

return statearr_28718;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_28692){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28692);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28719){if((e28719 instanceof Object)){
var ex__25868__auto__ = e28719;
var statearr_28720_28734 = state_28692;
(statearr_28720_28734[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28735 = state_28692;
state_28692 = G__28735;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28723,out))
})();
var state__26244__auto__ = (function (){var statearr_28721 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28721[(6)] = c__26242__auto___28723);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28723,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28737 = (function (f,ch,meta28738){
this.f = f;
this.ch = ch;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t_cljs$core$async28737(self__.f,self__.ch,meta28738__$1));
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28740 = (function (f,ch,meta28738,_,fn1,meta28741){
this.f = f;
this.ch = ch;
this.meta28738 = meta28738;
this._ = _;
this.fn1 = fn1;
this.meta28741 = meta28741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28742,meta28741__$1){
var self__ = this;
var _28742__$1 = this;
return (new cljs.core.async.t_cljs$core$async28740(self__.f,self__.ch,self__.meta28738,self__._,self__.fn1,meta28741__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28742){
var self__ = this;
var _28742__$1 = this;
return self__.meta28741;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28736_SHARP_){
var G__28751 = (((p1__28736_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28736_SHARP_) : self__.f.call(null,p1__28736_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28751) : f1.call(null,G__28751));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28737","cljs.core.async/t_cljs$core$async28737",-1789742789,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28741","meta28741",750526068,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28740";

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async28740");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28740.
 */
cljs.core.async.__GT_t_cljs$core$async28740 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28740(f__$1,ch__$1,meta28738__$1,___$2,fn1__$1,meta28741){
return (new cljs.core.async.t_cljs$core$async28740(f__$1,ch__$1,meta28738__$1,___$2,fn1__$1,meta28741));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28740(self__.f,self__.ch,self__.meta28738,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28752 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28752) : self__.f.call(null,G__28752));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});

cljs.core.async.t_cljs$core$async28737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28737";

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async28737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28737.
 */
cljs.core.async.__GT_t_cljs$core$async28737 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28737(f__$1,ch__$1,meta28738){
return (new cljs.core.async.t_cljs$core$async28737(f__$1,ch__$1,meta28738));
});

}

return (new cljs.core.async.t_cljs$core$async28737(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28765 = (function (f,ch,meta28766){
this.f = f;
this.ch = ch;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t_cljs$core$async28765(self__.f,self__.ch,meta28766__$1));
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28766","meta28766",-1626433090,null)], null);
});

cljs.core.async.t_cljs$core$async28765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28765";

cljs.core.async.t_cljs$core$async28765.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async28765");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28765.
 */
cljs.core.async.__GT_t_cljs$core$async28765 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28765(f__$1,ch__$1,meta28766){
return (new cljs.core.async.t_cljs$core$async28765(f__$1,ch__$1,meta28766));
});

}

return (new cljs.core.async.t_cljs$core$async28765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28768 = (function (p,ch,meta28769){
this.p = p;
this.ch = ch;
this.meta28769 = meta28769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28770,meta28769__$1){
var self__ = this;
var _28770__$1 = this;
return (new cljs.core.async.t_cljs$core$async28768(self__.p,self__.ch,meta28769__$1));
});

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28770){
var self__ = this;
var _28770__$1 = this;
return self__.meta28769;
});

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28769","meta28769",-1257535857,null)], null);
});

cljs.core.async.t_cljs$core$async28768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28768";

cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async28768");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28768.
 */
cljs.core.async.__GT_t_cljs$core$async28768 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28768(p__$1,ch__$1,meta28769){
return (new cljs.core.async.t_cljs$core$async28768(p__$1,ch__$1,meta28769));
});

}

return (new cljs.core.async.t_cljs$core$async28768(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28775 = arguments.length;
switch (G__28775) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___28826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___28826,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___28826,out){
return (function (state_28796){
var state_val_28797 = (state_28796[(1)]);
if((state_val_28797 === (7))){
var inst_28792 = (state_28796[(2)]);
var state_28796__$1 = state_28796;
var statearr_28800_28828 = state_28796__$1;
(statearr_28800_28828[(2)] = inst_28792);

(statearr_28800_28828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (1))){
var state_28796__$1 = state_28796;
var statearr_28801_28841 = state_28796__$1;
(statearr_28801_28841[(2)] = null);

(statearr_28801_28841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (4))){
var inst_28778 = (state_28796[(7)]);
var inst_28778__$1 = (state_28796[(2)]);
var inst_28779 = (inst_28778__$1 == null);
var state_28796__$1 = (function (){var statearr_28802 = state_28796;
(statearr_28802[(7)] = inst_28778__$1);

return statearr_28802;
})();
if(cljs.core.truth_(inst_28779)){
var statearr_28803_28842 = state_28796__$1;
(statearr_28803_28842[(1)] = (5));

} else {
var statearr_28804_28843 = state_28796__$1;
(statearr_28804_28843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (6))){
var inst_28778 = (state_28796[(7)]);
var inst_28783 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28778) : p.call(null,inst_28778));
var state_28796__$1 = state_28796;
if(cljs.core.truth_(inst_28783)){
var statearr_28805_28844 = state_28796__$1;
(statearr_28805_28844[(1)] = (8));

} else {
var statearr_28806_28846 = state_28796__$1;
(statearr_28806_28846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (3))){
var inst_28794 = (state_28796[(2)]);
var state_28796__$1 = state_28796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28796__$1,inst_28794);
} else {
if((state_val_28797 === (2))){
var state_28796__$1 = state_28796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28796__$1,(4),ch);
} else {
if((state_val_28797 === (11))){
var inst_28786 = (state_28796[(2)]);
var state_28796__$1 = state_28796;
var statearr_28807_28853 = state_28796__$1;
(statearr_28807_28853[(2)] = inst_28786);

(statearr_28807_28853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (9))){
var state_28796__$1 = state_28796;
var statearr_28808_28854 = state_28796__$1;
(statearr_28808_28854[(2)] = null);

(statearr_28808_28854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (5))){
var inst_28781 = cljs.core.async.close_BANG_(out);
var state_28796__$1 = state_28796;
var statearr_28809_28855 = state_28796__$1;
(statearr_28809_28855[(2)] = inst_28781);

(statearr_28809_28855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (10))){
var inst_28789 = (state_28796[(2)]);
var state_28796__$1 = (function (){var statearr_28810 = state_28796;
(statearr_28810[(8)] = inst_28789);

return statearr_28810;
})();
var statearr_28811_28856 = state_28796__$1;
(statearr_28811_28856[(2)] = null);

(statearr_28811_28856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28797 === (8))){
var inst_28778 = (state_28796[(7)]);
var state_28796__$1 = state_28796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28796__$1,(11),out,inst_28778);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___28826,out))
;
return ((function (switch__25864__auto__,c__26242__auto___28826,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_28814 = [null,null,null,null,null,null,null,null,null];
(statearr_28814[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_28814[(1)] = (1));

return statearr_28814;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_28796){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28796);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28818){if((e28818 instanceof Object)){
var ex__25868__auto__ = e28818;
var statearr_28819_28857 = state_28796;
(statearr_28819_28857[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28858 = state_28796;
state_28796 = G__28858;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_28796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_28796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___28826,out))
})();
var state__26244__auto__ = (function (){var statearr_28820 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28820[(6)] = c__26242__auto___28826);

return statearr_28820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___28826,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28860 = arguments.length;
switch (G__28860) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto__){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto__){
return (function (state_28930){
var state_val_28931 = (state_28930[(1)]);
if((state_val_28931 === (7))){
var inst_28926 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28932_28974 = state_28930__$1;
(statearr_28932_28974[(2)] = inst_28926);

(statearr_28932_28974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (20))){
var inst_28896 = (state_28930[(7)]);
var inst_28907 = (state_28930[(2)]);
var inst_28908 = cljs.core.next(inst_28896);
var inst_28882 = inst_28908;
var inst_28883 = null;
var inst_28884 = (0);
var inst_28885 = (0);
var state_28930__$1 = (function (){var statearr_28933 = state_28930;
(statearr_28933[(8)] = inst_28885);

(statearr_28933[(9)] = inst_28883);

(statearr_28933[(10)] = inst_28884);

(statearr_28933[(11)] = inst_28882);

(statearr_28933[(12)] = inst_28907);

return statearr_28933;
})();
var statearr_28934_28975 = state_28930__$1;
(statearr_28934_28975[(2)] = null);

(statearr_28934_28975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (1))){
var state_28930__$1 = state_28930;
var statearr_28935_28976 = state_28930__$1;
(statearr_28935_28976[(2)] = null);

(statearr_28935_28976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (4))){
var inst_28871 = (state_28930[(13)]);
var inst_28871__$1 = (state_28930[(2)]);
var inst_28872 = (inst_28871__$1 == null);
var state_28930__$1 = (function (){var statearr_28936 = state_28930;
(statearr_28936[(13)] = inst_28871__$1);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28872)){
var statearr_28937_28977 = state_28930__$1;
(statearr_28937_28977[(1)] = (5));

} else {
var statearr_28938_28978 = state_28930__$1;
(statearr_28938_28978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (15))){
var state_28930__$1 = state_28930;
var statearr_28943_28979 = state_28930__$1;
(statearr_28943_28979[(2)] = null);

(statearr_28943_28979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (21))){
var state_28930__$1 = state_28930;
var statearr_28944_28980 = state_28930__$1;
(statearr_28944_28980[(2)] = null);

(statearr_28944_28980[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (13))){
var inst_28885 = (state_28930[(8)]);
var inst_28883 = (state_28930[(9)]);
var inst_28884 = (state_28930[(10)]);
var inst_28882 = (state_28930[(11)]);
var inst_28892 = (state_28930[(2)]);
var inst_28893 = (inst_28885 + (1));
var tmp28940 = inst_28883;
var tmp28941 = inst_28884;
var tmp28942 = inst_28882;
var inst_28882__$1 = tmp28942;
var inst_28883__$1 = tmp28940;
var inst_28884__$1 = tmp28941;
var inst_28885__$1 = inst_28893;
var state_28930__$1 = (function (){var statearr_28945 = state_28930;
(statearr_28945[(8)] = inst_28885__$1);

(statearr_28945[(9)] = inst_28883__$1);

(statearr_28945[(10)] = inst_28884__$1);

(statearr_28945[(11)] = inst_28882__$1);

(statearr_28945[(14)] = inst_28892);

return statearr_28945;
})();
var statearr_28946_28981 = state_28930__$1;
(statearr_28946_28981[(2)] = null);

(statearr_28946_28981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (22))){
var state_28930__$1 = state_28930;
var statearr_28947_28982 = state_28930__$1;
(statearr_28947_28982[(2)] = null);

(statearr_28947_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (6))){
var inst_28871 = (state_28930[(13)]);
var inst_28880 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28871) : f.call(null,inst_28871));
var inst_28881 = cljs.core.seq(inst_28880);
var inst_28882 = inst_28881;
var inst_28883 = null;
var inst_28884 = (0);
var inst_28885 = (0);
var state_28930__$1 = (function (){var statearr_28950 = state_28930;
(statearr_28950[(8)] = inst_28885);

(statearr_28950[(9)] = inst_28883);

(statearr_28950[(10)] = inst_28884);

(statearr_28950[(11)] = inst_28882);

return statearr_28950;
})();
var statearr_28952_28983 = state_28930__$1;
(statearr_28952_28983[(2)] = null);

(statearr_28952_28983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (17))){
var inst_28896 = (state_28930[(7)]);
var inst_28900 = cljs.core.chunk_first(inst_28896);
var inst_28901 = cljs.core.chunk_rest(inst_28896);
var inst_28902 = cljs.core.count(inst_28900);
var inst_28882 = inst_28901;
var inst_28883 = inst_28900;
var inst_28884 = inst_28902;
var inst_28885 = (0);
var state_28930__$1 = (function (){var statearr_28953 = state_28930;
(statearr_28953[(8)] = inst_28885);

(statearr_28953[(9)] = inst_28883);

(statearr_28953[(10)] = inst_28884);

(statearr_28953[(11)] = inst_28882);

return statearr_28953;
})();
var statearr_28954_28984 = state_28930__$1;
(statearr_28954_28984[(2)] = null);

(statearr_28954_28984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (3))){
var inst_28928 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28930__$1,inst_28928);
} else {
if((state_val_28931 === (12))){
var inst_28916 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28955_28985 = state_28930__$1;
(statearr_28955_28985[(2)] = inst_28916);

(statearr_28955_28985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (2))){
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28930__$1,(4),in$);
} else {
if((state_val_28931 === (23))){
var inst_28924 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28956_28986 = state_28930__$1;
(statearr_28956_28986[(2)] = inst_28924);

(statearr_28956_28986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (19))){
var inst_28911 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28957_28987 = state_28930__$1;
(statearr_28957_28987[(2)] = inst_28911);

(statearr_28957_28987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (11))){
var inst_28896 = (state_28930[(7)]);
var inst_28882 = (state_28930[(11)]);
var inst_28896__$1 = cljs.core.seq(inst_28882);
var state_28930__$1 = (function (){var statearr_28958 = state_28930;
(statearr_28958[(7)] = inst_28896__$1);

return statearr_28958;
})();
if(inst_28896__$1){
var statearr_28959_28988 = state_28930__$1;
(statearr_28959_28988[(1)] = (14));

} else {
var statearr_28960_28989 = state_28930__$1;
(statearr_28960_28989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (9))){
var inst_28918 = (state_28930[(2)]);
var inst_28919 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28930__$1 = (function (){var statearr_28961 = state_28930;
(statearr_28961[(15)] = inst_28918);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28919)){
var statearr_28962_28990 = state_28930__$1;
(statearr_28962_28990[(1)] = (21));

} else {
var statearr_28963_28991 = state_28930__$1;
(statearr_28963_28991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (5))){
var inst_28874 = cljs.core.async.close_BANG_(out);
var state_28930__$1 = state_28930;
var statearr_28964_28992 = state_28930__$1;
(statearr_28964_28992[(2)] = inst_28874);

(statearr_28964_28992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (14))){
var inst_28896 = (state_28930[(7)]);
var inst_28898 = cljs.core.chunked_seq_QMARK_(inst_28896);
var state_28930__$1 = state_28930;
if(inst_28898){
var statearr_28965_28993 = state_28930__$1;
(statearr_28965_28993[(1)] = (17));

} else {
var statearr_28966_28994 = state_28930__$1;
(statearr_28966_28994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (16))){
var inst_28914 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28967_28995 = state_28930__$1;
(statearr_28967_28995[(2)] = inst_28914);

(statearr_28967_28995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (10))){
var inst_28885 = (state_28930[(8)]);
var inst_28883 = (state_28930[(9)]);
var inst_28890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28883,inst_28885);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28930__$1,(13),out,inst_28890);
} else {
if((state_val_28931 === (18))){
var inst_28896 = (state_28930[(7)]);
var inst_28905 = cljs.core.first(inst_28896);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28930__$1,(20),out,inst_28905);
} else {
if((state_val_28931 === (8))){
var inst_28885 = (state_28930[(8)]);
var inst_28884 = (state_28930[(10)]);
var inst_28887 = (inst_28885 < inst_28884);
var inst_28888 = inst_28887;
var state_28930__$1 = state_28930;
if(cljs.core.truth_(inst_28888)){
var statearr_28968_28996 = state_28930__$1;
(statearr_28968_28996[(1)] = (10));

} else {
var statearr_28969_28997 = state_28930__$1;
(statearr_28969_28997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto__))
;
return ((function (switch__25864__auto__,c__26242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____1 = (function (state_28930){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_28930);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e28971){if((e28971 instanceof Object)){
var ex__25868__auto__ = e28971;
var statearr_28972_28998 = state_28930;
(statearr_28972_28998[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28999 = state_28930;
state_28930 = G__28999;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__ = function(state_28930){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____1.call(this,state_28930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25865__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto__))
})();
var state__26244__auto__ = (function (){var statearr_28973 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_28973[(6)] = c__26242__auto__);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto__))
);

return c__26242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29001 = arguments.length;
switch (G__29001) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29004 = arguments.length;
switch (G__29004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29007 = arguments.length;
switch (G__29007) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___29055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___29055,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___29055,out){
return (function (state_29031){
var state_val_29032 = (state_29031[(1)]);
if((state_val_29032 === (7))){
var inst_29026 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29033_29060 = state_29031__$1;
(statearr_29033_29060[(2)] = inst_29026);

(statearr_29033_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (1))){
var inst_29008 = null;
var state_29031__$1 = (function (){var statearr_29034 = state_29031;
(statearr_29034[(7)] = inst_29008);

return statearr_29034;
})();
var statearr_29035_29061 = state_29031__$1;
(statearr_29035_29061[(2)] = null);

(statearr_29035_29061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (4))){
var inst_29011 = (state_29031[(8)]);
var inst_29011__$1 = (state_29031[(2)]);
var inst_29012 = (inst_29011__$1 == null);
var inst_29013 = cljs.core.not(inst_29012);
var state_29031__$1 = (function (){var statearr_29036 = state_29031;
(statearr_29036[(8)] = inst_29011__$1);

return statearr_29036;
})();
if(inst_29013){
var statearr_29037_29062 = state_29031__$1;
(statearr_29037_29062[(1)] = (5));

} else {
var statearr_29038_29063 = state_29031__$1;
(statearr_29038_29063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (6))){
var state_29031__$1 = state_29031;
var statearr_29039_29064 = state_29031__$1;
(statearr_29039_29064[(2)] = null);

(statearr_29039_29064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (3))){
var inst_29028 = (state_29031[(2)]);
var inst_29029 = cljs.core.async.close_BANG_(out);
var state_29031__$1 = (function (){var statearr_29040 = state_29031;
(statearr_29040[(9)] = inst_29028);

return statearr_29040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29031__$1,inst_29029);
} else {
if((state_val_29032 === (2))){
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29031__$1,(4),ch);
} else {
if((state_val_29032 === (11))){
var inst_29011 = (state_29031[(8)]);
var inst_29020 = (state_29031[(2)]);
var inst_29008 = inst_29011;
var state_29031__$1 = (function (){var statearr_29041 = state_29031;
(statearr_29041[(7)] = inst_29008);

(statearr_29041[(10)] = inst_29020);

return statearr_29041;
})();
var statearr_29042_29065 = state_29031__$1;
(statearr_29042_29065[(2)] = null);

(statearr_29042_29065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (9))){
var inst_29011 = (state_29031[(8)]);
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29031__$1,(11),out,inst_29011);
} else {
if((state_val_29032 === (5))){
var inst_29008 = (state_29031[(7)]);
var inst_29011 = (state_29031[(8)]);
var inst_29015 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29011,inst_29008);
var state_29031__$1 = state_29031;
if(inst_29015){
var statearr_29044_29066 = state_29031__$1;
(statearr_29044_29066[(1)] = (8));

} else {
var statearr_29045_29067 = state_29031__$1;
(statearr_29045_29067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (10))){
var inst_29023 = (state_29031[(2)]);
var state_29031__$1 = state_29031;
var statearr_29046_29068 = state_29031__$1;
(statearr_29046_29068[(2)] = inst_29023);

(statearr_29046_29068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29032 === (8))){
var inst_29008 = (state_29031[(7)]);
var tmp29043 = inst_29008;
var inst_29008__$1 = tmp29043;
var state_29031__$1 = (function (){var statearr_29047 = state_29031;
(statearr_29047[(7)] = inst_29008__$1);

return statearr_29047;
})();
var statearr_29048_29069 = state_29031__$1;
(statearr_29048_29069[(2)] = null);

(statearr_29048_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___29055,out))
;
return ((function (switch__25864__auto__,c__26242__auto___29055,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_29049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29049[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_29049[(1)] = (1));

return statearr_29049;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_29031){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_29031);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e29050){if((e29050 instanceof Object)){
var ex__25868__auto__ = e29050;
var statearr_29051_29070 = state_29031;
(statearr_29051_29070[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29071 = state_29031;
state_29031 = G__29071;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_29031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_29031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___29055,out))
})();
var state__26244__auto__ = (function (){var statearr_29052 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_29052[(6)] = c__26242__auto___29055);

return statearr_29052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___29055,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29073 = arguments.length;
switch (G__29073) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___29146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___29146,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___29146,out){
return (function (state_29115){
var state_val_29116 = (state_29115[(1)]);
if((state_val_29116 === (7))){
var inst_29111 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29120_29147 = state_29115__$1;
(statearr_29120_29147[(2)] = inst_29111);

(statearr_29120_29147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (1))){
var inst_29074 = (new Array(n));
var inst_29075 = inst_29074;
var inst_29076 = (0);
var state_29115__$1 = (function (){var statearr_29121 = state_29115;
(statearr_29121[(7)] = inst_29076);

(statearr_29121[(8)] = inst_29075);

return statearr_29121;
})();
var statearr_29122_29148 = state_29115__$1;
(statearr_29122_29148[(2)] = null);

(statearr_29122_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (4))){
var inst_29080 = (state_29115[(9)]);
var inst_29080__$1 = (state_29115[(2)]);
var inst_29081 = (inst_29080__$1 == null);
var inst_29082 = cljs.core.not(inst_29081);
var state_29115__$1 = (function (){var statearr_29123 = state_29115;
(statearr_29123[(9)] = inst_29080__$1);

return statearr_29123;
})();
if(inst_29082){
var statearr_29124_29149 = state_29115__$1;
(statearr_29124_29149[(1)] = (5));

} else {
var statearr_29125_29150 = state_29115__$1;
(statearr_29125_29150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (15))){
var inst_29105 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29126_29151 = state_29115__$1;
(statearr_29126_29151[(2)] = inst_29105);

(statearr_29126_29151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (13))){
var state_29115__$1 = state_29115;
var statearr_29127_29152 = state_29115__$1;
(statearr_29127_29152[(2)] = null);

(statearr_29127_29152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (6))){
var inst_29076 = (state_29115[(7)]);
var inst_29101 = (inst_29076 > (0));
var state_29115__$1 = state_29115;
if(cljs.core.truth_(inst_29101)){
var statearr_29128_29153 = state_29115__$1;
(statearr_29128_29153[(1)] = (12));

} else {
var statearr_29129_29154 = state_29115__$1;
(statearr_29129_29154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (3))){
var inst_29113 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29115__$1,inst_29113);
} else {
if((state_val_29116 === (12))){
var inst_29075 = (state_29115[(8)]);
var inst_29103 = cljs.core.vec(inst_29075);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29115__$1,(15),out,inst_29103);
} else {
if((state_val_29116 === (2))){
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29115__$1,(4),ch);
} else {
if((state_val_29116 === (11))){
var inst_29095 = (state_29115[(2)]);
var inst_29096 = (new Array(n));
var inst_29075 = inst_29096;
var inst_29076 = (0);
var state_29115__$1 = (function (){var statearr_29130 = state_29115;
(statearr_29130[(7)] = inst_29076);

(statearr_29130[(10)] = inst_29095);

(statearr_29130[(8)] = inst_29075);

return statearr_29130;
})();
var statearr_29131_29155 = state_29115__$1;
(statearr_29131_29155[(2)] = null);

(statearr_29131_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (9))){
var inst_29075 = (state_29115[(8)]);
var inst_29093 = cljs.core.vec(inst_29075);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29115__$1,(11),out,inst_29093);
} else {
if((state_val_29116 === (5))){
var inst_29076 = (state_29115[(7)]);
var inst_29080 = (state_29115[(9)]);
var inst_29087 = (state_29115[(11)]);
var inst_29075 = (state_29115[(8)]);
var inst_29086 = (inst_29075[inst_29076] = inst_29080);
var inst_29087__$1 = (inst_29076 + (1));
var inst_29089 = (inst_29087__$1 < n);
var state_29115__$1 = (function (){var statearr_29132 = state_29115;
(statearr_29132[(12)] = inst_29086);

(statearr_29132[(11)] = inst_29087__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_29089)){
var statearr_29133_29156 = state_29115__$1;
(statearr_29133_29156[(1)] = (8));

} else {
var statearr_29134_29157 = state_29115__$1;
(statearr_29134_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (14))){
var inst_29108 = (state_29115[(2)]);
var inst_29109 = cljs.core.async.close_BANG_(out);
var state_29115__$1 = (function (){var statearr_29136 = state_29115;
(statearr_29136[(13)] = inst_29108);

return statearr_29136;
})();
var statearr_29137_29158 = state_29115__$1;
(statearr_29137_29158[(2)] = inst_29109);

(statearr_29137_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (10))){
var inst_29099 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29138_29159 = state_29115__$1;
(statearr_29138_29159[(2)] = inst_29099);

(statearr_29138_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (8))){
var inst_29087 = (state_29115[(11)]);
var inst_29075 = (state_29115[(8)]);
var tmp29135 = inst_29075;
var inst_29075__$1 = tmp29135;
var inst_29076 = inst_29087;
var state_29115__$1 = (function (){var statearr_29139 = state_29115;
(statearr_29139[(7)] = inst_29076);

(statearr_29139[(8)] = inst_29075__$1);

return statearr_29139;
})();
var statearr_29140_29160 = state_29115__$1;
(statearr_29140_29160[(2)] = null);

(statearr_29140_29160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___29146,out))
;
return ((function (switch__25864__auto__,c__26242__auto___29146,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_29115){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_29115);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__25868__auto__ = e29142;
var statearr_29143_29161 = state_29115;
(statearr_29143_29161[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29115;
state_29115 = G__29162;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_29115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_29115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___29146,out))
})();
var state__26244__auto__ = (function (){var statearr_29144 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_29144[(6)] = c__26242__auto___29146);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___29146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29164 = arguments.length;
switch (G__29164) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26242__auto___29256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26242__auto___29256,out){
return (function (){
var f__26243__auto__ = (function (){var switch__25864__auto__ = ((function (c__26242__auto___29256,out){
return (function (state_29209){
var state_val_29210 = (state_29209[(1)]);
if((state_val_29210 === (7))){
var inst_29205 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29212_29257 = state_29209__$1;
(statearr_29212_29257[(2)] = inst_29205);

(statearr_29212_29257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var inst_29165 = [];
var inst_29166 = inst_29165;
var inst_29167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29209__$1 = (function (){var statearr_29215 = state_29209;
(statearr_29215[(7)] = inst_29167);

(statearr_29215[(8)] = inst_29166);

return statearr_29215;
})();
var statearr_29217_29258 = state_29209__$1;
(statearr_29217_29258[(2)] = null);

(statearr_29217_29258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29170 = (state_29209[(9)]);
var inst_29170__$1 = (state_29209[(2)]);
var inst_29171 = (inst_29170__$1 == null);
var inst_29172 = cljs.core.not(inst_29171);
var state_29209__$1 = (function (){var statearr_29218 = state_29209;
(statearr_29218[(9)] = inst_29170__$1);

return statearr_29218;
})();
if(inst_29172){
var statearr_29219_29259 = state_29209__$1;
(statearr_29219_29259[(1)] = (5));

} else {
var statearr_29220_29260 = state_29209__$1;
(statearr_29220_29260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (15))){
var inst_29199 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29221_29261 = state_29209__$1;
(statearr_29221_29261[(2)] = inst_29199);

(statearr_29221_29261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (13))){
var state_29209__$1 = state_29209;
var statearr_29222_29262 = state_29209__$1;
(statearr_29222_29262[(2)] = null);

(statearr_29222_29262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var inst_29166 = (state_29209[(8)]);
var inst_29194 = inst_29166.length;
var inst_29195 = (inst_29194 > (0));
var state_29209__$1 = state_29209;
if(cljs.core.truth_(inst_29195)){
var statearr_29223_29263 = state_29209__$1;
(statearr_29223_29263[(1)] = (12));

} else {
var statearr_29224_29264 = state_29209__$1;
(statearr_29224_29264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (3))){
var inst_29207 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29209__$1,inst_29207);
} else {
if((state_val_29210 === (12))){
var inst_29166 = (state_29209[(8)]);
var inst_29197 = cljs.core.vec(inst_29166);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29209__$1,(15),out,inst_29197);
} else {
if((state_val_29210 === (2))){
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29209__$1,(4),ch);
} else {
if((state_val_29210 === (11))){
var inst_29170 = (state_29209[(9)]);
var inst_29174 = (state_29209[(10)]);
var inst_29187 = (state_29209[(2)]);
var inst_29188 = [];
var inst_29189 = inst_29188.push(inst_29170);
var inst_29166 = inst_29188;
var inst_29167 = inst_29174;
var state_29209__$1 = (function (){var statearr_29235 = state_29209;
(statearr_29235[(11)] = inst_29187);

(statearr_29235[(12)] = inst_29189);

(statearr_29235[(7)] = inst_29167);

(statearr_29235[(8)] = inst_29166);

return statearr_29235;
})();
var statearr_29236_29265 = state_29209__$1;
(statearr_29236_29265[(2)] = null);

(statearr_29236_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (9))){
var inst_29166 = (state_29209[(8)]);
var inst_29185 = cljs.core.vec(inst_29166);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29209__$1,(11),out,inst_29185);
} else {
if((state_val_29210 === (5))){
var inst_29167 = (state_29209[(7)]);
var inst_29170 = (state_29209[(9)]);
var inst_29174 = (state_29209[(10)]);
var inst_29174__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29170) : f.call(null,inst_29170));
var inst_29175 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29174__$1,inst_29167);
var inst_29179 = cljs.core.keyword_identical_QMARK_(inst_29167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29180 = ((inst_29175) || (inst_29179));
var state_29209__$1 = (function (){var statearr_29237 = state_29209;
(statearr_29237[(10)] = inst_29174__$1);

return statearr_29237;
})();
if(cljs.core.truth_(inst_29180)){
var statearr_29238_29266 = state_29209__$1;
(statearr_29238_29266[(1)] = (8));

} else {
var statearr_29239_29267 = state_29209__$1;
(statearr_29239_29267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (14))){
var inst_29202 = (state_29209[(2)]);
var inst_29203 = cljs.core.async.close_BANG_(out);
var state_29209__$1 = (function (){var statearr_29241 = state_29209;
(statearr_29241[(13)] = inst_29202);

return statearr_29241;
})();
var statearr_29242_29268 = state_29209__$1;
(statearr_29242_29268[(2)] = inst_29203);

(statearr_29242_29268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (10))){
var inst_29192 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29243_29273 = state_29209__$1;
(statearr_29243_29273[(2)] = inst_29192);

(statearr_29243_29273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29170 = (state_29209[(9)]);
var inst_29166 = (state_29209[(8)]);
var inst_29174 = (state_29209[(10)]);
var inst_29182 = inst_29166.push(inst_29170);
var tmp29240 = inst_29166;
var inst_29166__$1 = tmp29240;
var inst_29167 = inst_29174;
var state_29209__$1 = (function (){var statearr_29244 = state_29209;
(statearr_29244[(14)] = inst_29182);

(statearr_29244[(7)] = inst_29167);

(statearr_29244[(8)] = inst_29166__$1);

return statearr_29244;
})();
var statearr_29245_29276 = state_29209__$1;
(statearr_29245_29276[(2)] = null);

(statearr_29245_29276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26242__auto___29256,out))
;
return ((function (switch__25864__auto__,c__26242__auto___29256,out){
return (function() {
var cljs$core$async$state_machine__25865__auto__ = null;
var cljs$core$async$state_machine__25865__auto____0 = (function (){
var statearr_29246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29246[(0)] = cljs$core$async$state_machine__25865__auto__);

(statearr_29246[(1)] = (1));

return statearr_29246;
});
var cljs$core$async$state_machine__25865__auto____1 = (function (state_29209){
while(true){
var ret_value__25866__auto__ = (function (){try{while(true){
var result__25867__auto__ = switch__25864__auto__(state_29209);
if(cljs.core.keyword_identical_QMARK_(result__25867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25867__auto__;
}
break;
}
}catch (e29247){if((e29247 instanceof Object)){
var ex__25868__auto__ = e29247;
var statearr_29249_29277 = state_29209;
(statearr_29249_29277[(5)] = ex__25868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29278 = state_29209;
state_29209 = G__29278;
continue;
} else {
return ret_value__25866__auto__;
}
break;
}
});
cljs$core$async$state_machine__25865__auto__ = function(state_29209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25865__auto____1.call(this,state_29209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25865__auto____0;
cljs$core$async$state_machine__25865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25865__auto____1;
return cljs$core$async$state_machine__25865__auto__;
})()
;})(switch__25864__auto__,c__26242__auto___29256,out))
})();
var state__26244__auto__ = (function (){var statearr_29251 = (f__26243__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26243__auto__.cljs$core$IFn$_invoke$arity$0() : f__26243__auto__.call(null));
(statearr_29251[(6)] = c__26242__auto___29256);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26244__auto__);
});})(c__26242__auto___29256,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
