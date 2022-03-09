import React, {Component} from 'react';
import Detail from "./Detail";
import {Link, Route} from "react-router-dom";

class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:"消息1"},
            {id:'02',title:"消息2"},
            {id:'03',title:"消息3"},

        ]
    }

    //replace跳转
    replaceShow=(id,title)=>{
        //replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }

    pushShow=(id,title)=>{
        //push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return(
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数*/}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`} >{msgObj.title}</Link>&nbsp;&nbsp;
                                    &nbsp;<button onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                                    &nbsp;<button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace查看</button>

                                    {/*向路由组件传递search参数*/}
                                    {/*<Link  to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`} >{msgObj.title}</Link>&nbsp;&nbsp;*/}

                                    {/*向路由组件传递state参数*/}
                                    {/*<Link to={{pathname:'/home/message/detail/',state:{id:msgObj.id,title:msgObj.title}}} >{msgObj.title}</Link>&nbsp;&nbsp;*/}
                                </li>
                            )
                        })
                    }

                </ul>
                <hr/>
                {/*/!*声明接受params参数*!/*/}
                <Route  path="/home/message/detail/:id/:title" component={Detail}/>

                {/*search参数 无需声明接受，正常注册路由即可*/}
                {/*<Route path="/home/message/detail/" component={Detail}/>*/}

                {/*貌似不可用*/}
                {/*state参数 无需声明接受，正常注册路由即可*/}
                {/*<Route  path="/home/message/detail" component={Detail}/>*/}

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>

            </div>

        );
    }
}

export default Message;