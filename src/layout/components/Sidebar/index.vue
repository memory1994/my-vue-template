<template>
  <aside :class="['sidebar-container', {'sidebar-opened': opened}]">
    <el-menu
      :default-active="$route.path"
      :collapse="!opened"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical">
      <sidebar-item
        v-for="(menuNav, index) of menuList"
        :key="'menuNav' + index"
        :menu-nav="menuNav"/>
    </el-menu>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'menuList',
      'opened'
    ])
  }
}
</script>

<style lang="scss">
.sidebar-container {
  flex-shrink: 0;
  width: 65px;
  height: 100%;
  background-color: #545c64;
  overflow: auto;
  transition: width 0.5s ease;
  &.sidebar-opened {
    width: 200px;
  }
  .el-menu {
    width: 100%;
    border-right: none;
  }
}
</style>


