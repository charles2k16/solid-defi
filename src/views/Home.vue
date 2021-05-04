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
                <vs-button class="buy_button" style="font-size: 1.5rem;">
                  BUY
                </vs-button>
              </div>

              <div class="connect_d">
                <vs-button
                  class="connect_button"
                  style="font-size: 1rem;"
                  @click="showWallects = true"
                >
                  Connect to a wallet
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
                <vs-button class="connect_button" style="font-size: 1rem;">
                  Connect to a wallet
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <!-- token sold -->
        <vs-row class="mt-50">
          <vs-col :w="5" :xs="10" :sm="10">
            <h1 class="yellow">
              70M token sold in presale
            </h1>
          </vs-col>
          <vs-col :w="2" :xs="2" :sm="2">
            <div>
              <div class="rule"></div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="progress">
              <div class="progress_div"></div>
            </div>

            <h4 class="mt-20 p_tokens">100M TOKEN</h4>
          </vs-col>
        </vs-row>

        <!-- timer for tokens -->
        <vs-row class="mt-50">
          <vs-col :w="7" :xs="12" :sm="12">
            <div class="flex-align-center">
              <h1 class="time_left">Time Left</h1>
              <flip-countdown
                deadline="2021-06-11 00:00:00"
                class="timerr"
              ></flip-countdown>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="progress">
              <div class="progress_time"></div>
            </div>
            <h4 class="mt-20 p_tokens">5 days</h4>
          </vs-col>
        </vs-row>

        <vs-row class="mt-100">
          <vs-col :w="12" :xs="12" :sm="12">
            <div class="gif_anime"></div>
          </vs-col>
        </vs-row>
        <!-- <div class="mt-30">
          <iframe
            src="https://app.uniswap.org/#/swap?outputCurrency=0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373"
            height="660px"
            width="100%"
            style="
                border: 0;
                margin: 0 auto;
                display: block;
                border-radius: 10px;
                max-width: 940px;
                min-width: 240px;
              "
            id="myId"
          >
          </iframe>
        </div> -->

        <vs-row class="mt-100">
          <vs-col :w="7" :xs="12" :sm="12">
            <span class="insights">
              SLD TOKEN
            </span>

            <div class="mt-20">
              <h1 class="lead_head_text1">
                Fight inflation, <br />
                Earn Rewards
              </h1>

              <p class="lead_text mt-20">
                The SLD Token. A fungible ERC-20 utility token built on
                Ethereum. Leave us your email here to be the first one to get
                new information.
              </p>

              <div class="d-flex mt-30">
                <vs-input v-model="email" placeholder="Enter your email" />
                <vs-button class="sub_button">
                  <span class="material-icons mr">
                    mail_outline
                  </span>
                  <b>SUBSCRIBE</b>
                </vs-button>
              </div>

              <div class="mt-30">
                <vs-button transparent style="font-size:20px">
                  <img
                    src="../assets/images/telegram2.png"
                    alt="telegram"
                    width="25px"
                    class="mr-10"
                  />
                  <b style="color:#5b3cc4;">Join us on Telegram</b>
                </vs-button>
                <p class="small_text1">
                  For news, early access & special prizes
                </p>
                <h2 class="mt-30 small_text_primary">
                  Learn more in Solid Protocol Whitepaper
                </h2>
              </div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <!-- <img src="../assets/images/game.png" alt="" /> -->
          </vs-col>
        </vs-row>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '@/components/NavBar';
import ConnectWallect from '../components/ConnectWallect';
import FlipCountdown from 'vue2-flip-countdown';
import AboutSolid from './sections/AboutSolid.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    ConnectWallect,
    FlipCountdown,
    AboutSolid,
    Community,
    Footer,
  },
  data: () => ({
    active: 0,
    email: '',
    showWallects: false,
  }),
  computed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
  },
};
</script>
