import Vue from "vue"
import Router from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(Router)

const constantRouterMap = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layouts/UserLayout"),
    redirect: "/user/login",
    children: [
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Register"),
      },
    ],
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "exceptions" */ "@/views/exceptions/404"),
  },
]

const asyncRouterMap = [
  {
    path: "/",
    name: "index",
    meta: { title: "首页" },
    redirect: "/dashboard/analysis",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layouts/BasicLayout"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        redirect: "/dashboard/analysis",
        meta: { title: "仪表盘", keepAlive: true, permission: ["dashboard"] },
        component: () =>
          import(/* webpackChunkName: "layout" */ "@/layouts/RouteView"),
        // component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () => import("@/views/dashboard/Analysis"),
            meta: {
              title: "分析页",
              keepAlive: false,
              permission: ["dashboard"],
            },
          },
        ],
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
  },
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap,
})

router.addRoutes(asyncRouterMap)

router.beforeEach((to, form, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
