<template>
  <div>
    <!-- token sold -->
    <vs-row class="mt-50">
      <vs-col :w="5" :xs="10" :sm="10">
        <h1 class="yellow">
          70M token sold in presale
        </h1>
      </vs-col>
      <vs-col :w="2" :xs="2" :sm="2">
        <div>
          <div class="rule"></div>
        </div>
      </vs-col>
      <vs-col :w="5" :xs="12" :sm="12">
        <div class="progress">
          <div class="progress_div"></div>
        </div>

        <h4 class="mt-20 p_tokens">100M TOKEN</h4>
      </vs-col>
    </vs-row>

    <!-- timer for tokens -->
    <vs-row class="mt-50">
      <vs-col :w="7" :xs="12" :sm="12">
        <div class="flex-align-center">
          <h1 class="time_left">Time Left</h1>
          <flip-countdown
            deadline="2021-06-11 00:00:00"
            class="timerr"
          ></flip-countdown>
        </div>
      </vs-col>
      <vs-col :w="5" :xs="12" :sm="12">
        <div class="progress">
          <div class="progress_time"></div>
        </div>
        <h4 class="mt-20 p_tokens">5 days</h4>
      </vs-col>
    </vs-row>

    <vs-row class="mt-100">
      <vs-col :w="12" :xs="12" :sm="12">
        <div class="gif_anime"></div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'Illustrations',
  components: {
    FlipCountdown,
  },
};
</script>
