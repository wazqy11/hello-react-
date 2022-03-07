import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'
class List extends Component {
    state = {
        users:[],
        isFirst:true,//网页是否是第一次打开
        isLoading:false,//标识是否处于加载中
        err:'',//存储请求相关的错误信息
    }

    componentDidMount() {
        this.token = PubSub.subscribe('atguigu',(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst?<h2>输入关键字随后点击搜索</h2>:
                        isLoading?<h2>Loading...</h2>:
                            err?<h2 style={{color:"red"}}>{err}</h2>:
                                users.map((userObj)=>{
                                    return(
                                        <div className="card" key={userObj.id}>
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img src={userObj.avatar_url} style={{width:'100px'}} alt={'haed_portrait'}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;