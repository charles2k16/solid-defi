<template>
  <div class="main_container">
    <NavBar />
    <div class="hero mb-50">
      <div class="wrap">
        <div class="d-flex-center">
          <vs-button class="airdrop_btn" blank to="/airdrop" id="airdrop_btn">
            <b>Get AirDrop</b>
          </vs-button>
        </div>
        <GetSolidHeader />

        <div class="wrap_bundle">
          <div class="mt-50">
            <vs-row class="mt-20">
              <vs-col :w="3" :xs="12" :sm="12">
                <img
                  src="../assets/images/solid_bundle_promo.png"
                  alt="log"
                  class="solid_bundle_promo"
                />
              </vs-col>
              <vs-col :w="9" :xs="12" :sm="12">
                <div class="bundle_container">
                  <div id="overlay" v-show="showOverlay">
                    <div @click="closeOverlay" class="blocker"></div>
                    <div>
                      <span
                        class="material-icons overlay_cancel"
                        @click="closeOverlay"
                      >
                        cancel
                      </span>
                      <div class="overlay_div">
                        <span class="yellow_bar"></span>
                        <div class="overlay_div2">
                          <div class="center">
                            <h1>COUNTDOWN TO</h1>

                            <h2>
                              COMMUNITY PRESALE! <br />
                              ROUND 2
                            </h2>

                            <h3>SEPT 15 2021 5pm UTC</h3>
                            <!-- <span class="second_presale mt-10 d-block"
                          >(Second Presale)</span
                        > -->
                          </div>
                          <br /><br />
                          <div>
                            <flip-countdown
                              deadline="2021-09-15 12:00:00"
                              class="timerr"
                            ></flip-countdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bundle_tab">
                    <h4 class="insights center">SOLID Token Bundle</h4>
                  </div>

                  <div class="tab">
                    <button
                      class="tablinks active"
                      @click="openTab($event, 'eth')"
                    >
                      <a href="#eth" style="text-decoration: none">
                        <div class="flex-justify-evenly-center">
                          <div class="flex-row-center">
                            <img
                              src="../assets/images/eth.png"
                              alt="eth"
                              width="60px"
                            />

                            <span class="mt-20"><b>ETH</b></span>
                          </div>
                          <div class="mx-10">
                            <div>
                              <span class="stock1">20K - </span>

                              <span class="stock"> Stock: 22</span>
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>

                              <span class="stock">Stock: 25</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </button>
                    <button
                      class="tablinks opacity"
                      @click="openTab($event, 'wEth')"
                    >
                      <a href="#wEth" style="text-decoration: none">
                        <div class="flex-justify-evenly-center">
                          <div class="flex-row-center">
                            <img
                              src="../assets/images/eth.png"
                              alt="weth"
                              width="60px"
                            />

                            <span class="mt-20"><b>wETH</b></span>
                          </div>
                          <div class="mx-10">
                            <div>
                              <span class="stock1">20K - </span>

                              <span class="stock"> Stock: 25</span>
                            </div>

                            <div class="mt-12">
                              <span class="stock1">10K - </span>

                              <span class="stock">Stock: 19</span>
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>

                              <span class="stock">Stock: 20</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </button>
                    <button
                      class="tablinks opacity"
                      @click="openTab($event, 'matic')"
                    >
                      <a href="#matic" style="text-decoration: none">
                        <div class="flex-justify-evenly-center">
                          <div class="flex-row-center">
                            <img
                              src="../assets/images/matic_icon.png"
                              alt="matic"
                              width="60px"
                            />

                            <span class="mt-20"><b>MATIC</b></span>
                          </div>
                          <div class="mx-10">
                            <div>
                              <span class="stock1">20K - </span>

                              <span class="stock"> Stock: 30</span>
                            </div>
                            <div class="mt-12">
                              <span class="stock1">10K - </span>

                              <span class="stock">Stock: 20</span>
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>

                              <span class="stock">Stock: 23</span>
                            </div>
                          </div>
                        </div>
                      </a>
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
                      ref="carouseleth"
                      type="card"
                      :autoplay="false"
                      class="mt-15"
                      @change="changeBundle"
                    >
                      <el-carousel-item name="bigBundle" class="bigB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_80k_eth.png"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>20,000</span>
                        </div>
                      </el-carousel-item>

                      <el-carousel-item name="smallBundle" class="smallB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_40k_eth.jpg"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>5,000</span>
                        </div>
                      </el-carousel-item>
                    </el-carousel>

                    <div class="center d-flex-center mt-20">
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
                        <div class="mt-15">
                          <span style="font-size: 12px; color: #625f81"
                            >*Maximum 3 bundles in a single transaction.</span
                          >
                        </div>

                        <div class="round_token_button mt-15">
                          <div class="flex-justify-between-center">
                            <span class="matic_btn" style="margin-left: 2px">
                              Connect to <br />
                              <span style="color: blue"> <b>Matic </b></span>
                            </span>

                            <span
                              style="
                            color: #b6b6b6;
                            margin-left: 15px;
                            font-size: 0.8rem;
                          "
                              >You're <br />
                              <span style="color: #dddbec">
                                <b>ON Ethereum </b></span
                              ></span
                            >
                          </div>

                          <vs-button
                            class="buy_button"
                            style="font-size: 1rem"
                            @click="openOverlay('eth')"
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
                      ref="carouselweth"
                    >
                      <el-carousel-item name="bigBundle" class="bigB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_80k_matic.png"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>20,000</span>
                        </div>
                      </el-carousel-item>

                      <el-carousel-item name="smallBundle" class="smallB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_40k_matic.jpg"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>10,000</span>
                        </div>
                      </el-carousel-item>

                      <el-carousel-item name="mediumBundle" class="mediumB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_40k_matic.jpg"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>5,000</span>
                        </div>
                      </el-carousel-item>
                    </el-carousel>

                    <div class="center d-flex-center mt-20">
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
                        <div class="mt-10">
                          <small style="font-size: 12px; color: #625f81"
                            >*Maximum 3 bundles in a single transaction.</small
                          >
                        </div>

                        <div class="round_token_button_weth mt-15">
                          <div class="flex-justify-between-center">
                            <span
                              style="
                            color: #b6b6b6;
                            font-size: 0.8rem;
                            margin-left: 12px;
                          "
                              >You're <br />
                              ON
                              <span style="color: #5772ec">
                                <b> Matic </b></span
                              ></span
                            >

                            <span class="matic_btn" style="margin-left: 27px">
                              Connect to <br />
                              <span style="color: blue"> <b>Ethereum </b></span>
                            </span>
                          </div>

                          <span
                            class="approve_btn"
                            @click="openOverlay('wEth')"
                          >
                            <b>BUY</b>
                            <p
                              style="
                            font-size: 11px;
                            margin-top: -1px;
                            text-align: center;
                          "
                            >
                              Approve first
                            </p>
                          </span>
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
                      ref="carouselmatic"
                    >
                      <el-carousel-item name="bigBundle" class="bigB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_80k_matic.png"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>20,000</span>
                        </div>
                      </el-carousel-item>

                      <el-carousel-item name="smallBundle" class="smallB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_40k_matic.jpg"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>10,000</span>
                        </div>
                      </el-carousel-item>

                      <el-carousel-item name="mediumBundle" class="mediumB">
                        <div>
                          <img
                            src="../assets/images/sLD_Token_voucher_40k_matic.jpg"
                            alt="tkbundles"
                            class="caro_image"
                          />
                        </div>
                        <div class="bk_bun d-flex-center">
                          <vs-avatar size="35">
                            <img src="../assets/images/sld.png" alt="token" />
                          </vs-avatar>
                          <span>5,000</span>
                        </div>
                      </el-carousel-item>
                    </el-carousel>

                    <div class="center d-flex-center mt-20">
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
                        <div class="mt-10">
                          <small style="font-size: 12px; color: #625f81"
                            >*Maximum 3 bundles in a single transaction.</small
                          >
                        </div>

                        <div class="round_token_button mt-15">
                          <div class="flex-justify-between-center">
                            <span
                              style="
                            color: #b6b6b6;
                            font-size: 0.8rem;
                            margin-left: 7px;
                          "
                              >You're <br />
                              ON
                              <span style="color: #5772ec">
                                <b> Matic </b></span
                              ></span
                            >

                            <span class="matic_btn" style="margin-left: 27px">
                              Connect to <br />
                              <span style="color: blue"> <b>Ethereum </b></span>
                            </span>
                          </div>

                          <vs-button
                            class="buy_button"
                            style="font-size: 1rem"
                            @click="openOverlay('matic')"
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
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <vs-row class="mt-50">
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="flex-align-center">
              <h1 class="yellow">
                {{ tokenSale }} tokens sold in first presale
              </h1>
            </div>
          </vs-col>
          <vs-col :w="2" :xs="2" :sm="2">
            <div
              class="flex-align-center"
              style="text-align: center; margin-left: 40px"
            >
              <div class="rule"></div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div>
              <div class="progress">
                <div class="progress_token" :style="{ width: `${71}%` }">
                  <span>71%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">4.2M Tokens</p>
            </div>
          </vs-col>
        </vs-row>

        <!-- timer for tokens -->
        <vs-row class="mt-50 ml-5">
          <vs-col :w="6" :xs="12" :sm="12">
            <div class="d-flex">
              <div>
                <h2 class="time_left-2">
                  Time Left
                </h2>
              </div>
              <flip-countdown
                deadline="2021-09-15 12:00:00"
                class="timerr"
              ></flip-countdown>
            </div>
          </vs-col>
          <vs-col :w="1" :xs="2" :sm="2">
            <div style="text-align:center;margin-left:-40px;">
              <div class="green_rule"></div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="progress">
              <div class="progress_time"></div>
            </div>
            <p class="mt-20 p_tokens">26 days</p>
          </vs-col>
        </vs-row>

        <Illustrations />
        <br />
        <subscribe />
      </div>
    </div>

    <!-- blog news section -->
    <div class="sec_div">
      <div
        class="wrap_blog"
        style="z-index: 2; position:relative; margin-top:-250px;"
      >
        <BlogSection />
      </div>

      <AboutSolid />
    </div>

    <Community />
    <Footer />
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';
import NavBar from '@/components/NavBar';
import GetSolidHeader from './sections/GetSolidHeader.vue';
import Illustrations from './sections/Illustrations.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';
import AboutSolid from './sections/AboutSolid.vue';
import BlogSection from './sections/BlogSection.vue';
import Subscribe from './sections/Subscribe.vue';

export default {
  name: 'SalesBundle',
  components: {
    FlipCountdown,
    NavBar,
    GetSolidHeader,
    Community,
    Footer,
    Illustrations,
    Subscribe,
    BlogSection,
    AboutSolid,
  },
  data() {
    return {
      showOverlay: false,
      tokenSale: '3,000,000',
      percentageOff: 52,
      bigPercentage: 52,
      smallPercentage: 48,
      midPercentage: 50,
      ethBundle: 1,
      maticBundle: 1,
      wBundle: 1,
      title: '',
      chainNetwork: 'null',
      currentNetTab: 'eth',
    };
  },
  methods: {
    openOverlay(net) {
      this.chainNetwork = net;
      let eb = document.getElementById('eth');
      let wb = document.getElementById('wEth');
      let mb = document.getElementById('matic');

      if (net == 'eth') eb.style.display = 'none';
      else if (net == 'wEth') wb.style.display = 'none';
      else if (net == 'matic') mb.style.display = 'none';

      this.showOverlay = true;
    },
    closeOverlay() {
      let eb = document.getElementById('eth');
      let wb = document.getElementById('wEth');
      let mb = document.getElementById('matic');

      if (this.chainNetwork == 'eth') eb.style.display = 'block';
      else if (this.chainNetwork == 'wEth') wb.style.display = 'block';
      else if (this.chainNetwork == 'matic') mb.style.display = 'block';

      this.showOverlay = false;
    },
    // changeBundle(r) {
    //   console.log(r);
    //   let bb = r;
    //   this.percentageOff = bb == 1 ? 60 : 70;
    //   // this.addAnimate();
    // },
    changeBundle(r) {
      this.ethBundle = 1;
      this.wBundle = 1;
      this.maticBundle = 1;
      let bundleIndex = r;
      if (this.currentNetTab == 'eth') {
        this.percentageOff =
          bundleIndex == 1 ? this.smallPercentage : this.bigPercentage;
      } else {
        this.percentageOff =
          bundleIndex == 0
            ? this.bigPercentage
            : bundleIndex == 1
            ? this.midPercentage
            : this.smallPercentage;
      }
      this.currentEthBundle = bundleIndex == 1 ? 5000 : 20000;
      this.currentwEthBundle =
        bundleIndex == 1 ? 10000 : bundleIndex == 0 ? 20000 : 5000;
      this.currentMaticBundle =
        bundleIndex == 1 ? 10000 : bundleIndex == 0 ? 20000 : 5000;
      this.setDefaultBundle(r);
    },
    setActiveItem() {
      this.$refs.carouseleth.setActiveItem('bigBundle');
      this.$refs.carouselweth.setActiveItem('bigBundle');
      this.$refs.carouselmatic.setActiveItem('bigBundle');
    },
    openTab(evt, cityName) {
      this.currentNetTab = cityName;
      this.setActiveItem();
      this.percentageOff =
        cityName == 'eth' ? this.bigPercentage : this.bigPercentage;

      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
        tablinks[i].classList.add('opacity');
      }
      document.getElementById(cityName).style.display = 'block';
      evt.currentTarget.className += ' active';
      evt.currentTarget.classList.remove('opacity');
    },
  },
};
</script>
