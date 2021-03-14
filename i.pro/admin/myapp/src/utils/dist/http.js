"use strict";
exports.__esModule = true;
var umi_request_1 = require("umi-request");
var antd_1 = require("antd");
var request = umi_request_1.extend({
    prefix: 'http://pudge.wang:3000/api',
    timeout: 20000
});
// 提前对响应做异常处理
request.interceptors.response.use(function (response) {
    var codeMaps = {
        404: "地址错误",
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。'
    };
    if (codeMaps[response.status]) {
        antd_1.message.error(codeMaps[response.status]);
    }
    else {
        return response;
    }
});
var http = {
    get: function (url, params) {
        return request
            .get(url, {
            method: 'get',
            params: params
        })
            .then(function (response) {
            return response;
        })["catch"](function (error) {
            return antd_1.message.error(error.message);
        });
    },
    post: function (url, params) {
        return request
            .post(url, {
            data: params
        })
            .then(function (response) {
            return response;
        })["catch"](function (error) {
            return antd_1.message.error(error.message);
        });
    }
};
exports["default"] = http;
