import fetch from '@/utils/fetch'

export default {
  create(paras) {
    return fetch.apiRequest('app', 'POST', paras)
  },

  getList(paras=null) {
    return fetch.apiRequest('app', 'GET', paras || {})
  },

  getDetail(app_id) {
    return fetch.apiRequest('app/' + app_id, 'GET')
  }

}