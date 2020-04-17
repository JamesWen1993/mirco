module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-selector-namespace":{
      namespace(css) {
        //iview的样式不需要添加命名空间
        if (css.includes('ivu.scss')) return '';
        return '#disaster' // 返回要添加的类名
      }
    }
  },
};
