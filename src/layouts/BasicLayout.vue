<template>
  <a-layout :class="['layout', device]">
    <sider-menu
      v-if="isSideMenu()"
      :theme="navTheme"
      :collapsed="collapsed"
      :collapsible="true"
      :menus="menus"
    />
    <a-layout
      :class="[layoutMode, `content-width-${contentWidth}`]"
      style="min-height: 100vh;"
    >
      <Header
        :collapsed="collapsed"
        @toggleCollapsed="collapsed = !collapsed"
        :mode="layoutMode"
        :menus="menus"
        :theme="navTheme"
        :device="device"
      />
      <a-layout-content>
        <transition name="page-transition">
          <render-router-view />
        </transition>
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
      <!-- Setting Drawer (show in development mode) -->
      <setting-drawer v-if="!production"></setting-drawer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import SiderMenu from "./SiderMenu"
import SettingDrawer from "@/components/SettingDrawer/SettingDrawer"
import RenderRouterView from "./RenderRouterView.vue"
import defaultSettings from "@/config/defaultSettings"
import { mixinStoreApp } from "@/mixins/mixin"

export default {
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer,
    RenderRouterView,
  },
  mixins: [mixinStoreApp],
  data() {
    return {
      collapsed: false,
      production: defaultSettings.production,
      menus: [],
    }
  },
}
</script>

<style lang="less">
@import url("../styles/global.less");

/*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */

.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
