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
                    <el-cascader props.trigger="hover" :options="catelist"
                        :props="cateProps" v-model="selectedCateKeys">
                    </el-cascader>

              </el-col>
           
          </el-row>

          <el-tabs v-model="activeName" @tab-click="handleTabClick">

              <el-tab-pane label="动态参数" name="first">
                  <el-button type="primary"></el-button>
              </el-tab-pane>
              <el-tab-pane label="静态属性" name="second">静态属性</el-tab-pane>
          </el-tabs>
   </el-card>




    </div>
</template>



<script>
export default {
    data(){

        return{
           //商品分类列表
           catelist:[],
           //级联选择框的配置对象
           cateProps:{
               value:'cat_id',
               label:'cat_name',
               children:'children'
           },

           //级联选择框双向数据绑定到的数组
           selectedCateKeys:[],

           //激活的页签
           activeName:'first'

        }
    },

    created () {
        this.getCateList()
    },

    methods:{
         //获取所有的商品分类列表
      async getCateList(){
           const {data:res} =await this.$http.get('categories')
           if(res.meta.status !==200){
               return this.$message.error('失败信息')
           }

           this.catelist = res.data

           console.log(this.catelist)
         },

         //级联选择框选中会触发这个函数
         handleChange(){
            if(this.selectedCateKeys.length!==3){
                this.selectedCateKeys = []
                return 
            }

            console.log(this.selectedCateKeys)
         },

         //点击事件的处理
         handleTabClick(){

         }

    }
}
</script>




<style lang="less" scoped>
.cat_opt{
    margin: 15px 0;
}

</style>