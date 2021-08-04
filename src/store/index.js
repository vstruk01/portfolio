import { createStore } from "vuex";
import casesStore from "./modules/cases";
import tagsStore from "./modules/cases-tags";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    casesStore,
    tagsStore,
  },
});
