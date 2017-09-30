import * as React from "react";
import * as PropTypes from "prop-types";
import {Todo, TodoStatus} from "./../../state/todos/Todo";

interface TodoProps {
    title:string;
    id:string;
    status:TodoStatus;
    removeItem():void;
}

export class DoneItem extends React.Component<TodoProps> {
    static propTypes = {
        title: PropTypes.string.isRequired,
        status: PropTypes.any.isRequired,
        id: PropTypes.string.isRequired,
        removeItem: PropTypes.func.isRequired
    }
    render(){
        return <li key={this.props.id}> {this.props.title} 
                    <button className="remove-item btn btn-default btn-xs pull-right">
                        <span className="fa fa-times fa-1" onClick={this.props.removeItem}></span>
                    </button>
               </li>
    }
}
