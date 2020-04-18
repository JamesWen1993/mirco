import testUI from "./index.vue";

testUI.install = function (Vue) {
  Vue.component(testUI.name, testUI);
};

export default testUI;
