<template>
  <div class="community">
    <div class="wrap">
      <vs-row class="mt-50">
        <vs-col :w="6" :xs="12" :sm="12">
          <div>
            <h2 class="lead_head_text1">
              Join our <br />
              Community
            </h2>
            <p class="lead_text mt-10">
              You can be the first to know about SLD token. <br />
              Don’t miss the opportunity !
            </p>
          </div>
        </vs-col>

        <vs-col :w="6" :xs="12" :sm="12">
          <div class="flex-justify-around-center mt-20">
            <div class="flex-row-center">
              <vs-avatar class="tele_avatar" size="60">
                <img
                  src="../../assets/images/telegram_icon.png"
                  alt="telegram"
                />
              </vs-avatar>

              <p class="mt-40 center p_link">
                <a href=""
                  >Join us on <br />
                  Telegram</a
                >
              </p>
            </div>

            <div class="flex-row-center">
              <vs-avatar size="60" class="twit_avatar">
                <img src="../../assets/images/twitter.png" alt="twitter" />
              </vs-avatar>
              <p class="mt-40 center p_link">
                <a href=""
                  >Follow us on <br />
                  Twitter</a
                >
              </p>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
