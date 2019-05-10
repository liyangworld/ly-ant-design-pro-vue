import Vue from "vue"
import types from "@/store/mutation-types"

export default {
  state: {
    layout: "", // 导航布局
    theme: "", // 导航主题色配置
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
  },
}
