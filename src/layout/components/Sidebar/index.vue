<template>
  <aside class="sidebar-container">
    <el-menu
      :default-active="$route.path"
      mode="vertical">
      <sub-menu-nav
        v-for="(menuNav, index) of menuList"
        :key="'menuNav' + index"
        :menu-nav="menuNav"/>
    </el-menu>
  </aside>
</template>

<script>
import SubMenuNav from './SubMenuNav'
export default {
  name: 'Sidebar',
  components: { SubMenuNav },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  }
}
</script>

