<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="wrap">
        <div class="airdrop_container">
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
              v-model="airdropForm.metamaskAddress"
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
              <span class="air_text" style="color: #fcb420;"
                >Your personal referral link</span
              >
              <span class="material-icons ic" style="color:#fcb420;">
                help
              </span>
            </div>
          </div>

          <vs-tooltip shadow>
            <div class="welcome_btn" @click="copyToClip(reffLink)">
              <p>
                <span>{{ reffLink }}</span>
              </p>
            </div>
            <template #tooltip>
              {{ clipboard }}
            </template>
          </vs-tooltip>

          <div class="content-tooltip-med">
            <!-- <span class="material-icons">
              cancel
            </span> -->
            Please share your referral link to others, so you can
            <span class="earn_more">earn more,</span> ! Please see our
            <a href="https://soliddefi.medium.com/">Medium</a> posts or join our
            <a href="https://t.me/soliddefi">Telegram</a> channel for details.
          </div>

          <div class="mt-50">
            <vs-button
              v-if="!btn_loading"
              class="finish_btn"
              @click="sendReferral"
            >
              <b> Submit</b>
            </vs-button>
            <vs-button v-else :loading="btn_loading" class="loading_btn">
              <b> Loading</b>
            </vs-button>
          </div>

          <div class="flex-justify-evenly-center mt-50">
            <vs-avatar size="60" class="medium_icon">
              <a href="https://soliddefi.medium.com/" target="_blank">
                <img
                  src="../assets/images/medium_icon.png"
                  alt="medium"
                  style="width:25px !important"
                />
              </a>
            </vs-avatar>
            <a href="https://t.me/soliddefi" target="_blank">
              <vs-avatar class="telegram_icon" size="60">
                <img
                  src="../assets/images/telegram2.png"
                  alt="telegram"
                  style="width:28px !important"
                />
              </vs-avatar>
            </a>
          </div>

          <div class="mt-40">
            <p class="air_smalltxt">
              Note: SOLID Token reserves the rights on how the air drop tokens
              will be distributed, if frauds are detected.
            </p>
          </div>
        </div>

        <vs-dialog v-model="airdrop_sent" class="sub_dialog" not-close>
          <template #header>
            <h4 style="color:#731cd8ff">
              Successfully Joined
            </h4>
          </template>
          <div>
            <p>
              Thank you for joining our Referral Rewards Program!
            </p>
          </div>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import referralsApi from '@/api/referrals.js';

export default {
  name: 'AirDrop',
  components: {
    NavBar,
  },
  data() {
    return {
      btn_loading: false,
      airdrop_sent: false,
      reffLink: '',
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
    let reffString = this.getReferralString();
    this.airdropForm.referredBy = this.$route.query.ref;
    this.airdropForm.referralId = reffString;
    this.reffLink = `soliddefi.com/#/airdrop?ref=${reffString}`;
  },
  methods: {
    sendReferral() {
      console.log(this.airdropForm);
      let self = this;
      this.btn_loading = true;

      referralsApi
        .addReferral(this.airdropForm)
        .then(response => {
          console.log(response);
          this.btn_loading = false;
          this.airdrop_sent = true;

          setTimeout(function() {
            self.airdrop_sent = false;
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          this.btn_loading = false;
          this.openNotification(
            'top-center',
            'danger',
            'Error',
            'Invalid email address or email address already used.'
          );
        });
    },
  },
};
</script>
