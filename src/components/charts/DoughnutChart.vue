<template>
  <div id="chart-container" style="height: 300px;"></div>
</template>

<script>
var CanvasJS = require('../../assets/canvasjs.min.js');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  name: 'DoughnutChart',
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      chart: null,
      chartOptions: {
        theme: 'dark1',
        exportFileName: 'Token Price Chart',
        exportEnabled: true,
        animationEnabled: true,
        legend: {
          cursor: 'pointer',
          itemclick: 'explodePie',
        },
        data: [
          {
            type: 'doughnut',
            showInLegend: true,
            innerRadius: 50,
            indexLabel: '{label} - #percent%',
            toolTipContent: '<b>{label}:</b> ${y} (#percent%)',
            dataPoints: this.chartData,
          },
        ],
      },
    };
  },
  mounted() {
    this.chart = new CanvasJS.Chart('chart-container', this.chartOptions);
    this.chart.render();
  },
};
</script>
