"use strict";
exports.__esModule = true;
var uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
exports.addTodo = function (text) {
    return {
        type: 'ADD_TODO',
        id: uuidv4(),
        title: text
    };
};
exports.markDone = function (id) {
    return {
        type: 'MARK_DONE',
        id: id
    };
};
exports.removeItem = function (id) {
    return {
        type: 'REMOVE_ITEM',
        id: id
    };
};
exports.markAllDone = function () {
    return {
        type: 'MARK_ALL'
    };
};
