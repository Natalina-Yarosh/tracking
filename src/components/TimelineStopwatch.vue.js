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
var constants_1 = require("@/constants");
var validators_1 = require("@/validators");
var functions_1 = require("@/functions");
var BaseButton_vue_1 = require("./BaseButton.vue");
var BaseIcon_vue_1 = require("./BaseIcon.vue");
var time_js_1 = require("@/time.js");
var timeline_item_timer_1 = require("@/timeline-item-timer");
var icons_1 = require("@/icons");
var timeline_items_1 = require("@/timeline-items");
var __VLS_props = defineProps({
    timelineItem: {
        required: true,
        type: Object,
        validator: validators_1.isTimeLineItemValid,
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex w-full gap-2" }));
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseButton_vue_1.default, new BaseButton_vue_1.default(__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_DANGER), disabled: (!__VLS_ctx.timelineItem.activitySeconds) })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_DANGER), disabled: (!__VLS_ctx.timelineItem.activitySeconds) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3;
var __VLS_4;
var __VLS_5;
var __VLS_6 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.resetTimelineItemTimer(__VLS_ctx.timelineItem);
    }
};
__VLS_2.slots.default;
/** @type {[typeof BaseIcon, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default({
    name: (__VLS_ctx.ICON_ARROW_PATH),
}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
        name: (__VLS_ctx.ICON_ARROW_PATH),
    }], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl" }));
(__VLS_ctx.formatSeconds(__VLS_ctx.timelineItem.activitySeconds));
if (__VLS_ctx.timelineItem === __VLS_ctx.activeTimelineItem) {
    /** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(BaseButton_vue_1.default, new BaseButton_vue_1.default(__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_WARNING) })));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_WARNING) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = void 0;
    var __VLS_16 = {
        onClick: (__VLS_ctx.stopTimelineItemTimer)
    };
    __VLS_12.slots.default;
    /** @type {[typeof BaseIcon, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default({
        name: (__VLS_ctx.ICON_PAUSE),
    }));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
            name: (__VLS_ctx.ICON_PAUSE),
        }], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_12;
}
else {
    /** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
    // @ts-ignore
    var __VLS_20 = __VLS_asFunctionalComponent(BaseButton_vue_1.default, new BaseButton_vue_1.default(__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_SUCCESS), disabled: (__VLS_ctx.timelineItem.hour !== __VLS_ctx.now.getHours()) })));
    var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_SUCCESS), disabled: (__VLS_ctx.timelineItem.hour !== __VLS_ctx.now.getHours()) })], __VLS_functionalComponentArgsRest(__VLS_20), false));
    var __VLS_23 = void 0;
    var __VLS_24 = void 0;
    var __VLS_25 = void 0;
    var __VLS_26 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!!(__VLS_ctx.timelineItem === __VLS_ctx.activeTimelineItem))
                return;
            __VLS_ctx.startTimelineItemTimer(__VLS_ctx.timelineItem);
        }
    };
    __VLS_22.slots.default;
    /** @type {[typeof BaseIcon, ]} */ ;
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default({
        name: (__VLS_ctx.ICON_PLAY),
    }));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([{
            name: (__VLS_ctx.ICON_PLAY),
        }], __VLS_functionalComponentArgsRest(__VLS_27), false));
    var __VLS_22;
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { BUTTON_TYPE_DANGER: constants_1.BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS: constants_1.BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING: constants_1.BUTTON_TYPE_WARNING, formatSeconds: functions_1.formatSeconds, BaseButton: BaseButton_vue_1.default, BaseIcon: BaseIcon_vue_1.default, now: time_js_1.now, resetTimelineItemTimer: timeline_item_timer_1.resetTimelineItemTimer, stopTimelineItemTimer: timeline_item_timer_1.stopTimelineItemTimer, startTimelineItemTimer: timeline_item_timer_1.startTimelineItemTimer, ICON_ARROW_PATH: icons_1.ICON_ARROW_PATH, ICON_PAUSE: icons_1.ICON_PAUSE, ICON_PLAY: icons_1.ICON_PLAY, activeTimelineItem: timeline_items_1.activeTimelineItem });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
