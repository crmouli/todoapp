import * as React from "react";
import * as PropTypes from "prop-types";
import {Todo, TodoStatus} from "./../state/Todo";

interface TodoProps {
    title:string;
    id:string;
    status:TodoStatus;
    statusChange(event:React.ChangeEvent<HTMLInputElement>):void;
}

export class TodoItem extends React.Component<TodoProps> {
    static propTypes = {
        title: PropTypes.string.isRequired,
        status: PropTypes.any.isRequired,
        id: PropTypes.string.isRequired,
        statusChange: PropTypes.func.isRequired
    }
    render(){
        return <li key={this.props.id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={this.props.status === TodoStatus.DONE} onChange={this.props.statusChange} />
                    {this.props.title}</label>
            </div>
        </li>
        
    }
}
