import * as React from "react";
import * as ReactDOM from "react-dom";
import { Todo, TodoStatus } from "./state/todos/Todo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./state/todos/reducers/todo";

import { TodoAppWrapper } from "./TodoApp";
let store = createStore(reducers, {todos:[
      {
          title: 'Take out the trash',
          id: 'todo-1',
          status: TodoStatus.DONE
      },
      {
          title: 'Buy bread',
          id: 'todo-2',
          status: TodoStatus.NEW
      },
      {
          title: 'Teach penguins to fly',
          id: 'todo-3',
          status: TodoStatus.NEW
      }]}
);
ReactDOM.render(
  <Provider store={store}>
    <TodoAppWrapper />
  </Provider>,
  document.getElementById("example")
);