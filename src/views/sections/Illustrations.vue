<template>
  <div>
    <!-- token sold -->
    <vs-row class="mt-50">
      <vs-col :w="5" :xs="10" :sm="10">
        <div class="flex-align-center">
          <h1 class="yellow">{{ getBalance }} token sold in presale</h1>
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
        <div>
          <div class="progress">
            <div class="progress_div"></div>
          </div>

          <p class="mt-20 p_tokens">30M Tokens</p>
        </div>
      </vs-col>
    </vs-row>

    <!-- timer for tokens -->
    <vs-row class="mt-50">
      <vs-col :w="6" :xs="12" :sm="12">
        <div class="flex-align-center">
          <h1 class="time_left">Time Left</h1>
          <flip-countdown
            deadline="2021-06-11 00:00:00"
            class="timerr"
          ></flip-countdown>
        </div>
      </vs-col>
      <vs-col :w="1" :xs="2" :sm="2">
        <div style="text-align:center;margin-left:-40px;padding-top:15px">
          <div class="green_rule"></div>
        </div>
      </vs-col>
      <vs-col :w="5" :xs="12" :sm="12">
        <div style="maring-top:50px;padding-top:15px">
          <div class="progress">
            <div class="progress_time"></div>
          </div>
          <p class="mt-20 p_tokens">5 days</p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-70">
      <vs-col :w="12" :xs="12" :sm="12">
        <div>
          <video
            src="../../assets/video/animation.mp4"
            width="100%"
            class="gif_anime"
            autoplay
            loop
          ></video>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';
import { mapGetters } from 'vuex';

// const argsBalanceOf = {
//   contractName: 'Erc20',
//   method: 'totalSupply',
//   methodArgs: '',
// };

export default {
  name: 'Illustrations',
  components: {
    FlipCountdown,
  },
  // created() {
  //   this.$store.dispatch('drizzle/REGISTER_CONTRACT', argsBalanceOf);
  // },
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('contracts', ['contractInstances', 'getContractData']),

    // getBalance() {
    //   return this.getContractData({
    //     contract: argsBalanceOf.contractName,
    //     method: argsBalanceOf.method,
    //   });
    // },

    balanceOf() {
      let erc20Address = '0x0F26BE4f5A74d6FAe6A45af0EAf1CB97AE8Cd0bA';
      let balance = this.drizzleInstance.contracts['Erc20'].methods[
        'balanceOf'
      ].cacheCall(erc20Address);

      let value = this.contractInstances.Erc20.balanceOf[balance].value;
      let fvalue = typeof value !== 'undefined' ? value : 'value';

      return fvalue;
    },
  },
};
</script>
