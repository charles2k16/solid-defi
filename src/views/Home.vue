<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="home_bg">
        <div class="wrap">
          <vs-row>
            <vs-col :w="6" :xs="12" :sm="12">
              <div class="mt-70">
                <div class="flex-justify-between-center">
                  <h1 class="lead_head_text2" style="color: #FCB42A;">
                    SOLID DEFI
                  </h1>

                  <span class="material-icons icx">
                    clear
                  </span>

                  <img
                    src="../assets/images/polygon.png"
                    alt="polygon"
                    width="180px"
                  />
                </div>

                <div class="mt-50">
                  <p class="lead_head_text2">
                    The first stablecoin <br />To profit from inflation
                  </p>
                </div>

                <div class="mt-50">
                  <vs-button class="buy_button" blank to="/presale">
                    <b>BUY NOW!</b>
                  </vs-button>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>

    <div class="hero2">
      <div class="wrap">
        <div>
          <div class="d-flex-center">
            <img
              src="../assets/images/money_printing.png"
              alt="money"
              class="problem_image"
            />
            <h1 class="lead_head_text2">
              PROBLEM
            </h1>
          </div>
          <hr class="hd_rule" />

          <vs-row class="mt-70">
            <vs-col :w="7" :xs="12" :sm="12">
              <div>
                <img src="../assets/images/raw2.png" alt="" width="450px" />
              </div>
            </vs-col>

            <vs-col :w="5" :xs="12" :sm="12">
              <div class="ml-20">
                <h2 class="white">USDT ≠ STABLECOIN</h2>
                <p class="lead_text_inf mt-20">
                  It’s ironic that a token pegged 1:1 to USD should be called a
                  “stablecoin”. Nothing about this USD chart implies stability.
                  Since its inception, the dollar has lost over 96% of its
                  value. The only sure thing about the dollar is that it’s
                  purchasing power will continue to decrease.
                </p>
              </div>
            </vs-col>
          </vs-row>

          <vs-row class="mt-50">
            <vs-col :w="7" :xs="12" :sm="12">
              <div class="mr-20">
                <img src="../assets/images/rew.png" alt="" width="450px" />
              </div>
            </vs-col>

            <vs-col :w="5" :xs="12" :sm="12">
              <div class="ml-20">
                <h2 class="white">MONEY PRINTING MANIA</h2>

                <p class="lead_text_inf mt-20">
                  The Fed printed 65% of the entire supply of USD in the last 18
                  months. In response the price of Lumber hit 5x and Gasoline 2x
                  and stablecoins have printed exponential charts:
                </p>
                <br /><br />
                <p class="lead_text_inf">
                  Janet Yellen just admitted USD inflation in the month of June
                  2021 alone was 5% and that’s with massaged numbers. How safe
                  is it to hold stablecoins that lozok to be losing half their
                  buying power every six months? It’s time for a legitimate
                  “stablecoin”.
                </p>
              </div>
            </vs-col>
          </vs-row>
        </div>

        <div>
          <div class="d-flex-center mt-70">
            <img
              src="../assets/images/coin.png"
              alt="money"
              class="solution_image"
            />
            <h1 class="lead_head_text2">
              SOLUTION
            </h1>
          </div>
          <hr class="hd_rule" />

          <vs-row class="mt-70">
            <vs-col :w="6" :xs="12" :sm="12">
              <div>
                <div class="solution_head d-flex-center">
                  <span>USDt vs solidUSDT as supply increases </span>
                </div>
                <br />
                <img src="../assets/images/usdt.png" alt="" width="450px" />
              </div>
            </vs-col>

            <vs-col :w="6" :xs="12" :sm="12">
              <div class="ml-20">
                <h2 class="white">
                  SolidUSDT: PURCHASING POWER INCREASES WITH INFLATION
                </h2>
                <p class="lead_text_inf mt-20">
                  With Solid Defi, the Fed can print all they want, it just
                  gives the market more USDt to add to the Solid Bonding curve.
                  Since the Solid Bonding Curve issues SolidUSDT priced at the
                  square root of supply the more the SolidUSDT supply inflates,
                  the greater the purchasing power will be for each SolidUSDT.
                </p>
              </div>
            </vs-col>
          </vs-row>

          <vs-row class="mt-50">
            <vs-col :w="6" :xs="12" :sm="12">
              <div class="solution_txt">
                <p>
                  Buy Price =
                  <span class="white">(3/2*x+s**(3/2))**(2/3)-s</span> = The
                  square root of supply Sell Price =
                  <span class="white"
                    >Integral of x**(½) dx = ⅔*x**(3/2) + c x</span
                  >
                  = The amount in USDt you are sending to the Solid Bonding
                  Curve Contract s = The current supply of solidUSDt
                </p>
              </div>
            </vs-col>

            <vs-col :w="6" :xs="12" :sm="12">
              <div class="ml-20">
                <p class="lead_text_inf mt-20">
                  While the Solid Bonding Curve will eventually accept USDT. We
                  like to support native crypto currency projects so the initial
                  Solid Bonding Curve will accept DAI and mint SolidDAI
                  according to this formula:
                </p>
              </div>
            </vs-col>
          </vs-row>

          <vs-row class="mt-50">
            <vs-col :w="6" :xs="12" :sm="12">
              <div class="mr-20">
                <img
                  src="../assets/images/coin_on_a_curve_02.jpg"
                  alt=""
                  width="450px"
                />
              </div>
            </vs-col>

            <vs-col :w="6" :xs="12" :sm="12">
              <div class="ml-20">
                <h2 class="white">
                  SOLIDDAI REWARDS UP TO 20% OF VALUE OF CRYPTO SHAKEOUT
                </h2>

                <p class="lead_text_inf mt-20">
                  $1 Trillion dollars in market cap evaporated in the massive
                  May 19th 2021 sell off. People lost $300 billion because of a
                  single tweet from Elon Musk. What if there was a market
                  manipulators tax that went to holders? With SolidDAI there is.
                  Up to 20% of massive sell offs go to Solid token holders.
                </p>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>

    <!-- Roadmap -->
    <road-map />
    <Faqs />
    <Community />

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Faqs from './sections/Faqs.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';
import RoadMap from './sections/RoadMap.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Faqs,
    Community,
    Footer,
    RoadMap,
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
