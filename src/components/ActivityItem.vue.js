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
var BaseButton_vue_1 = require("./BaseButton.vue");
var BaseIcon_vue_1 = require("./BaseIcon.vue");
var BaseSelect_vue_1 = require("./BaseSelect.vue");
var constants_1 = require("../constants");
var validators_1 = require("@/validators");
var activities_js_1 = require("@/activities.js");
var timeline_items_js_1 = require("@/timeline-items.js");
var icons_1 = require("@/icons");
var RemainingActivitySeconds_vue_1 = require("./RemainingActivitySeconds.vue");
var __VLS_props = defineProps({
    activity: {
        required: true,
        type: Object,
        validator: validators_1.isActivityValid,
    },
});
function deleteAndResetActivity(activity) {
    (0, timeline_items_js_1.resetTimelineItemActivities)(timeline_items_js_1.timelineItems.value, activity);
    (0, activities_js_1.deleteActivity)(activity);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ class: "flex flex-col gap-2 p-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center gap-2" }));
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseButton_vue_1.default, new BaseButton_vue_1.default(__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_DANGER) })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_DANGER) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
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
        __VLS_ctx.deleteAndResetActivity(__VLS_ctx.activity);
    }
};
__VLS_2.slots.default;
/** @type {[typeof BaseIcon, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default({
    name: (__VLS_ctx.ICON_TRASH),
}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
        name: (__VLS_ctx.ICON_TRASH),
    }], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "truncate text-xl" }));
(__VLS_ctx.activity.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-2" }));
/** @type {[typeof BaseSelect, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(BaseSelect_vue_1.default, new BaseSelect_vue_1.default(__assign(__assign({ 'onSelect': {} }, { class: "font-mono flex-grow" }), { placeholder: "hh:mm", selected: (__VLS_ctx.activity.secondsToComplete || null), options: (__VLS_ctx.PERIOD_SELECT_OPTIONS) })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign(__assign({ 'onSelect': {} }, { class: "font-mono flex-grow" }), { placeholder: "hh:mm", selected: (__VLS_ctx.activity.secondsToComplete || null), options: (__VLS_ctx.PERIOD_SELECT_OPTIONS) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_13;
var __VLS_14;
var __VLS_15;
var __VLS_16 = {
    onSelect: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.updateActivity(__VLS_ctx.activity, { secondsToComplete: $event || 0 });
    }
};
var __VLS_12;
if (__VLS_ctx.activity.secondsToComplete) {
    /** @type {[typeof RemainingActivitySeconds, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(RemainingActivitySeconds_vue_1.default, new RemainingActivitySeconds_vue_1.default({
        activity: (__VLS_ctx.activity),
    }));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
            activity: (__VLS_ctx.activity),
        }], __VLS_functionalComponentArgsRest(__VLS_17), false));
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { BaseButton: BaseButton_vue_1.default, BaseIcon: BaseIcon_vue_1.default, BaseSelect: BaseSelect_vue_1.default, BUTTON_TYPE_DANGER: constants_1.BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS: constants_1.PERIOD_SELECT_OPTIONS, updateActivity: activities_js_1.updateActivity, ICON_TRASH: icons_1.ICON_TRASH, RemainingActivitySeconds: RemainingActivitySeconds_vue_1.default, deleteAndResetActivity: deleteAndResetActivity });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props);
    },
});
; /* PartiallyEnd: #4569/main.vue */
