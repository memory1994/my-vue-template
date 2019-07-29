<template>
	<nav class="navbar">
		<i :class="['breadcrumb', opened ? 'el-icon-s-fold' : 'el-icon-s-unfold']" @click="handleToggleSidebar"></i>

    <breadcrumb></breadcrumb>

		<el-dropdown>
			<div class="user-message">
				<i class="el-icon-user-solid"></i>
				<i class="el-icon-arrow-down el-icon--right"></i>
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="updatePassword">修改密码</el-dropdown-item>
				<el-dropdown-item command="logout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
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
	display: flex;
	align-items: center;
	height: 52px;
	line-height: 52px;
	background-color: #fff;
	border-bottom: 1px solid #eee;
	.breadcrumb {
		font-size: 20px;
		color: #000;
		padding: 0 15px;
		vertical-align: middle;
		cursor: pointer;
	}
}
</style>


