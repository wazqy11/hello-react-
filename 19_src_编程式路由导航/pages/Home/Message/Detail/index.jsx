import React, {Component} from 'react';
import qs from 'querystring'


const DetailData = [
    {id:'01',content:'hhhhh'},
    {id:'02',content:'gggggg'},
    {id:'03',content:'hhh22222hh'},

]
class Detail extends Component {
    render() {
        //接收params参数
        const {id,title} = this.props.match.params

        //接受search参数
        // const {search} = this.props.location
        // console.log(qs.parse(search))
        // const {id,title} = qs.parse(search.slice(1))

        //接受state参数 貌似不可用
        // console.log(this.props)
        // const {id,title} = this.props.location.state

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