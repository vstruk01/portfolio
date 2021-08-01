import cases from "../mock/cases";

let casesStore = {
  namespaced: true,
  state: {
    cases,
  },
  getters: {
    cases: ({ cases }) => cases,
  },
  mutations: {},
  actions: {},
};

export default casesStore;
