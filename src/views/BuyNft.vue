<template>
  <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <br /><br />
        <vs-row class="mt-20">
          <vs-col :w="7" :xs="12" :sm="12">
            <div class="nft_img">
              <img
                src="../assets/images/sld_promo_pic_02.png"
                alt="promo"
                width="470px"
              />
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="nft_info">
              <h3>#Chasing Pockmon Ghost</h3>
              <p class="created"><small>created by:</small> Ghuinghss fhhdd</p>
              <div class="descrip mt-20">
                <p class="lead_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  rec chasing pockmon ghosts running
                </p>
              </div>

              <div class="info mt-20">
                <div class="flex-justify-between-center mt-10">
                  <li>Contract address</li>
                  <span style="color:#5772ec;"><b>0x495f...7b5e</b></span>
                </div>

                <div class="flex-justify-between-center mt-10">
                  <li>Token ID</li>
                  <span>1740429690441376..</span>
                </div>

                <div class="flex-justify-between-center mt-10">
                  <li>Metadata</li>
                  <span>Editable</span>
                </div>

                <div class="flex-justify-between-center mt-10">
                  <li>BlockChain</li>
                  <span style="color:#5772ec;"><b>Etheruem</b></span>
                </div>

                <div class="flex-justify-between-center mt-10">
                  <li>Current Price</li>
                  <span style="color:#5772ec;"><b>0.15 ETH</b></span>
                </div>
              </div>

              <div class="nft_buy mt-30">
                <vs-button class="buy_nft">
                  View on OpenSea
                </vs-button>
              </div>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'BuyNft',
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>
