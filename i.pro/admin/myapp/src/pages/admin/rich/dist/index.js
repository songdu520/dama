"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var react_draft_wysiwyg_1 = require("react-draft-wysiwyg");
var draft_js_1 = require("draft-js");
var draftjs_to_html_1 = require("draftjs-to-html");
require("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
var index = function () {
    var _a = react_1.useState(draft_js_1.EditorState.createEmpty()), editorState = _a[0], seteditorState = _a[1];
    var onEditorStateChange = function (editorState) {
        console.log(editorState);
        seteditorState(editorState);
    };
    var show = function () {
        console.log(draftjs_to_html_1["default"](editorState.getCurrentContent()));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Button, { onClick: show }, "\u6587\u672C"),
        React.createElement(antd_1.Card, { title: "\u5BCC\u6587\u672C\u7F16\u8F91\u5668" },
            React.createElement(react_draft_wysiwyg_1.Editor, { editorState: editorState, toolbarClassName: "toolbarClassName", wrapperClassName: "wrapperClassName", editorClassName: "editorClassName", onEditorStateChange: onEditorStateChange }))));
};
exports["default"] = index;
