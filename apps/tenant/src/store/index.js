import Vue from 'vue'
import Vuex from 'vuex'
import Lockr from "lockr";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tenantLogin:'',
    tenant:'',
  },
  mutations: {
    save(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("tenantLogin", Name);
      state.tenantLogin = Name;
    },
    get(state){
      Lockr.prefix = "lockr";
      state.tenantLogin = Lockr.get("tenantLogin");
    },
    savetenant(state,Name){
      Lockr.prefix = "lockr";
      Lockr.set("tenant", Name);
      state.tenant = Name;
    },
    gettenant(state){
      Lockr.prefix = "lockr";
      state.tenant = Lockr.get("tenant");
    },
  },
  actions: {
  },
  modules: {
  }
})
