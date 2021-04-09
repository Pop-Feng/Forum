import Vue from 'vue'
import Vuex, { Store } from 'vuex'



//1.安装插件
Vue.use(Vuex)

//2.创建Store 对象
const state = {
  userdata: {}
}
const store = new Vuex.Store({
  state,
  mutations: {
    update(state, userdata) {
      state.userdata = userdata
    }
  }
})


//3.挂载Vue实例上
export default store