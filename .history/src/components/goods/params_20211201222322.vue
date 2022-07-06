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

              <el-tab-pane label="动态参数" name="many">
                  <el-button type="primary" size='mini' :disabled='isBtnDisabled'>添加参数</el-button>

                  <!-- 动态参数表格 -->
                  <el-table :data=" manyTableData" border stripe>
                      <el-table-column type="index">
                      </el-table-column>
                    <el-table-column label='参数' prop="attr_name">
                      </el-table-column>
                         <el-table-column label='操作' >
                             <template slot-scope="scope">
                                 <el-button type="primary" icon="el-icon-edit">编辑</el-button>
                                 <el-button type="primary" icon="el-icon-edit"></el-button>
                             </template>
                      </el-table-column>
                  </el-table>
              </el-tab-pane>
              <el-tab-pane label="静态属性" name="only">
                  <el-button type="primary" size='mini' :disabled='isBtnDisabled'>添加属性</el-button>
              </el-tab-pane>
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
           activeName:'many',
           //动态参数数据
           manyTableData:[],
           //静态属性数据
           onlyTableData:[]

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
       async  handleChange(){
             this.getParamsData()
         },

         //tab页签点击事件的处理函数
         handleTabClick(){
             console.log(this.activeName)
             this.getParamsData()
         },

       //获取参数的列表数据
       async  getParamsData(){
                      if(this.selectedCateKeys.length!==3){
                this.selectedCateKeys = []
                return 
            }
             
             //证明选中的是三级分类
            console.log(this.selectedCateKeys)
            //根据所选分类的id,和当前所处的面板，获取对应的参数
         const {data:res} = await this.$http.get('categories/${this.cateId}/attributes',{params:{sel:this.activeName}})

         if(res.meta.status !==200){
            return this.$message.error('失败信息')
         }

         console.log(res.data)

         if(this.activeName === 'many'){
             this.manyTableData = res.data
         }else{
             this.onlyTableData = res.data
         }
         }
    },

    computed:{

        isBtnDisabled(){
            if(this.selectedCateKeys.length!==3){
                return true
            }

            return false
        },

        //当前选中的三级分类的id
        cateId(){
            if(this.selectedCateKeys.length === 3){
                return this.selectedCateKeys[2]
            }
            return null;
        }


    }
}
</script>




<style lang="less" scoped>
.cat_opt{
    margin: 15px 0;
}

</style>