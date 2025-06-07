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
var activities_js_1 = require("@/activities.js");
var ActivityItem_vue_1 = require("../components/ActivityItem.vue");
var TheActivityForm_vue_1 = require("@/components/TheActivityForm.vue");
var TheActivitiesEmptyState_vue_1 = require("@/components/TheActivitiesEmptyState.vue");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col grow" }));
if (__VLS_ctx.activities.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "divide-y grow" }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.activities)); _i < _a.length; _i++) {
        var activity = _a[_i][0];
        /** @type {[typeof ActivityItem, ]} */ ;
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(ActivityItem_vue_1.default, new ActivityItem_vue_1.default({
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
    /** @type {[typeof TheActivitiesEmptyState, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(TheActivitiesEmptyState_vue_1.default, new TheActivitiesEmptyState_vue_1.default({}));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
}
/** @type {[typeof TheActivityForm, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(TheActivityForm_vue_1.default, new TheActivityForm_vue_1.default({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['grow']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-y']} */ ;
/** @type {__VLS_StyleScopedClasses['grow']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            activities: activities_js_1.activities,
            ActivityItem: ActivityItem_vue_1.default,
            TheActivityForm: TheActivityForm_vue_1.default,
            TheActivitiesEmptyState: TheActivitiesEmptyState_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
