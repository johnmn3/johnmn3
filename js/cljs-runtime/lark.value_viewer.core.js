goog.provide('lark.value_viewer.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('re_view.util');
goog.require('re_view.core');
goog.require('re_view.hiccup.core');
goog.require('goog.async.Deferred');
lark.value_viewer.core.space = "\u00A0";
lark.value_viewer.core.kind = (function lark$value_viewer$core$kind(thing){
if(cljs.core.char_QMARK_(thing)){
return new cljs.core.Keyword(null,"character","character",380652989);
} else {
if(thing === false){
return new cljs.core.Keyword(null,"false","false",1277713805);
} else {
if((thing instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.seq_QMARK_(thing)){
return new cljs.core.Keyword(null,"sequence","sequence",926807414);
} else {
if(cljs.core.list_QMARK_(thing)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(thing)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.var_QMARK_(thing)){
return new cljs.core.Keyword(null,"var","var",-769682797);
} else {
if(cljs.core.fn_QMARK_(thing)){
return new cljs.core.Keyword(null,"function","function",-2127255473);
} else {
if((thing == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
if(typeof thing === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(cljs.core.set_QMARK_(thing)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(typeof thing === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((thing instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(thing === true){
return new cljs.core.Keyword(null,"true","true",-1114210334);
} else {
if(cljs.core.vector_QMARK_(thing)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.object_QMARK_(thing)){
return new cljs.core.Keyword(null,"object","object",1474613949);
} else {
if((thing instanceof cljs.core.Atom)){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
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
});
lark.value_viewer.core.ArrowPointingDown = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7 10l5 5 5-5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M0 0h24v24H0z",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null);
lark.value_viewer.core.ArrowPointingUp = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(lark.value_viewer.core.ArrowPointingDown,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"style","style",-496642736)], null),cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(180deg)");
lark.value_viewer.core.bracket_type = (function lark$value_viewer$core$bracket_type(value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);

}
}
}
});
lark.value_viewer.core.wrap_value = (function lark$value_viewer$core$wrap_value(p__34110,value){
var vec__34115 = p__34110;
var lb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34115,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34115,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".inline-flex.items-stretch",".inline-flex.items-stretch",-119681730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-start.nowrap",".flex.items-start.nowrap",1692765268),lb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.v-top","div.v-top",-2134951473),value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-end.nowrap",".flex.items-end.nowrap",-1331898808),rb], null)], null);
});
cljs.core.Keyword.prototype.re_view$hiccup$core$IEmitHiccup$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.re_view$hiccup$core$IEmitHiccup$to_hiccup$arity$1 = (function (this$){
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join('');
});
var the_class__16588__auto___34149 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-mount","view/will-mount",-435076322),(function (p__34133){
var map__34134 = p__34133;
var map__34134__$1 = ((((!((map__34134 == null)))?(((((map__34134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34134):map__34134);
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34134__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34134__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return deferred.addCallback(((function (map__34134,map__34134__$1,deferred,state){
return (function (p1__34124_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),p1__34124_SHARP_);
});})(map__34134,map__34134__$1,deferred,state))
).addErrback(((function (map__34134,map__34134__$1,deferred,state){
return (function (p1__34125_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),p1__34125_SHARP_);
});})(map__34134,map__34134__$1,deferred,state))
);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function lark$value_viewer$core$display_deferred(p__34137){
var map__34138 = p__34137;
var map__34138__$1 = ((((!((map__34138 == null)))?(((((map__34138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34138):map__34138);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__34140 = cljs.core.deref(state);
var map__34140__$1 = ((((!((map__34140 == null)))?(((((map__34140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34140):map__34140);
var s = map__34140__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray.i",".gray.i",-2008651981),"goog.async.Deferred"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pv3",".pv3",-180505674),(((s == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".progress-indeterminate",".progress-indeterminate",1029899870)], null):(cljs.core.truth_(error)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''):(function (){var or__3949__auto__ = (function (){var G__34148 = value;
if((G__34148 == null)){
return null;
} else {
return (lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1 ? lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1(G__34148) : lark.value_viewer.core.format_value.call(null,G__34148));
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".gray",".gray",-216114822),"Finished."], null);
}
})()
))], null)], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/display-deferred"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
lark.value_viewer.core.display_deferredClass = the_class__16588__auto___34149;

lark.value_viewer.core.display_deferred = re_view.core.factory(the_class__16588__auto___34149);
lark.value_viewer.core.expander_outter = new cljs.core.Keyword(null,".dib.bg-darken.ph2.pv1.mh1.br2",".dib.bg-darken.ph2.pv1.mh1.br2",-468054288);
lark.value_viewer.core.inline_centered = new cljs.core.Keyword(null,".inline-flex.items-center",".inline-flex.items-center",-1378017184);
lark.value_viewer.core._STAR_format_depth_limit_STAR_ = (3);
lark.value_viewer.core.expanded_QMARK_ = (function lark$value_viewer$core$expanded_QMARK_(p__34162,depth){
var map__34163 = p__34162;
var map__34163__$1 = ((((!((map__34163 == null)))?(((((map__34163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34163):map__34163);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34163__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.boolean_QMARK_(new cljs.core.Keyword(null,"collection-expanded?","collection-expanded?",-1512614627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return new cljs.core.Keyword(null,"collection-expanded?","collection-expanded?",-1512614627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
} else {
var and__3938__auto__ = depth;
if(cljs.core.truth_(and__3938__auto__)){
return (depth < lark.value_viewer.core._STAR_format_depth_limit_STAR_);
} else {
return and__3938__auto__;
}
}
});
lark.value_viewer.core.toggle_depth = (function lark$value_viewer$core$toggle_depth(p__34174,depth,label){
var map__34175 = p__34174;
var map__34175__$1 = ((((!((map__34175 == null)))?(((((map__34175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34175):map__34175);
var this$ = map__34175__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34175__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var is_expanded_QMARK_ = lark.value_viewer.core.expanded_QMARK_(this$,depth);
var class$ = (cljs.core.truth_(is_expanded_QMARK_)?"cursor-zoom-out hover-bg-darken ":"cursor-zoom-in gray hover-black");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dib",".dib",-675244649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_expanded_QMARK_,class$,map__34175,map__34175__$1,this$,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"collection-expanded?","collection-expanded?",-1512614627),cljs.core.not(is_expanded_QMARK_));
});})(is_expanded_QMARK_,class$,map__34175,map__34175__$1,this$,state))
], null),label], null);
});
var the_class__16588__auto___34195 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit-n","limit-n",593665105),(20),new cljs.core.Keyword(null,"collection-expanded?","collection-expanded?",-1512614627),null], null),new cljs.core.Keyword("view","render","view/render",-1412767573),(function lark$value_viewer$core$format_collection(p__34180,depth,value){
var map__34182 = p__34180;
var map__34182__$1 = ((((!((map__34182 == null)))?(((((map__34182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34182):map__34182);
var this$ = map__34182__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__34185 = cljs.core.deref(state);
var map__34185__$1 = ((((!((map__34185 == null)))?(((((map__34185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34185):map__34185);
var limit_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34185__$1,new cljs.core.Keyword(null,"limit-n","limit-n",593665105));
var vec__34186 = lark.value_viewer.core.bracket_type(value);
var lb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(1),null);
var more_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.take.cljs$core$IFn$_invoke$arity$2((limit_n + (1)),value)),(limit_n + (1)));
var hover_class = ((cljs.core.even_QMARK_(depth))?"hover-bg-darken":"hover-bg-lighten");
if(cljs.core.empty_QMARK_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join('');
} else {
if(cljs.core.truth_(lark.value_viewer.core.expanded_QMARK_(this$,depth))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".inline-flex.items-stretch",".inline-flex.items-stretch",-119681730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),hover_class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-start.nowrap",".flex.items-start.nowrap",1692765268),((cljs.core.empty_QMARK_(value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb)].join(''):lark.value_viewer.core.toggle_depth(this$,depth,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join('')))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.v-top","div.v-top",-2134951473),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",re_view.util.map_with_keys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lark.value_viewer.core.format_value,(depth + (1))),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit_n,value)], 0)))], null),((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-end",".flex.items-end",-35794579),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.value_viewer.core.expander_outter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__34185,map__34185__$1,limit_n,vec__34186,lb,rb,more_QMARK_,hover_class,map__34182,map__34182__$1,this$,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"limit-n","limit-n",593665105),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(20)], 0));
});})(map__34185,map__34185__$1,limit_n,vec__34186,lb,rb,more_QMARK_,hover_class,map__34182,map__34182__$1,this$,state))
], null),"\u2026"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex.items-end.nowrap",".flex.items-end.nowrap",-1331898808),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".inline-flex.items-center.gray.nowrap",".inline-flex.items-center.gray.nowrap",1630792237),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),hover_class], null),lark.value_viewer.core.toggle_depth(this$,depth,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),"\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join(''))], null);

}
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/format-collection"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
lark.value_viewer.core.format_collectionClass = the_class__16588__auto___34195;

lark.value_viewer.core.format_collection = re_view.core.factory(the_class__16588__auto___34195);
var the_class__16588__auto___34295 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit-n","limit-n",593665105),(20),new cljs.core.Keyword(null,"collection-expanded?","collection-expanded?",-1512614627),null], null),new cljs.core.Keyword("view","render","view/render",-1412767573),(function lark$value_viewer$core$format_map(p__34247,depth,value){
var map__34248 = p__34247;
var map__34248__$1 = ((((!((map__34248 == null)))?(((((map__34248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34248):map__34248);
var this$ = map__34248__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__34257 = cljs.core.deref(state);
var map__34257__$1 = ((((!((map__34257 == null)))?(((((map__34257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34257):map__34257);
var limit_n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword(null,"limit-n","limit-n",593665105));
var vec__34258 = lark.value_viewer.core.bracket_type(value);
var lb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(0),null);
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(1),null);
var more_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.take.cljs$core$IFn$_invoke$arity$2((limit_n + (1)),value)),(limit_n + (1)));
var last_n = ((more_QMARK_)?limit_n:cljs.core.count(value));
var hover_class = ((cljs.core.even_QMARK_(depth))?"hover-bg-darken":"hover-bg-lighten");
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.empty_QMARK_(value);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return lark.value_viewer.core.expanded_QMARK_(this$,depth);
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.relative.inline-flex.v-mid","table.relative.inline-flex.v-mid",-1374451973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),hover_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var or__3949__auto__ = (function (){var G__34282 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit_n,value));
if((G__34282 == null)){
return null;
} else {
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__34282,map__34257,map__34257__$1,limit_n,vec__34258,lb,rb,more_QMARK_,last_n,hover_class,map__34248,map__34248__$1,this$,state){
return (function (n,p__34283){
var vec__34284 = p__34283;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.v-top.nowrap","td.v-top.nowrap",1026764704),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))?lark.value_viewer.core.toggle_depth(this$,depth,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join('')):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.v-top","td.v-top",342361136),(function (){var G__34287 = (depth + (1));
var G__34288 = a;
return (lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2 ? lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2(G__34287,G__34288) : lark.value_viewer.core.format_value.call(null,G__34287,G__34288));
})(),lark.value_viewer.core.space], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.v-top","td.v-top",342361136),(function (){var G__34289 = (depth + (1));
var G__34290 = b;
return (lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2 ? lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2(G__34289,G__34290) : lark.value_viewer.core.format_value.call(null,G__34289,G__34290));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.v-top.nowrap","td.v-top.nowrap",1026764704),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n + (1)),last_n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join(''):null)], null)], null);
});})(G__34282,map__34257,map__34257__$1,limit_n,vec__34258,lb,rb,more_QMARK_,last_n,hover_class,map__34248,map__34248__$1,this$,state))
,G__34282);
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.hover-bg-darken.nowrap","td.hover-bg-darken.nowrap",-1506715160),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join('')], null)], null);
}
})(),((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.value_viewer.core.expander_outter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__34257,map__34257__$1,limit_n,vec__34258,lb,rb,more_QMARK_,last_n,hover_class,map__34248,map__34248__$1,this$,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"limit-n","limit-n",593665105),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(20)], 0));
});})(map__34257,map__34257__$1,limit_n,vec__34258,lb,rb,more_QMARK_,last_n,hover_class,map__34248,map__34248__$1,this$,state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.value_viewer.core.inline_centered,"\u2026"], null)], null)], null)], null):null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".inline-flex.items-center.gray",".inline-flex.items-center.gray",-1336907745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),hover_class], null),lark.value_viewer.core.toggle_depth(this$,depth,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lb),"\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lark.value_viewer.core.space)].join(''))], null);
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/format-map"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
lark.value_viewer.core.format_mapClass = the_class__16588__auto___34295;

lark.value_viewer.core.format_map = re_view.core.factory(the_class__16588__auto___34295);
var the_class__16588__auto___34354 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_,value){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false], null);
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function lark$value_viewer$core$format_function(p__34341,value){
var map__34342 = p__34341;
var map__34342__$1 = ((((!((map__34342 == null)))?(((((map__34342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34342):map__34342);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34342__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__34351 = cljs.core.deref(state);
var map__34351__$1 = ((((!((map__34351 == null)))?(((((map__34351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34351):map__34351);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34351__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var fn_name = goog.object.get(value,"name","\u0192");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.value_viewer.core.expander_outter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__34351,map__34351__$1,expanded_QMARK_,fn_name,map__34342,map__34342__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),cljs.core.not);
});})(map__34351,map__34351__$1,expanded_QMARK_,fn_name,map__34342,map__34342__$1,state))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lark.value_viewer.core.inline_centered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.o-50.mr1","span.o-50.mr1",-1729400259),fn_name], null),cljs.core.update.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(expanded_QMARK_)?lark.value_viewer.core.ArrowPointingUp:lark.value_viewer.core.ArrowPointingDown),(1),cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(20),new cljs.core.Keyword(null,"class","class",-2030961996),"mln1 mrn1 o-50"], 0))], null),(cljs.core.truth_(expanded_QMARK_)?value.toString():null)], null)], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/format-function"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
lark.value_viewer.core.format_functionClass = the_class__16588__auto___34354;

lark.value_viewer.core.format_function = re_view.core.factory(the_class__16588__auto___34354);

/**
 * @interface
 */
lark.value_viewer.core.IView = function(){};

/**
 * Returns a view for `this`
 */
lark.value_viewer.core.view = (function lark$value_viewer$core$view(this$){
if(((!((this$ == null))) && (!((this$.lark$value_viewer$core$IView$view$arity$1 == null))))){
return this$.lark$value_viewer$core$IView$view$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (lark.value_viewer.core.view[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (lark.value_viewer.core.view["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IView.view",this$);
}
}
}
});

lark.value_viewer.core.format_value = (function lark$value_viewer$core$format_value(var_args){
var G__34375 = arguments.length;
switch (G__34375) {
case 1:
return lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2((1),value);
});

lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2 = (function (depth,value){
if((depth > (200))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

throw (new Error("Format depth too deep!"));
} else {
}

if(cljs.core.truth_((re_view.core.is_react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_view.core.is_react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : re_view.core.is_react_element_QMARK_.call(null,value)))){
return value;
} else {
if(((!((value == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.lark$value_viewer$core$IView$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(lark.value_viewer.core.IView,value):false)):cljs.core.native_satisfies_QMARK_(lark.value_viewer.core.IView,value))){
return lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2(depth,lark.value_viewer.core.view(value));
} else {
if(((!((value == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.re_view$hiccup$core$IEmitHiccup$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IEmitHiccup,value):false)):cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IEmitHiccup,value))){
return value;
} else {
var G__34390 = lark.value_viewer.core.kind(value);
var G__34390__$1 = (((G__34390 instanceof cljs.core.Keyword))?G__34390.fqn:null);
switch (G__34390__$1) {
case "vector":
case "sequence":
case "set":
return (lark.value_viewer.core.format_collection.cljs$core$IFn$_invoke$arity$2 ? lark.value_viewer.core.format_collection.cljs$core$IFn$_invoke$arity$2(depth,value) : lark.value_viewer.core.format_collection.call(null,depth,value));

break;
case "map":
return (lark.value_viewer.core.format_map.cljs$core$IFn$_invoke$arity$2 ? lark.value_viewer.core.format_map.cljs$core$IFn$_invoke$arity$2(depth,value) : lark.value_viewer.core.format_map.call(null,depth,value));

break;
case "var":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".o-50.mb2",".o-50.mb2",-2141192096),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null),lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2(depth,cljs.core.deref(value))], null);

break;
case "nil":
return "nil";

break;
case "function":
return (lark.value_viewer.core.format_function.cljs$core$IFn$_invoke$arity$1 ? lark.value_viewer.core.format_function.cljs$core$IFn$_invoke$arity$1(value) : lark.value_viewer.core.format_function.call(null,value));

break;
case "atom":
return lark.value_viewer.core.wrap_value(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gray.mr1","span.gray.mr1",1017438403),"#Atom"], null),null], null),lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$2(depth,goog.object.get(value,"state")));

break;
default:
if(cljs.core.truth_((re_view.core.is_react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_view.core.is_react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : re_view.core.is_react_element_QMARK_.call(null,value)))){
return value;
} else {
if((value instanceof cljs.core.Namespace)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
if((value instanceof goog.async.Deferred)){
var G__34391 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),value], null);
return (lark.value_viewer.core.display_deferred.cljs$core$IFn$_invoke$arity$1 ? lark.value_viewer.core.display_deferred.cljs$core$IFn$_invoke$arity$1(G__34391) : lark.value_viewer.core.display_deferred.call(null,G__34391));
} else {
try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}catch (e34392){if((e34392 instanceof Error)){
var e = e34392;

console.log(e);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(value)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"kind","kind",-717265803),lark.value_viewer.core.kind(value)], 0));

console.log(value);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
throw e34392;

}
}
}
}
}

}

}
}
}
});

lark.value_viewer.core.format_value.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=lark.value_viewer.core.js.map
