"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.image,
            b: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/WorkSpace/Nalamal/code/uniapp_mall/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);
