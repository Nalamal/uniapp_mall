"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("homeStore", {
  state: () => {
    return {
      banners: [],
      recommonds: []
    };
  },
  actions: {
    // 获取首页轮播图和推荐栏的数据（异步的action）
    async fetchHomeMultidata() {
      const res = await service_home.getHomeMultidata();
      this.banners = res.data.banner.list || [];
      this.recommonds = res.data.recommond.list || [];
    }
  }
});
exports.useHomeStore = useHomeStore;
