import axios from 'axios';
const instanec=axios.create({
    baseURL:'https://v1.itooi.cn/',
    timeout:8000
})   
export const get =(url,config)=>instanec.get(url,config);