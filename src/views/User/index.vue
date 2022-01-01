<template>
<div>
  <div class="max-box">
    <div class="box" ref="box"></div>
    <div class="box" ref="box_1"></div>
    <div class="box" ref="shenzhen"></div>
  </div>
  <div class="max-box">
    <div class="box" ref="time"></div>
    <div class="box">
      <echart :option="sexOption" :height="400" />
    </div>
    <div class="box">
      <echart id="yuyuyu" :option="shuiqiuOptions" :height="400" />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, defineAsyncComponent } from 'vue';
import { handlePieCube } from './echart/pie3D';
import { visitorData, visitorTimeData, shuiqiu, picOption } from './echart/echart-config';

const Echart = defineAsyncComponent(() => import("~/components/echart/index.vue"));
  const num = ref(1)
  const box = ref(null)
  const options = ref(visitorData)
  const box_1 = ref(null)
  const shenzhen = ref(null)
  const time = ref(null)
  const shuiqiuOptions = ref(shuiqiu)
  const sexOption = (handlePieCube({
    data: [
      { name: '嘤嘤嘤', value: 22 },
      { name: '嗯嗯嗯', value: 40 },
      { name: '鹅鹅鹅', value: 74 },
      { name: '嘿嘿嘿', value: 80 }
    ],
    showPercent: true
  }))
  const add = 1
  const number = 0
  let udd = add + number
  const getMounted = () => {
    // console.log(box.value) // vue3中需要这样获取dom---------

    const myChart = echarts.init(box.value);
    const myChart1 = echarts.init(box_1.value)
    const myChart2 = echarts.init(shenzhen.value)
    const timeChart = echarts.init(time.value)
    
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '营业额',
          axisLine: {
            show: true,
          },
        },
        {
          type: 'value',
          name: '百分比',
          position: 'right',
          axisLine: {
            show: true,
          },
        },
      ],
      series: [
        {
          name: 'Email',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#666' // 0% 处的颜色
              }, {
                  offset: 1, color: '#999' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Union Ads',
          type: 'bar',
          yAxisIndex: 1, // 与第二根轴对应////
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
      ]
    };
    // 绘制图表
    myChart.setOption(option);
    myChart2.setOption(options.value);
    timeChart.setOption(visitorTimeData);
    myChart1.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['年度', '2015', '2016', '2017', '2018'],
          ['抹茶拿铁', 43.3, 85.8, 93.7],
          ['奶茶', 83.1, 73.4, 55.1],
          ['奶酪可可', 86.4, 65.2, 82.5],
          ['核桃布朗尼', 72.4, 53.9, 39.1, 66.6]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    })
    // 555
  }
  onMounted(getMounted)

</script>

<style scoped>
  .box {
    width: 33%;
    height: 400px;
  }
  #shenzhen {
    width: 33%;
    height: 400px;
  }
  .max-box {
    background-color: rgba(6, 251, 254, 0.2);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .echart-3d-bar {
    width: 100%;
    height: 500px;
  }
</style>
