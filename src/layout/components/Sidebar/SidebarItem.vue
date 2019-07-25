<template>
  <el-submenu
    v-if="handleJudgeHasChildren(menuNav)"
    :index="menuNav.menuPath">
    <template slot="title">
      <i :class="[menuNav.menuIcon || 'el-icon-s-tools']"></i>
      <span slot="title">{{menuNav.menuName}}</span>
    </template>
    <sidebar-item
      v-for="(subMenuNav, index) of menuNav.children"
      :key="'subMenuNav' + index"
      :menu-nav="subMenuNav"/>
  </el-submenu>

  <el-menu-item
    v-else
    :index="menuNav.menuPath"
    @click="handleJumpPages(menuNav)">
    <i :class="[menuNav.menuIcon || 'el-icon-s-tools']"></i>
    <span slot="title">{{menuNav.menuName}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    menuNav: {
      type: Object,
      default () { return {} }
    }
  },
  methods: {
    // 判断是否还有子数据
    handleJudgeHasChildren (menuNav) {
      return menuNav && menuNav.children && menuNav.children.length
    },
    // 跳转页面
    handleJumpPages (menuNav) {
      this.$router.push(menuNav.menuPath)
      this.$store.dispatch('addViews', menuNav)
    }
  }
}
</script>

