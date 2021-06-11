<template>
  <div>
    <!-- timer for tokens -->
    <!-- <vs-row class="mt-50">
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
    </vs-row> -->

    <vs-row class="mt-70">
      <vs-col :w="12" :xs="12" :sm="12">
        <div>
          <video
            src="../../assets/video/animation1.mp4"
            class="gif_anime"
            autoplay
            loop
            controls
          ></video>
        </div>
      </vs-col>
    </vs-row>
    <br />
    <vs-button
      class="small_text_primary"
      style="font-size:14px;"
      blank
      href="https://soliddefi.gitbook.io/solid-whitepaper/"
    >
      <b>READ THE WHITEPAPER</b>
      <span class="material-icons-outlined ml-10">
        arrow_right_alt
      </span>
    </vs-button>
  </div>
</template>

<script>
// import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'Illustrations',
  // components: {
  //   FlipCountdown,
  // },
};
</script>
