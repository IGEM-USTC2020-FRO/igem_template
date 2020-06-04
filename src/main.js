import Vue from 'vue'
import App from './App.vue'

// vue-router
import router from "@/router";

// axios
import '@/axios'

// vuex
import store from '@/store'

// 配置 mock,只在 mock 环境使用
(process.env.VUE_APP_MOCK === 'true' || process.env.VUE_APP_MOCK === true)? require('@/mock/index'): null



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
