import * as React from "react";
import * as ReactDOM from "react-dom";
import { Todo, TodoStatus } from "./state/todos/Todo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./state/todos/reducers/todo";

import { TodoAppWrapper } from "./TodoApp";
declare global {
  interface Window { __PRELOADED_STATE__: any; }
}
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
let store = createStore(reducers, preloadedState
);
ReactDOM.render(
  <Provider store={store}>
    <TodoAppWrapper />
  </Provider>,
  document.getElementById("example")
);