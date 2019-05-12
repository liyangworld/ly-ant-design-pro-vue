import { mapState } from "vuex"
import types from "@/store/mutation-types"
import { deviceEnquire, DEVICE_TYPE } from "@/utils/device"

const mixinStoreApp = {
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout,
      navTheme: state => state.app.theme,
      colorWeak: state => state.app.weak,
      sidebarOpened: state => state.app.sidebar, // 是否显示左侧菜单
      device: state => state.app.device,
      contentWidth: state => state.app.contentWidth,
      fixedHeader: state => state.app.fixedHeader,
      autoHideHeader: state => state.app.autoHideHeader,
    }),
  },
  methods: {
    isTopMenu() {
      return this.layoutMode === "topmenu"
    },
    isSideMenu() {
      return !this.isTopMenu()
    },
    isMobile() {
      return this.device === DEVICE_TYPE.MOBILE
    },
    isDesktop() {
      return this.device === DEVICE_TYPE.DESKTOP
    },
    isTablet() {
      return this.device === DEVICE_TYPE.TABLET
    },
  },
}

const mixinDeviceEnquire = {
  mounted() {
    const { $store } = this
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          $store.commit(types.APP_DEVICE, DEVICE_TYPE.DESKTOP)
          $store.commit(types.APP_SIDEBAR, true)
          break
        case DEVICE_TYPE.TABLET:
          $store.commit(types.APP_DEVICE, DEVICE_TYPE.TABLET)
          $store.commit(types.APP_SIDEBAR, false)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          $store.commit(types.APP_DEVICE, DEVICE_TYPE.MOBILE)
          $store.commit(types.APP_SIDEBAR, true)
          break
      }
    })
  },
}

export { mixinStoreApp, mixinDeviceEnquire }
