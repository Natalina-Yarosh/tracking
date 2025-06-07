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
var icons_1 = require("../icons");
var validators_1 = require("../validators");
var __VLS_props = defineProps({
    name: {
        required: true,
        type: String,
        validator: validators_1.isIconValid,
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = ((__VLS_ctx.ICONS[__VLS_ctx.name]));
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: (__VLS_ctx.$attrs.class || 'h-8') })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: (__VLS_ctx.$attrs.class || 'h-8') })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
var __VLS_3;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { ICONS: icons_1.ICONS });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
