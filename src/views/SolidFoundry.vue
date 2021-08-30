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
              <div id="chart-timeline">
                <apexchart
                  height="330"
                  type="area"
                  ref="chart"
                  :options="chartOptions"
                  :series="series"
                >
                </apexchart>
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
                <span
                  class="material-icons-round swp"
                  @click="swapToken(inputToken)"
                >
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
                      @click="buySellToken"
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
import supplyApi from '@/api/supplycharts';

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
        logoURI: 'https://soliddefi.com/img/sld.a6af7737.png',
      },
      tkn_selected: null,
      inputAmount: null,
      outputAmount: null,
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
          ],
        },
      ],
      chartOptions: {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true,
          },
        },
        annotations: {
          yaxis: [
            {
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
              },
            },
          ],
          xaxis: [
            {
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date('01 Mar 2012').getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy',
          },
        },
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
      },

      selection: 'one_year',
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
  watch: {
    solidTotalSupply: function(totSupp) {
      let totalSupply = totSupp / 1000000000000000000;
      let supplySqrt = Math.sqrt(totalSupply);
      console.log(supplySqrt);
      //  find out when there is a sell
      // after sell
      // ttsup - sell amount
      // square root of total

      this.updatePrice(supplySqrt);
    },
    chain: function(netId) {
      console.log(netId, 'connecting to eth');
      this.connectToEthContract();
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
      if (this.inputAmount <= 0) {
        this.outputAmount = null;
      } else {
        this.outputAmount = this.buyEstimate(
          this.inputAmount,
          this.solidTotalSupply
        );
      }
    },
    swapToken(input) {
      let curToken = input;
      this.inputToken = this.outputToken;
      this.outputToken = curToken;
    },
    buySellToken() {
      // this.approveMintOnBuy();
      this.mintOnBuy(this.activeAccount, this.inputAmount, this.outputAmount);

      // this.burnOnSell(this.activeAccount, this.inputAmount);
      this.outputAmount = null;
      this.inputAmount = null;
    },
    updatePrice(supplySqrt) {
      let supply = parseFloat(supplySqrt).toFixed(4);

      let data = {
        price: supply,
      };

      supplyApi
        .addSupplyChart(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));
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

  // .bg-dai {
  //   height: 280px;
  //   // background-image: url('../assets/images/dai_graph_mockup.png');
  //   // background-position: center;
  //   // background-repeat: no-repeat;
  //   // background-size: cover;
  //   font-family: Avenir, Helvetica, Arial, sans-serif;

  //   .solid_box {
  //     width: 100px;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     background: #111010;
  //     padding: 8px 0px;
  //     border-radius: 15px;
  //     font-family: Avenir, Helvetica, Arial, sans-serif;

  //     span {
  //       font-size: 11px;
  //     }
  //   }

  //   .solid_nextprice {
  //     background: linear-gradient(90deg, #4317b4ff 39%, #8127e0ff);
  //     width: 250px;
  //     padding: 10px;
  //     text-align: center;
  //     border-radius: 10px;
  //   }
  // }
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
