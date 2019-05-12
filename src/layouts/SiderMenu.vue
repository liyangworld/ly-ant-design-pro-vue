<template>
  <a-layout-sider
    :class="['sider', theme]"
    width="256px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"
    :theme="theme"
  >
    <Logo />
    <div class="menu-content">菜单</div>
  </a-layout-sider>
</template>

<script>
import Logo from "@/components/tools/Logo"

export default {
  name: "SiderMenu",
  props: {
    theme: {
      type: String,
      required: false,
      default: "dark",
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Logo,
  },
}
</script>
