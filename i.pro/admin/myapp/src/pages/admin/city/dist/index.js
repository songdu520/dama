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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var Option = antd_1.Select.Option;
var api_1 = require("@/utils/api");
var index = function () {
    var _a = react_1.useState([]), cities = _a[0], setcities = _a[1];
    var _b = react_1.useState([]), manageList = _b[0], setManageList = _b[1];
    var _c = react_1.useState([]), now = _c[0], setnow = _c[1];
    var form = antd_1.Form.useForm()[0];
    //获取管理城市的数据
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.getManageList()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        list = res.result.map(function (item) {
                            return __assign(__assign({}, item), { key: item._id });
                        });
                        setManageList(list);
                        setnow(list);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    //管理城市的数据
    var columns = [
        {
            title: '城市ID',
            dataIndex: '_id'
        },
        {
            title: '城市名称',
            dataIndex: 'city'
        },
        {
            title: '用车模式',
            dataIndex: 'useCar',
            render: function (value) { return value === '1' ? '禁停区' : '停车点'; }
        },
        {
            title: '营运模式',
            dataIndex: 'operating',
            render: function (value) { return value === '1' ? '加盟' : '自营'; }
        },
        {
            title: '城市管理员',
            dataIndex: 'admin'
        },
        {
            title: '城市开通时间',
            dataIndex: 'openTime'
        }
    ];
    var dataSource = now;
    //表单提交
    var onFinish = function (values) {
        console.log('Success:', values);
        var list = __spreadArrays(manageList);
        if (values.city) {
            var newlist = list.filter(function (item) {
                return values.city === item.city;
            });
            setnow(newlist);
        }
        else if (values.operating) {
            var newlist = list.filter(function (item) {
                return values.operating === item.operating;
            });
            setnow(newlist);
        }
        else if (values.useCar) {
            var newlist = list.filter(function (item) {
                return values.useCar === item.useCar;
            });
            setnow(newlist);
        }
    };
    //获取城市
    var getCities = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!values) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.getCitiesList()];
                case 1:
                    res = _a.sent();
                    console.log(res);
                    setcities(res.cts);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Card, { title: "\u767B\u5F55\u884C\u5185\u8868\u5355" },
            React.createElement(antd_1.Form, { form: form, name: "horizontal_login", layout: "inline", onFinish: onFinish },
                React.createElement(antd_1.Form.Item, { name: "city", label: "\u57CE\u5E02" },
                    React.createElement(antd_1.Select, { style: { width: 120 }, onDropdownVisibleChange: getCities }, cities.map(function (item) {
                        return React.createElement(Option, { value: item.nm, key: item.id }, item.nm);
                    }))),
                React.createElement(antd_1.Form.Item, { name: "useCar", label: "\u7528\u8F66\u6A21\u5F0F" },
                    React.createElement(antd_1.Select, { style: { width: 120 } },
                        React.createElement(Option, { value: "1" }, "\u6307\u5B9A\u505C\u8F66"),
                        React.createElement(Option, { value: "2" }, "\u7981\u505C\u8F66"))),
                React.createElement(antd_1.Form.Item, { name: "operating", label: "\u8425\u8FD0\u6A21\u5F0F" },
                    React.createElement(antd_1.Select, { style: { width: 120 } },
                        React.createElement(Option, { value: "1" }, "\u52A0\u76DF"),
                        React.createElement(Option, { value: "2" }, "\u81EA\u8425"))),
                React.createElement(antd_1.Form.Item, { shouldUpdate: true }, function () { return (React.createElement(React.Fragment, null,
                    React.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "\u67E5\u8BE2"),
                    React.createElement(antd_1.Button, { htmlType: "reset" }, "\u91CD\u7F6E"))); }))),
        React.createElement(antd_1.Card, null,
            React.createElement(antd_1.Table, { dataSource: dataSource, columns: columns }))));
};
exports["default"] = index;
