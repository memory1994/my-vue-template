<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<style lang="scss">
.app-main {
  width: 100%;
  height: calc(100% - 95px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>

