<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mixinDeviceEnquire } from "@/mixins/mixin"

export default {
  mixins: [mixinDeviceEnquire],
}
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
