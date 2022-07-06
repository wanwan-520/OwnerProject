<template>
     <!-- vue3中不能使用this属性 -->
    <div ref="root">hello world</div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
    setup(){
        const root = ref(null);
        onMounted(()=>{
            console.log(ref.value)
        })
        return {
            root
        }
    },
    
    data(){
        return{
             
              //获取表单的数据内容
              loginForm:{
                  username:'admin',
                  password:'123456'
              },

              //声明表单的验证规则
              loginFormRules:{

                  username:[{},{}],
                  password:[{},{}]
              }


        }
    },

    methods:{
           
           //声明登录方法的使用
           login(){
               //获取表单ref引用规则的相关属性与方法
               this.$refs.loginFormRef.validate(async valid=>{
                   if(!valid)return ;


                   const {data:res} = await this.$http.post('login',this.loginForm)
                   //消息框的提示输入与显示问题
                    
                   //返回状态码的过程
                   if(res.meta.status!==200)return this.$message.error('登陆失败')
                   this.$message.success('登录成功')
                   console.log(res)
  
                //保存token里面的内容
                window.sessionStorage.setItem('token',res.data.token)
                this.$router.push('/home')
               })
           },
           
           resetLoginForms(){
               //调用表单的重置属性相关方法
               this.$refs.loginFormRef.resetFields()
           }
    },

    computed:{
          
    }
}
</script>

<style lang="less" scoped>

</style>