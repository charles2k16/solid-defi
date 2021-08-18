<template>
  <div class="main_container">
    <vs-navbar
      text-black
      color="#0F121E"
      center-collapsed
      fixed
      square
      v-model="active"
    >
      <template #left>
        <img
          src="../assets/images/sld.png"
          alt="logo"
          width="50px"
          @click="goHome"
        />
      </template>
      <!-- to="/solidfoundry" -->
      <!-- @click="showComingSoon = true" -->
      <template #right>
        <!-- <vs-button
          class="airdrop_btn"
          id="airdrop_btn_nav"
          blank
          to="/solidfoundry"
        >
          <b>Join Contest</b>
        </vs-button> -->
        <span v-if="isDrizzleInitialized">
          <span class="nav_accont" v-if="onEthNetwork">
            <b>{{ toEth(activeBalance) }} ETH</b>
            <span class="nav_address" @click="showAccounts = true">
              <span class="acc_span" style="width: 80px;font-size: 1rem;">{{
                activeAccount
              }}</span>
              <span class="material-icons">
                account_circle
              </span>
            </span>
          </span>

          <vs-button v-else class="connect_button">
            Wrong Network
          </vs-button>
        </span>

        <vs-button v-else class="connect_button">
          Connect to a wallet
        </vs-button>
      </template>
    </vs-navbar>

    <div class="hero_swap">
      <div class="wrap">
        <div class="dai_bg">
          <span>GET YOUR FIRST SOLID-DAI NOW! </span>
        </div>

        <vs-row class="mt-50">
          <vs-col :w="8" :xs="12" :sm="12">
            <div class="solid_dai_gr">
              <h3>SOLID-DAI BONDING CURVE</h3>
              <br />
              <div class="bg-dai">
                <apexchart
                  height="330"
                  type="area"
                  :options="chartOptions"
                  :series="series"
                >
                </apexchart>

                <!-- <div>
                  <div class="solid_box">
                    <img
                      src="../assets/images/solid_dai.png"
                      alt="dai"
                      width="30px"
                    />
                    <span>SOLID-DAI</span>
                    <span>Current price:</span>
                    <span>0</span>
                  </div>

                  <div class="solid_nextprice">
                    <p>
                      Next price point of SOLD-DAI after your purchase*: $110.52
                    </p>
                  </div>
                  <div>
                    <p>
                      Your intended purchase with: $200,000 DAI SOLID-DAI Avg.
                      price at 104.85
                    </p>
                  </div>
                </div> -->
              </div>
            </div>
          </vs-col>

          <vs-col :w="4" :xs="12" :sm="12">
            <div class="swap">
              <h3>SWAP</h3>
              <div class="token_list" v-if="viewTokenList">
                <div class="flex-justify-between-center p-15-c">
                  <h3>Select a Token</h3>
                  <span
                    class="material-icons close_icon"
                    @click="viewTokenList = false"
                  >
                    clear
                  </span>
                </div>

                <div
                  v-for="(token, index) in tokensList.tokens"
                  :key="index"
                  @click="selectetToken(token)"
                  :class="token.symbol == 'DAI' ? 'tokens active' : 'tokens'"
                >
                  <div class="d-flex tk_cont">
                    <div class="mr-10">
                      <vs-avatar size="35">
                        <img :src="token.logoURI" alt="logo" />
                      </vs-avatar>
                    </div>
                    <div>
                      <span class="d-block">{{ token.symbol }}</span>
                      <span class="d-block tk_symbol">{{ token.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- token input from -->
              <div class="input_from mt-20">
                <div class="input_info">
                  <img :src="inputToken.logoURI" alt="tk" />
                  <div class="ml-10 sw_cnt">
                    <div class="dcnt" @click="showTokenList(0)">
                      <h5>{{ inputToken.symbol }}</h5>
                      <span class="material-icons ar">
                        keyboard_arrow_down
                      </span>
                    </div>

                    <span class="dai_pr">0</span>
                  </div>
                </div>

                <div class="input_space">
                  <input
                    type="number"
                    placeholder="0.0"
                    v-model="inputAmount"
                    @change="changeInputAmount"
                  />
                </div>
              </div>

              <div class="mt-20 tk_brk">
                <span class="material-icons-round swp">
                  swap_vert
                </span>
                <hr class="hd_rule2" />
              </div>

              <!-- token output -->
              <div class="input_from mt-20">
                <div class="input_info">
                  <img :src="outputToken.logoURI" alt="tk" />
                  <div class="ml-10 sw_cnt">
                    <div class="dcnt" @click="showTokenList(1)">
                      <h5>{{ outputToken.symbol }}</h5>
                      <span class="material-icons ar">
                        keyboard_arrow_down
                      </span>
                    </div>

                    <span class="dai_pr">0</span>
                  </div>
                </div>

                <div class="input_space">
                  <input
                    type="number"
                    placeholder="0.0"
                    v-model="outputAmount"
                  />
                </div>
              </div>

              <div class="mt-10 conve">
                <span>1 DAI = 0.0094213 SolidDAI</span>
              </div>

              <div class="mt-50">
                <div class="swap_round_div">
                  <div class="flex-justify-between-center">
                    <span class="matic_btn_swap" v-if="!isDrizzleInitialized">
                      Connect to an<br />
                      <span style="color: blue"> <b>Eth Network </b></span>
                    </span>

                    <span class="eth_btn_swap" v-else>
                      You're <br />
                      <span style="color: #dddbec">
                        <b>ON Ethereum </b>
                      </span>
                    </span>
                  </div>

                  <div>
                    <vs-button
                      class="swap_button"
                      style="font-size: 0.8rem"
                      @click="swapToken"
                      loading
                    >
                      <b> SWAP</b>
                    </vs-button>
                  </div>
                </div>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <vs-row class="mt-50">
          <vs-col :w="4" :xs="12" :sm="12">
            <div
              class="dai_locked_boxes dai_locked flex-justify-between-center"
            >
              <img
                src="../assets/images/token_lock_icon.png"
                alt="lock"
                width="85px"
              />

              <div>
                <span class="d-block tt">TOTAL DAI LOCKED </span>
                <span class="d-block pr">$700,000 </span>
              </div>
            </div>

            <!-- second dai loacked -->
            <div
              class="dai_locked_boxes dai_volume flex-justify-between-center mt-20"
            >
              <img
                src="../assets/images/sld_trading_volume.png"
                alt="lock"
                width="63px"
              />

              <div>
                <span class="d-block tt">TRADING VOLUME </span>
                <span class="d-block pr">$70,000 </span>
                <span class="d-block hr">+10,000 (24hr)</span>
              </div>
            </div>

            <!-- third dai locked -->
            <div
              class="dai_locked_boxes dai_reward flex-justify-between-center mt-20"
            >
              <img
                src="../assets/images/sld_reward_icon.png"
                alt="lock"
                width="80px"
              />

              <div>
                <span class="d-block tt">
                  <span style="color:#29f96c">DAI Reward</span> to <br />
                  SOLID-DAI holders
                </span>
                <span class="d-block pr">$50,000 </span>
                <span class="d-block hr">+5,000 (24hr)</span>
              </div>
            </div>
          </vs-col>

          <vs-col :w="8" :xs="12" :sm="12">
            <div class="grapgh_an">
              <h3>SOLID-DAI CHART</h3>
              <div class="graph_bg">
                <div class="d-flex-center cover">
                  <h1>Coming Soon</h1>
                </div>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <vs-row class="mt-50">
          <vs-col :w="4" :xs="12" :sm="12">
            <div class="dai_locked_boxes dai_lending">
              <div>
                <span class="d-block pr">SOLID LENDING</span>
                <span class="d-block tt">Coming Soon</span>
              </div>
            </div>
          </vs-col>

          <vs-col :w="8" :xs="12" :sm="12">
            <img
              src="../assets/images/sld_solid_game_banner.jpg"
              alt="mock"
              class="solid_gm_img"
            />
          </vs-col>
        </vs-row>
      </div>
    </div>
    <vs-dialog v-model="showAccounts" width="420px" class="_dialog">
      <template #header>
        <h4 class="not-margin">Account</h4>
      </template>
      <div>
        <div class="flex-justify-between-center">
          <h4 class="connected">
            Connected with
            <span style="color: #cb8016">
              {{
                getNetworkName(drizzleInstance.web3._provider.networkVersion)
              }}
            </span>
          </h4>

          <vs-button color="#cb8016" transparent>
            Change
          </vs-button>
        </div>

        <div class="meta_div">
          <div class="eth_acc">
            <vs-avatar size="20">
              <img src="../assets/images/sld.png" alt="logo" />
            </vs-avatar>
            <span class="acc_span">{{ activeAccount }}</span>
          </div>
          <br />
          <div class="eth_balance">
            <vs-avatar size="20">
              <img src="../assets/images/sld.png" alt="logo" />
            </vs-avatar>
            <span class="acc_span">{{ toEth(activeBalance) }} Eth</span>
          </div>

          <div class="flex-justify-between-center mt-10">
            <vs-button
              color="#cb8016"
              transparent
              @click="copyToClip(activeAccount)"
            >
              <span class="material-icons"> content_copy </span>
              Copy address
            </vs-button>
            <vs-button
              color="#cb8016"
              transparent
              :href="`https://ropsten.etherscan.io/address/${activeAccount}`"
              blank
            >
              <span class="material-icons"> link </span>
              View on etherscan
            </vs-button>
          </div>
        </div>
      </div>
    </vs-dialog>
    <Footer />
  </div>
</template>

<script>
// import Vue from 'vue';
// import { store } from '../store/';
// import drizzleVuePlugin from '@drizzle/vue-plugin';
// import drizzleOptions from '@/plugins/drizzle';

// Vue.use(drizzleVuePlugin, { store, drizzleOptions });

import { mapGetters } from 'vuex';
import Footer from './sections/Footer.vue';
import solidMainnetTokenlist from '@/api/solidMainnetTokenlist.json';
import { getTotalSupply } from '@/api/contractGeters';

export default {
  name: 'SolidFoundry',
  components: {
    Footer,
  },
  data() {
    return {
      showAccounts: false,
      chain: null,
      active: '',
      tokensList: solidMainnetTokenlist,
      viewTokenList: false,
      inputToken: {
        name: 'Dai Stablecoin',
        address: '0x40ef836B1B8418F3ad17f7fA07eFE7c8dBBdC147',
        symbol: 'DAI',
        decimals: 18,
        chainId: 1,
        logoURI:
          'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg',
      },
      outputToken: {
        name: 'Solid',
        symbol: 'SOLID',
        logoURI: 'http://localhost:8081/img/sld.a6af7737.png',
      },
      tkn_selected: null,
      inputAmount: null,
      outputAmount: null,
      chartOptions: {
        title: {
          text: 'Total Value Locked',
          align: 'left',
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 4,
          colors: ['#000524'],
          strokeColor: '#00BAEC',
          strokeWidth: 3,
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left',
        },
        tooltip: {
          theme: 'dark',
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#00BAEC'],
        grid: {
          borderColor: '#555',
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0,
          },
        },
        xaxis: {
          categories: [
            '3 Jul',
            '18 July',
            '20 July',
            '30 July',
            '12 Aug',
            '14 Aug',
            '18 Aug',
            '20 Aug',
            '25 Aug',
          ],
        },
      },
      series: [
        {
          name: 'Price',
          data: [5, 15, 20, 30, 31, 35, 43, 44, 55],
        },
      ],
    };
  },
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('contracts', ['getContractData', 'contractInstances']),
    ...mapGetters('drizzle', ['drizzleInstance']),

    onEthNetwork() {
      let network = this.drizzleInstance.web3._provider.networkVersion;
      this.chain = network;
      let chain = parseInt(network);

      if (chain == 80001 || chain == 137) return false;
      else return true;
    },

    // total supply
    solidTotalSupply() {
      return this.getContractData({
        contract: getTotalSupply.contractName,
        method: getTotalSupply.method,
      });
    },
  },
  created() {
    if (this.onEthNetwork) this.connectToEthContract();
  },
  methods: {
    connectToEthContract() {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getTotalSupply);
    },
    showTokenList(inputIndex) {
      this.tkn_selected = inputIndex;
      this.viewTokenList = true;
    },
    selectetToken(selectedToken) {
      if (selectedToken.symbol == 'DAI') {
        this.closeTokenList(selectedToken);
      } else {
        return;
      }
    },
    closeTokenList(selectedToken) {
      if (this.tkn_selected == 0) this.inputToken = selectedToken;
      else if (this.tkn_selected == 1) this.outputToken = selectedToken;

      this.viewTokenList = false;
    },
    changeInputAmount() {
      if (this.inputAmount == 0) {
        this.outputAmount = null;
      } else {
        this.outputAmount = this.buyEstimate(
          this.inputAmount,
          this.solidTotalSupply
        );
      }
    },
    swapToken() {
      //this.approveMintOnBuy();
      this.mintOnBuy(this.activeAccount, this.inputAmount, this.outputAmount);
    },
  },
};
</script>

<style lang="scss" scoped>
.dai_bg {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #171938;
  border-radius: 10px;
  background: #3e2394;
  background-image: url('../assets/images/protocol_banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 120px;

  span {
    color: whitesmoke;
    font-size: 26px;
    font-weight: 530;
  }
}
.grapgh_an {
  border: 1px solid #171938;
  background: #171938;
  height: 375px;
  border-radius: 15px;
  padding: 20px 10px;
  color: rgb(223, 222, 222);

  .graph_bg {
    height: 318px;
    background-image: url('../assets/images/solid-dai_price_graph.png');
    // background-position: center;
    background-size: cover;
    position: relative;
    margin-top: 10px;

    .cover {
      height: 310px;
      background: rgba(13, 13, 36, 0.7);
      // border: 1px solid #000000;
      box-sizing: border-box;
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: rgb(104, 101, 101);
    }
  }
}
.solid_dai_gr {
  border: 1px solid #171938;
  background: #171938;
  height: 400px;
  border-radius: 15px;
  padding: 20px 10px;
  color: rgb(223, 222, 222);

  .bg-dai {
    height: 280px;
    // background-image: url('../assets/images/dai_graph_mockup.png');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;

    .solid_box {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #111010;
      padding: 8px 0px;
      border-radius: 15px;
      font-family: Avenir, Helvetica, Arial, sans-serif;

      span {
        font-size: 11px;
      }
    }

    .solid_nextprice {
      background: linear-gradient(90deg, #4317b4ff 39%, #8127e0ff);
      width: 250px;
      padding: 10px;
      text-align: center;
      border-radius: 10px;
    }
  }
}
.swap {
  padding: 20px 10px;
  margin-left: 15px;
  border: 1px solid #171938;
  background: #171938;
  height: 400px;
  border-radius: 15px;
  color: rgb(226, 223, 223);

  .tk_brk {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px 2px 2px 15px;

    .swp {
      color: rgb(236, 239, 248);
      background: #717cf7;
      border-radius: 100px;
      padding: 4px;
      cursor: pointer;
    }
  }

  .conve {
    float: right;

    span {
      font-size: 10px;
      color: #77749c;
    }
  }
}
.input_from {
  padding: 10px;
  background: #262a48;
  border-radius: 10px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input_info {
  display: flex;
  align-items: center;

  img {
    width: 35px;
  }

  .sw_cnt {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    .dcnt {
      display: flex;
      align-items: center;
      margin-bottom: -3px;
      cursor: pointer;

      h5 {
        width: 40px;
        font-weight: bold;
      }
      h5:hover {
        color: #fcb42a;
      }

      .ar {
        margin-top: -5px;
      }
    }
    .dai_pr {
      font-size: 13px;
    }
  }
}
.input_space {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input {
    background: #161938;
    height: 55px;
    padding: 2px 8px !important;
    width: 130px;
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat';
    font-size: 20px;
    color: whitesmoke;
    font-weight: bold;

    ::placeholder {
      font-size: 15px;
    }
  }
}
.token_list {
  height: 250px;
  overflow-y: auto;
  width: 277px;
  z-index: 2;
  position: relative;
  margin: 20px auto -268px auto;
  background: #1a1d46;
  padding: 1rem 0px;
  border-radius: 0.625rem;
  border-color: rgba(229, 231, 235, 1);
  font-family: Avenir, Helvetica, Arial, sans-serif;

  h3 {
    font-size: 17px;
  }
  .tokens {
    margin-top: 10px;
    // cursor: pointer;
    width: 100%;

    .tk_cont {
      padding: 5px 5px 5px 15px;
    }

    // :hover {
    //   background-color: #2b2e5a;
    //   border-radius: 0.625rem;
    // }

    span {
      font-size: 14px;
      color: grey;
    }
  }
  .active {
    cursor: pointer;

    :hover {
      background-color: #2b2e5a;
      border-radius: 0.625rem;
    }

    span {
      color: rgb(228, 226, 226);
    }
  }
}
.dai_locked_boxes {
  height: 112px;
  width: 282px;
  border-radius: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  .tt {
    font-size: 14px;
  }
  .pr {
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
    font-family: Montserrat;
  }
  .hr {
    color: #a09dc5;
    font-size: 14px;
    margin-top: 5px;
  }
}
.dai_locked {
  background: linear-gradient(240deg, #e1af24 20%, #cf6d10 50%);
  padding: 10px 40px 10px 10px;

  .tt {
    color: whitesmoke;
  }
  .pr {
    color: whitesmoke;
  }
}
.dai_volume {
  background: #5a5581;
  padding: 10px 40px 10px 20px;

  .tt {
    color: #a09dc5;
  }
  .pr {
    color: #a09dc5;
  }
}
.dai_reward {
  background: #393e63;
  padding: 10px 40px 10px 20px;

  .tt {
    color: #a09dc5;
  }
  .pr {
    color: #29f96c;
  }
}
.dai_lending {
  background: url('../assets/images/lending_banner.png');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 13px 10px 0px;

  .tt {
    color: #3e3f6f;
    font-size: 14px;
  }
  .pr {
    color: #3e3f6f;
    font-size: 15px;
  }
}
.solid_gm_img {
  width: 620px;
  border-radius: 20px;
  margin-left: 5px;
  height: 112px;
}
.swap_round_div {
  background: #1a1d29;
  box-shadow: 3px 3px 5px #171c20, -3px -3px 5px #1e2733,
    inset -2px -2px 5px #111010;
  border: 3px solid #211e36;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 55px;
  padding: 2px 2px 2px 7px;
  border-radius: 45px;
  margin-bottom: 40.5px;

  .matic_btn_swap {
    width: 100px;
    margin-top: -2px;
    font-size: 0.7rem;
    color: rgb(9, 35, 102);
    padding: 1px 5px;
    background: #bebccc;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
  }
  .eth_btn_swap {
    color: #b6b6b6;
    font-size: 0.7rem;
    text-align: center;
    width: 90px;
    margin-left: 5px;
  }
}
</style>
