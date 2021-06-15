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
            <p class="lead_text mt-15">
              Be the first to know about SOLID token news.

              <br />
              Don’t miss the opportunity to join the community!
            </p>
          </div>
        </vs-col>

        <vs-col :w="6" :xs="12" :sm="12">
          <div class="flex-justify-around-center mt-20">
            <div class="flex-row-center comm_icons">
              <vs-avatar size="60" class="medium_avatar">
                <a href="https://soliddefi.medium.com/" target="_blank">
                  <img
                    src="../../assets/images/medium_icon.png"
                    alt="medium"
                    style="width:25px !important"
                  />
                </a>
              </vs-avatar>

              <p class="mt-30 center p_link">
                <a href="https://soliddefi.medium.com/" target="_blank">
                  Read more on <br />
                  Medium
                </a>
              </p>
            </div>

            <div class="flex-row-center comm_icons">
              <a href="https://t.me/soliddefi" target="_blank">
                <vs-avatar class="tele_avatar" size="60">
                  <img
                    src="../../assets/images/telegram2.png"
                    alt="telegram"
                    style="width:28px !important"
                  />
                </vs-avatar>
              </a>
              <p class="mt-30 center p_link">
                <a href="https://t.me/soliddefi" target="_blank">
                  Join us on <br />
                  Telegram</a
                >
              </p>
            </div>

            <div class="flex-row-center comm_icons">
              <a href="https://twitter.com/soliddefi" target="_blank">
                <vs-avatar size="60" class="twit_avatar">
                  <img src="../../assets/images/twitter.png" alt="twitter" />
                </vs-avatar>
              </a>
              <p class="mt-30 center p_link">
                <a href="https://twitter.com/soliddefi" target="_blank">
                  Follow us on <br />
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
