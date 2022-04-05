/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-05 11:36:08
 * @LastEditTime: 2022-04-05 11:47:55
 */
/*
 * @Author: zhy
 * @Date: 2021-09-14 14:00:10
 * @Description:
 * @LastEditTime: 2022-01-05 09:55:28
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
    },
})

export default store
