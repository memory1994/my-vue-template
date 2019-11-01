<template>
  <div class="main-content">
    <keep-alive v-if="hasViewCached">
      <router-view />
    </keep-alive>
    <router-view v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainContent',
  computed: {
    ...mapGetters(['cachedViews']),
    hasViewCached () {
      let curViewName = this.$route.name
      return this.cachedViews.includes(curViewName)
    }
  }
}
</script>

<style lang="scss">
.main-content {
  width: 100%;
  height: calc(100% - 95px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>

