<template>
  <div>
    <vs-row>
      <vs-col :w="6" :xs="12" :sm="12">
        <div class="mt-120">
          <div class="flex-justify-between-center" id="hd_sm">
            <h1 class="lead_head_text2" style="color: #FCB42A;" id="head_mob">
              SOLID DEFI
            </h1>

            <span class="material-icons icx">
              clear
            </span>

            <img
              src="../../assets/images/polygon.png"
              alt="polygon"
              class="poly_home"
            />
          </div>

          <div id="hide_md">
            <h1 class="lead_head_text2" style="color: #FCB42A;" id="head_mob">
              SOLID DEFI
            </h1>
            <span class="material-icons icx">
              clear
            </span>
            <img
              src="../../assets/images/polygon.png"
              alt="polygon"
              class="poly_home"
            />
          </div>

          <div class="mt-50">
            <p class="lead_head_text2" id="hd_sm">
              The first stablecoin <br />to profit from inflation
            </p>
            <p class="lead_head_text2" id="stba_coin">
              The first stablecoin to profit from inflation
            </p>
          </div>

          <div class="mt-60" style="display:flex;">
            <vs-button
              class="airdrop_btn"
              id="airdrop_btn"
              @click="showComingSoon = true"
            >
              <b>Join Contest</b>
            </vs-button>
            <vs-button class="buy_button_home btn_hover" blank to="/presale">
              <b>BUY NOW!</b>
            </vs-button>
          </div>
        </div>
      </vs-col>
    </vs-row>
    <vs-dialog v-model="showComingSoon" width="420px" class="_dialog">
      <template #header>
        <h4 class="not-margin">Solid Foundry</h4>
      </template>
      <div>
        <h1>Coming Soon</h1>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showComingSoon: false,
    };
  },
};
</script>
