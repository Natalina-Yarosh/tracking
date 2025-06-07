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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var router_1 = require("../router");
var BaseIcon_vue_1 = require("./BaseIcon.vue");
var icons_1 = require("../icons");
var total_progress_js_1 = require("@/composables/total-progress.js");
var _a = (0, total_progress_js_1.useTotalProgress)(), colorClass = _a.colorClass, percentage = _a.percentage;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.navigate(__VLS_ctx.PAGE_PROGRESS);
    } }, { href: ("#".concat(__VLS_ctx.PAGE_PROGRESS)) }), { class: "text-sm" }));
if (__VLS_ctx.percentage < __VLS_ctx.HUNDRED_PERCENT) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center gap-1" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "font-mono" }));
    (__VLS_ctx.percentage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div)(__assign({ class: ("w-3 h-3 rounded-full ".concat(__VLS_ctx.colorClass)) }));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center gap-1" }));
    /** @type {[typeof BaseIcon, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default(__assign({ name: (__VLS_ctx.ICON_CHECK_CIRCLE) }, { class: "h-7 text-green-500" })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ name: (__VLS_ctx.ICON_CHECK_CIRCLE) }, { class: "h-7 text-green-500" })], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['h-7']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-500']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            HUNDRED_PERCENT: constants_1.HUNDRED_PERCENT,
            PAGE_PROGRESS: constants_1.PAGE_PROGRESS,
            navigate: router_1.navigate,
            BaseIcon: BaseIcon_vue_1.default,
            ICON_CHECK_CIRCLE: icons_1.ICON_CHECK_CIRCLE,
            colorClass: colorClass,
            percentage: percentage,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
