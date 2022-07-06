<template>
    <div>
     
            <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品分类</el-breadcrumb-item>
</el-breadcrumb>


<!-- 卡片视图区域 -->
<el-card>
  <el-row :gutter="10">
      <el-col >
          <el-button type="primary">添加分类</el-button>
      </el-col>
  </el-row>

<tree-table :data='catalist' :columns='columns'
:selection-type='false' :expand></tree-table>

</el-card>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            queryInfo:{
                type:3,
                pagenum:1,
                pagesize:5
            },
            catelist:[],
            //总数据条数
            total:0,
            //为table指定列的定义
            columns:[{
                label:'分类名称',
                prop:'cat_name'
            }]
        }
    },

    created(){
           this.getCateList()
    },

    methods:{
        //获取商品分类数据
        async getCateList(){
          const {data:res} =   await this.$http.get('categories',{params:this.queryInfo})

          if(res.meta.data!==200){
              return this.$message.error('获取失败的商品')
          }


          //把数据列表赋值给Cate
          this.catelist = res.data.result
        //为总数据条数赋值
        this.total = res.data.total
         }
    }
}
</script>

<style lang="less" scoped>

</style>