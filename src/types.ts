export const funcParams = 'data, theme, echartsInstance, echarts';

const funcBody = `const series = data.series.map((s) => {
  const sData = s.fields.find((f) => f.type === 'number').values.buffer;
  const sTime = s.fields.find((f) => f.type === 'time').values.buffer;

  return {
  };
});

const axisOption = {
  axisTick: {
    show: false,
  },
  axisLine: {
    show: false,
  },
  axisLabel: {
    color: 'rgba(128, 128, 128, .9)',
  },
  splitLine: {
    lineStyle: {
      color: 'rgba(128, 128, 128, .2)',
    },
  },
};

return {
  backgroundColor: '#000000',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: '0',
    bottom: '0',
    data: data.series.map((s) => s.name),
    textStyle: {
      color: 'rgba(128, 128, 128, .9)',
    },
  },
  xAxis: Object.assign(
    {
      type: 'time',
    },
    axisOption
  ),
  yAxis: Object.assign(
    {
      type: 'value',
      min: 'dataMin',
    },
    axisOption
  ),
  grid: {
    left: 0,
    right: 16,
    top: 6,
    bottom: 24,
    containLabel: true,
  },
  series: [
      {
            name: 'Results 1',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Data 1', selected: true},
                {value: 679, name: 'Data 2'},
                {value: 1548, name: 'Data 3'}
            ],
        itemStyle: {
                color: '#15205a',
                borderColor: '#000000',
                borderWidth: '0.3',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
        },
    
        {
            name: 'Results 2',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\\n{hr|}\\n  {b|{b}：}{c|{c}}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 10,
                 shadowBlur:3,
                 shadowOffsetX: 2,
                 shadowOffsetY: 2,
                 shadowColor: '#999',
                 padding: [0, 7],
                rich: {
                    a: {
                        color: '#243EC5',
                        lineHeight: 17,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#243EC5',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        color: '#5D5E63',
                        lineHeight: 22
                    },
                    c: {
                      color: "#5D5E63"
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#15205a',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 335, name: 'Data 1'},
                {value: 310, name: 'Data 2'},
                {value: 234, name: 'Data 3'},
                {value: 135, name: 'Data 4'},
                {value: 1048, name: 'Data 5'},
                {value: 251, name: 'Data 6'},
                {value: 147, name: 'Data 7'},
                {value: 102, name: 'Data 8'}
            ],
            itemStyle: {
                color: '#ffffff',
                borderColor: '#243EC5',
                borderWidth: '0.3',
                shadowBlur: 200,
                shadowColor: 'rgba(100, 100, 0, 10)'
            },
        }
  ],
  graphic: [
    {
            type: 'image',
            id: 'logo',
            left: 6,
            top: 6,
            style: {
                image: 'https://i.ibb.co/P5XNVwY/softtek-logo2.png" alt="softtek-logo2',
                width: 60,
                height: 30,
                opacity: 1
            }
  },
    { type: 'image',
            id: 'logo2',
            right: 6,
            bottom: 12,
            style: {
                image: 'https://i.ibb.co/bm1V7pW/cinepolis-logo.png" alt="cinepolis-logo',
                width: 80,
                height: 30,
                opacity: 1
            }
    }
    ]
};
