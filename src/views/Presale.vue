<template>
  <div class="main_container">
    <NavBar />
    <div class="hero mb-50">
      <div class="wrap">
        <div eclass="d-flex-center">
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
                          <div
                            class="flex-row-center"
                            :id="
                              smallBundle == 'loading' ? 'bundle_logo' : 'none'
                            "
                          >
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
                              <span
                                class="wallet-not"
                                v-if="bigBundle == 'loading'"
                              >
                                Connect to Eth
                              </span>
                              <span class="stock" v-else>
                                Stock: {{ bigBundle }}</span
                              >
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>
                              <span
                                class="wallet-not"
                                v-if="smallBundle == 'loading'"
                              >
                                Connect to Eth
                              </span>
                              <span class="stock" v-else
                                >Stock: {{ smallBundle }}</span
                              >
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
                          <div class="mx-10">
                            <div>
                              <span class="stock1">20K - </span>
                              <span
                                class="wallet-not"
                                v-if="ethMaticBigStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else>
                                Stock: {{ ethMaticBigStock }}</span
                              >
                            </div>

                            <div class="mt-12">
                              <span class="stock1">10K - </span>
                              <span
                                class="wallet-not"
                                v-if="ethMaticMediumStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else
                                >Stock: {{ ethMaticMediumStock }}</span
                              >
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>
                              <span
                                class="wallet-not"
                                v-if="ethMaticSmallStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else
                                >Stock: {{ ethMaticSmallStock }}</span
                              >
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
                          <div
                            class="flex-row-center"
                            :id="
                              maticSmallStock == 'loading'
                                ? 'bundle_logo'
                                : 'none'
                            "
                          >
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
                              <span
                                class="wallet-not"
                                v-if="maticBigStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else>
                                Stock: {{ maticBigStock }}</span
                              >
                            </div>
                            <div class="mt-12">
                              <span class="stock1">10K - </span>
                              <span
                                class="wallet-not"
                                v-if="maticMediumStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else
                                >Stock: {{ maticMediumStock }}</span
                              >
                            </div>

                            <div class="mt-12">
                              <span class="stock1">5K - </span>
                              <span
                                class="wallet-not"
                                v-if="maticSmallStock == 'loading'"
                              >
                                Connect to Matic
                              </span>
                              <span class="stock" v-else
                                >Stock: {{ maticSmallStock }}</span
                              >
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
                              style="margin-left: 2px"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Matic </b></span>
                            </span>
                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            font-size: 0.8rem;
                            margin-left: 7px;
                          "
                              v-else
                              >You're <br />
                              ON
                              <span style="color: #5772ec">
                                <b> Matic </b></span
                              ></span
                            >

                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            margin-left: 15px;
                            font-size: 0.8rem;
                          "
                              v-if="onEthNetwork"
                              >You're <br />
                              <span style="color: #dddbec">
                                <b>ON Ethereum </b></span
                              ></span
                            >
                            <span
                              class="matic_btn"
                              style="margin-left: 27px"
                              v-else
                              @click="changeNetwork"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Ethereum </b></span>
                            </span>
                          </div>

                          <vs-button
                            class="connect_button"
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
                            style="margin-left: 0px"
                            v-else
                            class="connect_button"
                            @click="changeNetwork"
                          >
                            Connect Wallet
                          </vs-button>

                          <vs-button
                            class="buy_button"
                            style="font-size: 1rem"
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
                          style="margin-right: -4px"
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
                              style="margin-left: 7px"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Matic </b></span>
                            </span>

                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            font-size: 0.8rem;
                            margin-left: 12px;
                          "
                              v-else
                              >You're <br />
                              ON
                              <span style="color: #5772ec">
                                <b> Matic </b></span
                              ></span
                            >

                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            margin-left: 15px;
                            font-size: 0.8rem;
                          "
                              v-if="onEthNetwork"
                              >You're <br />
                              <span style="color: #dddbec">
                                <b>ON Ethereum </b></span
                              ></span
                            >

                            <span
                              class="matic_btn"
                              v-else
                              @click="changeNetwork"
                              style="margin-left: 27px"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Ethereum </b></span>
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
                            style="margin-left: 5px"
                            v-else
                            class="connect_button"
                            @click="changeNetwork"
                          >
                            Connect Wallet
                          </vs-button>

                          <span class="approve_btn" @click="buyTokens">
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

                    <div class="notify_div" v-if="showChainWarning">
                      <div class="flex-justify-between-center">
                        <h4>Warning</h4>
                        <span
                          style="margin-right: -4px"
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
                              style="margin-left: 2px"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Matic </b></span>
                            </span>

                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            font-size: 0.8rem;
                            margin-left: 7px;
                          "
                              v-else
                              >You're <br />
                              ON
                              <span style="color: #5772ec">
                                <b> Matic </b></span
                              ></span
                            >

                            <span
                              @click="checkAccounts"
                              style="
                            color: #b6b6b6;
                            margin-left: 15px;
                            font-size: 0.8rem;
                          "
                              v-if="onEthNetwork"
                              >You're <br />
                              <span style="color: #dddbec">
                                <b>ON Ethereum </b></span
                              ></span
                            >

                            <span
                              class="matic_btn"
                              style="margin-left: 27px"
                              v-else
                              @click="changeNetwork"
                            >
                              Connect to <br />
                              <span style="color: blue"> <b>Ethereum </b></span>
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
                            style="margin-left: 0px"
                            v-else
                            class="connect_button"
                            @click="changeNetwork"
                          >
                            Connect Wallet
                          </vs-button>

                          <vs-button
                            class="buy_button"
                            style="font-size: 1rem"
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
                          style="margin-right: -4px"
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
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <vs-row class="mt-50">
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="flex-align-center" v-if="onEthNetwork">
              <h1 class="yellow" v-if="bigBundle !== 'loading'">
                {{ getEthBalance(ethbalance) }} token sold in second presale
              </h1>
            </div>

            <div class="flex-align-center" v-else>
              <h1 class="yellow" v-if="ethMaticSmallStock !== 'loading'">
                {{ getMaticBalance(maticbalance) }} tokens sold in second
                presale
              </h1>
            </div>

            <div class="flex-align-center" v-if="!isDrizzleInitialized">
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
            <div v-if="isDrizzleInitialized">
              <div v-if="onEthNetwork">
                <div class="progress">
                  <div
                    class="progress_token"
                    :style="{ width: `${ethPercentPurchased}%` }"
                  >
                    <span>{{ Math.trunc(ethPercentPurchased) }}%</span>
                  </div>
                </div>

                <p class="mt-20 p_tokens">68K Tokens</p>
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

                <p class="mt-20 p_tokens">1.48M Tokens</p>
              </div>
            </div>

            <div v-else>
              <div class="progress">
                <div class="progress_token" :style="{ width: `${11}%` }">
                  <span>11%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">20M Tokens</p>
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
                deadline="2021-09-03 12:00:00"
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
            <p class="mt-20 p_tokens">31 days</p>
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

    <vs-dialog v-model="showWallects" width="420px" class="_dialog">
      <template #header>
        <h4 class="not-margin">Choose a wallect provider</h4>
      </template>
      <ConnectWallect />
    </vs-dialog>

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

    <vs-dialog
      width="420px"
      not-center
      v-model="showConfirmBundle"
      class="_dialog"
    >
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
// import Vue from 'vue';
// import { store } from '../store/';
// import drizzleVuePlugin from '@drizzle/vue-plugin';
// import drizzleOptions from '@/plugins/drizzle';

// Vue.use(drizzleVuePlugin, { store, drizzleOptions });

import { mapGetters } from 'vuex';
import {
  getSmallBundleEth,
  getBigBundleEth,
  getMediumBundleEth,
  getSmallBundlePriceEth,
  getBigBundlePriceEth,
  getEthMaticFactor,
  getSmallBundleMatic,
  getBigBundleMatic,
  getMediumBundleMatic,
  getBigBundle,
  getSmallBundle,
  getSmallBundleprice,
  getBigBundleprice,
  getMediumBundlePriceEth,
} from '@/api/contractGeters';
import ConnectWallect from '@/components/ConnectWallect';
import NavBar from '@/components/NavBar';
import GetSolidHeader from './sections/GetSolidHeader.vue';
import FlipCountdown from 'vue2-flip-countdown';
import Illustrations from './sections/Illustrations.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';
import AboutSolid from './sections/AboutSolid.vue';
import BlogSection from './sections/BlogSection.vue';
import Subscribe from './sections/Subscribe.vue';

export default {
  name: 'Home',
  components: {
    FlipCountdown,
    ConnectWallect,
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
      tokenSale: 'Over 2000000',
      confirmTitle: '',
      showConfirmBundle: false,
      percentageOff: 52,
      bigPercentage: 52,
      smallPercentage: 48,
      midPercentage: 50,
      active: 0,
      email: '',
      showWallects: false,
      showAccounts: false,
      activeChain: false,
      ethBundle: 1,
      currentEthBundle: 20000,
      maticBundle: 1,
      currentMaticBundle: 20000,
      wBundle: 1,
      currentwEthBundle: 20000,
      showChainWarning: false,
      title: '',
      currentNetTab: 'eth',
      chain: null,
      serial: null,
      ethSolidEscrowAddress: '0x27662EC00573DcA447F5F2c50Af1724B63679b29',
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

    // matci/wEth bundle prices
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
    mediumBundlePriceEthMatic() {
      return this.getContractData({
        contract: getMediumBundlePriceEth.contractName,
        method: getMediumBundlePriceEth.method,
      });
    },

    // eth bundle prices
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

    //  eth bundles
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

    //  wrap eth bundles
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
    ethMaticMediumStock() {
      return this.getContractData({
        contract: getMediumBundleEth.contractName,
        method: getMediumBundleEth.method,
      });
    },

    //  matic bundles
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
    maticMediumStock() {
      return this.getContractData({
        contract: getMediumBundleMatic.contractName,
        method: getMediumBundleMatic.method,
      });
    },

    allowanceValue() {
      let allowance = this.drizzleInstance.contracts['WrapEthErc20'].methods[
        'allowance'
      ].cacheCall(this.activeAccount, this.maticEscrowAddress);

      let value = this.contractInstances.WrapEthErc20.allowance[allowance]
        .value;

      return value;
    },
    ethbalance() {
      let balance = this.drizzleInstance.contracts['EthErc20'].methods[
        'balanceOf'
      ].cacheCall(this.ethSolidEscrowAddress);

      let value = this.contractInstances.EthErc20.balanceOf[balance].value;

      return value;
    },
    maticbalance() {
      let balance = this.drizzleInstance.contracts['MaticErc20'].methods[
        'balanceOf'
      ].cacheCall(this.maticEscrowAddress);

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
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getMediumBundleEth);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundleMatic);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundleMatic);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getMediumBundleMatic);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getEthMaticFactor);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getSmallBundlePriceEth);
      this.$store.dispatch('drizzle/REGISTER_CONTRACT', getBigBundlePriceEth);
      this.$store.dispatch(
        'drizzle/REGISTER_CONTRACT',
        getMediumBundlePriceEth
      );
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
          this.percentageOff == this.bigPercentage
            ? this.bigBundlePriceEthMatic
            : this.percentageOff == this.smallPercentage
            ? this.smallBundlePriceEthMatic
            : this.mediumBundlePriceEthMatic;
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

      // buy big bundles call
      if (
        this.percentageOff == this.bigPercentage &&
        this.currentNetTab == 'eth'
      )
        this.buyEthBigBundle(currentNumberofBundle, this.bigBundlePrice);
      else if (
        this.percentageOff == this.bigPercentage &&
        this.currentNetTab == 'wEth'
      )
        this.buyWrapEthBigBundle(
          currentNumberofBundle,
          this.bigBundlePriceEthMatic
        );
      else if (
        this.percentageOff == this.bigPercentage &&
        this.currentNetTab == 'matic'
      )
        this.buyMaticBigBundle(
          currentNumberofBundle,
          this.bigBundlePriceEthMatic,
          this.ethmaticFactor
        );

      // buy small bundles call
      if (this.percentageOff == 60 && this.currentNetTab == 'eth')
        this.buyEthSmallBundle(currentNumberofBundle, this.smallBundlePrice);
      else if (
        this.percentageOff == this.smallPercentage &&
        this.currentNetTab == 'wEth'
      )
        this.buyWrapEthSmallBundle(
          currentNumberofBundle,
          this.smallBundlePriceEthMatic
        );
      else if (
        this.percentageOff == this.smallPercentage &&
        this.currentNetTab == 'matic'
      )
        this.buyMaticSmallBundle(
          currentNumberofBundle,
          this.smallBundlePriceEthMatic,
          this.ethmaticFactor
        );

      // buy medium bundles call
      if (
        this.percentageOff == this.midPercentage &&
        this.currentNetTab == 'wEth'
      )
        this.buyWrapEthMediumBundle(
          currentNumberofBundle,
          this.mediumBundlePriceEthMatic
        );
      else if (
        this.percentageOff == this.midPercentage &&
        this.currentNetTab == 'matic'
      )
        this.buyMaticMediumBundle(
          currentNumberofBundle,
          this.mediumBundlePriceEthMatic,
          this.ethmaticFactor
        );

      this.showConfirmBundle = false;
    },
    changeNetwork() {
      var a = parseInt(this.drizzleInstance.web3._provider.networkVersion);
      console.log(a);
      this.showWallects = true;
    },
    getEthSerial(bundle) {
      let totalAmnt =
        this.percentageOff == this.bigPercentage
          ? this.bigBundlePrice * bundle
          : this.smallBundlePrice * bundle;
      let serial = totalAmnt / 1000000000000000000;
      this.serial = serial;
    },
    getMaticSerial(bundle) {
      let totalAmnt =
        this.percentageOff == this.bigPercentage
          ? this.bigBundlePriceEthMatic * bundle
          : this.percentageOff == this.midPercentage
          ? this.mediumBundlePriceEthMatic * bundle
          : this.smallBundlePriceEthMatic * bundle;
      let serial = totalAmnt / 1000000000000000000;
      this.serial = serial;
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
            this.percentageOff == this.bigPercentage
              ? 20000 * this.ethBundle
              : 5000 * this.ethBundle;
        } else {
          this.ethBundle++;
          this.currentEthBundle =
            this.percentageOff == this.bigPercentage
              ? 20000 * this.ethBundle
              : 5000 * this.ethBundle;
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
            this.percentageOff == this.bigPercentage
              ? 20000 * this.wBundle
              : this.percentageOff == this.midPercentage
              ? 10000 * this.wBundle
              : 5000 * this.wBundle;
        } else {
          this.wBundle++;
          this.currentwEthBundle =
            this.percentageOff == this.bigPercentage
              ? 20000 * this.wBundle
              : this.percentageOff == this.midPercentage
              ? 10000 * this.wBundle
              : 5000 * this.wBundle;
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
            this.percentageOff == this.bigPercentage
              ? 20000 * this.maticBundle
              : this.percentageOff == this.midPercentage
              ? 10000 * this.maticBundle
              : 5000 * this.maticBundle;
        } else {
          this.maticBundle++;
          this.currentMaticBundle =
            this.percentageOff == this.bigPercentage
              ? 20000 * this.maticBundle
              : this.percentageOff == this.midPercentage
              ? 10000 * this.maticBundle
              : 5000 * this.maticBundle;
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
          this.currentEthBundle =
            this.percentageOff == this.bigPercentage ? 20000 : 5000;
        } else {
          this.ethBundle--;
          this.currentEthBundle =
            this.percentageOff == this.bigPercentage
              ? this.currentEthBundle - 20000
              : this.currentEthBundle - 5000;
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
          this.currentwEthBundle =
            this.percentageOff == this.bigPercentage
              ? 20000
              : this.percentageOff == this.midPercentage
              ? 10000
              : 5000;
        } else {
          this.wBundle--;
          this.currentwEthBundle =
            this.percentageOff == this.bigPercentage
              ? this.currentwEthBundle - 20000
              : this.percentageOff == this.midPercentage
              ? this.currentwEthBundle - 10000
              : this.currentwEthBundle - 5000;
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
          this.currentMaticBundle =
            this.percentageOff == this.bigPercentage
              ? 20000
              : this.percentageOff == this.midPercentage
              ? 10000
              : 5000;
        } else {
          this.maticBundle--;
          this.currentMaticBundle =
            this.percentageOff == this.bigPercentage
              ? this.currentMaticBundle - 20000
              : this.percentageOff == this.midPercentage
              ? this.currentMaticBundle - 10000
              : this.currentMaticBundle - 5000;
        }
      }
    },
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
