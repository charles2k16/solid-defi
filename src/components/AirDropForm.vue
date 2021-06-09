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
          <span class="material-icons ic">
            help
          </span>
        </div>
        <input type="text" placeholder="Twitter handle" class="air_input" />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Please join us on Telegram</span>
          <span class="material-icons ic">
            help
          </span>
        </div>
        <input type="text" placeholder="Twitter handle" class="air_input" />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Metamask address</span>
          <span class="material-icons ic">
            help
          </span>
        </div>
        <input type="text" placeholder="Public address" class="air_input" />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Who referred you</span>
          <span class="material-icons ic">
            help
          </span>
        </div>
        <input
          type="text"
          placeholder="His/her Referral ID"
          class="air_input"
        />

        <div class="flex-justify-between-center air_text_div">
          <span class="air_text">Your personal referral link</span>
        </div>
      </div>

      <vs-tooltip shadow>
        <div class="welcome_btn">
          <p>
            <span class="refferal">soliddefi.com/airdrop/SLD-14GRFRT</span>
          </p>
        </div>
        <template #tooltip>
          Copy to clipboard
        </template>
      </vs-tooltip>

      <div class="flex-justify-evenly-center mt-50">
        <vs-avatar size="60" class="medium_avatar">
          <a href="https://soliddefi.medium.com/" target="_blank">
            <img
              src="../assets/images/medium_icon.png"
              alt="medium"
              style="width:25px !important"
            />
          </a>
        </vs-avatar>
        <a href="https://t.me/soliddefi" target="_blank">
          <vs-avatar class="tele_avatar" size="60">
            <img
              src="../assets/images/telegram2.png"
              alt="telegram"
              style="width:28px !important"
            />
          </vs-avatar>
        </a>
      </div>

      <div class="mt-50">
        <p class="air_smalltxt">
          NoteL: SOLID Token reserves the rights on how the air drop tokens will
          be distributed, if frauds are detected
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AirDropForm',
};
</script>
