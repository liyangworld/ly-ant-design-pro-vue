/**
 * 项目默认配置项
 * primaryColor - 默认主题色
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 */

export default {
  primaryColor: "#1890FF",
  layout: "sidemenu", // nav menu position: sidemenu or topmenu
  navTheme: "dark",
  production:
    process.env.NODE_ENV === "production" &&
    process.env.VUE_APP_PREVIEW !== "true",
  // vue-ls options
  storageOptions: {
    namespace: "pro__", // key prefix
    name: "ls", // name variable Vue.[ls] or this.[$ls],
    storage: "local", // storage name session, local, memory
  },
}
