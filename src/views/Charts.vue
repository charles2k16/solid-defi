<template>
  <div class="mt-100">
    <h3 class="lead_text">Most Traded Tokens</h3>
    <br />
    <div class="d-flex">
      <div class="d-flex tr_tk">
        <vs-avatar>
          <img src="../assets/images/metamask.png" alt="" />
        </vs-avatar>
        <h2 class="ml-10">
          WTC-ETH <br />
          <span style="font-weight: lighter;">2,450.54</span>
        </h2>
      </div>
      <div class="d-flex ml-20 tr_tk">
        <vs-avatar>
          <img src="../assets/images/metamask.png" alt="" />
        </vs-avatar>
        <h2 class="ml-10">
          ddjdjjd <br />
          <span>2,450.54</span>
        </h2>
      </div>
    </div>
    <br />

    <div class="flex-justify-between">
      <SplineChart :chartData="splineData" v-if="loaded" />
    </div>
  </div>
</template>

<script>
import tokenApi from '@/api/tokens.js';
import SplineChart from '@/components/charts/SplineChart';

export default {
  name: 'Charts',
  components: {
    SplineChart,
  },
  data: () => ({
    loaded: false,
    barLoaded: false,
    ploaded: false,
    showAddLiquidity: false,
    lineChartData: [],
    pieChartData: [],
    chartData: [],
    splineData: [],
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
          self.splineData.push({ y: c.coin_counter, label: c.id });
        });
        self.loaded = true;
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
