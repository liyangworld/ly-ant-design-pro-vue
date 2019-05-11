<template>
  <div class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="$emit('toggleCollapsed')"
    ></a-icon>
    <div class="global-header-right">头部菜单</div>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="less" scoped>
.trigger {
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.global-header-right {
  float: right;
  height: 100%;
  overflow: hidden;
}
</style>
