<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<HomeBanner :banners="banners" @bannerItemClick="handleBannerItemClick"></HomeBanner>
		<!-- 推荐栏组件 -->
		<HomeRecommend :recommends='recommends'></HomeRecommend>
		<!-- 热门栏组件 -->
		<HomePopular></HomePopular>
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行','新款','精选']" @tabItemClick='handleTabItemClick'></tab-control>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { useHomeStore } from '@/store/home'
	import { storeToRefs } from 'pinia'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomePopular from './cpns/home-popular.vue'

	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	onLoad(() => {
		// 触发一个异步的action（获取首页轮播数据）
		homeStore.fetchHomeMultidata()
	})

	// 轮播图的点击事件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}

	// tab-control的点击事件
	function handleTabItemClick(index) {
		console.log('handleTabItemClick=>', index);
	}
</script>

<style lang="scss">

</style>