<template>
  <div class="layout">
    <sidebar />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
    <navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import TagsView from './components/TagsView'
export default {
  name: 'Layout',
  components: { Navbar, Sidebar, AppMain, TagsView }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>


