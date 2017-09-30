import path from 'path'
import * as Express from 'express'
import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {TodoApp} from './src/TodoApp'
import { renderToString } from 'react-dom/server'
import { Todo, TodoStatus } from "./src/state/todos/Todo";
import reducers from "./src/state/todos/reducers/todo";
import { TodoAppWrapper } from "./src/TodoApp";
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
const app = Express()
const port = 3000

//Serve static files
app.get('/index.html',handleRender);
app.use(Express.static('.'));

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    // Create a new Redux store instance
    // const store = createStore(counterApp)
  
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <TodoAppWrapper />
      </Provider>
    )
  
    // Grab the initial state from our Redux store
    const preloadedState = store.getState()
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
  }
function renderFullPage(html, preloadedState) { 
    
        return `
        <html>
        <header>
            <link rel="stylesheet" href="index.css">
            <link rel="stylesheet" href="http://fontawesome.io/assets/font-awesome/css/font-awesome.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
                crossorigin="anonymous">
        </header>
        
        <body>
           <div id="example">${html}</div>
           <!-- Dependencies -->
           <script src="./node_modules/react/dist/react.js"></script>
           <script src="./node_modules/react-dom/dist/react-dom.js"></script>
           <script>
           // WARNING: See the following for security issues around embedding JSON in HTML:
           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
         </script>
           <!-- Main -->
           <script src="./dist/bundle.js"></script>

        </body>
        
        </html>
          `
      
 }

app.listen(port)