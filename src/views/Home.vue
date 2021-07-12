<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="wrap">
        <vs-row class="mt-70">
          <vs-col :w="7" :xs="12" :sm="12">
            <div>
              <span class="insights" style="color: #FCB42A;"
                >WELCOME TO SOLID DEFI
              </span>

              <div class="mt-20">
                <h1 class="lead_head_text1">
                  Home of Inflation Resistant Tokenomics.
                </h1>
              </div>

              <div class="mt-20">
                <p class="lead_text">
                  Solid Defi is a Bonding Curve based Token protocol that aims
                  to protect holders from With inflation getting hyper and
                  markets quick to panic sell, Solid Defi is creating tokens
                  that protect holders from both.
                </p>
              </div>
              <br />
              <div class="mt-20 d-flex">
                <vs-button
                  blank
                  href="https://soliddefi.gitbook.io/solid-whitepaper/"
                >
                  <b>Learn more</b>
                </vs-button>
                <vs-button class="buy_button" blank to="/presale">
                  <b>BUY NOW</b>
                </vs-button>
              </div>
            </div>
          </vs-col>

          <vs-col :w="5" :xs="12" :sm="12">
            <div
              style="
                width: 100%;
                border: 1px solid grey;
                height: 400px;
                margin-left: 15px;
              "
            ></div>
          </vs-col>
        </vs-row>

        <div>
          <div class="mt-150">
            <h1 class="lead_head_text2">
              Solid Defi vs. Hyperinflation
            </h1>
            <vs-row class="mt-50">
              <vs-col :w="6" :xs="12" :sm="12">
                <div class="inflation">
                  <img
                    src="../assets/images/inflation.png"
                    alt=""
                    width="470px"
                  />
                </div>
              </vs-col>

              <vs-col :w="6" :xs="12" :sm="12">
                <div class="ml-20">
                  <p class="lead_text_inf">
                    Solid Defi is a Bonding Curve based Token protocol The first
                    product schedule for release after the Community Presale
                    will be SolidUSDT SolidUSDT reinvents the stablecoin Where
                    USDT is boned 1:1 with a US dollar. SolidUSDT is bonded
                    according to the square root of its supply. An increase in
                    the supply of SolidUSDT increase its value. This is in
                    contrast to a 1:1 stablecoin that loses its relative value
                    as its supply increases.
                  </p>
                </div>
              </vs-col>
            </vs-row>

            <vs-row class="mt-50">
              <vs-col :w="6" :xs="12" :sm="12">
                <div class="mr-20">
                  <p class="lead_text_inf">
                    If the FED wants to make the printers go Brrrrrr that’s just
                    more USD to feed to SolidUSDT. This is the Solid Bonding
                    Curve formula that ensures that as the supply of SolidUSDT
                    increases, so does the price: Buy Price =
                    (3/2*x+s**(3/2))**(2/3)-s Sell Price = Integral of x**(½) dx
                    = ⅔*x**(3/2) + c x = The amount in USDt you are sending to
                    the Solid Bonding Curve Contract s = The current supply of
                    solidUSDt
                  </p>
                </div>
              </vs-col>

              <vs-col :w="6" :xs="12" :sm="12">
                <div class="inflation">
                  <img
                    src="../assets/images/inflation.png"
                    alt=""
                    width="470px"
                  />
                </div>
              </vs-col>
            </vs-row>
          </div>
        </div>
      </div>
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <!-- <vs-row class="mt-50">
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
                <div class="progress_token" :style="{ width: `${10.2}%` }">
                  <span>10.2%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">20M Tokens</p>
            </div>
          </vs-col>
        </vs-row> -->

        <Illustrations />
        <br />
        <Subscribe />
        <RoadMap />
      </div>
    </div>

    <!-- blog news section -->
    <div class="sec_div">
      <div
        class="wrap_blog"
        style="z-index: 2; position: relative; margin-top: -250px"
      >
        <BlogSection />
      </div>

      <AboutSolid />
    </div>
    <Faqs />
    <Community />

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Illustrations from './sections/Illustrations.vue';
import BlogSection from './sections/BlogSection.vue';
import Subscribe from './sections/Subscribe.vue';
import RoadMap from './sections/RoadMap.vue';
import AboutSolid from './sections/AboutSolid.vue';
import Faqs from './sections/Faqs.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Illustrations,
    BlogSection,
    Subscribe,
    RoadMap,
    AboutSolid,
    Faqs,
    Community,
    Footer,
  },
  data() {
    return {
      tokenSale: 'Over 2,000,000',
      confirmTitle: '',
      active: 0,
    };
  },
};
</script>
