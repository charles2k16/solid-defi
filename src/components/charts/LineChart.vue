<template>
  <div id="lineChart-container" style="height: 300px; width: 100%;"></div>
</template>

<script>
var CanvasJS = require('../../assets/canvasjs.min.js');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  name: 'lineChart',
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {
      chart: null,
      chartOptions: {
        theme: 'dark1',
        animationEnabled: true,
        data: [
          {
            type: 'line',
            showInLegend: true,
            legendMarkerColor: 'grey',
            toolTipContent: '<b>{label}: </b> ${y}',
            dataPoints: this.chartData,
          },
        ],
      },
    };
  },
  mounted() {
    this.chart = new CanvasJS.Chart('lineChart-container', this.chartOptions);
    this.chart.render();
  },
};
</script>
