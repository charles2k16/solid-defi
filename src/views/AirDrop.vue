<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="wrap">
        <div class="airdrop_container" v-if="!airdrop_sent">
          <div class="airdrop_welcome center">
            <h2>Welcome</h2>
          </div>

          <div class="airdrop_form">
            <input
              type="text"
              placeholder="Email"
              class="air_input"
              v-model="airdropForm.email"
            />

            <div class="flex-justify-between-center air_text_div">
              <span class="air_text">Please follow us on Twitter</span>
              <span class="material-icons ic">
                help
              </span>
            </div>
            <input
              type="text"
              placeholder="Twitter username"
              class="air_input"
              v-model="airdropForm.twitter_name"
            />

            <div class="flex-justify-between-center air_text_div">
              <span class="air_text">Please join us on Telegram</span>
              <span class="material-icons-outlined ic">
                help
              </span>
            </div>
            <input
              type="text"
              placeholder="Telegram username"
              class="air_input"
              v-model="airdropForm.telegram_name"
            />

            <div class="flex-justify-between-center air_text_div">
              <span class="air_text">Metamask address</span>
              <span class="material-icons ic">
                help
              </span>
            </div>
            <input
              type="text"
              placeholder="Public address"
              class="air_input"
              v-model="airdropForm.metamask_address"
            />

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
              v-model="airdropForm.referredBy"
            />

            <div class="flex-justify-between-center air_text_div">
              <span class="air_text">Your personal referral link</span>
            </div>
          </div>

          <vs-tooltip shadow>
            <div class="welcome_btn" @click="copyToClip(reffId)">
              <p>
                <span>{{ reffId }}</span>
              </p>
            </div>
            <template #tooltip>
              Copy to clipboard
            </template>
          </vs-tooltip>

          <div class="mt-50">
            <vs-button
              block
              class="finish_btn"
              :loading="btn_loading"
              @click="sendReferral"
            >
              <b> Finish</b>
            </vs-button>
          </div>

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
              NoteL: SOLID Token reserves the rights on how the air drop tokens
              will be distributed, if frauds are detected
            </p>
          </div>
        </div>

        <div class="airdrop_container" v-else>
          <div class="airdrop_welcome center">
            <h2>Thank You</h2>
          </div>

          <div class="mt-30">
            <p class="air_finish_txt">
              Thanks for joining in. You have been added to the Solid
              whitelisted list.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'AirDrop',
  components: {
    NavBar,
  },
  data() {
    return {
      btn_loading: false,
      airdrop_sent: false,
      reffId: '',
      airdropForm: {
        email: '',
        telegram_name: '',
        twitter_name: '',
        metamaskAddress: '',
        referredBy: '',
        referralId: '',
      },
    };
  },
  created() {
    console.log(this.$route.query);
    this.reffId = this.getReferralString();
  },
  methods: {
    sendReferral() {
      console.log(this.airdropForm);
      this.btn_loading = true;
    },
  },
};
</script>
