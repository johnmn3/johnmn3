goog.provide('cells.lib');
goog.require('cljs.core');
goog.require('cells.cell');
goog.require('cells.eval_context');
goog.require('goog.net.XhrIo');
goog.require('goog.net.ErrorCode');
goog.require('cells.util');
goog.require('goog.Uri');




cells.lib.status_BANG_ = cells.cell.status_BANG_;
/**
 * Returns the cell's status (a keyword)
 */
cells.lib.status = cells.cell.status;
/**
 * Returns the cell's status message, if it exists.
 */
cells.lib.message = cells.cell.message;
/**
 * Returns true if cell's status is :error
 */
cells.lib.error_QMARK_ = cells.cell.error_QMARK_;
/**
 * Wraps a cell with a view (as metadata)
 */
cells.lib.with_view = cells.cell.with_view;
/**
 * Returns true if x has a status of :loading.
 */
cells.lib.loading_QMARK_ = (function cells$lib$loading_QMARK_(x){
var and__3938__auto__ = ((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cells$cell$IStatus$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cells.cell.IStatus,x):false)):cljs.core.native_satisfies_QMARK_(cells.cell.IStatus,x));
if(and__3938__auto__){
return cells.cell.loading_QMARK_(x);
} else {
return and__3938__auto__;
}
});
cells.lib.dependencies = cells.cell.dependencies;
cells.lib.dependents = cells.cell.dependents;
cells.lib.unique_id = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cells.util.unique_id);
cells.lib.query_string = (function cells$lib$query_string(query){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(query)).toString();
});
cells.lib._on_frame = (function cells$lib$_on_frame(var_args){
var G__16086 = arguments.length;
switch (G__16086) {
case 1:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,null);
});

cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2 = (function (f,initial_value){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var stop_QMARK_ = cljs.core.volatile_BANG_(false);
var interval_f = (function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,self,stop_QMARK_){
return (function() { 
var G__16099__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16088 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16088,the_cell__15599__auto__,context__15600__auto__,self,stop_QMARK_){
return (function cells$lib$frame_f(){
cljs.core.reset_BANG_(self,(function (){var G__16095 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16095) : f.call(null,G__16095));
})());

if(cljs.core.truth_(cljs.core.deref(stop_QMARK_))){
return null;
} else {
return window.requestAnimationFrame(cells$lib$frame_f);
}
});})(_STAR_cell_stack_STAR_16088,the_cell__15599__auto__,context__15600__auto__,self,stop_QMARK_))
,args__15601__auto__);
}catch (e16093){if((e16093 instanceof Error)){
var error__15602__auto__ = e16093;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16093;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16088;
}};
var G__16099 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16104__i = 0, G__16104__a = new Array(arguments.length -  0);
while (G__16104__i < G__16104__a.length) {G__16104__a[G__16104__i] = arguments[G__16104__i + 0]; ++G__16104__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16104__a,0,null);
} 
return G__16099__delegate.call(this,args__15601__auto__);};
G__16099.cljs$lang$maxFixedArity = 0;
G__16099.cljs$lang$applyTo = (function (arglist__16105){
var args__15601__auto__ = cljs.core.seq(arglist__16105);
return G__16099__delegate(args__15601__auto__);
});
G__16099.cljs$core$IFn$_invoke$arity$variadic = G__16099__delegate;
return G__16099;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,self,stop_QMARK_))
})();
cells.eval_context.on_dispose(self,((function (self,stop_QMARK_,interval_f){
return (function (){
return cljs.core.vreset_BANG_(stop_QMARK_,true);
});})(self,stop_QMARK_,interval_f))
);

cljs.core.reset_BANG_(self,initial_value);

return window.requestAnimationFrame(interval_f);
});

cells.lib._on_frame.cljs$lang$maxFixedArity = 2;

cells.lib.interval = (function cells$lib$interval(var_args){
var G__16110 = arguments.length;
switch (G__16110) {
case 2:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib.interval.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3(n,f,null);
});

cells.lib.interval.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,initial_value);
} else {
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var clear_key = cljs.core.volatile_BANG_(null);
var _ = cells.eval_context.on_dispose(self,((function (self,clear_key){
return (function (){
var G__16116 = cljs.core.deref(clear_key);
if((G__16116 == null)){
return null;
} else {
return clearInterval(G__16116);
}
});})(self,clear_key))
);
var interval_f = (function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,self,clear_key,_){
return (function() { 
var G__16125__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16117 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16117,the_cell__15599__auto__,context__15600__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,(function (){var G__16119 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16119) : f.call(null,G__16119));
})());
});})(_STAR_cell_stack_STAR_16117,the_cell__15599__auto__,context__15600__auto__,self,clear_key,_))
,args__15601__auto__);
}catch (e16118){if((e16118 instanceof Error)){
var error__15602__auto__ = e16118;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16118;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16117;
}};
var G__16125 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16126__i = 0, G__16126__a = new Array(arguments.length -  0);
while (G__16126__i < G__16126__a.length) {G__16126__a[G__16126__i] = arguments[G__16126__i + 0]; ++G__16126__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16126__a,0,null);
} 
return G__16125__delegate.call(this,args__15601__auto__);};
G__16125.cljs$lang$maxFixedArity = 0;
G__16125.cljs$lang$applyTo = (function (arglist__16127){
var args__15601__auto__ = cljs.core.seq(arglist__16127);
return G__16125__delegate(args__15601__auto__);
});
G__16125.cljs$core$IFn$_invoke$arity$variadic = G__16125__delegate;
return G__16125;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,self,clear_key,_))
})();
cljs.core.vreset_BANG_(clear_key,setInterval(interval_f,n));

return cljs.core.reset_BANG_(self,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(initial_value) : f.call(null,initial_value)));
}
});

cells.lib.interval.cljs$lang$maxFixedArity = 3;

cells.lib.timeout = (function cells$lib$timeout(var_args){
var G__16137 = arguments.length;
switch (G__16137) {
case 2:
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib.timeout.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$3(n,f,null);
});

cells.lib.timeout.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var _ = cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"loading","loading",-737050189));
var clear_key = setTimeout((function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,self,_){
return (function() { 
var G__16150__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16139 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16139,the_cell__15599__auto__,context__15600__auto__,self,_){
return (function (){
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null);

return cljs.core.reset_BANG_(self,(function (){var G__16144 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16144) : f.call(null,G__16144));
})());
});})(_STAR_cell_stack_STAR_16139,the_cell__15599__auto__,context__15600__auto__,self,_))
,args__15601__auto__);
}catch (e16142){if((e16142 instanceof Error)){
var error__15602__auto__ = e16142;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16142;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16139;
}};
var G__16150 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16153__i = 0, G__16153__a = new Array(arguments.length -  0);
while (G__16153__i < G__16153__a.length) {G__16153__a[G__16153__i] = arguments[G__16153__i + 0]; ++G__16153__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16153__a,0,null);
} 
return G__16150__delegate.call(this,args__15601__auto__);};
G__16150.cljs$lang$maxFixedArity = 0;
G__16150.cljs$lang$applyTo = (function (arglist__16154){
var args__15601__auto__ = cljs.core.seq(arglist__16154);
return G__16150__delegate(args__15601__auto__);
});
G__16150.cljs$core$IFn$_invoke$arity$variadic = G__16150__delegate;
return G__16150;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,self,_))
})(),n);
cells.eval_context.on_dispose(self,((function (self,_,clear_key){
return (function (){
return clearTimeout(clear_key);
});})(self,_,clear_key))
);

return initial_value;
});

cells.lib.timeout.cljs$lang$maxFixedArity = 3;

cells.lib.parse_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json->clj","json->clj",1598798328),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16156_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__16156_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),JSON.parse),new cljs.core.Keyword(null,"json","json",1279968570),JSON.parse,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.identity], null);
/**
 * Fetch a resource from a url. By default, response is parsed as JSON and converted to Clojure via clj->js with :keywordize-keys true.
 *   Accepts options :format, which may be :json or :text, and :query, a map which will be
 *   appended to url as a query parameter string.
 */
cells.lib.fetch = (function cells$lib$fetch(var_args){
var G__16161 = arguments.length;
switch (G__16161) {
case 1:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cells.lib.fetch.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
});

cells.lib.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,p__16163){
var map__16164 = p__16163;
var map__16164__$1 = ((((!((map__16164 == null)))?(((((map__16164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16164):map__16164);
var options = map__16164__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16164__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json->clj","json->clj",1598798328));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16164__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,options], null);

var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var url__$1 = (function (){var G__16169 = url;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16169),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.lib.query_string(query))].join('');
} else {
return G__16169;
}
})();
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells.lib.parse_fns,format);
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

var G__16170_16199 = url__$1;
var G__16171_16200 = (function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,G__16170_16199,self,url__$1,parse,map__16164,map__16164__$1,options,format,query){
return (function() { 
var G__16201__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16176 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16176,the_cell__15599__auto__,context__15600__auto__,G__16170_16199,self,url__$1,parse,map__16164,map__16164__$1,options,format,query){
return (function (event){
var xhrio = event.target;
if(cljs.core.not(xhrio.isSuccess())){
var G__16179 = self;
var G__16180 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__16181 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__16185 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__16185);
})(),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),xhrio], null);
return (cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3(G__16179,G__16180,G__16181) : cells.lib.status_BANG_.call(null,G__16179,G__16180,G__16181));
} else {
var formatted_value = (function (){var G__16189 = xhrio.getResponseText();
return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__16189) : parse.call(null,G__16189));
})();
(cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null) : cells.lib.status_BANG_.call(null,self,null));

return cljs.core.reset_BANG_(self,formatted_value);
}
});})(_STAR_cell_stack_STAR_16176,the_cell__15599__auto__,context__15600__auto__,G__16170_16199,self,url__$1,parse,map__16164,map__16164__$1,options,format,query))
,args__15601__auto__);
}catch (e16177){if((e16177 instanceof Error)){
var error__15602__auto__ = e16177;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16177;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16176;
}};
var G__16201 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16210__i = 0, G__16210__a = new Array(arguments.length -  0);
while (G__16210__i < G__16210__a.length) {G__16210__a[G__16210__i] = arguments[G__16210__i + 0]; ++G__16210__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16210__a,0,null);
} 
return G__16201__delegate.call(this,args__15601__auto__);};
G__16201.cljs$lang$maxFixedArity = 0;
G__16201.cljs$lang$applyTo = (function (arglist__16212){
var args__15601__auto__ = cljs.core.seq(arglist__16212);
return G__16201__delegate(args__15601__auto__);
});
G__16201.cljs$core$IFn$_invoke$arity$variadic = G__16201__delegate;
return G__16201;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,G__16170_16199,self,url__$1,parse,map__16164,map__16164__$1,options,format,query))
})();
goog.net.XhrIo.send(G__16170_16199,G__16171_16200);

return cljs.core.deref(self);
});

cells.lib.fetch.cljs$lang$maxFixedArity = 2;

cells.lib.geo_location = (function cells$lib$geo_location(){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

return navigator.geolocation.getCurrentPosition((function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,self){
return (function() { 
var G__16229__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16215 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16215,the_cell__15599__auto__,context__15600__auto__,self){
return (function (location){
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null);

return cljs.core.reset_BANG_(self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),location.coords.latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),location.coords.longitude], null));
});})(_STAR_cell_stack_STAR_16215,the_cell__15599__auto__,context__15600__auto__,self))
,args__15601__auto__);
}catch (e16216){if((e16216 instanceof Error)){
var error__15602__auto__ = e16216;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16216;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16215;
}};
var G__16229 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16235__i = 0, G__16235__a = new Array(arguments.length -  0);
while (G__16235__i < G__16235__a.length) {G__16235__a[G__16235__i] = arguments[G__16235__i + 0]; ++G__16235__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16235__a,0,null);
} 
return G__16229__delegate.call(this,args__15601__auto__);};
G__16229.cljs$lang$maxFixedArity = 0;
G__16229.cljs$lang$applyTo = (function (arglist__16237){
var args__15601__auto__ = cljs.core.seq(arglist__16237);
return G__16229__delegate(args__15601__auto__);
});
G__16229.cljs$core$IFn$_invoke$arity$variadic = G__16229__delegate;
return G__16229;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,self))
})(),(function (){var the_cell__15599__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__15600__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__15599__auto__,context__15600__auto__,self){
return (function() { 
var G__16240__delegate = function (args__15601__auto__){
var _STAR_cell_stack_STAR_16223 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__15599__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_16223,the_cell__15599__auto__,context__15600__auto__,self){
return (function (error){
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''));
});})(_STAR_cell_stack_STAR_16223,the_cell__15599__auto__,context__15600__auto__,self))
,args__15601__auto__);
}catch (e16224){if((e16224 instanceof Error)){
var error__15602__auto__ = e16224;
return cells.eval_context.handle_error(context__15600__auto__,error__15602__auto__);
} else {
throw e16224;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_16223;
}};
var G__16240 = function (var_args){
var args__15601__auto__ = null;
if (arguments.length > 0) {
var G__16245__i = 0, G__16245__a = new Array(arguments.length -  0);
while (G__16245__i < G__16245__a.length) {G__16245__a[G__16245__i] = arguments[G__16245__i + 0]; ++G__16245__i;}
  args__15601__auto__ = new cljs.core.IndexedSeq(G__16245__a,0,null);
} 
return G__16240__delegate.call(this,args__15601__auto__);};
G__16240.cljs$lang$maxFixedArity = 0;
G__16240.cljs$lang$applyTo = (function (arglist__16248){
var args__15601__auto__ = cljs.core.seq(arglist__16248);
return G__16240__delegate(args__15601__auto__);
});
G__16240.cljs$core$IFn$_invoke$arity$variadic = G__16240__delegate;
return G__16240;
})()
;
;})(the_cell__15599__auto__,context__15600__auto__,self))
})());
});

//# sourceMappingURL=cells.lib.js.map
