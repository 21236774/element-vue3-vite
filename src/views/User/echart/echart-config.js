import * as echarts from 'echarts'
const visitorData = {
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
        name: '计划完成',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      },
      {
        name: '实际完成',
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
      name: '单位：人',
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
      name: '实际完成',
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
      name: '计划完成',
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
const visitorTimeData = {
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
        name: '计划完成',
        textStyle: {
          fontSize: 16,
          color: '#666'
        }
      },
      {
        name: '实际完成',
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
      name: '单位：人',
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
      name: '实际完成',
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
      name: '计划完成',
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
let angle = 0; //角度，用来做简单的动画效果的
let value = 80;
var timerId;
const shuiqiu = {
  title: {
    text: '{a|' + value + '}{c|%}',
    x: 'center',
    y: 'center',
    textStyle: {
      rich: {
        a: {
          fontSize: 48,
          color: '#29EEF3'
        },

        c: {
          fontSize: 20,
          color: '#ffffff',
          // padding: [5,0]
        }
      }
    }
  },

  series: [
    // 紫色
    {
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
            startAngle: (0 + angle) * Math.PI / 180,
            endAngle: (90 + angle) * Math.PI / 180
          },
          style: {
            stroke: "#8383FA",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    }, {
      name: "ring5", //紫点
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
        let point = getCirlPoint(x0, y0, r, (90 + angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#8450F9", //绿
            fill: "#8450F9"
          },
          silent: true
        };
      },
      data: [0]
    },
    // 蓝色

    {
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
            startAngle: (180 + angle) * Math.PI / 180,
            endAngle: (270 + angle) * Math.PI / 180
          },
          style: {
            stroke: "#4386FA",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    {
      name: "ring5", // 蓝色
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
        let point = getCirlPoint(x0, y0, r, (180 + angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#4386FA", //绿
            fill: "#4386FA"
          },
          silent: true
        };
      },
      data: [0]
    },

    {
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
            startAngle: (270 + -angle) * Math.PI / 180,
            endAngle: (40 + -angle) * Math.PI / 180
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    },
    // 橘色

    {
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
            startAngle: (90 + -angle) * Math.PI / 180,
            endAngle: (220 + -angle) * Math.PI / 180
          },
          style: {
            stroke: "#FF8E89",
            fill: "transparent",
            lineWidth: 1.5
          },
          silent: true
        };
      },
      data: [0]
    }, {
      name: "ring5",
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
        let point = getCirlPoint(x0, y0, r, (90 + -angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#FF8E89", //粉
            fill: "#FF8E89"
          },
          silent: true
        };
      },
      data: [0]
    }, {
      name: "ring5", //绿点
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
        let point = getCirlPoint(x0, y0, r, (270 + -angle))
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4
          },
          style: {
            stroke: "#0CD3DB", //绿
            fill: "#0CD3DB"
          },
          silent: true
        };
      },
      data: [0]
    }, {
      name: '吃猪肉频率',
      type: 'pie',
      radius: ['52%', '40%'],
      silent: true,
      clockwise: true,
      startAngle: 90,
      z: 0,
      zlevel: 0,
      label: {
        normal: {
          position: "center",

        }
      },
      data: [{
        value: value,
        name: "",
        itemStyle: {
          normal: {
            color: { // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: '#A098FC' // 0% 处的颜色
              },
                {
                  offset: 0.3,
                  color: '#4386FA' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#4FADFD' // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#0CD3DB' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }
              ]
            },
          }
        }
      },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
      ]
    },
    {
      name: '吃猪肉频率',
      type: 'pie',
      radius: ['32%', '35%'],
      silent: true,
      clockwise: true,
      startAngle: 270,
      z: 0,
      zlevel: 0,
      label: {
        normal: {
          position: "center",

        }
      },
      data: [{
        value: value,
        name: "",
        itemStyle: {
          normal: {
            color: { // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: '#00EDF3' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#646CF9' // 100% 处的颜色
              }]
            },
          }
        }
      },
        {
          value: 100 - value,
          name: "",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#173164"
            }
          }
        }
      ]
    },

  ]
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
  let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
  return {
    x: x1,
    y: y1
  }
}

function draw() {
  angle = angle + 3
  myChart.setOption(option, true)
  //window.requestAnimationFrame(draw);
}
if (timerId) {
  clearInterval(timerId);
}
timerId = setInterval(function() {
  //用setInterval做动画感觉有问题
  draw()
}, 100);



export {
  visitorData,
  visitorTimeData,
  shuiqiu,
}
