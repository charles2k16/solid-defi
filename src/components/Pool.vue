<template>
  <div class="mt-100" style="background:#292A37;">
    <div>
      <div class="flex-justify-between">
        <div class="linegrapgh">
          <div class="d-flex">
            <vs-button transparent warn @click="showlineChart">
              Today
            </vs-button>
            <vs-button transparent warn @click="showBarChart">
              Month
            </vs-button>
          </div>

          <LineChart
            :chartData="lineChartData"
            v-if="loaded"
            v-loading="loaded"
          />

          <BarChart
            :chartData="chartData"
            v-if="barLoaded"
            v-loading="barLoaded"
          />
        </div>

        <div class="linegrapgh">
          <DoughnutChart :chartData="pieChartData" v-if="ploaded" />
        </div>
        <!-- <div class="liquidity">
          <span class="flex-align-center insights">
            <span class="material-icons" style="color:#5b3cc4;">
              lightbulb
            </span>
            <span>Liquidity Rewards</span>
          </span>
          <p class="lead_text-1 mt-20">
            Liquidity providers earn a 0.3% fee on all trades proportional to
            their share of the pool. Fees are added to the pool, accrue in real
            time and can be claimed by withdrawing your liquidity.
          </p>
        </div> -->
        <!-- <div class="mt-20">
          <span class="lead_text">Your Liquidity</span>
          <div class="d-flex">
            <vs-button border> <b>Create a pair</b></vs-button>
            <vs-button to="/app/pool/add"> Add Liquidity</vs-button>
          </div>
        </div>

        <div class="mt-100">
          <p class="lead-text-dim">
            Connect to a wallet to view your liquidity
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import tokenApi from '@/api/tokens.js';
import LineChart from '@/components/charts/LineChart';
import DoughnutChart from '@/components/charts/DoughnutChart';
import BarChart from '@/components/charts/BarChart';

export default {
  name: 'Pool',
  components: {
    LineChart,
    DoughnutChart,
    BarChart,
  },
  data: () => ({
    loaded: false,
    barLoaded: false,
    ploaded: false,
    showAddLiquidity: false,
    lineChartData: [],
    pieChartData: [],
    chartData: [],
  }),
  created() {
    this.getTokenChartsData();
  },
  methods: {
    getTokenChartsData() {
      let self = this;
      tokenApi.getUniSwapTokenChart().then(response => {
        let rdata = response.data.tags;
        rdata.forEach(function(c) {
          self.lineChartData.push({ y: c.coin_counter, label: c.id });
          self.pieChartData.push({ y: c.coin_counter, label: c.id });
        });
        console.log(self.lineChartData);
        self.loaded = true;
        self.ploaded = true;
      });
    },
    showBarChart() {
      this.loaded = false;
      let self = this;
      tokenApi.getUniSwapTokenChart().then(response => {
        let rdata = response.data.tags;
        rdata.forEach(function(c) {
          self.chartData.push({ y: c.coin_counter, label: c.id });
        });
        self.barLoaded = true;
      });
    },
    showlineChart() {
      this.barLoaded = false;
      let self = this;
      tokenApi.getUniSwapTokenChart().then(response => {
        let rdata = response.data.tags;
        rdata.forEach(function(c) {
          self.lineChartData.push({ y: c.coin_counter, label: c.id });
        });
        self.loaded = true;
      });
    },
  },
};
</script>
