<template>
    <div>
          <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>

   <!-- 卡片区 -->
   <el-card>
       <!-- 警告区域 -->
      <el-alert
          title="FBI警告区域"
          type="warning" :closable="false" show-icon>
      </el-alert>

             <!-- 选择商品分类 -->
          <el-row class="cat_opt">
              <el-col >
                   <span>选择商品分类:</span>
                   <!-- 选择商品分类的级联选择框 -->
                    

              </el-col>
           
          </el-row>
   </el-card>




    </div>
</template>



<script>
export default {
    data(){

        return{

        }
    },

    created () {
        this.getCateList()
    },

    methods:{
         //获取所有的商品分类列表
         getCateList(){
           const {data:res} =  this.$http.get('categories')
           if(res.meta.status !==200){
               return 
           }
         }
    }
}
</script>




<style lang="less" scoped>
.cat_opt{
    margin: 15px 0;
}

</style>