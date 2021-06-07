<template>
  <div class="wrap">
    <div class="airdrop_container">
      <div class="airdrop_welcome center">
        <h2>Welcome</h2>
      </div>

      <div class="airdrop_form">
        <input type="text" placeholder="Email" class="air_input" />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Please follow us on Twitter</span>
          <span class="material-icons">
            help
          </span>
        </div>
        <input type="text" placeholder="Twitter handle" class="air_input" />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Please join us on Telegram</span>
          <span class="material-icons">
            help
          </span>
        </div>
        <input type="text" placeholder="Twitter handle" class="air_input" />
      </div>

      <!-- <vs-tooltip shadow>
        <div class="welcome_btn">
          <p class="flex-justify-between-center">
            <span class="refferal">Your refferal ID: 14GRFRT</span>
            <span class="material-icons">
              help
            </span>
          </p>
        </div>
        <template #tooltip>
          This is a beautiful button
        </template>
      </vs-tooltip> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AirDropForm',
};
</script>
