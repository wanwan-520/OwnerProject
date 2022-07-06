import Vue from 'vue'
//引入路由导航组件
import VueRouter from 'vue-router'
//12个自定义组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
import GoodList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Order from '../components/order/Order.vue'
import Report from '../components/report/report.vue'

Vue.use(VueRouter)

//添加编程式路由导航规则
const router =  new VueRouter({
  routes: [
    // 使用重定向的组件
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home,redirect:'/welcome',children:[
      {path:'/welcome',component:Welcome},{path:'/users',component:Users},
      {path:'/rights',component:Rights},
      {path:'/roles',component:Roles},
      {path:'/categories',component:Cate},
      {path:'/params',component:Params},
      {path:'/goods',component:GoodList},
      {path:'/goods/add',component:Add},
      {path:'/orders',component:Order},
      {path:'/reports',component:Report},
    ] },
    
  ]
})


// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to表示将要访问的路径
  // from表示从哪个路径跳转过来
  // next表示一个函数，表示执行
  // next() 放行 next('/login') 强制跳转
  if(to.path==='/login')return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

//默认暴露
export default router