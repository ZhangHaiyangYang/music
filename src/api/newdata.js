import {get} from '../unitls/request'
export const newdata=()=>get('netease/album/newest',{params:{
    contentType:'application/x-www-form-urlencoded',
}});
export const newdan=()=>get('netease/songList/highQuality?pageSize=9')
export const newmv=()=>get('netease/mv/top?pageSize=9&page=0');
export const mvcont=(num)=>get(`netease/mv?id=${num}`);
export const dancont=(num)=>get(`netease/songList?id=${num}`);





