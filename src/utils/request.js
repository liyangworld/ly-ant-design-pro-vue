import Vue from "vue"
import axios from "axios"
import store from "@/store"
import types from "@/store/mutation-types"

import { VueAxios } from "@/plugins/axios"
import notification from "ant-design-vue/es/notification"

// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 6000, // 请求超时时间
})

const err = error => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(types.USER_TOKEN)
    if (error.response.status === 403) {
      notification.error({
        message: "Forbidden",
        description: data.message,
      })
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      notification.error({
        message: "Unauthorized",
        description: "Authorization verification failed",
      })
      if (token) {
        store.dispatch("logout").then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

service.interceptors.request.use(config => {
  const token = Vue.ls.get(types.USER_TOKEN)
  if (token) {
    config.headers["Access-Token"] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

service.interceptors.response.use(response => {
  return response.data
}, err)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service)
  },
}

export { installer as VueAxios, service as axios }
