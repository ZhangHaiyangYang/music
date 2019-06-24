import {newdata,newdan,newmv,mvcont,dancont,search} from '../api/newdata'

export const getnewdata=(payload)=> async dispatch=>{
    const result =await newdata();
    dispatch({
        type:'newlist',
         payload:{
         list:result.data,
        }
    })
};
export const getdans=(payload)=>async dispatch=>{
    const result=await newdan();
    dispatch({
        type:'getdan',
        payload:{
            list:result.data
        }
    })
}
export const newmvs=(payload)=>async dispatch=>{
    const result=await newmv();
    dispatch({
        type:'newmv',
        payload:{
            list2:result.data
        }
    })
}
export const mvtext=(num)=>async dispatch=>{
    const res= await mvcont(num);
    dispatch({
        type:'newmv',
        payload:{
           text:res.data
        }
    })
}
export const danconts=(num)=>async dispatch=>{
    const res= await dancont(num);

    dispatch({
        type:'newlist',
        payload:{
            list3:res.data,
        }
    })
}
export const searchs=(text)=> async dispatch=>{
    const res=await search(text);
    dispatch({
        type:'search',
        payload:{
        searchdata:res.data
        }
    })
}
