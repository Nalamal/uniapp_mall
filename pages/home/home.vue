<template>
	<view class="home">
		home
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getHomeMultidata
	} from '@/service/home.js'
	import {
		useHomeStore
	} from '../../store/home';


	const homeStore = useHomeStore()
	onLoad(() => {
		// 触发一个异步的action（获取首页轮播数据）
		homeStore.fetchHomeMultidata()
	})
</script>

<style lang="scss">

</style>