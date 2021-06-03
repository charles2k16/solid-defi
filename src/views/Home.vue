<template>
  <div class="main_container">
    <NavBar />
    <div id="overlay">
      <div style="width:560px">
        <div class="overlay_div">
          <span class="yellow_bar"></span>
          <div class="overlay_div2">
            <div class="center">
              <h1>COUNTDOWN TO</h1>
              <br />
              <br />
              <h2>COMMUNITY PRESALE!</h2>
            </div>
            <br /><br />
            <div>
              <flip-countdown
                deadline="2021-06-11 00:00:00"
                class="timerr"
              ></flip-countdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="wrap">
        <div class="center mt-50">
          <h1 class="lead_head_text">Get your SOLID now</h1>
        </div>

        <div class="d-flex-center mt-30">
          <vs-button
            href="https://explorer-mainnet.maticvigil.com/tokens/0x498E0A753840075c4925442D4d8863eEe49D61E2/token-transfers"
            blank
            style="font-size: 15px;color:whitesmoke;"
            transparent
          >
            View SOLID on Matic
          </vs-button>
          <vs-button
            href="https://etherscan.io/token/0x5011d48d4265b6fb8228600a111b2faa1fda3139"
            blank
            style="font-size: 15px;color:whitesmoke;"
            transparent
          >
            View SOLID on Etherscan
          </vs-button>
        </div>
      </div>

      <div class="wrap_bundle">
        <!-- change back to mt-50 -->
        <div class="mt-50">
          <vs-row class="mt-20">
            <vs-col :w="4" :xs="12" :sm="12">
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
                    @click="openTab($event, 'eth')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div
                        class="flex-row-center"
                        :id="smallBundle == 'loading' ? 'bundle_logo' : 'none'"
                      >
                        <img
                          src="../assets/images/eth.png"
                          alt="eth"
                          width="60px"
                        />

                        <span class="mt-20"><b>ETH</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />
                        <span
                          class="d-block stock"
                          v-if="smallBundle == 'loading'"
                        >
                          <span class="wallet-not"
                            >Wallet not connected to eth</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ smallBundle }}</span
                        >
                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span
                          class="d-block stock"
                          v-if="bigBundle == 'loading'"
                        >
                          <span class="wallet-not"
                            >Wallet not connected to eth</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ bigBundle }}</span
                        >
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openTab($event, 'wEth')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div
                        class="flex-row-center"
                        :id="
                          ethMaticSmallStock == 'loading'
                            ? 'bundle_logo'
                            : 'none'
                        "
                      >
                        <img
                          src="../assets/images/eth.png"
                          alt="weth"
                          width="60px"
                        />

                        <span class="mt-20"><b>wETH</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />

                        <span
                          class="d-block stock"
                          v-if="ethMaticSmallStock == 'loading'"
                        >
                          <span class="wallet-not"
                            >Wallect not connected to Matic</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ ethMaticSmallStock }}</span
                        >

                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />

                        <span
                          class="d-block stock"
                          v-if="ethMaticBigStock == 'loading'"
                        >
                          <span class="wallet-not"
                            >Wallect not connected to Matic</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ ethMaticBigStock }}</span
                        >
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openTab($event, 'matic')"
                  >
                    <div class="flex-justify-evenly-center">
                      <div
                        class="flex-row-center"
                        :id="
                          maticSmallStock == 'loading' ? 'bundle_logo' : 'none'
                        "
                      >
                        <img
                          src="../assets/images/matic_icon.png"
                          alt="matic"
                          width="60px"
                        />

                        <span class="mt-20"><b>MATIC</b></span>
                      </div>
                      <div class="mx-20">
                        <h3 class="stock_bold">40,000</h3>
                        <br />
                        <span
                          class="d-block stock"
                          v-if="maticSmallStock == 'loading'"
                        >
                          <span class="wallet-not"
                            >Wallect not connected to Matic</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ maticSmallStock }}</span
                        >
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span
                          class="d-block stock"
                          v-if="maticBigStock == 'loading'"
                        >
                          <span class="wallet-not"
                            >Connect wallet to Matic</span
                          >
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ maticBigStock }}</span
                        >
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
                          <img src="../assets/images/sld.png" alt="token" />
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
                          <img src="../assets/images/sld.png" alt="token" />
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
                            style="margin-left:-4px"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;margin-left:5px;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >
                          <span
                            class="matic_btn"
                            style="margin-left:20px"
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

                  <div class="notify_div" v-if="showChainWarning">
                    <div class="flex-justify-between-center">
                      <h4>Warning</h4>
                      <span
                        style="margin-right:-4px;"
                        class="material-icons-sharp"
                        @click="showChainWarning = false"
                      >
                        cancel
                      </span>
                    </div>

                    <b><p class="notify_txt mt-5" v-html="title"></p> </b>
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
                          <img src="../assets/images/sld.png" alt="token" />
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
                          <img src="../assets/images/sld.png" alt="token" />
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

                      <div class="round_token_button_weth mt-10">
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
                            style="margin-left:-10px"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;margin-left:-1px;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >

                          <span
                            class="matic_btn"
                            v-else
                            @click="changeNetwork"
                            style="margin-left:20px"
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

                        <span class="approve_btn" @click="buyTokens">
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

                  <div class="notify_div" v-if="showChainWarning">
                    <div class="flex-justify-between-center">
                      <h4>Warning</h4>
                      <span
                        style="margin-right:-4px;"
                        class="material-icons-sharp"
                        @click="showChainWarning = false"
                      >
                        cancel
                      </span>
                    </div>

                    <b><p class="notify_txt mt-5" v-html="title"></p> </b>
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
                          <img src="../assets/images/sld.png" alt="token" />
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
                          <img src="../assets/images/sld.png" alt="token" />
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
                            style="margin-left:-4px"
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;margin-left:5px;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;margin-left:15px;font-size:0.8rem;"
                            v-if="onEthNetwork"
                            >You're <br />
                            <span style="color:#DDDBEC;">
                              <b>ON Etherum </b></span
                            ></span
                          >

                          <span
                            class="matic_btn"
                            style="margin-left:20px"
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

                  <div class="notify_div" v-if="showChainWarning">
                    <div class="flex-justify-between-center">
                      <h4>Warning</h4>
                      <span
                        style="margin-right:-4px;"
                        class="material-icons-sharp"
                        @click="showChainWarning = false"
                      >
                        cancel
                      </span>
                    </div>

                    <b><p class="notify_txt mt-5" v-html="title"></p> </b>
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
        <!--         
        <vs-row class="mt-50">
          <vs-col :w="5" :xs="10" :sm="10">
            <div class="flex-align-center" v-if="onEthNetwork">
              <h1 class="yellow" v-if="bigBundle !== 'loading'">
                {{ getEthBalance(ethbalance) }} token sold in presale
              </h1>
            </div>

            <div class="flex-align-center" v-else>
              <h1 class="yellow" v-if="ethMaticSmallStock !== 'loading'">
                {{ getMaticBalance(maticbalance) }} tokens sold in presale
              </h1>
            </div>

            <div class="flex-align-center" v-if="!isDrizzleInitialized">
              <h1 class="yellow">{{ tokenSale }} tokens sold in presale</h1>
            </div>
          </vs-col>
          <vs-col :w="2" :xs="2" :sm="2">
            <div
              class="flex-align-center"
              style="text-align:center;margin-left:40px;"
            >
              <div class="rule"></div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div v-if="onEthNetwork">
              <div class="progress">
                <div
                  class="progress_token"
                  :style="{ width: `${ethPercentPurchased}%` }"
                >
                  <span>{{ Math.trunc(ethPercentPurchased) }}%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">14M Tokens</p>
            </div>

            <div v-else>
              <div class="progress">
                <div
                  class="progress_token"
                  :style="{ width: `${maticPercentPurchased}%` }"
                >
                  <span>{{ Math.trunc(maticPercentPurchased) }}%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">16M Tokens</p>
            </div>
          </vs-col>
        </vs-row> -->

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
        <BlogSection />
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
            <span style="color:#cb8016">
              {{
                getNetworkName(drizzleInstance.web3._provider.networkVersion)
              }}
            </span>
          </h4>

          <vs-button color="#cb8016" transparent @click="changeNetwork">
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

    <vs-dialog width="420px" not-center v-model="showConfirmBundle">
      <template #header>
        <h4 class="not-margin">Confirm <b>Bundle</b></h4>
      </template>

      <div class="con-content">
        <p v-html="confirmTitle"></p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button
            @click="showConfirmBundle = false"
            danger
            class="cancel_btn"
          >
            Cancel
          </vs-button>

          <div v-if="currentNetTab == 'wEth'">
            <vs-button
              v-if="
                typeof allowanceValue == 'undefined ' ||
                  allowanceValue == null ||
                  allowanceValue == 0
              "
              loading
              warn
              gradient
            >
              loading
            </vs-button>
            <vs-button class="buy_now" @click="confirmBuyBundle" v-else>
              Buy now
            </vs-button>
          </div>

          <div v-else>
            <vs-button class="buy_now" @click="confirmBuyBundle">
              Buy now
            </vs-button>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FlipCountdown from 'vue2-flip-countdown';
import {
  getSmallBundleEth,
  getBigBundleEth,
  getSmallBundlePriceEth,
  getBigBundlePriceEth,
  getEthMaticFactor,
  getSmallBundleMatic,
  getBigBundleMatic,
  getBigBundle,
  getSmallBundle,
  getSmallBundleprice,
  getBigBundleprice,
} from '@/api/contractGeters';
import NavBar from '@/components/NavBar';
import ConnectWallect from '../components/ConnectWallect';
import Illustrations from './sections/Illustrations.vue';
import BlogSection from './sections/BlogSection.vue';
import Subscribe from './sections/Subscribe.vue';
import AboutSolid from './sections/AboutSolid.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    FlipCountdown,
    ConnectWallect,
    Illustrations,
    BlogSection,
    Subscribe,
    AboutSolid,
    Community,
    Footer,
  },
  data() {
    return {
      tokenSale: 0,
      confirmTitle: '',
      showConfirmBundle: false,
      percentageOff: 37,
      active: 0,
      email: '',
      showWallects: false,
      showAccounts: false,
      activeChain: false,
      ethBundle: 1,
      currentEthBundle: 80000,
      maticBundle: 1,
      currentMaticBundle: 80000,
      wBundle: 1,
      currentwEthBundle: 80000,
      showChainWarning: false,
      title: '',
      currentNetTab: 'eth',
      chain: null,
      serial: null,
      escrowAddress: '0x5011D48D4265b6fB8228600a111b2fAa1fDA3139',
      ethSolidEscrowAddress: '0x27662EC00573DcA447F5F2c50Af1724B63679b29',
      maticEscrowAddress: '0x5011D48D4265b6fB8228600a111b2fAa1fDA3139',
    };
  },
  created() {
    if (this.onEthNetwork) this.connectToEthContract();
    else this.connectToMaticContract();
  },
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('contracts', ['getContractData', 'contractInstances']),
    ...mapGetters('drizzle', ['drizzleInstance']),

    onEthNetwork() {
      this.chain = this.drizzleInstance.web3._provider.networkVersion;
      let chain = this.drizzleInstance.web3._provider.networkVersion;
      let id = parseInt(chain);

      if (id == 80001 || id == 137) return false;
      else return true;
    },
    ethmaticFactor() {
      return this.getContractData({
        contract: getEthMaticFactor.contractName,
        method: getEthMaticFactor.method,
      });
    },
    smallBundlePriceEthMatic() {
      return this.getContractData({
        contract: getSmallBundlePriceEth.contractName,
        method: getSmallBundlePriceEth.method,
      });
    },
    bigBundlePriceEthMatic() {
      return this.getContractData({
        contract: getBigBundlePriceEth.contractName,
        method: getBigBundlePriceEth.method,
      });
    },
    bigBundle() {
      return this.getContractData({
        contract: getBigBundle.contractName,
        method: getBigBundle.method,
      });
    },
    smallBundle() {
      return this.getContractData({
        contract: getSmallBundle.contractName,
        method: getSmallBundle.method,
      });
    },
    ethMaticSmallStock() {
      return this.getContractData({
        contract: getSmallBundleEth.contractName,
        method: getSmallBundleEth.method,
      });
    },
    ethMaticBigStock() {
      return this.getContractData({
        contract: getBigBundleEth.contractName,
        method: getBigBundleEth.method,
      });
    },
    maticSmallStock() {
      return this.getContractData({
        contract: getSmallBundleMatic.contractName,
        method: getSmallBundleMatic.method,
      });
    },
    maticBigStock() {
      return this.getContractData({
        contract: getBigBundleMatic.contractName,
        method: getBigBundleMatic.method,
      });
    },
    allowanceValue() {
      let allowance = this.drizzleInstance.contracts['WrapEthErc20'].methods[
        'allowance'
      ].cacheCall(this.activeAccount, this.escrowAddress);

      let value = this.contractInstances.WrapEthErc20.allowance[allowance]
        .value;

      return value;
    },
    bigBundlePrice() {
      return this.getContractData({
        contract: getBigBundleprice.contractName,
        method: getBigBundleprice.method,
      });
    },
    smallBundlePrice() {
      return this.getContractData({
        contract: getSmallBundleprice.contractName,
        method: getSmallBundleprice.method,
      });
    },
    ethbalance() {
      let balance = this.drizzleInstance.contracts['EthErc20'].methods[
        'balanceOf'
      ].cacheCall(this.ethSolidEscrowAddress);

      console.log(balance);
      let value = this.contractInstances.EthErc20.balanceOf[balance].value;

      return value;
    },
    maticbalance() {
      let balance = this.drizzleInstance.contracts['MaticErc20'].methods[
        'balanceOf'
      ].cacheCall(this.maticEscrowAddress);

      console.log(balance);
      let value = this.contractInstances.MaticErc20.balanceOf[balance].value;

      return value;
    },
  },
  watch: {
    chain: function(netId) {
      if (netId == 80001 || netId == 137) {
        console.log('connecting to matic');
        this.connectToMaticContract();
      } else {
        console.log('connecting to eth');
        this.connectToEthContract();
      }
    },
  },
  methods: {
    connectToMaticContract() {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundleEth);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundleEth);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundleMatic);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundleMatic);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getEthMaticFactor);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundlePriceEth);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundlePriceEth);
    },
    connectToEthContract() {
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundle);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundle);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundleprice);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundleprice);
    },
    buyTokens() {
      let chainId = this.drizzleInstance.web3._provider.networkVersion;
      if (this.getNetworkName(chainId) == 'Wrong Network')
        this.errorNotify('top-center', 'danger');
      else this.buyBundleTokens();
    },
    buyBundleTokens() {
      if (this.currentNetTab !== 'eth' && this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Ethereum</span> chain, please switch to <span style="color:#5772ec;">Matic Mainnet</span> for this transaction.';
        this.showChainWarning = true;
        return;
      } else if (this.currentNetTab == 'eth' && !this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Matic</span> chain, please switch to <span style="color:#5772ec;">Ethereum Chain</span> for this transaction.';
        this.showChainWarning = true;
        return;
      }

      if (this.currentNetTab == 'eth') {
        this.getEthSerial(this.ethBundle);
        this.confirmTitle = `You are buying <span style="color:#5772ec;"><b>${
          this.ethBundle
        }</b></span> ${
          this.ethBundle > 1 ? 'bundles' : 'bundle'
        } at <span style="color:#cb8016"><b>${
          this.currentEthBundle
        }</b></span> SOLID Tokens with <span style="color:#5772ec;"><b> ${
          this.serial
        } of ETH</b></span> at ${this.percentageOff}% off.`;
        this.showConfirmBundle = true;
        return;
      }

      if (this.currentNetTab == 'wEth') {
        console.log('weth', this.currentwEthBundle);
        this.getMaticSerial(this.wBundle);
        this.confirmTitle = `You are buying <span style="color:#5772ec;"><b>${
          this.wBundle
        }</b></span> ${
          this.wBundle > 1 ? 'bundles' : 'bundle'
        } of <span style="color:#cb8016"><b>${
          this.currentwEthBundle
        }</b></span> SOLID Tokens with <span style="color:#5772ec;"><b> ${
          this.serial
        } of wEth</b></span> at ${this.percentageOff}% off.`;

        let allowValue = this.allowanceValue;
        if (typeof allowValue == 'undefined') {
          this.approveTrans();
        } else if (allowValue == 0 || allowValue == null) {
          this.approveTrans();
        }

        this.showConfirmBundle = true;
      }

      if (this.currentNetTab == 'matic') {
        console.log('matic', this.currentMaticBundle);
        this.getMaticSerial(this.maticBundle);
        let price =
          this.percentageOff == 37
            ? this.bigBundlePriceEthMatic
            : this.smallBundlePriceEthMatic;
        this.confirmTitle = `You are buying <span style="color:#5772ec;"><b>${
          this.maticBundle
        }</b></span> ${
          this.maticBundle > 1 ? 'bundles' : 'bundle'
        } at <span style="color:#cb8016"><b>${
          this.currentMaticBundle
        }</b></span> SOLID Tokens with <span style="color:#5772ec;"><b> ${this.getMaticAmount(
          this.maticBundle,
          price,
          this.ethmaticFactor
        )} Matic</b></span>`;
        this.showConfirmBundle = true;
      }
    },
    confirmBuyBundle() {
      let currentNumberofBundle =
        this.currentNetTab == 'eth'
          ? this.ethBundle
          : this.currentNetTab == 'wEth'
          ? this.wBundle
          : this.currentNetTab == 'matic'
          ? this.maticBundle
          : 0;
      if (this.percentageOff == 37 && this.currentNetTab == 'eth')
        this.buyEthBigBundle(currentNumberofBundle, this.bigBundlePrice);
      else if (this.percentageOff == 37 && this.currentNetTab == 'wEth')
        this.buyWrapEthBigBundle(
          currentNumberofBundle,
          this.bigBundlePriceEthMatic
        );
      else if (this.percentageOff == 37 && this.currentNetTab == 'matic')
        this.buyMaticBigBundle(
          currentNumberofBundle,
          this.bigBundlePriceEthMatic,
          this.ethmaticFactor
        );

      // small bundles call
      if (this.percentageOff == 30 && this.currentNetTab == 'eth')
        this.buyEthSmallBundle(currentNumberofBundle, this.smallBundlePrice);
      else if (this.percentageOff == 30 && this.currentNetTab == 'wEth')
        this.buyWrapEthSmallBundle(
          currentNumberofBundle,
          this.smallBundlePriceEthMatic
        );
      else if (this.percentageOff == 30 && this.currentNetTab == 'matic')
        this.buyMaticSmallBundle(
          currentNumberofBundle,
          this.smallBundlePriceEthMatic,
          this.ethmaticFactor
        );
    },
    changeNetwork() {
      var a = parseInt(this.drizzleInstance.web3._provider.networkVersion);
      console.log(a);
      this.showWallects = true;
    },
    getEthSerial(bundle) {
      let totalAmnt =
        this.percentageOff == 37
          ? this.bigBundlePrice * bundle
          : this.smallBundlePrice * bundle;
      let serial = totalAmnt / 1000000000000000000;
      console.log('serial', serial);
      this.serial = serial;
    },
    getMaticSerial(bundle) {
      console.log('bigmatic', this.bigBundlePriceEthMatic);
      // console.log('factor', this.ethmaticFactor);
      console.log('smallmatic', this.smallBundlePriceEthMatic);
      let totalAmnt =
        this.percentageOff == 37
          ? this.bigBundlePriceEthMatic * bundle
          : this.smallBundlePriceEthMatic * bundle;
      let serial = totalAmnt / 1000000000000000000;
      console.log('serial', serial);
      this.serial = serial;
    },
    toEth(weiBalance) {
      // let etherValue = Web3.utils.fromWei(weiBalance, 'ether');
      let ether = parseFloat(weiBalance).toFixed(4);
      return ether;
    },
    checkAccounts() {
      this.showAccounts = true;
      // Web3.eth.net.getId().then(console.log);
    },
    maxBundle(bundle) {
      console.log(bundle);
      if (bundle == 'eth') {
        if (this.ethBundle == 3) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
          this.currentEthBundle =
            this.percentageOff == 37
              ? 80000 * this.ethBundle
              : 40000 * this.ethBundle;
        } else {
          this.ethBundle++;
          this.currentEthBundle =
            this.percentageOff == 37
              ? 80000 * this.ethBundle
              : 40000 * this.ethBundle;
        }
      }

      if (bundle == 'wEth') {
        if (this.wBundle == 3) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
          this.currentwEthBundle =
            this.percentageOff == 37
              ? 80000 * this.wBundle
              : 40000 * this.wBundle;
        } else {
          this.wBundle++;
          this.currentwEthBundle =
            this.percentageOff == 37
              ? 80000 * this.wBundle
              : 40000 * this.wBundle;
        }
      }

      if (bundle == 'matic') {
        if (this.maticBundle == 3) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't exceed 3"
          );
          this.currentMaticBundle =
            this.percentageOff == 37
              ? 80000 * this.maticBundle
              : 40000 * this.maticBundle;
        } else {
          this.maticBundle++;
          this.currentMaticBundle =
            this.percentageOff == 37
              ? 80000 * this.maticBundle
              : 40000 * this.maticBundle;
        }
      }
    },
    minBundle(bundle) {
      if (bundle == 'eth') {
        if (this.ethBundle == 1) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
          this.currentEthBundle = this.percentageOff == 37 ? 80000 : 40000;
        } else {
          this.ethBundle--;
          this.currentEthBundle =
            this.percentageOff == 37
              ? this.currentEthBundle - 80000
              : this.currentEthBundle - 40000;
        }
      }

      if (bundle == 'wEth') {
        if (this.wBundle == 1) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
          this.currentwEthBundle = this.percentageOff == 37 ? 80000 : 40000;
        } else {
          this.wBundle--;
          this.currentwEthBundle =
            this.percentageOff == 37
              ? this.currentwEthBundle - 80000
              : this.currentwEthBundle - 40000;
        }
      }

      if (bundle == 'matic') {
        if (this.maticBundle == 1) {
          this.openNotification(
            'top-center',
            'danger',
            'Bundle Size',
            "Maximum bundle can't be less than 1"
          );
          this.currentMaticBundle = this.percentageOff == 37 ? 80000 : 40000;
        } else {
          this.maticBundle--;
          this.currentMaticBundle =
            this.percentageOff == 37
              ? this.currentMaticBundle - 80000
              : this.currentMaticBundle - 40000;
        }
      }
    },
    changeBundle(r) {
      this.ethBundle = 1;
      this.wBundle = 1;
      this.maticBundle = 1;
      let bb = r;
      this.percentageOff = bb == 1 ? 30 : 37;
      this.currentEthBundle = bb == 1 ? 40000 : 80000;
      this.currentwEthBundle = bb == 1 ? 40000 : 80000;
      this.currentMaticBundle = bb == 1 ? 40000 : 80000;
      this.addAnimate();
    },
    setActiveItem() {
      this.$refs.carouseleth.setActiveItem('bigBundle');
      this.$refs.carouselweth.setActiveItem('bigBundle');
      this.$refs.carouselmatic.setActiveItem('bigBundle');
    },
    openTab(evt, cityName) {
      this.currentNetTab = cityName;
      this.setActiveItem();
      this.percentageOff = 37;
      if ((cityName == 'wEth' || cityName == 'matic') && this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Ethereum</span> chain Please switch to <span style="color:#5772ec;">Matic Mainnet</span> for this transaction';
        this.showChainWarning = true;
      } else if (cityName == 'eth' && !this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Matic</span> chain Please switch to <span style="color:#5772ec;">Ethereum Chain</span> for this transaction';
        this.showChainWarning = true;
      }
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
