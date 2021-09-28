const state = {
  daiBalance: 0,
  solidDaiSupply: 0,
  solidDaiBalance: 0
};

const getters = {
  getDaiBalance (state) {
    return state.daiBalance;
  },
  getSolidDaiBalance (state) {
    return state.solidDaiBalance;
  },
  getSolidDaiSupply (state) {
    return state.solidDaiSupply;
  }
};

const actions = {
  async fetchDaiBalance ({ commit, rootState }) {
    let drizzleInstance = rootState.drizzle.drizzleInstance;
    let activeAccount = rootState.accounts.activeAccount;

    // get token balance for the active user
    const daiBalance = await drizzleInstance.contracts.TestErc20.methods.balanceOf(activeAccount).call();

    // remove the 18 decimals and commit as balance
    commit("setDaiBalance", drizzleInstance.web3.utils.fromWei(daiBalance, "ether"));
  },
  async fetchSolidDaiBalance ({ commit, rootState }) {
    let drizzleInstance = rootState.drizzle.drizzleInstance;
    let activeAccount = rootState.accounts.activeAccount;

    // get token balance for the active user
    const solidBalance = await drizzleInstance.contracts.SolidFoundry.methods.balanceOf(activeAccount).call();

    // remove the 18 decimals and commit as balance
    commit("setSolidDaiBalance", drizzleInstance.web3.utils.fromWei(solidBalance, "ether"));
  },
  async fetchSolidDaiSupply ({ commit, rootState }) {
    let drizzleInstance = rootState.drizzle.drizzleInstance;

    // get token balance for the active user
    const solidSupply = await drizzleInstance.contracts.SolidFoundry.methods.totalSupply().call();

    // remove the 18 decimals and commit as balance
    commit("setSolidDaiSupply", drizzleInstance.web3.utils.fromWei(solidSupply, "ether"));
  }
};

const mutations = {
  setDaiBalance (state, balance) {
    state.daiBalance = balance;
  },
  setSolidDaiBalance (state, balance) {
    state.solidDaiBalance = balance;
  },
  setSolidDaiSupply (state, balance) {
    state.solidDaiSupply = balance;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};