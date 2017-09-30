import * as React from "react";
import {Todo,TodoStatus} from "./../../state/todos/Todo";
import {TodoItem} from "./TodoItem";
import {DoneItem} from "./DoneItem";

export class DoneList extends React.Component<any, any>{
    render(){
        return <div className="todolist">
                    <h1>Already Done</h1>
                    <ul id="done-items" className="list-unstyled">
                        {this.props.children}
                    </ul>
                </div>
    }
}