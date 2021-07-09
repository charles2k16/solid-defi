<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="wrap">
        <vs-row class="mt-70" justify-between>
          <vs-col :w="7" :xs="6" :sm="6">
            <div>
              <span class="insights">WELCOME TO SOLID DEFI </span>

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
                <vs-button blank>
                  <b>Learn more</b>
                </vs-button>
                <vs-button class="buy_button" blank>
                  <b>BUY NOW</b>
                </vs-button>
              </div>
            </div>
          </vs-col>

          <vs-col :w="5" :xs="6" :sm="6">
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
      </div>
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <vs-row class="mt-50">
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
        style="z-index: 2; position: relative; margin-top: -250px"
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
import NavBar from "@/components/NavBar";
import Illustrations from "./sections/Illustrations.vue";
import BlogSection from "./sections/BlogSection.vue";
import Subscribe from "./sections/Subscribe.vue";
import AboutSolid from "./sections/AboutSolid.vue";
import Community from "./sections/Community.vue";
import Footer from "./sections/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Illustrations,
    BlogSection,
    Subscribe,
    AboutSolid,
    Community,
    Footer,
  },
  data() {
    return {
      tokenSale: "Over 1000000",
      confirmTitle: "",
      active: 0,
    };
  },
};
</script>
