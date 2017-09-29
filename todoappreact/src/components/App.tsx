import * as React from "react";
import {TodoItem} from "./TodoItem";
import {DoneItem} from "./DoneItem";
import {Todo, TodoStatus} from "./../state/Todo";
import {DoneList} from "./DoneList";
import {TodoList} from "./TodoList";
export class App extends React.Component {
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

    handleMarkDone(todo: Todo, event: any) {
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
            return <TodoItem key={todo.id} id={todo.id} title={todo.title} status={todo.status} statusChange={this.handleMarkDone.bind(this,todo)}></TodoItem>
        });

        let doneListItems = this.todos.filter((todo) => todo.status === TodoStatus.DONE).map((todo) => {
            return <DoneItem key={todo.id} id={todo.id} title={todo.title} status={todo.status} removeItem={this.handleRemoveTodo.bind(this,todo)}></DoneItem>
        });
        
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList markAllDone={this.handleMarkAllDone.bind(this)} itemsLeft={this.getItemsLeft()} createTodo={this.handleCreate.bind(this)}>{todoListItems}</TodoList>
                </div>
                <div className="col-md-6">
                    <DoneList> {doneListItems} </DoneList>
                </div>
            </div>
        </div>;
    }
}