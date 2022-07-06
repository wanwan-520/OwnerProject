<template>
     <!-- 声明一个模板区 -->

    <!-- 先绑定一个容器 -->
    <div class="login_container">
    <!-- 布置一个子模块 -->
     <div class="login_box">
         <!-- 头像区域 -->
         <div class='avatar_box'>
             <img src="../assets/1-1.png" alt="风景">
         </div>
         <!-- 登录表单区域 -->
         <!-- 使用el-element组件库 -->
  <el-form  ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <!-- 用户名 -->
      子类继承父类的
  <el-form-item prop="username">
      <!-- 可以入第三方库使用 优先阿里、腾讯 加入前缀图标的内容-->
    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-users"></el-input>
  </el-form-item>
     <!-- 密码区 -->
   <el-form-item prop="password">
       <!-- 加入type属性可以进行类型转换 -->
    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-lock_fill" type="password"></el-input>
  </el-form-item>
    <!-- 按钮区 -->
   <el-form-item class="btns">
       <!-- 表单的验证按钮 -->
   <el-button type="primary" round @click="login">登录</el-button>
   <!-- 表单的重置按钮 -->
   <el-button type="info" round @click='resetLoginForms'>重置</el-button>
  </el-form-item>
  </el-form>
  </div>
    </div>
</template>


<script>
export default {
    //声明一个数据域
    data(){
       return{

           //表单的结构形式 数据绑定的结构对象
           loginForm:{
               username:'admin',
               password:'123456'
           },

           //表单的验证规则
           loginFormRules:{
               //验证用户名是否合法
               username:[
                    { required: true, message: '请输入登录名字', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
               ],
                  //验证密码是否合法
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
        
        //定义表单的验证结果
        login(){
            this.$refs.loginFormRef.validate(async valid=>{
            //    console.log(valid)
            if(!valid) return;
            
            //配置axios安装包
            //发送请求进行登录 不用async 和 await 方法返回的结果是一个promise对象
            const {data:res} =await this.$http.post('login',this.loginForm);
            // console.log(res)
            //消息提示框引入
              if(res.meta.status !==200) return this.$message.error('失败');
                this.$message.success('成功');
                console.log(res);
               
               //浏览器保存token内容
                window.sessionStorage.setItem('token',res.data.token); 
                //添加编程式路由导航守卫
                this.$router.push('/home');
            })
        },

    }


};
</script>

// 安装less组件样式库，且是局部作用域有效
<style lang = 'less' scoped>
.login_container{
    /* background-color: rgba(148, 198, 30, 0.226); */
    background-image: url("../assets/1-2.png");
    height: 100%;
}


.login_box{
    width:450px;
    height:300px;
    background-color: rgb(20, 198, 97);
    border-radius: 2px;
    /* 相对于父元素进行定位 */
    position: absolute;
    left:50%;
    top:50%;
    /* 横纵坐标偏移量为一半 */
    transform: translate(-50%,-50%);

    /* 图像区域的样式设计 */
    .avatar_box{
        height:150px;
        width:150px;
        /* 添加圆角 */
        border:1px solid rgb(20, 198, 97);
        border-radius: 50%;
        /* 内边距 */
        padding:10px;
        /* box-shadow: 0 0 10px rgb(104, 61, 111); */
        position: relative;
        left:50%;
        transform:translate(-50%,-50%) ;
        background-color: rgb(20, 142, 198);
        /* background-image: url("../assets/1-2.png"); */
        /* 设置父元素中子元素的样式属性 */
        img{
            height:100%;
            width:100%;
            border-radius: 50%;
            background-color: rgb(17, 182, 179);
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
    /* 标准盒子模型的宽度比怪异盒子模型的宽度要大 */
    box-sizing: border-box;
}
</style>
