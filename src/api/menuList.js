import { postRequest } from '@/config/network'

export const apiGetMenuList = (params) => {
  return postRequest('api/test/menuList', params)
} 