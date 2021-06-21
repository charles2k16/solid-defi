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
                src="../assets/images/sld_promo_pic.png"
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
                  rec chasing pockmon ghosts running. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dicta rec chasing pockmon ghosts
                  running.
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

        <div class="mt-50">
          <div>
            <h3 class="title">Available on OpenSea</h3>
          </div>

          <vs-row class="mt-20">
            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer">
                  <img src="../assets/images/nfts/unnamed4.gif" alt="alt" />
                </div>
                <div class="nft_details">
                  <h4>#Walking Robot from Pacman</h4>
                  <div class="d-flex in">
                    <vs-avatar size="18">
                      <img src="../assets/images/eth.png" alt="eth" />
                    </vs-avatar>
                    <span class="amt_eth">0.234</span>
                  </div>
                  <span class="d-block in">Etheruem</span>
                </div>
                <div class="mt-30 nft_btn">
                  <vs-button block shadow success>
                    <b>Buy / Bid </b>
                  </vs-button>
                </div>
              </div>
            </vs-col>

            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer">
                  <img src="../assets/images/nfts/unnamed.gif" alt="alt" />
                </div>
                <div class="nft_details">
                  <h4>#Walking Robot from Pacman</h4>
                  <div class="d-flex in">
                    <vs-avatar size="18">
                      <img src="../assets/images/eth.png" alt="eth" />
                    </vs-avatar>
                    <span class="amt_eth">0.234</span>
                  </div>
                  <span class="d-block in">Etheruem</span>
                </div>
                <div class="mt-30 nft_btn">
                  <vs-button block shadow success>
                    <b>Buy / Bid </b>
                  </vs-button>
                </div>
              </div>
            </vs-col>

            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer">
                  <img src="../assets/images/nfts/unnamed3.png" alt="alt" />
                </div>
                <div class="nft_details">
                  <h4>Walking Robot from Pacman</h4>
                  <div class="d-flex in">
                    <vs-avatar size="18">
                      <img src="../assets/images/eth.png" alt="eth" />
                    </vs-avatar>
                    <span class="amt_eth">0.234</span>
                  </div>
                  <span class="d-block in">Etheruem</span>
                </div>
                <div class="mt-30 nft_btn">
                  <vs-button block shadow success>
                    <b>Buy / Bid </b>
                  </vs-button>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>

        <div class="mt-50">
          <div>
            <h3 class="title">Available on Rarible</h3>
          </div>

          <vs-row class="mt-20">
            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer">
                  <img src="../assets/images/nfts/unnamed2.jpg" alt="alt" />
                </div>
                <div class="nft_details">
                  <h4>Walking Robot from Pacman</h4>
                  <span class="d-block">0.234</span>
                  <span class="d-block">Etheruem</span>
                </div>
                <div class="mt-30">
                  <vs-button class="buy_nft">
                    Buy / Bid
                  </vs-button>
                </div>
              </div>
            </vs-col>

            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer"></div>
                <div class="nft_details">
                  <h4>Walking Robot from Pacman</h4>
                  <ul>
                    <li>0.234</li>
                    <li>Etheruem</li>
                  </ul>
                </div>
                <div class="mt-30">
                  <vs-button class="buy_nft">
                    Buy / Bid
                  </vs-button>
                </div>
              </div>
            </vs-col>

            <vs-col :w="4" :xs="6" :sm="6">
              <div class="nft_container">
                <div class="nft_viewer"></div>
                <div class="nft_details">
                  <h4>Walking Robot from Pacman</h4>
                  <ul>
                    <li>0.234</li>
                    <li>Etheruem</li>
                  </ul>
                </div>
                <div class="mt-30">
                  <vs-button class="buy_nft">
                    Buy / Bid
                  </vs-button>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>
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

<style scoped>
.title {
  font-size: 20px;
  color: rgb(215, 227, 245);
}
.nft_container {
  border: 1px solid rgb(41, 42, 82);
  border-radius: 5px;
  width: 280px;
  padding: 10px;
}
.nft_viewer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nft_viewer img {
  height: 260px;
  width: auto;
}
.nft_details {
  margin-top: 15px;
  color: rgb(231, 237, 245);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.nft_details h4 {
  font-size: 14px;
}
.nft_details .in {
  margin-top: 5px;
}
.amt_eth {
  margin-left: 5px;
}
.nft_btn {
  margin-right: 10px;
}
</style>
