import React from 'react'
import {Icon} from 'antd-mobile';
import {Link} from 'react-router-dom'
function Nav(props) {

    return (
      <div>
        <Icon type="ellipsis" />
         <ul>
             <li>我的</li>
             <li>发现</li>
             <li>朋友</li>
             <li>视频</li>
         </ul>
        <Link to={{pathname:'/search'}}> <Icon type="search"/></Link>
      </div>
    )
}
export default Nav
