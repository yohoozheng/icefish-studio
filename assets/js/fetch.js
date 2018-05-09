import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: "http://10.10.93.194:8080", // api的base_url
  withCredentials: true,
  timeout: 5000                  // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  config.headers = {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': "application/x-www-form-urlencoded"
  };
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
);

export default service
