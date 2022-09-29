import axios from "axios"
import { Message } from "element-ui"

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  responseType: 'json'
})

instance.interceptors.response.use(response => {
  if (!response.data) {
    return Promise.reject(new Error('no response data'))
  }
  const code = response.data.code
  if (code !== 0 ) {
    return Promise.reject(new Error(response.data.msg || code))
  }
  return response.data.data
}, error => {
  if (error.response.data.msg) {
    Message({
      message: error.response.data.msg,
      type: 'error',
      duration: 3_000
    })
  }
  return Promise.reject(error)
})

instance.apiRequest = function(url, method, data) {
  if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
    return instance.request({url, method, params: data})
  } else {
    return instance.request({url, method, data})
  }
}

export default instance