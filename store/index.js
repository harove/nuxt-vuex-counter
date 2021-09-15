export const state = () => ({
  counter: 0
});

export const getters = {
  counter(state) {
    return state.counter;
  }
};

export const actions = {
  increase({commit}){
    commit('increase')
  }
};

export const mutations = {
  increase(state) {
    state.counter++;
  }
};
