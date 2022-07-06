//项目发布阶段需要用到的babel插件
const prodplugins = []
if(process.env.NODE_ENV === 'production'){
  prodplugins.push('transform-remove-console')
}


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    发布产品shi
    ...prodplugins
  ]
}
