<template>
  <div>
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <div class="d-flex-center mt-30">
          <h1 class="lead_head_text">Get your SLD now</h1>
        </div>

        <div class="d-flex-center mt-20">
          <vs-button transparent style="font-size:1.2rem; color:whitesmoke;">
            via Uniswap
          </vs-button>
          <vs-button
            href="https://ropsten.etherscan.io/address/0x687422eea2cb73b5d3e242ba5456b782919afc85"
            blank
            style="font-size: 1.1rem;"
            class="eth_button"
          >
            View SLD on Etherscan
          </vs-button>
        </div>

        <div class="mt-30">
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
        </div>

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

              <div class="d-flex-center mt-30">
                <vs-input v-model="email" placeholder="Enter your email" />
                <vs-button
                  class="sub_button"
                  style="font-size: 1rem;margin-left:30px;"
                >
                  <span class="material-icons mr">
                    mail_outline
                  </span>
                  <b>SUBSCRIBE</b>
                </vs-button>
              </div>

              <div class="mt-30">
                <vs-button transparent style="font-size:20px">
                  <span
                    class="material-icons mr"
                    style="color:white; font-size:40px;"
                  >
                    send
                  </span>
                  <b>Join us on Telegram</b>
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
            <img src="../assets/images/game.png" alt="" />
          </vs-col>
        </vs-row>

        <!-- News -->
      </div>
    </div>

    <div class="news">
      <div class="sec_div">
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
                  <div style="margin-top:70px">
                    <img src="../assets/images/polygon.png" alt="" />
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
              </vs-col>
            </vs-row>

            <div class="center mt-100">
              <h1 class="token_text">1,000,000,000 tokens</h1>
              <p class="mt-20">
                The total supply of GAMEE Tokens is 1,000,000,000 tokens, all
                minted at once. Solid Tokens will be distributed among 11 main
                groups:
              </p>

              <div class="center mt-50">
                <img src="../assets/images/chart.png" alt="chart" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <vs-button transparent>
        <b>READ ALL POSTS</b>
      </vs-button>
    </div>

    <div class="community">
      <div class="wrap">
        <h2>
          Join our Community
        </h2>
      </div>
    </div>

    <div class="footer_container">
      <p>
        © 2021 SOLID PROTOCOL all rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data: () => ({
    active: 0,
  }),
};
</script>
