<template>
  <div class="layout">
    <sidebar />
    <div class="main-container" :class="{'sidebar-opened': opened}">
      <navbar />
      <tags-view />
      <app-main v-if="isRouteAlive"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import TagsView from './components/TagsView'
export default {
  name: 'Layout',
  components: { Navbar, Sidebar, AppMain, TagsView },
  provide () {
    return {
      refreshCurPage: this.handleRefreshCurPage
    }
  },
  computed: {
    ...mapGetters([
      'opened'
    ])
  },
  data () {
    return {
      isRouteAlive: true //重载组件
    }
  },
  methods: {
    handleRefreshCurPage () {
      this.isRouteAlive = false
      this.$nextTick(() => { this.isRouteAlive = true })
    }
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: auto;
    display: flex;
    flex-direction: column;
    width: calc(100% - 65px);
    height: 100%;
    &.sidebar-opened {
      width: calc(100% - 200px);
    }
  }
}
</style>


