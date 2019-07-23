<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Mock from '$mock/index'
Mock()
export default {
  name: 'App'
}
</script>

