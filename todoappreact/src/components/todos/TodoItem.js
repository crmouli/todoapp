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
var PropTypes = require("prop-types");
var Todo_1 = require("./../../state/todos/Todo");
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoItem.prototype.render = function () {
        return React.createElement("li", { key: this.props.id, className: "ui-state-default" },
            React.createElement("div", { className: "checkbox" },
                React.createElement("label", null,
                    React.createElement("input", { type: "checkbox", checked: this.props.status === Todo_1.TodoStatus.DONE, onChange: this.props.statusChange }),
                    this.props.title)));
    };
    TodoItem.propTypes = {
        title: PropTypes.string.isRequired,
        status: PropTypes.any.isRequired,
        id: PropTypes.string.isRequired,
        statusChange: PropTypes.func.isRequired
    };
    return TodoItem;
}(React.Component));
exports.TodoItem = TodoItem;
