goog.provide('shadow_eval.user');
goog.require('cljs.core');
goog.require('re_view.hiccup.core');
goog.require('cells.cell');
goog.require('shadow_eval.hiccups');
goog.require('shadow_eval.core');
goog.require('re_db.d');
goog.require('clojure.set');
goog.require('cells.lib');
goog.require('shapes.core');
goog.require('re_view.core');
goog.require('lark.value_viewer.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.js');
goog.require('goog.net.XhrManager');
shadow_eval.user.eval_post = (function shadow_eval$user$eval_post(s){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["(do #_ (enable-console-print!)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["got result: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], 0));

return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("shadow-eval.user","no-value","shadow-eval.user/no-value",764126365));
}));
});
shadow_eval.user.__GT_date = (function shadow_eval$user$__GT_date(js_date){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_date)].join('');
});
shadow_eval.user.html = (function shadow_eval$user$html(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12482 = arguments.length;
var i__4532__auto___12483 = (0);
while(true){
if((i__4532__auto___12483 < len__4531__auto___12482)){
args__4534__auto__.push((arguments[i__4532__auto___12483]));

var G__12484 = (i__4532__auto___12483 + (1));
i__4532__auto___12483 = G__12484;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow_eval.user.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow_eval.user.html.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf-8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.1/tufte.min.css"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),forms], null)], null);
});

shadow_eval.user.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow_eval.user.html.cljs$lang$applyTo = (function (seq12476){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12476));
});

shadow_eval.user.index = (function shadow_eval$user$index(post_infos){
return shadow_eval.user.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"My Blog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome or some-such."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4324__auto__ = (function shadow_eval$user$index_$_iter__12489(s__12490){
return (new cljs.core.LazySeq(null,(function (){
var s__12490__$1 = s__12490;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12490__$1);
if(temp__5457__auto__){
var s__12490__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12490__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12490__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12492 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12491 = (0);
while(true){
if((i__12491 < size__4323__auto__)){
var map__12494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12491);
var map__12494__$1 = ((((!((map__12494 == null)))?(((((map__12494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12494):map__12494);
var here = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12494__$1,new cljs.core.Keyword(null,"here","here",-1501585969));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12494__$1,new cljs.core.Keyword(null,"title","title",636505583));
var creation_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12494__$1,new cljs.core.Keyword(null,"creation-time","creation-time",-1921334563));
cljs.core.chunk_append(b__12492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["posts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(here)].join('')], null),title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," - (posted on: ",shadow_eval.user.__GT_date(creation_time),")"], null)], null));

var G__12509 = (i__12491 + (1));
i__12491 = G__12509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12492),shadow_eval$user$index_$_iter__12489(cljs.core.chunk_rest(s__12490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12492),null);
}
} else {
var map__12499 = cljs.core.first(s__12490__$2);
var map__12499__$1 = ((((!((map__12499 == null)))?(((((map__12499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12499):map__12499);
var here = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"here","here",-1501585969));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"title","title",636505583));
var creation_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"creation-time","creation-time",-1921334563));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["posts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(here)].join('')], null),title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," - (posted on: ",shadow_eval.user.__GT_date(creation_time),")"], null)], null),shadow_eval$user$index_$_iter__12489(cljs.core.rest(s__12490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(post_infos);
})())], null)], 0));
});
shadow_eval.user.post = (function shadow_eval$user$post(content,p__12522){
var map__12523 = p__12522;
var map__12523__$1 = ((((!((map__12523 == null)))?(((((map__12523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12523):map__12523);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"title","title",636505583));
var creation_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"creation-time","creation-time",-1921334563));
var here = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"here","here",-1501585969));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12523__$1,new cljs.core.Keyword(null,"up","up",-269712113));
return shadow_eval.user.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),here], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Posted on: ",shadow_eval.user.__GT_date(creation_time)], null),content,(cljs.core.truth_(prev)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),prev], null),"<--"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"margin: auto 10px;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),up], null),"back"], null)], null),(cljs.core.truth_(next)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),next], null),"-->"], null):null)], 0));
});
shadow_eval.user.title = (function shadow_eval$user$title(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null);
});
shadow_eval.user.p = (function shadow_eval$user$p(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12550 = arguments.length;
var i__4532__auto___12551 = (0);
while(true){
if((i__4532__auto___12551 < len__4531__auto___12550)){
args__4534__auto__.push((arguments[i__4532__auto___12551]));

var G__12552 = (i__4532__auto___12551 + (1));
i__4532__auto___12551 = G__12552;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow_eval.user.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow_eval.user.p.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",xs)], null);
});

shadow_eval.user.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow_eval.user.p.cljs$lang$applyTo = (function (seq12533){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12533));
});

shadow_eval.user.posts = (function shadow_eval$user$posts(branch){
return cljs.core.filterv((function (p1__12558_SHARP_){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12558_SHARP_).startsWith("_posts");
}),new cljs.core.Keyword(null,"old-files","old-files",-82011168).cljs$core$IFn$_invoke$arity$1(branch));
});
shadow_eval.user.add_next_prev = (function shadow_eval$user$add_next_prev(posts){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p){
var next_file = new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,(idx + (1))));
var prev_file = new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(posts,(idx - (1))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"next","next",-117701485),next_file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev","prev",-1597069226),prev_file], 0));
}),posts));
});
shadow_eval.user.get_file_name = (function shadow_eval$user$get_file_name(path){
return cljs.core.last(cljs.core.last(cljs.core.re_seq(/\/(.[^\/|*].+)/,path)));
});
shadow_eval.user.__GT_title = (function shadow_eval$user$__GT_title(path){
var $ = path;
var $__$1 = shadow_eval.user.get_file_name($);
var $__$2 = clojure.string.replace($__$1,".edn","");
var $__$3 = clojure.string.replace($__$2,"_"," ");
var $__$4 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$3," ");
var $__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,$__$4);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",$__$5);
});
shadow_eval.user.process_post = (function shadow_eval$user$process_post(post_map){
var process_hiccup = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(shadow_eval.user.eval_post,cljs.core.pr_str);
if(cljs.core.truth_(post_map)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"process-post","process-post",1212259241),post_map], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(post_map,new cljs.core.Keyword(null,"content","content",15833224),(function (){var G__12575 = new cljs.core.Keyword(null,"edn","edn",1317840885).cljs$core$IFn$_invoke$arity$1(post_map);
return (process_hiccup.cljs$core$IFn$_invoke$arity$1 ? process_hiccup.cljs$core$IFn$_invoke$arity$1(G__12575) : process_hiccup.call(null,G__12575));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mode","mode",654403691),"100644",new cljs.core.Keyword(null,"type","type",1174270348),"blob",new cljs.core.Keyword(null,"creation-time","creation-time",-1921334563),"recently",new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),"recently",new cljs.core.Keyword(null,"title","title",636505583),shadow_eval.user.__GT_title((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(post_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(post_map);
}
})()),new cljs.core.Keyword(null,"here","here",-1501585969),clojure.string.replace(shadow_eval.user.get_file_name((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(post_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(post_map);
}
})()),"edn","html")], 0));
} else {
return null;
}
});
shadow_eval.user.process_posts = (function shadow_eval$user$process_posts(post_maps){
return shadow_eval.user.add_next_prev(cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shadow_eval.user.process_post,post_maps))));
});
shadow_eval.user.fake_fs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow_eval.user.fake_spit_BANG_ = (function shadow_eval$user$fake_spit_BANG_(fname,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow_eval.user.fake_fs,cljs.core.assoc,fname,f);
});
shadow_eval.user.write_post = (function shadow_eval$user$write_post(out_dir,p__12588){
var map__12593 = p__12588;
var map__12593__$1 = ((((!((map__12593 == null)))?(((((map__12593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12593):map__12593);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"content","content",15833224));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var here = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"here","here",-1501585969));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"title","title",636505583));
var time_stamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12593__$1,new cljs.core.Keyword(null,"next","next",-117701485));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writing post -> ",path], 0));

return shadow_eval.user.fake_spit_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(out_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(here)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(shadow_eval.user.post(content,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"creation-time","creation-time",-1921334563),time_stamp,new cljs.core.Keyword(null,"here","here",-1501585969),here,new cljs.core.Keyword(null,"next","next",-117701485),next,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev,new cljs.core.Keyword(null,"up","up",-269712113),"../index.html"], null))))].join(''));
});
shadow_eval.user.write_posts = (function shadow_eval$user$write_posts(processed_posts,out_dir){
var seq__12595 = cljs.core.seq(processed_posts);
var chunk__12596 = null;
var count__12597 = (0);
var i__12598 = (0);
while(true){
if((i__12598 < count__12597)){
var post_info = chunk__12596.cljs$core$IIndexed$_nth$arity$2(null,i__12598);
shadow_eval.user.write_post(out_dir,post_info);


var G__12599 = seq__12595;
var G__12600 = chunk__12596;
var G__12601 = count__12597;
var G__12602 = (i__12598 + (1));
seq__12595 = G__12599;
chunk__12596 = G__12600;
count__12597 = G__12601;
i__12598 = G__12602;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12595);
if(temp__5457__auto__){
var seq__12595__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12595__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12595__$1);
var G__12603 = cljs.core.chunk_rest(seq__12595__$1);
var G__12604 = c__4351__auto__;
var G__12605 = cljs.core.count(c__4351__auto__);
var G__12606 = (0);
seq__12595 = G__12603;
chunk__12596 = G__12604;
count__12597 = G__12605;
i__12598 = G__12606;
continue;
} else {
var post_info = cljs.core.first(seq__12595__$1);
shadow_eval.user.write_post(out_dir,post_info);


var G__12607 = cljs.core.next(seq__12595__$1);
var G__12608 = null;
var G__12609 = (0);
var G__12610 = (0);
seq__12595 = G__12607;
chunk__12596 = G__12608;
count__12597 = G__12609;
i__12598 = G__12610;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow_eval.user.write_index = (function shadow_eval$user$write_index(processed_posts,out_dir){
var out_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(shadow_eval.user.index(processed_posts)))].join('');
var out_file = "index.html";
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writing index -> ",out_file], 0));

return shadow_eval.user.fake_spit_BANG_(out_file,out_str);
});
shadow_eval.user.post__GT_map = (function shadow_eval$user$post__GT_map(p__12611){
var vec__12612 = p__12611;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(0),null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),html,new cljs.core.Keyword(null,"mode","mode",654403691),"100644",new cljs.core.Keyword(null,"type","type",1174270348),"blob",new cljs.core.Keyword(null,"here","here",-1501585969),slug], null);
});
shadow_eval.user.compile_blog = (function shadow_eval$user$compile_blog(post_maps,out_dir){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["branch: master"], 0));

var processed_posts = shadow_eval.user.process_posts(post_maps);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writing posts..."], 0));

shadow_eval.user.write_posts(processed_posts,out_dir);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writing index..."], 0));

shadow_eval.user.write_index(processed_posts,out_dir);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shadow_eval.user.post__GT_map,cljs.core.deref(shadow_eval.user.fake_fs)));
});
shadow_eval.user.qs = (function shadow_eval$user$qs(var_args){
var G__12616 = arguments.length;
switch (G__12616) {
case 1:
return shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1 = (function (x){
return shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$2(document,x);
});

shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$2 = (function (target,x){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(target.querySelectorAll(x));
});

shadow_eval.user.qs.cljs$lang$maxFixedArity = 2;

shadow_eval.user.load = (function shadow_eval$user$load(aname,url){
var tag = document.createElement("script");
tag.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aname)].join('');

tag.src = url;

var first_script_tag = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("script")));
return first_script_tag.parentNode.insertBefore(tag,first_script_tag);
});
shadow_eval.user.load_gh_api = (function shadow_eval$user$load_gh_api(){
return shadow_eval.user.load("github-api","//unpkg.com/github-api/dist/GitHub.bundle.min.js");
});
shadow_eval.user.load_gh_api();
shadow_eval.user.set_branch = (function shadow_eval$user$set_branch(gh,arepo,acurrent_branch,branch_name){
if(cljs.core.not(arepo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Repository is not initialized",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"causes","causes",320696351),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo-never-set","repo-never-set",1860174374),null,new cljs.core.Keyword(null,"repo-was-nilled","repo-was-nilled",137638027),null], null), null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gh","gh",1385800480),gh,new cljs.core.Keyword(null,"repo","repo",-1999060679),arepo,new cljs.core.Keyword(null,"current-branch","current-branch",873754793),cljs.core.deref(acurrent_branch),new cljs.core.Keyword(null,"set-branch","set-branch",-1829905230),branch_name], null)], null));
} else {
return arepo.listBranches().then((function (branches){
var branch_exists_QMARK_ = branches.data.find((function (p1__12622_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12622_SHARP_.name,branch_name);
}));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"branch-exists?","branch-exists?",1715527219),branch_exists_QMARK_], 0));

if(cljs.core.not(branch_exists_QMARK_)){
return "master".createBranch(branch_name).then(((function (branch_exists_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(acurrent_branch,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),branch_name);
});})(branch_exists_QMARK_))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(acurrent_branch,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),branch_name);
}
}));
}
});
shadow_eval.user.get_current_commit_sha = (function shadow_eval$user$get_current_commit_sha(arepo,acurrent_branch){
return arepo.getRef(["heads/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch)))].join('')).then((function (ref){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(acurrent_branch,cljs.core.assoc,new cljs.core.Keyword(null,"commit-sha","commit-sha",-90053959),ref.data.object.sha);
}));
});
shadow_eval.user.get_current_tree_sha = (function shadow_eval$user$get_current_tree_sha(arepo,acurrent_branch){
return arepo.getCommit(new cljs.core.Keyword(null,"commit-sha","commit-sha",-90053959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch))).then((function (commit){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(acurrent_branch,cljs.core.assoc,new cljs.core.Keyword(null,"tree-sha","tree-sha",-839479077),commit.data.tree.sha);
}));
});
shadow_eval.user.get_current_tree = (function shadow_eval$user$get_current_tree(arepo,acurrent_branch){
return arepo.getTree([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tree-sha","tree-sha",-839479077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch))),"?recursive=true"].join('')).then((function (blob){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(acurrent_branch,cljs.core.assoc,new cljs.core.Keyword(null,"tree-blobs","tree-blobs",-1817402539),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(blob,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
shadow_eval.user.create_file = (function shadow_eval$user$create_file(arepo,afiles_to_commit,file_info){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-info","file-info",1492124461),file_info], 0));

return arepo.createBlob(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(file_info)).then((function (blob){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(afiles_to_commit,cljs.core.conj,({"sha": blob.data.sha, "path": new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(file_info), "mode": "100644", "type": "blob"}));
}));
});
shadow_eval.user.create_files = (function shadow_eval$user$create_files(arepo,afiles_to_commit,files_info){
return Promise.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(shadow_eval.user.create_file,arepo,afiles_to_commit),files_info));
});
shadow_eval.user.create_tree = (function shadow_eval$user$create_tree(arepo,afiles_to_commit,acurrent_branch,anew_commit){
return arepo.createTree(cljs.core.clj__GT_js(cljs.core.deref(afiles_to_commit)),new cljs.core.Keyword(null,"tree-sha","tree-sha",-839479077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch))).then((function (tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anew_commit,cljs.core.assoc,new cljs.core.Keyword(null,"tree-sha","tree-sha",-839479077),tree.data.sha);
}));
});
shadow_eval.user.create_commit = (function shadow_eval$user$create_commit(arepo,acurrent_branch,anew_commit,message){
return arepo.commit(new cljs.core.Keyword(null,"commit-sha","commit-sha",-90053959).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch)),new cljs.core.Keyword(null,"tree-sha","tree-sha",-839479077).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anew_commit)),message).then((function (commit){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(anew_commit,cljs.core.assoc,new cljs.core.Keyword(null,"sha","sha",-950317251),commit.data.sha);
}));
});
shadow_eval.user.update_head = (function shadow_eval$user$update_head(arepo,acurrent_branch,anew_commit){
return arepo.updateHead(["heads/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch)))].join(''),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(anew_commit)));
});
shadow_eval.user.push_files = (function shadow_eval$user$push_files(gh,arepo,message,files){
var afiles_to_commit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var acurrent_branch = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var anew_commit = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return shadow_eval.user.set_branch(gh,arepo,acurrent_branch,"master").then(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (){
if(cljs.core.truth_(arepo)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Repository not initialized",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(acurrent_branch)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Branch is not set",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur-branch","cur-branch",-1796497853),cljs.core.deref(acurrent_branch)], null));
}

return shadow_eval.user.get_current_commit_sha(arepo,acurrent_branch).then(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"creating-files","creating-files",-1833544858)], 0));

return shadow_eval.user.create_files(arepo,afiles_to_commit,files);
});})(afiles_to_commit,acurrent_branch,anew_commit))
).then(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"creating-tree","creating-tree",482146162)], 0));

return shadow_eval.user.create_tree(arepo,afiles_to_commit,acurrent_branch,anew_commit);
});})(afiles_to_commit,acurrent_branch,anew_commit))
).then(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"creating-commit","creating-commit",-1064694100)], 0));

return shadow_eval.user.create_commit(arepo,acurrent_branch,anew_commit,message);
});})(afiles_to_commit,acurrent_branch,anew_commit))
).then(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"updating-head","updating-head",1910710730)], 0));

return shadow_eval.user.update_head(arepo,acurrent_branch,anew_commit);
});})(afiles_to_commit,acurrent_branch,anew_commit))
).catch(((function (afiles_to_commit,acurrent_branch,anew_commit){
return (function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(afiles_to_commit,acurrent_branch,anew_commit))
);
});})(afiles_to_commit,acurrent_branch,anew_commit))
);
});
shadow_eval.user.gh_auth = (function shadow_eval$user$gh_auth(auth){
return (new GitHub(cljs.core.clj__GT_js(auth)));
});
shadow_eval.user.commit_files = (function shadow_eval$user$commit_files(gh,arepo,files){
return shadow_eval.user.push_files(gh,arepo,"test commit from web",files).then((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Files committed!"], 0));
}));
});
shadow_eval.user.send_retries = (10);
shadow_eval.user.send_timeout = ((30) * (1000));
shadow_eval.user.send_max_pool = (6);
shadow_eval.user.xhrm = (new goog.net.XhrManager(shadow_eval.user.send_retries,null,(2),shadow_eval.user.send_max_pool,shadow_eval.user.send_timeout,true));
shadow_eval.user.send_request = (function shadow_eval$user$send_request(p__12643){
var map__12644 = p__12643;
var map__12644__$1 = ((((!((map__12644 == null)))?(((((map__12644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12644):map__12644);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12644__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),"application/vnd.github.v3.raw");
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"method","method",55703592),"GET");
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"content","content",15833224),"text/html");
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/vnd.github.v3.raw"}));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12644__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12644__$1,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("msg"));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12644__$1,new cljs.core.Keyword(null,"url","url",276297046));
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12644__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
return shadow_eval.user.xhrm.send(id,url,method,null,headers,priority,callback,max_retries,response_type,with_credentials);
});
shadow_eval.user.xget = (function shadow_eval$user$xget(var_args){
var G__12659 = arguments.length;
switch (G__12659) {
case 3:
return shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$3 = (function (url,content,callback){
return shadow_eval.user.send_request(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/vnd.github.v3.raw"})], null));
});

shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$5 = (function (url,client_id,client_secret,content,callback){
return shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id),"&client_secret=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_secret)].join(''),content,callback);
});

shadow_eval.user.xget.cljs$lang$maxFixedArity = 5;

shadow_eval.user.b64_dec = (function shadow_eval$user$b64_dec(s){
var res = atob(s).split("").map((function (p1__12661_SHARP_){
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["00",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12661_SHARP_.charCodeAt((0)).toString((16)))].join('').slice((-2)))].join('');
})).join("");
try{return decodeURIComponent(res);
}catch (e12662){if((e12662 instanceof URIError)){
var e = e12662;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"b64-dec-URIError","b64-dec-URIError",1293310284),e], 0));
} else {
throw e12662;

}
}});
shadow_eval.user.get_client_id = (function shadow_eval$user$get_client_id(){
var temp__5457__auto__ = cljs.core.first(shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1("#clientid"));
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return el.value;
} else {
return null;
}
});
shadow_eval.user.get_client_secret = (function shadow_eval$user$get_client_secret(){
var temp__5457__auto__ = cljs.core.first(shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1("#clientsecret"));
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return el.value;
} else {
return null;
}
});
shadow_eval.user.geit = (function shadow_eval$user$geit(afn,u){
var client_id = shadow_eval.user.get_client_id();
var client_secret = shadow_eval.user.get_client_secret();
if(((cljs.core.seq(client_id)) && (cljs.core.seq(client_secret)))){
return shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$5(u,client_id,client_secret,null,((function (client_id,client_secret){
return (function (p1__12667_SHARP_){
var G__12669 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(p1__12667_SHARP_.target.getResponseText()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__12669) : afn.call(null,G__12669));
});})(client_id,client_secret))
);
} else {
return shadow_eval.user.xget.cljs$core$IFn$_invoke$arity$3(u,null,((function (client_id,client_secret){
return (function (p1__12668_SHARP_){
var G__12670 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(p1__12668_SHARP_.target.getResponseText()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__12670) : afn.call(null,G__12670));
});})(client_id,client_secret))
);
}
});
shadow_eval.user.get_old_branch = (function shadow_eval$user$get_old_branch(repo,my_branch,completed_callback){
return shadow_eval.user.get_current_commit_sha(repo,my_branch).then((function (){
return shadow_eval.user.get_current_tree_sha(repo,my_branch);
})).then((function (){
return shadow_eval.user.get_current_tree(repo,my_branch);
})).then((function (p1__12672_SHARP_){
var post_maps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__12672_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree-blobs","tree-blobs",-1817402539),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"tree","tree",-196312028)], null));
var blob_maps = cljs.core.filterv(((function (post_maps){
return (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blob",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m));
});})(post_maps))
,post_maps);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (post_maps,blob_maps){
return (function (m){
return shadow_eval.user.geit(((function (post_maps,blob_maps){
return (function (p__12677){
var map__12678 = p__12677;
var map__12678__$1 = ((((!((map__12678 == null)))?(((((map__12678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12678):map__12678);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"content","content",15833224));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_branch,cljs.core.update,new cljs.core.Keyword(null,"old-files","old-files",-82011168),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"content","content",15833224),shadow_eval.user.b64_dec(content))], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(m))){
return (completed_callback.cljs$core$IFn$_invoke$arity$0 ? completed_callback.cljs$core$IFn$_invoke$arity$0() : completed_callback.call(null));
} else {
return null;
}
});})(post_maps,blob_maps))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"url","url",276297046)));
});})(post_maps,blob_maps))
,cljs.core.update.cljs$core$IFn$_invoke$arity$5(blob_maps,(cljs.core.count(blob_maps) - (1)),cljs.core.assoc,new cljs.core.Keyword(null,"last","last",1105735132),true));
}));
});
shadow_eval.user.get_token = (function shadow_eval$user$get_token(){
return (new URL(window.location.href)).searchParams.get("code");
});
shadow_eval.user.master = (function (){var interval = cells.lib.interval;
var timeout = cells.lib.timeout;
var fetch = cells.lib.fetch;
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow-eval.user","master","shadow-eval.user/master",-373320374),((function (interval,timeout,fetch){
return (function (self){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"master"], null);
});})(interval,timeout,fetch))
);
})();
shadow_eval.user.current_posts = (function (){var interval = cells.lib.interval;
var timeout = cells.lib.timeout;
var fetch = cells.lib.fetch;
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow-eval.user","current-posts","shadow-eval.user/current-posts",1880359344),((function (interval,timeout,fetch){
return (function (self){
return cljs.core.PersistentHashSet.EMPTY;
});})(interval,timeout,fetch))
);
})();
shadow_eval.user.new_posts = (function (){var interval = cells.lib.interval;
var timeout = cells.lib.timeout;
var fetch = cells.lib.fetch;
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow-eval.user","new-posts","shadow-eval.user/new-posts",863179991),((function (interval,timeout,fetch){
return (function (self){
return cljs.core.PersistentHashSet.EMPTY;
});})(interval,timeout,fetch))
);
})();
shadow_eval.user.read_posts = (function shadow_eval$user$read_posts(post_maps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12681_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12681_SHARP_,new cljs.core.Keyword(null,"edn","edn",1317840885),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__12681_SHARP_)));
}),post_maps);
});
shadow_eval.user.store_posts = (function shadow_eval$user$store_posts(current_posts,post_maps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current_posts,cljs.core.into,shadow_eval.user.read_posts(post_maps));
});
shadow_eval.user.get_username = (function shadow_eval$user$get_username(){
var temp__5457__auto__ = cljs.core.first(shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1("#username"));
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return el.value;
} else {
return null;
}
});
shadow_eval.user.get_password = (function shadow_eval$user$get_password(){
var temp__5457__auto__ = cljs.core.first(shadow_eval.user.qs.cljs$core$IFn$_invoke$arity$1("#password"));
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return el.value;
} else {
return null;
}
});
shadow_eval.user.sync_repo = (function shadow_eval$user$sync_repo(){
var username = shadow_eval.user.get_username();
var password = shadow_eval.user.get_password();
var gh = shadow_eval.user.gh_auth(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null));
var _ = shadow_eval.user.gh = gh;
var repo = gh.getRepo(username,username);
shadow_eval.user.repo = repo;

cljs.core.reset_BANG_(shadow_eval.user.current_posts,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_(shadow_eval.user.new_posts,cljs.core.PersistentHashSet.EMPTY);

cljs.core.reset_BANG_(shadow_eval.user.master,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"master"], null));

return shadow_eval.user.get_old_branch(repo,shadow_eval.user.master,((function (username,password,gh,_,repo){
return (function (){
return shadow_eval.user.store_posts(shadow_eval.user.current_posts,shadow_eval.user.posts(cljs.core.deref(shadow_eval.user.master)));
});})(username,password,gh,_,repo))
);
});
shadow_eval.user.clicked = (function shadow_eval$user$clicked(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked"], 0));
});
shadow_eval.user.update_blog_post = (function shadow_eval$user$update_blog_post(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow_eval.user.new_posts,(function (s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(s,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"here","here",-1501585969),s))),shadow_eval.user.compile_blog(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),s),"posts"));
}));
});
shadow_eval.user.do_post = (function shadow_eval$user$do_post(post,source){
var temp__5457__auto__ = new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(post);
if(cljs.core.truth_(temp__5457__auto__)){
var sha = temp__5457__auto__;
shadow_eval.user.update_blog_post();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow_eval.user.new_posts,((function (sha,temp__5457__auto__){
return (function (s){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sha,temp__5457__auto__){
return (function (p1__12692_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(p1__12692_SHARP_),sha);
});})(sha,temp__5457__auto__))
,s))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(post,new cljs.core.Keyword(null,"content","content",15833224),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edn","edn",1317840885),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(source)], 0)));
});})(sha,temp__5457__auto__))
);
} else {
return null;
}
});
var the_class__7323__auto___12703 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"user/render-current-posts"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$user$render_current_posts(this$){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var temp__5455__auto__ = cljs.core.deref(shadow_eval.user.current_posts);
if(cljs.core.truth_(temp__5455__auto__)){
var cposts = temp__5455__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3",".pa3",1465128375),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (cposts,temp__5455__auto__){
return (function (p1__12694_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rcp-post","rcp-post",1612176754),p1__12694_SHARP_], 0));

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Title: ",shadow_eval.user.__GT_title(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12694_SHARP_))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Size: ",new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__12694_SHARP_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"SHA: ",new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(p1__12694_SHARP_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Edit: ",(function (){var G__12699 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__12694_SHARP_);
var G__12700 = shadow_eval.user.current_posts;
var G__12701 = p1__12694_SHARP_;
var G__12702 = shadow_eval.user.do_post;
return (shadow_eval.core.incept.cljs$core$IFn$_invoke$arity$4 ? shadow_eval.core.incept.cljs$core$IFn$_invoke$arity$4(G__12699,G__12700,G__12701,G__12702) : shadow_eval.core.incept.call(null,G__12699,G__12700,G__12701,G__12702));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});})(cposts,temp__5455__auto__))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cposts))));
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.user.render_current_postsClass = the_class__7323__auto___12703;

shadow_eval.user.render_current_posts = re_view.core.factory(the_class__7323__auto___12703);
shadow_eval.user.cposts = (function shadow_eval$user$cposts(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12715_SHARP_){
var or__3949__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12715_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(p1__12715_SHARP_);
}
}),cljs.core.deref(shadow_eval.user.current_posts));
});
shadow_eval.user.nposts = (function shadow_eval$user$nposts(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12716_SHARP_){
var or__3949__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12716_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(p1__12716_SHARP_);
}
}),cljs.core.deref(shadow_eval.user.new_posts));
});
shadow_eval.user.oposts = (function shadow_eval$user$oposts(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12717_SHARP_){
var G__12719 = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__12717_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(p1__12717_SHARP_);
}
})();
var fexpr__12718 = cljs.core.set(shadow_eval.user.nposts());
return (fexpr__12718.cljs$core$IFn$_invoke$arity$1 ? fexpr__12718.cljs$core$IFn$_invoke$arity$1(G__12719) : fexpr__12718.call(null,G__12719));
}),new cljs.core.Keyword(null,"old-files","old-files",-82011168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow_eval.user.master))));
});
shadow_eval.user.cleaned_posts = (function shadow_eval$user$cleaned_posts(){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"old-files","old-files",-82011168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow_eval.user.master))),shadow_eval.user.oposts());
});
shadow_eval.user.do_commit = (function shadow_eval$user$do_commit(){
shadow_eval.user.update_blog_post();

return shadow_eval.user.commit_files(shadow_eval.user.gh,shadow_eval.user.repo,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12720_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(p1__12720_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12720_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"here","here",-1501585969).cljs$core$IFn$_invoke$arity$1(p1__12720_SHARP_));
} else {
return p1__12720_SHARP_;
}
}),cljs.core.deref(shadow_eval.user.new_posts))),shadow_eval.user.cleaned_posts()));
});

//# sourceMappingURL=shadow_eval.user.js.map
