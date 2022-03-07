import React, {Component} from 'react';

class Footer extends Component {
    deleteDone = ()=>{
        //删除已完成的任务
        this.props.deleteDone()
    }

    //改变所有任务的状态值
    changeAll = (event)=>{

        const flag = event.target.checked
        this.props.changeAll(flag)
    }
    render() {
        const {haveDone,todosLength} = this.props

        return (
            <div className="todo-footer">
                <label>
                    {/*defaultChecked只在第一次展示时有效，有checked时必须写onChange或者readOnly*/}
                    <input type="checkbox"  onChange={this.changeAll} checked={(haveDone === todosLength) && todosLength}/>
                </label>
                <span>
                    <span>已完成{haveDone}</span> / 全部{todosLength}
                </span>
                <button onClick={this.deleteDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;