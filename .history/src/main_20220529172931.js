//所有组件的入口文件
import Vue from 'vue'
import App from './App.vue'
//引入路由导航守卫
import router from './router'
//引入element组件库
import './plugins/element.js'
//引入字体样式表
import './assets/fonts/iconfont.css'
// 引入全局样式表
import './assets/CSS/global.css'
import TreeTable from 'vue-table-with-tree-grid'
import VueQuillEditor from 'vue-quill-editor'

//导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//导入nprogress的JS与CSS
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'


//ajax请求设置项 引入axios库
import axios from 'axios'

// 配置请求的根路径(线上地址)
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//在request的拦截器中，展示进度条nProgress.start()
axios.interceptors.request.use(config=>{
     nProgress.start();
    //  console.log(config);
    
     config.headers.Authorization = window.sessionStorage.getItem('token')
     //
     return config;

})

axios.interceptors.request.use(config=>{
  let userinfo = wiondow.sessionStorage.getItem('userinfo')
  if(userinfo){
    let token = JSON.parse(userinfo).token
    config.headers.Authorization = 'Bearer'+token
  }
   return config;
   
}),function(error){
  return Promise.re
}

//在response 拦截器中，隐藏进度条 nProgress.done()
axios.interceptors.response.use(config=>{
    nProgress.done();
    return config
})

//挂载axios 配置Vue的继承人员
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)
//将富文本编辑器注册为全局可用的文本编辑器
Vue.use(VueQuillEditor)

Vue.filter('dateFormat',function(originVal){
  const dt = new Date(originVal)


  const y = dt.getFullYear()
  const m = (dt.getMonth()+1+'').padStart(2,'0')
  const d = (dt.getDate()+'').padStart(2,'0')

  const hh = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() + '').padStart(2,'0')
  const ss = (dt.getSeconds() + '').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
