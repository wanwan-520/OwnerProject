<template>
    <div>

   <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加商品</el-breadcrumb-item>
</el-breadcrumb>

<!-- 卡片视图区 -->
<el-card>
  <el-alert
    title="添加商品"
    type="info"
    center
    show-icon :closable="false">
  </el-alert>

<!-- 步骤条组件 -->
  <el-steps :space="200" :active="1" finish-status="success">
  <el-step title=""></el-step>
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="步骤 3"></el-step>
  <el-step title="步骤 3"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>



</el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },

    created(){

    },

methods:{

}
    
}
</script>

<style lang="less" scoped>

</style>