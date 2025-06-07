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
var constants_1 = require("../constants");
var router_1 = require("../router");
var timeline_items_1 = require("../timeline-items");
function handleClick() {
    router_1.currentPage.value === constants_1.PAGE_TIMELINE ? (0, timeline_items_1.scrollToCurrentHour)(true) : (0, router_1.navigate)(constants_1.PAGE_TIMELINE);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ onClick: (__VLS_ctx.handleClick) }, { href: ("#".concat(__VLS_ctx.PAGE_TIMELINE)) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "../assets/img/logo.png", alt: "Logo" }, { class: "h-9" }));
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            PAGE_TIMELINE: constants_1.PAGE_TIMELINE,
            handleClick: handleClick,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
