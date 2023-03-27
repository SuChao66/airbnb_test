import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config'

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout })

    // 返回拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  // request方法
  request(config) {
    return this.instance.request(config)
  }

  // get方法
  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  // post方法
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)


