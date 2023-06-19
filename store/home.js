import {
	defineStore
} from 'pinia'
import {
	getHomeMultidata
} from '../service/home'

export const useHomeStore = defineStore('homeStore', {
	state: () => {
		return {
			banners: []
		}
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据（异步的action）
		async fetchHomeMultidata() {
			const res = await getHomeMultidata();
			console.log('fetchHomeMultidata=>', res);
		}
	}
})