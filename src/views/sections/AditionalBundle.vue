<template>
  <div>
    <div class="wrap_bundle">
      <div class="mt-50">
        <vs-row class="mt-20">
          <vs-col :w="4" :xs="12" :sm="12">
            <img
              src="../../assets/images/solid_bundle_promo.png"
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
                <button class="tablinks active" @click="openTab($event, 'eth')">
                  <a href="#eth" style="text-decoration:none;">
                    <div class="flex-justify-evenly-center">
                      <div class="flex-row-center">
                        <img
                          src="../../assets/images/eth.png"
                          alt="eth"
                          width="60px"
                        />

                        <span class="mt-20"><b>ETH</b></span>
                      </div>
                      <div class="mx-20">
                        <div>
                          <span class="stock1">20K - </span>
                          <span class="stock"> Stock: 23</span>
                        </div>
                        <div class="mt-12">
                          <span class="stock1">10K - </span>
                          <span class="stock">Stock: 20</span>
                        </div>
                        <div class="mt-12">
                          <span class="stock1">5K - </span>
                          <span class="stock">Stock: 8</span>
                        </div>
                        <!-- <h3 class="stock_bold">Packages</h3>
                        <br />
                        <span class="d-block stock">210</span> -->
                      </div>
                    </div>
                  </a>
                </button>
                <button
                  class="tablinks opacity"
                  @click="openTab($event, 'wEth')"
                >
                  <div class="flex-justify-evenly-center">
                    <div class="flex-row-center">
                      <img
                        src="../../assets/images/eth.png"
                        alt="weth"
                        width="60px"
                      />

                      <span class="mt-20"><b>wETH</b></span>
                    </div>
                    <div class="mx-20">
                      <div>
                        <span class="stock1">80,000 - </span>
                        <span class="stock"> Stock: 23</span>
                      </div>
                      <div class="mt-12">
                        <span class="stock1">40,000 - </span>
                        <span class="stock">Stock: 20</span>
                      </div>
                      <div class="mt-12">
                        <span class="stock1">10,000 - </span>
                        <span class="stock">Stock: 8</span>
                      </div>
                      <!-- <h3 class="stock_bold">Packages</h3>
                        <br />
                        <span class="d-block stock">210</span> -->
                    </div>
                  </div>
                </button>
                <button
                  class="tablinks opacity"
                  @click="openTab($event, 'matic')"
                >
                  <div class="flex-justify-evenly-center">
                    <div class="flex-row-center">
                      <img
                        src="../../assets/images/matic_icon.png"
                        alt="matic"
                        width="60px"
                      />

                      <span class="mt-20"><b>MATIC</b></span>
                    </div>
                    <div class="mx-20">
                      <h3 class="stock_bold">Packages</h3>
                      <br />
                      <span class="d-block stock">120</span>
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
                  ref="carouseleth"
                  type="card"
                  :autoplay="false"
                  class="mt-15"
                  @change="changeBundle"
                >
                  <el-carousel-item name="bigBundle" class="bigB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>20, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="smallBundle" class="smallB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_40k_eth.jpg"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>40, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="mediumBundle" class="mediumB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>10, 000</span>
                    </div>
                  </el-carousel-item>
                </el-carousel>

                <div class="center d-flex-center mt-15">
                  <div>
                    <div class="d-flex-center">
                      <div class="flex-align-center">
                        <span class="material-icons mi">
                          remove_circle
                        </span>
                        <input
                          class="num_input"
                          placeholder="1"
                          v-model="ethBundle"
                        />
                        <span class="material-icons mi">
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
                      <div class="flex-justify-between-center">
                        <span class="matic_btn" style="margin-left:2px">
                          Connect to <br />
                          <span style="color:blue;"> <b>Matic </b></span>
                        </span>

                        <span
                          style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                          >You're <br />
                          <span style="color:#DDDBEC;">
                            <b>ON Etherum </b></span
                          ></span
                        >
                      </div>

                      <vs-button class="buy_button" style="font-size: 1rem;">
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
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>80, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="smallBundle" class="smallB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_40k_eth.jpg"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>40, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="mediumBundle" class="mediumB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>10, 000</span>
                    </div>
                  </el-carousel-item>
                </el-carousel>

                <div class="center d-flex-center mt-15">
                  <div>
                    <div class="d-flex-center">
                      <div class="flex-align-center">
                        <span class="material-icons mi">
                          remove_circle
                        </span>
                        <input
                          class="num_input"
                          placeholder="1"
                          v-model="wBundle"
                        />
                        <span class="material-icons mi">
                          add_circle
                        </span>
                      </div>
                    </div>
                    <div class="mt-5">
                      <small style="font-size:12px;color:#625f81;"
                        >*Maximum 3 bundles in a single transaction.</small
                      >
                    </div>

                    <div class="round_token_button_weth mt-10">
                      <div class="flex-justify-between-center">
                        <span class="matic_btn" style="margin-left:7px">
                          Connect to <br />
                          <span style="color:blue;"> <b>Matic </b></span>
                        </span>

                        <span
                          style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                          >You're <br />
                          <span style="color:#DDDBEC;">
                            <b>ON Etherum </b></span
                          ></span
                        >
                      </div>

                      <span class="approve_btn">
                        <b>BUY</b>
                        <p
                          style="font-size: 11px;margin-top:-1px;text-align:center;"
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
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>80, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="smallBundle" class="smallB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_40k_eth.jpg"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>40, 000</span>
                    </div>
                  </el-carousel-item>

                  <el-carousel-item name="mediumBundle" class="mediumB">
                    <div>
                      <img
                        src="../../assets/images/sLD_Token_voucher_80k_eth.png"
                        alt="tkbundles"
                        class="caro_image"
                      />
                    </div>
                    <div class="bk_bun d-flex-center">
                      <vs-avatar size="35">
                        <img src="../../assets/images/sld.png" alt="token" />
                      </vs-avatar>
                      <span>10, 000</span>
                    </div>
                  </el-carousel-item>
                </el-carousel>

                <div class="center d-flex-center mt-15">
                  <div>
                    <div class="d-flex-center">
                      <div class="flex-align-center">
                        <span class="material-icons mi">
                          remove_circle
                        </span>
                        <input
                          class="num_input"
                          placeholder="1"
                          v-model="maticBundle"
                        />
                        <span class="material-icons mi">
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
                      <div class="flex-justify-between-center">
                        <span class="matic_btn" style="margin-left:2px">
                          Connect to <br />
                          <span style="color:blue;"> <b>Matic </b></span>
                        </span>

                        <span
                          style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                          >You're <br />
                          <span style="color:#DDDBEC;">
                            <b>ON Etherum </b></span
                          ></span
                        >
                      </div>

                      <vs-button class="buy_button" style="font-size: 1rem;">
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
</template>

<script>
export default {
  name: 'AditionalBundle',
  data() {
    return {
      showOverlay: false,
      tokenSale: 0,
      percentageOff: 37,
      ethBundle: 1,
      maticBundle: 1,
      wBundle: 1,
      title: '',
      chainNetwork: 'null',
    };
  },
  methods: {
    closeOverlay() {
      let eb = document.getElementById('eth');
      let wb = document.getElementById('wEth');
      let mb = document.getElementById('matic');

      if (this.chainNetwork == 'eth') eb.style.display = 'block';
      else if (this.chainNetwork == 'weth') wb.style.display = 'block';
      else if (this.chainNetwork == 'matic') mb.style.display = 'block';

      this.showOverlay = false;
    },
    changeBundle(r) {
      console.log('rt', r);
      let bb = r;
      this.percentageOff = bb == 1 ? 30 : 37;
      let i;
      let smallB = document.getElementsByClassName('smallB');
      let bigB = document.getElementsByClassName('bigB');
      let mediumB = document.getElementsByClassName('mediumB');

      if (r == 1) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '35px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '20px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '50px';
        }
      } else if (r == 0) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '50px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '35px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '20px';
        }
      } else if (r == 2) {
        for (i = 0; i < smallB.length; i++) {
          smallB[i].style.marginLeft = '20px';
        }
        for (i = 0; i < bigB.length; i++) {
          bigB[i].style.marginLeft = '50px';
        }
        for (i = 0; i < mediumB.length; i++) {
          mediumB[i].style.marginLeft = '35px';
        }
      }
      this.addAnimate();
    },
    setActiveItem() {
      this.$refs.carouseleth.setActiveItem('bigBundle');
      this.$refs.carouselweth.setActiveItem('bigBundle');
      this.$refs.carouselmatic.setActiveItem('bigBundle');
    },
    openTab(evt, cityName) {
      this.setActiveItem();
      this.percentageOff = 37;

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
