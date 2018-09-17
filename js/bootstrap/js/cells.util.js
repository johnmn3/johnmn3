goog.provide('cells.util');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
cells.util.unique_id = (function cells$util$unique_id(){
return cljs_uuid_utils.core.make_random_uuid();
});

//# sourceMappingURL=cells.util.js.map
