<template>
    <div ref="root">hello world</div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
    //声明setUP方法
    setup(){
           const root = ref(null);
           onMounted(()=>{
               console.log(root.ref.value)
           })
     
    }
    
    

}
</script>

<style lang="less" scoped>

</style>