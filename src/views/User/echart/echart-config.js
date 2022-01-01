import * as echarts from 'echarts'
const visitor_data = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color: ['#54B5FF', '#F9E900'],
  legend: {
    itemWidth: 8,
    itemHeight: 8,
    right: 'left',
    padding: [0, 0, 15, 0],
    data: [
      {
        name: '计划完成套数',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      },
      {
        name: '实际完成套数',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      },
      {
        name: '完成比例',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      }
    ]
  },
  grid: {
    left: '20px',
    right: '0%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['市本级', '福田区', '罗湖区', '南山区', '宝安区', '盐田区', '龙岗区', '光明区', '坪山区', '龙华区'],
    axisLabel: {
      textStyle: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: 16,
        color: '#333333',
        fontWeight: 400
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      name: '单位：套',
      nameTextStyle: {
        color: '#333333',
        fontSize: 16,
        padding: [0, 0, 0, -35]
      },
      interval: 400,
      axisLine: {
        show: false
      },
      splitLine: { // 这是平行于x轴的横向网格线
        show: true,
        lineStyle: {
          color: '#283946',
          type: 'dashed'
        }
      },
      axisLabel: {
        textStyle: {
          opacity: 0.8,
          fontFamily: 'PingFangSC-Regular',
          fontSize: 16,
          color: '#333333',
          fontWeight: 400
        }
      },
      yAxisIndex: 1
    }, {
      type: 'value',
      name: '单位: %',
      min: 0,
      max: 100,
      interval: 20,
      nameTextStyle: {
        color: '#333333',
        fontSize: 16,
        padding: [0, 0, 0, 0]
      },
      axisLine: {
        show: false
      },
      splitLine: { // 这是平行于x轴的横向网格线
        show: true,
        lineStyle: {
          color: '#283946',
          type: 'dashed'
        }
      },
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          opacity: 0.8,
          fontFamily: 'PingFangSC-Regular',
          fontSize: 16,
          color: '#333333',
          fontWeight: 400
        }
      },
      yAxisIndex: 2
    }],
    dataZoom: [{
      // type: 'slider',
      show: true,
      xAxisIndex: 0,
      end: 0,
      start: 60,
      bottom: 10,
      height: 10,
      handleStyle: {
        color: '#3AAAF0',
        borderColor: 'none',
        margin: [-50, 0 , 0, 0],
      },
      borderColor:"rgba(0,0,0,0)",
      bottom: 50,
    }],
  series: [
    {
      name: '实际完成套数',
      type: 'bar',
      stack: '总量',
      data: [520, 760, 320, 1020, 320, 520, 898, 760, 320, 1020],
      barWidth: '18%',
      barGap: '10%',
      itemStyle: {
        normal: {
          color: function (params) {
            const colorArr = params.value > 0 ? ['#0080B8', 'rgba(0,206,253,0.00)'] : ['#666', '#999']
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: colorArr[0] // 0% 处的颜色
            }, {
              offset: 1,
              color: colorArr[1]// 100% 处的颜色
            }], false)
          }
        },
        emphasis: {
          opacity: 1
        }
      }
    },{
      name: '计划完成套数',
      type: 'bar',
      stack: '总量',
      data: [480, 800, 780, 220, 690, 480, 800, 780, 220, 690],
      barWidth: '18%',
      barGap: '10%',
      itemStyle: {
        normal: {
          color: function (params) {
            const colorArr = ['#F9E900', 'rgba(249,233,0,0.00)']
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: colorArr[0] // 0% 处的颜色
            }, {
              offset: 1,
              color: colorArr[1]// 100% 处的颜色
            }], false)
          }
        },
        emphasis: {
          opacity: 1
        }
      }
    },
    {
      name: '完成比例',
      type: 'line',
      symbol: 'circle', /* 拐点样式 */
      symbolSize: 10, // 拐点大小
      barGap: '10%',
      itemStyle: {
        normal: {
          color: '#003339' // 拐点颜色
        }
      },
      lineStyle: {
        normal: {
          color: '#003339' // 折线颜色
        }
      },
      data: [77, 86, 82, 83.5, 76.2, 77, 86, 82, 83.5, 76.2],
      yAxisIndex: 1
    }
  ]
}
const visitor_time_data = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color: ['#54B5FF', '#F9E900'],
  legend: {
    itemWidth: 8,
    itemHeight: 8,
    right: 'left',
    padding: [0, 0, 15, 0],
    data: [
      {
        name: '计划完成套数',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      },
      {
        name: '实际完成套数',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      }
    ]
  },
  grid: {
    left: '20px',
    right: '0%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['2021Q1', '2021Q2', '2021Q3', '2021Q4'],
    axisLabel: {
      textStyle: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: 16,
        color: '#333333',
        fontWeight: 400
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      name: '单位：套',
      nameTextStyle: {
        color: '#333333',
        fontSize: 16,
        padding: [0, 0, 0, -35]
      },
      interval: 400,
      axisLine: {
        show: false
      },
      splitLine: { // 这是平行于x轴的横向网格线
        show: true,
        lineStyle: {
          color: '#283946',
          type: 'dashed'
        }
      },
      axisLabel: {
        textStyle: {
          opacity: 0.8,
          fontFamily: 'PingFangSC-Regular',
          fontSize: 16,
          color: '#333333',
          fontWeight: 400
        }
      },
      yAxisIndex: 1
    }],
  series: [
    {
      name: '实际完成套数',
      type: 'bar',
      stack: '总量',
      data: [520, 760, 320, 1020],
      barWidth: '18%',
      barGap: '10%',
      itemStyle: {
        normal: {
          color: function (params) {
            const colorArr = params.value > 0 ? ['#0080B8', 'rgba(0,206,253,0.00)'] : ['#666', '#999']
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: colorArr[0] // 0% 处的颜色
            }, {
              offset: 1,
              color: colorArr[1]// 100% 处的颜色
            }], false)
          }
        },
        emphasis: {
          opacity: 1
        }
      }
    },{
      name: '计划完成套数',
      type: 'bar',
      stack: '总量',
      data: [480, 800, 780, 220],
      barWidth: '18%',
      barGap: '10%',
      itemStyle: {
        normal: {
          color: function (params) {
            const colorArr = ['#F9E900', 'rgba(249,233,0,0.00)']
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: colorArr[0] // 0% 处的颜色
            }, {
              offset: 1,
              color: colorArr[1]// 100% 处的颜色
            }], false)
          }
        },
        emphasis: {
          opacity: 1
        }
      }
    }
  ]
}

export {
  visitor_data,
  visitor_time_data
}
