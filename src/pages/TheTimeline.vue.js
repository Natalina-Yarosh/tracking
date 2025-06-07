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
var vue_1 = require("vue");
var TimelineItem_vue_1 = require("../components/TimelineItem.vue");
var timeline_items_js_1 = require("@/timeline-items.js");
var TheTimelineIndicator_vue_1 = require("@/components/TheTimelineIndicator.vue");
(0, vue_1.onActivated)(timeline_items_js_1.scrollToCurrentHour);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
/** @type {[typeof TheTimelineIndicator, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(TheTimelineIndicator_vue_1.default, new TheTimelineIndicator_vue_1.default({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "mt-7" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.timelineItems)); _i < _a.length; _i++) {
    var timelineItem = _a[_i][0];
    /** @type {[typeof TimelineItem, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(TimelineItem_vue_1.default, new TimelineItem_vue_1.default({
        key: (timelineItem.hour),
        timelineItem: (timelineItem),
        dataHour: (timelineItem.hour),
    }));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
            key: (timelineItem.hour),
            timelineItem: (timelineItem),
            dataHour: (timelineItem.hour),
        }], __VLS_functionalComponentArgsRest(__VLS_3), false));
}
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-7']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            TimelineItem: TimelineItem_vue_1.default,
            timelineItems: timeline_items_js_1.timelineItems,
            TheTimelineIndicator: TheTimelineIndicator_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
