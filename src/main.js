/*
 * @Author: zhy
 * @Date: 2021-08-06 17:01:14
 * @Description:
 * @LastEditTime: 2022-04-05 12:09:43
 */
import Vue from 'vue'

import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
Vue.use(ElementUI);
Vue.config.productionTip = false
console.log(router);
window.vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
