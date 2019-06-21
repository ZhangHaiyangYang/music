import Index from '../page/index'
import New from '../page/new'
import Gedan from  '../page/gedan'
import Playmv from '../page/palymv'
import Dancont from '../page/dancont'
import Search from '../page/search'

let routes=[
  {
      path:'/',
    component:Index,
     exact:true
  },
  {
      path:'/new',
      component:New,
  },
  {
    path:'/gedan',
    component:Gedan,
},
{
  path:'/palymv/:id',
  component:Playmv
},
{
  path:'/danxq/:id',
  component:Dancont
},
{
  path:'/search',
  component:Search
}
];
export default routes