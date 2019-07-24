<template>
	<nav class="navbar">
		<i :class="['breadcrumb', opened ? 'el-icon-s-fold' : 'el-icon-s-unfold']" @click="handleToggleSidebar"></i>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Navbar',
	computed: {
		...mapGetters([
			'opened'
		])
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
	}
}
</style>


