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
var TodoItem_1 = require("./components/todos/TodoItem");
var DoneItem_1 = require("./components/todos/DoneItem");
var Todo_1 = require("./state/todos/Todo");
var DoneList_1 = require("./components/todos/DoneList");
var TodoList_1 = require("./components/todos/TodoList");
var react_redux_1 = require("react-redux");
var PropTypes = require("prop-types");
var todo_1 = require("./state/todos/actions/todo");
var TodoApp = /** @class */ (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp() {
        return _super.call(this) || this;
        // this.state = null;
        // this.todos = this.state.todos;
    }
    // uuidv4() {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });
    // }
    // handleMarkAllDone() {
    //     this.todos.forEach((todo) => todo.status = TodoStatus.DONE);
    //     this.setState({ todos: this.todos });
    // }
    // handleMarkDone(todo: Todo, event: any) {
    //     if (event.target.checked)
    //         todo.status = TodoStatus.DONE;
    //     else
    //         todo.status = TodoStatus.NEW;
    //     this.setState({ todos: this.todos });
    // }
    TodoApp.prototype.getItemsLeft = function () {
        return this.props.todos.filter(function (todo) {
            return todo.status === Todo_1.TodoStatus.NEW;
        }).length;
    };
    // handleCreate(event: any) {
    //     if (event.keyCode === 13) {
    //         this.todos.push({
    //             title: event.target.value,
    //             id: this.uuidv4(),
    //             status: TodoStatus.NEW
    //         });
    //         event.target.value = '';
    //         this.setState({ todos: this.todos });
    //     }
    // }
    // handleRemoveTodo(todo: Todo) {
    //     this.todos = this.todos.filter((todoToRemove) => todoToRemove.id !== todo.id);
    //     this.setState({ todos: this.todos });
    // }
    // getItemsLeft():number {
    //     return this.props.todos.length;
    // }
    TodoApp.prototype.render = function () {
        var _this = this;
        var todoListItems = this.props.todos.filter(function (todo) { return todo.status === Todo_1.TodoStatus.NEW; }).map(function (todo) {
            return React.createElement(TodoItem_1.TodoItem, { key: todo.id, id: todo.id, title: todo.title, status: todo.status, statusChange: _this.props.handleMarkDone.bind(_this, todo) });
        });
        var doneListItems = this.props.todos.filter(function (todo) { return todo.status === Todo_1.TodoStatus.DONE; }).map(function (todo) {
            return React.createElement(DoneItem_1.DoneItem, { key: todo.id, id: todo.id, title: todo.title, status: todo.status, removeItem: _this.props.handleRemoveTodo.bind(_this, todo) });
        });
        return React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" },
                    React.createElement(TodoList_1.TodoList, { markAllDone: this.props.handleMarkAllDone.bind(this), itemsLeft: this.getItemsLeft(), createTodo: this.props.handleCreate.bind(this) }, todoListItems)),
                React.createElement("div", { className: "col-md-6" },
                    React.createElement(DoneList_1.DoneList, null,
                        " ",
                        doneListItems,
                        " "))));
    };
    // private todos: Todo[];
    // state: any;
    TodoApp.propTypes = {
        todos: PropTypes.array.isRequired,
        handleMarkAllDone: PropTypes.func.isRequired,
        handleMarkDone: PropTypes.func.isRequired,
        handleCreate: PropTypes.func.isRequired,
        handleRemoveTodo: PropTypes.func.isRequired
    };
    return TodoApp;
}(React.Component));
exports.TodoApp = TodoApp;
var mapStateToProps = function (state) {
    return {
        todos: state.todos
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        handleMarkAllDone: function () {
            dispatch(todo_1.markAllDone());
        },
        handleMarkDone: function (todo, event) {
            if (event.target.checked)
                dispatch(todo_1.markDone(todo.id));
        },
        handleCreate: function (event) {
            if (event.keyCode === 13) {
                dispatch(todo_1.addTodo(event.target.value));
                event.target.value = "";
            }
        },
        handleRemoveTodo: function (todo) {
            dispatch(todo_1.removeItem(todo.id));
        }
    };
};
exports.TodoAppWrapper = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TodoApp);
