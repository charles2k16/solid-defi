<template>
  <div>
    <div class="wrap_bundle">
      <div class="mt-50">
        <vs-row class="mt-20">
          <vs-col :w="4" :xs="12" :sm="12">
            <img
              src="../../assets/images/solid_bundle_promo.png"
              alt="log"
              class="solid_bundle_promo"
            />
          </vs-col>
          <vs-col :w="8" :xs="12" :sm="12">
            <div class="bundle_container">
              <div id="overlay" v-show="showOverlay">
                <!-- <div @click="closeOverlay" class="blocker"></div> -->
                <div>
                  <!-- <span
                    class="material-icons overlay_cancel"
                    @click="closeOverlay"
                  >
                    cancel
                  </span> -->
                  <div class="overlay_div">
                    <span class="yellow_bar"></span>
                    <div class="overlay_div2">
                      <div class="center">
                        <h1>COUNTDOWN TO</h1>

                        <h2>
                          COMMUNITY PRESALE! <br />
                          ROUND 2
                        </h2>

                        <h3>JUNE 29 2021 5pm UTC</h3>
                        <!-- <span class="second_presale mt-10 d-block"
                          >(Second Presale)</span
                        > -->
                      </div>
                      <br /><br />
                      <div>
                        <flip-countdown
                          deadline="2021-06-29 08:00:00"
                          class="timerr"
                        ></flip-countdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'SalesBundle',
  components: {
    FlipCountdown,
  },
  data() {
    return {
      showOverlay: true,
      tokenSale: 0,
      percentageOff: 70,
      ethBundle: 1,
      maticBundle: 1,
      wBundle: 1,
      title: '',
      chainNetwork: 'null',
    };
  },
  methods: {
    openOverlay(net) {
      this.chainNetwork = net;
      let eb = document.getElementById('eth');
      let wb = document.getElementById('wEth');
      let mb = document.getElementById('matic');

      if (net == 'eth') eb.style.display = 'none';
      else if (net == 'weth') wb.style.display = 'none';
      else if (net == 'matic') mb.style.display = 'none';

      this.showOverlay = true;
    },
    closeOverlay() {
      let eb = document.getElementById('eth');
      let wb = document.getElementById('wEth');
      let mb = document.getElementById('matic');

      if (this.chainNetwork == 'eth') eb.style.display = 'block';
      else if (this.chainNetwork == 'weth') wb.style.display = 'block';
      else if (this.chainNetwork == 'matic') mb.style.display = 'block';

      this.showOverlay = false;
    },
    changeBundle(r) {
      console.log(r);
      let bb = r;
      this.percentageOff = bb == 1 ? 60 : 70;
      this.addAnimate();
    },
    setActiveItem() {
      this.$refs.carouseleth.setActiveItem('bigBundle');
      this.$refs.carouselweth.setActiveItem('bigBundle');
      this.$refs.carouselmatic.setActiveItem('bigBundle');
    },
    openTab(evt, cityName) {
      this.setActiveItem();
      this.percentageOff = 70;

      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
        tablinks[i].classList.add('opacity');
      }
      document.getElementById(cityName).style.display = 'block';
      evt.currentTarget.className += ' active';
      evt.currentTarget.classList.remove('opacity');
    },
  },
};
</script>
