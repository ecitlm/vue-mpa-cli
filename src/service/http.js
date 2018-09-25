import axios from 'axios'
let instance = axios.create({
  baseURL: process.env.BACK_BASE_URL,
  timeout: 60 * 1000
})
console.log(instance)
// request拦截
instance.interceptors.request.use(config => {
  config.headers.authorization = `token` // 头部设置token信息 可以拿vuex中数据
  return config
}, error => {
console.log('请求出错了...', error)
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  if (response.data.code === 200) {
//    return response.data
  } else {
    console.log(response)
    let err = new Error()
    err.response = response
    return Promise.reject(err)
  }
}, error => {
  return Promise.reject(error)
})

const httpRequest = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 200) {
            reject(error.response.data)
          }
        } else if (error.request) {
          if (error.code === 'ECONNABORTED') {
            // Toast({
            //   message: '请求超时，请刷新重试',
            //   className: 'error-net',
            //   duration: 3000
            // })
          } else {
            console.log('网络断开,请检查网络')
          }
        } else {
          console.log('请求无响应')
        }
      })
  })
}

export default {
  login (data = {}) {
    return httpRequest('/api/login', data)
  }
}
