const VueAxios = {
  vm: {},
  install(Vue, instance) {
    if (this.installed) {
      return
    }
    this.installed = true

    if (!instance) {
      console.error("You have to install axios")
      return
    }
    Vue.axios = instance

    Vue.prototype.axios = instance
    Vue.prototype.$http = instance
  },
}

export { VueAxios }
