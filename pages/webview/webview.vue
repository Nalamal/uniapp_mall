<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
	// 接收页面传递过来的url参数
	defineProps({
		link: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">

</style>