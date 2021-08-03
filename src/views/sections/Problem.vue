<template>
  <div>
    <div class="d-flex-center">
      <img
        src="../../assets/images/cash_print_mach.png"
        alt="money"
        class="problem_image"
      />
      <h1 class="lead_head_text2">
        PROBLEM
      </h1>
    </div>
    <br />
    <hr class="hd_rule" />

    <vs-row class="mt-70">
      <vs-col :w="7" :xs="12" :sm="12">
        <div class="prob_bg">
          <div class="dai_box1">
            <div class="prob_box arr-d flex-row-center">
              <div class="d-flex-center arr">
                <span class="material-icons-round sol_i">
                  arrow_upward
                </span>
                <span class="sol_fig">96%</span>
              </div>

              <span class="sl_txt">LOST IN VALUE</span>
            </div>
          </div>
        </div>
      </vs-col>

      <vs-col :w="5" :xs="12" :sm="12">
        <div class="ml-20 problem_right">
          <h2 class="white">USDT ≠ STABLECOIN</h2>
          <p class="lead_text_inf mt-20">
            It’s ironic that a token pegged 1:1 to USD should be called a
            “stablecoin”. Nothing about this USD chart implies stability. Since
            its inception, the dollar has lost over 96% of its value.
            <b
              >The only sure thing about the dollar is that it’s purchasing
              power will continue to decrease.</b
            >
          </p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-50">
      <vs-col :w="7" :xs="12" :sm="12">
        <div class="mr-20 prob2_bg">
          <!-- <img src="../../assets/images/rew.png" alt="" width="450px" /> -->
          <div class="inflation_boxes">
            <div class="prob_box flex-row-center">
              <div class="d-flex-center arr">
                <span class="material-icons-round sol_i">
                  arrow_upward
                </span>
                <span class="sol_fig">65%</span>
              </div>

              <span class="sl_txt">INCREASE IN MONEY SUPPLY</span>
            </div>

            <div class="prob_box flex-row-center mt-15">
              <div class="d-flex-center arr">
                <span class="material-icons-round sol_i">
                  arrow_upward
                </span>
                <span class="sol_fig">5X</span>
              </div>

              <span class="sl_txt">PRICE OF LUMBER</span>
            </div>

            <div class="prob_box flex-row-center mt-15">
              <div class="d-flex-center arr">
                <span class="material-icons-round sol_i">
                  arrow_upward
                </span>
                <span class="sol_fig">2X</span>
              </div>

              <span class="sl_txt">PRICE OF GASOLINE</span>
            </div>
          </div>
        </div>
      </vs-col>

      <vs-col :w="5" :xs="12" :sm="12">
        <div class="ml-20 problem_right2">
          <h2 class="white">MONEY PRINTING MANIA</h2>

          <p class="lead_text_inf mt-20">
            The Fed printed 65% of the entire supply of USD in the last 18
            months. In response, the price of Lumber hit 5x, Gasoline 2x and
            stablecoins printed exponential charts.
          </p>
          <br /><br />
          <p class="lead_text_inf">
            Janet Yellen just admitted USD inflation in the month of June 2021
            alone was 5% and that’s with massaged numbers. How safe is it to
            hold stablecoins that look to be losing half their buying power
            every six months? It’s time for a legitimate “stablecoin”.
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Problem',
};
</script>

<style lang="scss" scoped>
.inflation_boxes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 60px;
}
.dai_box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-left: 190px;

  .arr-d {
    z-index: 2;
    position: relative;

    ::after {
      content: ' ';
      position: absolute;
      left: 42%;
      bottom: -15px;
      border-top: 15px solid #191a32;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
  }
}
.prob_bg {
  height: 250px;
  background-image: url('../../assets/images/usd_power.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.prob2_bg {
  height: 358px;
  background-image: url('../../assets/images/stableCoin-Inflation.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.problem_image {
  width: 180px;
  margin-right: 70px;
}
.prob_box {
  height: 110px;
  width: 180px;
  // background: #0f121e;
  background: linear-gradient(180deg, #150f27ff 39%, #191a32);
  border-radius: 13px;
  padding: 10px;
  color: rgb(186, 206, 245);

  .sl_txt {
    margin-top: 5px;
    font-size: 15px;
    text-align: center;
    line-height: 21px;
  }
}
.arr {
  .sol_i {
    font-weight: bold;
    font-size: 31px;
    margin-right: 5px;
  }
  .sol_fig {
    font-size: 31px;
    font-weight: 500;
  }
}
</style>
