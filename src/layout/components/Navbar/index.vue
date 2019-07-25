<template>
	<nav class="navbar">
		<i :class="['breadcrumb', opened ? 'el-icon-s-fold' : 'el-icon-s-unfold']" @click="handleToggleSidebar"></i>

    <breadcrumb></breadcrumb>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'
export default {
  name: 'Navbar',
  components: { Breadcrumb },
	computed: {
		...mapGetters([
			'opened'
		])
	},
	mounted () {
		console.log(this.$router)
	},
	methods: {
		// 切换sidebar
		handleToggleSidebar () {
			this.$store.dispatch('toggleSidebar')
		}
	}
}
</script>

<style lang="scss">
.navbar {
	height: 52px;
	line-height: 52px;
	background-color: #fff;
	.breadcrumb {
		font-size: 20px;
		color: #000;
		padding: 0 15px;
		vertical-align: middle;
		cursor: pointer;
	}
}
</style>


