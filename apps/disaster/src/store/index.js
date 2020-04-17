import Vue from 'vue'
import Vuex from 'vuex'
import Lockr from "lockr";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    disasterLogin:'',
    disaster:'',
  },
  mutations: {
    save(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("disasterLogin", Name);
      state.disasterLogin = Name;
    },
    get(state){
      Lockr.prefix = "lockr";
      state.disasterLogin = Lockr.get("disasterLogin");
    },
    savedisaster(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("disaster", Name);
      state.disaster = Name;
    },
    getdisaster(state){
      Lockr.prefix = "lockr";
      state.disaster = Lockr.get("disaster");
    },
  },
  actions: {
  },
  modules: {
  }
})
