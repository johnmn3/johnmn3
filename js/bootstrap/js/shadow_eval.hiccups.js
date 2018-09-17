goog.provide('shadow_eval.hiccups');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
shadow_eval.hiccups.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * Characters to replace when escaping HTML
 */
shadow_eval.hiccups.character_escapes = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
/**
 * A list of tags that need an explicit ending tag when rendered.
 */
shadow_eval.hiccups.container_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 33, ["table",null,"canvas",null,"body",null,"h3",null,"dt",null,"label",null,"fieldset",null,"form",null,"em",null,"option",null,"h2",null,"h4",null,"style",null,"span",null,"script",null,"ol",null,"dd",null,"a",null,"head",null,"textarea",null,"i",null,"div",null,"b",null,"h5",null,"pre",null,"ul",null,"iframe",null,"strong",null,"html",null,"h1",null,"li",null,"dl",null,"h6",null], null), null);
shadow_eval.hiccups.as_str = (function shadow_eval$hiccups$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name(x);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
});
shadow_eval.hiccups._STAR_html_mode_STAR_ = new cljs.core.Keyword(null,"xml","xml",-1170142052);
shadow_eval.hiccups.xml_mode_QMARK_ = (function shadow_eval$hiccups$xml_mode_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow_eval.hiccups._STAR_html_mode_STAR_,new cljs.core.Keyword(null,"xml","xml",-1170142052));
});
shadow_eval.hiccups.in_mode = (function shadow_eval$hiccups$in_mode(mode,f){
var _STAR_html_mode_STAR_7167 = shadow_eval.hiccups._STAR_html_mode_STAR_;
shadow_eval.hiccups._STAR_html_mode_STAR_ = mode;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {shadow_eval.hiccups._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_7167;
}});
/**
 * Change special characters into HTML character entities.
 */
shadow_eval.hiccups.escape_html = (function shadow_eval$hiccups$escape_html(text){
return clojure.string.escape(shadow_eval.hiccups.as_str(text),shadow_eval.hiccups.character_escapes);
});
shadow_eval.hiccups.h = shadow_eval.hiccups.escape_html;
shadow_eval.hiccups.end_tag = (function shadow_eval$hiccups$end_tag(){
if(cljs.core.truth_(shadow_eval.hiccups.xml_mode_QMARK_())){
return " />";
} else {
return ">";
}
});
shadow_eval.hiccups.xml_attribute = (function shadow_eval$hiccups$xml_attribute(var_args){
var G__7199 = arguments.length;
switch (G__7199) {
case 2:
return shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$3(name,value,true);
});

shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$3 = (function (name,value,escape_QMARK_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow_eval.hiccups.as_str(name)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(escape_QMARK_)?shadow_eval.hiccups.escape_html(value):value)),"\""].join('');
});

shadow_eval.hiccups.xml_attribute.cljs$lang$maxFixedArity = 3;

shadow_eval.hiccups.render_attribute = (function shadow_eval$hiccups$render_attribute(p__7201){
var vec__7202 = p__7201;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7202,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7202,(1),null);
if(value === true){
if(cljs.core.truth_(shadow_eval.hiccups.xml_mode_QMARK_())){
return shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$2(name,name);
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow_eval.hiccups.as_str(name))].join('');
}
} else {
if(cljs.core.not(value)){
return "";
} else {
return shadow_eval.hiccups.xml_attribute.cljs$core$IFn$_invoke$arity$3(name,((cljs.core.map_QMARK_(value))?(shadow_eval.hiccups.render_attr_map.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups.render_attr_map.cljs$core$IFn$_invoke$arity$1(value) : shadow_eval.hiccups.render_attr_map.call(null,value)):value),false);

}
}
});
shadow_eval.hiccups.render_attr_map = (function shadow_eval$hiccups$render_attr_map(attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow_eval.hiccups.render_attribute,attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
shadow_eval.hiccups.normalize_element = (function shadow_eval$hiccups$normalize_element(p__7422){
var vec__7423 = p__7422;
var seq__7424 = cljs.core.seq(vec__7423);
var first__7425 = cljs.core.first(seq__7424);
var seq__7424__$1 = cljs.core.next(seq__7424);
var tag = first__7425;
var content = seq__7424__$1;
if(!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name"].join('');
} else {
}

var vec__7427 = cljs.core.re_matches(shadow_eval.hiccups.re_tag,shadow_eval.hiccups.as_str(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7427,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7427,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7427,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7427,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace(class$,"."," "):null)], null);
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Render a tag vector as a HTML element.
 */
shadow_eval.hiccups.render_element = (function shadow_eval$hiccups$render_element(element){
var vec__7447 = shadow_eval.hiccups.normalize_element(element);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7447,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7447,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7447,(2),null);
if(cljs.core.truth_((function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (shadow_eval.hiccups.container_tags.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups.container_tags.cljs$core$IFn$_invoke$arity$1(tag) : shadow_eval.hiccups.container_tags.call(null,tag));
}
})())){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow_eval.hiccups.render_attr_map(attrs)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((shadow_eval.hiccups.render_html.cljs$core$IFn$_invoke$arity$1 ? shadow_eval.hiccups.render_html.cljs$core$IFn$_invoke$arity$1(content) : shadow_eval.hiccups.render_html.call(null,content))),"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('');
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow_eval.hiccups.render_attr_map(attrs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow_eval.hiccups.end_tag())].join('');
}
});
/**
 * Turn a Clojure data type into a string of HTML.
 */
shadow_eval.hiccups.render_html = (function shadow_eval$hiccups$render_html(x){
if(cljs.core.vector_QMARK_(x)){
return shadow_eval.hiccups.render_element(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow_eval.hiccups.render_html,x));
} else {
return shadow_eval.hiccups.as_str(x);

}
}
});

//# sourceMappingURL=shadow_eval.hiccups.js.map
