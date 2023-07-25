import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';

type Props = {};
let myChart;
export default function Today({ }: Props) {
  const [currentBtn, setCurrentBtn] = useState(0)
  const ele = useRef(null);


  useEffect(() => {
    myChart = echarts.init(ele.current);
    // Draw the chart
    myChart.setOption({
      legend: {
        x: 'center',
        y: 'bottom',
        icon: "circle",
        textStyle: {
          fontSize: 24,
          color: '#FFFFFF',
          itemGap: 20
        }
      },
      grid: {
        top: 10,
        bottom: 60,
        left: 35,
        right: 25
      },
      xAxis: {
        boundaryGap: false,
        type: 'category',
        data: ['07/08', '07/09', '07/10', '07/11', '07/12', '07/13', '07/14'],
        axisLabel: {
          textStyle: {
            fontSize: 18,
            color: "#D9D9D9"
          }
        },
      },
      yAxis: {
        axisPointer: {
          show: false
        },
        type: 'value',
        axisLabel: {
          textStyle: {
            fontSize: 18,
            color: "#D9D9D9"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 3,
            color: "#5F5F5F",
            type: 'dashed'
          }
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          lineStyle: {
            color: '#FFFFFF',
            width: 4,
            type: "solid"
          },
        }
      },
      axisPointer: {
        show: true
      },
      series: [
        {
          name: '气象站',
          data: [33, 44, 55, 66, 5, 44, 20],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 8
          },
          itemStyle: {
            color: '#FFFFFF'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(255, 255, 255, 0.8)'
              },
              {
                offset: 0.3,
                color: 'rgba(255, 255, 255, 0.4)'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)'
              }
            ])
          },
        },
        {
          name: '垃圾桶',
          data: [12, 5, 25, 3, 1, 3, 20],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 8
          },
          itemStyle: {
            color: '#82C5F9'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(130, 197, 249, 0.8)'
              },
              {
                offset: 0.3,
                color: 'rgba(130, 197, 249, 0.4)'
              },
              {
                offset: 1,
                color: 'rgba(130, 197, 249, 0)'
              }
            ])
          },
        },
        {
          name: '井盖',
          data: [12, 32, 25, 44, 64, 25, 80],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 8
          },
          itemStyle: {
            color: '#8CF1EB'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(140, 241, 235, 0.8)'
              },
              {
                offset: 0.3,
                color: 'rgba(140, 241, 235, 0.4)'
              },
              {
                offset: 1,
                color: 'rgba(140, 241, 235, 0)'
              }
            ])
          },
        },
        {
          symbol: 'none',
          name: '水位',
          data: [12, 40, 35, 4, 6, 77, 100],
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 8
          },
          itemStyle: {
            color: '#FFD977'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(255, 217, 119,0.5)'
              },
              {
                offset: 0.3,
                color: 'rgba(255, 217, 119,0.2)'
              },
              {
                offset: 1,
                color: 'rgba(255, 217, 119,0)'
              }
            ])
          },
        }
      ]
    });
  }, []);

  useEffect(() => {
    if (!currentBtn) {
      myChart.clear()
      myChart.setOption({
        legend: {
          x: 'center',
          y: 'bottom',
          icon: "circle",
          textStyle: {
            fontSize: 24,
            color: '#FFFFFF',
            itemGap: 20
          }
        },
        grid: {
          top: 10,
          bottom: 60,
          left: 35,
          right: 25
        },
        xAxis: {
          boundaryGap: false,
          type: 'category',
          data: ['07/08', '07/09', '07/10', '07/11', '07/12', '07/13', '07/14'],
          axisLabel: {
            textStyle: {
              fontSize: 18,
              color: "#D9D9D9"
            }
          },
        },
        yAxis: {
          axisPointer: {
            show: false
          },
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: 18,
              color: "#D9D9D9"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 3,
              color: "#5F5F5F",
              type: 'dashed'
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#FFFFFF',
              width: 4,
              type: "solid"
            },
          }
        },
        axisPointer: {
          show: true
        },
        series: [
          {
            name: '气象站',
            data: [33, 44, 55, 66, 5, 44, 20],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 8
            },
            itemStyle: {
              color: '#FFFFFF'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 255, 255, 0.8)'
                },
                {
                  offset: 0.3,
                  color: 'rgba(255, 255, 255, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 255, 255, 0)'
                }
              ])
            },
          },
          {
            name: '垃圾桶',
            data: [12, 5, 25, 3, 1, 3, 20],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 8
            },
            itemStyle: {
              color: '#82C5F9'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(130, 197, 249, 0.8)'
                },
                {
                  offset: 0.3,
                  color: 'rgba(130, 197, 249, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(130, 197, 249, 0)'
                }
              ])
            },
          },
          {
            name: '井盖',
            data: [12, 32, 25, 44, 64, 25, 80],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 8
            },
            itemStyle: {
              color: '#8CF1EB'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(140, 241, 235, 0.8)'
                },
                {
                  offset: 0.3,
                  color: 'rgba(140, 241, 235, 0.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(140, 241, 235, 0)'
                }
              ])
            },
          },
          {
            symbol: 'none',
            name: '水位',
            data: [12, 40, 35, 4, 6, 77, 100],
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 8
            },
            itemStyle: {
              color: '#FFD977'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 217, 119,0.5)'
                },
                {
                  offset: 0.3,
                  color: 'rgba(255, 217, 119,0.2)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 217, 119,0)'
                }
              ])
            },
          }
        ]
      });
    } else {
      myChart.clear()
      myChart.setOption({
        grid: {
          top: 40,
          bottom: 60,
          left: 35,
          right: 25
        },
        xAxis: {
          type: 'category',
          data: ['井盖', '垃圾桶', '水位', '气象站'],
          axisLabel: {
            textStyle: {
              fontSize: 18,
              color: "#D9D9D9"
            }
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              width: 3,
              color: '#5F5F5F',
              type: 'dashed'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 18,
              color: "#D9D9D9"
            }
          },
        },
        series: [
          {
            data: [
              {
                value: 42,
                itemStyle: {
                  color: '#8CF1EB'
                },
                label: {
                  //柱体上显示数值
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                    //数值样式
                    fontSize: '32px',
                    color: '#8CF1EB'
                  },
                  formatter: '{c}'
                }
              },
              {
                value: 30,
                itemStyle: {
                  color: '#82C5F9'
                },
                label: {
                  //柱体上显示数值
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                    //数值样式
                    fontSize: '32px',
                    color: '#82C5F9'
                  },
                  formatter: '{c}'
                }
              },
              {
                value: 80,
                itemStyle: {
                  color: '#FFD977'
                },
                label: {
                  //柱体上显示数值
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                    //数值样式
                    fontSize: '32px',
                    color: '#FFD977'
                  },
                  formatter: '{c}'
                }
              },
              {
                value: 10,
                itemStyle: {
                  color: '#E6E6E6'
                },
                label: {
                  //柱体上显示数值
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: {
                    //数值样式
                    fontSize: '32px',
                    color: '#E6E6E6'
                  },
                  formatter: '{c}'
                }
              }
            ],
            type: 'bar'
          }
        ]
      })
    }
  }, [currentBtn])

  return <Wrapper>
    <div className='btns'>
      <span onClick={() => setCurrentBtn(1)} style={{ marginRight: '24px',opacity: currentBtn? 1: 0.3}}>设备告警分布图</span>
      <span onClick={() => setCurrentBtn(0)} style={{opacity: currentBtn === 0 ?  1: 0.3}}>一周告警趋势图</span>
    </div>
    <div className='line' ref={ele} />
  </Wrapper>
}

const Wrapper = styled.div`
  width: 1000px;
  height: 528px;
  position: relative;
  margin-bottom:40px;
  margin-top:40px;
  .btns {
    position: absolute;
    top: -80px;
    right: 0;
    span {
      color:#FFFFFF;
      cursor: pointer;
      font-family: Source Han Sans CN;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .line {
    width: 100%;
    height: 100%;
  }
`