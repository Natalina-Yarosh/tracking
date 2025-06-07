"use strict";
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var constants_js_1 = require("@/constants.js");
var time_1 = require("@/time");
var indicatorRef = (0, vue_1.ref)();
var topOffset = (0, vue_1.computed)(function () { return (time_1.secondsSinceMidnightInPercentage.value * getTimelineHeight()) / constants_js_1.HUNDRED_PERCENT; });
function getTimelineHeight() {
    var _a;
    return (_a = indicatorRef.value) === null || _a === void 0 ? void 0 : _a.parentNode.getBoundingClientRect().height;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)(__assign(__assign({ ref: "indicatorRef" }, { class: "pointer-events-none absolute z-10 w-full border-b-2 border-red-600" }), { style: ({ top: "".concat(__VLS_ctx.topOffset, "px") }) }));
/** @type {typeof __VLS_ctx.indicatorRef} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-600']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            indicatorRef: indicatorRef,
            topOffset: topOffset,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
