import React, {Component} from 'react';

class Item extends Component {
    state = {mouse:false}//标识鼠标移入移除

    //鼠标移入，移除的回调
    handleMouse = (flag)=>{
        return ()=>{
            // console.log(flag)
            this.setState({mouse:flag})

        }
    }

    //item勾选和未勾选的回调
    handleCheck = (id)=>{
        return (event)=>{
            // console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }

    //删除一个item
    handleDelete = (id)=>{
        // console.log('通知app删除',id)
        // eslint-disable-next-line no-restricted-globals
        if(confirm('确定删除吗')){
            this.props.deleteTodo(id)

        }
    }
    render() {
        const {todo} = this.props
        return (
            <li style={{backgroundColor:this.state.mouse ?'#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox"  onChange={this.handleCheck(todo.id)} checked={todo.done}/>
                    <span>{todo.name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(todo.id)}} className="btn btn-danger" style={{display:this.state.mouse ?'block' : 'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;