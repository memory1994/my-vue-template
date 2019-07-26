const setVisitedViews = (state) => {
  sessionStorage.setItem('visitedViews', JSON.stringify(state.visitedViews))
}
const setCachedViews = (state) => {
  sessionStorage.setItem('cachedViews', JSON.stringify(state.cachedViews))
}

const tagsView = {
  state: {
    visitedViews: JSON.parse(sessionStorage.getItem('visitedViews')) || [],
    cachedViews: JSON.parse(sessionStorage.getItem('cachedViews')) || []
  },
  mutations: {
    ADD_VISITED_VIEWS (state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
      setVisitedViews(state)
    },
    ADD_CACHED_VIEWS (state, view) {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
        setCachedViews(state)
      }
    },
    DEL_VISITED_VIEWS (state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      setVisitedViews(state)
    },
    DEL_CACHED_VIEWS (state, view) {
      for (const [i, v] of state.cachedViews.entries()) {
        if (v === view.name) {
          state.cachedViews.splice(i, 1)
          break
        }
      }
      setCachedViews(state)
    },
    DEL_OTHERS_VISITED_VIEWS (state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) {
        state.visitedViews = [Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })]
        setVisitedViews(state)
      }
    },
    DEL_OTHERS_CACHED_VIEWS (state, view) {
      if (state.cachedViews.includes(view.name)) {
        state.cachedViews = [view.name]
        setCachedViews(state)
      }
    },
    DEL_ALL_VISITED_VIEWS (state) {
      state.visitedViews = []
      setVisitedViews(state)
    },
    DEL_ALL_CACHED_VIEWS (state) {
      state.cachedViews = []
      setCachedViews(state)
    }
  },
  actions: {
    async addViews ({ dispatch, state }, view) {
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
    async delViews ({ dispatch, state }, view) {
      dispatch('delVisitedViews', view)
      dispatch('delCachedViews', view)
      return {
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      }
    },
    async delVisitedViews ({ commit, state }, view) {
      commit('DEL_VISITED_VIEWS', view)
      return state.visitedViews
    },
    async delCachedViews ({ commit, state }, view) {
      commit('DEL_CACHED_VIEWS', view)
      return state.cachedViews
    },
    async delOthersViews ({ dispatch, state }, view) {
      dispatch('delOthersVisitedViews', view)
      dispatch('delOthersCachedViews', view)
      return {
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      }
    },
    async delOthersVisitedViews ({ commit, state }, view) {
      commit('DEL_OTHERS_VISITED_VIEWS', view)
      return state.visitedViews
    },
    async delOthersCachedViews ({ commit, state }, view) {
      commit('DEL_OTHERS_CACHED_VIEWS', view)
      return state.cachedViews
    },
    async delAllViews ({ dispatch, state }, view) {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      return {
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      }
    },
    async delAllVisitedViews ({ commit, state }, view) {
      commit('DEL_ALL_VISITED_VIEWS', view)
      return state.visitedViews
    },
    async delAllCachedViews ({ commit, state }, view) {
      commit('DEL_CACHED_VIEWS', view)
      return state.cachedViews
    }
  }
}

export default tagsView