<template>
  <div
    id="spline-container"
    style="height: 300px;width:600px;background:transparent !important;"
  ></div>
</template>

<script>
var CanvasJS = require('../../assets/canvasjs.min.js');
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  name: 'SplineChart',
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
        theme: 'dark2',
        animationEnabled: true,
        data: [
          {
            type: 'splineArea',
            color: '#121F42',
            markerSize: 5,
            xValueFormatString: 'YYYY',
            yValueFormatString: '$#,##0.##',
            dataPoints: this.chartData,
          },
        ],
      },
    };
  },
  mounted() {
    this.chart = new CanvasJS.Chart('spline-container', this.chartOptions);
    this.chart.render();
  },
};
</script>
