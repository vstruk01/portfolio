import casesTags from "../mock/cases-tags";

let tagsStore = {
  namespaced: true,
  state: {
    casesTags,
  },
  getters: {
    casesTags: ({ casesTags }) => casesTags,
  },
  mutations: {},
  actions: {},
};

export default tagsStore;
