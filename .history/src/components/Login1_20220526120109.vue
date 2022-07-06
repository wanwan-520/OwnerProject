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
            
              loginForm:{
                  username:'admin',
                  password:'123456'
              },

              loginFormRules:{

                  username:[{},{}],
                  password:[{},{}]
              }


        }
    },

    methods:{
           login(){
               //获取表单ref引用规则的相关属性与方法
               this.$refs.loginFormRef.validate(async valid=>{
                   if(!valid)return ;

                   const {data:res} = await this.$http.post('login',this.loginForm)





               })
           }    
    },

    computed:{
          
    }
}
</script>

<style lang="less" scoped>

</style>