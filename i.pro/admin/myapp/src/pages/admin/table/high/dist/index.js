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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var api_1 = require("@/utils/api");
var icons_1 = require("@ant-design/icons");
var confirm = antd_1.Modal.confirm;
var showDeleteConfirm = function (id) {
    return function () {
        confirm({
            title: " Are you sure delete this " + id + "?",
            icon: React.createElement(icons_1.ExclamationCircleOutlined, null),
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: function () {
                console.log('OK');
            },
            onCancel: function () {
                console.log('Cancel');
            }
        });
    };
};
var columns = [
    {
        title: 'id',
        dataIndex: 'id',
        width: 120,
        fixed: 'left'
    },
    {
        title: 'username',
        dataIndex: 'username',
        width: 120,
        fixed: 'left'
    },
    {
        title: 'sex',
        dataIndex: 'sex',
        width: 120,
        render: function (v) { return v === 1 ? "男" : "女"; }
    },
    {
        title: 'state',
        dataIndex: 'state',
        width: 120,
        render: function (v) {
            var state = {
                1: "风华浪子",
                2: "创业者",
                3: "北大才子",
                4: "百度FE",
                5: "咸鱼一条"
            };
            return state[v];
        }
    },
    {
        title: 'interest',
        dataIndex: 'interest',
        width: 120
    },
    {
        title: 'birthday',
        dataIndex: 'birthday',
        width: 120
    },
    {
        title: 'isMarried1',
        dataIndex: 'isMarried1',
        width: 120
    },
    {
        title: 'isMarried2',
        dataIndex: 'isMarried2',
        width: 120
    },
    {
        title: 'isMarried3',
        dataIndex: 'isMarried3',
        width: 120
    },
    {
        title: 'isMarried4',
        dataIndex: 'isMarried4',
        width: 120
    },
    {
        title: 'isMarried5',
        dataIndex: 'isMarried5',
        width: 120
    },
    {
        title: 'isMarried6',
        dataIndex: 'isMarried6',
        width: 120
    },
    {
        title: 'isMarried7',
        dataIndex: 'isMarried7',
        width: 120
    },
    {
        title: 'isMarried8',
        dataIndex: 'isMarried8',
        width: 120
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: 120
    },
    {
        title: 'time',
        dataIndex: 'time',
        width: 120,
        fixed: 'right'
    },
    {
        title: '操作',
        dataIndex: '',
        width: 120,
        fixed: 'right',
        render: function (v) { return (React.createElement(antd_1.Button, { onClick: showDeleteConfirm(v._id), type: "dashed" }, " Delete")); }
    },
];
var columns1 = [
    {
        title: 'Address',
        dataIndex: 'address',
        width: 120
    },
    {
        title: 'birthday',
        dataIndex: 'birthday',
        width: 120
    },
    {
        title: 'id',
        dataIndex: 'id',
        width: 120,
        sorter: {
            compare: function (a, b) { return b.id - a.id; },
            multiple: 3
        }
    },
    {
        title: 'isMarried1',
        dataIndex: 'isMarried1',
        width: 120
    },
    {
        title: 'sex',
        dataIndex: 'sex',
        width: 120
    },
    {
        title: 'state',
        dataIndex: 'state',
        width: 120
    },
    {
        title: 'time',
        dataIndex: 'time',
        width: 120
    },
    {
        title: 'username',
        dataIndex: 'username',
        width: 120
    }
];
var index = function () {
    var _a = react_1.useState([]), hightablesList = _a[0], setHightablesList = _a[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, tablesList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.getHightablesList()];
                    case 1:
                        res = _a.sent();
                        if (res.status === 0) {
                            console.log(res.result);
                            tablesList = res.result.map(function (item) {
                                return __assign(__assign({}, item), { key: item.id });
                            });
                            setHightablesList(tablesList);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (React.createElement(antd_1.Space, { direction: "vertical", style: { width: "100%" } },
        React.createElement(antd_1.Card, { title: " \u5934\u90E8\u56FA\u5B9A" },
            React.createElement(antd_1.Table, { columns: columns, dataSource: hightablesList, scroll: { y: 500 } })),
        React.createElement(antd_1.Card, { title: " \u8868\u683C\u6392\u5E8F" },
            React.createElement(antd_1.Table, { columns: columns1, dataSource: hightablesList }))));
};
exports["default"] = index;
