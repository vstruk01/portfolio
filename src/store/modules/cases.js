import cases from "../mock/cases";
import mutations from "../mutations";

const { CHANGE_CASES } = mutations;

let casesStore = {
  state: {
    cases,
  },
  getters: {
    cases: ({ cases }) => cases,
  },
  mutations: {
    [CHANGE_CASES](state, newCases) {
      state.cases = newCases;
    },
  },
  actions: {
    fetchCases: ({ commit }, tagsIds) => {
      if (tagsIds.length > 0) {
        let newCases = [];
        for (let i = 0; i < cases.length; i++) {
          let caseTags = cases[i].tags;
          for (let j = 0; j < caseTags.length; j++) {
            if (tagsIds.includes(caseTags[j])) {
              newCases.push(cases[i]);
              break;
            }
          }
        }
        commit("CHANGE_CASES", newCases);
      } else commit("CHANGE_CASES", cases);
    },
  },
};

export default casesStore;
