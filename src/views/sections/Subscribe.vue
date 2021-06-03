<template>
  <vs-row class="mt-100">
    <vs-col :w="6" :xs="12" :sm="12">
      <span class="insights">
        SOLID TOKEN
      </span>

      <div class="mt-20">
        <h1 class="lead_head_text1">
          Fight inflation, <br />
          Earn Rewards!
        </h1>

        <p class="lead_text mt-30">
          With inflation getting hyper and markets quick to panic sell, Solid
          <br />
          Solid Defi is creating tokens that protect holders from both.

          <a href="https://soliddefi.medium.com/" target="_blank"
            >Read more on Medium.</a
          >
          and Leave us your email here to be the first one to get new
          information.
        </p>

        <div class="d-flex mt-30">
          <vs-input v-model="email" placeholder="Enter your email" />
          <vs-button class="def_button" style="margin-left:30px">
            <b>SUBSCRIBE</b>
          </vs-button>
        </div>

        <div class="mt-30">
          <vs-button
            style="font-size:18px"
            blank
            href="https://t.me/soliddefi"
            transparent
          >
            <img
              src="../../assets/images/telegram2.png"
              alt="telegram"
              width="23px"
              class="mr-10"
            />
            <b style="color:#731cd8;">Join us on Telegram</b>
          </vs-button>
          <p class="small_text1">
            For news, early access & special prizes
          </p>
          <h2 class="mt-30 small_text_primary">
            <a
              href="https://solid-defi.gitbook.io/solid-whitepaper/"
              target="_blank"
              class="none"
            >
              Learn more in Solid Protocol Whitepaper</a
            >
          </h2>
        </div>
      </div>
    </vs-col>
    <vs-col :w="6" :xs="12" :sm="12">
      <img
        src="../../assets/images/sld_promo_pic.png"
        alt="promo"
        width="540px"
      />
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
