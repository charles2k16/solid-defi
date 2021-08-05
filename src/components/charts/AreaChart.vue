<template>
  <apexchart height="330" type="area" :options="chartOptions" :series="series">
  </apexchart>
</template>

<script>
export default {
  name: 'AreaChart',
  props: {
    chartData: Object,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: 'Total Value Locked',
          align: 'left',
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 4,
          colors: ['#000524'],
          strokeColor: '#00BAEC',
          strokeWidth: 3,
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left',
        },
        tooltip: {
          theme: 'dark',
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#00BAEC'],
        grid: {
          borderColor: '#555',
          clipMarkers: false,
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.55,
            opacityTo: 0,
          },
        },
        xaxis: {
          categories: this.chartData.categories,
        },
      },
      series: [
        {
          name: 'Price',
          data: this.chartData.series,
        },
      ],
    };
  },
};
</script>
