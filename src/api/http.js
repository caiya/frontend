import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const ACCESS_TOKEN = 'accesstoken=ed20aac8-9fd8-45bf-8412-62fd2425b4a5'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.url = `${config.url}?${ACCESS_TOKEN}`
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
