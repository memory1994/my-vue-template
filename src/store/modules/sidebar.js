import { apiGetMenuList } from '@/api/menuList'
import { formatMenuList, transformMenuToTree } from '@/utils/index'
import { Message } from 'element-ui'



const sidebar = {
  state: {
    menuList: [],
    opened: sessionStorage.getItem('sidebarStatus') ? JSON.parse(sessionStorage.getItem('sidebarStatus')) : true
  },
  mutations: {
    SET_MENU_LIST (state, menu) {
      state.menuList = menu
    },
    TOGGLE_SIDEBAR (state) {
      state.opened = !state.opened
      sessionStorage.setItem('sidebarStatus', state.opened)
    }
  },
  actions: {
    async setMenuList ({ commit }, params) {
      const res = await apiGetMenuList(params)
      if (res.code === 'SUCCESS') {
        const { menuData, menuTreeData } = transformMenuToTree(formatMenuList(res.data.list))
        commit('SET_MENU_LIST', menuTreeData)
        return menuData
      } else {
        Message(res.msg)
      }
    },
    toggleSidebar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default sidebar