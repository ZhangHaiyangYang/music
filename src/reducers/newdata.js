import {combineReducers} from 'redux'
const newlist =(state={list:[],list2:[],list3:{},flag:'block',text:{},res:{}},actioe)=>{
    switch (actioe.type)
    {
        case 'newlist':
        return {...state,...actioe.payload};
        case'flag':
        return {...state,...actioe.payload};
        case 'getdan':
            return {...state,...actioe.payload};
            case 'newmv':
          return {...state,...actioe.payload};
          case 'res':
        return {...state,...actioe.payload};
        default:
        return state
    }
}
export const redus=combineReducers({
    newlist,
})

