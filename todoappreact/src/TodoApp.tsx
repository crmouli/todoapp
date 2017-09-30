import * as React from "react";
import { TodoItem } from "./components/todos/TodoItem";
import { DoneItem } from "./components/todos/DoneItem";
import { Todo, TodoStatus } from "./state/todos/Todo";
import { DoneList } from "./components/todos/DoneList";
import { TodoList } from "./components/todos/TodoList";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { addTodo, markDone, removeItem, markAllDone } from "./state/todos/actions/todo";

interface TodoAppProps {
    todos:Todo[],
    handleMarkAllDone():void,
    handleMarkDone(todo: Todo, event: any):void,
    handleCreate(event: any) : void,
    handleRemoveTodo(todo: Todo):void
}
export class TodoApp extends React.Component<TodoAppProps> {
    // private todos: Todo[];
    // state: any;
    static propTypes = {
        todos:PropTypes.array.isRequired,
        handleMarkAllDone:PropTypes.func.isRequired,
        handleMarkDone:PropTypes.func.isRequired,
        handleCreate: PropTypes.func.isRequired,
        handleRemoveTodo: PropTypes.func.isRequired
    }; 
    constructor() {
        super();
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

    getItemsLeft() {
        return this.props.todos.filter(function (todo) {
            return todo.status === TodoStatus.NEW
        }).length;
    }

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

    render() {

        let todoListItems = this.props.todos.filter((todo) => todo.status === TodoStatus.NEW).map((todo) => {
            return <TodoItem key={todo.id} id={todo.id} title={todo.title} status={todo.status} statusChange={this.props.handleMarkDone.bind(this, todo)}></TodoItem>
        });

        let doneListItems = this.props.todos.filter((todo) => todo.status === TodoStatus.DONE).map((todo) => {
            return <DoneItem key={todo.id} id={todo.id} title={todo.title} status={todo.status} removeItem={this.props.handleRemoveTodo.bind(this, todo)}></DoneItem>
        });

        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList markAllDone={this.props.handleMarkAllDone.bind(this)} itemsLeft={this.getItemsLeft()} createTodo={this.props.handleCreate.bind(this)}>{todoListItems}</TodoList>
                </div>
                <div className="col-md-6">
                    <DoneList> {doneListItems} </DoneList>
                </div>
            </div>
        </div>;
    }
}
const mapStateToProps = (state:any) => {
    return {
    todos: state.todos
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        handleMarkAllDone: () => {
            dispatch(markAllDone());
        },
        handleMarkDone: (todo: Todo, event: any) => {
            if (event.target.checked)
                dispatch(markDone(todo.id));
        },
        handleCreate: (event: any) => {
            if (event.keyCode === 13) {
                dispatch(addTodo(event.target.value));
                event.target.value = "";
            }
        },
    
        handleRemoveTodo: (todo: Todo) => {
            dispatch(removeItem(todo.id));
        }    
    }
}

export const TodoAppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);