<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<HomeBanner :banners="banners" @bannerItemClick="handleBannerItemClick"></HomeBanner>
		<!-- 推荐栏组件 -->
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { useHomeStore } from '@/store/home'
	import { storeToRefs } from 'pinia'
	import HomeBanner from './cpns/home-banner.vue'

	const homeStore = useHomeStore()
	const { banners, recommonds } = storeToRefs(homeStore)
	onLoad(() => {
		// 触发一个异步的action（获取首页轮播数据）
		homeStore.fetchHomeMultidata()
	})

	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
</script>

<style lang="scss">

</style>