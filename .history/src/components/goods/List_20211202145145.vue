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
    <el-col :span="6">
<el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </el-col>
    <el-col :span="4">
        <el-button type='primary'>添加商品</el-button>
    </el-col>
</el-row>
</el-card>

    </div>
</template>

<script>
export default {
    data(){
        return {
            //查询参数对象
            qu
        }
    },
    
    created(){
         this.getGoodList()
    },

    methods:{
        //根据分页获取相应的商品列表
        getGoodList(){

        }
    }
}


</script>

<style lang="less" scoped>

</style>