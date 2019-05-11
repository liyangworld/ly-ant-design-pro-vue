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
      <!-- 控制按钮 -->
      <template v-slot:handle>
        <div class="setting-drawer-handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <!-- 内容 -->
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
          <div class="block-checkbox">
            <a-tooltip title="侧边栏导航">
              <div class="item" @click="handleLayout('sidemenu')">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
                  alt="sidemenu"
                />
                <div class="selectIcon" v-if="layoutMode === 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>

            <a-tooltip title="顶部栏导航">
              <div class="item" @click="handleLayout('topmenu')">
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                  alt="topmenu"
                />
                <div class="selectIcon" v-if="layoutMode !== 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
        </div>
        <a-divider />
        <div>
          <h3>其他设置</h3>
          <div>
            <a-list>
              <a-list-item>
                <a-list-item-meta title="色弱模式"></a-list-item-meta>
                <a-switch
                  v-slot:actions
                  size="small"
                  :defaultChecked="colorWeak"
                  @change="onColorWeak"
                />
              </a-list-item>
            </a-list>
          </div>
        </div>
        <a-divider />
        <div>
          <a-button @click="doCopy" icon="copy" block>拷贝设置</a-button>
          <a-alert type="warning" :style="{ marginTop: '24px' }">
            <span slot="message">
              配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件
              <a
                href="https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/defaultSettings.js"
                target="_blank"
                >src/config/defaultSettings.js</a
              >
            </span>
          </a-alert>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import types from "@/store/mutation-types"
import { mixinStoreApp } from "@/mixins/mixin"
import { updateColorWeak } from "./settingConfig.js"
import defaultSettings from "@/config/defaultSettings"

export default {
  mixins: [mixinStoreApp],
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    if (this.colorWeak !== defaultSettings.colorWeak) {
      updateColorWeak(this.colorWeak)
    }
  },
  methods: {
    onClose() {
      this.visible = false
    },
    handleMenuTheme(theme) {
      this.$store.commit(types.APP_NAV_THEME, theme)
    },
    handleLayout(layout) {
      this.$store.commit(types.APP_LAYOUT_MODE, layout)
    },
    onColorWeak(checked) {
      this.$store.commit(types.APP_COLOR_WEAK, checked)
      updateColorWeak(checked)
    },
    doCopy() {
      const text = `export default {
        navTheme: '${this.navTheme}',
        colorWeak: '${this.colorWeak}',
        production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
        // vue-ls options
        storageOptions: {
          namespace: 'pro__',
          name: 'ls',
          storage: 'local',
        }
      }`
      this.$copyText(text)
        // eslint-disable-next-line no-unused-vars
        .then(message => {
          this.$message.success("复制完毕")
        })
        .catch(err => {
          console.log("copy.err", err)
          this.$message.error("复制失败")
        })
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
