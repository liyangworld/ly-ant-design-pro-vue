import { mapState } from "vuex"

const mixinStoreApp = {
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout,
      navTheme: state => state.app.theme,
    }),
  },
  methods: {
    isTopMenu() {
      return this.layoutMode === "topmenu"
    },
    isSideMenu() {
      return !this.isTopMenu()
    },
  },
}

export { mixinStoreApp }