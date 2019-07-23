const menu = {
  state: {
    menuList: [
      
    ]
  },
  mutations: {
    SET_MENU_LIST (state, menu) {
      state.menuList = menu
    }
  },
  actions: {
    async setMenuList ({ commit }, menu) {
      return commit('SET_MENU_LIST', menu)
    }
  }
}

export default menu