<template>
  <el-submenu
    v-if="handleJudgeHasChildren(menu)"
    :index="menu.path">
    <template slot="title">
      <i :class="[menu.icon || 'el-icon-s-tools']"></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <sidebar-item
      v-for="(subMenu, index) of menu.children"
      :key="'subMenuNav' + index"
      :menu="subMenu"/>
  </el-submenu>

  <el-menu-item
    v-else
    :index="menu.path"
    @click="handleJumpPages(menu)">
    <i :class="[menu.icon || 'el-icon-s-tools']"></i>
    <span slot="title">{{menu.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    menu: {
      type: Object,
      default () { return {} }
    }
  },
  methods: {
    // 判断是否还有子数据
    handleJudgeHasChildren (menu) {
      return menu && menu.children && menu.children.length
    },
    // 跳转页面
    handleJumpPages (menu) {
      this.$router.push(menu.path)
    }
  }
}
</script>

