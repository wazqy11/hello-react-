//��������ǡ����App
import React,{Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

//��������¶App���

export default class App extends Component{
    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }

}

