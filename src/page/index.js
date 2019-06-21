import { Carousel, WingBlank, Icon} from 'antd-mobile';
import React from 'react';
import {NavLink} from 'react-router-dom'
import {getdans,newmvs} from '../actions/newlist'
import {connect} from 'react-redux'
class Index extends React.Component {
  constructor(props)
  {
     super(props);
   this.state = {
      data: ['http://p1.music.126.net/xNO4OVeYJnpruZJlE-gC5Q==/109951164157257117.jpg', 'http://p1.music.126.net/tIyQXTXorqjXhrfmGr_lvQ==/109951164157279950.jpg', 'http://p1.music.126.net/b_x838UAQ85QWkfIOJ7Emg==/109951164157843225.jpg'],
      imgHeight: 136,
      list:[]
    }
  }
  componentDidMount(){


    // simulate img loading
    setTimeout(() => {
      this.setState({
    data:['http://p1.music.126.net/xNO4OVeYJnpruZJlE-gC5Q==/109951164157257117.jpg', 'http://p1.music.126.net/tIyQXTXorqjXhrfmGr_lvQ==/109951164157279950.jpg', 'http://p1.music.126.net/b_x838UAQ85QWkfIOJ7Emg==/109951164157843225.jpg'],
      });
    }, 100);

  }
  componentWillMount()
  {
  const {dispatch} =this.props;
  dispatch(getdans());
  dispatch(newmvs())
  }
  componentWillReceiveProps(p){
      //可以处理dispatch派发过来的数据
  }
  palymv(id)
  {
    this.props.dispatch({
      type:'flag',
      payload:{
        flag:'none',
      }
    })
      this.props.history.push({
        pathname:'/palymv/'+id,
      })
  }
  dancont(res)
  {
    this.props.dispatch({
      type:'flag',
      payload:{
        flag:'none',
      }

    })
    this.props.history.push({
      pathname:'/danxq/'+res.id,
    })
    localStorage.setItem('data',JSON.stringify(res))
  }


  render() {
    const {list,list2}=this.props;
    return (
        <div>
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
     <div className="dindan">
          <NavLink to={{pathname:'/new'}}>
          <figure>
          <figcaption>乐</figcaption>
          <p>最新音乐</p>
          </figure>
          </NavLink>
          <figure>
          <figcaption>单</figcaption>
          <p>歌单</p>
          </figure>
          <figure>
          <figcaption>榜</figcaption>
          <p>排行榜</p>
          </figure>
          <figure>
          <figcaption>台</figcaption>
          <p>电台</p>
          </figure>
          <figure>
          <figcaption>播</figcaption>
          <p>直播</p>
          </figure>
      </div>
      <h3>热门歌单</h3>
         <div className="index_dan">
          <article>
         {list.data? list.data.map((res)=><figure onClick={this.dancont.bind(this,res)} key={res.id}><em>{res.tag}</em><span>{Math.round(res.playCount/10000)}万</span><p><img src={res.coverImgUrl} alt=""/></p><figcaption>{res.name}</figcaption></figure>):<Icon type="loading"/>}
         </article>
         <h3>热门MV</h3>
         <article>
         {list2.data? list2.data.map((res)=><figure onClick={this.palymv.bind(this,res.id)} key={res.id}><em>{res.artistName}</em><span>{Math.round(res.playCount/10000)}万</span><p><img src={res.cover} alt=""/></p><figcaption>{res.name}</figcaption></figure>):''}
         </article>
         </div>
      </div>
    );
  }
}

export default connect(state=>state.newlist) (Index)
