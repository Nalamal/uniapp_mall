"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit }) {
    function handleItemClick(item) {
      emit("itemClick", item);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => handleItemClick(item), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/WorkSpace/Nalamal/code/uniapp_mall/pages/home/cpns/home-recommend.vue"]]);
wx.createComponent(Component);
