import Vue from "vue"
import store from "@/store"
import types from "@/store/mutation-types"
import defaultSettings from "@/config/defaultSettings"

export default function Initializer() {
  store.commit(
    types.APP_LAYOUT_MODE,
    Vue.ls.get(types.APP_LAYOUT_MODE, defaultSettings.layout),
  )
  store.commit(
    types.APP_NAV_THEME,
    Vue.ls.get(types.APP_NAV_THEME, defaultSettings.navTheme),
  )
  store.commit(
    types.APP_COLOR_WEAK,
    Vue.ls.get(types.APP_COLOR_WEAK, defaultSettings.colorWeak),
  )
}
