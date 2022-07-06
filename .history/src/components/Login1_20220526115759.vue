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
               this.$refs.loginFormRef.validate(async valid=>{
                   
               })
           }    
    },

    computed:{
          
    }
}
</script>

<style lang="less" scoped>

</style>