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
                <vs-button class="connect_button" style="font-size: 1rem;">
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

    <div class="news">
      <div class="sec_div" style="padding-bottom:50px;">
        <div class="wrap">
          <!-- <vs-card-group style="margin-top: -100px; z-index: 9999;">
            <vs-card>
              <template #title>
                <h3>Solid Protocol (SP) to list on MXC Exchange.</h3>
              </template>
              <template #img>
                <img src="../assets/images/nft.png" alt="" />
              </template>
              <template #text>
                <p style="font-size:16px;">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </template>
              <template #interactions>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span">
                    NFTs
                  </span>
                </vs-button>
              </template>
            </vs-card>

            <vs-card>
              <template #title>
                <h3>Solid Protocol first sale on UNI SWAP(our take ins).</h3>
              </template>
              <template #img>
                <img src="../assets/images/foto5.png" alt="" />
              </template>
              <template #text>
                <p style="font-size:16px;">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </template>
              <template #interactions>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span">
                    UNISWAP
                  </span>
                </vs-button>
              </template>
            </vs-card>

            <vs-card>
              <template #title>
                <h3>We have finally Launched our new protocol.</h3>
              </template>
              <template #img>
                <img src="../assets/images/foto1.png" alt="" />
              </template>
              <template #text>
                <p style="font-size:16px;">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </template>
              <template #interactions>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span">
                    LAUNCH
                  </span>
                </vs-button>
              </template>
            </vs-card>
          </vs-card-group> -->

          <div class="pt-50 pb-50">
            <vs-row>
              <vs-col :w="7" :xs="12" :sm="12">
                <div>
                  <h1 class="lead_head_text_black">
                    What is SOLID <br />
                    PROTOCOL?
                  </h1>
                  <div class="partner_div">
                    <img src="../assets/images/polygon.png" alt="polygon" />
                    <br />
                    <p class="mt-20 small_text">
                      SOLID COLLABORATES WITH POLYGON
                    </p>
                  </div>
                </div>
              </vs-col>
              <vs-col :w="5" :xs="12" :sm="12">
                <p class="lead_text_black">
                  The Solid Protocol acts as a bridge that could take any supply
                  of any market and convert it into a “Solid version” of the
                  market. It creates a stable market that the price is adjusted
                  non-linearly, in which it is a more stabilized market and
                  could be considered as a subset of the original market.
                </p>
                <p class="lead_text_black mt-20">
                  Our vision is to create an anti-inflation protocol for the
                  market with quantitative easing (QE), as one holds a “Solid
                  version” of a stable coin, the token could increase against
                  inflation.
                </p>

                <div class="partner_div2">
                  <img src="../assets/images/polygon.png" alt="polygon" />
                  <br />
                  <p class="mt-20 small_text">
                    SOLID COLLABORATES WITH POLYGON
                  </p>
                </div>
              </vs-col>
            </vs-row>

            <div class="center mt-100">
              <h1 class="token_text">1,000,000,000 tokens</h1>
              <p class="mt-20 text_p">
                The total supply of GAMEE Tokens is 1,000,000,000 tokens, all
                minted at once. Solid Tokens will be distributed among 11 main
                groups:
              </p>

              <div class="center mt-50">
                <img
                  src="../assets/images/chart.png"
                  alt="chart"
                  style="width:100%; height:auto;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="community">
      <div class="wrap">
        <vs-row class="mt-100">
          <vs-col :w="6" :xs="12" :sm="12">
            <div>
              <h2 class="lead_head_text1">
                Join our <br />
                Community
              </h2>
              <p class="lead_text mt-20">
                You can be the first to know about SLD token. Don’t miss the
                opportunity !
              </p>
            </div>
          </vs-col>

          <vs-col :w="6" :xs="12" :sm="12">
            <div class="flex-justify-around-center mt-20">
              <div class="flex-row-center">
                <vs-avatar class="tele_avatar" size="70">
                  <img src="../assets/images/telegram2.png" alt="telegram" />
                </vs-avatar>
                <p class="mt-20 center p_link">
                  <a href=""
                    >Join us on <br />
                    Telegram</a
                  >
                </p>
              </div>

              <div class="flex-row-center">
                <vs-avatar size="70">
                  <img src="../assets/images/twitter.png" alt="twitter" />
                </vs-avatar>
                <p class="mt-20 center p_link">
                  <a href=""
                    >Follow us on <br />
                    Twitter</a
                  >
                </p>
              </div>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>

    <div class="footer_container">
      <div class="wrap">
        <div class="d-flex-center">
          <img src="../assets/images/logo.png" alt="logo" width="70px" />
          <span class="material-icons add_icon">
            add
          </span>
          <img
            src="../assets/images/polygon2.png"
            alt="polygon"
            width="200px"
          />
        </div>

        <div class="center mt-20">
          <p class="p_link">
            © Solid Token in strategic partnership with <a href="#">Polygon</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'Home',
  components: {
    NavBar,
    FlipCountdown,
  },
  data: () => ({
    active: 0,
    email: '',
  }),
};
</script>
