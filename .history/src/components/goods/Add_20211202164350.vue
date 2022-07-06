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
  <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
  <el-step title="完成"></el-step>
</el-steps>


<!-- tabs行为区域 -->
<el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px" label-position="top" class="demo-ruleForm">
  <el-tabs v-model = "activeIndex" :tab-position="'left'" >
    <el-tab-pane label="基本信息" name="0">
        <el-form-item label="商品名称" prop="goods_name">
                <el-input v-model="addForm.goods_name" placeholder=""></el-input>
        </el-form-item>
         <el-form-item label="商品价格" prop="goods_price">
                <el-input v-model="addForm.goods_price" placeholder="" type="number"></el-input>
        </el-form-item>
         <el-form-item label="商品重量" prop="goods_weight">
                <el-input v-model="addForm.goods_weight" placeholder="" type="number"></el-input>
        </el-form-item>
         <el-form-item label="商品数量" prop="goods_number" type="number">
                <el-input v-model="addForm.goods_number" placeholder=""></el-input>
        </el-form-item>
        <!-- // -->
        <el-form-item  label="商品分类" prop="">
    <el-cascader
    v-model="value"
    :options="catelistr"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
        </el-form-item>
    </el-tab-pane>
    <el-tab-pane label="商品参数" name="1">商品参数</el-tab-pane>
    <el-tab-pane label="商品属性" name="2">商品属性</el-tab-pane>
    <el-tab-pane label="商品图片" name="3">商品图片</el-tab-pane>
    <el-tab-pane label="商品内容" name="4">商品内容</el-tab-pane>
  </el-tabs>
</el-form>






</el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
           activeIndex:0,

           //添加商品的数据对象
           addForm:{
               goods_name:'',
               goods_price:0,
               goods_weight:0,
               goods_number:0
           },
           addFormRules:{
               goods_name:[
                   {required:true,message:'请输入商品名称',trigger:'blur'},
                   
                    
               ],

               goods_price:[ {required:true,message:'请输入商品价格',trigger:'blur'},],
               goods_weight:[{required:true,message:'请输入商品重量',trigger:'blur'},],
               goods_number:[{required:true,message:'请输入商品数量',trigger:'blur'},]
           },
           addFormRef:{},

           //商品分类列表
           catelist:[]
        }
    },

    created(){
      
      this.getCateList()
    },

methods:{

  async  getCateList(){
     const {data:res} =  await  this.$http.get(`categories`)

     if(res.meta.status!==200){return this.$message.error('获取失败')
     }
    //  console.log(res);
     this.catelist = res.data;

    }
    
}
    
}
</script>

<style lang="less" scoped>

</style>