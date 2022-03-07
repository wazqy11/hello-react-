import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

    search = ()=>{
        //获取用户输入(连续解构赋值）
        const {kewWordElement:{value:keyword}} = this
        // console.log(keyword)
        //发送请求前通知app更新状态
        this.props.updateAppState({isFirst: false,isLoading: true})
        //发送网络请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                //请求成功后通知app更新状态
                this.props.updateAppState({isLoading: false,users: response.data.items})
            },
            error => {
                //请求失败后通知app更新状态
                this.props.updateAppState({isLoading: false,err: error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=> this.kewWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;