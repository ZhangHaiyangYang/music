import React from 'react'

import { SearchBar,Icon} from 'antd-mobile';
import {connect} from 'react-redux'
import {searchs} from '../actions/newlist'
class SearchBarExample extends React.Component {
  constructor(props)
  {
    super(props);
   this.state = {
      value: '确认过眼神',
    };
  }
  onChange= (value) => {
    this.setState({value})
   if(value!=='')
   {
    this.props.dispatch(searchs(this.state.value))
   }
   else{
    this.props.dispatch({
      type:'search',
      payload:{
        searchdata:{}
      }
    })
   }
  }
  go()
  {
    this.props.history.go(-1)
  }
  render() {
    return (<div>
       <Icon type="left" size='lg' onClick={this.go.bind(this)}/>
      <SearchBar placeholder="Search" maxLength={8}   value={this.state.value}  onChange={this.onChange} />
      <div className="cont1">
       <ul>
        {this.props.searchdata.data?this.props.searchdata.data.songs.map((res,index)=><li onClick={()=>{ localStorage.setItem('datas',JSON.stringify(this.props.searchdata.data.songs));this.props.dispatch({type:'res',payload:{res:res}})}} key={res.id}><em>{index+1}</em><p className="name">{res.name}</p></li>):''}
       </ul>
      </div>
    </div>);
  }
}
export default connect(state=>state.newlist) (SearchBarExample)