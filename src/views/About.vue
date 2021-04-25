<template>
  <div>
    <div class="about">
      <vs-row>
        <vs-col :w="6" :xs="12" :sm="8">
          <span class="flex-align-center insights">
            <span class="material-icons" style="color:#FA52A0;">
              lightbulb
            </span>
            <span>About us & Project</span>
          </span>

          <div>
            <p class="lead_text mt-20">
              The first decentralized Marketplace which makes simplifies and
              standarizes data with blockchain technology. We provides
              user-friendly, efficient and secure crypto solutions and utilizing
              blockchain technology. Network provides access to cross chain DeFi
              services. It efficiently connects and process transactions across
              various types of networks. Solid Protocol is a public Blockchain
              built on the Parity Substrate framework and fully compatible with
              the POLKADOT network.
            </p>
          </div>
        </vs-col>

        <vs-col :w="6" :xs="12" :sm="8">
          <div style="text-align:center;" class="mt-20">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Cwgw6dqMY6k?start=16"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :w="12" :xs="12" :sm="12">
          <div>
            <img
              src="../assets/images/framework.png"
              alt="frame"
              width="200px;"
              style="margin-right:20px;"
            />
            <img
              src="../assets/images/variant.png"
              alt="frame"
              width="200px;"
            />
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
