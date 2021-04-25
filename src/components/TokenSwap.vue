<template>
  <div>
    <div class="about mt-100">
      <div class="flex-justify-between">
        <div class="swap">
          <div class="swap_form">
            <div class="flex-justify-between-center">
              <h2 class="head_text">Swap Token</h2>
              <!-- <span class="material-icons bg">
            settings
          </span> -->
            </div>
            <br />
            <div class="con-form">
              <div class="swap_form_div">
                <vs-input
                  v-model.number="fromValue"
                  placeholder="0.00"
                  label="From"
                  class="mt-20 token_input"
                />

                <div class="center mt-20">
                  <span class="material-icons">
                    compare_arrows
                  </span>
                </div>

                <vs-input
                  v-model.number="toValue"
                  placeholder="0.00"
                  label="To"
                  class="mt-20 token_input"
                />
              </div>

              <div class="swap_form_div_tks">
                <div>
                  <span
                    class="flex-justify-between-center selected_token"
                    @click="showTokens('from')"
                  >
                    <vs-avatar size="30">
                      <img :src="defaultToken.logoURI" alt="logo" />
                    </vs-avatar>
                    <span class="mx-10"
                      ><b>{{ defaultToken.symbol }}</b></span
                    >
                    <span class="material-icons" style="font-size:35px;">
                      expand_more
                    </span>
                  </span>

                  <div v-if="showTokensListFrom" class="show-token-list">
                    <div class="show-token-list-div">
                      <vs-table class="token_table">
                        <template #header>
                          <h2>Select Token</h2>
                          <vs-input
                            v-model="search"
                            border
                            placeholder="Search"
                          />
                        </template>
                        <template #tbody>
                          <vs-tr
                            :key="i"
                            v-for="(tr, i) in $vs.getSearch(tokens, search)"
                            :data="tr"
                            @click="selectToken(tr)"
                          >
                            <vs-td>
                              <span class="d-flex">
                                <vs-avatar size="30">
                                  <img :src="tr.logoURI" alt="logo" />
                                </vs-avatar>
                                <span class="mx-20"
                                  ><b>{{ tr.symbol }}</b> <br />
                                  <span style="font-size:13px;">{{
                                    tr.name
                                  }}</span>
                                </span>
                              </span>
                            </vs-td>
                          </vs-tr>
                        </template>
                      </vs-table>
                    </div>
                  </div>
                </div>

                <div>
                  <span
                    class="flex-justify-between-center selected_token"
                    @click="showTokens('to')"
                  >
                    <vs-avatar size="30" v-show="showLogo">
                      <img :src="selectedToken.logoURI" alt="" />
                    </vs-avatar>
                    <span class="mx-10"
                      ><b>{{ selectedToken.symbol }}</b></span
                    >
                    <span class="material-icons" style="font-size:35px;">
                      expand_more
                    </span>
                  </span>

                  <div v-if="showTokensListTo" class="show-token-list">
                    <div class="show-token-list-div">
                      <vs-table class="token_table">
                        <template #header>
                          <h2>Select Token</h2>
                          <vs-input
                            v-model="search"
                            border
                            placeholder="Search"
                          />
                        </template>
                        <template #tbody>
                          <vs-tr
                            :key="i"
                            v-for="(tr, i) in $vs.getSearch(tokens, search)"
                            :data="tr"
                            @click="selectToken(tr)"
                          >
                            <vs-td>
                              <span class="d-flex">
                                <vs-avatar size="30">
                                  <img :src="tr.logoURI" alt="logo" />
                                </vs-avatar>
                                <span class="mx-20"
                                  ><b>{{ tr.symbol }}</b> <br />
                                  <span style="font-size:13px;">{{
                                    tr.name
                                  }}</span>
                                </span>
                              </span>
                            </vs-td>
                          </vs-tr>
                        </template>
                      </vs-table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-20">
                <vs-button block size="xl">
                  <span class="material-icons mr">
                    payments
                  </span>
                  Connect Wallet
                </vs-button>
              </div>
            </div>
          </div>

          <div class="swap_metrics">
            <div class="flex-justify-between">
              <p>Minimum Received</p>
              <p>54430 DA</p>
            </div>

            <div class="flex-justify-between">
              <p>Price</p>
              <p>0.000420423 ETH per DAI</p>
            </div>
          </div>
        </div>

        <div class="swap_token_table">
          <div>
            <TokenTableList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tokenApi from '@/api/tokens.js';
import TokenTableList from './TokenTableList';

export default {
  name: 'TokenSwap',
  components: {
    TokenTableList,
  },
  data: () => ({
    active: true,
    fromValue: null,
    toValue: null,
    selectedToken: {
      name: 'none',
      logoURI: '',
      symbol: 'Select Token',
    },
    showTokensListFrom: false,
    showTokensListTo: false,
    tokens: [],
    defaultToken: {
      name: 'NFC',
      logoURI:
        'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/assets/tokens/ncf.png',
      symbol: 'NFC',
    },
    showLogo: false,
    search: '',
    type: '',
  }),
  created() {
    this.getTokenList();
  },
  methods: {
    getTokenList() {
      tokenApi.getTokenList().then(response => {
        console.log(response.data.tokens);
        this.tokens = response.data.tokens;
      });
    },
    showTokens(type) {
      this.type = type;
      if (type == 'from') {
        this.showTokensListFrom = true;
      } else {
        this.showTokensListTo = true;
      }
    },
    selectToken(tk) {
      if (this.type == 'from') {
        this.defaultToken = tk;
        this.showTokensListFrom = false;
      } else {
        this.selectedToken = tk;
        this.showLogo = true;
        this.showTokensListTo = false;
      }
      this.search = '';
    },
  },
};
</script>
