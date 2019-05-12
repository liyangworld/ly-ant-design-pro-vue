import api from "./index"
import { axios } from "@/utils/request"

export function login(params) {
  return axios({
    url: api.login,
    method: "post",
    data: params,
  })
}

export function logout() {
  return axios({
    url: api.logout,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
}
