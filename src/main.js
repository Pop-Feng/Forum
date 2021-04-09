import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//1.添加事件总线
Vue.prototype.$bus = new Vue()


//安装插件
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
