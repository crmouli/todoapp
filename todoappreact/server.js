"use strict";
exports.__esModule = true;
var Express = require("express");
var React = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var server_1 = require("react-dom/server");
var Todo_1 = require("./src/state/todos/Todo");
var todo_1 = require("./src/state/todos/reducers/todo");
var TodoApp_1 = require("./src/TodoApp");
var store = redux_1.createStore(todo_1["default"], { todos: [
        {
            title: 'Take out the trash',
            id: 'todo-1',
            status: Todo_1.TodoStatus.DONE
        },
        {
            title: 'Buy bread',
            id: 'todo-2',
            status: Todo_1.TodoStatus.NEW
        },
        {
            title: 'Teach penguins to fly',
            id: 'todo-3',
            status: Todo_1.TodoStatus.NEW
        }
    ] });
var app = Express();
var port = 3000;
app.get('/index.html', handleRender);
//Serve static files
app.use(Express.static('.'));
// This is fired every time the server side receives a request

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    // Create a new Redux store instance
    // const store = createStore(counterApp)
    // Render the component to a string
    var html = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(TodoApp_1.TodoAppWrapper, null)));
    // Grab the initial state from our Redux store
    var preloadedState = store.getState();
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}
function renderFullPage(html, preloadedState) {
    return "\n        <html>\n        <header>\n            <link rel=\"stylesheet\" href=\"index.css\">\n            <link rel=\"stylesheet\" href=\"http://fontawesome.io/assets/font-awesome/css/font-awesome.css\">\n            <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\"\n                crossorigin=\"anonymous\">\n        </header>\n        \n        <body>\n           <div id=\"example\">" + html + "</div>\n           <!-- Dependencies -->\n           <script src=\"./node_modules/react/dist/react.js\"></script>\n           <script src=\"./node_modules/react-dom/dist/react-dom.js\"></script>\n           <script>\n           // WARNING: See the following for security issues around embedding JSON in HTML:\n           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n           window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + "\n         </script>\n           <!-- Main -->\n           <script src=\"./dist/bundle.js\"></script>\n\n        </body>\n        \n        </html>\n          ";
}
app.listen(port);
