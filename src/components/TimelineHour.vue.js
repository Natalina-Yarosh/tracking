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
var validators_1 = require("@/validators");
var timeline_items_js_1 = require("@/timeline-items.js");
var time_js_1 = require("@/time.js");
var props = defineProps({
    hour: {
        required: true,
        type: Number,
        validator: validators_1.isHourValid,
    },
});
var classes = (0, vue_1.computed)(function () { return [
    'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg ',
    props.hour === time_js_1.now.value.getHours()
        ? 'bg-purple-900 font-black text-white'
        : 'bg-gray-100 text-gray-500',
]; });
var formattedHour = "".concat(props.hour.toString().padStart(2, 0), ":00");
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
        __VLS_ctx.scrollToHour(__VLS_ctx.hour);
    } }, { href: "#" }), { class: (__VLS_ctx.classes) }));
(__VLS_ctx.formattedHour);
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { scrollToHour: timeline_items_js_1.scrollToHour, classes: classes, formattedHour: formattedHour });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
