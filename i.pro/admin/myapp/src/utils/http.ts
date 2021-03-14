import { extend } from 'umi-request';
import { message} from 'antd';
const request = extend({
  prefix: 'http://pudge.wang:3000/api',
  timeout:20000
})

// 提前对响应做异常处理
request.interceptors.response.use((response:any) => {
  const codeMaps:any = {
    404:"地址错误",
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  if(codeMaps[response.status]){
    message.error(codeMaps[response.status]);
  }else {
    return response;
  }
});


const http={
  get(url:string,params?:object){
  return  request
        .get(url, {
          method: 'get',
          params: params
        })
        .then((response)=> {
          return  response
        })
        .catch((error)=> {
          return message.error(error.message)
        });
  },
  post(url:string,params?:object){
 return  request
    .post(url, {
      data:params
    })
    .then((response)=> {
     return response
    })
    .catch((error)=> {
      return message.error(error.message)
    });
  }
  
}

export default http
