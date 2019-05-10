<template>
  <a-layout>
    <sider-menu :theme="navTheme" :collapsed="collapsed" :collapsible="true" />
    <a-layout style="min-height: 100vh;">
      <a-layout-header style="background: #fff; padding: 0">
        <Header
          :collapsed="collapsed"
          @toggleCollapsed="collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content>
        <router-view />
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
import defaultSettings from "@/config/defaultSettings"
import { mixinStoreApp } from "@/mixins/mixin"

export default {
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer,
  },
  mixins: [mixinStoreApp],
  data() {
    return {
      collapsed: false,
      production: defaultSettings.production,
    }
  },
}
</script>
