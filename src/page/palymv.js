import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd-mobile'
import {mvtext} from '../actions/newlist'

function Palymv(props) {
    console.log(props)
    const {dispatch,match,text}=props
useEffect(()=>{
   dispatch({
    type:'flag',
    payload:{
      flag:'none',
    }
   })
   console.log(match.params.id)
   dispatch(mvtext(match.params.id))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


const go=(e)=>{
    setTimeout(() => {
        dispatch({
            type:'flag',
            payload:{
                flag:'block'
            }
        })
    }, 300);
     props.history.go(-1);
 }
 console.log(text);
    return (
        <div>
           <article className="header_mv">
            <p>
            <Icon type="left" size='lg' onClick={go}/>
            <Icon type="ellipsis" size='lg'/>
            </p>
            </article>
            <div>
                <video autoPlay width="95%" height="260px"  src={`https://v1.itooi.cn/netease/mvUrl?id=${match.params.id}&quality=480`} controls></video>
            </div>
            <h3>mv详情</h3>
            <article className="text">
               {text.data? <ul>
                   <li><span><img src={text.data.data.cover} alt=""/></span></li>
                   <li><span>MV名称: </span><span>{text.data.data.name} </span></li>
                   <li><span>歌手: </span><span>{text.data.data.artistName}</span></li>
                   <li><span>时间: </span><span>{text.data.data.publishTime}</span></li>
                   <li><span>分享次数: </span><span>{text.data.data.shareCount}次</span></li>
                   <li><span>播放次数: </span><span>{text.data.data.shareCount}次</span></li>
                   <li><span>点赞次数: </span><span>{text.data.data.subCount}次</span></li>
               </ul>  :<p>暂无数据</p>}
            </article>

        </div>
    )
}

export default connect(state=>state.newlist) (Palymv)
