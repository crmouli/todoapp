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
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoList.prototype.render = function () {
        return React.createElement("div", { className: "todolist not-done" },
            React.createElement("h1", null, "Todos"),
            React.createElement("input", { type: "text", className: "form-control add-todo", placeholder: "Add todo", onKeyDown: this.props.createTodo }),
            React.createElement("button", { id: "checkAll", className: "btn btn-success " + (this.props.itemsLeft > 0 ? '' : 'disabled'), onClick: this.props.markAllDone }, "Mark all as done"),
            React.createElement("hr", null),
            React.createElement("ul", { id: "sortable", className: "list-unstyled" }, this.props.children),
            React.createElement("div", { className: "todo-footer" },
                React.createElement("strong", null,
                    React.createElement("span", { className: "count-todos" }, this.props.itemsLeft)),
                " Items Left"));
    };
    TodoList.propTypes = {
        createTodo: PropTypes.func.isRequired,
        itemsLeft: PropTypes.number.isRequired,
        markAllDone: PropTypes.func.isRequired
    };
    return TodoList;
}(React.Component));
exports.TodoList = TodoList;
