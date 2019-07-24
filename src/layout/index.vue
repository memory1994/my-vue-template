<template>
  <div class="layout">
    <sidebar />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import TagsView from './components/TagsView'
import { apiGetMenuList } from '@/api/menuList'
export default {
  name: 'Layout',
  components: { Navbar, Sidebar, AppMain, TagsView },
  mounted () {
    apiGetMenuList().then(res => {
      console.log(res)
    })
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
  }
}
</style>


