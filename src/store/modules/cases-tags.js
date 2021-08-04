import casesTags from "../mock/cases-tags";

let tagsStore = {
  namespaced: true,
  state: {
    casesTags,
  },
  getters: {
    casesTags: ({ casesTags }) => casesTags,
    cardTags:
      ({ casesTags }) =>
      (ids) => {
        let results = new Array();
        casesTags.forEach((casesTag) => {
          if (ids.includes(casesTag.id)) results.push(casesTag);
        });
        return results;
      },
  },
  mutations: {},
  actions: {},
};

export default tagsStore;
