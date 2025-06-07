"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/main.css");
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var storage_js_1 = require("@/storage.js");
var time_1 = require("./time");
var name = 2;
console.log(name);
(0, storage_js_1.syncState)();
(0, time_1.startCurrentDateTimer)();
document.addEventListener('visibilitychange', function () {
    (0, storage_js_1.syncState)(document.visibilityState === 'visible');
});
(0, vue_1.createApp)(App_vue_1.default).mount('#app');
