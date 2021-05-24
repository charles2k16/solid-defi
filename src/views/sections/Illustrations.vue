<template>
  <div>
    <!-- token sold -->
    <vs-row class="mt-50">
      <vs-col :w="5" :xs="10" :sm="10">
        <div class="flex-align-center">
          <h1 class="yellow">
            70M token sold in presale
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
        <div>
          <div class="progress">
            <div class="progress_div"></div>
          </div>

          <p class="mt-20 p_tokens">{{ balanceOf }} Tokens</p>
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
        <div class="gif_anime"></div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';
import { mapGetters } from 'vuex';

export default {
  name: 'Illustrations',
  components: {
    FlipCountdown,
  },
  computed: {
    ...mapGetters('contracts', ['contractInstances']),

    balanceOf() {
      let erc20 = '0xc43C2eB8DaC6394ab0Bb4BFC66fEBd351c59FFB2';
      let balance = this.drizzleInstance.contracts['Erc20'].methods[
        'totalSupply'
      ].cacheCall(erc20);

      console.log(balance);

      // let value = this.contractInstances.Erc20.totalSupply[balance].value;
      // console.log(value);

      return balance;
    },
  },
};
</script>
