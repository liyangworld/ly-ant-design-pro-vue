import Vue from "vue"
import types from "@/store/mutation-types"
import { login, logout } from "@/api/user"

export default {
  state: {
    token: "",
    name: "",
    welcome: "",
    avatar: "",
    roles: [],
    info: {},
  },
  mutations: {
    [types.USER_TOKEN]: (state, token) => {
      state.token = token
      Vue.ls.set(types.USER_TOKEN, token, 7 * 24 * 60 * 60 * 1000)
    },
    [types.USER_NAME]: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    [types.USER_AVATAR]: (state, avatar) => {
      state.avatar = avatar
    },
    [types.USER_ROLES]: (state, roles) => {
      state.roles = roles
    },
    [types.USER_INFO]: (state, info) => {
      state.info = info
    },
  },
  actions: {
    async login({ commit }, userInfo) {
      try {
        const res = await login(userInfo)
        const { result } = res
        commit(types.USER_TOKEN, result.token)
      } catch (error) {
        console.log(error)
      }
    },
    async logout({ commit }) {
      commit(types.USER_TOKEN, "")
      commit(types.USER_ROLES, [])

      try {
        await logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
