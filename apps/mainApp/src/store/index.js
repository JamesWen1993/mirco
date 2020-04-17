import Vue from 'vue'
import Vuex from 'vuex'
import Lockr from "lockr";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:'',
    name:'',
  },
  mutations: {
    save(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("login", Name);
      state.login = Name;
    },
    get(state){
      Lockr.prefix = "lockr";
      state.login = Lockr.get("login");
    },
    saveName(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("name", Name);
      state.name = Name;
    },
    getName(state){
      Lockr.prefix = "lockr";
      state.name = Lockr.get("name");
    },
  },
  actions: {
  },
  modules: {
  }
})
