<template>
  <div>
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <vs-row justify="center">
          <vs-col :w="12" :xs="12" :sm="12">
            <div>
              <span class="flex-align-center insights1">
                <span class="material-icons-outlined mr" style="color:#FB12A8;">
                  wb_twilight
                </span>

                <span><b>Learn About us</b></span>
              </span>
              <br />
              <div class="d-flex-center">
                <vs-card class="card_about">
                  <template #title>
                    <h2 style="font-size: 2.1rem;">WHAT IS SOLID PROTOCOL</h2>
                  </template>
                  <template #text>
                    <p style="font-size: 1.1rem;">
                      SOLID PROTOCOL is a high-engagement token platform, where
                      users complete game missions, compete in tournaments and
                      earn prizes for their activity and otther token exchanges.
                    </p>
                    <br />
                    <p style="font-size: 1.1rem;">
                      Our vision is to create an entertainment platform
                      accessible to anyone, connecting gamers and game creators
                      to recognize and reward gaming skill, effort and loyalty.
                    </p>
                  </template>
                </vs-card>
              </div>

              <div class="d-flex-center mt-20">
                <vs-button
                  href="https://ropsten.etherscan.io/address/0x687422eea2cb73b5d3e242ba5456b782919afc85"
                  blank
                  style="font-size: 1.1rem;"
                >
                  View on Etherscan now
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>

    <div class="uniswap">
      <div class="wrap">
        <div class="d-flex">
          <vs-button transparent style="font-size:22px">
            <b>via UNISWAP</b>
          </vs-button>
        </div>
        <br />
        <iframe
          src="https://app.uniswap.org/#/swap?outputCurrency=0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373"
          height="660px"
          width="100%"
          style="
                        border: 0;
                        margin: 0 auto;
                        display: block;
                        border-radius: 10px;
                        max-width: 940px;
                        min-width: 240px;
                      "
          id="myId"
        >
        </iframe>
      </div>
    </div>

    <div class="news">
      <div class="wrap">
        <vs-row>
          <vs-col :w="6" :xs="12" :sm="12">
            <span class="flex-align-center insights1">
              <span class="material-icons mr" style="color:#FB12A8;">
                monetization_on
              </span>
              <span>SP TOKEN (NFTs)</span>
            </span>

            <div class="mt-20">
              <h1 class="lead_head_text1">SOLID PROTOCOL NFTs.</h1>

              <p class="lead_text">
                Solid Protocol is developing a non-fungible token (NFT) system,
                to be integrated with its games platform. These GAMEE NFTs will
                be purchasable and upgradeable using GAMEE Tokens. Interested in
                more details about token allocation and utility?
              </p>
              <p class="lead_text mt-20">
                Interested in more details about token allocation and utility?
              </p>
              <div>
                <vs-button transparent style="font-size:20px">
                  <span class="material-icons mr">
                    forum
                  </span>
                  <b>Join us on Telegram</b>
                </vs-button>
              </div>
            </div>
          </vs-col>
          <vs-col :w="6" :xs="12" :sm="12">
            <img src="../assets/images/game.png" alt="" />
          </vs-col>
        </vs-row>

        <div class="mt-100">
          <span class="flex-align-center insights1">
            <span class="material-icons mr" style="color:#FB12A8;">
              catching_pokemon
            </span>
            <span><b>Lets Look at this</b></span>
          </span>

          <vs-row justify="center" class="mt-20">
            <vs-col :w="12" :xs="12" :sm="12">
              <p class="lead_text-1">
                The total supply of Tokens will be
                <span class="tks">1,100,000,000 </span> tokens, all minted at
                once and will be distributed among 6 main groups or categories.
              </p>
            </vs-col>

            <vs-col :w="12" :xs="12" :sm="12">
              <br /><br />
              <img src="../assets/images/chart5_2.svg" alt="" />
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>

    <div class="subscription">
      <div class="wrap">
        <vs-row>
          <vs-col :w="12" :xs="12" :sm="12">
            <div class="center">
              <h2 class="lead_head_text">
                Subscribe for Updates
              </h2>
              <p class="lead_text mt-10">
                Stay up to date with announcements and be the first to learn
                about new developments.
              </p>
              <div class="d-flex-center mt-20">
                <vs-input v-model="value" placeholder="Name" />
                <vs-button style="height:51px;font-size:18px;">
                  <span class="material-icons mr">
                    email
                  </span>
                  Subscribe
                </vs-button>
              </div>
              <div class="d-flex-center">
                <vs-button transparent style="font-size:20px">
                  <span class="material-icons mr">
                    forum
                  </span>
                  <b>Join us on Telegram</b>
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>

    <div class="news">
      <div class="wrap">
        <span class="flex-align-center insights">
          <span class="material-icons" style="color:#FA52A0;">
            lightbulb
          </span>
          <span>Exciting News & Blog</span>
        </span>
        <p class="lead_text mt-10">
          Solid Protocol is a high-engagement gaming platform, where users
          complete game missions, compete in
        </p>
        <br />
        <vs-card-group>
          <vs-card>
            <template #title>
              <h3>Solid Protocol (SP) to list on MXC Exchange.</h3>
            </template>
            <template #img>
              <img src="../assets/images/nft.png" alt="" />
            </template>
            <template #text>
              <p style="font-size:16px;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  NFTs
                </span>
              </vs-button>
            </template>
          </vs-card>

          <vs-card>
            <template #title>
              <h3>Solid Protocol first sale on UNI SWAP(our take ins).</h3>
            </template>
            <template #img>
              <img src="../assets/images/foto5.png" alt="" />
            </template>
            <template #text>
              <p style="font-size:16px;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  UNISWAP
                </span>
              </vs-button>
            </template>
          </vs-card>

          <vs-card>
            <template #title>
              <h3>We have finally Launched our new protocol.</h3>
            </template>
            <template #img>
              <img src="../assets/images/foto1.png" alt="" />
            </template>
            <template #text>
              <p style="font-size:16px;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  LAUNCH
                </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>

        <vs-button transparent>
          <b>READ ALL POSTS</b>
        </vs-button>
      </div>
    </div>

    <div class="community">
      <div class="wrap">
        <h2>
          Join our Community
        </h2>
      </div>
    </div>

    <div class="footer_container">
      <p>
        © 2021 SOLID PROTOCOL all rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data: () => ({}),
};
</script>
