import axios from 'axios'
import { Message } from 'element-ui'
import { RES_CODE } from '@/config/portCode'
axios.defaults.timeout = 150000

axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error('请求超时~')
  return Promise.resolve(err)
})

axios.interceptors.response.use(res => {
  if (res.status && res.status === 200 && res.data.status === 'error') return
  return res.data
}, err => {
  if (err.response.status === 504 || err.reponse.status === 404) {
    Message.error('服务器正在外太空遨游，请稍后再试~')
  } else if (err.response.status === 403) {
    Message.error('权限不足，请联系管理员~')
  } else {
    Message.error('请求失败，请稍后重试~')
  }
  return Promise.resolve(err)
})

// 拦截code码
export const interceptorResCode = (res, resolve) => {
  Object.keys(RES_CODE).forEach(key => (RES_CODE[key].includes(res.code) && (res.code = key)))
  if (res.code === 'LOGINEXPIRED') { // 登录失效
    Message.error('登录过期请重新登录')
  } else {
    resolve(res)
  }
}