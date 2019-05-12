import Vue from "vue"
import types from "@/store/mutation-types"
import { DEVICE_TYPE } from "@/utils/device"

export default {
  state: {
    layout: "", // 导航布局
    theme: "", // 导航主题色配置
    weak: false, // 色弱模式
    device: DEVICE_TYPE.DESKTOP,
    sidebar: true, // 根据设备类型（PC、手机等）判断是否显示左侧菜单
    contentWidth: "",
    fixedHeader: false,
    autoHideHeader: false,
  },
  mutations: {
    [types.APP_LAYOUT_MODE]: (state, layout) => {
      state.layout = layout
      Vue.ls.set(types.APP_LAYOUT_MODE, layout)
    },
    [types.APP_NAV_THEME]: (state, theme) => {
      state.theme = theme
      Vue.ls.set(types.APP_NAV_THEME, theme)
    },
    [types.APP_COLOR_WEAK]: (state, weak) => {
      state.weak = weak
      Vue.ls.set(types.APP_COLOR_WEAK, weak)
    },
    [types.APP_DEVICE]: (state, device) => {
      state.device = device
    },
    [types.APP_SIDEBAR]: (state, sidebar) => {
      state.sidebar = sidebar
      // 存不存本地皆可以，因为每次进入应用都要重新获取设备型号的，存在本地的唯一好处就是进入应用重新获取之前便可以使用上次获取到的结果
      Vue.ls.set(types.APP_SIDEBAR, sidebar)
    },
    [types.APP_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type
      Vue.ls.set(types.APP_CONTENT_WIDTH, type)
    },
    [types.APP_FIXED_HEADER]: (state, fixed) => {
      state.fixedHeader = fixed
      Vue.ls.set(types.APP_FIXED_HEADER, fixed)
    },
    [types.APP_AUTO_HIDE_HEADER]: (state, autoHideHeader) => {
      state.autoHideHeader = autoHideHeader
      Vue.ls.set(types.APP_AUTO_HIDE_HEADER, autoHideHeader)
    },
  },
}
