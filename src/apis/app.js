import fetch from '@/utils/fetch'

export default {
  getDetail(app_id) {
    return fetch.apiRequest('app/' + app_id, 'GET')
  }
}