<template>
  <Parent>
    <ChartInformation />
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Penjualan</h4>
          </div>
          <div class="card-body">
            <div class="chart-card"></div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script lang="ts">
declare const ApexCharts: any;
</script>

<script setup lang="ts">
import Parent from '../Parent.vue';
import ChartInformation from './ChartInformation.vue';
import { onMounted } from 'vue';

onMounted(() => {
  initialChart();
  chartCard();
});


function initialChart() {
  const options = {
    series: [60, 40],
    chart: { type: "donut", height: 110 },
    colors: ["#ff7784", "#16daf1"],
    legend: { show: !1 },
    dataLabels: { enabled: !1 },
  };
  new ApexCharts(document.querySelector("#mini-chart1"), options).render();
  new ApexCharts(document.querySelector("#mini-chart2"), options).render();
  new ApexCharts(document.querySelector("#mini-chart3"), options).render();
}

function chartCard() {
  const options = {
    series: [
      {
        name: 'Kartu',
        data: [10, 45, 30, 40, 50, 12, 23, 34, 45],
      },
      {
        name: 'Tunai',
        data: [13, 12, 33, 43, 53, 95, 26, 37, 48],
      }
    ],
    chart: {
      type: 'bar',
      height: 400,
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors: ["#ff7784", "#16daf1"],
    dataLabels: { enabled: !1 },
    // lebar bar chart
    plotOptions: {
      bar: {
        columnWidth: '20%',
      }
    },
  };
  new ApexCharts(document.querySelector(".chart-card"), options).render();
}
</script>

