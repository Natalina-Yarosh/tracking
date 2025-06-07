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
var functions_js_1 = require("@/functions.js");
var validators_1 = require("@/validators");
var timeline_items_1 = require("@/timeline-items");
var props = defineProps({
    activity: {
        required: true,
        type: Object,
        validator: validators_1.isActivityValid,
    },
});
var classes = (0, vue_1.computed)(function () { return [
    'flex items-center rounded px-2 font-mono text-xl',
    remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
]; });
var remainingSeconds = (0, vue_1.computed)(function () {
    return (0, timeline_items_1.calculateTrackedActivitySeconds)(timeline_items_1.timelineItems.value, props.activity) -
        props.activity.secondsToComplete;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (__VLS_ctx.classes) }));
(__VLS_ctx.formatSecondsWithSign(__VLS_ctx.remainingSeconds));
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { formatSecondsWithSign: functions_js_1.formatSecondsWithSign, classes: classes, remainingSeconds: remainingSeconds });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
