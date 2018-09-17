goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {thi.ng.geom.core.PNormal}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__36618 = self__.buf;
var G__36619 = (G__36618[(0)]);
var G__36620 = (G__36618[(1)]);
(b[(0)] = ((G__36619 * c) - (G__36620 * s)));

(b[(1)] = ((G__36619 * s) + (G__36620 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)])),"]"].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36621 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36622 = v.buf;
return (((G__36621[(0)]) * (G__36622[(0)])) + ((G__36621[(1)]) * (G__36622[(1)])));
} else {
return (((G__36621[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__36621[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__36626 = self__.buf;
var G__36627 = (G__36626[(0)]);
var G__36628 = (G__36626[(1)]);
var l = (function (){var G__36632 = ((G__36627 * G__36627) + (G__36628 * G__36628));
return Math.sqrt(G__36632);
})();
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__36627 / l));

(b[(1)] = (G__36628 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__36633 = self__.buf;
var G__36634 = (G__36633[(0)]);
var G__36635 = (G__36633[(1)]);
var l = (function (){var G__36636 = ((G__36634 * G__36634) + (G__36635 * G__36635));
return Math.sqrt(G__36636);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__36634 * l__$1));

(b[(1)] = (G__36635 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__36645 = self__.buf;
var G__36647 = (G__36645[(0)]);
var G__36648 = (G__36645[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36646 = v.buf;
var G__36649 = (G__36646[(0)]);
var G__36650 = (G__36646[(1)]);
var d = (((G__36647 * G__36649) + (G__36648 * G__36650)) + (2));
(b[(0)] = ((G__36649 * d) - G__36647));

(b[(1)] = ((G__36650 * d) - G__36648));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__36649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__36650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__36647 * G__36649) + (G__36648 * G__36650)) + (2));
(b[(0)] = ((G__36649 * d) - G__36647));

(b[(1)] = ((G__36650 * d) - G__36648));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36655 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36656 = v.buf;
return (((G__36655[(0)]) * (G__36656[(1)])) - ((G__36655[(1)]) * (G__36656[(0)])));
} else {
return (((G__36655[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__36655[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36657_37186 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36658_37187 = v.buf;
(self__.buf[(0)] = ((G__36657_37186[(0)]) - (G__36658_37187[(0)])));

(self__.buf[(1)] = ((G__36657_37186[(1)]) - (G__36658_37187[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__36657_37186[(0)]) - v));

(self__.buf[(1)] = ((G__36657_37186[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__36657_37186[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__36657_37186[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36675_37188 = typeof v1 === 'number';
var G__36676_37189 = typeof v2 === 'number';
if(((G__36675_37188)?G__36676_37189:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__36677_37190 = ((!(G__36675_37188))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36678_37191 = ((!(G__36676_37189))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36669_37192 = (cljs.core.truth_(G__36677_37190)?v1.buf:null);
var G__36670_37193 = (cljs.core.truth_(G__36678_37191)?v2.buf:null);
var G__36671_37194 = (cljs.core.truth_(G__36677_37190)?(G__36669_37192[(0)]):((G__36675_37188)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36672_37195 = (cljs.core.truth_(G__36677_37190)?(G__36669_37192[(1)]):((G__36675_37188)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36673_37196 = (cljs.core.truth_(G__36678_37191)?(G__36670_37193[(0)]):((G__36676_37189)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36674_37197 = (cljs.core.truth_(G__36678_37191)?(G__36670_37193[(1)]):((G__36676_37189)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__36671_37194) - G__36673_37196));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__36672_37195) - G__36674_37197));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36683_37209 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36684_37210 = v.buf;
(self__.buf[(0)] = ((G__36683_37209[(0)]) * (G__36684_37210[(0)])));

(self__.buf[(1)] = ((G__36683_37209[(1)]) * (G__36684_37210[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__36683_37209[(0)]) * v));

(self__.buf[(1)] = ((G__36683_37209[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__36683_37209[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__36683_37209[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36696_37212 = typeof v1 === 'number';
var G__36697_37213 = typeof v2 === 'number';
if(((G__36696_37212)?G__36697_37213:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__36698_37214 = ((!(G__36696_37212))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36699_37215 = ((!(G__36697_37213))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36690_37216 = (cljs.core.truth_(G__36698_37214)?v1.buf:null);
var G__36691_37217 = (cljs.core.truth_(G__36699_37215)?v2.buf:null);
var G__36692_37218 = (cljs.core.truth_(G__36698_37214)?(G__36690_37216[(0)]):((G__36696_37212)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36693_37219 = (cljs.core.truth_(G__36698_37214)?(G__36690_37216[(1)]):((G__36696_37212)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36694_37220 = (cljs.core.truth_(G__36699_37215)?(G__36691_37217[(0)]):((G__36697_37213)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36695_37221 = (cljs.core.truth_(G__36699_37215)?(G__36691_37217[(1)]):((G__36697_37213)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__36692_37218) * G__36694_37220));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__36693_37219) * G__36695_37221));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__36711_37222 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36712_37223 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36713_37224 = ((!(G__36711_37222))?typeof a === 'number':null);
var G__36714_37225 = ((!(G__36712_37223))?typeof b === 'number':null);
var G__36702_37226 = self__.buf;
var G__36703_37227 = ((G__36711_37222)?a.buf:null);
var G__36704_37228 = ((G__36712_37223)?b.buf:null);
var G__36705_37229 = (G__36702_37226[(0)]);
var G__36706_37230 = (G__36702_37226[(1)]);
var G__36707_37231 = ((G__36711_37222)?(G__36703_37227[(0)]):(cljs.core.truth_(G__36713_37224)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__36708_37232 = ((G__36711_37222)?(G__36703_37227[(1)]):(cljs.core.truth_(G__36713_37224)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__36709_37233 = ((G__36712_37223)?(G__36704_37228[(0)]):(cljs.core.truth_(G__36714_37225)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__36710_37234 = ((G__36712_37223)?(G__36704_37228[(1)]):(cljs.core.truth_(G__36714_37225)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__36705_37229 - G__36707_37231) * G__36709_37233));

(self__.buf[(1)] = ((G__36706_37230 - G__36708_37232) * G__36710_37234));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__36728_37235 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36729_37236 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36730_37237 = ((!(G__36728_37235))?typeof a === 'number':null);
var G__36731_37238 = ((!(G__36729_37236))?typeof b === 'number':null);
var G__36719_37239 = self__.buf;
var G__36720_37240 = ((G__36728_37235)?a.buf:null);
var G__36721_37241 = ((G__36729_37236)?b.buf:null);
var G__36722_37242 = (G__36719_37239[(0)]);
var G__36723_37243 = (G__36719_37239[(1)]);
var G__36724_37244 = ((G__36728_37235)?(G__36720_37240[(0)]):(cljs.core.truth_(G__36730_37237)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__36725_37245 = ((G__36728_37235)?(G__36720_37240[(1)]):(cljs.core.truth_(G__36730_37237)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__36726_37246 = ((G__36729_37236)?(G__36721_37241[(0)]):(cljs.core.truth_(G__36731_37238)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__36727_37247 = ((G__36729_37236)?(G__36721_37241[(1)]):(cljs.core.truth_(G__36731_37238)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__36722_37242 * G__36724_37244) - G__36726_37246));

(self__.buf[(1)] = ((G__36723_37243 * G__36725_37245) - G__36727_37247));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__36732 = (self__.buf[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__36732) : thi.ng.math.core.abs.call(null,G__36732));
})());

(self__.buf[(1)] = (function (){var G__36733 = (self__.buf[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__36733) : thi.ng.math.core.abs.call(null,G__36733));
})());

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__36747_37257 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36748_37258 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36749_37259 = ((!(G__36747_37257))?typeof a === 'number':null);
var G__36750_37260 = ((!(G__36748_37258))?typeof b === 'number':null);
var G__36738_37261 = self__.buf;
var G__36739_37262 = ((G__36747_37257)?a.buf:null);
var G__36740_37263 = ((G__36748_37258)?b.buf:null);
var G__36741_37264 = (G__36738_37261[(0)]);
var G__36742_37265 = (G__36738_37261[(1)]);
var G__36743_37266 = ((G__36747_37257)?(G__36739_37262[(0)]):(cljs.core.truth_(G__36749_37259)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__36744_37267 = ((G__36747_37257)?(G__36739_37262[(1)]):(cljs.core.truth_(G__36749_37259)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__36745_37268 = ((G__36748_37258)?(G__36740_37263[(0)]):(cljs.core.truth_(G__36750_37260)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__36746_37269 = ((G__36748_37258)?(G__36740_37263[(1)]):(cljs.core.truth_(G__36750_37260)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__36741_37264 * G__36743_37266) + G__36745_37268));

(self__.buf[(1)] = ((G__36742_37265 * G__36744_37267) + G__36746_37269));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36751_37270 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36752_37271 = v.buf;
(self__.buf[(0)] = ((G__36751_37270[(0)]) / (G__36752_37271[(0)])));

(self__.buf[(1)] = ((G__36751_37270[(1)]) / (G__36752_37271[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__36751_37270[(0)]) / v));

(self__.buf[(1)] = ((G__36751_37270[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__36751_37270[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__36751_37270[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36764_37272 = typeof v1 === 'number';
var G__36765_37273 = typeof v2 === 'number';
if(((G__36764_37272)?G__36765_37273:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__36766_37276 = ((!(G__36764_37272))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36767_37277 = ((!(G__36765_37273))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36758_37278 = (cljs.core.truth_(G__36766_37276)?v1.buf:null);
var G__36759_37279 = (cljs.core.truth_(G__36767_37277)?v2.buf:null);
var G__36760_37280 = (cljs.core.truth_(G__36766_37276)?(G__36758_37278[(0)]):((G__36764_37272)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36761_37281 = (cljs.core.truth_(G__36766_37276)?(G__36758_37278[(1)]):((G__36764_37272)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36762_37282 = (cljs.core.truth_(G__36767_37277)?(G__36759_37279[(0)]):((G__36765_37273)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36763_37283 = (cljs.core.truth_(G__36767_37277)?(G__36759_37279[(1)]):((G__36765_37273)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__36760_37280) / G__36762_37282));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__36761_37281) / G__36763_37283));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36773_37290 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36774_37291 = v.buf;
(self__.buf[(0)] = ((G__36773_37290[(0)]) + (G__36774_37291[(0)])));

(self__.buf[(1)] = ((G__36773_37290[(1)]) + (G__36774_37291[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__36773_37290[(0)]) + v));

(self__.buf[(1)] = ((G__36773_37290[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__36773_37290[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__36773_37290[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36782_37298 = typeof v1 === 'number';
var G__36783_37299 = typeof v2 === 'number';
if(((G__36782_37298)?G__36783_37299:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__36784_37303 = ((!(G__36782_37298))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36785_37304 = ((!(G__36783_37299))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36776_37305 = (cljs.core.truth_(G__36784_37303)?v1.buf:null);
var G__36777_37306 = (cljs.core.truth_(G__36785_37304)?v2.buf:null);
var G__36778_37307 = (cljs.core.truth_(G__36784_37303)?(G__36776_37305[(0)]):((G__36782_37298)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36779_37308 = (cljs.core.truth_(G__36784_37303)?(G__36776_37305[(1)]):((G__36782_37298)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36780_37309 = (cljs.core.truth_(G__36785_37304)?(G__36777_37306[(0)]):((G__36783_37299)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36781_37310 = (cljs.core.truth_(G__36785_37304)?(G__36777_37306[(1)]):((G__36783_37299)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__36778_37307) + G__36780_37309));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__36779_37308) + G__36781_37310));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__36795_37321 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36796_37322 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36797_37323 = ((!(G__36795_37321))?typeof a === 'number':null);
var G__36798_37324 = ((!(G__36796_37322))?typeof b === 'number':null);
var G__36786_37325 = self__.buf;
var G__36787_37326 = ((G__36795_37321)?a.buf:null);
var G__36788_37327 = ((G__36796_37322)?b.buf:null);
var G__36789_37328 = (G__36786_37325[(0)]);
var G__36790_37329 = (G__36786_37325[(1)]);
var G__36791_37330 = ((G__36795_37321)?(G__36787_37326[(0)]):(cljs.core.truth_(G__36797_37323)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__36792_37331 = ((G__36795_37321)?(G__36787_37326[(1)]):(cljs.core.truth_(G__36797_37323)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__36793_37332 = ((G__36796_37322)?(G__36788_37327[(0)]):(cljs.core.truth_(G__36798_37324)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__36794_37333 = ((G__36796_37322)?(G__36788_37327[(1)]):(cljs.core.truth_(G__36798_37324)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__36789_37328 + G__36791_37330) * G__36793_37332));

(self__.buf[(1)] = ((G__36790_37329 + G__36792_37331) * G__36794_37333));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__36800 = (function (){var G__36801 = new cljs.core.Keyword(null,"yx","yx",1696579752);
return (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__36801) : thi.ng.geom.core.vector.swizzle2_fns.call(null,G__36801));
})();
return (fexpr__36800.cljs$core$IFn$_invoke$arity$1 ? fexpr__36800.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__36800.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = self__._hash;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((2) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__36802 = (self__.buf[(1)]);
var G__36803 = (self__.buf[(0)]);
return Math.atan2(G__36802,G__36803);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36807 = ___$1.thi$ng$geom$core$PDistance$dist_squared$arity$2(null,v);
return Math.sqrt(G__36807);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__36808 = self__.buf;
var G__36810 = (G__36808[(0)]);
var G__36811 = (G__36808[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36809 = v.buf;
var G__36812 = (G__36809[(0)]);
var G__36813 = (G__36809[(1)]);
var dx = (G__36810 - G__36812);
var dy = (G__36811 - G__36813);
return ((dx * dx) + (dy * dy));
} else {
var G__36812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__36813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__36810 - G__36812);
var dy = (G__36811 - G__36813);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__36815 = (self__.buf[(0)]);
var G__36816 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36815,G__36816) : f.call(null,G__36815,G__36816));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__36817 = start;
var G__36818 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36817,G__36818) : f.call(null,G__36817,G__36818));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__36819 = acc;
var G__36820 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36819,G__36820) : f.call(null,G__36819,G__36820));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PMathOps$_$arity$1(null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__36834_37353 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36835_37354 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36836_37355 = ((!(G__36834_37353))?typeof a === 'number':null);
var G__36837_37356 = ((!(G__36835_37354))?typeof b === 'number':null);
var G__36825_37357 = self__.buf;
var G__36826_37358 = ((G__36834_37353)?a.buf:null);
var G__36827_37359 = ((G__36835_37354)?b.buf:null);
var G__36828_37360 = (G__36825_37357[(0)]);
var G__36829_37361 = (G__36825_37357[(1)]);
var G__36830_37362 = ((G__36834_37353)?(G__36826_37358[(0)]):(cljs.core.truth_(G__36836_37355)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__36831_37363 = ((G__36834_37353)?(G__36826_37358[(1)]):(cljs.core.truth_(G__36836_37355)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__36832_37364 = ((G__36835_37354)?(G__36827_37359[(0)]):(cljs.core.truth_(G__36837_37356)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__36833_37365 = ((G__36835_37354)?(G__36827_37359[(1)]):(cljs.core.truth_(G__36837_37356)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__36445__auto__[(0)] = ((G__36828_37360 * G__36830_37362) - G__36832_37364));

(dest__36445__auto__[(1)] = ((G__36829_37361 * G__36831_37363) - G__36833_37365));

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__36841_37366 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36842_37369 = v.buf;
(dest__36428__auto__[(0)] = ((G__36841_37366[(0)]) * (G__36842_37369[(0)])));

(dest__36428__auto__[(1)] = ((G__36841_37366[(1)]) * (G__36842_37369[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__36841_37366[(0)]) * v));

(dest__36428__auto__[(1)] = ((G__36841_37366[(1)]) * v));
} else {
(dest__36428__auto__[(0)] = ((G__36841_37366[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__36841_37366[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36850 = self__.buf;
var G__36853 = (new Float32Array((2)));
var G__36854 = (G__36850[(0)]);
var G__36855 = (G__36850[(1)]);
var G__36860 = typeof v1 === 'number';
var G__36861 = typeof v2 === 'number';
if(((G__36860)?G__36861:false)){
(G__36853[(0)] = (G__36854 * v1));

(G__36853[(1)] = (G__36855 * v2));
} else {
var G__36862_37370 = ((!(G__36860))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36863_37371 = ((!(G__36861))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36851_37372 = (cljs.core.truth_(G__36862_37370)?v1.buf:null);
var G__36852_37373 = (cljs.core.truth_(G__36863_37371)?v2.buf:null);
var G__36856_37374 = (cljs.core.truth_(G__36862_37370)?(G__36851_37372[(0)]):((G__36860)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__36857_37375 = (cljs.core.truth_(G__36862_37370)?(G__36851_37372[(1)]):((G__36860)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__36858_37376 = (cljs.core.truth_(G__36863_37371)?(G__36852_37373[(0)]):((G__36861)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__36859_37377 = (cljs.core.truth_(G__36863_37371)?(G__36852_37373[(1)]):((G__36861)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__36853[(0)] = ((G__36854 * G__36856_37374) * G__36858_37376));

(G__36853[(1)] = ((G__36855 * G__36857_37375) * G__36859_37377));
}

return (new thi.ng.geom.core.vector.Vec2(G__36853,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36363__auto__ = (new Float32Array((2)));
var G__36875_37378 = self__.buf;
(dest__36363__auto__[(0)] = (- (G__36875_37378[(0)])));

(dest__36363__auto__[(1)] = (- (G__36875_37378[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__36363__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__36879_37379 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36880_37380 = v.buf;
(dest__36428__auto__[(0)] = ((G__36879_37379[(0)]) - (G__36880_37380[(0)])));

(dest__36428__auto__[(1)] = ((G__36879_37379[(1)]) - (G__36880_37380[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__36879_37379[(0)]) - v));

(dest__36428__auto__[(1)] = ((G__36879_37379[(1)]) - v));
} else {
(dest__36428__auto__[(0)] = ((G__36879_37379[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__36879_37379[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36888 = self__.buf;
var G__36891 = (new Float32Array((2)));
var G__36892 = (G__36888[(0)]);
var G__36893 = (G__36888[(1)]);
var G__36898 = typeof v1 === 'number';
var G__36899 = typeof v2 === 'number';
if(((G__36898)?G__36899:false)){
(G__36891[(0)] = (G__36892 - v1));

(G__36891[(1)] = (G__36893 - v2));
} else {
var G__36900_37381 = ((!(G__36898))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36901_37382 = ((!(G__36899))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36889_37383 = (cljs.core.truth_(G__36900_37381)?v1.buf:null);
var G__36890_37384 = (cljs.core.truth_(G__36901_37382)?v2.buf:null);
var G__36894_37385 = (cljs.core.truth_(G__36900_37381)?(G__36889_37383[(0)]):((G__36898)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36895_37386 = (cljs.core.truth_(G__36900_37381)?(G__36889_37383[(1)]):((G__36898)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36896_37387 = (cljs.core.truth_(G__36901_37382)?(G__36890_37384[(0)]):((G__36899)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36897_37388 = (cljs.core.truth_(G__36901_37382)?(G__36890_37384[(1)]):((G__36899)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__36891[(0)] = ((G__36892 - G__36894_37385) - G__36896_37387));

(G__36891[(1)] = ((G__36893 - G__36895_37386) - G__36897_37388));
}

return (new thi.ng.geom.core.vector.Vec2(G__36891,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__36911_37389 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36912_37390 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36913_37391 = ((!(G__36911_37389))?typeof a === 'number':null);
var G__36914_37392 = ((!(G__36912_37390))?typeof b === 'number':null);
var G__36902_37393 = self__.buf;
var G__36903_37394 = ((G__36911_37389)?a.buf:null);
var G__36904_37395 = ((G__36912_37390)?b.buf:null);
var G__36905_37396 = (G__36902_37393[(0)]);
var G__36906_37397 = (G__36902_37393[(1)]);
var G__36907_37398 = ((G__36911_37389)?(G__36903_37394[(0)]):(cljs.core.truth_(G__36913_37391)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__36908_37399 = ((G__36911_37389)?(G__36903_37394[(1)]):(cljs.core.truth_(G__36913_37391)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__36909_37400 = ((G__36912_37390)?(G__36904_37395[(0)]):(cljs.core.truth_(G__36914_37392)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__36910_37401 = ((G__36912_37390)?(G__36904_37395[(1)]):(cljs.core.truth_(G__36914_37392)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__36445__auto__[(0)] = ((G__36905_37396 * G__36907_37398) + G__36909_37400));

(dest__36445__auto__[(1)] = ((G__36906_37397 * G__36908_37399) + G__36910_37401));

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__36924_37402 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36925_37403 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36926_37404 = ((!(G__36924_37402))?typeof a === 'number':null);
var G__36927_37405 = ((!(G__36925_37403))?typeof b === 'number':null);
var G__36915_37406 = self__.buf;
var G__36916_37407 = ((G__36924_37402)?a.buf:null);
var G__36917_37408 = ((G__36925_37403)?b.buf:null);
var G__36918_37409 = (G__36915_37406[(0)]);
var G__36919_37410 = (G__36915_37406[(1)]);
var G__36920_37411 = ((G__36924_37402)?(G__36916_37407[(0)]):(cljs.core.truth_(G__36926_37404)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__36921_37412 = ((G__36924_37402)?(G__36916_37407[(1)]):(cljs.core.truth_(G__36926_37404)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__36922_37413 = ((G__36925_37403)?(G__36917_37408[(0)]):(cljs.core.truth_(G__36927_37405)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__36923_37414 = ((G__36925_37403)?(G__36917_37408[(1)]):(cljs.core.truth_(G__36927_37405)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__36445__auto__[(0)] = ((G__36918_37409 + G__36920_37411) * G__36922_37413));

(dest__36445__auto__[(1)] = ((G__36919_37410 + G__36921_37412) * G__36923_37414));

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36363__auto__ = (new Float32Array((2)));
var G__36935_37423 = self__.buf;
(dest__36363__auto__[(0)] = ((1) / (G__36935_37423[(0)])));

(dest__36363__auto__[(1)] = ((1) / (G__36935_37423[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__36363__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__36936_37428 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36937_37430 = v.buf;
(dest__36428__auto__[(0)] = ((G__36936_37428[(0)]) / (G__36937_37430[(0)])));

(dest__36428__auto__[(1)] = ((G__36936_37428[(1)]) / (G__36937_37430[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__36936_37428[(0)]) / v));

(dest__36428__auto__[(1)] = ((G__36936_37428[(1)]) / v));
} else {
(dest__36428__auto__[(0)] = ((G__36936_37428[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__36936_37428[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36938 = self__.buf;
var G__36941 = (new Float32Array((2)));
var G__36942 = (G__36938[(0)]);
var G__36943 = (G__36938[(1)]);
var G__36948 = typeof v1 === 'number';
var G__36949 = typeof v2 === 'number';
if(((G__36948)?G__36949:false)){
(G__36941[(0)] = (G__36942 / v1));

(G__36941[(1)] = (G__36943 / v2));
} else {
var G__36950_37447 = ((!(G__36948))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36951_37448 = ((!(G__36949))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36939_37449 = (cljs.core.truth_(G__36950_37447)?v1.buf:null);
var G__36940_37450 = (cljs.core.truth_(G__36951_37448)?v2.buf:null);
var G__36944_37451 = (cljs.core.truth_(G__36950_37447)?(G__36939_37449[(0)]):((G__36948)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36945_37452 = (cljs.core.truth_(G__36950_37447)?(G__36939_37449[(1)]):((G__36948)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36946_37453 = (cljs.core.truth_(G__36951_37448)?(G__36940_37450[(0)]):((G__36949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36947_37454 = (cljs.core.truth_(G__36951_37448)?(G__36940_37450[(1)]):((G__36949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__36941[(0)] = ((G__36942 / G__36944_37451) / G__36946_37453));

(G__36941[(1)] = ((G__36943 / G__36945_37452) / G__36947_37454));
}

return (new thi.ng.geom.core.vector.Vec2(G__36941,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__36952_37459 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36953_37460 = v.buf;
(dest__36428__auto__[(0)] = ((G__36952_37459[(0)]) + (G__36953_37460[(0)])));

(dest__36428__auto__[(1)] = ((G__36952_37459[(1)]) + (G__36953_37460[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__36952_37459[(0)]) + v));

(dest__36428__auto__[(1)] = ((G__36952_37459[(1)]) + v));
} else {
(dest__36428__auto__[(0)] = ((G__36952_37459[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__36952_37459[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__36955 = self__.buf;
var G__36958 = (new Float32Array((2)));
var G__36959 = (G__36955[(0)]);
var G__36960 = (G__36955[(1)]);
var G__36965 = typeof v1 === 'number';
var G__36966 = typeof v2 === 'number';
if(((G__36965)?G__36966:false)){
(G__36958[(0)] = (G__36959 + v1));

(G__36958[(1)] = (G__36960 + v2));
} else {
var G__36967_37471 = ((!(G__36965))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36968_37472 = ((!(G__36966))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__36956_37473 = (cljs.core.truth_(G__36967_37471)?v1.buf:null);
var G__36957_37474 = (cljs.core.truth_(G__36968_37472)?v2.buf:null);
var G__36961_37475 = (cljs.core.truth_(G__36967_37471)?(G__36956_37473[(0)]):((G__36965)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__36962_37476 = (cljs.core.truth_(G__36967_37471)?(G__36956_37473[(1)]):((G__36965)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__36963_37477 = (cljs.core.truth_(G__36968_37472)?(G__36957_37474[(0)]):((G__36966)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__36964_37478 = (cljs.core.truth_(G__36968_37472)?(G__36957_37474[(1)]):((G__36966)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__36958[(0)] = ((G__36959 + G__36961_37475) + G__36963_37477));

(G__36958[(1)] = ((G__36960 + G__36962_37476) + G__36964_37478));
}

return (new thi.ng.geom.core.vector.Vec2(G__36958,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36363__auto__ = (new Float32Array((2)));
var G__36970_37483 = self__.buf;
(dest__36363__auto__[(0)] = (function (){var G__36971 = (G__36970_37483[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__36971) : thi.ng.math.core.abs.call(null,G__36971));
})());

(dest__36363__auto__[(1)] = (function (){var G__36972 = (G__36970_37483[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__36972) : thi.ng.math.core.abs.call(null,G__36972));
})());

return (new thi.ng.geom.core.vector.Vec2(dest__36363__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__36982_37484 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__36983_37485 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__36984_37486 = ((!(G__36982_37484))?typeof a === 'number':null);
var G__36985_37487 = ((!(G__36983_37485))?typeof b === 'number':null);
var G__36973_37488 = self__.buf;
var G__36974_37489 = ((G__36982_37484)?a.buf:null);
var G__36975_37490 = ((G__36983_37485)?b.buf:null);
var G__36976_37491 = (G__36973_37488[(0)]);
var G__36977_37492 = (G__36973_37488[(1)]);
var G__36978_37493 = ((G__36982_37484)?(G__36974_37489[(0)]):(cljs.core.truth_(G__36984_37486)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__36979_37494 = ((G__36982_37484)?(G__36974_37489[(1)]):(cljs.core.truth_(G__36984_37486)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__36980_37495 = ((G__36983_37485)?(G__36975_37490[(0)]):(cljs.core.truth_(G__36985_37487)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__36981_37496 = ((G__36983_37485)?(G__36975_37490[(1)]):(cljs.core.truth_(G__36985_37487)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__36445__auto__[(0)] = ((G__36976_37491 - G__36978_37493) * G__36980_37495));

(dest__36445__auto__[(1)] = ((G__36977_37492 - G__36979_37494) * G__36981_37496));

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__36996_37522 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__36997_37523 = v.buf;
(dest__36428__auto__[(0)] = ((G__36996_37522[(0)]) + (G__36997_37523[(0)])));

(dest__36428__auto__[(1)] = ((G__36996_37522[(1)]) + (G__36997_37523[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__36996_37522[(0)]) + v));

(dest__36428__auto__[(1)] = ((G__36996_37522[(1)]) + v));
} else {
(dest__36428__auto__[(0)] = ((G__36996_37522[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__36996_37522[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37003 = self__.buf;
var G__37006 = (new Float32Array((2)));
var G__37007 = (G__37003[(0)]);
var G__37008 = (G__37003[(1)]);
var G__37013 = typeof v1 === 'number';
var G__37014 = typeof v2 === 'number';
if(((G__37013)?G__37014:false)){
(G__37006[(0)] = (G__37007 + v1));

(G__37006[(1)] = (G__37008 + v2));
} else {
var G__37015_37530 = ((!(G__37013))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__37016_37531 = ((!(G__37014))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__37004_37532 = (cljs.core.truth_(G__37015_37530)?v1.buf:null);
var G__37005_37533 = (cljs.core.truth_(G__37016_37531)?v2.buf:null);
var G__37009_37534 = (cljs.core.truth_(G__37015_37530)?(G__37004_37532[(0)]):((G__37013)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__37010_37535 = (cljs.core.truth_(G__37015_37530)?(G__37004_37532[(1)]):((G__37013)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__37011_37536 = (cljs.core.truth_(G__37016_37531)?(G__37005_37533[(0)]):((G__37014)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37012_37537 = (cljs.core.truth_(G__37016_37531)?(G__37005_37533[(1)]):((G__37014)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__37006[(0)] = ((G__37007 + G__37009_37534) + G__37011_37536));

(G__37006[(1)] = ((G__37008 + G__37010_37535) + G__37012_37537));
}

return (new thi.ng.geom.core.vector.Vec2(G__37006,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k < (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k)))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k === (0))) || ((k === (1))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2((function (){var G__37023 = self__.buf;
var G__37024 = (new Float32Array(self__.buf));
var G__37025 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__37026 = k;
var G__37027 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__37023,G__37024,G__37025,G__37026,G__37027) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__37023,G__37024,G__37025,G__37026,G__37027));
})(),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__37028_37554 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__37029_37555 = v.buf;
(dest__36428__auto__[(0)] = ((G__37028_37554[(0)]) * (G__37029_37555[(0)])));

(dest__36428__auto__[(1)] = ((G__37028_37554[(1)]) * (G__37029_37555[(1)])));
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = ((G__37028_37554[(0)]) * v));

(dest__36428__auto__[(1)] = ((G__37028_37554[(1)]) * v));
} else {
(dest__36428__auto__[(0)] = ((G__37028_37554[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36428__auto__[(1)] = ((G__37028_37554[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37030 = self__.buf;
var G__37033 = (new Float32Array((2)));
var G__37034 = (G__37030[(0)]);
var G__37035 = (G__37030[(1)]);
var G__37040 = typeof v1 === 'number';
var G__37041 = typeof v2 === 'number';
if(((G__37040)?G__37041:false)){
(G__37033[(0)] = (G__37034 * v1));

(G__37033[(1)] = (G__37035 * v2));
} else {
var G__37042_37567 = ((!(G__37040))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__37043_37568 = ((!(G__37041))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__37031_37569 = (cljs.core.truth_(G__37042_37567)?v1.buf:null);
var G__37032_37570 = (cljs.core.truth_(G__37043_37568)?v2.buf:null);
var G__37036_37571 = (cljs.core.truth_(G__37042_37567)?(G__37031_37569[(0)]):((G__37040)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__37037_37572 = (cljs.core.truth_(G__37042_37567)?(G__37031_37569[(1)]):((G__37040)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__37038_37573 = (cljs.core.truth_(G__37043_37568)?(G__37032_37570[(0)]):((G__37041)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__37039_37574 = (cljs.core.truth_(G__37043_37568)?(G__37032_37570[(1)]):((G__37041)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__37033[(0)] = ((G__37034 * G__37036_37571) * G__37038_37573));

(G__37033[(1)] = ((G__37035 * G__37037_37572) * G__37039_37574));
}

return (new thi.ng.geom.core.vector.Vec2(G__37033,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__37047 = (self__.buf[(0)]);
var G__37048 = (self__.buf[(1)]);
var G__37049 = x;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__37047,G__37048,G__37049) : thi.ng.geom.core.vector.vec3.call(null,G__37047,G__37048,G__37049));
})(),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__37575 = null;
var G__37575__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
var G__37575__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__37575 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__37575__2.call(this,self__,k);
case 3:
return G__37575__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37575.cljs$core$IFn$_invoke$arity$2 = G__37575__2;
G__37575.cljs$core$IFn$_invoke$arity$3 = G__37575__3;
return G__37575;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args36616){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args36616)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__37062_37576 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__37063_37577 = v.buf;
(dest__36428__auto__[(0)] = (function (){var a__34570__auto__ = (G__37062_37576[(0)]);
var b__34571__auto__ = (G__37063_37577[(0)]);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34570__auto__ = (G__37062_37576[(1)]);
var b__34571__auto__ = (G__37063_37577[(1)]);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = (function (){var a__34570__auto__ = (G__37062_37576[(0)]);
var b__34571__auto__ = v;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34570__auto__ = (G__37062_37576[(1)]);
var b__34571__auto__ = v;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
} else {
(dest__36428__auto__[(0)] = (function (){var a__34570__auto__ = (G__37062_37576[(0)]);
var b__34571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34570__auto__ = (G__37062_37576[(1)]);
var b__34571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__37080_37580 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__37081_37581 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__37082_37582 = ((!(G__37080_37580))?typeof v === 'number':null);
var G__37083_37583 = ((!(G__37081_37581))?typeof v2 === 'number':null);
var G__37071_37584 = self__.buf;
var G__37072_37585 = ((G__37080_37580)?v.buf:null);
var G__37073_37586 = ((G__37081_37581)?v2.buf:null);
var G__37074_37587 = (G__37071_37584[(0)]);
var G__37075_37588 = (G__37071_37584[(1)]);
var G__37076_37589 = ((G__37080_37580)?(G__37072_37585[(0)]):(cljs.core.truth_(G__37082_37582)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__37077_37590 = ((G__37080_37580)?(G__37072_37585[(1)]):(cljs.core.truth_(G__37082_37582)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__37078_37591 = ((G__37081_37581)?(G__37073_37586[(0)]):(cljs.core.truth_(G__37083_37583)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37079_37592 = ((G__37081_37581)?(G__37073_37586[(1)]):(cljs.core.truth_(G__37083_37583)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__36445__auto__[(0)] = (function (){var a__34570__auto__ = (function (){var a__34570__auto__ = G__37074_37587;
var b__34571__auto__ = G__37076_37589;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})();
var b__34571__auto__ = G__37078_37591;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36445__auto__[(1)] = (function (){var a__34570__auto__ = (function (){var a__34570__auto__ = G__37075_37588;
var b__34571__auto__ = G__37077_37590;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})();
var b__34571__auto__ = G__37079_37592;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36428__auto__ = (new Float32Array((2)));
var G__37084_37594 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__37085_37595 = v.buf;
(dest__36428__auto__[(0)] = (function (){var a__34580__auto__ = (G__37084_37594[(0)]);
var b__34581__auto__ = (G__37085_37595[(0)]);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34580__auto__ = (G__37084_37594[(1)]);
var b__34581__auto__ = (G__37085_37595[(1)]);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__36428__auto__[(0)] = (function (){var a__34580__auto__ = (G__37084_37594[(0)]);
var b__34581__auto__ = v;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34580__auto__ = (G__37084_37594[(1)]);
var b__34581__auto__ = v;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
} else {
(dest__36428__auto__[(0)] = (function (){var a__34580__auto__ = (G__37084_37594[(0)]);
var b__34581__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36428__auto__[(1)] = (function (){var a__34580__auto__ = (G__37084_37594[(1)]);
var b__34581__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__36428__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__36445__auto__ = (new Float32Array((2)));
var G__37095_37596 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__37096_37597 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__37097_37598 = ((!(G__37095_37596))?typeof v === 'number':null);
var G__37098_37599 = ((!(G__37096_37597))?typeof v2 === 'number':null);
var G__37086_37600 = self__.buf;
var G__37087_37601 = ((G__37095_37596)?v.buf:null);
var G__37088_37602 = ((G__37096_37597)?v2.buf:null);
var G__37089_37603 = (G__37086_37600[(0)]);
var G__37090_37604 = (G__37086_37600[(1)]);
var G__37091_37605 = ((G__37095_37596)?(G__37087_37601[(0)]):(cljs.core.truth_(G__37097_37598)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__37092_37606 = ((G__37095_37596)?(G__37087_37601[(1)]):(cljs.core.truth_(G__37097_37598)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__37093_37607 = ((G__37096_37597)?(G__37088_37602[(0)]):(cljs.core.truth_(G__37098_37599)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37094_37608 = ((G__37096_37597)?(G__37088_37602[(1)]):(cljs.core.truth_(G__37098_37599)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__36445__auto__[(0)] = (function (){var a__34580__auto__ = (function (){var a__34580__auto__ = G__37089_37603;
var b__34581__auto__ = G__37091_37605;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})();
var b__34581__auto__ = G__37093_37607;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36445__auto__[(1)] = (function (){var a__34580__auto__ = (function (){var a__34580__auto__ = G__37090_37604;
var b__34581__auto__ = G__37092_37606;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})();
var b__34581__auto__ = G__37094_37608;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__36445__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2((thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__37101 = (buf_SINGLEQUOTE_[(0)]);
var G__37102 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__37101,G__37102) : f2.call(null,G__37101,G__37102));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__37103 = (buf_SINGLEQUOTE_[(1)]);
var G__37104 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__37103,G__37104) : f2.call(null,G__37103,G__37104));
})());

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__37106 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__37107 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__37106[(0)]),(G__37107[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__37106[(1)]),(G__37107[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__37106[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__37106[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37109 = self__.buf;
var G__37110 = (G__37109[(0)]);
var G__37111 = (G__37109[(1)]);
var G__37113 = ((G__37110 * G__37110) + (G__37111 * G__37111));
return Math.sqrt(G__37113);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37115 = self__.buf;
var G__37116 = (G__37115[(0)]);
var G__37117 = (G__37115[(1)]);
return ((G__37116 * G__37116) + (G__37117 * G__37117));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37122_37636 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__37123_37637 = v.buf;
(b[(0)] = (((G__37122_37636[(0)]) + (G__37123_37637[(0)])) * 0.5));

(b[(1)] = (((G__37122_37636[(1)]) + (G__37123_37637[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__37122_37636[(0)]) + v) * 0.5));

(b[(1)] = (((G__37122_37636[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__37122_37636[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__37122_37636[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37139_37638 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__37140_37639 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__37141_37640 = ((!(G__37139_37638))?typeof v === 'number':null);
var G__37142_37641 = ((!(G__37140_37639))?typeof v2 === 'number':null);
var G__37130_37642 = self__.buf;
var G__37131_37643 = ((G__37139_37638)?v.buf:null);
var G__37132_37644 = ((G__37140_37639)?v2.buf:null);
var G__37133_37645 = (G__37130_37642[(0)]);
var G__37134_37646 = (G__37130_37642[(1)]);
var G__37135_37647 = ((G__37139_37638)?(G__37131_37643[(0)]):(cljs.core.truth_(G__37141_37640)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__37136_37648 = ((G__37139_37638)?(G__37131_37643[(1)]):(cljs.core.truth_(G__37141_37640)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__37137_37649 = ((G__37140_37639)?(G__37132_37644[(0)]):(cljs.core.truth_(G__37142_37641)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37138_37650 = ((G__37140_37639)?(G__37132_37644[(1)]):(cljs.core.truth_(G__37142_37641)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(b[(0)] = (((G__37135_37647 - G__37133_37645) * G__37137_37649) + G__37133_37645));

(b[(1)] = (((G__37136_37648 - G__37134_37646) * G__37138_37650) + G__37134_37646));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__37161_37655 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__37162_37656 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__37163_37657 = ((!(G__37161_37655))?typeof b === 'number':null);
var G__37164_37658 = ((!(G__37162_37656))?typeof c === 'number':null);
var G__37152_37659 = self__.buf;
var G__37153_37660 = ((G__37161_37655)?b.buf:null);
var G__37154_37661 = ((G__37162_37656)?c.buf:null);
var G__37155_37662 = (G__37152_37659[(0)]);
var G__37156_37663 = (G__37152_37659[(1)]);
var G__37157_37664 = ((G__37161_37655)?(G__37153_37660[(0)]):(cljs.core.truth_(G__37163_37657)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__37158_37665 = ((G__37161_37655)?(G__37153_37660[(1)]):(cljs.core.truth_(G__37163_37657)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__37159_37666 = ((G__37162_37656)?(G__37154_37661[(0)]):(cljs.core.truth_(G__37164_37658)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__37160_37667 = ((G__37162_37656)?(G__37154_37661[(1)]):(cljs.core.truth_(G__37164_37658)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_37668 = (((G__37157_37664 - G__37155_37662) * u) + G__37155_37662);
var y1_37669 = (((G__37158_37665 - G__37156_37663) * u) + G__37156_37663);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__37159_37666) * u) + G__37159_37666) - x1_37668) * v) + x1_37668));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__37160_37667) * u) + G__37160_37667) - y1_37669) * v) + y1_37669));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$geom$core$PNormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = ___$1.thi$ng$geom$core$PMagnitude$mag$arity$1(null));

(b[(1)] = ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37165 = self__.buf;
var G__37166 = (G__37165[(0)]);
var G__37167 = (G__37165[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__37166 * Math.cos(G__37167)));

(b[(1)] = (G__37166 * Math.sin(G__37167)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"thi.ng.geom.core.vector/Vec2");
});

/**
 * Positional factory function for thi.ng.geom.core.vector/Vec2.
 */
thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PRotate3D}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PRotate3D$rotate_z$arity$2(null,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(2)])),"]"].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37709 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37710 = v.buf;
return ((((G__37709[(0)]) * (G__37710[(0)])) + ((G__37709[(1)]) * (G__37710[(1)]))) + ((G__37709[(2)]) * (G__37710[(2)])));
} else {
return ((((G__37709[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__37709[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__37709[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37711 = self__.buf;
var G__37712 = (G__37711[(0)]);
var G__37713 = (G__37711[(1)]);
var G__37714 = (G__37711[(2)]);
var l = (function (){var G__37715 = (((G__37712 * G__37712) + (G__37713 * G__37713)) + (G__37714 * G__37714));
return Math.sqrt(G__37715);
})();
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__37712 / l));

(b[(1)] = (G__37713 / l));

(b[(2)] = (G__37714 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__37716 = self__.buf;
var G__37717 = (G__37716[(0)]);
var G__37718 = (G__37716[(1)]);
var G__37719 = (G__37716[(2)]);
var l = (function (){var G__37722 = (((G__37717 * G__37717) + (G__37718 * G__37718)) + (G__37719 * G__37719));
return Math.sqrt(G__37722);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__37717 * l__$1));

(b[(1)] = (G__37718 * l__$1));

(b[(2)] = (G__37719 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__37723 = self__.buf;
var G__37724 = (G__37723[(0)]);
var G__37725 = (G__37723[(1)]);
var G__37726 = (G__37723[(2)]);
(b[(0)] = G__37724);

(b[(1)] = ((G__37725 * c) - (G__37726 * s)));

(b[(2)] = ((G__37725 * s) + (G__37726 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__37727 = self__.buf;
var G__37728 = (G__37727[(0)]);
var G__37729 = (G__37727[(1)]);
var G__37730 = (G__37727[(2)]);
(b[(0)] = ((G__37728 * c) + (G__37730 * s)));

(b[(1)] = G__37729);

(b[(2)] = ((G__37730 * c) - (G__37728 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__37733 = self__.buf;
var G__37734 = (G__37733[(0)]);
var G__37735 = (G__37733[(1)]);
var G__37736 = (G__37733[(2)]);
(b[(0)] = ((G__37734 * c) - (G__37735 * s)));

(b[(1)] = ((G__37734 * s) + (G__37735 * c)));

(b[(2)] = G__37736);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__37737 = self__.buf;
var G__37739 = (G__37737[(0)]);
var G__37740 = (G__37737[(1)]);
var G__37741 = (G__37737[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37738 = v.buf;
var G__37742 = (G__37738[(0)]);
var G__37743 = (G__37738[(1)]);
var G__37744 = (G__37738[(2)]);
var ux_SINGLEQUOTE_ = (G__37742 * G__37739);
var uy_SINGLEQUOTE_ = (G__37742 * G__37740);
var uz_SINGLEQUOTE_ = (G__37742 * G__37741);
var vx_SINGLEQUOTE_ = (G__37743 * G__37739);
var vy_SINGLEQUOTE_ = (G__37743 * G__37740);
var vz_SINGLEQUOTE_ = (G__37743 * G__37741);
var wx_SINGLEQUOTE_ = (G__37744 * G__37739);
var wy_SINGLEQUOTE_ = (G__37744 * G__37740);
var wz_SINGLEQUOTE_ = (G__37744 * G__37741);
var vx2 = (G__37742 * G__37742);
var vy2 = (G__37743 * G__37743);
var vz2 = (G__37744 * G__37744);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__37742) + ((((vy2 + vz2) * G__37739) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__37742)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__37743) + ((((vx2 + vz2) * G__37740) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__37743)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__37744) + ((((vx2 + vy2) * G__37741) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__37744)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__37742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__37743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__37744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__37742 * G__37739);
var uy_SINGLEQUOTE_ = (G__37742 * G__37740);
var uz_SINGLEQUOTE_ = (G__37742 * G__37741);
var vx_SINGLEQUOTE_ = (G__37743 * G__37739);
var vy_SINGLEQUOTE_ = (G__37743 * G__37740);
var vz_SINGLEQUOTE_ = (G__37743 * G__37741);
var wx_SINGLEQUOTE_ = (G__37744 * G__37739);
var wy_SINGLEQUOTE_ = (G__37744 * G__37740);
var wz_SINGLEQUOTE_ = (G__37744 * G__37741);
var vx2 = (G__37742 * G__37742);
var vy2 = (G__37743 * G__37743);
var vz2 = (G__37744 * G__37744);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__37742) + ((((vy2 + vz2) * G__37739) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__37742)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__37743) + ((((vx2 + vz2) * G__37740) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__37743)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__37744) + ((((vx2 + vy2) * G__37741) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__37744)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__37747 = self__.buf;
var G__37749 = (G__37747[(0)]);
var G__37750 = (G__37747[(1)]);
var G__37751 = (G__37747[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37748 = v.buf;
var G__37752 = (G__37748[(0)]);
var G__37753 = (G__37748[(1)]);
var G__37754 = (G__37748[(2)]);
var d = ((((G__37749 * G__37752) + (G__37750 * G__37753)) + (G__37751 * G__37754)) * 2.0);
(b[(0)] = ((G__37752 * d) - G__37749));

(b[(1)] = ((G__37753 * d) - G__37750));

(b[(2)] = ((G__37754 * d) - G__37751));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__37752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__37753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__37754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__37749 * G__37752) + (G__37750 * G__37753)) + (G__37751 * G__37754)) * 2.0);
(b[(0)] = ((G__37752 * d) - G__37749));

(b[(1)] = ((G__37753 * d) - G__37750));

(b[(2)] = ((G__37754 * d) - G__37751));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__37756_38336 = self__.buf;
var G__37758_38337 = (G__37756_38336[(0)]);
var G__37759_38338 = (G__37756_38336[(1)]);
var G__37760_38339 = (G__37756_38336[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37757_38340 = v.buf;
var G__37761_38341 = (G__37757_38340[(0)]);
var G__37762_38342 = (G__37757_38340[(1)]);
var G__37763_38343 = (G__37757_38340[(2)]);
(b[(0)] = ((G__37759_38338 * G__37763_38343) - (G__37762_38342 * G__37760_38339)));

(b[(1)] = ((G__37760_38339 * G__37761_38341) - (G__37763_38343 * G__37758_38337)));

(b[(2)] = ((G__37758_38337 * G__37762_38342) - (G__37761_38341 * G__37759_38338)));
} else {
var G__37761_38344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__37762_38345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__37763_38346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__37759_38338 * G__37763_38346) - (G__37762_38345 * G__37760_38339)));

(b[(1)] = ((G__37760_38339 * G__37761_38344) - (G__37763_38346 * G__37758_38337)));

(b[(2)] = ((G__37758_38337 * G__37762_38345) - (G__37761_38344 * G__37759_38338)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37782_38347 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37783_38348 = v.buf;
(self__.buf[(0)] = ((G__37782_38347[(0)]) - (G__37783_38348[(0)])));

(self__.buf[(1)] = ((G__37782_38347[(1)]) - (G__37783_38348[(1)])));

(self__.buf[(2)] = ((G__37782_38347[(2)]) - (G__37783_38348[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37782_38347[(0)]) - v));

(self__.buf[(1)] = ((G__37782_38347[(1)]) - v));

(self__.buf[(2)] = ((G__37782_38347[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37782_38347[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__37782_38347[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__37782_38347[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37813_38349 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__37814_38350 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__37815_38351 = ((!(G__37813_38349))?typeof v1 === 'number':null);
var G__37816_38352 = ((!(G__37814_38350))?typeof v2 === 'number':null);
var G__37801_38353 = self__.buf;
var G__37802_38354 = ((G__37813_38349)?v1.buf:null);
var G__37803_38355 = ((G__37814_38350)?v2.buf:null);
var G__37804_38356 = (G__37801_38353[(0)]);
var G__37805_38357 = (G__37801_38353[(1)]);
var G__37806_38358 = (G__37801_38353[(2)]);
var G__37807_38359 = ((G__37813_38349)?(G__37802_38354[(0)]):(cljs.core.truth_(G__37815_38351)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__37808_38360 = ((G__37813_38349)?(G__37802_38354[(1)]):(cljs.core.truth_(G__37815_38351)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__37809_38361 = ((G__37813_38349)?(G__37802_38354[(2)]):(cljs.core.truth_(G__37815_38351)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__37810_38362 = ((G__37814_38350)?(G__37803_38355[(0)]):(cljs.core.truth_(G__37816_38352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37811_38363 = ((G__37814_38350)?(G__37803_38355[(1)]):(cljs.core.truth_(G__37816_38352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__37812_38364 = ((G__37814_38350)?(G__37803_38355[(2)]):(cljs.core.truth_(G__37816_38352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__37804_38356 - G__37807_38359) - G__37810_38362));

(self__.buf[(1)] = ((G__37805_38357 - G__37808_38360) - G__37811_38363));

(self__.buf[(2)] = ((G__37806_38358 - G__37809_38361) - G__37812_38364));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37822_38365 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37823_38366 = v.buf;
(self__.buf[(0)] = ((G__37822_38365[(0)]) * (G__37823_38366[(0)])));

(self__.buf[(1)] = ((G__37822_38365[(1)]) * (G__37823_38366[(1)])));

(self__.buf[(2)] = ((G__37822_38365[(2)]) * (G__37823_38366[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37822_38365[(0)]) * v));

(self__.buf[(1)] = ((G__37822_38365[(1)]) * v));

(self__.buf[(2)] = ((G__37822_38365[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37822_38365[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__37822_38365[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__37822_38365[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37836_38367 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__37837_38368 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__37838_38369 = ((!(G__37836_38367))?typeof v1 === 'number':null);
var G__37839_38370 = ((!(G__37837_38368))?typeof v2 === 'number':null);
var G__37824_38371 = self__.buf;
var G__37825_38372 = ((G__37836_38367)?v1.buf:null);
var G__37826_38373 = ((G__37837_38368)?v2.buf:null);
var G__37827_38374 = (G__37824_38371[(0)]);
var G__37828_38375 = (G__37824_38371[(1)]);
var G__37829_38376 = (G__37824_38371[(2)]);
var G__37830_38377 = ((G__37836_38367)?(G__37825_38372[(0)]):(cljs.core.truth_(G__37838_38369)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__37831_38378 = ((G__37836_38367)?(G__37825_38372[(1)]):(cljs.core.truth_(G__37838_38369)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__37832_38379 = ((G__37836_38367)?(G__37825_38372[(2)]):(cljs.core.truth_(G__37838_38369)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__37833_38380 = ((G__37837_38368)?(G__37826_38373[(0)]):(cljs.core.truth_(G__37839_38370)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37834_38381 = ((G__37837_38368)?(G__37826_38373[(1)]):(cljs.core.truth_(G__37839_38370)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__37835_38382 = ((G__37837_38368)?(G__37826_38373[(2)]):(cljs.core.truth_(G__37839_38370)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__37827_38374 * G__37830_38377) * G__37833_38380));

(self__.buf[(1)] = ((G__37828_38375 * G__37831_38378) * G__37834_38381));

(self__.buf[(2)] = ((G__37829_38376 * G__37832_38379) * G__37835_38382));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37852_38383 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__37853_38384 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__37854_38385 = ((!(G__37852_38383))?typeof a === 'number':null);
var G__37855_38386 = ((!(G__37853_38384))?typeof b === 'number':null);
var G__37840_38387 = self__.buf;
var G__37841_38388 = ((G__37852_38383)?a.buf:null);
var G__37842_38389 = ((G__37853_38384)?b.buf:null);
var G__37843_38390 = (G__37840_38387[(0)]);
var G__37844_38391 = (G__37840_38387[(1)]);
var G__37845_38392 = (G__37840_38387[(2)]);
var G__37846_38393 = ((G__37852_38383)?(G__37841_38388[(0)]):(cljs.core.truth_(G__37854_38385)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__37847_38394 = ((G__37852_38383)?(G__37841_38388[(1)]):(cljs.core.truth_(G__37854_38385)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__37848_38395 = ((G__37852_38383)?(G__37841_38388[(2)]):(cljs.core.truth_(G__37854_38385)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__37849_38396 = ((G__37853_38384)?(G__37842_38389[(0)]):(cljs.core.truth_(G__37855_38386)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__37850_38397 = ((G__37853_38384)?(G__37842_38389[(1)]):(cljs.core.truth_(G__37855_38386)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__37851_38398 = ((G__37853_38384)?(G__37842_38389[(2)]):(cljs.core.truth_(G__37855_38386)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__37843_38390 - G__37846_38393) * G__37849_38396));

(self__.buf[(1)] = ((G__37844_38391 - G__37847_38394) * G__37850_38397));

(self__.buf[(2)] = ((G__37845_38392 - G__37848_38395) * G__37851_38398));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37868_38399 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__37869_38400 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__37870_38401 = ((!(G__37868_38399))?typeof a === 'number':null);
var G__37871_38402 = ((!(G__37869_38400))?typeof b === 'number':null);
var G__37856_38403 = self__.buf;
var G__37857_38404 = ((G__37868_38399)?a.buf:null);
var G__37858_38405 = ((G__37869_38400)?b.buf:null);
var G__37859_38406 = (G__37856_38403[(0)]);
var G__37860_38407 = (G__37856_38403[(1)]);
var G__37861_38408 = (G__37856_38403[(2)]);
var G__37862_38409 = ((G__37868_38399)?(G__37857_38404[(0)]):(cljs.core.truth_(G__37870_38401)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__37863_38410 = ((G__37868_38399)?(G__37857_38404[(1)]):(cljs.core.truth_(G__37870_38401)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__37864_38411 = ((G__37868_38399)?(G__37857_38404[(2)]):(cljs.core.truth_(G__37870_38401)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__37865_38412 = ((G__37869_38400)?(G__37858_38405[(0)]):(cljs.core.truth_(G__37871_38402)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__37866_38413 = ((G__37869_38400)?(G__37858_38405[(1)]):(cljs.core.truth_(G__37871_38402)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__37867_38414 = ((G__37869_38400)?(G__37858_38405[(2)]):(cljs.core.truth_(G__37871_38402)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__37859_38406 * G__37862_38409) - G__37865_38412));

(self__.buf[(1)] = ((G__37860_38407 * G__37863_38410) - G__37866_38413));

(self__.buf[(2)] = ((G__37861_38408 * G__37864_38411) - G__37867_38414));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__37872 = (self__.buf[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__37872) : thi.ng.math.core.abs.call(null,G__37872));
})());

(self__.buf[(1)] = (function (){var G__37873 = (self__.buf[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__37873) : thi.ng.math.core.abs.call(null,G__37873));
})());

(self__.buf[(2)] = (function (){var G__37874 = (self__.buf[(2)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__37874) : thi.ng.math.core.abs.call(null,G__37874));
})());

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37887_38415 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__37888_38416 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__37889_38417 = ((!(G__37887_38415))?typeof a === 'number':null);
var G__37890_38418 = ((!(G__37888_38416))?typeof b === 'number':null);
var G__37875_38419 = self__.buf;
var G__37876_38420 = ((G__37887_38415)?a.buf:null);
var G__37877_38421 = ((G__37888_38416)?b.buf:null);
var G__37878_38422 = (G__37875_38419[(0)]);
var G__37879_38423 = (G__37875_38419[(1)]);
var G__37880_38424 = (G__37875_38419[(2)]);
var G__37881_38425 = ((G__37887_38415)?(G__37876_38420[(0)]):(cljs.core.truth_(G__37889_38417)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__37882_38426 = ((G__37887_38415)?(G__37876_38420[(1)]):(cljs.core.truth_(G__37889_38417)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__37883_38427 = ((G__37887_38415)?(G__37876_38420[(2)]):(cljs.core.truth_(G__37889_38417)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__37884_38428 = ((G__37888_38416)?(G__37877_38421[(0)]):(cljs.core.truth_(G__37890_38418)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__37885_38429 = ((G__37888_38416)?(G__37877_38421[(1)]):(cljs.core.truth_(G__37890_38418)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__37886_38430 = ((G__37888_38416)?(G__37877_38421[(2)]):(cljs.core.truth_(G__37890_38418)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__37878_38422 * G__37881_38425) + G__37884_38428));

(self__.buf[(1)] = ((G__37879_38423 * G__37882_38426) + G__37885_38429));

(self__.buf[(2)] = ((G__37880_38424 * G__37883_38427) + G__37886_38430));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37891_38431 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37892_38432 = v.buf;
(self__.buf[(0)] = ((G__37891_38431[(0)]) / (G__37892_38432[(0)])));

(self__.buf[(1)] = ((G__37891_38431[(1)]) / (G__37892_38432[(1)])));

(self__.buf[(2)] = ((G__37891_38431[(2)]) / (G__37892_38432[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37891_38431[(0)]) / v));

(self__.buf[(1)] = ((G__37891_38431[(1)]) / v));

(self__.buf[(2)] = ((G__37891_38431[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37891_38431[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__37891_38431[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__37891_38431[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37907_38433 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__37908_38434 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__37909_38435 = ((!(G__37907_38433))?typeof v1 === 'number':null);
var G__37910_38436 = ((!(G__37908_38434))?typeof v2 === 'number':null);
var G__37895_38437 = self__.buf;
var G__37896_38438 = ((G__37907_38433)?v1.buf:null);
var G__37897_38439 = ((G__37908_38434)?v2.buf:null);
var G__37898_38440 = (G__37895_38437[(0)]);
var G__37899_38441 = (G__37895_38437[(1)]);
var G__37900_38442 = (G__37895_38437[(2)]);
var G__37901_38443 = ((G__37907_38433)?(G__37896_38438[(0)]):(cljs.core.truth_(G__37909_38435)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__37902_38444 = ((G__37907_38433)?(G__37896_38438[(1)]):(cljs.core.truth_(G__37909_38435)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__37903_38445 = ((G__37907_38433)?(G__37896_38438[(2)]):(cljs.core.truth_(G__37909_38435)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__37904_38446 = ((G__37908_38434)?(G__37897_38439[(0)]):(cljs.core.truth_(G__37910_38436)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37905_38447 = ((G__37908_38434)?(G__37897_38439[(1)]):(cljs.core.truth_(G__37910_38436)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__37906_38448 = ((G__37908_38434)?(G__37897_38439[(2)]):(cljs.core.truth_(G__37910_38436)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__37898_38440 / G__37901_38443) / G__37904_38446));

(self__.buf[(1)] = ((G__37899_38441 / G__37902_38444) / G__37905_38447));

(self__.buf[(2)] = ((G__37900_38442 / G__37903_38445) / G__37906_38448));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37913_38449 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37914_38450 = v.buf;
(self__.buf[(0)] = ((G__37913_38449[(0)]) + (G__37914_38450[(0)])));

(self__.buf[(1)] = ((G__37913_38449[(1)]) + (G__37914_38450[(1)])));

(self__.buf[(2)] = ((G__37913_38449[(2)]) + (G__37914_38450[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37913_38449[(0)]) + v));

(self__.buf[(1)] = ((G__37913_38449[(1)]) + v));

(self__.buf[(2)] = ((G__37913_38449[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37913_38449[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__37913_38449[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__37913_38449[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37930_38451 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__37931_38452 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__37932_38453 = ((!(G__37930_38451))?typeof v1 === 'number':null);
var G__37933_38454 = ((!(G__37931_38452))?typeof v2 === 'number':null);
var G__37918_38455 = self__.buf;
var G__37919_38456 = ((G__37930_38451)?v1.buf:null);
var G__37920_38457 = ((G__37931_38452)?v2.buf:null);
var G__37921_38458 = (G__37918_38455[(0)]);
var G__37922_38459 = (G__37918_38455[(1)]);
var G__37923_38460 = (G__37918_38455[(2)]);
var G__37924_38461 = ((G__37930_38451)?(G__37919_38456[(0)]):(cljs.core.truth_(G__37932_38453)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__37925_38462 = ((G__37930_38451)?(G__37919_38456[(1)]):(cljs.core.truth_(G__37932_38453)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__37926_38463 = ((G__37930_38451)?(G__37919_38456[(2)]):(cljs.core.truth_(G__37932_38453)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__37927_38464 = ((G__37931_38452)?(G__37920_38457[(0)]):(cljs.core.truth_(G__37933_38454)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__37928_38465 = ((G__37931_38452)?(G__37920_38457[(1)]):(cljs.core.truth_(G__37933_38454)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__37929_38466 = ((G__37931_38452)?(G__37920_38457[(2)]):(cljs.core.truth_(G__37933_38454)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__37921_38458 + G__37924_38461) + G__37927_38464));

(self__.buf[(1)] = ((G__37922_38459 + G__37925_38462) + G__37928_38465));

(self__.buf[(2)] = ((G__37923_38460 + G__37926_38463) + G__37929_38466));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37946_38467 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__37947_38468 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__37948_38469 = ((!(G__37946_38467))?typeof a === 'number':null);
var G__37949_38470 = ((!(G__37947_38468))?typeof b === 'number':null);
var G__37934_38471 = self__.buf;
var G__37935_38472 = ((G__37946_38467)?a.buf:null);
var G__37936_38473 = ((G__37947_38468)?b.buf:null);
var G__37937_38474 = (G__37934_38471[(0)]);
var G__37938_38475 = (G__37934_38471[(1)]);
var G__37939_38476 = (G__37934_38471[(2)]);
var G__37940_38477 = ((G__37946_38467)?(G__37935_38472[(0)]):(cljs.core.truth_(G__37948_38469)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__37941_38478 = ((G__37946_38467)?(G__37935_38472[(1)]):(cljs.core.truth_(G__37948_38469)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__37942_38479 = ((G__37946_38467)?(G__37935_38472[(2)]):(cljs.core.truth_(G__37948_38469)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__37943_38480 = ((G__37947_38468)?(G__37936_38473[(0)]):(cljs.core.truth_(G__37949_38470)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__37944_38481 = ((G__37947_38468)?(G__37936_38473[(1)]):(cljs.core.truth_(G__37949_38470)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__37945_38482 = ((G__37947_38468)?(G__37936_38473[(2)]):(cljs.core.truth_(G__37949_38470)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__37937_38474 + G__37940_38477) * G__37943_38480));

(self__.buf[(1)] = ((G__37938_38475 + G__37941_38478) * G__37944_38481));

(self__.buf[(2)] = ((G__37939_38476 + G__37942_38479) * G__37945_38482));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__37951 = (function (){var G__37952 = new cljs.core.Keyword(null,"zyx","zyx",1752527951);
return (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__37952) : thi.ng.geom.core.vector.swizzle3_fns.call(null,G__37952));
})();
return (fexpr__37951.cljs$core$IFn$_invoke$arity$1 ? fexpr__37951.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__37951.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = self__._hash;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((3) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PHeading$heading_xy$arity$1(null);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__37953 = (self__.buf[(1)]);
var G__37954 = (self__.buf[(0)]);
return Math.atan2(G__37953,G__37954);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__37956 = (self__.buf[(2)]);
var G__37957 = (self__.buf[(0)]);
return Math.atan2(G__37956,G__37957);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__37959 = (self__.buf[(2)]);
var G__37960 = (self__.buf[(1)]);
return Math.atan2(G__37959,G__37960);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(v) : thi.ng.geom.core.vector.vec3.call(null,v)));
var G__37961 = thi.ng.geom.core.dot(___$1.thi$ng$geom$core$PNormalize$normalize$arity$1(null),thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(v__$1));
return Math.acos(G__37961);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37962 = ___$1.thi$ng$geom$core$PDistance$dist_squared$arity$2(null,v);
return Math.sqrt(G__37962);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37963 = self__.buf;
var G__37965 = (G__37963[(0)]);
var G__37966 = (G__37963[(1)]);
var G__37967 = (G__37963[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37964 = v.buf;
var G__37968 = (G__37964[(0)]);
var G__37969 = (G__37964[(1)]);
var G__37970 = (G__37964[(2)]);
var dx = (G__37965 - G__37968);
var dy = (G__37966 - G__37969);
var dz = (G__37967 - G__37970);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__37968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__37969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__37970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__37965 - G__37968);
var dy = (G__37966 - G__37969);
var dz = (G__37967 - G__37970);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__37972 = (self__.buf[(0)]);
var G__37973 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37972,G__37973) : f.call(null,G__37972,G__37973));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__37974 = acc;
var G__37975 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37974,G__37975) : f.call(null,G__37974,G__37975));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__37976 = start;
var G__37977 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37976,G__37977) : f.call(null,G__37976,G__37977));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__37978 = acc;
var G__37979 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37978,G__37979) : f.call(null,G__37978,G__37979));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
var acc__$2 = (function (){var G__37980 = acc__$1;
var G__37981 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37980,G__37981) : f.call(null,G__37980,G__37981));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
return cljs.core.deref(acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PMathOps$_$arity$1(null);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__37994_38483 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__37995_38484 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__37996_38485 = ((!(G__37994_38483))?typeof a === 'number':null);
var G__37997_38486 = ((!(G__37995_38484))?typeof b === 'number':null);
var G__37982_38487 = self__.buf;
var G__37983_38488 = ((G__37994_38483)?a.buf:null);
var G__37984_38489 = ((G__37995_38484)?b.buf:null);
var G__37985_38490 = (G__37982_38487[(0)]);
var G__37986_38491 = (G__37982_38487[(1)]);
var G__37987_38492 = (G__37982_38487[(2)]);
var G__37988_38493 = ((G__37994_38483)?(G__37983_38488[(0)]):(cljs.core.truth_(G__37996_38485)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__37989_38494 = ((G__37994_38483)?(G__37983_38488[(1)]):(cljs.core.truth_(G__37996_38485)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__37990_38495 = ((G__37994_38483)?(G__37983_38488[(2)]):(cljs.core.truth_(G__37996_38485)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__37991_38496 = ((G__37995_38484)?(G__37984_38489[(0)]):(cljs.core.truth_(G__37997_38486)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__37992_38497 = ((G__37995_38484)?(G__37984_38489[(1)]):(cljs.core.truth_(G__37997_38486)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__37993_38498 = ((G__37995_38484)?(G__37984_38489[(2)]):(cljs.core.truth_(G__37997_38486)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__37985_38490 * G__37988_38493) - G__37991_38496));

(dest__36570__auto__[(1)] = ((G__37986_38491 * G__37989_38494) - G__37992_38497));

(dest__36570__auto__[(2)] = ((G__37987_38492 * G__37990_38495) - G__37993_38498));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__37998_38499 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__37999_38500 = v.buf;
(dest__36552__auto__[(0)] = ((G__37998_38499[(0)]) * (G__37999_38500[(0)])));

(dest__36552__auto__[(1)] = ((G__37998_38499[(1)]) * (G__37999_38500[(1)])));

(dest__36552__auto__[(2)] = ((G__37998_38499[(2)]) * (G__37999_38500[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__37998_38499[(0)]) * v));

(dest__36552__auto__[(1)] = ((G__37998_38499[(1)]) * v));

(dest__36552__auto__[(2)] = ((G__37998_38499[(2)]) * v));
} else {
(dest__36552__auto__[(0)] = ((G__37998_38499[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__37998_38499[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__37998_38499[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38012_38501 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38013_38502 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38014_38503 = ((!(G__38012_38501))?typeof v1 === 'number':null);
var G__38015_38504 = ((!(G__38013_38502))?typeof v2 === 'number':null);
var G__38000_38505 = self__.buf;
var G__38001_38506 = ((G__38012_38501)?v1.buf:null);
var G__38002_38507 = ((G__38013_38502)?v2.buf:null);
var G__38003_38508 = (G__38000_38505[(0)]);
var G__38004_38509 = (G__38000_38505[(1)]);
var G__38005_38510 = (G__38000_38505[(2)]);
var G__38006_38511 = ((G__38012_38501)?(G__38001_38506[(0)]):(cljs.core.truth_(G__38014_38503)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__38007_38512 = ((G__38012_38501)?(G__38001_38506[(1)]):(cljs.core.truth_(G__38014_38503)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__38008_38513 = ((G__38012_38501)?(G__38001_38506[(2)]):(cljs.core.truth_(G__38014_38503)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__38009_38514 = ((G__38013_38502)?(G__38002_38507[(0)]):(cljs.core.truth_(G__38015_38504)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38010_38515 = ((G__38013_38502)?(G__38002_38507[(1)]):(cljs.core.truth_(G__38015_38504)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38011_38516 = ((G__38013_38502)?(G__38002_38507[(2)]):(cljs.core.truth_(G__38015_38504)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38003_38508 * G__38006_38511) * G__38009_38514));

(dest__36570__auto__[(1)] = ((G__38004_38509 * G__38007_38512) * G__38010_38515));

(dest__36570__auto__[(2)] = ((G__38005_38510 * G__38008_38513) * G__38011_38516));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38016 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38016[(0)]) * x));

(dest__36541__auto__[(1)] = ((G__38016[(1)]) * y));

(dest__36541__auto__[(2)] = ((G__38016[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36535__auto__ = (new Float32Array((3)));
var G__38017_38517 = self__.buf;
(dest__36535__auto__[(0)] = (- (G__38017_38517[(0)])));

(dest__36535__auto__[(1)] = (- (G__38017_38517[(1)])));

(dest__36535__auto__[(2)] = (- (G__38017_38517[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__36535__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38018_38518 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38019_38519 = v.buf;
(dest__36552__auto__[(0)] = ((G__38018_38518[(0)]) - (G__38019_38519[(0)])));

(dest__36552__auto__[(1)] = ((G__38018_38518[(1)]) - (G__38019_38519[(1)])));

(dest__36552__auto__[(2)] = ((G__38018_38518[(2)]) - (G__38019_38519[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__38018_38518[(0)]) - v));

(dest__36552__auto__[(1)] = ((G__38018_38518[(1)]) - v));

(dest__36552__auto__[(2)] = ((G__38018_38518[(2)]) - v));
} else {
(dest__36552__auto__[(0)] = ((G__38018_38518[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__38018_38518[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__38018_38518[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38032_38520 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38033_38521 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38034_38522 = ((!(G__38032_38520))?typeof v1 === 'number':null);
var G__38035_38523 = ((!(G__38033_38521))?typeof v2 === 'number':null);
var G__38020_38524 = self__.buf;
var G__38021_38525 = ((G__38032_38520)?v1.buf:null);
var G__38022_38526 = ((G__38033_38521)?v2.buf:null);
var G__38023_38527 = (G__38020_38524[(0)]);
var G__38024_38528 = (G__38020_38524[(1)]);
var G__38025_38529 = (G__38020_38524[(2)]);
var G__38026_38530 = ((G__38032_38520)?(G__38021_38525[(0)]):(cljs.core.truth_(G__38034_38522)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__38027_38531 = ((G__38032_38520)?(G__38021_38525[(1)]):(cljs.core.truth_(G__38034_38522)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__38028_38532 = ((G__38032_38520)?(G__38021_38525[(2)]):(cljs.core.truth_(G__38034_38522)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__38029_38533 = ((G__38033_38521)?(G__38022_38526[(0)]):(cljs.core.truth_(G__38035_38523)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38030_38534 = ((G__38033_38521)?(G__38022_38526[(1)]):(cljs.core.truth_(G__38035_38523)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38031_38535 = ((G__38033_38521)?(G__38022_38526[(2)]):(cljs.core.truth_(G__38035_38523)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38023_38527 - G__38026_38530) - G__38029_38533));

(dest__36570__auto__[(1)] = ((G__38024_38528 - G__38027_38531) - G__38030_38534));

(dest__36570__auto__[(2)] = ((G__38025_38529 - G__38028_38532) - G__38031_38535));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38041 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38041[(0)]) - x));

(dest__36541__auto__[(1)] = ((G__38041[(1)]) - y));

(dest__36541__auto__[(2)] = ((G__38041[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38055_38536 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__38056_38537 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__38057_38538 = ((!(G__38055_38536))?typeof a === 'number':null);
var G__38058_38539 = ((!(G__38056_38537))?typeof b === 'number':null);
var G__38043_38540 = self__.buf;
var G__38044_38541 = ((G__38055_38536)?a.buf:null);
var G__38045_38542 = ((G__38056_38537)?b.buf:null);
var G__38046_38543 = (G__38043_38540[(0)]);
var G__38047_38544 = (G__38043_38540[(1)]);
var G__38048_38545 = (G__38043_38540[(2)]);
var G__38049_38546 = ((G__38055_38536)?(G__38044_38541[(0)]):(cljs.core.truth_(G__38057_38538)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__38050_38547 = ((G__38055_38536)?(G__38044_38541[(1)]):(cljs.core.truth_(G__38057_38538)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__38051_38548 = ((G__38055_38536)?(G__38044_38541[(2)]):(cljs.core.truth_(G__38057_38538)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__38052_38549 = ((G__38056_38537)?(G__38045_38542[(0)]):(cljs.core.truth_(G__38058_38539)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__38053_38550 = ((G__38056_38537)?(G__38045_38542[(1)]):(cljs.core.truth_(G__38058_38539)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__38054_38551 = ((G__38056_38537)?(G__38045_38542[(2)]):(cljs.core.truth_(G__38058_38539)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38046_38543 * G__38049_38546) + G__38052_38549));

(dest__36570__auto__[(1)] = ((G__38047_38544 * G__38050_38547) + G__38053_38550));

(dest__36570__auto__[(2)] = ((G__38048_38545 * G__38051_38548) + G__38054_38551));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38072_38552 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__38073_38553 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__38074_38554 = ((!(G__38072_38552))?typeof a === 'number':null);
var G__38075_38555 = ((!(G__38073_38553))?typeof b === 'number':null);
var G__38060_38556 = self__.buf;
var G__38061_38557 = ((G__38072_38552)?a.buf:null);
var G__38062_38558 = ((G__38073_38553)?b.buf:null);
var G__38063_38559 = (G__38060_38556[(0)]);
var G__38064_38560 = (G__38060_38556[(1)]);
var G__38065_38561 = (G__38060_38556[(2)]);
var G__38066_38562 = ((G__38072_38552)?(G__38061_38557[(0)]):(cljs.core.truth_(G__38074_38554)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__38067_38563 = ((G__38072_38552)?(G__38061_38557[(1)]):(cljs.core.truth_(G__38074_38554)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__38068_38564 = ((G__38072_38552)?(G__38061_38557[(2)]):(cljs.core.truth_(G__38074_38554)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__38069_38565 = ((G__38073_38553)?(G__38062_38558[(0)]):(cljs.core.truth_(G__38075_38555)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__38070_38566 = ((G__38073_38553)?(G__38062_38558[(1)]):(cljs.core.truth_(G__38075_38555)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__38071_38567 = ((G__38073_38553)?(G__38062_38558[(2)]):(cljs.core.truth_(G__38075_38555)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__36570__auto__[(0)] = ((G__38063_38559 + G__38066_38562) * G__38069_38565));

(dest__36570__auto__[(1)] = ((G__38064_38560 + G__38067_38563) * G__38070_38566));

(dest__36570__auto__[(2)] = ((G__38065_38561 + G__38068_38564) * G__38071_38567));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36535__auto__ = (new Float32Array((3)));
var G__38076_38568 = self__.buf;
(dest__36535__auto__[(0)] = ((1) / (G__38076_38568[(0)])));

(dest__36535__auto__[(1)] = ((1) / (G__38076_38568[(1)])));

(dest__36535__auto__[(2)] = ((1) / (G__38076_38568[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__36535__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38077_38569 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38078_38570 = v.buf;
(dest__36552__auto__[(0)] = ((G__38077_38569[(0)]) / (G__38078_38570[(0)])));

(dest__36552__auto__[(1)] = ((G__38077_38569[(1)]) / (G__38078_38570[(1)])));

(dest__36552__auto__[(2)] = ((G__38077_38569[(2)]) / (G__38078_38570[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__38077_38569[(0)]) / v));

(dest__36552__auto__[(1)] = ((G__38077_38569[(1)]) / v));

(dest__36552__auto__[(2)] = ((G__38077_38569[(2)]) / v));
} else {
(dest__36552__auto__[(0)] = ((G__38077_38569[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__38077_38569[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__38077_38569[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38091_38571 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38092_38572 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38093_38573 = ((!(G__38091_38571))?typeof v1 === 'number':null);
var G__38094_38574 = ((!(G__38092_38572))?typeof v2 === 'number':null);
var G__38079_38575 = self__.buf;
var G__38080_38576 = ((G__38091_38571)?v1.buf:null);
var G__38081_38577 = ((G__38092_38572)?v2.buf:null);
var G__38082_38578 = (G__38079_38575[(0)]);
var G__38083_38579 = (G__38079_38575[(1)]);
var G__38084_38580 = (G__38079_38575[(2)]);
var G__38085_38581 = ((G__38091_38571)?(G__38080_38576[(0)]):(cljs.core.truth_(G__38093_38573)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__38086_38582 = ((G__38091_38571)?(G__38080_38576[(1)]):(cljs.core.truth_(G__38093_38573)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__38087_38583 = ((G__38091_38571)?(G__38080_38576[(2)]):(cljs.core.truth_(G__38093_38573)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__38088_38584 = ((G__38092_38572)?(G__38081_38577[(0)]):(cljs.core.truth_(G__38094_38574)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38089_38585 = ((G__38092_38572)?(G__38081_38577[(1)]):(cljs.core.truth_(G__38094_38574)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38090_38586 = ((G__38092_38572)?(G__38081_38577[(2)]):(cljs.core.truth_(G__38094_38574)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38082_38578 / G__38085_38581) / G__38088_38584));

(dest__36570__auto__[(1)] = ((G__38083_38579 / G__38086_38582) / G__38089_38585));

(dest__36570__auto__[(2)] = ((G__38084_38580 / G__38087_38583) / G__38090_38586));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38095 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38095[(0)]) / x));

(dest__36541__auto__[(1)] = ((G__38095[(1)]) / y));

(dest__36541__auto__[(2)] = ((G__38095[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38096_38587 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38097_38588 = v.buf;
(dest__36552__auto__[(0)] = ((G__38096_38587[(0)]) + (G__38097_38588[(0)])));

(dest__36552__auto__[(1)] = ((G__38096_38587[(1)]) + (G__38097_38588[(1)])));

(dest__36552__auto__[(2)] = ((G__38096_38587[(2)]) + (G__38097_38588[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__38096_38587[(0)]) + v));

(dest__36552__auto__[(1)] = ((G__38096_38587[(1)]) + v));

(dest__36552__auto__[(2)] = ((G__38096_38587[(2)]) + v));
} else {
(dest__36552__auto__[(0)] = ((G__38096_38587[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__38096_38587[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__38096_38587[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38110_38589 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38111_38590 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38112_38591 = ((!(G__38110_38589))?typeof v1 === 'number':null);
var G__38113_38592 = ((!(G__38111_38590))?typeof v2 === 'number':null);
var G__38098_38593 = self__.buf;
var G__38099_38594 = ((G__38110_38589)?v1.buf:null);
var G__38100_38595 = ((G__38111_38590)?v2.buf:null);
var G__38101_38596 = (G__38098_38593[(0)]);
var G__38102_38597 = (G__38098_38593[(1)]);
var G__38103_38598 = (G__38098_38593[(2)]);
var G__38104_38599 = ((G__38110_38589)?(G__38099_38594[(0)]):(cljs.core.truth_(G__38112_38591)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__38105_38600 = ((G__38110_38589)?(G__38099_38594[(1)]):(cljs.core.truth_(G__38112_38591)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__38106_38601 = ((G__38110_38589)?(G__38099_38594[(2)]):(cljs.core.truth_(G__38112_38591)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__38107_38602 = ((G__38111_38590)?(G__38100_38595[(0)]):(cljs.core.truth_(G__38113_38592)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38108_38603 = ((G__38111_38590)?(G__38100_38595[(1)]):(cljs.core.truth_(G__38113_38592)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38109_38604 = ((G__38111_38590)?(G__38100_38595[(2)]):(cljs.core.truth_(G__38113_38592)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38101_38596 + G__38104_38599) + G__38107_38602));

(dest__36570__auto__[(1)] = ((G__38102_38597 + G__38105_38600) + G__38108_38603));

(dest__36570__auto__[(2)] = ((G__38103_38598 + G__38106_38601) + G__38109_38604));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38115 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38115[(0)]) + x));

(dest__36541__auto__[(1)] = ((G__38115[(1)]) + y));

(dest__36541__auto__[(2)] = ((G__38115[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__36535__auto__ = (new Float32Array((3)));
var G__38116_38605 = self__.buf;
(dest__36535__auto__[(0)] = (function (){var G__38119 = (G__38116_38605[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__38119) : thi.ng.math.core.abs.call(null,G__38119));
})());

(dest__36535__auto__[(1)] = (function (){var G__38121 = (G__38116_38605[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__38121) : thi.ng.math.core.abs.call(null,G__38121));
})());

(dest__36535__auto__[(2)] = (function (){var G__38122 = (G__38116_38605[(2)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__38122) : thi.ng.math.core.abs.call(null,G__38122));
})());

return (new thi.ng.geom.core.vector.Vec3(dest__36535__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38135_38606 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__38136_38607 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__38137_38608 = ((!(G__38135_38606))?typeof a === 'number':null);
var G__38138_38609 = ((!(G__38136_38607))?typeof b === 'number':null);
var G__38123_38610 = self__.buf;
var G__38124_38611 = ((G__38135_38606)?a.buf:null);
var G__38125_38612 = ((G__38136_38607)?b.buf:null);
var G__38126_38613 = (G__38123_38610[(0)]);
var G__38127_38614 = (G__38123_38610[(1)]);
var G__38128_38615 = (G__38123_38610[(2)]);
var G__38129_38616 = ((G__38135_38606)?(G__38124_38611[(0)]):(cljs.core.truth_(G__38137_38608)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__38130_38617 = ((G__38135_38606)?(G__38124_38611[(1)]):(cljs.core.truth_(G__38137_38608)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__38131_38618 = ((G__38135_38606)?(G__38124_38611[(2)]):(cljs.core.truth_(G__38137_38608)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__38132_38619 = ((G__38136_38607)?(G__38125_38612[(0)]):(cljs.core.truth_(G__38138_38609)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__38133_38620 = ((G__38136_38607)?(G__38125_38612[(1)]):(cljs.core.truth_(G__38138_38609)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__38134_38621 = ((G__38136_38607)?(G__38125_38612[(2)]):(cljs.core.truth_(G__38138_38609)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__36570__auto__[(0)] = ((G__38126_38613 - G__38129_38616) * G__38132_38619));

(dest__36570__auto__[(1)] = ((G__38127_38614 - G__38130_38617) * G__38133_38620));

(dest__36570__auto__[(2)] = ((G__38128_38615 - G__38131_38618) * G__38134_38621));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38139_38622 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38140_38623 = v.buf;
(dest__36552__auto__[(0)] = ((G__38139_38622[(0)]) + (G__38140_38623[(0)])));

(dest__36552__auto__[(1)] = ((G__38139_38622[(1)]) + (G__38140_38623[(1)])));

(dest__36552__auto__[(2)] = ((G__38139_38622[(2)]) + (G__38140_38623[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__38139_38622[(0)]) + v));

(dest__36552__auto__[(1)] = ((G__38139_38622[(1)]) + v));

(dest__36552__auto__[(2)] = ((G__38139_38622[(2)]) + v));
} else {
(dest__36552__auto__[(0)] = ((G__38139_38622[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__38139_38622[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__38139_38622[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38155_38624 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38156_38625 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38157_38626 = ((!(G__38155_38624))?typeof v1 === 'number':null);
var G__38158_38627 = ((!(G__38156_38625))?typeof v2 === 'number':null);
var G__38143_38628 = self__.buf;
var G__38144_38629 = ((G__38155_38624)?v1.buf:null);
var G__38145_38630 = ((G__38156_38625)?v2.buf:null);
var G__38146_38631 = (G__38143_38628[(0)]);
var G__38147_38632 = (G__38143_38628[(1)]);
var G__38148_38633 = (G__38143_38628[(2)]);
var G__38149_38634 = ((G__38155_38624)?(G__38144_38629[(0)]):(cljs.core.truth_(G__38157_38626)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__38150_38635 = ((G__38155_38624)?(G__38144_38629[(1)]):(cljs.core.truth_(G__38157_38626)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__38151_38636 = ((G__38155_38624)?(G__38144_38629[(2)]):(cljs.core.truth_(G__38157_38626)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__38152_38637 = ((G__38156_38625)?(G__38145_38630[(0)]):(cljs.core.truth_(G__38158_38627)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38153_38638 = ((G__38156_38625)?(G__38145_38630[(1)]):(cljs.core.truth_(G__38158_38627)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38154_38639 = ((G__38156_38625)?(G__38145_38630[(2)]):(cljs.core.truth_(G__38158_38627)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = ((G__38146_38631 + G__38149_38634) + G__38152_38637));

(dest__36570__auto__[(1)] = ((G__38147_38632 + G__38150_38635) + G__38153_38638));

(dest__36570__auto__[(2)] = ((G__38148_38633 + G__38151_38636) + G__38154_38639));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38159 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38159[(0)]) + x));

(dest__36541__auto__[(1)] = ((G__38159[(1)]) + y));

(dest__36541__auto__[(2)] = ((G__38159[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k <= (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k)))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k >= (0))) && ((k <= (2))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3((function (){var G__38164 = self__.buf;
var G__38165 = (new Float32Array(self__.buf));
var G__38166 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__38167 = k;
var G__38168 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__38164,G__38165,G__38166,G__38167,G__38168) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__38164,G__38165,G__38166,G__38167,G__38168));
})(),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38169_38640 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38170_38641 = v.buf;
(dest__36552__auto__[(0)] = ((G__38169_38640[(0)]) * (G__38170_38641[(0)])));

(dest__36552__auto__[(1)] = ((G__38169_38640[(1)]) * (G__38170_38641[(1)])));

(dest__36552__auto__[(2)] = ((G__38169_38640[(2)]) * (G__38170_38641[(2)])));
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = ((G__38169_38640[(0)]) * v));

(dest__36552__auto__[(1)] = ((G__38169_38640[(1)]) * v));

(dest__36552__auto__[(2)] = ((G__38169_38640[(2)]) * v));
} else {
(dest__36552__auto__[(0)] = ((G__38169_38640[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__36552__auto__[(1)] = ((G__38169_38640[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__36552__auto__[(2)] = ((G__38169_38640[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38185_38642 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__38186_38643 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38187_38644 = ((!(G__38185_38642))?typeof v1 === 'number':null);
var G__38188_38645 = ((!(G__38186_38643))?typeof v2 === 'number':null);
var G__38173_38646 = self__.buf;
var G__38174_38647 = ((G__38185_38642)?v1.buf:null);
var G__38175_38648 = ((G__38186_38643)?v2.buf:null);
var G__38176_38649 = (G__38173_38646[(0)]);
var G__38177_38650 = (G__38173_38646[(1)]);
var G__38178_38651 = (G__38173_38646[(2)]);
var G__38179_38652 = ((G__38185_38642)?(G__38174_38647[(0)]):(cljs.core.truth_(G__38187_38644)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__38180_38653 = ((G__38185_38642)?(G__38174_38647[(1)]):(cljs.core.truth_(G__38187_38644)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__38181_38654 = ((G__38185_38642)?(G__38174_38647[(2)]):(cljs.core.truth_(G__38187_38644)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),1.0)));
var G__38182_38655 = ((G__38186_38643)?(G__38175_38648[(0)]):(cljs.core.truth_(G__38188_38645)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__38183_38656 = ((G__38186_38643)?(G__38175_38648[(1)]):(cljs.core.truth_(G__38188_38645)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
var G__38184_38657 = ((G__38186_38643)?(G__38175_38648[(2)]):(cljs.core.truth_(G__38188_38645)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),1.0)));
(dest__36570__auto__[(0)] = ((G__38176_38649 * G__38179_38652) * G__38182_38655));

(dest__36570__auto__[(1)] = ((G__38177_38650 * G__38180_38653) * G__38183_38656));

(dest__36570__auto__[(2)] = ((G__38178_38651 * G__38181_38654) * G__38184_38657));

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38190 = self__.buf;
var dest__36541__auto__ = (new Float32Array((3)));
(dest__36541__auto__[(0)] = ((G__38190[(0)]) * x));

(dest__36541__auto__[(1)] = ((G__38190[(1)]) * y));

(dest__36541__auto__[(2)] = ((G__38190[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__36541__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__38658 = null;
var G__38658__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
var G__38658__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__38658 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__38658__2.call(this,self__,k);
case 3:
return G__38658__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38658.cljs$core$IFn$_invoke$arity$2 = G__38658__2;
G__38658.cljs$core$IFn$_invoke$arity$3 = G__38658__3;
return G__38658;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args37708){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37708)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5455__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38210_38659 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38211_38660 = v.buf;
(dest__36552__auto__[(0)] = (function (){var a__34570__auto__ = (G__38210_38659[(0)]);
var b__34571__auto__ = (G__38211_38660[(0)]);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34570__auto__ = (G__38210_38659[(1)]);
var b__34571__auto__ = (G__38211_38660[(1)]);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34570__auto__ = (G__38210_38659[(2)]);
var b__34571__auto__ = (G__38211_38660[(2)]);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = (function (){var a__34570__auto__ = (G__38210_38659[(0)]);
var b__34571__auto__ = v;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34570__auto__ = (G__38210_38659[(1)]);
var b__34571__auto__ = v;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34570__auto__ = (G__38210_38659[(2)]);
var b__34571__auto__ = v;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
} else {
(dest__36552__auto__[(0)] = (function (){var a__34570__auto__ = (G__38210_38659[(0)]);
var b__34571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34570__auto__ = (G__38210_38659[(1)]);
var b__34571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34570__auto__ = (G__38210_38659[(2)]);
var b__34571__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38225_38661 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__38226_38662 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38227_38663 = ((!(G__38225_38661))?typeof v === 'number':null);
var G__38228_38664 = ((!(G__38226_38662))?typeof v2 === 'number':null);
var G__38213_38665 = self__.buf;
var G__38214_38666 = ((G__38225_38661)?v.buf:null);
var G__38215_38667 = ((G__38226_38662)?v2.buf:null);
var G__38216_38668 = (G__38213_38665[(0)]);
var G__38217_38669 = (G__38213_38665[(1)]);
var G__38218_38670 = (G__38213_38665[(2)]);
var G__38219_38671 = ((G__38225_38661)?(G__38214_38666[(0)]):(cljs.core.truth_(G__38227_38663)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__38220_38672 = ((G__38225_38661)?(G__38214_38666[(1)]):(cljs.core.truth_(G__38227_38663)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__38221_38673 = ((G__38225_38661)?(G__38214_38666[(2)]):(cljs.core.truth_(G__38227_38663)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__38222_38674 = ((G__38226_38662)?(G__38215_38667[(0)]):(cljs.core.truth_(G__38228_38664)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38223_38675 = ((G__38226_38662)?(G__38215_38667[(1)]):(cljs.core.truth_(G__38228_38664)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38224_38676 = ((G__38226_38662)?(G__38215_38667[(2)]):(cljs.core.truth_(G__38228_38664)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = (function (){var a__34570__auto__ = (function (){var a__34570__auto__ = G__38216_38668;
var b__34571__auto__ = G__38219_38671;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})();
var b__34571__auto__ = G__38222_38674;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36570__auto__[(1)] = (function (){var a__34570__auto__ = (function (){var a__34570__auto__ = G__38217_38669;
var b__34571__auto__ = G__38220_38672;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})();
var b__34571__auto__ = G__38223_38675;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

(dest__36570__auto__[(2)] = (function (){var a__34570__auto__ = (function (){var a__34570__auto__ = G__38218_38670;
var b__34571__auto__ = G__38221_38673;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})();
var b__34571__auto__ = G__38224_38676;
if((a__34570__auto__ <= b__34571__auto__)){
return a__34570__auto__;
} else {
return b__34571__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__36552__auto__ = (new Float32Array((3)));
var G__38229_38677 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38230_38678 = v.buf;
(dest__36552__auto__[(0)] = (function (){var a__34580__auto__ = (G__38229_38677[(0)]);
var b__34581__auto__ = (G__38230_38678[(0)]);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34580__auto__ = (G__38229_38677[(1)]);
var b__34581__auto__ = (G__38230_38678[(1)]);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34580__auto__ = (G__38229_38677[(2)]);
var b__34581__auto__ = (G__38230_38678[(2)]);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__36552__auto__[(0)] = (function (){var a__34580__auto__ = (G__38229_38677[(0)]);
var b__34581__auto__ = v;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34580__auto__ = (G__38229_38677[(1)]);
var b__34581__auto__ = v;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34580__auto__ = (G__38229_38677[(2)]);
var b__34581__auto__ = v;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
} else {
(dest__36552__auto__[(0)] = (function (){var a__34580__auto__ = (G__38229_38677[(0)]);
var b__34581__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(1)] = (function (){var a__34580__auto__ = (G__38229_38677[(1)]);
var b__34581__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36552__auto__[(2)] = (function (){var a__34580__auto__ = (G__38229_38677[(2)]);
var b__34581__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__36552__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__36570__auto__ = (new Float32Array((3)));
var G__38243_38679 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__38244_38680 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38245_38681 = ((!(G__38243_38679))?typeof v === 'number':null);
var G__38246_38682 = ((!(G__38244_38680))?typeof v2 === 'number':null);
var G__38231_38683 = self__.buf;
var G__38232_38684 = ((G__38243_38679)?v.buf:null);
var G__38233_38685 = ((G__38244_38680)?v2.buf:null);
var G__38234_38686 = (G__38231_38683[(0)]);
var G__38235_38687 = (G__38231_38683[(1)]);
var G__38236_38688 = (G__38231_38683[(2)]);
var G__38237_38689 = ((G__38243_38679)?(G__38232_38684[(0)]):(cljs.core.truth_(G__38245_38681)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__38238_38690 = ((G__38243_38679)?(G__38232_38684[(1)]):(cljs.core.truth_(G__38245_38681)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__38239_38691 = ((G__38243_38679)?(G__38232_38684[(2)]):(cljs.core.truth_(G__38245_38681)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__38240_38692 = ((G__38244_38680)?(G__38233_38685[(0)]):(cljs.core.truth_(G__38246_38682)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38241_38693 = ((G__38244_38680)?(G__38233_38685[(1)]):(cljs.core.truth_(G__38246_38682)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38242_38694 = ((G__38244_38680)?(G__38233_38685[(2)]):(cljs.core.truth_(G__38246_38682)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__36570__auto__[(0)] = (function (){var a__34580__auto__ = (function (){var a__34580__auto__ = G__38234_38686;
var b__34581__auto__ = G__38237_38689;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})();
var b__34581__auto__ = G__38240_38692;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36570__auto__[(1)] = (function (){var a__34580__auto__ = (function (){var a__34580__auto__ = G__38235_38687;
var b__34581__auto__ = G__38238_38690;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})();
var b__34581__auto__ = G__38241_38693;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

(dest__36570__auto__[(2)] = (function (){var a__34580__auto__ = (function (){var a__34580__auto__ = G__38236_38688;
var b__34581__auto__ = G__38239_38691;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})();
var b__34581__auto__ = G__38242_38694;
if((a__34580__auto__ >= b__34581__auto__)){
return a__34580__auto__;
} else {
return b__34581__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__36570__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3((thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__38251 = (buf_SINGLEQUOTE_[(0)]);
var G__38252 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__38251,G__38252) : f2.call(null,G__38251,G__38252));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__38253 = (buf_SINGLEQUOTE_[(1)]);
var G__38254 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__38253,G__38254) : f2.call(null,G__38253,G__38254));
})());

(buf_SINGLEQUOTE_[(2)] = (function (){var G__38255 = (buf_SINGLEQUOTE_[(2)]);
var G__38256 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__38255,G__38256) : f2.call(null,G__38255,G__38256));
})());

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((3) === cljs.core.count(v))){
var G__38258 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38259 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(0)]),(G__38259[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(1)]),(G__38259[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(2)]),(G__38259[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__38258[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38272 = self__.buf;
var G__38273 = (G__38272[(0)]);
var G__38274 = (G__38272[(1)]);
var G__38275 = (G__38272[(2)]);
var G__38276 = (((G__38273 * G__38273) + (G__38274 * G__38274)) + (G__38275 * G__38275));
return Math.sqrt(G__38276);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38281 = self__.buf;
var G__38282 = (G__38281[(0)]);
var G__38283 = (G__38281[(1)]);
var G__38284 = (G__38281[(2)]);
return (((G__38282 * G__38282) + (G__38283 * G__38283)) + (G__38284 * G__38284));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38285_38695 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__38286_38696 = v.buf;
(b[(0)] = (((G__38285_38695[(0)]) + (G__38286_38696[(0)])) * 0.5));

(b[(1)] = (((G__38285_38695[(1)]) + (G__38286_38696[(1)])) * 0.5));

(b[(2)] = (((G__38285_38695[(2)]) + (G__38286_38696[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__38285_38695[(0)]) + v) * 0.5));

(b[(1)] = (((G__38285_38695[(1)]) + v) * 0.5));

(b[(2)] = (((G__38285_38695[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__38285_38695[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__38285_38695[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__38285_38695[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38302_38697 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__38303_38698 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__38304_38699 = ((!(G__38302_38697))?typeof v === 'number':null);
var G__38305_38700 = ((!(G__38303_38698))?typeof v2 === 'number':null);
var G__38290_38701 = self__.buf;
var G__38291_38702 = ((G__38302_38697)?v.buf:null);
var G__38292_38703 = ((G__38303_38698)?v2.buf:null);
var G__38293_38704 = (G__38290_38701[(0)]);
var G__38294_38705 = (G__38290_38701[(1)]);
var G__38295_38706 = (G__38290_38701[(2)]);
var G__38296_38707 = ((G__38302_38697)?(G__38291_38702[(0)]):(cljs.core.truth_(G__38304_38699)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__38297_38708 = ((G__38302_38697)?(G__38291_38702[(1)]):(cljs.core.truth_(G__38304_38699)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__38298_38709 = ((G__38302_38697)?(G__38291_38702[(2)]):(cljs.core.truth_(G__38304_38699)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__38299_38710 = ((G__38303_38698)?(G__38292_38703[(0)]):(cljs.core.truth_(G__38305_38700)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__38300_38711 = ((G__38303_38698)?(G__38292_38703[(1)]):(cljs.core.truth_(G__38305_38700)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__38301_38712 = ((G__38303_38698)?(G__38292_38703[(2)]):(cljs.core.truth_(G__38305_38700)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(b[(0)] = (((G__38296_38707 - G__38293_38704) * G__38299_38710) + G__38293_38704));

(b[(1)] = (((G__38297_38708 - G__38294_38705) * G__38300_38711) + G__38294_38705));

(b[(2)] = (((G__38298_38709 - G__38295_38706) * G__38301_38712) + G__38295_38706));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__38318_38713 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__38319_38714 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__38320_38715 = ((!(G__38318_38713))?typeof b === 'number':null);
var G__38321_38716 = ((!(G__38319_38714))?typeof c === 'number':null);
var G__38306_38717 = self__.buf;
var G__38307_38718 = ((G__38318_38713)?b.buf:null);
var G__38308_38719 = ((G__38319_38714)?c.buf:null);
var G__38309_38720 = (G__38306_38717[(0)]);
var G__38310_38721 = (G__38306_38717[(1)]);
var G__38311_38722 = (G__38306_38717[(2)]);
var G__38312_38723 = ((G__38318_38713)?(G__38307_38718[(0)]):(cljs.core.truth_(G__38320_38715)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__38313_38724 = ((G__38318_38713)?(G__38307_38718[(1)]):(cljs.core.truth_(G__38320_38715)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__38314_38725 = ((G__38318_38713)?(G__38307_38718[(2)]):(cljs.core.truth_(G__38320_38715)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__38315_38726 = ((G__38319_38714)?(G__38308_38719[(0)]):(cljs.core.truth_(G__38321_38716)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__38316_38727 = ((G__38319_38714)?(G__38308_38719[(1)]):(cljs.core.truth_(G__38321_38716)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__38317_38728 = ((G__38319_38714)?(G__38308_38719[(2)]):(cljs.core.truth_(G__38321_38716)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_38729 = (((G__38312_38723 - G__38309_38720) * u) + G__38309_38720);
var y1_38730 = (((G__38313_38724 - G__38310_38721) * u) + G__38310_38721);
var z1_38731 = (((G__38314_38725 - G__38311_38722) * u) + G__38311_38722);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__38315_38726) * u) + G__38315_38726) - x1_38729) * v) + x1_38729));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__38316_38727) * u) + G__38316_38727) - y1_38730) * v) + y1_38730));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__38317_38728) * u) + G__38317_38728) - z1_38731) * v) + z1_38731));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$geom$core$PNormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = ___$1.thi$ng$geom$core$PMagnitude$mag$arity$1(null);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = (function (){var G__38325 = ((self__.buf[(2)]) / r);
return Math.asin(G__38325);
})());

(b[(2)] = (function (){var G__38328 = (self__.buf[(1)]);
var G__38329 = (self__.buf[(0)]);
return Math.atan2(G__38328,G__38329);
})());

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"thi.ng.geom.core.vector/Vec3");
});

/**
 * Positional factory function for thi.ng.geom.core.vector/Vec3.
 */
thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__38734){
var G__38732 = (((G__38734 instanceof thi.ng.geom.core.vector.Vec2))?G__38734.buf:G__38734.buf);
return (G__38732[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__38737){
var G__38735 = (((G__38737 instanceof thi.ng.geom.core.vector.Vec2))?G__38737.buf:G__38737.buf);
var G__38736 = (new Float32Array(2));
(G__38736[(0)] = (G__38735[(0)]));

(G__38736[(1)] = (G__38735[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__38736,null,cljs.core.meta(G__38737)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__38740){
var G__38738 = (((G__38740 instanceof thi.ng.geom.core.vector.Vec2))?G__38740.buf:G__38740.buf);
var G__38739 = (new Float32Array(3));
(G__38739[(0)] = (G__38738[(0)]));

(G__38739[(1)] = (G__38738[(0)]));

(G__38739[(2)] = (G__38738[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38739,null,cljs.core.meta(G__38740)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__38743){
var G__38741 = (((G__38743 instanceof thi.ng.geom.core.vector.Vec2))?G__38743.buf:G__38743.buf);
var G__38742 = (new Float32Array(3));
(G__38742[(0)] = (G__38741[(0)]));

(G__38742[(1)] = (G__38741[(0)]));

(G__38742[(2)] = (G__38741[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38742,null,cljs.core.meta(G__38743)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__38746){
if((G__38746 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38746)"));
}

var G__38744 = (((G__38746 instanceof thi.ng.geom.core.vector.Vec2))?G__38746.buf:G__38746.buf);
var G__38745 = (new Float32Array(3));
(G__38745[(0)] = (G__38744[(0)]));

(G__38745[(1)] = (G__38744[(0)]));

(G__38745[(2)] = (G__38744[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38745,null,cljs.core.meta(G__38746)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__38749){
var G__38747 = (((G__38749 instanceof thi.ng.geom.core.vector.Vec2))?G__38749.buf:G__38749.buf);
var G__38748 = (new Float32Array(2));
(G__38748[(0)] = (G__38747[(0)]));

(G__38748[(1)] = (G__38747[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__38748,null,cljs.core.meta(G__38749)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__38752){
var G__38750 = (((G__38752 instanceof thi.ng.geom.core.vector.Vec2))?G__38752.buf:G__38752.buf);
var G__38751 = (new Float32Array(3));
(G__38751[(0)] = (G__38750[(0)]));

(G__38751[(1)] = (G__38750[(1)]));

(G__38751[(2)] = (G__38750[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38751,null,cljs.core.meta(G__38752)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__38755){
var G__38753 = (((G__38755 instanceof thi.ng.geom.core.vector.Vec2))?G__38755.buf:G__38755.buf);
var G__38754 = (new Float32Array(3));
(G__38754[(0)] = (G__38753[(0)]));

(G__38754[(1)] = (G__38753[(1)]));

(G__38754[(2)] = (G__38753[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38754,null,cljs.core.meta(G__38755)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__38758){
if((G__38758 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38758)"));
}

var G__38756 = (((G__38758 instanceof thi.ng.geom.core.vector.Vec2))?G__38758.buf:G__38758.buf);
var G__38757 = (new Float32Array(3));
(G__38757[(0)] = (G__38756[(0)]));

(G__38757[(1)] = (G__38756[(1)]));

(G__38757[(2)] = (G__38756[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38757,null,cljs.core.meta(G__38758)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__38761){
if((G__38761 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38761)"));
}

var G__38759 = (((G__38761 instanceof thi.ng.geom.core.vector.Vec2))?G__38761.buf:G__38761.buf);
var G__38760 = (new Float32Array(2));
(G__38760[(0)] = (G__38759[(0)]));

(G__38760[(1)] = (G__38759[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__38760,null,cljs.core.meta(G__38761)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__38764){
if((G__38764 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38764)"));
}

var G__38762 = (((G__38764 instanceof thi.ng.geom.core.vector.Vec2))?G__38764.buf:G__38764.buf);
var G__38763 = (new Float32Array(3));
(G__38763[(0)] = (G__38762[(0)]));

(G__38763[(1)] = (G__38762[(2)]));

(G__38763[(2)] = (G__38762[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38763,null,cljs.core.meta(G__38764)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__38767){
if((G__38767 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38767)"));
}

var G__38765 = (((G__38767 instanceof thi.ng.geom.core.vector.Vec2))?G__38767.buf:G__38767.buf);
var G__38766 = (new Float32Array(3));
(G__38766[(0)] = (G__38765[(0)]));

(G__38766[(1)] = (G__38765[(2)]));

(G__38766[(2)] = (G__38765[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38766,null,cljs.core.meta(G__38767)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__38770){
if((G__38770 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38770)"));
}

var G__38768 = (((G__38770 instanceof thi.ng.geom.core.vector.Vec2))?G__38770.buf:G__38770.buf);
var G__38769 = (new Float32Array(3));
(G__38769[(0)] = (G__38768[(0)]));

(G__38769[(1)] = (G__38768[(2)]));

(G__38769[(2)] = (G__38768[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38769,null,cljs.core.meta(G__38770)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__38773){
var G__38771 = (((G__38773 instanceof thi.ng.geom.core.vector.Vec2))?G__38773.buf:G__38773.buf);
return (G__38771[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__38776){
var G__38774 = (((G__38776 instanceof thi.ng.geom.core.vector.Vec2))?G__38776.buf:G__38776.buf);
var G__38775 = (new Float32Array(2));
(G__38775[(0)] = (G__38774[(1)]));

(G__38775[(1)] = (G__38774[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__38775,null,cljs.core.meta(G__38776)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__38779){
var G__38777 = (((G__38779 instanceof thi.ng.geom.core.vector.Vec2))?G__38779.buf:G__38779.buf);
var G__38778 = (new Float32Array(3));
(G__38778[(0)] = (G__38777[(1)]));

(G__38778[(1)] = (G__38777[(0)]));

(G__38778[(2)] = (G__38777[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38778,null,cljs.core.meta(G__38779)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__38782){
var G__38780 = (((G__38782 instanceof thi.ng.geom.core.vector.Vec2))?G__38782.buf:G__38782.buf);
var G__38781 = (new Float32Array(3));
(G__38781[(0)] = (G__38780[(1)]));

(G__38781[(1)] = (G__38780[(0)]));

(G__38781[(2)] = (G__38780[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38781,null,cljs.core.meta(G__38782)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__38785){
if((G__38785 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38785)"));
}

var G__38783 = (((G__38785 instanceof thi.ng.geom.core.vector.Vec2))?G__38785.buf:G__38785.buf);
var G__38784 = (new Float32Array(3));
(G__38784[(0)] = (G__38783[(1)]));

(G__38784[(1)] = (G__38783[(0)]));

(G__38784[(2)] = (G__38783[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38784,null,cljs.core.meta(G__38785)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__38788){
var G__38786 = (((G__38788 instanceof thi.ng.geom.core.vector.Vec2))?G__38788.buf:G__38788.buf);
var G__38787 = (new Float32Array(2));
(G__38787[(0)] = (G__38786[(1)]));

(G__38787[(1)] = (G__38786[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__38787,null,cljs.core.meta(G__38788)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__38791){
var G__38789 = (((G__38791 instanceof thi.ng.geom.core.vector.Vec2))?G__38791.buf:G__38791.buf);
var G__38790 = (new Float32Array(3));
(G__38790[(0)] = (G__38789[(1)]));

(G__38790[(1)] = (G__38789[(1)]));

(G__38790[(2)] = (G__38789[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38790,null,cljs.core.meta(G__38791)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__38794){
var G__38792 = (((G__38794 instanceof thi.ng.geom.core.vector.Vec2))?G__38794.buf:G__38794.buf);
var G__38793 = (new Float32Array(3));
(G__38793[(0)] = (G__38792[(1)]));

(G__38793[(1)] = (G__38792[(1)]));

(G__38793[(2)] = (G__38792[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38793,null,cljs.core.meta(G__38794)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__38797){
if((G__38797 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38797)"));
}

var G__38795 = (((G__38797 instanceof thi.ng.geom.core.vector.Vec2))?G__38797.buf:G__38797.buf);
var G__38796 = (new Float32Array(3));
(G__38796[(0)] = (G__38795[(1)]));

(G__38796[(1)] = (G__38795[(1)]));

(G__38796[(2)] = (G__38795[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38796,null,cljs.core.meta(G__38797)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__38800){
if((G__38800 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38800)"));
}

var G__38798 = (((G__38800 instanceof thi.ng.geom.core.vector.Vec2))?G__38800.buf:G__38800.buf);
var G__38799 = (new Float32Array(2));
(G__38799[(0)] = (G__38798[(1)]));

(G__38799[(1)] = (G__38798[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__38799,null,cljs.core.meta(G__38800)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__38803){
if((G__38803 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38803)"));
}

var G__38801 = (((G__38803 instanceof thi.ng.geom.core.vector.Vec2))?G__38803.buf:G__38803.buf);
var G__38802 = (new Float32Array(3));
(G__38802[(0)] = (G__38801[(1)]));

(G__38802[(1)] = (G__38801[(2)]));

(G__38802[(2)] = (G__38801[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38802,null,cljs.core.meta(G__38803)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__38806){
if((G__38806 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38806)"));
}

var G__38804 = (((G__38806 instanceof thi.ng.geom.core.vector.Vec2))?G__38806.buf:G__38806.buf);
var G__38805 = (new Float32Array(3));
(G__38805[(0)] = (G__38804[(1)]));

(G__38805[(1)] = (G__38804[(2)]));

(G__38805[(2)] = (G__38804[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38805,null,cljs.core.meta(G__38806)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__38809){
if((G__38809 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38809)"));
}

var G__38807 = (((G__38809 instanceof thi.ng.geom.core.vector.Vec2))?G__38809.buf:G__38809.buf);
var G__38808 = (new Float32Array(3));
(G__38808[(0)] = (G__38807[(1)]));

(G__38808[(1)] = (G__38807[(2)]));

(G__38808[(2)] = (G__38807[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38808,null,cljs.core.meta(G__38809)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__38812){
if((G__38812 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38812)"));
}

var G__38810 = (((G__38812 instanceof thi.ng.geom.core.vector.Vec2))?G__38812.buf:G__38812.buf);
return (G__38810[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__38815){
if((G__38815 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38815)"));
}

var G__38813 = (((G__38815 instanceof thi.ng.geom.core.vector.Vec2))?G__38815.buf:G__38815.buf);
var G__38814 = (new Float32Array(2));
(G__38814[(0)] = (G__38813[(2)]));

(G__38814[(1)] = (G__38813[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__38814,null,cljs.core.meta(G__38815)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__38818){
if((G__38818 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38818)"));
}

var G__38816 = (((G__38818 instanceof thi.ng.geom.core.vector.Vec2))?G__38818.buf:G__38818.buf);
var G__38817 = (new Float32Array(3));
(G__38817[(0)] = (G__38816[(2)]));

(G__38817[(1)] = (G__38816[(0)]));

(G__38817[(2)] = (G__38816[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38817,null,cljs.core.meta(G__38818)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__38821){
if((G__38821 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38821)"));
}

var G__38819 = (((G__38821 instanceof thi.ng.geom.core.vector.Vec2))?G__38821.buf:G__38821.buf);
var G__38820 = (new Float32Array(3));
(G__38820[(0)] = (G__38819[(2)]));

(G__38820[(1)] = (G__38819[(0)]));

(G__38820[(2)] = (G__38819[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38820,null,cljs.core.meta(G__38821)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__38824){
if((G__38824 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38824)"));
}

var G__38822 = (((G__38824 instanceof thi.ng.geom.core.vector.Vec2))?G__38824.buf:G__38824.buf);
var G__38823 = (new Float32Array(3));
(G__38823[(0)] = (G__38822[(2)]));

(G__38823[(1)] = (G__38822[(0)]));

(G__38823[(2)] = (G__38822[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38823,null,cljs.core.meta(G__38824)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__38827){
if((G__38827 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38827)"));
}

var G__38825 = (((G__38827 instanceof thi.ng.geom.core.vector.Vec2))?G__38827.buf:G__38827.buf);
var G__38826 = (new Float32Array(2));
(G__38826[(0)] = (G__38825[(2)]));

(G__38826[(1)] = (G__38825[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__38826,null,cljs.core.meta(G__38827)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__38830){
if((G__38830 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38830)"));
}

var G__38828 = (((G__38830 instanceof thi.ng.geom.core.vector.Vec2))?G__38830.buf:G__38830.buf);
var G__38829 = (new Float32Array(3));
(G__38829[(0)] = (G__38828[(2)]));

(G__38829[(1)] = (G__38828[(1)]));

(G__38829[(2)] = (G__38828[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38829,null,cljs.core.meta(G__38830)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__38833){
if((G__38833 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38833)"));
}

var G__38831 = (((G__38833 instanceof thi.ng.geom.core.vector.Vec2))?G__38833.buf:G__38833.buf);
var G__38832 = (new Float32Array(3));
(G__38832[(0)] = (G__38831[(2)]));

(G__38832[(1)] = (G__38831[(1)]));

(G__38832[(2)] = (G__38831[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38832,null,cljs.core.meta(G__38833)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__38836){
if((G__38836 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38836)"));
}

var G__38834 = (((G__38836 instanceof thi.ng.geom.core.vector.Vec2))?G__38836.buf:G__38836.buf);
var G__38835 = (new Float32Array(3));
(G__38835[(0)] = (G__38834[(2)]));

(G__38835[(1)] = (G__38834[(1)]));

(G__38835[(2)] = (G__38834[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38835,null,cljs.core.meta(G__38836)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__38839){
if((G__38839 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38839)"));
}

var G__38837 = (((G__38839 instanceof thi.ng.geom.core.vector.Vec2))?G__38839.buf:G__38839.buf);
var G__38838 = (new Float32Array(2));
(G__38838[(0)] = (G__38837[(2)]));

(G__38838[(1)] = (G__38837[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__38838,null,cljs.core.meta(G__38839)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__38842){
if((G__38842 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38842)"));
}

var G__38840 = (((G__38842 instanceof thi.ng.geom.core.vector.Vec2))?G__38842.buf:G__38842.buf);
var G__38841 = (new Float32Array(3));
(G__38841[(0)] = (G__38840[(2)]));

(G__38841[(1)] = (G__38840[(2)]));

(G__38841[(2)] = (G__38840[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__38841,null,cljs.core.meta(G__38842)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__38845){
if((G__38845 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38845)"));
}

var G__38843 = (((G__38845 instanceof thi.ng.geom.core.vector.Vec2))?G__38845.buf:G__38845.buf);
var G__38844 = (new Float32Array(3));
(G__38844[(0)] = (G__38843[(2)]));

(G__38844[(1)] = (G__38843[(2)]));

(G__38844[(2)] = (G__38843[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__38844,null,cljs.core.meta(G__38845)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__38848){
if((G__38848 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__38848)"));
}

var G__38846 = (((G__38848 instanceof thi.ng.geom.core.vector.Vec2))?G__38848.buf:G__38848.buf);
var G__38847 = (new Float32Array(3));
(G__38847[(0)] = (G__38846[(2)]));

(G__38847[(1)] = (G__38846[(2)]));

(G__38847[(2)] = (G__38846[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__38847,null,cljs.core.meta(G__38848)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = cljs.core.count(n);
var temp__5455__auto__ = (function (){var and__3938__auto__ = ((1) === c);
if(and__3938__auto__){
var G__38850 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__38850) : keymap.call(null,G__38850));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var idx = temp__5455__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if((((c <= cljs.core.count(keymap))) && ((((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5455__auto____$1 = (function (){var G__38851 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__38851) : keymap.call(null,G__38851));
})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
(dest[(idx | (0))] = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));

var G__38852 = (i + (1));
var G__38853 = cljs.core.next(n__$1);
i = G__38852;
n__$1 = G__38853;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__38858 = null;
var G__38858__1 = (function (a){
return a;
});
var G__38858__2 = (function (a,b){
(a[(0)] = (function (){var G__38854 = (a[(0)]);
var G__38855 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38854,G__38855) : op.call(null,G__38854,G__38855));
})());

(a[(1)] = (function (){var G__38856 = (a[(1)]);
var G__38857 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38856,G__38857) : op.call(null,G__38856,G__38857));
})());

return a;
});
G__38858 = function(a,b){
switch(arguments.length){
case 1:
return G__38858__1.call(this,a);
case 2:
return G__38858__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38858.cljs$core$IFn$_invoke$arity$1 = G__38858__1;
G__38858.cljs$core$IFn$_invoke$arity$2 = G__38858__2;
return G__38858;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__38865 = null;
var G__38865__1 = (function (a){
return a;
});
var G__38865__2 = (function (a,b){
(a[(0)] = (function (){var G__38859 = (a[(0)]);
var G__38860 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38859,G__38860) : op.call(null,G__38859,G__38860));
})());

(a[(1)] = (function (){var G__38861 = (a[(1)]);
var G__38862 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38861,G__38862) : op.call(null,G__38861,G__38862));
})());

(a[(2)] = (function (){var G__38863 = (a[(2)]);
var G__38864 = (b[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38863,G__38864) : op.call(null,G__38863,G__38864));
})());

return a;
});
G__38865 = function(a,b){
switch(arguments.length){
case 1:
return G__38865__1.call(this,a);
case 2:
return G__38865__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38865.cljs$core$IFn$_invoke$arity$1 = G__38865__1;
G__38865.cljs$core$IFn$_invoke$arity$2 = G__38865__2;
return G__38865;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(var_args){
var G__38867 = arguments.length;
switch (G__38867) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(var_args){
var G__38870 = arguments.length;
switch (G__38870) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(var_args){
var G__38873 = arguments.length;
switch (G__38873) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(var_args){
var G__38876 = arguments.length;
switch (G__38876) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(var_args){
var G__38879 = arguments.length;
switch (G__38879) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(var_args){
var G__38882 = arguments.length;
switch (G__38882) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=thi.ng.geom.core.vector.js.map
