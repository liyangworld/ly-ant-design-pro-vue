<template>
  <a-layout-sider
    width="256px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"
    :theme="theme"
  >
    <div class="logo">Ant Design Vue Pro</div>
    <div>菜单</div>
  </a-layout-sider>
</template>

<script>
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
}
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
  color: #fff;
  background: #002140;
}
</style>
