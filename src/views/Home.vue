<template>
  <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <div class="center mt-30">
          <h1 class="lead_head_text">Get your SLD now</h1>
        </div>

        <div class="d-flex-center mt-20">
          <!-- <vs-button transparent style="font-size:1.2rem; color:whitesmoke;">
            via Uniswap
          </vs-button> -->
          <vs-button
            href="https://ropsten.etherscan.io/address/0x687422eea2cb73b5d3e242ba5456b782919afc85"
            blank
            style="font-size: 1.1rem;"
            class="eth_button"
          >
            View SLD on Etherscan
          </vs-button>
        </div>

        <!-- Sales bundle options-->
        <vs-row class="mt-50" justify="space-around">
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="sales_div">
              <div class="sales_div_head">
                <h2>30% off</h2>
              </div>
              <hr class="sales_hr" />

              <div class="promo_div">
                <vs-button
                  class="buy_button"
                  style="font-size: 1.5rem;"
                  @click="buyTokens"
                >
                  BUY
                </vs-button>
              </div>

              <div class="connect_d">
                <div
                  v-if="
                    isDrizzleInitialized &&
                      checkNetwork(
                        this.drizzleInstance.web3._provider.networkVersion
                      )
                  "
                >
                  <div class="eth_div">
                    <div class="eth_bal1 net_balance">
                      {{
                        getNetworkName(
                          this.drizzleInstance.web3._provider.networkVersion
                        )
                      }}
                    </div>
                    <div class="eth_acc1">
                      <span style="overflow-x:hidden"
                        >{{ toEth(activeBalance) }} ETH</span
                      >
                    </div>
                  </div>
                  <div class="switch_div">
                    <vs-switch
                      v-model="activeChain"
                      class="mt-20"
                      color="#7d33ff"
                    >
                      <template #off>
                        Matic
                      </template>
                      <template #on>
                        Eth
                      </template>
                    </vs-switch>
                  </div>
                </div>

                <vs-button
                  danger
                  @click="changeNetwork"
                  v-else-if="
                    isDrizzleInitialized &&
                      !checkNetwork(
                        this.drizzleInstance.web3._provider.networkVersion
                      )
                  "
                >
                  Wrong Network Connected
                </vs-button>

                <vs-button
                  v-else
                  class="connect_button"
                  style="font-size: 1rem;"
                  @click="changeNetwork"
                >
                  Connect Wallect
                </vs-button>
              </div>
            </div>
          </vs-col>

          <vs-col :w="5" :xs="12" :sm="12">
            <div class="sales_div">
              <div class="sales_div_head">
                <h2>40% off</h2>
              </div>
              <hr class="sales_hr" />

              <div class="promo_div">
                <vs-button class="buy_button" style="font-size: 1.5rem;">
                  BUY
                </vs-button>
              </div>

              <div class="connect_d">
                <div
                  class="eth_div"
                  v-if="
                    isDrizzleInitialized &&
                      checkNetwork(
                        this.drizzleInstance.web3._provider.networkVersion
                      )
                  "
                  @click="checkAccounts"
                >
                  <div class="eth_bal">{{ toEth(activeBalance) }} ETH</div>
                  <div class="eth_acc">
                    <span style="width:80%; overflow-x:hidden;">{{
                      activeAccount
                    }}</span>
                    <vs-avatar size="20">
                      <img src="../assets/images/logo.png" alt="logo" />
                    </vs-avatar>
                  </div>
                </div>

                <vs-button
                  danger
                  @click="changeNetwork"
                  v-else-if="
                    isDrizzleInitialized &&
                      !checkNetwork(
                        this.drizzleInstance.web3._provider.networkVersion
                      )
                  "
                >
                  Wrong Network Connected
                </vs-button>

                <vs-button
                  v-else
                  class="connect_button"
                  style="font-size: 1rem;"
                  @click="changeNetwork"
                >
                  Connect Wallect
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <Illustrations />

        <Subscribe />
      </div>
    </div>

    <!-- blog news section -->
    <div class="sec_div">
      <div
        class="wrap"
        style="z-index: 2; position:relative; margin-top:-250px;"
      >
        <vs-card-group>
          <vs-card>
            <template #img>
              <img src="../assets/images/nft.png" alt="blog" />
            </template>
            <template #title>
              <h3>SOLID NFTs</h3>
            </template>

            <template #text>
              <p style="font-size:16px;">
                Earn NFT prizes for staking your SLD tokens
              </p>
              <vs-button class="blog_btn" style="font-size: 1rem;">
                <b>VIEW</b>
              </vs-button>
            </template>
          </vs-card>

          <vs-card>
            <template #title>
              <h3>SOLID Governance.</h3>
            </template>
            <template #img>
              <img src="../assets/images/nft.png" alt="blog" />
            </template>
            <template #text>
              <p style="font-size:16px;">
                SLD Token holder can participate in xyz decisions by voting with
                their voting powers proportional ...
              </p>
              <vs-button class="up_btn" style="font-size: 1rem;">
                <b>UPCOMING</b>
              </vs-button>
            </template>
          </vs-card>

          <vs-card>
            <template #title>
              <h3>SOLID Rewards</h3>
            </template>
            <template #img>
              <img src="../assets/images/nft.png" alt="blog" />
            </template>
            <template #text>
              <p style="font-size:16px;">
                Stake SLD and provide liquidity on xyz for rewards.
              </p>
              <vs-button class="up_btn" style="font-size: 1rem;">
                <b>UPCOMING</b>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>

        <br />
        <vs-button transparent color="#5b3cc4">
          <b>READ THE WHITEPAPER</b>
          <span class="material-icons-outlined ml-10">
            arrow_right_alt
          </span>
        </vs-button>
      </div>
    </div>

    <AboutSolid />

    <Community />

    <Footer />

    <vs-dialog v-model="showWallects" width="420px">
      <template #header>
        <h4 class="not-margin">
          Choose a wallect provider
        </h4>
      </template>
      <ConnectWallect />
    </vs-dialog>

    <vs-dialog v-model="showAccounts" width="420px">
      <template #header>
        <h4 class="not-margin">
          Account
        </h4>
      </template>
      <div>
        <div class="flex-justify-between-center">
          <h4 class="connected">
            Connected with
            {{
              drizzleInstance.web3._provider.isMetaMask
                ? 'Metamask'
                : 'Matic Wallect'
            }}
          </h4>

          <vs-button color="#cb8016" transparent @click="changeNetwork">
            Change
          </vs-button>
        </div>

        <div class="meta_div">
          <div class="eth_acc">
            <vs-avatar size="20">
              <img src="../assets/images/logo.png" alt="logo" />
            </vs-avatar>
            <span style="width:80%; text-overflow: ellipsis;">{{
              activeAccount
            }}</span>
          </div>

          <div class="flex-justify-between-center mt-10">
            <vs-button
              color="#cb8016"
              transparent
              @click="copyToClip(activeAccount)"
            >
              <span class="material-icons">
                content_copy
              </span>
              Copy address
            </vs-button>
            <vs-button
              color="#cb8016"
              transparent
              :href="`https://ropsten.etherscan.io/address/${activeAccount}`"
              blank
            >
              <span class="material-icons">
                link
              </span>
              View on etherscan
            </vs-button>
          </div>
        </div>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import Web3 from 'web3';
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar';
import ConnectWallect from '../components/ConnectWallect';
import Illustrations from './sections/Illustrations.vue';
import Subscribe from './sections/Subscribe.vue';
import AboutSolid from './sections/AboutSolid.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';

const argsTotalSupply = {
  contractName: 'SolidProtocol',
  method: 'totalSupply',
  methodArgs: '',
};

export default {
  name: 'Home',
  components: {
    NavBar,
    ConnectWallect,
    Illustrations,
    Subscribe,
    AboutSolid,
    Community,
    Footer,
  },
  data: () => ({
    active: 0,
    email: '',
    showWallects: false,
    showAccounts: false,
    activeChain: false,
  }),
  created() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', argsTotalSupply);
  },
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('contracts', ['getContractData']),
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('drizzle', ['drizzleInstance']),

    contractSupply() {
      return this.getContractData({
        contract: argsTotalSupply.contractName,
        method: 'totalSupply',
      });
    },
  },
  methods: {
    buyTokens() {
      this.drizzleInstance.contracts['SolidProtocol'].methods[
        'send50Tokens'
      ].cacheSend(this.activeAccount);
    },
    changeNetwork() {
      var a = parseInt(this.drizzleInstance.web3._provider.networkVersion);
      console.log(a);
      console.log(this.drizzleInstance.web3._provider.selectedAddress);
      this.showWallects = true;
    },
    toEth(weiBalance) {
      let etherValue = Web3.utils.fromWei(weiBalance, 'ether');
      let ether = parseFloat(etherValue).toFixed(4);
      return ether;
    },
    checkAccounts() {
      this.showAccounts = true;
    },
  },
};
</script>
