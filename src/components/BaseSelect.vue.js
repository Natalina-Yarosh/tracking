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
var validators_1 = require("@/validators");
var vue_1 = require("vue");
var constants_1 = require("../constants");
var functions_1 = require("@/functions");
var icons_1 = require("@/icons");
var BaseButton_vue_1 = require("./BaseButton.vue");
var BaseIcon_vue_1 = require("./BaseIcon.vue");
var props = defineProps({
    selected: [String, Number],
    options: {
        required: true,
        type: Array,
        validator: validators_1.validateSelectOptions,
    },
    placeholder: {
        required: true,
        type: String,
    },
});
var emit = defineEmits({
    select: validators_1.isSelectValueValid,
});
var isNotSelected = (0, vue_1.computed)(function () { return (0, validators_1.isUndefinedOrNull)(props.selected); });
function select(value) {
    emit('select', (0, functions_1.normalizeSelectValue)(value));
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-2" }));
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(BaseButton_vue_1.default, new BaseButton_vue_1.default(__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_NEUTRAL) })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (__VLS_ctx.BUTTON_TYPE_NEUTRAL) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
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
        __VLS_ctx.select(null);
    }
};
__VLS_2.slots.default;
/** @type {[typeof BaseIcon, ]} */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(BaseIcon_vue_1.default, new BaseIcon_vue_1.default({
    name: (__VLS_ctx.ICON_X_MARK),
}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
        name: (__VLS_ctx.ICON_X_MARK),
    }], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)(__assign({ onChange: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.select($event.target.value);
    } }, { class: "w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    selected: (__VLS_ctx.isNotSelected),
    disabled: true,
    value: "",
});
(__VLS_ctx.placeholder);
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var _b = _a[_i][0], value = _b.value, label = _b.label;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (value),
        value: (value),
        selected: (value === __VLS_ctx.selected),
    });
    (label);
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit, BUTTON_TYPE_NEUTRAL: constants_1.BUTTON_TYPE_NEUTRAL, ICON_X_MARK: icons_1.ICON_X_MARK, BaseButton: BaseButton_vue_1.default, BaseIcon: BaseIcon_vue_1.default, isNotSelected: isNotSelected, select: select });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit });
    },
});
; /* PartiallyEnd: #4569/main.vue */
