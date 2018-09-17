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
var G__19202 = arguments.length;
switch (G__19202) {
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
var interval_f = (function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,self,stop_QMARK_){
return (function() { 
var G__19249__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19231 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19231,the_cell__10769__auto__,context__10770__auto__,self,stop_QMARK_){
return (function cells$lib$frame_f(){
cljs.core.reset_BANG_(self,(function (){var G__19234 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19234) : f.call(null,G__19234));
})());

if(cljs.core.truth_(cljs.core.deref(stop_QMARK_))){
return null;
} else {
return window.requestAnimationFrame(cells$lib$frame_f);
}
});})(_STAR_cell_stack_STAR_19231,the_cell__10769__auto__,context__10770__auto__,self,stop_QMARK_))
,args__10771__auto__);
}catch (e19233){if((e19233 instanceof Error)){
var error__10772__auto__ = e19233;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19233;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19231;
}};
var G__19249 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19253__i = 0, G__19253__a = new Array(arguments.length -  0);
while (G__19253__i < G__19253__a.length) {G__19253__a[G__19253__i] = arguments[G__19253__i + 0]; ++G__19253__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19253__a,0,null);
} 
return G__19249__delegate.call(this,args__10771__auto__);};
G__19249.cljs$lang$maxFixedArity = 0;
G__19249.cljs$lang$applyTo = (function (arglist__19254){
var args__10771__auto__ = cljs.core.seq(arglist__19254);
return G__19249__delegate(args__10771__auto__);
});
G__19249.cljs$core$IFn$_invoke$arity$variadic = G__19249__delegate;
return G__19249;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,self,stop_QMARK_))
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
var G__19264 = arguments.length;
switch (G__19264) {
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
var G__19266 = cljs.core.deref(clear_key);
if((G__19266 == null)){
return null;
} else {
return clearInterval(G__19266);
}
});})(self,clear_key))
);
var interval_f = (function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,self,clear_key,_){
return (function() { 
var G__19276__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19271 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19271,the_cell__10769__auto__,context__10770__auto__,self,clear_key,_){
return (function (){
return cljs.core.reset_BANG_(self,(function (){var G__19273 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19273) : f.call(null,G__19273));
})());
});})(_STAR_cell_stack_STAR_19271,the_cell__10769__auto__,context__10770__auto__,self,clear_key,_))
,args__10771__auto__);
}catch (e19272){if((e19272 instanceof Error)){
var error__10772__auto__ = e19272;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19272;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19271;
}};
var G__19276 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19277__i = 0, G__19277__a = new Array(arguments.length -  0);
while (G__19277__i < G__19277__a.length) {G__19277__a[G__19277__i] = arguments[G__19277__i + 0]; ++G__19277__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19277__a,0,null);
} 
return G__19276__delegate.call(this,args__10771__auto__);};
G__19276.cljs$lang$maxFixedArity = 0;
G__19276.cljs$lang$applyTo = (function (arglist__19278){
var args__10771__auto__ = cljs.core.seq(arglist__19278);
return G__19276__delegate(args__10771__auto__);
});
G__19276.cljs$core$IFn$_invoke$arity$variadic = G__19276__delegate;
return G__19276;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,self,clear_key,_))
})();
cljs.core.vreset_BANG_(clear_key,setInterval(interval_f,n));

return cljs.core.reset_BANG_(self,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(initial_value) : f.call(null,initial_value)));
}
});

cells.lib.interval.cljs$lang$maxFixedArity = 3;

cells.lib.timeout = (function cells$lib$timeout(var_args){
var G__19280 = arguments.length;
switch (G__19280) {
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
var clear_key = setTimeout((function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,self,_){
return (function() { 
var G__19290__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19285 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19285,the_cell__10769__auto__,context__10770__auto__,self,_){
return (function (){
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null);

return cljs.core.reset_BANG_(self,(function (){var G__19287 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19287) : f.call(null,G__19287));
})());
});})(_STAR_cell_stack_STAR_19285,the_cell__10769__auto__,context__10770__auto__,self,_))
,args__10771__auto__);
}catch (e19286){if((e19286 instanceof Error)){
var error__10772__auto__ = e19286;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19286;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19285;
}};
var G__19290 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19291__i = 0, G__19291__a = new Array(arguments.length -  0);
while (G__19291__i < G__19291__a.length) {G__19291__a[G__19291__i] = arguments[G__19291__i + 0]; ++G__19291__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19291__a,0,null);
} 
return G__19290__delegate.call(this,args__10771__auto__);};
G__19290.cljs$lang$maxFixedArity = 0;
G__19290.cljs$lang$applyTo = (function (arglist__19292){
var args__10771__auto__ = cljs.core.seq(arglist__19292);
return G__19290__delegate(args__10771__auto__);
});
G__19290.cljs$core$IFn$_invoke$arity$variadic = G__19290__delegate;
return G__19290;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,self,_))
})(),n);
cells.eval_context.on_dispose(self,((function (self,_,clear_key){
return (function (){
return clearTimeout(clear_key);
});})(self,_,clear_key))
);

return initial_value;
});

cells.lib.timeout.cljs$lang$maxFixedArity = 3;

cells.lib.parse_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json->clj","json->clj",1598798328),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__19293_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__19293_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),JSON.parse),new cljs.core.Keyword(null,"json","json",1279968570),JSON.parse,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.identity], null);
/**
 * Fetch a resource from a url. By default, response is parsed as JSON and converted to Clojure via clj->js with :keywordize-keys true.
 *   Accepts options :format, which may be :json or :text, and :query, a map which will be
 *   appended to url as a query parameter string.
 */
cells.lib.fetch = (function cells$lib$fetch(var_args){
var G__19326 = arguments.length;
switch (G__19326) {
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

cells.lib.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,p__19335){
var map__19336 = p__19335;
var map__19336__$1 = ((((!((map__19336 == null)))?(((((map__19336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19336):map__19336);
var options = map__19336__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19336__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json->clj","json->clj",1598798328));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19336__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,options], null);

var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var url__$1 = (function (){var G__19341 = url;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19341),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.lib.query_string(query))].join('');
} else {
return G__19341;
}
})();
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells.lib.parse_fns,format);
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

var G__19342_19355 = url__$1;
var G__19343_19356 = (function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,G__19342_19355,self,url__$1,parse,map__19336,map__19336__$1,options,format,query){
return (function() { 
var G__19357__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19344 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19344,the_cell__10769__auto__,context__10770__auto__,G__19342_19355,self,url__$1,parse,map__19336,map__19336__$1,options,format,query){
return (function (event){
var xhrio = event.target;
if(cljs.core.not(xhrio.isSuccess())){
var G__19346 = self;
var G__19347 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__19348 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var G__19349 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19349);
})(),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),xhrio], null);
return (cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3(G__19346,G__19347,G__19348) : cells.lib.status_BANG_.call(null,G__19346,G__19347,G__19348));
} else {
var formatted_value = (function (){var G__19350 = xhrio.getResponseText();
return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__19350) : parse.call(null,G__19350));
})();
(cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null) : cells.lib.status_BANG_.call(null,self,null));

return cljs.core.reset_BANG_(self,formatted_value);
}
});})(_STAR_cell_stack_STAR_19344,the_cell__10769__auto__,context__10770__auto__,G__19342_19355,self,url__$1,parse,map__19336,map__19336__$1,options,format,query))
,args__10771__auto__);
}catch (e19345){if((e19345 instanceof Error)){
var error__10772__auto__ = e19345;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19345;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19344;
}};
var G__19357 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19359__i = 0, G__19359__a = new Array(arguments.length -  0);
while (G__19359__i < G__19359__a.length) {G__19359__a[G__19359__i] = arguments[G__19359__i + 0]; ++G__19359__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19359__a,0,null);
} 
return G__19357__delegate.call(this,args__10771__auto__);};
G__19357.cljs$lang$maxFixedArity = 0;
G__19357.cljs$lang$applyTo = (function (arglist__19360){
var args__10771__auto__ = cljs.core.seq(arglist__19360);
return G__19357__delegate(args__10771__auto__);
});
G__19357.cljs$core$IFn$_invoke$arity$variadic = G__19357__delegate;
return G__19357;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,G__19342_19355,self,url__$1,parse,map__19336,map__19336__$1,options,format,query))
})();
goog.net.XhrIo.send(G__19342_19355,G__19343_19356);

return cljs.core.deref(self);
});

cells.lib.fetch.cljs$lang$maxFixedArity = 2;

cells.lib.geo_location = (function cells$lib$geo_location(){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

return navigator.geolocation.getCurrentPosition((function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,self){
return (function() { 
var G__19369__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19361 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19361,the_cell__10769__auto__,context__10770__auto__,self){
return (function (location){
cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null);

return cljs.core.reset_BANG_(self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),location.coords.latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),location.coords.longitude], null));
});})(_STAR_cell_stack_STAR_19361,the_cell__10769__auto__,context__10770__auto__,self))
,args__10771__auto__);
}catch (e19362){if((e19362 instanceof Error)){
var error__10772__auto__ = e19362;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19362;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19361;
}};
var G__19369 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19370__i = 0, G__19370__a = new Array(arguments.length -  0);
while (G__19370__i < G__19370__a.length) {G__19370__a[G__19370__i] = arguments[G__19370__i + 0]; ++G__19370__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19370__a,0,null);
} 
return G__19369__delegate.call(this,args__10771__auto__);};
G__19369.cljs$lang$maxFixedArity = 0;
G__19369.cljs$lang$applyTo = (function (arglist__19371){
var args__10771__auto__ = cljs.core.seq(arglist__19371);
return G__19369__delegate(args__10771__auto__);
});
G__19369.cljs$core$IFn$_invoke$arity$variadic = G__19369__delegate;
return G__19369;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,self))
})(),(function (){var the_cell__10769__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__10770__auto__ = cells.cell._STAR_eval_context_STAR_;
return ((function (the_cell__10769__auto__,context__10770__auto__,self){
return (function() { 
var G__19373__delegate = function (args__10771__auto__){
var _STAR_cell_stack_STAR_19367 = cells.cell._STAR_cell_stack_STAR_;
cells.cell._STAR_cell_stack_STAR_ = cljs.core.cons(the_cell__10769__auto__,cells.cell._STAR_cell_stack_STAR_);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cell_stack_STAR_19367,the_cell__10769__auto__,context__10770__auto__,self){
return (function (error){
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3(self,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''));
});})(_STAR_cell_stack_STAR_19367,the_cell__10769__auto__,context__10770__auto__,self))
,args__10771__auto__);
}catch (e19368){if((e19368 instanceof Error)){
var error__10772__auto__ = e19368;
return cells.eval_context.handle_error(context__10770__auto__,error__10772__auto__);
} else {
throw e19368;

}
}}finally {cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR_19367;
}};
var G__19373 = function (var_args){
var args__10771__auto__ = null;
if (arguments.length > 0) {
var G__19374__i = 0, G__19374__a = new Array(arguments.length -  0);
while (G__19374__i < G__19374__a.length) {G__19374__a[G__19374__i] = arguments[G__19374__i + 0]; ++G__19374__i;}
  args__10771__auto__ = new cljs.core.IndexedSeq(G__19374__a,0,null);
} 
return G__19373__delegate.call(this,args__10771__auto__);};
G__19373.cljs$lang$maxFixedArity = 0;
G__19373.cljs$lang$applyTo = (function (arglist__19375){
var args__10771__auto__ = cljs.core.seq(arglist__19375);
return G__19373__delegate(args__10771__auto__);
});
G__19373.cljs$core$IFn$_invoke$arity$variadic = G__19373__delegate;
return G__19373;
})()
;
;})(the_cell__10769__auto__,context__10770__auto__,self))
})());
});

//# sourceMappingURL=cells.lib.js.map
