<template>
  <div>
    <div class="d-flex-center">
      <img
        src="../../assets/images/money_printing.png"
        alt="money"
        class="problem_image"
      />
      <h1 class="lead_head_text2">
        PROBLEM
      </h1>
    </div>
    <hr class="hd_rule" />

    <vs-row class="mt-70">
      <vs-col :w="7" :xs="12" :sm="12">
        <div>
          <img src="../../assets/images/raw2.png" alt="" width="450px" />
        </div>
      </vs-col>

      <vs-col :w="5" :xs="12" :sm="12">
        <div class="ml-20">
          <h2 class="white">USDT ≠ STABLECOIN</h2>
          <p class="lead_text_inf mt-20">
            It’s ironic that a token pegged 1:1 to USD should be called a
            “stablecoin”. Nothing about this USD chart implies stability. Since
            its inception, the dollar has lost over 96% of its value. The only
            sure thing about the dollar is that it’s purchasing power will
            continue to decrease.
          </p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-50">
      <vs-col :w="7" :xs="12" :sm="12">
        <div class="mr-20">
          <img src="../../assets/images/rew.png" alt="" width="450px" />
        </div>
      </vs-col>

      <vs-col :w="5" :xs="12" :sm="12">
        <div class="ml-20">
          <h2 class="white">MONEY PRINTING MANIA</h2>

          <p class="lead_text_inf mt-20">
            The Fed printed 65% of the entire supply of USD in the last 18
            months. In response the price of Lumber hit 5x and Gasoline 2x and
            stablecoins have printed exponential charts:
          </p>
          <br /><br />
          <p class="lead_text_inf">
            Janet Yellen just admitted USD inflation in the month of June 2021
            alone was 5% and that’s with massaged numbers. How safe is it to
            hold stablecoins that lozok to be losing half their buying power
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
