<template>
<!-- 模板区 -->
    <!-- 先绑定一个容器 -->
    <div class="login_container">
    <!-- 布置一个子模块 -->
     <div class="login_box">
         <!-- 头像区域 -->
         <div class='avatar_box'>
             <img src="../assets/heima.png" alt="">
         </div>
         <!-- 登录表单区域 -->
         <!-- 使用el-element组件库 -->

  <el-form  ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <!-- 用户名 -->
  <el-form-item prop="username">
      <!-- 可以入第三方库使用 优先阿里、腾讯 -->
    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
  </el-form-item>
     <!-- 密码区 -->
   <el-form-item prop="password">
    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
  </el-form-item>
    <!-- 按钮区 -->
   <el-form-item class="btns">
       <!-- 表单的验证按钮 -->
   <el-button @click="login">登录</el-button>
   <!-- 表单的重置按钮 -->
   <el-button type="info" @click='resetLoginForms'>重置</el-button>
  </el-form-item>
  </el-form>
  </div>
    </div>
</template>

<script>
// 行为区域
export default {
    data(){
       return{

           //表单的结构形式
           loginForm:{
               username:'admin',
               password:'123456'
           },

           //表单的验证规则
           loginFormRules:{
               username:[
                    { required: true, message: '请输入登录名字', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
               ],
               password:[
                   { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
               ]
           }
       }
    },

    methods:{
        //点击重置按钮
        resetLoginForms(){
            this.$refs.loginFormRef.resetFields()
        },

        login(){
            this.$refs.loginFormRef.validate(async valid=>{
            //    console.log(valid)
            if(!valid) return;

            //发送请求进行登录
            const {data:res} =await this.$http.post('login',this.loginForm);
            // console.log(res)
              if(res.meta.status !==200) return this.$message.error('失败');
                this.$message.success('成功');
                console.log(res);

               //浏览器保存token内容
                window.sessionStorage.setItem('token',res.data.token); 
                //添加路由导航守卫
                this.$router.push('/home');
            })
        }
    }


};
</script>

<style lang = 'less' scoped>
/* 样式区域 */
.login_container{
    background-color: rgba(184, 162, 162, 0.226);
    height: 100%;
}


.login_box{
    width:450px;
    height:300px;
    background-color: white;
    border-radius: 2px;
    position: absolute;
    left:50%;
    top:50%;
    /* 横纵坐标偏移量为一半 */
    transform: translate(-50%,-50%);

    /* 圆形图像区域的样式设计 */
    .avatar_box{
        height:130px;
        width:130px;
        /* 添加圆角 */
        border:1px solid rgb(179, 19, 19);
        border-radius: 50%;
        /* 内边距 */
        padding:10px;
        box-shadow: 0 0 10px rgb(95, 87, 87);
        position: relative;
        left:50%;
        transform:translate(-50%,-50%) ;
        background-color: white;
        img{
            height:100%;
            width:100%;
            border-radius: 50%;
            background-color: rgb(56, 66, 180);
        }
    }

}


.btns{
    display: flex;
    justify-content: flex-end;
}

.login_form{
    position: absolute;
    bottom: 0;
    width:100%;
    padding: 0px 35px;
    box-sizing: border-box;
}
</style>
