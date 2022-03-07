import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key = {todo.id} todo = {todo} updateTodo = {this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;