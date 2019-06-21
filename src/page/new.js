import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux'
import {getnewdata} from '../actions/newlist'
import {Icon} from 'antd-mobile'
function New(props) {
    const {list,dispatch}=props
    const [date,setdata]=useState('');
 useEffect(()=>{
     var da=new Date();
     var nian=da.getFullYear();
     var yue=da.getMonth()+1;
     var day=da.getDate()
      var str= nian+'/'+yue+"/"+day;
      setdata(str);
  dispatch({
      type:'flag',
      payload:{
          flag:'none'
      }
  })
 dispatch(getnewdata())
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
 console.log(list)
 const go=()=>{
    dispatch({
        type:'flag',
        payload:{
            flag:'block'
        }
    })
     props.history.go(-1);
 }
    return (
        <div className="flex">
               <div className="hea">
            <article className="header">
            <p>
            <Icon type="left" size='lg' onClick={go}/>
            <Icon type="ellipsis" size='lg'/>
            </p>
            </article>
            <h1 className="time">
                <p>{date}</p>
            </h1>
              </div>
            <div className="data">
               <ul className="ul">
                 { list.data? list.data.map((res)=><li key={res.id}>
                  <img src={res.blurPicUrl} alt=""/>
                  <p><span>{res.name}</span></p>
                 </li>):<Icon type="loading"/>}
               </ul>
            </div>
        </div>
    )
}
export default connect(state=>state.newlist) (New)
