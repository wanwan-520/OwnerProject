<template>
    <div>
        <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>首页</el-breadcrumb-item>
  <el-breadcrumb-item>管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
</el-breadcrumb>


    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    
    created(){

    },

    methods:{

    }
}


</script>

<style lang="less" scoped>

</style>