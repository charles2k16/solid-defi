<template>
  <div>
    <!-- timer for tokens -->
    <!-- <vs-row class="mt-50 ml-5">
      <vs-col :w="6" :xs="12" :sm="12">
        <div class="d-flex">
          <div>
            <h2 class="time_left-2">
              Time Left
            </h2>
          </div>
          <flip-countdown
            deadline="2021-07-13 12:00:00"
            class="timerr"
          ></flip-countdown>
        </div>
      </vs-col>
      <vs-col :w="1" :xs="2" :sm="2">
        <div style="text-align:center;margin-left:-40px;">
          <div class="green_rule"></div>
        </div>
      </vs-col>
      <vs-col :w="5" :xs="12" :sm="12">
        <div class="progress">
          <div class="progress_time"></div>
        </div>
        <p class="mt-20 p_tokens">14 days</p>
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
      style="font-size:14px;color:#332dc5 !important;"
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
