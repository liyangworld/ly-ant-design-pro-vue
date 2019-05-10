import Vue from "vue"
import VueStorage from "vue-ls"
import defaultSettings from "@/config/defaultSettings"

Vue.use(VueStorage, defaultSettings.storageOptions)
