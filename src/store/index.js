import { createStore } from "vuex";
import casesStore from "./modules/cases";
import casesTags from "./modules/cases-tags";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    casesStore,
    casesTags,
  },
});
