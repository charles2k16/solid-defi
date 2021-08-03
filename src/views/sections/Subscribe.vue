<template>
  <div style="padding-bottom: 350px;">
    <vs-row class="mt-100">
      <vs-col :w="6" :xs="12" :sm="12">
        <span class="insights" style="color: #FCB42A;">
          SOLID TOKEN
        </span>

        <div class="mt-20">
          <h1 class="lead_head_text1">
            Fight inflation, <br />
            Earn Rewards!
          </h1>

          <p class="lead_text mt-30" id="sub-text">
            With inflation getting hyper and markets quick to panic sell, <br />
            Solid Defi is creating tokens that protect holders from both. <br />
            <a
              href="https://soliddefi.medium.com/"
              target="_blank"
              class="a_links"
              >Read more on Medium.</a
            >
            and Leave us your email here to be <br />
            the first one to get new information.
          </p>

          <p class="lead_text-mob mt-30">
            With inflation getting hyper and markets quick to panic sell, Solid
            Defi is creating tokens that protect holders from both.
            <a
              href="https://soliddefi.medium.com/"
              target="_blank"
              class="a_links"
              >Read more on Medium.</a
            >
            and Leave us your email here to be <br />
            the first one to get new information.
          </p>

          <div class="mt-30">
            <mailchimp-subscribe
              url="https://soliddefi.us6.list-manage.com/subscribe/post-json"
              user-id="9ef822000faa9c1b124d03058"
              list-id="ec6d9e9063"
              @error="onError"
              @success="onSuccess"
            >
              <template
                v-slot="{ subscribe, setEmail, error, success, loading }"
              >
                <form @submit.prevent="subscribe">
                  <div class="d-flex">
                    <input
                      type="email"
                      @input="setEmail($event.target.value)"
                      class="sub_input"
                      placeholder="Email"
                    />
                    <button
                      v-if="!loading"
                      class="vs-button def_button btn_hover vs-button--null vs-button--size-null vs-button--primary vs-button--default"
                      id="def_def"
                      type="submit"
                    >
                      <div class="vs-button__content">
                        <b>SUBSCRIBE</b>
                      </div>
                    </button>
                    <vs-button
                      v-else
                      :loading="loading"
                      class="loading_btn"
                      id="def_def"
                    >
                      <b> Loading</b>
                    </vs-button>
                  </div>
                  <div v-if="error" class="sub_error">
                    {{ subscribeErrorResponse(error) }}
                  </div>

                  <div v-if="success" class="sub_success">
                    You have successfully subscribed to the Solid Defi community
                  </div>
                </form>
              </template>
            </mailchimp-subscribe>
          </div>
          <div>
            <vs-button
              class="small_text_primary"
              style="font-size:18px;"
              blank
              href="https://t.me/soliddefi"
            >
              <img
                src="../../assets/images/telegram2.png"
                alt="telegram"
                width="23px"
                class="mr-10"
              />
              <b>Join us on Telegram</b>
            </vs-button>
            <p class="small_text1">
              For news, early access & special prizes
            </p>
            <vs-button
              id="learn_btn"
              class="small_text_primary"
              blank
              href="https://soliddefi.gitbook.io/solid-whitepaper/"
            >
              <b>Learn more in Solid Protocol Whitepaper</b>
            </vs-button>
          </div>
        </div>
      </vs-col>
      <vs-col :w="6" :xs="12" :sm="12">
        <img
          src="../../assets/images/sld_promo_pic.png"
          alt="promo"
          class="promo_ghost_pic"
        />
      </vs-col>
    </vs-row>
    <vs-dialog v-model="sub_success" class="sub_dialog" not-close>
      <template #header>
        <h4 style="color:#731cd8ff">
          Successfully subscribed
        </h4>
      </template>
      <div>
        <p>
          You have successfully subscribed to the Solid Defi community.
        </p>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe';

export default {
  name: 'Subscribe',
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {
      sub_success: false,
    };
  },
  methods: {
    onError() {
      console.log('errrroorrrrrrrr is lit');
    },
    onSuccess() {
      let self = this;
      this.sub_success = true;

      setTimeout(function() {
        self.sub_success = false;
      }, 3000);
    },
  },
};
</script>
