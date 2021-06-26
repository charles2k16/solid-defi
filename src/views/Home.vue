<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="d-flex-center">
        <vs-button class="airdrop_btn" blank to="/airdrop" id="airdrop_btn">
          <b>Get AirDrop</b>
        </vs-button>
      </div>
      <GetSolidHeader />

      <sales-bundle />
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <vs-row class="mt-50">
          <vs-col :w="5" :xs="12" :sm="12">
            <!-- <div class="flex-align-center" v-if="onEthNetwork">
              <h1 class="yellow" v-if="bigBundle !== 'loading'">
                {{ getEthBalance(ethbalance) }} token sold in presale
              </h1>
            </div>

            <div class="flex-align-center" v-else>
              <h1 class="yellow" v-if="ethMaticSmallStock !== 'loading'">
                {{ getMaticBalance(maticbalance) }} tokens sold in presale
              </h1>
            </div> -->

            <div class="flex-align-center" v-if="!isDrizzleInitialized">
              <h1 class="yellow">
                {{ tokenSale }} tokens sold in first presale
              </h1>
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
            <!-- <div v-if="onEthNetwork">
              <div class="progress">
                <div
                  class="progress_token"
                  :style="{ width: `${ethPercentPurchased}%` }"
                >
                  <span>{{ Math.trunc(ethPercentPurchased) }}%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">2.8M Tokens</p>
            </div> -->

            <!-- <div v-else>
              <div class="progress">
                <div
                  class="progress_token"
                  :style="{ width: `${maticPercentPurchased}%` }"
                >
                  <span>{{ Math.trunc(maticPercentPurchased) }}%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">3.2M Tokens</p>
            </div> -->

            <div>
              <div class="progress">
                <div class="progress_token" :style="{ width: `${9.2}%` }">
                  <span>9.2%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">20M Tokens</p>
            </div>
          </vs-col>
        </vs-row>

        <Illustrations />
        <br />
        <Subscribe />
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
import NavBar from '@/components/NavBar';
import GetSolidHeader from './sections/GetSolidHeader.vue';
import Illustrations from './sections/Illustrations.vue';
import BlogSection from './sections/BlogSection.vue';
import Subscribe from './sections/Subscribe.vue';
import AboutSolid from './sections/AboutSolid.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';
import SalesBundle from './sections/SalesBundle.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    GetSolidHeader,
    Illustrations,
    BlogSection,
    Subscribe,
    AboutSolid,
    Community,
    Footer,
    SalesBundle,
  },
  data() {
    return {
      tokenSale: 'Over 1000000',
      confirmTitle: '',
      showConfirmBundle: false,
      percentageOff: 70,
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
};
</script>
