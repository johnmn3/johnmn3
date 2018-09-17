goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20887){
var map__20888 = p__20887;
var map__20888__$1 = ((((!((map__20888 == null)))?(((((map__20888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20888):map__20888);
var m = map__20888__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20894_20928 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20895_20929 = null;
var count__20896_20930 = (0);
var i__20897_20931 = (0);
while(true){
if((i__20897_20931 < count__20896_20930)){
var f_20933 = chunk__20895_20929.cljs$core$IIndexed$_nth$arity$2(null,i__20897_20931);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20933], 0));


var G__20934 = seq__20894_20928;
var G__20935 = chunk__20895_20929;
var G__20936 = count__20896_20930;
var G__20937 = (i__20897_20931 + (1));
seq__20894_20928 = G__20934;
chunk__20895_20929 = G__20935;
count__20896_20930 = G__20936;
i__20897_20931 = G__20937;
continue;
} else {
var temp__5457__auto___20939 = cljs.core.seq(seq__20894_20928);
if(temp__5457__auto___20939){
var seq__20894_20940__$1 = temp__5457__auto___20939;
if(cljs.core.chunked_seq_QMARK_(seq__20894_20940__$1)){
var c__4351__auto___20942 = cljs.core.chunk_first(seq__20894_20940__$1);
var G__20943 = cljs.core.chunk_rest(seq__20894_20940__$1);
var G__20944 = c__4351__auto___20942;
var G__20945 = cljs.core.count(c__4351__auto___20942);
var G__20946 = (0);
seq__20894_20928 = G__20943;
chunk__20895_20929 = G__20944;
count__20896_20930 = G__20945;
i__20897_20931 = G__20946;
continue;
} else {
var f_20947 = cljs.core.first(seq__20894_20940__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20947], 0));


var G__20948 = cljs.core.next(seq__20894_20940__$1);
var G__20949 = null;
var G__20950 = (0);
var G__20951 = (0);
seq__20894_20928 = G__20948;
chunk__20895_20929 = G__20949;
count__20896_20930 = G__20950;
i__20897_20931 = G__20951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20952 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20952], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20952)))?cljs.core.second(arglists_20952):arglists_20952)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20903_20957 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20904_20958 = null;
var count__20905_20959 = (0);
var i__20906_20960 = (0);
while(true){
if((i__20906_20960 < count__20905_20959)){
var vec__20907_20965 = chunk__20904_20958.cljs$core$IIndexed$_nth$arity$2(null,i__20906_20960);
var name_20966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20907_20965,(0),null);
var map__20910_20967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20907_20965,(1),null);
var map__20910_20968__$1 = ((((!((map__20910_20967 == null)))?(((((map__20910_20967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20910_20967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20910_20967):map__20910_20967);
var doc_20969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910_20968__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20910_20968__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20966], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20970], 0));

if(cljs.core.truth_(doc_20969)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20969], 0));
} else {
}


var G__20974 = seq__20903_20957;
var G__20976 = chunk__20904_20958;
var G__20977 = count__20905_20959;
var G__20978 = (i__20906_20960 + (1));
seq__20903_20957 = G__20974;
chunk__20904_20958 = G__20976;
count__20905_20959 = G__20977;
i__20906_20960 = G__20978;
continue;
} else {
var temp__5457__auto___20979 = cljs.core.seq(seq__20903_20957);
if(temp__5457__auto___20979){
var seq__20903_20980__$1 = temp__5457__auto___20979;
if(cljs.core.chunked_seq_QMARK_(seq__20903_20980__$1)){
var c__4351__auto___20981 = cljs.core.chunk_first(seq__20903_20980__$1);
var G__20982 = cljs.core.chunk_rest(seq__20903_20980__$1);
var G__20983 = c__4351__auto___20981;
var G__20984 = cljs.core.count(c__4351__auto___20981);
var G__20985 = (0);
seq__20903_20957 = G__20982;
chunk__20904_20958 = G__20983;
count__20905_20959 = G__20984;
i__20906_20960 = G__20985;
continue;
} else {
var vec__20917_20986 = cljs.core.first(seq__20903_20980__$1);
var name_20987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20917_20986,(0),null);
var map__20920_20988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20917_20986,(1),null);
var map__20920_20989__$1 = ((((!((map__20920_20988 == null)))?(((((map__20920_20988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20920_20988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20920_20988):map__20920_20988);
var doc_20990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_20989__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_20989__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20987], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20991], 0));

if(cljs.core.truth_(doc_20990)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20990], 0));
} else {
}


var G__20996 = cljs.core.next(seq__20903_20980__$1);
var G__20997 = null;
var G__20998 = (0);
var G__20999 = (0);
seq__20903_20957 = G__20996;
chunk__20904_20958 = G__20997;
count__20905_20959 = G__20998;
i__20906_20960 = G__20999;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20922 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20923 = null;
var count__20924 = (0);
var i__20925 = (0);
while(true){
if((i__20925 < count__20924)){
var role = chunk__20923.cljs$core$IIndexed$_nth$arity$2(null,i__20925);
var temp__5457__auto___21001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21001__$1)){
var spec_21002 = temp__5457__auto___21001__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21002)], 0));
} else {
}


var G__21003 = seq__20922;
var G__21004 = chunk__20923;
var G__21005 = count__20924;
var G__21006 = (i__20925 + (1));
seq__20922 = G__21003;
chunk__20923 = G__21004;
count__20924 = G__21005;
i__20925 = G__21006;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__20922);
if(temp__5457__auto____$1){
var seq__20922__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20922__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20922__$1);
var G__21009 = cljs.core.chunk_rest(seq__20922__$1);
var G__21010 = c__4351__auto__;
var G__21011 = cljs.core.count(c__4351__auto__);
var G__21012 = (0);
seq__20922 = G__21009;
chunk__20923 = G__21010;
count__20924 = G__21011;
i__20925 = G__21012;
continue;
} else {
var role = cljs.core.first(seq__20922__$1);
var temp__5457__auto___21015__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21015__$2)){
var spec_21016 = temp__5457__auto___21015__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_21016)], 0));
} else {
}


var G__21019 = cljs.core.next(seq__20922__$1);
var G__21020 = null;
var G__21021 = (0);
var G__21022 = (0);
seq__20922 = G__21019;
chunk__20923 = G__21020;
count__20924 = G__21021;
i__20925 = G__21022;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
