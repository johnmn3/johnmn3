goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__20954 = s;
var map__20954__$1 = ((((!((map__20954 == null)))?(((((map__20954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20954):map__20954);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__20961 = info;
var map__20963 = G__20961;
var map__20963__$1 = ((((!((map__20963 == null)))?(((((map__20963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20963):map__20963);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20963__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__20961__$1 = G__20961;
while(true){
var d__$2 = d__$1;
var map__20971 = G__20961__$1;
var map__20971__$1 = ((((!((map__20971 == null)))?(((((map__20971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20971):map__20971);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20971__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__20993 = (d__$2 + (1));
var G__20994 = shadow__$1;
d__$1 = G__20993;
G__20961__$1 = G__20994;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__21007){
var map__21013 = p__21007;
var map__21013__$1 = ((((!((map__21013 == null)))?(((((map__21013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21013):map__21013);
var name_var = map__21013__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21013__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__21017 = info;
var map__21017__$1 = ((((!((map__21017 == null)))?(((((map__21017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21017):map__21017);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21017__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__21023 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__21023) : cljs.compiler.munge.call(null,G__21023));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__21030 = arguments.length;
switch (G__21030) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__21048 = cp;
switch (G__21048) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__21059_21064 = cljs.core.seq(s);
var chunk__21060_21065 = null;
var count__21061_21066 = (0);
var i__21062_21067 = (0);
while(true){
if((i__21062_21067 < count__21061_21066)){
var c_21068 = chunk__21060_21065.cljs$core$IIndexed$_nth$arity$2(null,i__21062_21067);
sb.append(cljs.compiler.escape_char(c_21068));


var G__21070 = seq__21059_21064;
var G__21071 = chunk__21060_21065;
var G__21072 = count__21061_21066;
var G__21073 = (i__21062_21067 + (1));
seq__21059_21064 = G__21070;
chunk__21060_21065 = G__21071;
count__21061_21066 = G__21072;
i__21062_21067 = G__21073;
continue;
} else {
var temp__5457__auto___21074 = cljs.core.seq(seq__21059_21064);
if(temp__5457__auto___21074){
var seq__21059_21075__$1 = temp__5457__auto___21074;
if(cljs.core.chunked_seq_QMARK_(seq__21059_21075__$1)){
var c__4351__auto___21076 = cljs.core.chunk_first(seq__21059_21075__$1);
var G__21077 = cljs.core.chunk_rest(seq__21059_21075__$1);
var G__21078 = c__4351__auto___21076;
var G__21079 = cljs.core.count(c__4351__auto___21076);
var G__21080 = (0);
seq__21059_21064 = G__21077;
chunk__21060_21065 = G__21078;
count__21061_21066 = G__21079;
i__21062_21067 = G__21080;
continue;
} else {
var c_21081 = cljs.core.first(seq__21059_21075__$1);
sb.append(cljs.compiler.escape_char(c_21081));


var G__21082 = cljs.core.next(seq__21059_21075__$1);
var G__21083 = null;
var G__21084 = (0);
var G__21085 = (0);
seq__21059_21064 = G__21082;
chunk__21060_21065 = G__21083;
count__21061_21066 = G__21084;
i__21062_21067 = G__21085;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18566__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18566__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__21086_21091 = ast;
var map__21086_21092__$1 = ((((!((map__21086_21091 == null)))?(((((map__21086_21091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21086_21091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21086_21091):map__21086_21091);
var env_21093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086_21092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21093))){
var map__21088_21100 = env_21093;
var map__21088_21101__$1 = ((((!((map__21088_21100 == null)))?(((((map__21088_21100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21088_21100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21088_21100):map__21088_21100);
var line_21102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088_21101__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088_21101__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__){
return (function (m){
var minfo = (function (){var G__21090 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21090,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__21090;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21102 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21103)?(column_21103 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__))
,cljs.core.sorted_map()));
});})(map__21088_21100,map__21088_21101__$1,line_21102,column_21103,map__21086_21091,map__21086_21092__$1,env_21093,val__18566__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__18566__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21112 = arguments.length;
var i__4532__auto___21117 = (0);
while(true){
if((i__4532__auto___21117 < len__4531__auto___21112)){
args__4534__auto__.push((arguments[i__4532__auto___21117]));

var G__21119 = (i__4532__auto___21117 + (1));
i__4532__auto___21117 = G__21119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__21107_21121 = cljs.core.seq(xs);
var chunk__21108_21122 = null;
var count__21109_21123 = (0);
var i__21110_21124 = (0);
while(true){
if((i__21110_21124 < count__21109_21123)){
var x_21129 = chunk__21108_21122.cljs$core$IIndexed$_nth$arity$2(null,i__21110_21124);
if((x_21129 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21129)){
cljs.compiler.emit(x_21129);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21129)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21129);
} else {
if(goog.isFunction(x_21129)){
(x_21129.cljs$core$IFn$_invoke$arity$0 ? x_21129.cljs$core$IFn$_invoke$arity$0() : x_21129.call(null));
} else {
var s_21135 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21129], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21107_21121,chunk__21108_21122,count__21109_21123,i__21110_21124,s_21135,x_21129){
return (function (p1__21105_SHARP_){
return (p1__21105_SHARP_ + cljs.core.count(s_21135));
});})(seq__21107_21121,chunk__21108_21122,count__21109_21123,i__21110_21124,s_21135,x_21129))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21135], 0));

}
}
}
}


var G__21136 = seq__21107_21121;
var G__21137 = chunk__21108_21122;
var G__21138 = count__21109_21123;
var G__21139 = (i__21110_21124 + (1));
seq__21107_21121 = G__21136;
chunk__21108_21122 = G__21137;
count__21109_21123 = G__21138;
i__21110_21124 = G__21139;
continue;
} else {
var temp__5457__auto___21140 = cljs.core.seq(seq__21107_21121);
if(temp__5457__auto___21140){
var seq__21107_21141__$1 = temp__5457__auto___21140;
if(cljs.core.chunked_seq_QMARK_(seq__21107_21141__$1)){
var c__4351__auto___21142 = cljs.core.chunk_first(seq__21107_21141__$1);
var G__21143 = cljs.core.chunk_rest(seq__21107_21141__$1);
var G__21144 = c__4351__auto___21142;
var G__21145 = cljs.core.count(c__4351__auto___21142);
var G__21146 = (0);
seq__21107_21121 = G__21143;
chunk__21108_21122 = G__21144;
count__21109_21123 = G__21145;
i__21110_21124 = G__21146;
continue;
} else {
var x_21148 = cljs.core.first(seq__21107_21141__$1);
if((x_21148 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_21148)){
cljs.compiler.emit(x_21148);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_21148)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_21148);
} else {
if(goog.isFunction(x_21148)){
(x_21148.cljs$core$IFn$_invoke$arity$0 ? x_21148.cljs$core$IFn$_invoke$arity$0() : x_21148.call(null));
} else {
var s_21149 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_21148], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21107_21121,chunk__21108_21122,count__21109_21123,i__21110_21124,s_21149,x_21148,seq__21107_21141__$1,temp__5457__auto___21140){
return (function (p1__21105_SHARP_){
return (p1__21105_SHARP_ + cljs.core.count(s_21149));
});})(seq__21107_21121,chunk__21108_21122,count__21109_21123,i__21110_21124,s_21149,x_21148,seq__21107_21141__$1,temp__5457__auto___21140))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21149], 0));

}
}
}
}


var G__21151 = cljs.core.next(seq__21107_21141__$1);
var G__21152 = null;
var G__21153 = (0);
var G__21154 = (0);
seq__21107_21121 = G__21151;
chunk__21108_21122 = G__21152;
count__21109_21123 = G__21153;
i__21110_21124 = G__21154;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq21106){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21106));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21171 = arguments.length;
var i__4532__auto___21172 = (0);
while(true){
if((i__4532__auto___21172 < len__4531__auto___21171)){
args__4534__auto__.push((arguments[i__4532__auto___21172]));

var G__21174 = (i__4532__auto___21172 + (1));
i__4532__auto___21172 = G__21174;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_21164_21178 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_21164_21178;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__21168){
var map__21169 = p__21168;
var map__21169__$1 = ((((!((map__21169 == null)))?(((((map__21169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21169):map__21169);
var m = map__21169__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq21155){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21155));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21179_21181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21180_21182 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21179_21181,_STAR_print_fn_STAR_21180_21182,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_21179_21181,_STAR_print_fn_STAR_21180_21182,sb__4462__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21180_21182;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21179_21181;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant !== 'undefined')){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__21193 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21193,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21193,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21193,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21196_21198 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21196_21198) : cljs.compiler.emit_constant.call(null,G__21196_21198));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21197_21199 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21197_21199) : cljs.compiler.emit_constant.call(null,G__21197_21199));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__21200_21205 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__21200_21205) : cljs.compiler.emit_constant.call(null,G__21200_21205));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
var G__21206 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21206) : x.call(null,G__21206));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
var G__21207 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__21207) : x.call(null,G__21207));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__21209){
var map__21210 = p__21209;
var map__21210__$1 = ((((!((map__21210 == null)))?(((((map__21210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21210):map__21210);
var ast = map__21210__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21210__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__21212 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21212__$1 = ((((!((map__21212 == null)))?(((((map__21212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21212):map__21212);
var cenv = map__21212__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21212__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3949__auto__ = js_module_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__21214 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3938__auto__ = (function (){var G__21216 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__21216) : cljs.compiler.es5_GT__EQ_.call(null,G__21216));
})();
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__3938__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__21214,cljs.analyzer.es5_allowed);
} else {
return G__21214;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3949__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__21217 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__21217,reserved);
} else {
return G__21217;
}
})();
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var G__21218_21223 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__21218_21224__$1 = (((G__21218_21223 instanceof cljs.core.Keyword))?G__21218_21223.fqn:null);
switch (G__21218_21224__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]"], 0));
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info__$2], 0));
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info__$2], 0));

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__21230){
var map__21231 = p__21230;
var map__21231__$1 = ((((!((map__21231 == null)))?(((((map__21231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21231):map__21231);
var arg = map__21231__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__21233 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__21233__$1 = ((((!((map__21233 == null)))?(((((map__21233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21233):map__21233);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__21236){
var map__21237 = p__21236;
var map__21237__$1 = ((((!((map__21237 == null)))?(((((map__21237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21237):map__21237);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21237__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21237__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_((function (p1__21242_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21242_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys))));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21247){
var map__21248 = p__21247;
var map__21248__$1 = ((((!((map__21248 == null)))?(((((map__21248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21248):map__21248);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21248__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21248__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__21252){
var map__21253 = p__21252;
var map__21253__$1 = ((((!((map__21253 == null)))?(((((map__21253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21253):map__21253);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21253__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21262){
var map__21263 = p__21262;
var map__21263__$1 = ((((!((map__21263 == null)))?(((((map__21263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21263):map__21263);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_21266 = cljs.core.count(items);
if((cnt_21266 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_21266,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_((function (p1__21268_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21268_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items))));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21275){
var map__21276 = p__21275;
var map__21276__$1 = ((((!((map__21276 == null)))?(((((map__21276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21276):map__21276);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21276__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21276__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__21280){
var map__21281 = p__21280;
var map__21281__$1 = ((((!((map__21281 == null)))?(((((map__21281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21281):map__21281);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___21301 = cljs.core.seq(items);
if(temp__5457__auto___21301){
var items_21302__$1 = temp__5457__auto___21301;
var vec__21284_21303 = items_21302__$1;
var seq__21285_21304 = cljs.core.seq(vec__21284_21303);
var first__21286_21305 = cljs.core.first(seq__21285_21304);
var seq__21285_21306__$1 = cljs.core.next(seq__21285_21304);
var vec__21287_21307 = first__21286_21305;
var k_21308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21287_21307,(0),null);
var v_21309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21287_21307,(1),null);
var r_21310 = seq__21285_21306__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_21308),"\": ",v_21309], 0));

var seq__21290_21313 = cljs.core.seq(r_21310);
var chunk__21291_21314 = null;
var count__21292_21315 = (0);
var i__21293_21316 = (0);
while(true){
if((i__21293_21316 < count__21292_21315)){
var vec__21294_21317 = chunk__21291_21314.cljs$core$IIndexed$_nth$arity$2(null,i__21293_21316);
var k_21318__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21294_21317,(0),null);
var v_21319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21294_21317,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21318__$1),"\": ",v_21319__$1], 0));


var G__21320 = seq__21290_21313;
var G__21321 = chunk__21291_21314;
var G__21322 = count__21292_21315;
var G__21323 = (i__21293_21316 + (1));
seq__21290_21313 = G__21320;
chunk__21291_21314 = G__21321;
count__21292_21315 = G__21322;
i__21293_21316 = G__21323;
continue;
} else {
var temp__5457__auto___21325__$1 = cljs.core.seq(seq__21290_21313);
if(temp__5457__auto___21325__$1){
var seq__21290_21326__$1 = temp__5457__auto___21325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21290_21326__$1)){
var c__4351__auto___21327 = cljs.core.chunk_first(seq__21290_21326__$1);
var G__21328 = cljs.core.chunk_rest(seq__21290_21326__$1);
var G__21329 = c__4351__auto___21327;
var G__21330 = cljs.core.count(c__4351__auto___21327);
var G__21331 = (0);
seq__21290_21313 = G__21328;
chunk__21291_21314 = G__21329;
count__21292_21315 = G__21330;
i__21293_21316 = G__21331;
continue;
} else {
var vec__21298_21332 = cljs.core.first(seq__21290_21326__$1);
var k_21333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21298_21332,(0),null);
var v_21334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21298_21332,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_21333__$1),"\": ",v_21334__$1], 0));


var G__21335 = cljs.core.next(seq__21290_21326__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__21290_21313 = G__21335;
chunk__21291_21314 = G__21336;
count__21292_21315 = G__21337;
i__21293_21316 = G__21338;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__21339){
var map__21340 = p__21339;
var map__21340__$1 = ((((!((map__21340 == null)))?(((((map__21340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21340):map__21340);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__21352){
var map__21353 = p__21352;
var map__21353__$1 = ((((!((map__21353 == null)))?(((((map__21353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21353):map__21353);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__21359){
var map__21360 = p__21359;
var map__21360__$1 = ((((!((map__21360 == null)))?(((((map__21360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21360):map__21360);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__3938__auto__){
var and__3938__auto____$1 = form;
if(cljs.core.truth_(and__3938__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__21369){
var map__21371 = p__21369;
var map__21371__$1 = ((((!((map__21371 == null)))?(((((map__21371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21371):map__21371);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__3949__auto__ = (function (){var fexpr__21390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__21390.cljs$core$IFn$_invoke$arity$1 ? fexpr__21390.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21390.call(null,tag));
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__21396){
var map__21398 = p__21396;
var map__21398__$1 = ((((!((map__21398 == null)))?(((((map__21398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21398):map__21398);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__3949__auto__ = unchecked;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__21407){
var map__21409 = p__21407;
var map__21409__$1 = ((((!((map__21409 == null)))?(((((map__21409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21409):map__21409);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__21412_21439 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__21413_21440 = null;
var count__21414_21441 = (0);
var i__21415_21442 = (0);
while(true){
if((i__21415_21442 < count__21414_21441)){
var vec__21417_21443 = chunk__21413_21440.cljs$core$IIndexed$_nth$arity$2(null,i__21415_21442);
var ts_21444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417_21443,(0),null);
var then_21445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417_21443,(1),null);
var seq__21421_21446 = cljs.core.seq(ts_21444);
var chunk__21422_21447 = null;
var count__21423_21448 = (0);
var i__21424_21449 = (0);
while(true){
if((i__21424_21449 < count__21423_21448)){
var test_21450 = chunk__21422_21447.cljs$core$IIndexed$_nth$arity$2(null,i__21424_21449);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21450,":"], 0));


var G__21451 = seq__21421_21446;
var G__21452 = chunk__21422_21447;
var G__21453 = count__21423_21448;
var G__21454 = (i__21424_21449 + (1));
seq__21421_21446 = G__21451;
chunk__21422_21447 = G__21452;
count__21423_21448 = G__21453;
i__21424_21449 = G__21454;
continue;
} else {
var temp__5457__auto___21455 = cljs.core.seq(seq__21421_21446);
if(temp__5457__auto___21455){
var seq__21421_21456__$1 = temp__5457__auto___21455;
if(cljs.core.chunked_seq_QMARK_(seq__21421_21456__$1)){
var c__4351__auto___21457 = cljs.core.chunk_first(seq__21421_21456__$1);
var G__21458 = cljs.core.chunk_rest(seq__21421_21456__$1);
var G__21459 = c__4351__auto___21457;
var G__21460 = cljs.core.count(c__4351__auto___21457);
var G__21461 = (0);
seq__21421_21446 = G__21458;
chunk__21422_21447 = G__21459;
count__21423_21448 = G__21460;
i__21424_21449 = G__21461;
continue;
} else {
var test_21463 = cljs.core.first(seq__21421_21456__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21463,":"], 0));


var G__21466 = cljs.core.next(seq__21421_21456__$1);
var G__21467 = null;
var G__21468 = (0);
var G__21469 = (0);
seq__21421_21446 = G__21466;
chunk__21422_21447 = G__21467;
count__21423_21448 = G__21468;
i__21424_21449 = G__21469;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21445], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21445], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));


var G__21471 = seq__21412_21439;
var G__21472 = chunk__21413_21440;
var G__21473 = count__21414_21441;
var G__21474 = (i__21415_21442 + (1));
seq__21412_21439 = G__21471;
chunk__21413_21440 = G__21472;
count__21414_21441 = G__21473;
i__21415_21442 = G__21474;
continue;
} else {
var temp__5457__auto___21475 = cljs.core.seq(seq__21412_21439);
if(temp__5457__auto___21475){
var seq__21412_21476__$1 = temp__5457__auto___21475;
if(cljs.core.chunked_seq_QMARK_(seq__21412_21476__$1)){
var c__4351__auto___21477 = cljs.core.chunk_first(seq__21412_21476__$1);
var G__21478 = cljs.core.chunk_rest(seq__21412_21476__$1);
var G__21479 = c__4351__auto___21477;
var G__21480 = cljs.core.count(c__4351__auto___21477);
var G__21481 = (0);
seq__21412_21439 = G__21478;
chunk__21413_21440 = G__21479;
count__21414_21441 = G__21480;
i__21415_21442 = G__21481;
continue;
} else {
var vec__21427_21485 = cljs.core.first(seq__21412_21476__$1);
var ts_21486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427_21485,(0),null);
var then_21487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427_21485,(1),null);
var seq__21430_21488 = cljs.core.seq(ts_21486);
var chunk__21431_21489 = null;
var count__21432_21490 = (0);
var i__21433_21491 = (0);
while(true){
if((i__21433_21491 < count__21432_21490)){
var test_21492 = chunk__21431_21489.cljs$core$IIndexed$_nth$arity$2(null,i__21433_21491);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21492,":"], 0));


var G__21494 = seq__21430_21488;
var G__21495 = chunk__21431_21489;
var G__21496 = count__21432_21490;
var G__21497 = (i__21433_21491 + (1));
seq__21430_21488 = G__21494;
chunk__21431_21489 = G__21495;
count__21432_21490 = G__21496;
i__21433_21491 = G__21497;
continue;
} else {
var temp__5457__auto___21498__$1 = cljs.core.seq(seq__21430_21488);
if(temp__5457__auto___21498__$1){
var seq__21430_21499__$1 = temp__5457__auto___21498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21430_21499__$1)){
var c__4351__auto___21500 = cljs.core.chunk_first(seq__21430_21499__$1);
var G__21502 = cljs.core.chunk_rest(seq__21430_21499__$1);
var G__21503 = c__4351__auto___21500;
var G__21504 = cljs.core.count(c__4351__auto___21500);
var G__21505 = (0);
seq__21430_21488 = G__21502;
chunk__21431_21489 = G__21503;
count__21432_21490 = G__21504;
i__21433_21491 = G__21505;
continue;
} else {
var test_21506 = cljs.core.first(seq__21430_21499__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_21506,":"], 0));


var G__21512 = cljs.core.next(seq__21430_21499__$1);
var G__21513 = null;
var G__21514 = (0);
var G__21515 = (0);
seq__21430_21488 = G__21512;
chunk__21431_21489 = G__21513;
count__21432_21490 = G__21514;
i__21433_21491 = G__21515;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_21487], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_21487], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));


var G__21518 = cljs.core.next(seq__21412_21476__$1);
var G__21519 = null;
var G__21520 = (0);
var G__21521 = (0);
seq__21412_21439 = G__21518;
chunk__21413_21440 = G__21519;
count__21414_21441 = G__21520;
i__21415_21442 = G__21521;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__21523){
var map__21526 = p__21523;
var map__21526__$1 = ((((!((map__21526 == null)))?(((((map__21526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21526):map__21526);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21526__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21531 = env;
var G__21532 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21531,G__21532) : cljs.compiler.resolve_type.call(null,G__21531,G__21532));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__21533 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21533,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21533,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__21533,fstr,rstr,ret_t,axstr){
return (function (p1__21529_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__21529_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__21529_SHARP_));
});})(idx,vec__21533,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__21540 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21540),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21540;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21541 = env;
var G__21542 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21541,G__21542) : cljs.compiler.resolve_type.call(null,G__21541,G__21542));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__21547_SHARP_){
return cljs.compiler.resolve_type(env,p1__21547_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__21550 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21551 = cljs.core.seq(vec__21550);
var first__21552 = cljs.core.first(seq__21551);
var seq__21551__$1 = cljs.core.next(seq__21551);
var p = first__21552;
var first__21552__$1 = cljs.core.first(seq__21551__$1);
var seq__21551__$2 = cljs.core.next(seq__21551__$1);
var ts = first__21552__$1;
var first__21552__$2 = cljs.core.first(seq__21551__$2);
var seq__21551__$3 = cljs.core.next(seq__21551__$2);
var n = first__21552__$2;
var xs = seq__21551__$3;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__21553 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21554 = cljs.core.seq(vec__21553);
var first__21555 = cljs.core.first(seq__21554);
var seq__21554__$1 = cljs.core.next(seq__21554);
var p = first__21555;
var first__21555__$1 = cljs.core.first(seq__21554__$1);
var seq__21554__$2 = cljs.core.next(seq__21554__$1);
var ts = first__21555__$1;
var xs = seq__21554__$2;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__21576 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__21575 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__21575.cljs$core$IFn$_invoke$arity$1 ? fexpr__21575.cljs$core$IFn$_invoke$arity$1(G__21576) : fexpr__21575.call(null,G__21576));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__21588 = arguments.length;
switch (G__21588) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__21603 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__21586_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__21586_SHARP_);
} else {
return p1__21586_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__21604 = cljs.core.seq(vec__21603);
var first__21605 = cljs.core.first(seq__21604);
var seq__21604__$1 = cljs.core.next(seq__21604);
var x = first__21605;
var ys = seq__21604__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__21606 = cljs.core.seq(ys);
var chunk__21607 = null;
var count__21608 = (0);
var i__21609 = (0);
while(true){
if((i__21609 < count__21608)){
var next_line = chunk__21607.cljs$core$IIndexed$_nth$arity$2(null,i__21609);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));


var G__21619 = seq__21606;
var G__21620 = chunk__21607;
var G__21621 = count__21608;
var G__21622 = (i__21609 + (1));
seq__21606 = G__21619;
chunk__21607 = G__21620;
count__21608 = G__21621;
i__21609 = G__21622;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21606);
if(temp__5457__auto__){
var seq__21606__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21606__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21606__$1);
var G__21623 = cljs.core.chunk_rest(seq__21606__$1);
var G__21624 = c__4351__auto__;
var G__21625 = cljs.core.count(c__4351__auto__);
var G__21626 = (0);
seq__21606 = G__21623;
chunk__21607 = G__21624;
count__21608 = G__21625;
i__21609 = G__21626;
continue;
} else {
var next_line = cljs.core.first(seq__21606__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));


var G__21627 = cljs.core.next(seq__21606__$1);
var G__21628 = null;
var G__21629 = (0);
var G__21630 = (0);
seq__21606 = G__21627;
chunk__21607 = G__21628;
count__21608 = G__21629;
i__21609 = G__21630;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__21610_21631 = cljs.core.seq(docs__$2);
var chunk__21611_21632 = null;
var count__21612_21633 = (0);
var i__21613_21634 = (0);
while(true){
if((i__21613_21634 < count__21612_21633)){
var e_21638 = chunk__21611_21632.cljs$core$IIndexed$_nth$arity$2(null,i__21613_21634);
if(cljs.core.truth_(e_21638)){
print_comment_lines(e_21638);
} else {
}


var G__21640 = seq__21610_21631;
var G__21641 = chunk__21611_21632;
var G__21642 = count__21612_21633;
var G__21643 = (i__21613_21634 + (1));
seq__21610_21631 = G__21640;
chunk__21611_21632 = G__21641;
count__21612_21633 = G__21642;
i__21613_21634 = G__21643;
continue;
} else {
var temp__5457__auto___21644 = cljs.core.seq(seq__21610_21631);
if(temp__5457__auto___21644){
var seq__21610_21645__$1 = temp__5457__auto___21644;
if(cljs.core.chunked_seq_QMARK_(seq__21610_21645__$1)){
var c__4351__auto___21646 = cljs.core.chunk_first(seq__21610_21645__$1);
var G__21647 = cljs.core.chunk_rest(seq__21610_21645__$1);
var G__21648 = c__4351__auto___21646;
var G__21649 = cljs.core.count(c__4351__auto___21646);
var G__21650 = (0);
seq__21610_21631 = G__21647;
chunk__21611_21632 = G__21648;
count__21612_21633 = G__21649;
i__21613_21634 = G__21650;
continue;
} else {
var e_21651 = cljs.core.first(seq__21610_21645__$1);
if(cljs.core.truth_(e_21651)){
print_comment_lines(e_21651);
} else {
}


var G__21652 = cljs.core.next(seq__21610_21645__$1);
var G__21653 = null;
var G__21654 = (0);
var G__21655 = (0);
seq__21610_21631 = G__21652;
chunk__21611_21632 = G__21653;
count__21612_21633 = G__21654;
i__21613_21634 = G__21655;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3938__auto__ = cljs.core.some(((function (opts){
return (function (p1__21658_SHARP_){
return goog.string.startsWith(p1__21658_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = opts;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3938__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__21663){
var map__21664 = p__21663;
var map__21664__$1 = ((((!((map__21664 == null)))?(((((map__21664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21664):map__21664);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3949__auto__ = init;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3938__auto__){
return test;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21682){
var map__21683 = p__21682;
var map__21683__$1 = ((((!((map__21683 == null)))?(((((map__21683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21683):map__21683);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__21685_21708 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__21686_21709 = null;
var count__21687_21710 = (0);
var i__21688_21711 = (0);
while(true){
if((i__21688_21711 < count__21687_21710)){
var vec__21689_21712 = chunk__21686_21709.cljs$core$IIndexed$_nth$arity$2(null,i__21688_21711);
var i_21713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689_21712,(0),null);
var param_21714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689_21712,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21714);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));


var G__21716 = seq__21685_21708;
var G__21717 = chunk__21686_21709;
var G__21718 = count__21687_21710;
var G__21719 = (i__21688_21711 + (1));
seq__21685_21708 = G__21716;
chunk__21686_21709 = G__21717;
count__21687_21710 = G__21718;
i__21688_21711 = G__21719;
continue;
} else {
var temp__5457__auto___21721 = cljs.core.seq(seq__21685_21708);
if(temp__5457__auto___21721){
var seq__21685_21724__$1 = temp__5457__auto___21721;
if(cljs.core.chunked_seq_QMARK_(seq__21685_21724__$1)){
var c__4351__auto___21725 = cljs.core.chunk_first(seq__21685_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21685_21724__$1);
var G__21727 = c__4351__auto___21725;
var G__21728 = cljs.core.count(c__4351__auto___21725);
var G__21729 = (0);
seq__21685_21708 = G__21726;
chunk__21686_21709 = G__21727;
count__21687_21710 = G__21728;
i__21688_21711 = G__21729;
continue;
} else {
var vec__21692_21730 = cljs.core.first(seq__21685_21724__$1);
var i_21731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692_21730,(0),null);
var param_21732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692_21730,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_21732);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));


var G__21739 = cljs.core.next(seq__21685_21724__$1);
var G__21740 = null;
var G__21741 = (0);
var G__21742 = (0);
seq__21685_21708 = G__21739;
chunk__21686_21709 = G__21740;
count__21687_21710 = G__21741;
i__21688_21711 = G__21742;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__21695_21743 = cljs.core.seq(params);
var chunk__21696_21744 = null;
var count__21697_21745 = (0);
var i__21698_21746 = (0);
while(true){
if((i__21698_21746 < count__21697_21745)){
var param_21747 = chunk__21696_21744.cljs$core$IIndexed$_nth$arity$2(null,i__21698_21746);
cljs.compiler.emit(param_21747);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21747,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21748 = seq__21695_21743;
var G__21749 = chunk__21696_21744;
var G__21750 = count__21697_21745;
var G__21751 = (i__21698_21746 + (1));
seq__21695_21743 = G__21748;
chunk__21696_21744 = G__21749;
count__21697_21745 = G__21750;
i__21698_21746 = G__21751;
continue;
} else {
var temp__5457__auto___21752 = cljs.core.seq(seq__21695_21743);
if(temp__5457__auto___21752){
var seq__21695_21753__$1 = temp__5457__auto___21752;
if(cljs.core.chunked_seq_QMARK_(seq__21695_21753__$1)){
var c__4351__auto___21754 = cljs.core.chunk_first(seq__21695_21753__$1);
var G__21755 = cljs.core.chunk_rest(seq__21695_21753__$1);
var G__21756 = c__4351__auto___21754;
var G__21757 = cljs.core.count(c__4351__auto___21754);
var G__21758 = (0);
seq__21695_21743 = G__21755;
chunk__21696_21744 = G__21756;
count__21697_21745 = G__21757;
i__21698_21746 = G__21758;
continue;
} else {
var param_21759 = cljs.core.first(seq__21695_21753__$1);
cljs.compiler.emit(param_21759);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21759,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21760 = cljs.core.next(seq__21695_21753__$1);
var G__21761 = null;
var G__21762 = (0);
var G__21763 = (0);
seq__21695_21743 = G__21760;
chunk__21696_21744 = G__21761;
count__21697_21745 = G__21762;
i__21698_21746 = G__21763;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__21699_21765 = cljs.core.seq(params);
var chunk__21700_21766 = null;
var count__21701_21767 = (0);
var i__21702_21768 = (0);
while(true){
if((i__21702_21768 < count__21701_21767)){
var param_21769 = chunk__21700_21766.cljs$core$IIndexed$_nth$arity$2(null,i__21702_21768);
cljs.compiler.emit(param_21769);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21769,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21770 = seq__21699_21765;
var G__21771 = chunk__21700_21766;
var G__21772 = count__21701_21767;
var G__21773 = (i__21702_21768 + (1));
seq__21699_21765 = G__21770;
chunk__21700_21766 = G__21771;
count__21701_21767 = G__21772;
i__21702_21768 = G__21773;
continue;
} else {
var temp__5457__auto___21774 = cljs.core.seq(seq__21699_21765);
if(temp__5457__auto___21774){
var seq__21699_21775__$1 = temp__5457__auto___21774;
if(cljs.core.chunked_seq_QMARK_(seq__21699_21775__$1)){
var c__4351__auto___21776 = cljs.core.chunk_first(seq__21699_21775__$1);
var G__21777 = cljs.core.chunk_rest(seq__21699_21775__$1);
var G__21778 = c__4351__auto___21776;
var G__21779 = cljs.core.count(c__4351__auto___21776);
var G__21780 = (0);
seq__21699_21765 = G__21777;
chunk__21700_21766 = G__21778;
count__21701_21767 = G__21779;
i__21702_21768 = G__21780;
continue;
} else {
var param_21781 = cljs.core.first(seq__21699_21775__$1);
cljs.compiler.emit(param_21781);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21781,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21782 = cljs.core.next(seq__21699_21775__$1);
var G__21783 = null;
var G__21784 = (0);
var G__21785 = (0);
seq__21699_21765 = G__21782;
chunk__21700_21766 = G__21783;
count__21701_21767 = G__21784;
i__21702_21768 = G__21785;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__21788 = cljs.core.seq(params);
var chunk__21789 = null;
var count__21790 = (0);
var i__21791 = (0);
while(true){
if((i__21791 < count__21790)){
var param = chunk__21789.cljs$core$IIndexed$_nth$arity$2(null,i__21791);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21792 = seq__21788;
var G__21793 = chunk__21789;
var G__21794 = count__21790;
var G__21795 = (i__21791 + (1));
seq__21788 = G__21792;
chunk__21789 = G__21793;
count__21790 = G__21794;
i__21791 = G__21795;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21788);
if(temp__5457__auto__){
var seq__21788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21788__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21788__$1);
var G__21797 = cljs.core.chunk_rest(seq__21788__$1);
var G__21798 = c__4351__auto__;
var G__21799 = cljs.core.count(c__4351__auto__);
var G__21800 = (0);
seq__21788 = G__21797;
chunk__21789 = G__21798;
count__21790 = G__21799;
i__21791 = G__21800;
continue;
} else {
var param = cljs.core.first(seq__21788__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21803 = cljs.core.next(seq__21788__$1);
var G__21804 = null;
var G__21805 = (0);
var G__21806 = (0);
seq__21788 = G__21803;
chunk__21789 = G__21804;
count__21790 = G__21805;
i__21791 = G__21806;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21812){
var map__21813 = p__21812;
var map__21813__$1 = ((((!((map__21813 == null)))?(((((map__21813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21813):map__21813);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21813__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21832){
var map__21833 = p__21832;
var map__21833__$1 = ((((!((map__21833 == null)))?(((((map__21833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21833):map__21833);
var f = map__21833__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_21852__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21853 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21852__$1);
var delegate_name_21854 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21853),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_21854," = function ("], 0));

var seq__21839_21855 = cljs.core.seq(params);
var chunk__21840_21856 = null;
var count__21841_21857 = (0);
var i__21842_21858 = (0);
while(true){
if((i__21842_21858 < count__21841_21857)){
var param_21859 = chunk__21840_21856.cljs$core$IIndexed$_nth$arity$2(null,i__21842_21858);
cljs.compiler.emit(param_21859);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21859,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21861 = seq__21839_21855;
var G__21862 = chunk__21840_21856;
var G__21863 = count__21841_21857;
var G__21864 = (i__21842_21858 + (1));
seq__21839_21855 = G__21861;
chunk__21840_21856 = G__21862;
count__21841_21857 = G__21863;
i__21842_21858 = G__21864;
continue;
} else {
var temp__5457__auto___21868 = cljs.core.seq(seq__21839_21855);
if(temp__5457__auto___21868){
var seq__21839_21869__$1 = temp__5457__auto___21868;
if(cljs.core.chunked_seq_QMARK_(seq__21839_21869__$1)){
var c__4351__auto___21870 = cljs.core.chunk_first(seq__21839_21869__$1);
var G__21871 = cljs.core.chunk_rest(seq__21839_21869__$1);
var G__21872 = c__4351__auto___21870;
var G__21873 = cljs.core.count(c__4351__auto___21870);
var G__21874 = (0);
seq__21839_21855 = G__21871;
chunk__21840_21856 = G__21872;
count__21841_21857 = G__21873;
i__21842_21858 = G__21874;
continue;
} else {
var param_21875 = cljs.core.first(seq__21839_21869__$1);
cljs.compiler.emit(param_21875);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21875,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21876 = cljs.core.next(seq__21839_21869__$1);
var G__21877 = null;
var G__21878 = (0);
var G__21879 = (0);
seq__21839_21855 = G__21876;
chunk__21840_21856 = G__21877;
count__21841_21857 = G__21878;
i__21842_21858 = G__21879;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21853," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_21880 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_21880,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_21854,".call(this,"], 0));

var seq__21844_21883 = cljs.core.seq(params);
var chunk__21845_21884 = null;
var count__21846_21885 = (0);
var i__21847_21886 = (0);
while(true){
if((i__21847_21886 < count__21846_21885)){
var param_21889 = chunk__21845_21884.cljs$core$IIndexed$_nth$arity$2(null,i__21847_21886);
cljs.compiler.emit(param_21889);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21889,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21890 = seq__21844_21883;
var G__21891 = chunk__21845_21884;
var G__21892 = count__21846_21885;
var G__21893 = (i__21847_21886 + (1));
seq__21844_21883 = G__21890;
chunk__21845_21884 = G__21891;
count__21846_21885 = G__21892;
i__21847_21886 = G__21893;
continue;
} else {
var temp__5457__auto___21894 = cljs.core.seq(seq__21844_21883);
if(temp__5457__auto___21894){
var seq__21844_21895__$1 = temp__5457__auto___21894;
if(cljs.core.chunked_seq_QMARK_(seq__21844_21895__$1)){
var c__4351__auto___21896 = cljs.core.chunk_first(seq__21844_21895__$1);
var G__21897 = cljs.core.chunk_rest(seq__21844_21895__$1);
var G__21898 = c__4351__auto___21896;
var G__21899 = cljs.core.count(c__4351__auto___21896);
var G__21900 = (0);
seq__21844_21883 = G__21897;
chunk__21845_21884 = G__21898;
count__21846_21885 = G__21899;
i__21847_21886 = G__21900;
continue;
} else {
var param_21901 = cljs.core.first(seq__21844_21895__$1);
cljs.compiler.emit(param_21901);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_21901,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}


var G__21902 = cljs.core.next(seq__21844_21895__$1);
var G__21903 = null;
var G__21904 = (0);
var G__21905 = (0);
seq__21844_21883 = G__21902;
chunk__21845_21884 = G__21903;
count__21846_21885 = G__21904;
i__21847_21886 = G__21905;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21853,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21853,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_21852__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21853,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_21854,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21853,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__21915){
var map__21916 = p__21915;
var map__21916__$1 = ((((!((map__21916 == null)))?(((((map__21916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21916):map__21916);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21912_SHARP_){
var and__3938__auto__ = p1__21912_SHARP_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__21912_SHARP_));
} else {
return and__3938__auto__;
}
});})(map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_21971__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_21972 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_21971__$1);
var maxparams_21973 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_21974 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_21971__$1,mname_21972,maxparams_21973,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_21972),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_21971__$1,mname_21972,maxparams_21973,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_21975 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_21971__$1,mname_21972,maxparams_21973,mmap_21974,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21913_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21913_SHARP_)));
});})(name_21971__$1,mname_21972,maxparams_21973,mmap_21974,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_21974));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_21972," = null;"], 0));

var seq__21923_21983 = cljs.core.seq(ms_21975);
var chunk__21924_21984 = null;
var count__21925_21985 = (0);
var i__21926_21986 = (0);
while(true){
if((i__21926_21986 < count__21925_21985)){
var vec__21927_21988 = chunk__21924_21984.cljs$core$IIndexed$_nth$arity$2(null,i__21926_21986);
var n_21989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927_21988,(0),null);
var meth_21990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927_21988,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_21989," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_21990))){
cljs.compiler.emit_variadic_fn_method(meth_21990);
} else {
cljs.compiler.emit_fn_method(meth_21990);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));


var G__21991 = seq__21923_21983;
var G__21992 = chunk__21924_21984;
var G__21993 = count__21925_21985;
var G__21994 = (i__21926_21986 + (1));
seq__21923_21983 = G__21991;
chunk__21924_21984 = G__21992;
count__21925_21985 = G__21993;
i__21926_21986 = G__21994;
continue;
} else {
var temp__5457__auto___21995 = cljs.core.seq(seq__21923_21983);
if(temp__5457__auto___21995){
var seq__21923_21996__$1 = temp__5457__auto___21995;
if(cljs.core.chunked_seq_QMARK_(seq__21923_21996__$1)){
var c__4351__auto___21997 = cljs.core.chunk_first(seq__21923_21996__$1);
var G__21998 = cljs.core.chunk_rest(seq__21923_21996__$1);
var G__21999 = c__4351__auto___21997;
var G__22000 = cljs.core.count(c__4351__auto___21997);
var G__22001 = (0);
seq__21923_21983 = G__21998;
chunk__21924_21984 = G__21999;
count__21925_21985 = G__22000;
i__21926_21986 = G__22001;
continue;
} else {
var vec__21933_22002 = cljs.core.first(seq__21923_21996__$1);
var n_22003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933_22002,(0),null);
var meth_22004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933_22002,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_22003," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_22004))){
cljs.compiler.emit_variadic_fn_method(meth_22004);
} else {
cljs.compiler.emit_fn_method(meth_22004);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));


var G__22005 = cljs.core.next(seq__21923_21996__$1);
var G__22006 = null;
var G__22007 = (0);
var G__22008 = (0);
seq__21923_21983 = G__22005;
chunk__21924_21984 = G__22006;
count__21925_21985 = G__22007;
i__21926_21986 = G__22008;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_21973),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_21973)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_21973));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__21936_22010 = cljs.core.seq(ms_21975);
var chunk__21937_22011 = null;
var count__21938_22012 = (0);
var i__21939_22013 = (0);
while(true){
if((i__21939_22013 < count__21938_22012)){
var vec__21940_22014 = chunk__21937_22011.cljs$core$IIndexed$_nth$arity$2(null,i__21939_22013);
var n_22015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940_22014,(0),null);
var meth_22016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940_22014,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_22016))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_22017 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_22017," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_22019 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_22017," = new cljs.core.IndexedSeq(",a_22019,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_22015,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21973)),(((cljs.core.count(maxparams_21973) > (1)))?", ":null),restarg_22017,");"], 0));
} else {
var pcnt_22020 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22016));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_22020,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_22015,".call(this",(((pcnt_22020 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_22020,maxparams_21973)),null,(1),null)),(2),null))),");"], 0));
}


var G__22023 = seq__21936_22010;
var G__22024 = chunk__21937_22011;
var G__22025 = count__21938_22012;
var G__22026 = (i__21939_22013 + (1));
seq__21936_22010 = G__22023;
chunk__21937_22011 = G__22024;
count__21938_22012 = G__22025;
i__21939_22013 = G__22026;
continue;
} else {
var temp__5457__auto___22027 = cljs.core.seq(seq__21936_22010);
if(temp__5457__auto___22027){
var seq__21936_22028__$1 = temp__5457__auto___22027;
if(cljs.core.chunked_seq_QMARK_(seq__21936_22028__$1)){
var c__4351__auto___22030 = cljs.core.chunk_first(seq__21936_22028__$1);
var G__22031 = cljs.core.chunk_rest(seq__21936_22028__$1);
var G__22032 = c__4351__auto___22030;
var G__22033 = cljs.core.count(c__4351__auto___22030);
var G__22034 = (0);
seq__21936_22010 = G__22031;
chunk__21937_22011 = G__22032;
count__21938_22012 = G__22033;
i__21939_22013 = G__22034;
continue;
} else {
var vec__21949_22035 = cljs.core.first(seq__21936_22028__$1);
var n_22036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949_22035,(0),null);
var meth_22037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949_22035,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_22037))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_22039 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_22039," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_22040 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_22039," = new cljs.core.IndexedSeq(",a_22040,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_22036,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_21973)),(((cljs.core.count(maxparams_21973) > (1)))?", ":null),restarg_22039,");"], 0));
} else {
var pcnt_22043 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22037));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_22043,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_22036,".call(this",(((pcnt_22043 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_22043,maxparams_21973)),null,(1),null)),(2),null))),");"], 0));
}


var G__22046 = cljs.core.next(seq__21936_22028__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__21936_22010 = G__22046;
chunk__21937_22011 = G__22047;
count__21938_22012 = G__22048;
i__21939_22013 = G__22049;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

var arg_count_js_22053 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_21975)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + ",arg_count_js_22053,"));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$lang$applyTo = ",cljs.core.some(((function (name_21971__$1,mname_21972,maxparams_21973,mmap_21974,ms_21975,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__21914_SHARP_){
var vec__21952 = p1__21914_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_21971__$1,mname_21972,maxparams_21973,mmap_21974,ms_21975,loop_locals,map__21916,map__21916__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_21975),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__21955_22061 = cljs.core.seq(ms_21975);
var chunk__21956_22062 = null;
var count__21957_22063 = (0);
var i__21958_22064 = (0);
while(true){
if((i__21958_22064 < count__21957_22063)){
var vec__21959_22066 = chunk__21956_22062.cljs$core$IIndexed$_nth$arity$2(null,i__21958_22064);
var n_22067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21959_22066,(0),null);
var meth_22068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21959_22066,(1),null);
var c_22069 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22068));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_22068))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$core$IFn$_invoke$arity$variadic = ",n_22067,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$core$IFn$_invoke$arity$",c_22069," = ",n_22067,";"], 0));
}


var G__22075 = seq__21955_22061;
var G__22076 = chunk__21956_22062;
var G__22077 = count__21957_22063;
var G__22078 = (i__21958_22064 + (1));
seq__21955_22061 = G__22075;
chunk__21956_22062 = G__22076;
count__21957_22063 = G__22077;
i__21958_22064 = G__22078;
continue;
} else {
var temp__5457__auto___22080 = cljs.core.seq(seq__21955_22061);
if(temp__5457__auto___22080){
var seq__21955_22081__$1 = temp__5457__auto___22080;
if(cljs.core.chunked_seq_QMARK_(seq__21955_22081__$1)){
var c__4351__auto___22082 = cljs.core.chunk_first(seq__21955_22081__$1);
var G__22083 = cljs.core.chunk_rest(seq__21955_22081__$1);
var G__22084 = c__4351__auto___22082;
var G__22085 = cljs.core.count(c__4351__auto___22082);
var G__22086 = (0);
seq__21955_22061 = G__22083;
chunk__21956_22062 = G__22084;
count__21957_22063 = G__22085;
i__21958_22064 = G__22086;
continue;
} else {
var vec__21962_22087 = cljs.core.first(seq__21955_22081__$1);
var n_22088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21962_22087,(0),null);
var meth_22089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21962_22087,(1),null);
var c_22092 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22089));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_22089))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$core$IFn$_invoke$arity$variadic = ",n_22088,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_21972,".cljs$core$IFn$_invoke$arity$",c_22092," = ",n_22088,";"], 0));
}


var G__22093 = cljs.core.next(seq__21955_22081__$1);
var G__22094 = null;
var G__22095 = (0);
var G__22096 = (0);
seq__21955_22061 = G__22093;
chunk__21956_22062 = G__22094;
count__21957_22063 = G__22095;
i__21958_22064 = G__22096;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_21972,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__22098){
var map__22099 = p__22098;
var map__22099__$1 = ((((!((map__22099 == null)))?(((((map__22099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22099):map__22099);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__22107_22120 = cljs.core.seq(statements);
var chunk__22108_22121 = null;
var count__22109_22122 = (0);
var i__22110_22123 = (0);
while(true){
if((i__22110_22123 < count__22109_22122)){
var s_22125 = chunk__22108_22121.cljs$core$IIndexed$_nth$arity$2(null,i__22110_22123);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_22125], 0));


var G__22127 = seq__22107_22120;
var G__22128 = chunk__22108_22121;
var G__22129 = count__22109_22122;
var G__22130 = (i__22110_22123 + (1));
seq__22107_22120 = G__22127;
chunk__22108_22121 = G__22128;
count__22109_22122 = G__22129;
i__22110_22123 = G__22130;
continue;
} else {
var temp__5457__auto___22133 = cljs.core.seq(seq__22107_22120);
if(temp__5457__auto___22133){
var seq__22107_22135__$1 = temp__5457__auto___22133;
if(cljs.core.chunked_seq_QMARK_(seq__22107_22135__$1)){
var c__4351__auto___22136 = cljs.core.chunk_first(seq__22107_22135__$1);
var G__22137 = cljs.core.chunk_rest(seq__22107_22135__$1);
var G__22138 = c__4351__auto___22136;
var G__22139 = cljs.core.count(c__4351__auto___22136);
var G__22140 = (0);
seq__22107_22120 = G__22137;
chunk__22108_22121 = G__22138;
count__22109_22122 = G__22139;
i__22110_22123 = G__22140;
continue;
} else {
var s_22142 = cljs.core.first(seq__22107_22135__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_22142], 0));


var G__22143 = cljs.core.next(seq__22107_22135__$1);
var G__22144 = null;
var G__22145 = (0);
var G__22146 = (0);
seq__22107_22120 = G__22143;
chunk__22108_22121 = G__22144;
count__22109_22122 = G__22145;
i__22110_22123 = G__22146;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__22151){
var map__22152 = p__22151;
var map__22152__$1 = ((((!((map__22152 == null)))?(((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22152):map__22152);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__22161,is_loop){
var map__22162 = p__22161;
var map__22162__$1 = ((((!((map__22162 == null)))?(((((map__22162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22162):map__22162);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22162__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_22166_22195 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_22166_22195,context,map__22162,map__22162__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_22166_22195,context,map__22162,map__22162__$1,bindings,expr,env))
,bindings):null));

try{var seq__22168_22196 = cljs.core.seq(bindings);
var chunk__22169_22197 = null;
var count__22170_22198 = (0);
var i__22171_22199 = (0);
while(true){
if((i__22171_22199 < count__22170_22198)){
var map__22175_22200 = chunk__22169_22197.cljs$core$IIndexed$_nth$arity$2(null,i__22171_22199);
var map__22175_22201__$1 = ((((!((map__22175_22200 == null)))?(((((map__22175_22200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22175_22200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22175_22200):map__22175_22200);
var binding_22202 = map__22175_22201__$1;
var init_22203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22175_22201__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_22202);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_22203,";"], 0));


var G__22208 = seq__22168_22196;
var G__22209 = chunk__22169_22197;
var G__22210 = count__22170_22198;
var G__22211 = (i__22171_22199 + (1));
seq__22168_22196 = G__22208;
chunk__22169_22197 = G__22209;
count__22170_22198 = G__22210;
i__22171_22199 = G__22211;
continue;
} else {
var temp__5457__auto___22213 = cljs.core.seq(seq__22168_22196);
if(temp__5457__auto___22213){
var seq__22168_22214__$1 = temp__5457__auto___22213;
if(cljs.core.chunked_seq_QMARK_(seq__22168_22214__$1)){
var c__4351__auto___22215 = cljs.core.chunk_first(seq__22168_22214__$1);
var G__22216 = cljs.core.chunk_rest(seq__22168_22214__$1);
var G__22217 = c__4351__auto___22215;
var G__22218 = cljs.core.count(c__4351__auto___22215);
var G__22219 = (0);
seq__22168_22196 = G__22216;
chunk__22169_22197 = G__22217;
count__22170_22198 = G__22218;
i__22171_22199 = G__22219;
continue;
} else {
var map__22183_22220 = cljs.core.first(seq__22168_22214__$1);
var map__22183_22221__$1 = ((((!((map__22183_22220 == null)))?(((((map__22183_22220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22183_22220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22183_22220):map__22183_22220);
var binding_22222 = map__22183_22221__$1;
var init_22223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22183_22221__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_22222);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_22223,";"], 0));


var G__22224 = cljs.core.next(seq__22168_22214__$1);
var G__22225 = null;
var G__22226 = (0);
var G__22227 = (0);
seq__22168_22196 = G__22224;
chunk__22169_22197 = G__22225;
count__22170_22198 = G__22226;
i__22171_22199 = G__22227;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_22166_22195;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__22248){
var map__22249 = p__22248;
var map__22249__$1 = ((((!((map__22249 == null)))?(((((map__22249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22249):map__22249);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4408__auto___22261 = cljs.core.count(exprs);
var i_22262 = (0);
while(true){
if((i_22262 < n__4408__auto___22261)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_22262) : temps.call(null,i_22262))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_22262) : exprs.call(null,i_22262)),";"], 0));

var G__22263 = (i_22262 + (1));
i_22262 = G__22263;
continue;
} else {
}
break;
}

var n__4408__auto___22264 = cljs.core.count(exprs);
var i_22266 = (0);
while(true){
if((i_22266 < n__4408__auto___22264)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_22266) : params.call(null,i_22266)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_22266) : temps.call(null,i_22266)),";"], 0));

var G__22269 = (i_22266 + (1));
i_22266 = G__22269;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__22272){
var map__22273 = p__22272;
var map__22273__$1 = ((((!((map__22273 == null)))?(((((map__22273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22273):map__22273);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22273__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22273__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__22276_22293 = cljs.core.seq(bindings);
var chunk__22277_22294 = null;
var count__22278_22295 = (0);
var i__22279_22296 = (0);
while(true){
if((i__22279_22296 < count__22278_22295)){
var map__22282_22298 = chunk__22277_22294.cljs$core$IIndexed$_nth$arity$2(null,i__22279_22296);
var map__22282_22299__$1 = ((((!((map__22282_22298 == null)))?(((((map__22282_22298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22282_22298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22282_22298):map__22282_22298);
var binding_22300 = map__22282_22299__$1;
var init_22301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22282_22299__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_22300)," = ",init_22301,";"], 0));


var G__22302 = seq__22276_22293;
var G__22303 = chunk__22277_22294;
var G__22304 = count__22278_22295;
var G__22305 = (i__22279_22296 + (1));
seq__22276_22293 = G__22302;
chunk__22277_22294 = G__22303;
count__22278_22295 = G__22304;
i__22279_22296 = G__22305;
continue;
} else {
var temp__5457__auto___22308 = cljs.core.seq(seq__22276_22293);
if(temp__5457__auto___22308){
var seq__22276_22310__$1 = temp__5457__auto___22308;
if(cljs.core.chunked_seq_QMARK_(seq__22276_22310__$1)){
var c__4351__auto___22311 = cljs.core.chunk_first(seq__22276_22310__$1);
var G__22312 = cljs.core.chunk_rest(seq__22276_22310__$1);
var G__22313 = c__4351__auto___22311;
var G__22314 = cljs.core.count(c__4351__auto___22311);
var G__22315 = (0);
seq__22276_22293 = G__22312;
chunk__22277_22294 = G__22313;
count__22278_22295 = G__22314;
i__22279_22296 = G__22315;
continue;
} else {
var map__22287_22316 = cljs.core.first(seq__22276_22310__$1);
var map__22287_22317__$1 = ((((!((map__22287_22316 == null)))?(((((map__22287_22316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22287_22316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22287_22316):map__22287_22316);
var binding_22318 = map__22287_22317__$1;
var init_22319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22287_22317__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_22318)," = ",init_22319,";"], 0));


var G__22328 = cljs.core.next(seq__22276_22310__$1);
var G__22329 = null;
var G__22330 = (0);
var G__22331 = (0);
seq__22276_22293 = G__22328;
chunk__22277_22294 = G__22329;
count__22278_22295 = G__22330;
i__22279_22296 = G__22331;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__22361){
var map__22368 = p__22361;
var map__22368__$1 = ((((!((map__22368 == null)))?(((((map__22368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22368):map__22368);
var expr = map__22368__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3938__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3938__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3938__auto__ = protocol;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = tag;
if(cljs.core.truth_(and__3938__auto____$1)){
var or__3949__auto__ = (function (){var and__3938__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto____$2){
var and__3938__auto____$3 = protocol;
if(cljs.core.truth_(and__3938__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3938__auto____$3;
}
} else {
return and__3938__auto____$2;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto____$2 = (function (){var or__3949__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3938__auto____$2)){
var or__3949__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
var and__3938__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__3938__auto____$3){
var and__3938__auto____$4 = cljs.core.not((function (){var fexpr__22383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null);
return (fexpr__22383.cljs$core$IFn$_invoke$arity$1 ? fexpr__22383.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__22383.call(null,tag));
})());
if(and__3938__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__3938__auto____$4;
}
} else {
return and__3938__auto____$3;
}
}
} else {
return and__3938__auto____$2;
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__22370 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return (arity > mfa);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env){
return (function (p1__22340_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22340_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env){
return (function (p1__22343_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22343_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__22368,map__22368__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(1),null);
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_22460 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_22460,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_22472 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_22472,args)),(((mfa_22472 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_22472,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = js_QMARK_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_22480 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_22480," ? ",f__$1,fprop_22480,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_22480," ? ",f__$1,fprop_22480,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__22484){
var map__22485 = p__22484;
var map__22485__$1 = ((((!((map__22485 == null)))?(((((map__22485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22485):map__22485);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22485__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22485__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__22488){
var map__22489 = p__22488;
var map__22489__$1 = ((((!((map__22489 == null)))?(((((map__22489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22489):map__22489);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22489__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22489__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22489__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__22497 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__22497__$1 = ((((!((map__22497 == null)))?(((((map__22497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22497):map__22497);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22497__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__22498 = options;
var map__22498__$1 = ((((!((map__22498 == null)))?(((((map__22498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22498):map__22498);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__22499 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__22507 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__22507__$1 = ((((!((map__22507 == null)))?(((((map__22507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22507):map__22507);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__22510_22533 = cljs.core.seq(libs_to_load);
var chunk__22511_22534 = null;
var count__22512_22535 = (0);
var i__22513_22536 = (0);
while(true){
if((i__22513_22536 < count__22512_22535)){
var lib_22537 = chunk__22511_22534.cljs$core$IIndexed$_nth$arity$2(null,i__22513_22536);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_22537)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_22537),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22537),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_22537),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22537),"', 'reload-all');"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_22537,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22537),"');"], 0));
}

}
}
}


var G__22542 = seq__22510_22533;
var G__22543 = chunk__22511_22534;
var G__22544 = count__22512_22535;
var G__22545 = (i__22513_22536 + (1));
seq__22510_22533 = G__22542;
chunk__22511_22534 = G__22543;
count__22512_22535 = G__22544;
i__22513_22536 = G__22545;
continue;
} else {
var temp__5457__auto___22546 = cljs.core.seq(seq__22510_22533);
if(temp__5457__auto___22546){
var seq__22510_22547__$1 = temp__5457__auto___22546;
if(cljs.core.chunked_seq_QMARK_(seq__22510_22547__$1)){
var c__4351__auto___22548 = cljs.core.chunk_first(seq__22510_22547__$1);
var G__22549 = cljs.core.chunk_rest(seq__22510_22547__$1);
var G__22550 = c__4351__auto___22548;
var G__22551 = cljs.core.count(c__4351__auto___22548);
var G__22552 = (0);
seq__22510_22533 = G__22549;
chunk__22511_22534 = G__22550;
count__22512_22535 = G__22551;
i__22513_22536 = G__22552;
continue;
} else {
var lib_22553 = cljs.core.first(seq__22510_22547__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_22553)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_22553),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22553),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_22553),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22553),"', 'reload-all');"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_22553,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_22553),"');"], 0));
}

}
}
}


var G__22557 = cljs.core.next(seq__22510_22547__$1);
var G__22558 = null;
var G__22559 = (0);
var G__22560 = (0);
seq__22510_22533 = G__22557;
chunk__22511_22534 = G__22558;
count__22512_22535 = G__22559;
i__22513_22536 = G__22560;
continue;
}
} else {
}
}
break;
}

var seq__22516_22561 = cljs.core.seq(node_libs);
var chunk__22517_22562 = null;
var count__22518_22563 = (0);
var i__22519_22564 = (0);
while(true){
if((i__22519_22564 < count__22518_22563)){
var lib_22568 = chunk__22517_22562.cljs$core$IIndexed$_nth$arity$2(null,i__22519_22564);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_22568)," = require('",lib_22568,"');"], 0));


var G__22569 = seq__22516_22561;
var G__22570 = chunk__22517_22562;
var G__22571 = count__22518_22563;
var G__22572 = (i__22519_22564 + (1));
seq__22516_22561 = G__22569;
chunk__22517_22562 = G__22570;
count__22518_22563 = G__22571;
i__22519_22564 = G__22572;
continue;
} else {
var temp__5457__auto___22573 = cljs.core.seq(seq__22516_22561);
if(temp__5457__auto___22573){
var seq__22516_22574__$1 = temp__5457__auto___22573;
if(cljs.core.chunked_seq_QMARK_(seq__22516_22574__$1)){
var c__4351__auto___22575 = cljs.core.chunk_first(seq__22516_22574__$1);
var G__22576 = cljs.core.chunk_rest(seq__22516_22574__$1);
var G__22577 = c__4351__auto___22575;
var G__22578 = cljs.core.count(c__4351__auto___22575);
var G__22579 = (0);
seq__22516_22561 = G__22576;
chunk__22517_22562 = G__22577;
count__22518_22563 = G__22578;
i__22519_22564 = G__22579;
continue;
} else {
var lib_22580 = cljs.core.first(seq__22516_22574__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_22580)," = require('",lib_22580,"');"], 0));


var G__22581 = cljs.core.next(seq__22516_22574__$1);
var G__22582 = null;
var G__22583 = (0);
var G__22584 = (0);
seq__22516_22561 = G__22581;
chunk__22517_22562 = G__22582;
count__22518_22563 = G__22583;
i__22519_22564 = G__22584;
continue;
}
} else {
}
}
break;
}

var seq__22521_22585 = cljs.core.seq(global_exports_libs);
var chunk__22522_22586 = null;
var count__22523_22587 = (0);
var i__22524_22588 = (0);
while(true){
if((i__22524_22588 < count__22523_22587)){
var lib_22590 = chunk__22522_22586.cljs$core$IIndexed$_nth$arity$2(null,i__22524_22588);
var map__22525_22591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_22590));
var map__22525_22592__$1 = ((((!((map__22525_22591 == null)))?(((((map__22525_22591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22525_22591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22525_22591):map__22525_22591);
var global_exports_22593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525_22592__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_22590)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_22593,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_22590)),"\"];"], 0));


var G__22595 = seq__22521_22585;
var G__22596 = chunk__22522_22586;
var G__22597 = count__22523_22587;
var G__22598 = (i__22524_22588 + (1));
seq__22521_22585 = G__22595;
chunk__22522_22586 = G__22596;
count__22523_22587 = G__22597;
i__22524_22588 = G__22598;
continue;
} else {
var temp__5457__auto___22599 = cljs.core.seq(seq__22521_22585);
if(temp__5457__auto___22599){
var seq__22521_22600__$1 = temp__5457__auto___22599;
if(cljs.core.chunked_seq_QMARK_(seq__22521_22600__$1)){
var c__4351__auto___22601 = cljs.core.chunk_first(seq__22521_22600__$1);
var G__22602 = cljs.core.chunk_rest(seq__22521_22600__$1);
var G__22603 = c__4351__auto___22601;
var G__22604 = cljs.core.count(c__4351__auto___22601);
var G__22605 = (0);
seq__22521_22585 = G__22602;
chunk__22522_22586 = G__22603;
count__22523_22587 = G__22604;
i__22524_22588 = G__22605;
continue;
} else {
var lib_22606 = cljs.core.first(seq__22521_22600__$1);
var map__22527_22607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_22606));
var map__22527_22608__$1 = ((((!((map__22527_22607 == null)))?(((((map__22527_22607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22527_22607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22527_22607):map__22527_22607);
var global_exports_22609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527_22608__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_22606)," = goog.global[\"",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_22609,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_22606)),"\"];"], 0));


var G__22611 = cljs.core.next(seq__22521_22600__$1);
var G__22612 = null;
var G__22613 = (0);
var G__22614 = (0);
seq__22521_22585 = G__22611;
chunk__22522_22586 = G__22612;
count__22523_22587 = G__22613;
i__22524_22588 = G__22614;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__22616){
var map__22617 = p__22616;
var map__22617__$1 = ((((!((map__22617 == null)))?(((((map__22617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22617):map__22617);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__22625){
var map__22627 = p__22625;
var map__22627__$1 = ((((!((map__22627 == null)))?(((((map__22627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22627):map__22627);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__22633){
var map__22634 = p__22633;
var map__22634__$1 = ((((!((map__22634 == null)))?(((((map__22634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22634):map__22634);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22634__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__22636_22680 = cljs.core.seq(protocols);
var chunk__22637_22681 = null;
var count__22638_22682 = (0);
var i__22639_22683 = (0);
while(true){
if((i__22639_22683 < count__22638_22682)){
var protocol_22684 = chunk__22637_22681.cljs$core$IIndexed$_nth$arity$2(null,i__22639_22683);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22684)].join('')),"}"], 0));


var G__22685 = seq__22636_22680;
var G__22686 = chunk__22637_22681;
var G__22687 = count__22638_22682;
var G__22688 = (i__22639_22683 + (1));
seq__22636_22680 = G__22685;
chunk__22637_22681 = G__22686;
count__22638_22682 = G__22687;
i__22639_22683 = G__22688;
continue;
} else {
var temp__5457__auto___22689 = cljs.core.seq(seq__22636_22680);
if(temp__5457__auto___22689){
var seq__22636_22690__$1 = temp__5457__auto___22689;
if(cljs.core.chunked_seq_QMARK_(seq__22636_22690__$1)){
var c__4351__auto___22691 = cljs.core.chunk_first(seq__22636_22690__$1);
var G__22692 = cljs.core.chunk_rest(seq__22636_22690__$1);
var G__22693 = c__4351__auto___22691;
var G__22694 = cljs.core.count(c__4351__auto___22691);
var G__22695 = (0);
seq__22636_22680 = G__22692;
chunk__22637_22681 = G__22693;
count__22638_22682 = G__22694;
i__22639_22683 = G__22695;
continue;
} else {
var protocol_22697 = cljs.core.first(seq__22636_22690__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22697)].join('')),"}"], 0));


var G__22698 = cljs.core.next(seq__22636_22690__$1);
var G__22699 = null;
var G__22700 = (0);
var G__22701 = (0);
seq__22636_22680 = G__22698;
chunk__22637_22681 = G__22699;
count__22638_22682 = G__22700;
i__22639_22683 = G__22701;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__22658_22702 = cljs.core.seq(fields__$1);
var chunk__22659_22703 = null;
var count__22660_22704 = (0);
var i__22661_22705 = (0);
while(true){
if((i__22661_22705 < count__22660_22704)){
var fld_22706 = chunk__22659_22703.cljs$core$IIndexed$_nth$arity$2(null,i__22661_22705);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22706," = ",fld_22706,";"], 0));


var G__22707 = seq__22658_22702;
var G__22708 = chunk__22659_22703;
var G__22709 = count__22660_22704;
var G__22710 = (i__22661_22705 + (1));
seq__22658_22702 = G__22707;
chunk__22659_22703 = G__22708;
count__22660_22704 = G__22709;
i__22661_22705 = G__22710;
continue;
} else {
var temp__5457__auto___22711 = cljs.core.seq(seq__22658_22702);
if(temp__5457__auto___22711){
var seq__22658_22713__$1 = temp__5457__auto___22711;
if(cljs.core.chunked_seq_QMARK_(seq__22658_22713__$1)){
var c__4351__auto___22714 = cljs.core.chunk_first(seq__22658_22713__$1);
var G__22715 = cljs.core.chunk_rest(seq__22658_22713__$1);
var G__22716 = c__4351__auto___22714;
var G__22717 = cljs.core.count(c__4351__auto___22714);
var G__22718 = (0);
seq__22658_22702 = G__22715;
chunk__22659_22703 = G__22716;
count__22660_22704 = G__22717;
i__22661_22705 = G__22718;
continue;
} else {
var fld_22719 = cljs.core.first(seq__22658_22713__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22719," = ",fld_22719,";"], 0));


var G__22720 = cljs.core.next(seq__22658_22713__$1);
var G__22721 = null;
var G__22722 = (0);
var G__22723 = (0);
seq__22658_22702 = G__22720;
chunk__22659_22703 = G__22721;
count__22660_22704 = G__22722;
i__22661_22705 = G__22723;
continue;
}
} else {
}
}
break;
}

var seq__22670_22724 = cljs.core.seq(pmasks);
var chunk__22671_22725 = null;
var count__22672_22726 = (0);
var i__22673_22727 = (0);
while(true){
if((i__22673_22727 < count__22672_22726)){
var vec__22674_22728 = chunk__22671_22725.cljs$core$IIndexed$_nth$arity$2(null,i__22673_22727);
var pno_22729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22674_22728,(0),null);
var pmask_22730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22674_22728,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22729,"$ = ",pmask_22730,";"], 0));


var G__22731 = seq__22670_22724;
var G__22732 = chunk__22671_22725;
var G__22733 = count__22672_22726;
var G__22734 = (i__22673_22727 + (1));
seq__22670_22724 = G__22731;
chunk__22671_22725 = G__22732;
count__22672_22726 = G__22733;
i__22673_22727 = G__22734;
continue;
} else {
var temp__5457__auto___22735 = cljs.core.seq(seq__22670_22724);
if(temp__5457__auto___22735){
var seq__22670_22736__$1 = temp__5457__auto___22735;
if(cljs.core.chunked_seq_QMARK_(seq__22670_22736__$1)){
var c__4351__auto___22737 = cljs.core.chunk_first(seq__22670_22736__$1);
var G__22738 = cljs.core.chunk_rest(seq__22670_22736__$1);
var G__22739 = c__4351__auto___22737;
var G__22740 = cljs.core.count(c__4351__auto___22737);
var G__22741 = (0);
seq__22670_22724 = G__22738;
chunk__22671_22725 = G__22739;
count__22672_22726 = G__22740;
i__22673_22727 = G__22741;
continue;
} else {
var vec__22677_22742 = cljs.core.first(seq__22670_22736__$1);
var pno_22743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22742,(0),null);
var pmask_22744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22742,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22743,"$ = ",pmask_22744,";"], 0));


var G__22745 = cljs.core.next(seq__22670_22736__$1);
var G__22746 = null;
var G__22747 = (0);
var G__22748 = (0);
seq__22670_22724 = G__22745;
chunk__22671_22725 = G__22746;
count__22672_22726 = G__22747;
i__22673_22727 = G__22748;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__22751){
var map__22752 = p__22751;
var map__22752__$1 = ((((!((map__22752 == null)))?(((((map__22752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22752):map__22752);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__22754_22774 = cljs.core.seq(protocols);
var chunk__22756_22775 = null;
var count__22757_22776 = (0);
var i__22758_22777 = (0);
while(true){
if((i__22758_22777 < count__22757_22776)){
var protocol_22778 = chunk__22756_22775.cljs$core$IIndexed$_nth$arity$2(null,i__22758_22777);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22778)].join('')),"}"], 0));


var G__22779 = seq__22754_22774;
var G__22780 = chunk__22756_22775;
var G__22781 = count__22757_22776;
var G__22782 = (i__22758_22777 + (1));
seq__22754_22774 = G__22779;
chunk__22756_22775 = G__22780;
count__22757_22776 = G__22781;
i__22758_22777 = G__22782;
continue;
} else {
var temp__5457__auto___22783 = cljs.core.seq(seq__22754_22774);
if(temp__5457__auto___22783){
var seq__22754_22785__$1 = temp__5457__auto___22783;
if(cljs.core.chunked_seq_QMARK_(seq__22754_22785__$1)){
var c__4351__auto___22786 = cljs.core.chunk_first(seq__22754_22785__$1);
var G__22787 = cljs.core.chunk_rest(seq__22754_22785__$1);
var G__22788 = c__4351__auto___22786;
var G__22789 = cljs.core.count(c__4351__auto___22786);
var G__22790 = (0);
seq__22754_22774 = G__22787;
chunk__22756_22775 = G__22788;
count__22757_22776 = G__22789;
i__22758_22777 = G__22790;
continue;
} else {
var protocol_22792 = cljs.core.first(seq__22754_22785__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_22792)].join('')),"}"], 0));


var G__22793 = cljs.core.next(seq__22754_22785__$1);
var G__22794 = null;
var G__22795 = (0);
var G__22796 = (0);
seq__22754_22774 = G__22793;
chunk__22756_22775 = G__22794;
count__22757_22776 = G__22795;
i__22758_22777 = G__22796;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__22760_22797 = cljs.core.seq(fields__$1);
var chunk__22761_22798 = null;
var count__22762_22799 = (0);
var i__22763_22800 = (0);
while(true){
if((i__22763_22800 < count__22762_22799)){
var fld_22801 = chunk__22761_22798.cljs$core$IIndexed$_nth$arity$2(null,i__22763_22800);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22801," = ",fld_22801,";"], 0));


var G__22804 = seq__22760_22797;
var G__22805 = chunk__22761_22798;
var G__22806 = count__22762_22799;
var G__22807 = (i__22763_22800 + (1));
seq__22760_22797 = G__22804;
chunk__22761_22798 = G__22805;
count__22762_22799 = G__22806;
i__22763_22800 = G__22807;
continue;
} else {
var temp__5457__auto___22810 = cljs.core.seq(seq__22760_22797);
if(temp__5457__auto___22810){
var seq__22760_22811__$1 = temp__5457__auto___22810;
if(cljs.core.chunked_seq_QMARK_(seq__22760_22811__$1)){
var c__4351__auto___22812 = cljs.core.chunk_first(seq__22760_22811__$1);
var G__22813 = cljs.core.chunk_rest(seq__22760_22811__$1);
var G__22814 = c__4351__auto___22812;
var G__22815 = cljs.core.count(c__4351__auto___22812);
var G__22816 = (0);
seq__22760_22797 = G__22813;
chunk__22761_22798 = G__22814;
count__22762_22799 = G__22815;
i__22763_22800 = G__22816;
continue;
} else {
var fld_22817 = cljs.core.first(seq__22760_22811__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_22817," = ",fld_22817,";"], 0));


var G__22818 = cljs.core.next(seq__22760_22811__$1);
var G__22819 = null;
var G__22820 = (0);
var G__22821 = (0);
seq__22760_22797 = G__22818;
chunk__22761_22798 = G__22819;
count__22762_22799 = G__22820;
i__22763_22800 = G__22821;
continue;
}
} else {
}
}
break;
}

var seq__22764_22823 = cljs.core.seq(pmasks);
var chunk__22765_22824 = null;
var count__22766_22825 = (0);
var i__22767_22826 = (0);
while(true){
if((i__22767_22826 < count__22766_22825)){
var vec__22768_22831 = chunk__22765_22824.cljs$core$IIndexed$_nth$arity$2(null,i__22767_22826);
var pno_22832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768_22831,(0),null);
var pmask_22833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768_22831,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22832,"$ = ",pmask_22833,";"], 0));


var G__22835 = seq__22764_22823;
var G__22836 = chunk__22765_22824;
var G__22837 = count__22766_22825;
var G__22838 = (i__22767_22826 + (1));
seq__22764_22823 = G__22835;
chunk__22765_22824 = G__22836;
count__22766_22825 = G__22837;
i__22767_22826 = G__22838;
continue;
} else {
var temp__5457__auto___22839 = cljs.core.seq(seq__22764_22823);
if(temp__5457__auto___22839){
var seq__22764_22840__$1 = temp__5457__auto___22839;
if(cljs.core.chunked_seq_QMARK_(seq__22764_22840__$1)){
var c__4351__auto___22841 = cljs.core.chunk_first(seq__22764_22840__$1);
var G__22842 = cljs.core.chunk_rest(seq__22764_22840__$1);
var G__22843 = c__4351__auto___22841;
var G__22844 = cljs.core.count(c__4351__auto___22841);
var G__22845 = (0);
seq__22764_22823 = G__22842;
chunk__22765_22824 = G__22843;
count__22766_22825 = G__22844;
i__22767_22826 = G__22845;
continue;
} else {
var vec__22771_22846 = cljs.core.first(seq__22764_22840__$1);
var pno_22847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22771_22846,(0),null);
var pmask_22848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22771_22846,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_22847,"$ = ",pmask_22848,";"], 0));


var G__22851 = cljs.core.next(seq__22764_22840__$1);
var G__22852 = null;
var G__22853 = (0);
var G__22854 = (0);
seq__22764_22823 = G__22851;
chunk__22765_22824 = G__22852;
count__22766_22825 = G__22853;
i__22767_22826 = G__22854;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__22856){
var map__22857 = p__22856;
var map__22857__$1 = ((((!((map__22857 == null)))?(((((map__22857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22857):map__22857);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22857__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__22870){
var map__22871 = p__22870;
var map__22871__$1 = ((((!((map__22871 == null)))?(((((map__22871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22871):map__22871);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3938__auto__ = code;
if(cljs.core.truth_(and__3938__auto__)){
var G__22879 = clojure.string.trim(code);
var G__22880 = "/*";
return goog.string.startsWith(G__22879,G__22880);
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__20902__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20902__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__22889 = cljs.core.seq(table);
var chunk__22890 = null;
var count__22891 = (0);
var i__22892 = (0);
while(true){
if((i__22892 < count__22891)){
var vec__22893 = chunk__22890.cljs$core$IIndexed$_nth$arity$2(null,i__22892);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22893,(1),null);
var ns_22899 = cljs.core.namespace(sym);
var name_22900 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__22901 = seq__22889;
var G__22902 = chunk__22890;
var G__22903 = count__22891;
var G__22904 = (i__22892 + (1));
seq__22889 = G__22901;
chunk__22890 = G__22902;
count__22891 = G__22903;
i__22892 = G__22904;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22889);
if(temp__5457__auto__){
var seq__22889__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22889__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22889__$1);
var G__22906 = cljs.core.chunk_rest(seq__22889__$1);
var G__22907 = c__4351__auto__;
var G__22908 = cljs.core.count(c__4351__auto__);
var G__22909 = (0);
seq__22889 = G__22906;
chunk__22890 = G__22907;
count__22891 = G__22908;
i__22892 = G__22909;
continue;
} else {
var vec__22896 = cljs.core.first(seq__22889__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22896,(1),null);
var ns_22911 = cljs.core.namespace(sym);
var name_22912 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));


var G__22913 = cljs.core.next(seq__22889__$1);
var G__22914 = null;
var G__22915 = (0);
var G__22916 = (0);
seq__22889 = G__22913;
chunk__22890 = G__22914;
count__22891 = G__22915;
i__22892 = G__22916;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__22923 = arguments.length;
switch (G__22923) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_22933 = cljs.core.first(ks);
var vec__22926_22934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_22933);
var top_22935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926_22934,(0),null);
var prefix_SINGLEQUOTE__22936 = vec__22926_22934;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_22933)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__22936) == null)))){
if(!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_22935)) || (cljs.core.contains_QMARK_(known_externs,top_22935))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22936)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_22935);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__22936)),";"], 0));
}
} else {
}

var m_22942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_22933);
if(cljs.core.empty_QMARK_(m_22942)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__22936,m_22942,top_level,known_externs);
}

var G__22943 = cljs.core.next(ks);
ks = G__22943;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=cljs.compiler.js.map
