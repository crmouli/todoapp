"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var DoneList = /** @class */ (function (_super) {
    __extends(DoneList, _super);
    function DoneList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoneList.prototype.render = function () {
        return React.createElement("div", { className: "todolist" },
            React.createElement("h1", null, "Already Done"),
            React.createElement("ul", { id: "done-items", className: "list-unstyled" }, this.props.children));
    };
    return DoneList;
}(React.Component));
exports.DoneList = DoneList;
