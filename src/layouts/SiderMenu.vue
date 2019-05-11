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

<style lang="less">
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
  min-height: 100vh;

  .logo {
    position: relative;
    height: 64px;
    line-height: 64px;
    padding-left: 24px;
    overflow: hidden;
    background: #002140;
    transition: all 0.3s;
    svg,
    h1 {
      display: inline-block;
      vertical-align: middle;
    }
    svg {
      height: 32px;
      width: 32px;
    }
    h1 {
      color: #fff;
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      vertical-align: middle;
    }
  }
  .menu-content {
    color: #fff;
  }
  &.light {
    background-color: #fff;
    box-shadow: 2px 0px 8px 0px rgba(29, 35, 41, 0.05);

    .logo {
      background: #fff;
      box-shadow: 1px 1px 0px 0px #e8e8e8;

      h1 {
        color: unset;
      }
    }
    .menu-content {
      color: #000;
    }
  }
}
</style>
