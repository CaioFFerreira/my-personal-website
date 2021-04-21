import http from '../services/axios'

class CrudRequest {
  static baseUrl() {
    throw new Error('Method baseUrl not implemented')
  }

  static get() {
    return http.get(`${this.baseUrl()}`)
  }
}

export default CrudRequest
