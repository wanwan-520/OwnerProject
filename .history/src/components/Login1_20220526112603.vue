<template>
     <!-- vue3中不能使用this属性 -->
    <div ref="root">hello world</div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
    //声明setup方法
    setup(){
           const root = ref(null);
           onMounted(()=>{
               console.log(root.value)//打印的内容是hello world
           })
     
     return {
         root
     }
    }
    
}
</script>

<style lang="less" scoped>

</style>