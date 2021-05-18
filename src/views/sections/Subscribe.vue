<template>
  <vs-row class="mt-100">
    <vs-col :w="7" :xs="12" :sm="12">
      <span class="insights">
        SLD TOKEN
      </span>

      <div class="mt-20">
        <h1 class="lead_head_text1">
          Fight inflation, <br />
          Earn rewards!
        </h1>

        <p class="lead_text mt-20">
          The SLD Token. A fungible ERC-20 utility token built on Ethereum.
          <br />
          Leave us your email here to be the first one to get new information.
        </p>

        <div class="d-flex mt-30">
          <vs-input v-model="email" placeholder="Enter your email" />
          <vs-button class="sub_button">
            <b>SUBSCRIBE</b>
          </vs-button>
        </div>

        <div class="mt-30">
          <vs-button transparent style="font-size:18px">
            <img
              src="../../assets/images/telegram2.png"
              alt="telegram"
              width="23px"
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
      <div class="promo_div2"></div>
      <!-- <img src="../assets/images/game.png" alt="" /> -->
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      email: '',
    };
  },
};
</script>
