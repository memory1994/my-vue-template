<template>
  <el-submenu
    v-if="handleJudgeHasChidren(menuNav)"
    :index="menuNav.menuUrl">
    <template slot="title">
      <i :class="[menuNav.menuIcon]"></i>
      <span slot="title">{{menuNav.menuName}}</span>
    </template>
    <sub-menu-nav
      v-for="(subMenuNav, index) of menuNav.children"
      :key="'subMenuNav' + index"
      :menu-nav="subMenuNav"/>
  </el-submenu>

  <el-menu-item
    v-else
    :index="menuNav.menuUrl"
    @click="handleJumpPages(menuNav)">
    <i :class="[menuNav.menuIcon]"></i>
    <span slot="title">{{menuNav.menuName}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SubMenuNav',
  props: {
    menuNav: {
      type: Object,
      default () { return {} }
    }
  },
  methods: {
    // 判断是否还有子数据
    handleJudgeHasChildren (menuNav) {
      return menuNav && menuNav.children.length
    },
    // 跳转页面
    handleJumpPages (menuNav) {
      this.$router.push(menuNav)
    }
  }
}
</script>

