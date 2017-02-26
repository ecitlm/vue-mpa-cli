/**
 * User: ecitlm@163.com
 * Date: Created  on 2017/2/25 14:04.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import data from './modules/data.js'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        data
    }
})