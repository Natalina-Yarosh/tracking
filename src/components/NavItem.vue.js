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
var validators_1 = require("@/validators");
var router_1 = require("../router");
var BaseIcon_vue_1 = require("./BaseIcon.vue");
var timeline_items_1 = require("../timeline-items");
var constants_1 = require("../constants");
var props = defineProps({
    navItem: {
        required: true,
        type: Object,
        validator: validators_1.isNavItemValid,
    },
});
var classes = (0, vue_1.computed)(function () { return [
    'flex flex-col items-center p-2 text-xs capitalize',
    props.navItem.page === router_1.currentPage.value ? 'bg-gray-200' : 'hover:bg-gray-100',
]; });
function handleClick() {
    router_1.currentPage.value === constants_1.PAGE_TIMELINE && props.navItem.page === constants_1.PAGE_TIMELINE
        ? (0, timeline_items_1.scrollToCurrentHour)(true)
        : (0, router_1.navigate)(props.navItem.page);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ class: "flex-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: (__VLS_ctx.handleClick) }, { href: ("#".concat(__VLS_ctx.navItem.page)) }), { class: (__VLS_ctx.classes) }));
/** @type {[typeof BaseIcon, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default(__assign({ name: (__VLS_ctx.navItem.icon) }, { class: "h-6 w-6" })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ name: (__VLS_ctx.navItem.icon) }, { class: "h-6 w-6" })], __VLS_functionalComponentArgsRest(__VLS_0), false));
(__VLS_ctx.navItem.page);
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { BaseIcon: BaseIcon_vue_1.default, classes: classes, handleClick: handleClick });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(props) }, props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
