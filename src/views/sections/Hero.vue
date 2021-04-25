<template>
  <div>
    <div>
      <vs-row justify="center">
        <vs-col :w="7" :xs="12" :sm="8">
          <div>
            <div class="d-flex-center">
              <vs-button>
                <span class="material-icons mr">
                  picture_as_pdf
                </span>
                <a
                  href="https://docs.google.com/document/d/11LVMZ-hIWchdy7s-YBaUAwuixVS51qnC5ASJW2ocwA8"
                  target="blank"
                  >Whitepaper</a
                >
              </vs-button>
              <vs-button
                href="https://ropsten.etherscan.io/address/0x687422eea2cb73b5d3e242ba5456b782919afc85"
                blank
              >
                View on Etherscan
              </vs-button>
            </div>

            <br />
            <div style="text-align:center;">
              <h2 class="lead_head_text">
                A NEW WAY OF DECENTRALIZED APP WITH BLOCKCHAIN INFRASTRUCTURE.
              </h2>
              <p class="lead_text mt-20">
                The first decentralized Marketplace which makes simplifies and
                standarizes data with blockchain technology. We provides
                user-friendly, efficient and secure crypto solutions and
                utilizing blockchain technology. Network provides access to
                cross chain DeFi services. It efficiently connects and process
                transactions across various types of networks. Solid Protocol is
                a public Blockchain built on the Parity Substrate framework and
                fully compatible with the POLKADOT network.
              </p>
              <div class="d-flex-center">
                <vs-button
                  warn
                  class="mt-20"
                  href="https://t.me/hot_stage"
                  blank
                >
                  <span class="material-icons mr">
                    question_answer
                  </span>
                  Join our Telegram Community
                </vs-button>
              </div>
            </div>
          </div>
        </vs-col>
      </vs-row>

      <vs-row justify="center">
        <vs-col :w="7" :xs="12" :sm="8">
          <span class="flex-align-center insights">
            <span class="material-icons" style="color:#FA52A0;">
              lightbulb
            </span>
            <span>Subscribe</span>
          </span>
          <!-- 
          <div>
            <div>
              <p>
                Enter your email to subscribe to mail list
              </p>
            </div>
          </div> -->
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
