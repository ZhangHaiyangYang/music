import React,{useEffect} from 'react'
import {Icon} from 'antd-mobile'
import {connect}from 'react-redux'
import {danconts} from '../actions/newlist'

function Dancont(props) {
    const {dispatch,list3,match} =props;
    const data=JSON.parse(localStorage.getItem('data'));

   useEffect(()=>{
       dispatch({
        type:'flag',
        payload:{
            flag:'none'
        }
       })
       dispatch(danconts(match.params.id));
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
    const go=()=>{
        setTimeout(() => {
            dispatch({
                type:'flag',
                payload:{
                    flag:'block',
                    list3:{}
                }
            })
        }, 300);
         props.history.go(-1);
     }
    return (
        <div className="hiddden">
           <article style={{backgroundImage:`url(${data.coverImgUrl})`}} className="dan_xq">
            <p>
            <span className="dan_sp"> <Icon type="left" size='lg' onClick={go}/>热门歌单</span>
            <Icon type="ellipsis" size='lg'/>
            </p>
             <p> <span>名称：{data.name}</span></p>
             <p>{data.tags.map((res,index)=><span key={index}>{res}</span>)}</p>
             <p>
                 <span>播放次数:{data.playCount}</span>
                 <span>分享次数:{data.shareCount}</span>
                 <span>收藏次数:{data.subscribedCount}</span>
             </p>
            </article>
            <div className="cont">
              <ul >
               {list3.data?list3.data.tracks.map((res,index)=><li key={res.id} onClick={()=>{ localStorage.setItem('datas',JSON.stringify(list3.data.tracks));dispatch({type:'res',payload:{res:res}})}}><em>{index+1}</em><p className="name">{res.name}</p></li>):<Icon type="loading"/>}
              </ul>
            </div>
        </div>
    )
}
export default connect(state=>state.newlist)(Dancont)
