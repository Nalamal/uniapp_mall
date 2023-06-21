"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("homeStore", {
  state: () => {
    return {
      banners: [],
      recommends: []
    };
  },
  actions: {
    // 获取首页轮播图和推荐栏的数据（异步的action）
    async fetchHomeMultidata() {
      const res = await service_home.getHomeMultidata();
      this.banners = res.data.banner.list || [];
      this.recommends = res.data.recommend.list || [];
    },
    async fetchHomeData() {
      const res = await service_home.getHomeData();
      console.log("res=>", res);
    }
  }
});
exports.useHomeStore = useHomeStore;
