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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = require("@/validators");
var constants_1 = require("../constants");
var typeClasses = (_a = {},
    _a[constants_1.BUTTON_TYPE_NEUTRAL] = 'bg-gray-100 p-3 enabled:hover:bg-gray-200',
    _a[constants_1.BUTTON_TYPE_DANGER] = 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white',
    _a[constants_1.BUTTON_TYPE_PRIMARY] = 'bg-blue-500 p-3 enabled:hover:bg-blue-600 text-white',
    _a[constants_1.BUTTON_TYPE_SUCCESS] = 'bg-green-500 p-3 enabled:hover:bg-green-600 text-white',
    _a[constants_1.BUTTON_TYPE_WARNING] = 'bg-yellow-500 p-3 enabled:hover:bg-yellow-600 text-white',
    _a);
debugger; /* PartiallyEnd: #3632/both.vue */
exports.default = await (function () { return __awaiter(void 0, void 0, void 0, function () {
    var props, classes, __VLS_ctx, __VLS_components, __VLS_directives, __VLS_0, __VLS_1, __VLS_dollars, __VLS_self, __VLS_component;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                props = defineProps({
                    type: {
                        default: constants_1.BUTTON_TYPE_PRIMARY,
                        type: String,
                        validator: validators_1.isButtonTypeValid,
                    },
                });
                classes = [
                    'rounded  disabled:cursor-not-allowed disabled:opacity-50',
                    typeClasses[props.type],
                ];
                debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
                __VLS_ctx = {};
                __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: (__VLS_ctx.classes) }));
                __VLS_0 = {};
                __VLS_1 = __VLS_0;
                return [4 /*yield*/, Promise.resolve().then(function () { return require('vue'); })];
            case 1:
                __VLS_self = (_a.sent()).defineComponent({
                    setup: function () {
                        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { classes: classes });
                    },
                });
                return [4 /*yield*/, Promise.resolve().then(function () { return require('vue'); })];
            case 2:
                __VLS_component = (_a.sent()).defineComponent({
                    setup: function () {
                        return __assign({ $props: __VLS_makeOptional(props) }, props);
                    },
                });
                return [2 /*return*/, {}];
        }
    });
}); })(); /* PartiallyEnd: #4569/main.vue */
