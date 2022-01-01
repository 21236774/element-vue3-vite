/**
 * @describe: 教育现状通用立体饼状图组件
 * @author: cpl
 * @create: 2021-12-01 10:06:48
 */

 const icon1 = '' // require('@/assets/images/economy/icon-industryoverview-03.png')
 const icon2 = '' // require('@/assets/images/economy/icon-industryoverview-01.png')
 const icon3 = '' // require('@/assets/images/economy/icon-industryoverview-02.png')
 const icon4 = '' // require('@/assets/images/economy/icon-industryoverview-06.png')
 const icon5 = '' // require('@/assets/icons/education/education-status/icon-cube1.png')
 const icon6 = '' // require('@/assets/icons/education/education-status/icon-cube2.png')
 
 /**
  * 建设筹集通用立体饼状图组件
  * @param {
  * data 展示数据 [{value, name}, ...]
  * color 颜色数组集合 有默认值
  * legendIcon legend标签图标集合 有默认值
  * boxHeight 饼图高度
  * showPercent 是否展示百分比 默认 false
  * legendWidth 单个标签宽度，showPercent为真有效 默认 150
  * } obj
  * @returns  option
  */
 
 export const handlePieCube = (obj = {}) => {
   obj.boxHeight = obj.boxHeight || 20
   if (obj.data.length > 2) {
     obj.color = obj.color || [
       'rgba(0,83,255,0.70)',
       'rgba(0,255,249,0.70)',
       'rgba(0,255,146,0.50)',
       'rgba(249,233,0,0.50)'
     ]
     obj.legendIcon = [icon1, icon2, icon3, icon4]
   } else {
     obj.color = obj.color || ['#0585FA', '#00D0FF']
     obj.legendIcon = [icon5, icon6]
   }
   // background-image: linear-gradient(137deg, rgba(0,255,166,0.06) 0%, #00FF6D 90%);
 
   handleData(obj)
 
   const { legendData, series } = getPie3D(obj.data)
   
   const option = {
     legend: {
       orient: 'vertical',
       right: '5%',
       top: 'center',
       itemGap: 20,
       formatter: (val) => {
         if (obj.showPercent) {
           let percent = 0
           obj.data.find((item) => {
             if (item.name === val) {
               percent = item.percent
               return true
             }
           })
           if (val === '更新整备用地') {
             return `{f3|∎}{f1|${val}}       {f2|${obj.data[0].value}}公顷`
           } else if (val === '其他(含工改保)用地') {
             return `{f4|∎}{f1|${val}}       {f2|${obj.data[1].value}}公顷`
           } else if (val === '新供应用地') {
             return `{f5|∎}{f1|${val}}       {f2|${obj.data[2].value}}公顷`
           } else if (val === '旧住宅拆除改造(棚户区改造)用地') {
             return `{f6|∎}{f1|${val}}       {f2|${obj.data[3].value}}公顷`
           }
         } else return val
       },
       textStyle: {
         color: '#FFF',
         fontSize: 16,
         padding: [0, 0, 0, 4],
         rich: {
           f1: {
             width: 220,
             fontFamily: 'PingFangSC-Regular',
             fontSize: 16,
             color: '#B0B0B0',
             fontWeight: '400',
           },
           f2: {
             fontFamily: 'PingFangSC-Regular',
             fontSize: 16,
             color: '#FFFFFF',
             fontWeight: '400',
           },
           f3: {
             width: 8,
             height: 8,
             color: '#72DA1F',
             padding: [0, 5, 0, 50],
           },
           f4: {
             width: 8,
             height: 8,
             color: '#EC5081',
             padding: [0, 5, 0, 50],
           },
           f5: {
             width: 8,
             height: 8,
             color: '#00B7FF',
             padding: [0, 5, 0, 50],
           },
           f6: {
             width: 8,
             height: 8,
             color: '#FFA13B',
             padding: [0, 5, 0, 50],
           },
         }
       },
       itemWidth: 20,
       itemHeight: 20,
       data: legendData
     },
     radius: ['50%', '100%'],
     animation: true,
     tooltip: {
       formatter: (params) => {
         let num = ''
         if (obj.showPercent) num = obj.data[params.seriesIndex].percent + '%'
         else num = obj.data[params.seriesIndex].value
         return `${params.seriesName}<br/>
           <span style="display:inline-block;margin-right:5px;border-radius:100%;width:8px;height:8px;background-color:${params.color};"></span>
           ${num}`
       }
     },
     xAxis3D: {
       min: -1,
       max: 1
     },
     yAxis3D: {
       min: -1,
       max: 1
     },
     zAxis3D: {
       min: -1,
       max: 1
     },
     grid3D: {
       show: false,
       boxHeight: obj.boxHeight,
       boxWidth: 110,
       top: 0,
       left: '-30%',
       viewControl: {
         // 3d效果可以放大、旋转等，请自己去查看官方配置
         alpha: 35, // 角度
         beta: 90, // 调整视角到主体的距离，类似调整zoom
         // rotateSensitivity: 0, // 设置为0无法旋转
         // zoomSensitivity: 0, // 设置为0无法缩放
         // panSensitivity: 0, // 设置为0无法平移
         autoRotate: false // 自动旋转
       }
     },
     series
   }
   return option
 }
 
 // 处理数据
 function handleData(obj) {
   if (Array.isArray(obj.data)) {
     let total = 0
     obj.data.forEach((item) => {
       total += item.value
     })
     obj.data.forEach((item, index) => {
       item.percent = (item.value / total) * 100
       if ((item.percent * 10) % 10 !== 0) item.percent = item.percent.toFixed(2)
       item.itemStyle = {
         opacity: 0.7
       }
       if (obj.color[index]) item.itemStyle.color = obj.color[index]
       if (obj.legendIcon[index]) item.itemStyle.imgurl = obj.legendIcon[index]
     })
   }
 }
 
 function getPie3D(pieData, internalDiameterRatio) {
   const series = []
   let sumValue = 0
   let startValue = 0
   let endValue = 0
   const legendData = []
   const k = 1 - internalDiameterRatio
   // 为每一个饼图数据，生成一个 series-surface 配置
   
   const color = {
     type: 'linear',
     x: 0,
     y: 0,
     x2: 0,
     y2: 1,
     colorStops: [{
         offset: 0, color: 'red' // 0% 处的颜色
     }, {
         offset: 1, color: 'blue' // 100% 处的颜色
     }],
     global: false // 缺省为 false
   }
 
   for (let i = 0; i < pieData.length; i++) {
     sumValue += pieData[i].value
     const seriesItem = {
       name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
       type: 'surface',
       parametric: true,
       wireframe: {
         show: false
       },
       pieData: pieData[i],
       pieStatus: {
         selected: false,
         hovered: false,
         k: k
       },
     }
 
     if (typeof pieData[i].itemStyle !== 'undefined') {
       const itemStyle = {}
       // itemStyle.color =
       //   typeof pieData[i].itemStyle.color !== 'undefined' ? color : null
         itemStyle.color =
         typeof pieData[i].itemStyle.color !== 'undefined' ? pieData[i].itemStyle.color : null
       // itemStyle.opacity =
       //   typeof pieData[i].itemStyle.opacity !== 'undefined' ? pieData[i].itemStyle.opacity : null
       seriesItem.itemStyle = itemStyle
     }
     series.push(seriesItem)
   }
 
   // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
   // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
   for (let i = 0; i < series.length; i++) {
     endValue = startValue + series[i].pieData.value
     series[i].pieData.startRatio = startValue / sumValue
     series[i].pieData.endRatio = endValue / sumValue
     series[i].parametricEquation = getParametricEquation(
       series[i].pieData.startRatio,
       series[i].pieData.endRatio,
       true,
       false,
       0.3,
       20
     )
     startValue = endValue
     const obj = {
       name: series[i].name,
       icon: 'image://' + pieData[i].itemStyle.imgurl
       // itemStyle: {
       //   borderWidth: 5.6,
       //   borderType: 'dashed',
       //   borderColor: 'red',
       //   color: 'none'
       // }
     }
     
     legendData.push(obj)
   }
   console.log(series)
   return {
     series,
     legendData
   }
 }
 
 /**
  * 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
  */
 function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
   // 计算
   const midRatio = (startRatio + endRatio) / 2
   const startRadian = startRatio * Math.PI * 2
   const endRadian = endRatio * Math.PI * 2
   const midRadian = midRatio * Math.PI * 2
   // 如果只有一个扇形，则不实现选中效果。
   if (startRatio === 0 && endRatio === 1) {
     isSelected = false
   }
   // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
   k = typeof k !== 'undefined' ? k : 1 / 3
   // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
   const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
   const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0
   // 计算高亮效果的放大比例（未高亮，则比例为 1）
   const hoverRate = isHovered ? 1.05 : 1
   // 返回曲面参数方程
   return {
     u: {
       min: -Math.PI,
       max: Math.PI * 3,
       step: Math.PI / 32
     },
     v: {
       min: 0,
       max: Math.PI * 2,
       step: Math.PI / 20
     },
     x: function (u, v) {
       if (u < startRadian) {
         return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
       }
       if (u > endRadian) {
         return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
       }
       return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
     },
     y: function (u, v) {
       if (u < startRadian) {
         return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
       }
       if (u > endRadian) {
         return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
       }
       return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
     },
     z: function (u, v) {
       if (u < -Math.PI * 0.5) {
         return Math.sin(u)
       }
       if (u > Math.PI * 2.5) {
         return Math.sin(u) * h * 0.1
       }
       return Math.sin(v) > 0 ? 1 * h * 0.1 : -1
     }
   }
 }
 