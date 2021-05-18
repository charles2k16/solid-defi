<template>
  <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <div class="center mt-50">
          <h1 class="lead_head_text">Get your SLD now</h1>
        </div>

        <div class="d-flex-center mt-30">
          <!-- <vs-button transparent style="font-size:1.2rem; color:whitesmoke;">
            via Uniswap
          </vs-button> -->
          <vs-button
            href="https://ropsten.etherscan.io/address/0x687422eea2cb73b5d3e242ba5456b782919afc85"
            blank
            style="font-size: 15px;color:whitesmoke;"
            transparent
          >
            View SLD on Etherscan
          </vs-button>
        </div>
      </div>

      <div class="wrap_bundle">
        <div class="mt-50">
          <vs-row class="mt-20">
            <vs-col :w="4" :xs="12" :sm="12">
              <br /><br />
              <img
                src="../assets/images/solid_bundle_promo.png"
                alt="log"
                class="solid_bundle_promo"
              />
            </vs-col>
            <vs-col :w="8" :xs="12" :sm="12">
              <div class="bundle_container">
                <div class="bundle_tab">
                  <h4 class="insights center">SOLID Token Bundle</h4>
                </div>

                <div class="tab">
                  <button
                    class="tablinks active"
                    @click="openCity($event, 'eth')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div class="flex-row-center">
                        <img
                          src="../assets/images/eth.png"
                          alt="telegram"
                          width="60px"
                        />

                        <span class="mt-20"><b>ETH</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 210</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 70</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openCity($event, 'wEth')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div class="flex-row-center">
                        <vs-avatar size="60">
                          <img src="../assets/images/eth.png" alt="telegram" />
                        </vs-avatar>
                        <span class="mt-20"><b>wETH</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 210</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 70</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openCity($event, 'matic')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div class="flex-row-center">
                        <vs-avatar size="60">
                          <img
                            src="../assets/images/matic_icon.png"
                            alt="telegram"
                          />
                        </vs-avatar>
                        <span class="mt-20"><b>MATIC</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 40</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span class="d-block stock">Stock: 120</span>
                        <span class="d-block stock mt-5">Owned: 0</span>
                      </div>
                    </div>
                  </button>
                </div>

                <div id="eth" class="tabcontent">
                  <p class="center bun_p">
                    Don’t miss out on the SOLID bundle sale! <br />
                  </p>
                  <br />
                  <p class="center bun_p2">
                    <span class="percentage_off"
                      ><b>{{ percentageOff }}% off</b></span
                    >
                    from the IDO price
                  </p>

                  <el-carousel
                    type="card"
                    :autoplay="false"
                    class="mt-15"
                    @change="changeBundle"
                  >
                    <el-carousel-item name="bigBundle">
                      <div>
                        <img
                          src="../assets/images/solid_voucher_80000.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>80, 000</span>
                      </div>
                    </el-carousel-item>

                    <el-carousel-item name="smallBundle">
                      <div>
                        <img
                          src="../assets/images/sLD_Token_voucher_40k.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>40, 000</span>
                      </div>
                    </el-carousel-item>
                  </el-carousel>

                  <div class="center d-flex-center mt-15">
                    <div>
                      <div class="d-flex-center">
                        <div class="flex-align-center">
                          <span
                            class="material-icons mi"
                            @click="minBundle('eth')"
                          >
                            remove_circle
                          </span>
                          <input
                            class="num_input"
                            placeholder="1"
                            v-model="ethBundle"
                          />
                          <span
                            class="material-icons mi"
                            @click="maxBundle('eth')"
                          >
                            add_circle
                          </span>
                        </div>
                      </div>
                      <div class="mt-5">
                        <span style="font-size:12px;color:#625f81;"
                          >*Maximum 3 bundles in a single transaction.</span
                        >
                      </div>

                      <div class="round_token_button mt-10">
                        <div
                          class="flex-justify-between-center"
                          v-if="
                            isDrizzleInitialized &&
                              checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          <span
                            class="matic_btn"
                            v-if="onEthNetwork"
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span style="color:#B6B6B6;font-size:0.8rem;" v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            style="color:#B6B6B6;margin-left: 10px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >
                          <span
                            class="matic_btn ml-15"
                            v-else
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Etherum </b></span>
                          </span>
                        </div>

                        <vs-button
                          danger
                          @click="changeNetwork"
                          v-else-if="
                            isDrizzleInitialized &&
                              !checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          Wrong Network Connected
                          {{ errorNotify('top-center', 'danger') }}
                        </vs-button>

                        <vs-button
                          v-else
                          class="connect_button"
                          style="font-size: 0.8rem;"
                          @click="changeNetwork"
                        >
                          Connect Wallect
                        </vs-button>

                        <vs-button
                          class="buy_button"
                          style="font-size: 1rem;"
                          @click="buyTokens"
                        >
                          <b> BUY</b>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="wEth" class="tabcontent">
                  <p class="center bun_p">
                    Don’t miss out on the SOLID bundle sale! <br />
                  </p>
                  <br />
                  <p class="center bun_p2">
                    <span class="percentage_off"
                      ><b>{{ percentageOff }}% off</b></span
                    >
                    from the IDO price
                  </p>

                  <el-carousel
                    type="card"
                    :autoplay="false"
                    class="mt-15"
                    @change="changeBundle"
                  >
                    <el-carousel-item name="bigBundle">
                      <div>
                        <img
                          src="../assets/images/solid_voucher_80000.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>80, 000</span>
                      </div>
                    </el-carousel-item>

                    <el-carousel-item name="smallBundle">
                      <div>
                        <img
                          src="../assets/images/sLD_Token_voucher_40k.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>40, 000</span>
                      </div>
                    </el-carousel-item>
                  </el-carousel>

                  <div class="center d-flex-center mt-15">
                    <div>
                      <div class="d-flex-center">
                        <div class="flex-align-center">
                          <span
                            class="material-icons mi"
                            @click="minBundle('wEth')"
                          >
                            remove_circle
                          </span>
                          <input
                            class="num_input"
                            placeholder="1"
                            v-model="wBundle"
                          />
                          <span
                            class="material-icons mi"
                            @click="maxBundle('wEth')"
                          >
                            add_circle
                          </span>
                        </div>
                      </div>
                      <div class="mt-5">
                        <small style="font-size:12px;color:#625f81;"
                          >*Maximum 3 bundles in a single transaction.</small
                        >
                      </div>

                      <div class="round_token_button mt-10">
                        <div
                          class="flex-justify-between-center"
                          v-if="
                            isDrizzleInitialized &&
                              checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          <span
                            class="matic_btn"
                            v-if="onEthNetwork"
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span style="color:#B6B6B6;font-size:0.8rem;" v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            style="color:#B6B6B6;margin-left: 10px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >
                          <span
                            class="matic_btn ml-15"
                            v-else
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Etherum </b></span>
                          </span>
                        </div>

                        <vs-button
                          danger
                          @click="changeNetwork"
                          v-else-if="
                            isDrizzleInitialized &&
                              !checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          Wrong Network Connected
                          {{ errorNotify('top-center', 'danger') }}
                        </vs-button>

                        <vs-button
                          v-else
                          class="connect_button"
                          style="font-size: 0.8rem;"
                          @click="changeNetwork"
                        >
                          Connect Wallect
                        </vs-button>

                        <vs-button
                          class="buy_button"
                          style="font-size: 1rem;"
                          @click="buyTokens"
                        >
                          <b> BUY</b>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="matic" class="tabcontent">
                  <p class="center bun_p">
                    Don’t miss out on the SOLID bundle sale! <br />
                  </p>
                  <br />
                  <p class="center bun_p2">
                    <span class="percentage_off"
                      ><b>{{ percentageOff }}% off</b></span
                    >
                    from the IDO price
                  </p>

                  <el-carousel
                    type="card"
                    :autoplay="false"
                    class="mt-15"
                    @change="changeBundle"
                  >
                    <el-carousel-item name="bigBundle">
                      <div>
                        <img
                          src="../assets/images/solid_voucher_80000.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>80, 000</span>
                      </div>
                    </el-carousel-item>

                    <el-carousel-item name="smallBundle">
                      <div>
                        <img
                          src="../assets/images/sLD_Token_voucher_40k.png"
                          alt="tkbundles"
                          class="caro_image"
                        />
                      </div>
                      <div class="bk_bun d-flex-center">
                        <vs-avatar size="35">
                          <img src="../assets/images/logo.png" alt="token" />
                        </vs-avatar>
                        <span>40, 000</span>
                      </div>
                    </el-carousel-item>
                  </el-carousel>

                  <div class="center d-flex-center mt-15">
                    <div>
                      <div class="d-flex-center">
                        <div class="flex-align-center">
                          <span
                            class="material-icons mi"
                            @click="minBundle('matic')"
                          >
                            remove_circle
                          </span>
                          <input
                            class="num_input"
                            placeholder="1"
                            v-model="maticBundle"
                          />
                          <span
                            class="material-icons mi"
                            @click="maxBundle('matic')"
                          >
                            add_circle
                          </span>
                        </div>
                      </div>
                      <div class="mt-5">
                        <small style="font-size:12px;color:#625f81;"
                          >*Maximum 3 bundles in a single transaction.</small
                        >
                      </div>

                      <div class="round_token_button mt-10">
                        <div
                          class="flex-justify-between-center"
                          v-if="
                            isDrizzleInitialized &&
                              checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          <span
                            class="matic_btn"
                            v-if="onEthNetwork"
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span style="color:#B6B6B6;font-size:0.8rem;" v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            style="color:#B6B6B6;margin-left: 10px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >
                          <span
                            class="matic_btn ml-15"
                            v-else
                            @click="changeNetwork"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Etherum </b></span>
                          </span>
                        </div>

                        <vs-button
                          danger
                          @click="changeNetwork"
                          v-else-if="
                            isDrizzleInitialized &&
                              !checkNetwork(
                                this.drizzleInstance.web3._provider
                                  .networkVersion
                              )
                          "
                        >
                          Wrong Network Connected
                          {{ errorNotify('top-center', 'danger') }}
                        </vs-button>

                        <vs-button
                          v-else
                          class="connect_button"
                          style="font-size: 0.8rem;"
                          @click="changeNetwork"
                        >
                          Connect Wallect
                        </vs-button>

                        <vs-button
                          class="buy_button"
                          style="font-size: 1rem;"
                          @click="buyTokens"
                        >
                          <b> BUY</b>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
    <div class="ilustrations">
      <div class="wrap">
        <Illustrations />
        <br />
        <Subscribe />
      </div>
    </div>

    <!-- blog news section -->
    <div class="sec_div">
      <div
        class="wrap"
        style="z-index: 2; position:relative; margin-top:-250px;"
      >
        <!-- <vs-card-group>
          <vs-card>
            <template #img>
              <img src="../assets/images/nft.png" alt="blog" />
            </template>
            <template #title>
              <h3>SOLID NFTs</h3>
            </template>

            <template #text>
              <p>
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
              <p>
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
              <p>
                Stake SLD and provide liquidity on xyz for rewards.
              </p>
              <vs-button class="up_btn" style="font-size: 1rem;">
                <b>UPCOMING</b>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group> -->
        <vs-row>
          <vs-col :w="4" :xs="12" :sm="12">
            <div class="blog">
              <div class="blog_img">
                <img src="../assets/images/nft.png" alt="blog" />
              </div>
              <div class="blog_content">
                <h3>SOLID NFTs</h3>
                <p>
                  Earn NFT prizes for staking your SLD tokens
                </p>
                <vs-button class="up_btn" style="font-size: 1rem;">
                  <b>UPCOMING</b>
                </vs-button>
              </div>
            </div>
          </vs-col>
          <vs-col :w="4" :xs="12" :sm="12">
            <div class="blog">
              <div class="blog_img">
                <img src="../assets/images/nft.png" alt="blog" />
              </div>
              <div class="blog_content">
                <h3>SOLID Governance.</h3>
                <p>
                  SLD Token holder can participate in xyz decisions by voting
                  with their voting powers proportional ...
                </p>
                <vs-button class="up_btn" style="font-size: 1rem;">
                  <b>UPCOMING</b>
                </vs-button>
              </div>
            </div>
          </vs-col>
          <vs-col :w="4" :xs="12" :sm="12">
            <div class="blog">
              <div class="blog_img">
                <img src="../assets/images/nft.png" alt="blog" />
              </div>
              <div class="blog_content">
                <h3>SOLID Rewards</h3>
                <p>
                  Stake SLD and provide liquidity on xyz for rewards.
                </p>
                <vs-button class="up_btn" style="font-size: 1rem;">
                  <b>UPCOMING</b>
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <br /><br />
        <vs-button transparent color="#5b3cc4">
          <b>READ THE WHITEPAPER</b>
          <span class="material-icons-outlined ml-10">
            arrow_right_alt
          </span>
        </vs-button>
      </div>

      <AboutSolid />
    </div>

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

    <vs-dialog v-model="showNotifyDialog" width="250px" class="notify_dialog">
      <template #header>
        <h4 class="not-margin">
          Warning
        </h4>
      </template>
      <div>
        <b><p class="notify_txt" v-html="title"></p> </b>
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
    percentageOff: 35,
    active: 0,
    email: '',
    showWallects: false,
    showAccounts: false,
    activeChain: false,
    ethBundle: 1,
    maticBundle: 1,
    wBundle: 1,
    showNotifyDialog: false,
    title: '',
  }),
  created() {
    // this.$store.dispatch('drizzle/REGISTER_CONTRACT', argsTotalSupply);
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
    onEthNetwork() {
      let chain = this.drizzleInstance.web3._provider.networkVersion;
      let id = parseInt(chain);
      if (id == 80001 || id == 137) return false;
      else return true;
    },
  },
  methods: {
    buyTokens() {
      // check network first
      let chainId = this.drizzleInstance.web3._provider.networkVersion;
      if (this.getNetworkName(chainId) == 'Wrong Network')
        this.errorNotify('top-center', 'danger');
      else this.checkNetId();
    },
    // buyBundleTokens() {
    //   this.drizzleInstance.contracts['SolidProtocol'].methods[
    //     'send50Tokens'
    //   ].cacheSend(this.activeAccount, { gas: 60000 });
    // },
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
    maxBundle(bundle) {
      console.log(bundle);
      if (bundle == 'eth') {
        if (this.ethBundle == 3)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
        else this.ethBundle++;
      }

      if (bundle == 'wEth') {
        if (this.wBundle == 3)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
        else this.wBundle++;
      }

      if (bundle == 'matic') {
        if (this.maticBundle == 3)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
        else this.maticBundle++;
      }
    },
    minBundle(bundle) {
      console.log(bundle);
      if (bundle == 'eth') {
        if (this.ethBundle == 1)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
        else this.ethBundle--;
      }

      if (bundle == 'wEth') {
        if (this.wBundle == 1)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
        else this.wBundle--;
      }

      if (bundle == 'matic') {
        if (this.maticBundle == 1)
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
        else this.maticBundle--;
      }
    },
    changeBundle(r, i) {
      console.log(r, i);
      let bb = r;
      this.percentageOff = bb == 1 ? 30 : 35;
    },
    openCity(evt, cityName) {
      if ((cityName == 'wEth' || cityName == 'matic') && this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Ethereum</span> chain Please switch to <span style="color:#5772ec;">Matic Mainnet</span> for this transaction';
        this.showNotifyDialog = true;
      } else if (cityName == 'eth' && !this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Matic</span> chain Please switch to <span style="color:#5772ec;">Ethereum Chain</span> for this transaction';
        this.showNotifyDialog = true;
      }
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
      document.getElementById(cityName).style.display = 'block';
      evt.currentTarget.className += ' active';
    },
  },
};
</script>
