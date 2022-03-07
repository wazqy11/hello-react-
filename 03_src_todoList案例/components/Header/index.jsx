import React, {Component} from 'react';
import './index.css'
import {nanoid} from "nanoid";

class Header extends Component {
    handKeyUp = (event)=>{
        //解构赋值
        const {keyCode,target} = event
        if(keyCode!==13 ) return
        if( target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        //准备好一个todo对象,nanoid()返回一个全球唯一字符串
        const  todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        //清空
        target.value = ''
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;