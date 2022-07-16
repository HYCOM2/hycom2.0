/*
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2020-08-26 19:35:46
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-05-21 23:22:39
 * @FilePath: \hycom_app\src\main.ts
 * @Description:
 * Copyright (c) 2022 by Xu.WANG raymondmgwx@gmail.com, All Rights Reserved.
 */
import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'
import '@/styles/index.scss'
import '@/icons/components'
import '@/permission'

/**
 * This project originally used easy-mock to simulate data requests,
 * but its official service is not stable.
 * So here We use Mock.js for a local emulation,
 * it will intercept your request and you won't see the request in the network.
 * If you remove `import '../mock'` it will automatically request easy-mock data.
 */
import '../mock' // simulation data requests

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/registerServiceWorker'

const AV = require('leancloud-storage')
AV.init({
  // serverURLs:'https://avoscloud.com',
  appId: 'vXHukUzIVdJ2vokL1Vm8cqv2-MdYXbMMI',
  appKey: 'SbIy6cVycia7S8iOt8AY70i0'
})

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
