import { apiGetMenuList } from '@/api/menuList'
import { transformMenuToTree } from '@/utils/index'



const sidebar = {
  state: {
    menuList: [],
    opened: JSON.parse(sessionStorage.getItem('sidebarStatus')) || true
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
      commit('SET_MENU_LIST', transformMenuToTree(res.data.list))
      return res.data
    },
    toggleSidebar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default sidebar