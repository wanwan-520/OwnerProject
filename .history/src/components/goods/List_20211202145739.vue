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
            queryInfo:{
                query:'',
                pagenum:1,
                pagesize:10
            },

            //商品列表
            Goodlist
        }
    },
    
    created(){
         this.getGoodList()
    },

    methods:{
        //根据分页获取相应的商品列表
     async getGoodList(){
         const {data:res} = await this.$http.get('goods',{params:this.queryInfo})

         if(res.meta.status !== 200){
             return this.$message.error('失败')
         }

         this.$message.success('成功')
        }
    }
}


</script>

<style lang="less" scoped>

</style>