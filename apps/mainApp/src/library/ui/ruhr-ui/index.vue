<template>
  <div>
    我是全应用组件UI，温正云最帅,传递的参数：{{name}}
    <table v-if="show"></table>
  </div>
</template>

<script>
export default {
  name: "testUI",
  props: {
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 名称
    name: {
      type: String,
      default: ''
    },
    // 自定义main的class
    // ftBodyClass: [String, Function]
  }
};
</script>

