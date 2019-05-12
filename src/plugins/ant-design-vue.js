import Vue from "vue"

import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Tooltip,
  Divider,
  Alert,
  message,
  notification,
  List,
  Switch,
  Badge,
  Popover,
  Dropdown,
  Spin,
  Tabs,
  Avatar,
  Menu,
} from "ant-design-vue"

Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Tooltip)
Vue.use(Divider)
Vue.use(Alert)
Vue.use(List)
Vue.use(Switch)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(Spin)
Vue.use(Tabs)
Vue.use(Avatar)
Vue.use(Menu)

Vue.use(notification)
Vue.prototype.$message = message
Vue.prototype.$notification = notification
