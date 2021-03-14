"use strict";
exports.__esModule = true;
exports.loginApi = exports.getManageList = exports.getCitiesList = exports.getHightablesList = exports.getGalleryList = void 0;
var http_1 = require("./http");
// export const getGalleryApi= (params?: Object) => http.get("/pics/list",params)
exports.getGalleryList = function (params) { return http_1["default"].get("/pics/list", params); };
exports.getHightablesList = function (params) { return http_1["default"].get("/hightables/list", params); };
exports.getCitiesList = function (params) { return http_1["default"].get("/cities/list", params); };
exports.getManageList = function (params) { return http_1["default"].post("/cities/manage/list", params); };
//登录
exports.loginApi = function (params) { return http_1["default"].post('/users/login', params); };
