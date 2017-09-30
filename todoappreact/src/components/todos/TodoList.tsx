import * as React from "react";
import {Todo,TodoStatus} from "./../../state/todos/Todo";
import {TodoItem} from "./TodoItem";
import {DoneItem} from "./DoneItem";
import * as PropTypes from "prop-types";

interface TodoListProps {
  itemsLeft:number;
  createTodo(event:React.KeyboardEvent<HTMLInputElement>):void;
  markAllDone():void;
}

export class TodoList extends React.Component<TodoListProps, any> {
    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        itemsLeft: PropTypes.number.isRequired,
        markAllDone: PropTypes.func.isRequired,
    }


    render(){

        return <div className="todolist not-done">
                        <h1>Todos</h1>
                        <input type="text" className="form-control add-todo" placeholder="Add todo" onKeyDown={this.props.createTodo} />
                        <button id="checkAll" 
                            className={"btn btn-success " + (this.props.itemsLeft > 0 ? '' : 'disabled')} 
                            onClick={this.props.markAllDone}>Mark all as done</button>

                        <hr />
                        <ul id="sortable" className="list-unstyled">
                            {this.props.children}
                        </ul>
                        <div className="todo-footer">
                            <strong><span className="count-todos">{this.props.itemsLeft}</span></strong> Items Left
                        </div>
                    </div>
    }
}