import Vue from "vue"
import store from "@/store"
import router from "@/router"

import "@/core/use"
import bootstrap from "@/core/bootstrap"

import App from "./App.vue"
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    bootstrap()
  },
}).$mount("#app")
