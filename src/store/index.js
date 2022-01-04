import { createStore } from "vuex";

export default createStore({
  state: {
    puppies: 1234,
    earnedPuppies: 0
  },
  mutations: {
    SET_PUPPIES(state, value) {
      state.puppies = value;
    },
    ADD_PUPPIES(state, value) {
      state.puppies += value;
    },
    ADD_EARNED_PUPPIES(state, value) {
      state.earnedPuppies += value;
    }
  },
  actions: {
    addPuppies({ commit }, payload) {
      commit("ADD_PUPPIES", payload.amount);

      if (payload.isEarned) {
        commit("ADD_EARNED_PUPPIES", payload.amount);
        this.earnedPuppies += payload.amount;
      }
    },
    theButtonClick({ commit }) {
      let amount = 1;

      commit("ADD_PUPPIES", amount);
      commit("ADD_EARNED_PUPPIES", amount);
    }
  },
  getters: {},
  modules: {}
});
