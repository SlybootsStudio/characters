import { createStore } from "vuex";

export default createStore({
  state: {
    gold: 0
  },
  mutations: {
    SET_GOLD(state, value) {
      state.gold = value;
    },
    ADD_GOLD(state, value) {
      state.gold += value;
    },
    REMOVE_GOLD(state, value) {
      state.gold -= value;
      if (state.gold < 0) {
        state.gold = 0;
      }
    }
  },
  actions: {},
  getters: {},
  modules: {}
});
