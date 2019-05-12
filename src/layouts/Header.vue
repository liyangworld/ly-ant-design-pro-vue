<template>
  <transition name="showHeader">
    <div v-show="visible" class="header-animation">
      <a-layout-header
        :class="[
          fixedHeader && 'ant-header-fixedHeader',
          sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed',
        ]"
        style="padding: 0"
      >
        <div v-if="layoutMode === 'sidemenu'" class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="$emit('toggleCollapsed')"
          ></a-icon>
          <user-menu></user-menu>
        </div>
        <div v-else :class="['top-nav-header-index', navTheme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <Logo class="top-nav-header" :show-title="device !== 'mobile'" />
              <div v-if="device !== 'mobile'">菜单</div>
              <a-icon
                v-else
                class="trigger"
                :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                @click="toggle"
              />
            </div>
            <user-menu class="header-index-right"></user-menu>
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<script>
import { mixinStoreApp } from "@/mixins/mixin"
import Logo from "@/components/tools/Logo"
import UserMenu from "@/components/tools/UserMenu"

export default {
  name: "GlobalHeader",
  components: { Logo, UserMenu },
  mixins: [mixinStoreApp],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: true,
      oldScrollTop: 0,
    }
  },
  mounted() {
    document.body.addEventListener("scroll", this.handleScroll, {
      passive: true,
    })
  },
  beforeDestroy() {
    document.body.removeEventListener("scroll", this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      if (!this.autoHideHeader) {
        return
      }

      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop
      if (!this.ticking) {
        this.ticking = true
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true
          }
          this.oldScrollTop = scrollTop
          this.ticking = false
        })
      }
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
.header-animation {
  position: relative;
  z-index: 2;
}
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}
</style>
