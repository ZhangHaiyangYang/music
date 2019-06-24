import React,{useEffect,useState,useRef} from 'react';
import {connect} from 'react-redux'
import './App.css';
import {HashRouter as Router,Route ,Switch} from 'react-router-dom'
import Nav from './page/Nav'
import routes from './route/index'
import {Icon} from 'antd-mobile'
function App(props) {
 const [flag_2,setflag_2]=useState('none');
 const [src,setsrc]=useState('');
 const [play,setplay]= useState('go');
 const [time,settime]=useState('00:00');
 const [playtime,setplaytime]=useState('00:00');
 const [arr,setindex]=useState({});
 const [cls,setcl]=useState(null);
 const [t,sett]=useState(null);
 const au=useRef(null);
 const [d,setd]=useState(null);

const {res,dispatch}=props
 useEffect(()=>{
    if(!window.name)
    {
      setflag_2('block');
      window.name="123"
    }
  setTimeout(() => {
  setflag_2('none');
}, 3000);
 },[])

 useEffect(()=>{
   var data=JSON.parse (localStorage.getItem('datas'));
  if(res.id)
  {
  setsrc(`https://v1.itooi.cn/netease/url?id=${res.id}&quality=flac`);

  }
  else{
    return
  }
  var index=data.findIndex(ress=>ress.id===res.id);
  setindex({index:index,data:data});
 },[res])
   const add=()=>{
     if(res.id)
     {
       if(arr.index<=arr.data.length)
       {
    dispatch({type:'res',
    payload:{res:arr.data[++arr.index]
    }})
  }
   }
  }
   const jian=()=>{

     if(res.id){
     if(arr.index>=0)
     {
    dispatch({type:'res',
    payload:{res:arr.data[--arr.index]
    }})
  }
}
  else{
    return ;
  }
   }
const show=(date,t)=>{
  clearInterval(cls);
  var date1=new Date();
  var ss=(date1-date)/1000;
  var minuts=Math.floor(ss/60%60)<10?'0'+Math.floor(ss/60%60):Math.floor(ss/60%60);
  var sends=Math.floor(ss%60)<10? '0'+Math.floor(ss%60):Math.floor(ss%60);
  setplaytime(`${minuts}:${sends}`);
  if(ss>=t)
  {
      clearInterval(cls)
  }
}
   if(au.current)
   {
     au.current.onloadedmetadata=(e)=>{
       setplay('go_2');

       var times=e.target.duration;
       sett(times);

        var mint=Math.floor(times/60);
        var miao=Math.floor(times%60);
        if(mint<=10)
        {
          mint='0'+mint;
        }
        if(miao<=10)
        {
          miao='0'+miao;
      }
      settime(`${mint}:${miao}`);
      var date=new Date()
  var cl=setInterval(() => {
    show(date,times);
     },1000);
     setcl(cl);
     setd(date);
   }
  }
  return (
    <div className="App">
      <div style={{display:flag_2}} className="guanggao">
        <h1>这是广告页3秒后消失</h1>
      </div>
      <Router>
        <header style={{display:props.flag}}><Nav/></header>
        <section>
          <Switch>
         { routes.map((route,key)=>{
           if(route.exact)
           {
            return <Route key={key} exact path={route.path} component={route.component}/>
           }
           else{
            return <Route key={key} path={route.path} component={route.component}/>
           }
          })
        }
        </Switch>
        </section>
        <footer>
          <audio ref={au} autoPlay src={res.id? src:null} ></audio>
         <article><img src={res.al? res.al.picUrl:'http://img0.imgtn.bdimg.com/it/u=2228788569,294219945&fm=26&gp=0.jpg'} alt=""/></article>
         <article>
           <p>{res.name?res.name:'暂无'} <span className="left">{time}</span> <span>{playtime}</span> <span  onClick={jian} className="left2">{'<'}</span>  <span onClick={add} className="right">{'>'}</span> </p>
           <span onClick={()=>{
             var c;
             if(res.id)
             {
              if(au.current.paused)
              {
                au.current.play();
                setplay('go_2');

                var cl=setInterval(() => {
                  show(d,t);
                   },1000);
                   setcl(cl);
                   clearInterval(c)
              }
              else{
                setplay('go');au.current.pause();
                clearInterval(cls);
              }
            }
            else{
              return null
            }
             }} className={play}></span>
            <Icon type="ellipsis"/>
         </article>
        </footer>
        </Router>
    </div>
  );
}
export default connect(state=>state.newlist) (App);
