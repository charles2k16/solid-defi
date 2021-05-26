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

          <span style="color:whitesmoke;">0</span>
        </div>
      </div>

      <div class="wrap_bundle">
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
                    @click="openCity($event, 'eth')"
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
                          <span style="color:#511bb7;">Connect to eth</span>
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
                          <span style="color: #511bb7;">Connect to eth</span>
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ bigBundle }}</span
                        >
                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openCity($event, 'wEth')"
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
                          <span style="color: #511bb7;">Connect to matic</span>
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
                          <span style="color: #511bb7;">Connect to matic</span>
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ ethMaticBigStock }}</span
                        >

                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
                      </div>
                    </div>
                  </button>
                  <button
                    class="tablinks opacity"
                    @click="openCity($event, 'matic')"
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
                          <span style="color: #511bb7;">Connect to matic</span>
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ maticSmallStock }}</span
                        >
                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
                      </div>
                      <div style="margin-right:10px">
                        <h3 class="stock_bold">80,000</h3>
                        <br />
                        <span
                          class="d-block stock"
                          v-if="maticBigStock == 'loading'"
                        >
                          <span style="color: #511bb7;">Connect to matic</span>
                        </span>

                        <span class="d-block stock" v-else
                          >Stock: {{ maticBigStock }}</span
                        >
                        <!-- <span class="d-block stock mt-5">Owned: 0</span> -->
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
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;margin-left: 16px;font-size:0.8rem;"
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
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
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

                        <span class="approve_btn" @click="buyTokens">
                          <b>BUY</b>
                          <p style="font-size: 12px;margin-top:-1px;">
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
                          >
                            Connect to <br />
                            <span style="color:blue;"> <b>Matic </b></span>
                          </span>
                          <span
                            @click="checkAccounts"
                            style="color:#B6B6B6;font-size:0.8rem;"
                            v-else
                            >You're <br />
                            ON
                            <span style="color:#5772ec;">
                              <b> Matic </b></span
                            ></span
                          >

                          <span
                            @click="checkAccounts"
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
              <div class="blog_img"></div>
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
                <!-- <img src="../assets/images/nft.png" alt="blog" /> -->
              </div>
              <div class="blog_content">
                <h3>SOLID Governance</h3>
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
                <!-- <img src="../assets/images/nft.png" alt="blog" /> -->
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
import { mapGetters } from 'vuex';
import {
  getSmallBundlePriceEth,
  getBigBundlePriceEth,
  getEthMaticFactor,
} from '@/api/contractGeters';
import NavBar from '@/components/NavBar';
import ConnectWallect from '../components/ConnectWallect';
import Illustrations from './sections/Illustrations.vue';
import Subscribe from './sections/Subscribe.vue';
import AboutSolid from './sections/AboutSolid.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';

const getSmallBundleEth = {
  contractName: 'MaticEscrow',
  method: 'smallbundleEth',
  methodArgs: '',
};

const getBigBundleEth = {
  contractName: 'MaticEscrow',
  method: 'bigbundleEth',
  methodArgs: '',
};
const getSmallBundleMatic = {
  contractName: 'MaticEscrow',
  method: 'smallbundleMatic',
  methodArgs: '',
};
const getBigBundleMatic = {
  contractName: 'MaticEscrow',
  method: 'bigbundleMatic',
  methodArgs: '',
};
const getBigBundleprice = {
  contractName: 'SolidEscrow',
  method: 'bigbundleprice',
  methodArgs: '',
};
const getSmallBundleprice = {
  contractName: 'SolidEscrow',
  method: 'smallbundleprice',
  methodArgs: '',
};
const getBigBundle = {
  contractName: 'SolidEscrow',
  method: 'bigbundle',
  methodArgs: '',
};
const getSmallBundle = {
  contractName: 'SolidEscrow',
  method: 'smallbundle',
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
  data() {
    return {
      confirmTitle: '',
      showConfirmBundle: false,
      percentageOff: 35,
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
      showNotifyDialog: false,
      title: '',
      currentNetTab: 'eth',
      chain: null,
      serial: null,
      escrowAddress: '0x5011D48D4265b6fB8228600a111b2fAa1fDA3139',
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
      let allowance = this.drizzleInstance.contracts['Erc20'].methods[
        'allowance'
      ].cacheCall(this.activeAccount, this.escrowAddress);

      let value = this.contractInstances.Erc20.allowance[allowance].value;

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
    // balance() {
    //   let erc20Address = '0x0F26BE4f5A74d6FAe6A45af0EAf1CB97AE8Cd0bA';
    //   let balance = this.drizzleInstance.contracts['Erc20'].methods[
    //     'balanceOf'
    //   ].cacheCall(erc20Address);

    //   console.log(balance);

    //   let value = this.contractInstances.Erc20.balanceOf[balance].value;
    //   let fvalue = value !== 'undefined' ? value : 'value';

    //   return fvalue;
    // },
  },
  watch: {
    chain: function(netId) {
      console.log('chain changed');
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
      console.log(this.contractInstances.MaticEscrow);
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
        this.showNotifyDialog = true;
        return;
      } else if (this.currentNetTab == 'eth' && !this.onEthNetwork) {
        this.title =
          'You are on <span style="color:#5772ec;">Matic</span> chain, please switch to <span style="color:#5772ec;">Ethereum Chain</span> for this transaction.';
        this.showNotifyDialog = true;
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
          this.percentageOff == 35
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
      if (this.percentageOff == 35 && this.currentNetTab == 'eth')
        this.buyEthBigBundle(currentNumberofBundle, this.bigBundlePrice);
      else if (this.percentageOff == 35 && this.currentNetTab == 'wEth')
        this.buyWrapEthBigBundle(
          currentNumberofBundle,
          this.bigBundlePriceEthMatic
        );
      else if (this.percentageOff == 35 && this.currentNetTab == 'matic')
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
        this.percentageOff == 35
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
        this.percentageOff == 35
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
            this.percentageOff == 35
              ? 80000 * this.ethBundle
              : 40000 * this.ethBundle;
        } else {
          this.ethBundle++;
          this.currentEthBundle =
            this.percentageOff == 35
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
            this.percentageOff == 35
              ? 80000 * this.wBundle
              : 40000 * this.wBundle;
        } else {
          this.wBundle++;
          this.currentwEthBundle =
            this.percentageOff == 35
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
            this.percentageOff == 35
              ? 80000 * this.maticBundle
              : 40000 * this.maticBundle;
        } else {
          this.maticBundle++;
          this.currentMaticBundle =
            this.percentageOff == 35
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
          this.currentEthBundle = this.percentageOff == 35 ? 80000 : 40000;
        } else {
          this.ethBundle--;
          this.currentEthBundle =
            this.percentageOff == 35
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
          this.currentwEthBundle = this.percentageOff == 35 ? 80000 : 40000;
        } else {
          this.wBundle--;
          this.currentwEthBundle =
            this.percentageOff == 35
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
          this.currentMaticBundle = this.percentageOff == 35 ? 80000 : 40000;
        } else {
          this.maticBundle--;
          this.currentMaticBundle =
            this.percentageOff == 35
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
      this.percentageOff = bb == 1 ? 30 : 35;
      this.currentEthBundle = bb == 1 ? 40000 : 80000;
      this.currentwEthBundle = bb == 1 ? 40000 : 80000;
      this.currentMaticBundle = bb == 1 ? 40000 : 80000;
    },
    setActiveItem() {
      this.$refs.carouseleth.setActiveItem('bigBundle');
      this.$refs.carouselweth.setActiveItem('bigBundle');
      this.$refs.carouselmatic.setActiveItem('bigBundle');
    },
    openCity(evt, cityName) {
      this.currentNetTab = cityName;
      this.setActiveItem();
      this.percentageOff = 35;
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
        tablinks[i].classList.add('opacity');
      }
      document.getElementById(cityName).style.display = 'block';
      evt.currentTarget.className += ' active';
      evt.currentTarget.classList.remove('opacity');
    },
  },
};
</script>
