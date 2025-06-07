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
var activities_1 = require("@/activities");
var ProgressItem_vue_1 = require("../components/ProgressItem.vue");
var TheProgressEmptyState_vue_1 = require("@/components/TheProgressEmptyState.vue");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.trackedActivities.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "divide-y" }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.trackedActivities)); _i < _a.length; _i++) {
        var activity = _a[_i][0];
        /** @type {[typeof ProgressItem, ]} */ ;
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(ProgressItem_vue_1.default, new ProgressItem_vue_1.default({
            key: (activity.id),
            activity: (activity),
        }));
        var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
                key: (activity.id),
                activity: (activity),
            }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    }
}
else {
    /** @type {[typeof TheProgressEmptyState, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(TheProgressEmptyState_vue_1.default, new TheProgressEmptyState_vue_1.default({}));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
    var __VLS_6 = {};
    var __VLS_5;
}
/** @type {__VLS_StyleScopedClasses['divide-y']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            trackedActivities: activities_1.trackedActivities,
            ProgressItem: ProgressItem_vue_1.default,
            TheProgressEmptyState: TheProgressEmptyState_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
