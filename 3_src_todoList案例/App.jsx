import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
    //state在哪里，操作状态的方法就在哪里

    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打代码',done:false},
            {id:'004',name:'逛街',done:true},

        ]
    }

    //addTodo用于添加一个todo，接收的参数是一个todo对象
    addTodo = (todoObj)=>{
        console.log(todoObj)
        this.setState({todos:[todoObj,...this.state.todos]})
    }

    //用于更新一个todo对象
    updateTodo = (id,done)=>{
        const {todos} = this.state
        // eslint-disable-next-line array-callback-return
        let newTodos = todos.map((todoObg)=>{
            if(todoObg.id === id ) return {...todoObg,done:done}
            else return todoObg
        })
        this.setState({todos:newTodos})
    }

    //删除一个todo
    deleteTodo = (id)=>{
        const {todos} = this.state
        //删除指定id的todo对象
        // eslint-disable-next-line array-callback-return
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    //删除所有已完成的任务
    deleteDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done !== true
        })
        this.setState({todos: newTodos})
    }


    changeAll = (flag)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            return {...todo,done:flag}
        })
        this.setState({todos:newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodo}/>
                    <List todos = {this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer deleteDone={this.deleteDone} todosLength={this.state.todos.length} haveDone={this.state.todos.reduce((pre,cur)=>{
                        //pre是之前的统计值，cur为当前遍历对象
                        return pre + (cur.done ? 1 :0)
                    },0)} changeAll={this.changeAll}/>
                </div>
            </div>
        );
    }
}

export default App;
