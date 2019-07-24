import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import sidebar from './modules/sidebar'

import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const isDev = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    user,
    sidebar
  },
  getters,
  strict: isDev,
  plugins: isDev ? [createLogger()] : []
})

export default store