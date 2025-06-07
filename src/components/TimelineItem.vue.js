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
var BaseSelect_vue_1 = require("./BaseSelect.vue");
var TimelineStopwatch_vue_1 = require("./TimelineStopwatch.vue");
var TimelineHour_vue_1 = require("./TimelineHour.vue");
var validators_1 = require("@/validators");
var timeline_items_1 = require("@/timeline-items");
var activities_1 = require("@/activities");
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ class: "relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4" }));
/** @type {[typeof TimelineHour, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(TimelineHour_vue_1.default, new TimelineHour_vue_1.default({
    hour: (__VLS_ctx.timelineItem.hour),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        hour: (__VLS_ctx.timelineItem.hour),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof BaseSelect, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(BaseSelect_vue_1.default, new BaseSelect_vue_1.default(__assign({ 'onSelect': {} }, { placeholder: "Rest", selected: (__VLS_ctx.timelineItem.activityId), options: (__VLS_ctx.activitySelectOptions) })));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([__assign({ 'onSelect': {} }, { placeholder: "Rest", selected: (__VLS_ctx.timelineItem.activityId), options: (__VLS_ctx.activitySelectOptions) })], __VLS_functionalComponentArgsRest(__VLS_3), false));
var __VLS_6;
var __VLS_7;
var __VLS_8;
var __VLS_9 = {
    onSelect: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.updateTimelineItem(__VLS_ctx.timelineItem, { activityId: $event });
    }
};
var __VLS_5;
/** @type {[typeof TimelineStopwatch, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(TimelineStopwatch_vue_1.default, new TimelineStopwatch_vue_1.default({
    timelineItem: (__VLS_ctx.timelineItem),
}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
        timelineItem: (__VLS_ctx.timelineItem),
    }], __VLS_functionalComponentArgsRest(__VLS_10), false));
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { BaseSelect: BaseSelect_vue_1.default, TimelineStopwatch: TimelineStopwatch_vue_1.default, TimelineHour: TimelineHour_vue_1.default, updateTimelineItem: timeline_items_1.updateTimelineItem, activitySelectOptions: activities_1.activitySelectOptions });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
