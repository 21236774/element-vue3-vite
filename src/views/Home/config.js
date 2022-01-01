var xData = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
var data0 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var dataArr1 = [120, 120, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140]
var dataArr2 = [0, 150, 130, 170, 185, 160, 180, 175, 185, 160, 160, 180];
var dataArr3 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var dataArr4 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var dataArr5 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var dataArr6 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var dataArr7 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var dataArr8 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170, 100, 140];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
var data6 = [];
var data7 = [];
var data8 = [];
for (let i = 0; i < dataArr1.length; i++) {
    data1.push(dataArr2[i]);
    data2.push(dataArr2[i] + dataArr3[i]);
    data3.push(dataArr1[i] + dataArr2[i] + dataArr3[i]);
    data4.push(dataArr1[i] + dataArr2[i] + dataArr3[i] + dataArr4[i])
}


const picOption = {
    backgroundColor: '#000E1A', //背景色
    tooltip: {
        trigger: 'axis',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        textStyle: {
            color: 'white', //设置文字颜色
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            var str =
                parms[0].axisValue +
                '</br>' +
                parms[0].marker +
                '商业：' +
                parms[0].value +
                '</br>' +
                parms[1].marker +
                '公益：' +
                parms[1].value +
                '</br>' +
                parms[2].marker +
                '公益：' +
                parms[2].value;
            return str;
        },
    },
    textStyle: {
        color: '#C9C9C9',
    },

    // color: ['#fbc292', '#06fbfe',  '#f06e91'],
    legend: {
        data: ['商业', '公益', '信用卡'],
        right: 60,
        top: 0,
        selectedMode: false, //图例点击失效
        textStyle: {
            fontSize: 15,
            color: '#fff',
        },
        // selectedMode: "single",
        itemWidth: 30, // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20, // 设置间距
    },
    grid: {
        borderWidth: 0,
        x: 70,
        x2: 65,
        y: 40,
        y2: 80,
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                margin: 30,
                align: 'center',
                rotate: 20,
                color: '#ffff',
                fontSize: 12,
                lineHeight: 8,
                formatter: function (name, index) {
                    switch (index) {
                        case 0:
                            return name.substring(0, 4) + '\n' + '\n' + name.substring(4);
                        case 1:
                            return name.substring(0, 4) + '\n' + '\n' + name.substring(4);
                        case 2:
                            return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                        case 3:
                            return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                        case 4:
                            return name.substring(0, 5) + '\n' + '\n' + name.substring(5);
                        case 5:
                            return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                        case 6:
                            return name.substring(0, 11) + '\n' + '\n' + name.substring(11);
                        case 7:
                            return name.substring(0, 13) + '\n' + '\n' + name.substring(13);
                        case 8:
                            return name.substring(0, 5) + '\n' + '\n' + name.substring(5);
                        case 9:
                            return name.substring(0, 2) + '\n' + '\n' + name.substring(2);
                        default:
                            return name;
                    }
                },
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '小时',
            nameTextStyle: {
                //y轴上方单位的颜色
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: '#ffff',
                fontSize: 16,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            name: '商业',
            data: dataArr2,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
                borderWidth: 1,
                color: {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [
                        { offset: 0, color: 'rgba(6, 251, 254, 0.2)' },
                        { offset: 0.5, color: 'rgba(6, 251, 232, 0.2)' },
                        { offset: 0.5, color: 'rgba(6, 251, 232, 0.7)' },
                        { offset: 1, color: 'rgba(6, 251, 254, 0.2)' }
                    ]
                }
            },
        },
        {
            name: '公益',
            type: 'bar',
            data: dataArr3,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
                borderWidth: 1,
                color: {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [
                        { offset: 0, color: 'rgba(5, 35, 229, 0.2)' },
                        { offset: 0.5, color: 'rgba(5, 35, 202, 0.2)' },
                        { offset: 0.5, color: 'rgba(5, 35, 202,.7)' },
                        { offset: 1, color: 'rgba(5, 35, 229, 0.2)' }
                    ]
                }
            },
        },{
            name: '信用卡',
            type: 'bar',
            data: dataArr1,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle:{
                borderWidth: 1,
                color: {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [
                        { offset: 0, color: 'rgba(229, 5, 76, 0.2)' },
                        { offset: 0.5, color: 'rgba(229, 5, 35, 0.2)' },
                        { offset: 0.5, color: 'rgba(229, 5, 35,.7)' },
                        { offset: 1, color: 'rgba(229, 5, 76, 0.2)' }
                    ]
                }
            },
        },
        {
            name: '卡',
            type: 'bar',
            data: dataArr4,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle:{
                borderWidth: 1,
                color: {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [{ offset: 0, color: 'rgba(47,255,164,.2)' }, { offset: 0.5, color: 'rgba(47,255,164,.2)' }, { offset: 0.5, color: 'rgba(49,245,160,.7)' }, { offset: 1, color: 'rgba(49,245,160,.2)' }]
                }
            },
        },

        {
            data: data0,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0, x2: 1, y: 0, y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(6, 251, 254, 0.2)' },
                            { offset: 0.5, color: 'rgba(6, 251, 232, 0.2)' },
                            { offset: 0.5, color: 'rgba(6, 251, 232, 0.7)' },
                            { offset: 1, color: 'rgba(6, 251, 254, 0.2)' }
                        ]
                    }
                },
            },
        },
        {
            data: dataArr2,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
        },
        {
            data: data2,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: 'rgba(5, 35, 202)',
                },
            },
        },
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: 'rgba(6, 251, 232, 0.8)',
                },
            },
        },
        {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: 'rgba(229, 5, 76, 1)',
                },
            },
        },
        {
            data: data4,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: '#666',
                },
            },
        },
    ],
};



export {
    picOption
}
