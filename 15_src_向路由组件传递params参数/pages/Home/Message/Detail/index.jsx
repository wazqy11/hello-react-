import React, {Component} from 'react';

const DetailData = [
    {id:'01',content:'hhhhh'},
    {id:'02',content:'gggggg'},
    {id:'03',content:'hhh22222hh'},

]
class Detail extends Component {
    render() {
        //接收params参数
        const {id,title} = this.props.match.params
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>

            </ul>
        );
    }
}

export default Detail;