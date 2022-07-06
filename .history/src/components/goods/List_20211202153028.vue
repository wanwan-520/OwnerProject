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


<!-- 表格区域 -->
<el-table :data="goodlist" border stripe>
<el-table-column type="index" >
</el-table-column>
<el-table-column label="商品名称" prop='goods_name'>
</el-table-column>
<el-table-column label="商品价格/元" prop='goods_price' width="95px">
</el-table-column>
<el-table-column label="商品重量" prop='goods_weight' width='70px'>
</el-table-column>
<el-table-column label="创建时间" prop='add_time' width='140px'>
    <template slot-scope="scope">
            {{scope.row.add_time | dateFormat}}
    </template>
</el-table-column>
<el-table-column label="操作" width='130px'>
    <template slot-scope="scope">
           <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
           <el-button type="danger" icon="el-icon-delete" size='mini'></el-button>
    </template>
</el-table-column>
</el-table>

<!-- 分页区域展示 -->
<el-pagination
      @size-change=" handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[5, 10, 20, 40]"
      :page-size=""
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
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
            goodlist:[],
            //总数据条数
            total:0
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
         this.goodlist = res.data.goods
         this.total = res.data.total
        },

        handleSizeChange(newSize){
             this.queryInfo.pagesize = newSize
             this.getGoodList()
        },

        handleCurrentChange(newPage){
              this.queryInfo.pagenum = newPage
             this.getGoodList()
        }
    }
}


</script>

<style lang="less" scoped>

</style>