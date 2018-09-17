goog.provide('re_db.core$macros');
goog.require('cljs.core');
var ret__4565__auto___18657 = (function (){
/**
 * Evaluates body without tracking read patterns.
 */
re_db.core$macros.peek = (function re_db$core$macros$peek(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18658 = arguments.length;
var i__4532__auto___18659 = (0);
while(true){
if((i__4532__auto___18659 < len__4531__auto___18658)){
args__4534__auto__.push((arguments[i__4532__auto___18659]));

var G__18660 = (i__4532__auto___18659 + (1));
i__4532__auto___18659 = G__18660;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*access-log*","re-db.core/*access-log*",-1497823226,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0))));
});

re_db.core$macros.peek.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_db.core$macros.peek.cljs$lang$applyTo = (function (seq18648){
var G__18649 = cljs.core.first(seq18648);
var seq18648__$1 = cljs.core.next(seq18648);
var G__18650 = cljs.core.first(seq18648__$1);
var seq18648__$2 = cljs.core.next(seq18648__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18649,G__18650,seq18648__$2);
});

return null;
})()
;
re_db.core$macros.peek.cljs$lang$macro = true;

var ret__4565__auto___18696 = (function (){
/**
 * Compiled version of get-in, small performance boost over the `get-in` function.
 */
re_db.core$macros.get_in_STAR_ = (function re_db$core$macros$get_in_STAR_(var_args){
var G__18670 = arguments.length;
switch (G__18670) {
case 4:
return re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks){
if(!(cljs.core.vector_QMARK_(ks))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4324__auto__ = (function re_db$core$macros$iter__18675(s__18676){
return (new cljs.core.LazySeq(null,(function (){
var s__18676__$1 = s__18676;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18676__$1);
if(temp__5457__auto__){
var s__18676__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18676__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18676__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18678 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18677 = (0);
while(true){
if((i__18677 < size__4323__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18677);
cljs.core.chunk_append(b__18678,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__18701 = (i__18677 + (1));
i__18677 = G__18701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18678),re_db$core$macros$iter__18675(cljs.core.chunk_rest(s__18676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18678),null);
}
} else {
var k = cljs.core.first(s__18676__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__18675(cljs.core.rest(s__18676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(ks);
})()], 0))));
}
});

re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks,not_found){
if(!(cljs.core.vector_QMARK_(ks))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4324__auto__ = (function re_db$core$macros$iter__18691(s__18692){
return (new cljs.core.LazySeq(null,(function (){
var s__18692__$1 = s__18692;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18692__$1);
if(temp__5457__auto__){
var s__18692__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18692__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18692__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18694 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18693 = (0);
while(true){
if((i__18693 < size__4323__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18693);
cljs.core.chunk_append(b__18694,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__18712 = (i__18693 + (1));
i__18693 = G__18712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18694),re_db$core$macros$iter__18691(cljs.core.chunk_rest(s__18692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18694),null);
}
} else {
var k = cljs.core.first(s__18692__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__18691(cljs.core.rest(s__18692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks));
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}
});

re_db.core$macros.get_in_STAR_.cljs$lang$maxFixedArity = 5;

return null;
})()
;
re_db.core$macros.get_in_STAR_.cljs$lang$macro = true;

var ret__4565__auto___18727 = (function (){
re_db.core$macros.db_log = (function re_db$core$macros$db_log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18728 = arguments.length;
var i__4532__auto___18729 = (0);
while(true){
if((i__4532__auto___18729 < len__4531__auto___18728)){
args__4534__auto__.push((arguments[i__4532__auto___18729]));

var G__18730 = (i__4532__auto___18729 + (1));
i__4532__auto___18729 = G__18730;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","atom","clojure.core/atom",2042805115,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*prevent-notify*","re-db.core/*prevent-notify*",1331529761,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__18714__auto__","value__18714__auto__",-1987735770,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18714__auto__","value__18714__auto__",-1987735770,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

re_db.core$macros.db_log.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_db.core$macros.db_log.cljs$lang$applyTo = (function (seq18716){
var G__18717 = cljs.core.first(seq18716);
var seq18716__$1 = cljs.core.next(seq18716);
var G__18718 = cljs.core.first(seq18716__$1);
var seq18716__$2 = cljs.core.next(seq18716__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18717,G__18718,seq18716__$2);
});

return null;
})()
;
re_db.core$macros.db_log.cljs$lang$macro = true;


//# sourceMappingURL=re-db.core$macros.js.map
