import { defineStore } from 'pinia'
import { getHomeMultidata } from '../service/home'

export const useHomeStore = defineStore('homeStore', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据（异步的action）
		async fetchHomeMultidata() {
			const res = await getHomeMultidata()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		}
	}
})