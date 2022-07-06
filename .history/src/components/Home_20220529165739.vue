<template>
<el-container class="home-container">
    <!-- 页面头部区域 -->
  <el-header>
    <div>
          
          <img  src="../assets/1-4.png" alt="电商平台系统">
          <span>电商订单管理系统</span>
    </div>
      <!-- 绑定一个登录退出事件 -->
      <el-button type="primary" round @click='logout'>退出</el-button>
    </el-header>
  <!-- 页面主体区域 -->
  <el-container>
      <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '72px':'150px'">
        <!-- <h5>自定义颜色</h
        5> -->
        <!-- 侧边栏侧边区 -->
        <div class="tog-button" @click='togCollapse'>|||</div>
    <el-menu
      text-color="#fff"
      active-text-color="" unique-opened :collapse='isCollapse' 
      :collapse-transition='false'  router
      :default-active="activePath">
    <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for='item in menulist' :key='item.id'>
         <!-- 一级菜单模板区 -->
         <!-- 引入作用域插槽 -->
        <template slot="title">
            <!-- 图标 -->
          <i :class="iconsObj[item.id]"></i>
          <!-- 文本 -->
          <span>{{item.authName}}</span>
        </template>

        <!-- 二级菜单 -->
        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key='subItem.id' @click="saveNavState('/'+subItem.path)">
        <template slot="title">
        <!-- 图标 -->
        <i class="el-icon-menu"></i>
        <!-- 文本 -->
          <span>{{subItem.authName}}</span>
        </template>
        </el-menu-item>
        </el-submenu>
    </el-menu>


    </el-aside>
    <!-- 右侧内容主体 -->

    <el-main>
        <router-view></router-view>
    </el-main>

  </el-container>
</el-container>
</template>

<script>
export default {
     data(){
         return {
             menulist:[],
             iconsObj:{
                 '125':'iconfont icon-user',
                 '103':'iconfont icon-tijikongjian',
                 '101':'iconfont icon-shangpin',
                 '102':'iconfont icon-danju',
                 '145':'iconfont icon-baobiao',
             },

             isCollapse:false,
              //被激活的链接地址
              activePath:'',
         }

        
     },

     //创建生命周期钩子
     created(){
         //请求左侧菜单数据
         this.getMenuList(),
         this.activePath = window.sessionStorage.getItem('activePath')
     },

    methods:{
        // 清除表单的token,同时添加编程式路由导航守卫
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        },

        //获取所有的菜单选项
        async getMenuList(){
           const {data:res}= await this.$http.get('menus')
           if(res.meta.status !==200) return this.$message.error(res.meta.msg)
           this.menulist = res.data;
           console.log(res);
        },
       
       //点击按钮切换界面展开与折叠
       togCollapse(){
           this.isCollapse = !this.isCollapse;
       },

       //保存链接的激活状态
       saveNavState(activePath){
           window.sessionStorage.setItem('activePath',activePath);
           this.activePath = activePath;
       }

    }
}
</script>

<style lang="less" scoped>

.el-header{
   background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    // align-items: center;
    color: black;
    font-size: 25px;
    >div{
        display: flex;
        align-items: center;
        span{
            margin-left: 20px;
        };
        img{
            height: 100%;
            border:1px solid rgb(20, 198, 97);
        }
    }
    
}
.el-menu{
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    .el-submenu{
        background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);


       .
    }
}
.el-aside{
   background-color:black;
    .el-menu{
        border-right: none;
    }
}
.el-main{
    background-color: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
}

.home-container{
    height: 100%;
}

// .iconfont{
//     margin-right: 15px;
// }

.tog-button{
    background-color:rgb(24, 22, 22);
    font-size: 15px;
    line-height:20px;
    color:rgb(66, 204, 123);
    text-align: center;
    cursor: pointer;
}
</style>