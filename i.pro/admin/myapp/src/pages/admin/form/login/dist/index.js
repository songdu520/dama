"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var index = function () {
    var form = antd_1.Form.useForm()[0];
    var _a = react_1.useState({}), forceUpdate = _a[1];
    var layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    var tailLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    // To disable submit button at the beginning.
    react_1.useEffect(function () {
        forceUpdate({});
    }, []);
    var onFinish = function (values) {
        console.log('Finish:', values);
    };
    var onFinishFailed = function (errorInfo) {
        console.log('Failed:', errorInfo);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Card, { title: "\u767B\u5F55\u884C\u5185\u8868\u5355" },
            react_1["default"].createElement(antd_1.Form, { form: form, name: "horizontal_login", layout: "inline", onFinish: onFinish },
                react_1["default"].createElement(antd_1.Form.Item, { name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                    react_1["default"].createElement(antd_1.Input, { prefix: react_1["default"].createElement(icons_1.UserOutlined, { className: "site-form-item-icon" }), placeholder: "Username" })),
                react_1["default"].createElement(antd_1.Form.Item, { name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                    react_1["default"].createElement(antd_1.Input, { prefix: react_1["default"].createElement(icons_1.LockOutlined, { className: "site-form-item-icon" }), type: "password", placeholder: "Password" })),
                react_1["default"].createElement(antd_1.Form.Item, { shouldUpdate: true }, function () { return (react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit", disabled: !form.isFieldsTouched(true) ||
                        !!form.getFieldsError().filter(function (_a) {
                            var errors = _a.errors;
                            return errors.length;
                        }).length }, "Log in")); }))),
        react_1["default"].createElement(antd_1.Card, { title: "\u767B\u5F55\u6C34\u5E73\u8868\u5355" },
            react_1["default"].createElement(antd_1.Form, __assign({}, layout, { name: "basic", initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed }),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                    react_1["default"].createElement(antd_1.Input, null)),
                react_1["default"].createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                    react_1["default"].createElement(antd_1.Input.Password, null)),
                react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailLayout, { name: "remember", valuePropName: "checked" }),
                    react_1["default"].createElement(antd_1.Checkbox, null, "Remember me")),
                react_1["default"].createElement(antd_1.Form.Item, __assign({}, tailLayout),
                    react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"))))));
};
exports["default"] = index;
