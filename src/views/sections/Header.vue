<template>
  <vs-row>
    <vs-col :w="6" :xs="12" :sm="12">
      <div class="mt-120">
        <div class="flex-justify-between-center">
          <h1 class="lead_head_text2" style="color: #FCB42A;">
            SOLID DEFI
          </h1>

          <span class="material-icons icx">
            clear
          </span>

          <img
            src="../../assets/images/polygon.png"
            alt="polygon"
            width="180px"
          />
        </div>

        <div class="mt-50">
          <p class="lead_head_text2">
            The first stablecoin <br />to profit from inflation
          </p>
        </div>

        <div class="d-flex mt-60">
          <!-- <vs-button gradient color="rgb(6, 30, 65)" blank to="/presale">
            <b>Learn More</b>
          </vs-button> -->
          <!-- <vs-button class="airdrop_btn" blank to="/presale">
            <b>BUY NOW!</b>
          </vs-button> -->
          <vs-button class="buy_button_home btn_hover" blank to="/presale">
            <b>BUY NOW!</b>
          </vs-button>
        </div>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'Header',
};
</script>
