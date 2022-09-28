import axios from "axios"

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  responseType: 'json'
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

instance.apiRequest = function(url, method) {
  return instance.request({url, method})
}

export default instance