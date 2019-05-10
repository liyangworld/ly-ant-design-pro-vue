import Vue from "vue"
import App from "./App.vue"
import router from "@/router/index.js"
import store from "@/store/index.js"

import "@/core/use"
import bootstrap from "./core/bootstrap"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    bootstrap()
  },
}).$mount("#app")
