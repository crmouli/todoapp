"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var Todo_1 = require("./../Todo");
var todos = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: state.todos.concat([
                    {
                        id: action.id,
                        title: action.title,
                        status: Todo_1.TodoStatus.NEW
                    }
                ])
            };
        case 'MARK_DONE':
            return {
                todos: state.todos.map(function (todo) {
                    return (todo.id === action.id)
                        ? __assign({}, todo, { status: Todo_1.TodoStatus.DONE }) : todo;
                })
            };
        case 'REMOVE_ITEM':
            return {
                todos: state.todos.filter(function (todo) {
                    return (todo.id !== action.id);
                })
            };
        case 'MARK_ALL':
            return {
                todos: state.todos.map(function (todo) {
                    return __assign({}, todo, { status: Todo_1.TodoStatus.DONE });
                })
            };
        default:
            return state;
    }
};
exports["default"] = todos;
