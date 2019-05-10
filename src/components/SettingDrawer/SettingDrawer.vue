<template>
  <div class="setting-drawer" ref="settingDrawer">
    <a-drawer
      width="300"
      placement="right"
      :visible="visible"
      :closable="false"
      @close="onClose"
      :getContainer="() => $refs.settingDrawer"
    >
      <template v-slot:handle>
        <div class="setting-drawer-handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div class="setting-drawer-content">
        <div>
          <h3>整体风格定制</h3>
          <div class="block-checkbox">
            <!-- 暗色 -->
            <a-tooltip>
              <template v-slot:title>
                <div>暗色</div>
              </template>
              <div class="item" @click="handleMenuTheme('dark')">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
                  alt="dark"
                />
                <div class="selectIcon" v-if="navTheme === 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
            <!-- 亮色 -->
            <a-tooltip>
              <template v-slot:title>
                <div>亮色</div>
              </template>
              <div class="item" @click="handleMenuTheme('light')">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
                  alt="light"
                />
                <div class="selectIcon" v-if="navTheme !== 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
        </div>
        <a-divider />
        <div>
          <h3>导航模式</h3>
          <a-radio-group
            name="navLayout"
            :value="$route.query.navLayout || 'left'"
            @change="e => handleSettingChange('navLayout', e.target.value)"
          >
            <a-radio value="left">左侧</a-radio>
            <a-radio value="top">顶部</a-radio>
          </a-radio-group>
        </div>
        <a-divider />
      </div>
    </a-drawer>
  </div>
</template>
<script>
import defaultSettings from "@/config/defaultSettings"
import types from "@/store/mutation-types"
import { mixinStoreApp } from "@/mixins/mixin"

export default {
  mixins: [mixinStoreApp],
  data() {
    return {
      visible: false,
      baseConfig: Object.assign({}, defaultSettings),
    }
  },
  methods: {
    onClose() {
      this.visible = false
    },
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } })
    },
    handleMenuTheme(theme) {
      this.baseConfig.navTheme = theme
      this.$store.commit(types.APP_NAV_THEME, theme)
    },
  },
}
</script>

<style lang="less" scoped>
.setting-drawer-handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
  cursor: pointer;
  pointer-events: auto;
}
.setting-drawer-content {
  .block-checkbox {
    display: flex;
    .item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }
      .selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: #1890ff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>
