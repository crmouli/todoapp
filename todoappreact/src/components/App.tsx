import * as React from "react";

class Todo {
    title: string;
    status: TodoStatus;
    id: string;
}

enum TodoStatus {
    NEW,
    DONE
}


export class App extends React.Component<undefined, undefined> {
    private todos: Todo[];
    state: any;
    constructor() {
        super();
        this.state = {
            todos: [
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
                }]
        };
        this.todos = this.state.todos;
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    handleMarkAllDone() {
        this.todos.forEach((todo) => todo.status = TodoStatus.DONE);
        this.setState({ todos: this.todos });
    }

    handleMarkDone(event: any, todo: Todo) {
        if (event.target.checked)
            todo.status = TodoStatus.DONE;
        else
            todo.status = TodoStatus.NEW;
        this.setState({ todos: this.todos });
    }

    getItemsLeft() {
        return this.todos.filter(function (todo) {
            return todo.status === TodoStatus.NEW
        }).length;
    }

    handleCreate(event: any) {
        if (event.keyCode === 13) {
            this.todos.push({
                title: event.target.value,
                id: this.uuidv4(),
                status: TodoStatus.NEW
            });
            event.target.value = '';
            this.setState({ todos: this.todos });
        }
    }
    handleRemoveTodo(todo: Todo) {
        this.todos = this.todos.filter((todoToRemove) => todoToRemove.id !== todo.id);
        this.setState({ todos: this.todos });
    }
    render() {
        let todoListItems = this.todos.filter((todo) => todo.status === TodoStatus.NEW).map((todo) => {
            return <li key={todo.id} className="ui-state-default">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked={todo.status === TodoStatus.DONE} onChange={(event) => this.handleMarkDone(event, todo)} />{todo.title}</label>
                </div>
            </li>
        });
        let doneListItems = this.todos.filter((todo) => todo.status === TodoStatus.DONE).map((todo) => {
            return <li key={todo.id}>{todo.title} <button className="remove-item btn btn-default btn-xs pull-right"><span className="fa fa-times fa-1" onClick={this.handleRemoveTodo.bind(this, todo)}></span></button></li>
        });
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <input type="text" className="form-control add-todo" placeholder="Add todo" onKeyDown={this.handleCreate.bind(this)} />
                        <button id="checkAll" className={"btn btn-success " + (this.getItemsLeft() > 0 ? '' : 'disabled')} onClick={this.handleMarkAllDone.bind(this)}>Mark all as done</button>

                        <hr />
                        <ul id="sortable" className="list-unstyled">
                            {todoListItems}
                        </ul>
                        <div className="todo-footer">
                            <strong><span className="count-todos">{this.getItemsLeft()}</span></strong> Items Left
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" className="list-unstyled">
                            {doneListItems}

                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    }
}