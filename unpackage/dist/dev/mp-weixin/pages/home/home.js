"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  HomeBanner();
}
const HomeBanner = () => "./cpns/home-banner.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommonds } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultidata();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          banners: common_vendor.unref(banners)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/WorkSpace/Nalamal/code/uniapp_mall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
