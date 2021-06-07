<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <!-- <GetSolidHeader /> -->

      <sales-bundle />
      <!-- <air-drop-form /> -->
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
        </vs-row>
      -->

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
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
// import AirDropForm from '@/components/AirDropForm.vue';
// import GetSolidHeader from './sections/GetSolidHeader.vue';
import SalesBundle from './sections/SalesBundle.vue';
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
    SalesBundle,
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
      percentageOff: 37,
      active: 0,
      ethBundle: 1,
      maticBundle: 1,
      wBundle: 1,
      title: '',
    };
  },
  methods: {},
};
</script>
