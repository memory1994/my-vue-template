const tagsView = {
  state: {
    visitedViews: JSON.parse(sessionStorage.getItem('visitedViews')) || [],
    cachedViews: JSON.parse(sessionStorage.getItem('cachedViews')) || []
  },
  mutations: {
    ADD_VISITED_VIEWS (state, view) {
      if (state.visitedViews.some(v => v.menuPath === view.menuPath)) return
      state.visitedViews.push(
        Object.assign({}, view)
      )
      sessionStorage.setItem('visitedViews', JSON.stringify(state.visitedViews))
    },
    ADD_CACHED_VIEWS (state, view) {
      if (state.cachedViews.includes(view.menuName)) return
      state.cachedViews.push(view.menuName)
      sessionStorage.setItem('cachedViews', JSON.stringify(state.cachedViews))
    },
    DEL_VISITED_VIEWS (state, view) {
      for (const [v, i] of state.visitedViews.entries()) {
        if (v.menuPath === view.menuPath) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    DEL_CACHED_VIEWS (state, view) {
      for (const [v, i] of state.cachedViews.entries()) {
        if (v === view.menuName) {
          state.cachedViews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    addViews ({ dispatch, state }, view) {
      dispatch('addVisitedViews', view)
      dispatch('addCachedViews', view)
      return {
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      }
    },
    async addVisitedViews ({ commit, state }, view) {
      commit('ADD_VISITED_VIEWS', view)
      return state.visitedViews
    },
    async addCachedViews ({ commit, state }, view) {
      commit('ADD_CACHED_VIEWS', view)
      return state.cachedViews
    },
    async delVisitedViews ({ commit, state }, view) {
      commit('DEL_VISITED_VIEWS', view)
      return state.visitedViews
    },
    async delCachedViews ({ commit, state }, view) {
      commit('DEL_CACHED_VIEWS', view)
      return state.cachedViews
    }
  }
}

export default tagsView