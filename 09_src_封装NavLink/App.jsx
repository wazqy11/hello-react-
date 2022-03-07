import React, {Component} from 'react';
import { Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import MyNavLink from "./component/MyNavLink";
/*

    路由组件与一般组件：
        1.写法不同：
            一般组件：<Demo/>
            路由组件：<Route path="/demo" component={Demo}/>
        2.存放位置不同
            component里放一般组件
            pages里放路由组件
        3.接受到的props不同
            一般组件：写标签时传递了什么，就能接收到什么
            路由组件：接收到三个固定的属性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                    [[Prototype]]: Object
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}
                    path: "/about"
                    url: "/about"
                    [[Prototype]]: Object
                    staticContext: undefined
 */

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html中，靠<a>跳转不同的页面*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/* react中靠路由链接实现切换组件--编写路由链接   */}
                            <MyNavLink to='/home'  a={1} b={2} c={3}>Home</MyNavLink>
                            <MyNavLink to='/about' >About</MyNavLink>


                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;