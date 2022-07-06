<template>
    <div>
        <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
</el-breadcrumb>


<!-- 卡片视图区 -->
<el-card>
<el-row :gutter="10">
    <el-col :span="6"></el-col>
    <el-col :span="6"></el-col>
</el-row>
</el-card>

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