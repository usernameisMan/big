import * as echarts from "echarts";

const carData = [
  {
    licensePlate: "停车场1空闲车位",
    checkInTime: "2023-3-21 15:20:30",
    checkOutTime: "2023-3-21 18:50:30",
    parkingLocation: {
      type: "0",
      value: "35",
    },
  },
  {
    licensePlate: "停车场2空闲车位",
    checkInTime: "2023-3-21 15:20:30",
    checkOutTime: "2023-3-21 15:20:30",
    parkingLocation: {
      type: "3",
      value: "5",
    },
  },
  {
    licensePlate: "停车场3空闲车位",
    checkInTime: "2023-3-21 15:20:30",
    checkOutTime: "2023-3-22 16:15:30",
    parkingLocation: {
      type: "0",
      value: "26",
    },
  },
];

const firefightingData = [
  {
    equipmentName: "单栓灭火器组合消防柜",
    equipmentPositon: "毛麻仓库",
    equipmentStatus: {
      type: "0",
      value: "正常",
    },
    equipmentResult: "/",
  },
  {
    equipmentName: "磷酸钠盐干粉灭火器",
    equipmentPositon: "民华糖厂",
    equipmentStatus: {
      type: "0",
      value: "正常",
    },
    equipmentResult: "/",
  },
  {
    equipmentName: "消火栓泵",
    equipmentPositon: "烟草仓库",
    equipmentStatus: {
      type: "3",
      value: "异常",
    },
    equipmentResult: "待处理",
  },
];

const config = {
  rotate: 90,
  align: "left",
  verticalAlign: "middle",
  position: "insideBottom",
  distance: 15,
};

const labelOption = {
  rotate: config.rotate,
  align: config.align,
  verticalAlign: config.verticalAlign,
  position: config.position,
  distance: config.distance,
};

const ticketOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["维修", "保养", "巡检"],
    itemWidth: 10,
    itemHeight: 10,
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["设备1", "设备2", "设备3", "设备4", "设备5"],
      axisLabel: {
        fontFamily: "SourceHanSansCN, sans-serif",
        fontSize: 14,
        color: "rgba(189, 198, 216, 1)",
        lineStyle: {
          color: "rgba(192, 206, 231, 0.35)",
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        fontFamily: "SourceHanSansCN, sans-serif",
        fontSize: 14,
        color: "rgba(189, 198, 216, 1)",
        lineStyle: {
          color: "rgba(192, 206, 231, 0.35)",
        },
      },
    },
  ],
  series: [
    {
      name: "维修",
      type: "bar",
      barGap: 0,
      label: labelOption,
      // emphasis: {
      //   focus: 'series'
      // },
      showBackground: true,
      backgroundStyle: {
        color: "rgba(108, 128, 151, 0.2)",
      },
      data: [320, 332, 301, 334, 390],
      barWidth: 8,
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0.1, color: "rgba(59, 185, 212, 0)" },
          { offset: 0, color: "rgba(59, 185, 212, 1)" },
          { offset: 1, color: "rgba(59, 185, 212, 1)" },
        ]),
        // shadowColor: 'rgba(59, 185, 212, 1)',
        // shadowBlur: 0,
        // shadowOffsetY: 3,
      },
    },
    {
      name: "保养",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290],
      barWidth: 8,
      itemStyle: {
        borderRadius: [2, 2, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0.1, color: "rgba(59, 185, 212, 0)" },
          { offset: 0, color: "rgba(220, 134, 50, 1)" },
          { offset: 1, color: "rgba(220, 134, 50, 1)" },
        ]),
        // shadowColor: 'rgba(220, 134, 50, 1)',
        // shadowBlur: 0,
        // shadowOffsetY: 3,
      },
    },
    {
      name: "巡检",
      type: "bar",
      label: labelOption,
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190],
      barWidth: 8,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0.1, color: "rgba(59, 185, 212, 0)" },
          { offset: 0, color: "rgba(21, 154, 255, 1)" },
          { offset: 1, color: "rgba(21, 154, 255, 1)" },
        ]),
        borderRadius: [2, 2, 0, 0],
        // shadowColor: 'rgba(21, 154, 255, 1)',
        // shadowBlur: 0,
        // shadowOffsetY: 3,
      },
    },
  ],
};

const patrolInspectionOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  series: [
    {
      name: "巡检计划",
      type: "pie",
      radius: ["60%", "70%"],
      avoidLabelOverlap: false,
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80,
      },
      // labelLayout: function (params: any) {
      //   const isLeft = params.labelRect.x < myChart.getWidth() / 2;
      //   const points = params.labelLinePoints;
      //   // Update the end point.
      //   points[2][0] = isLeft
      //     ? params.labelRect.x
      //     : params.labelRect.x + params.labelRect.width;
      //   return {
      //     labelLinePoints: points
      //   };
      // },
      data: [
        {
          value: 200,
          name: "巡检计划",
          itemStyle: {
            color: "rgba(16, 184, 250, 1)",
          },
          label: {
            show: true,
            position: "outside",
            alignTo: "edge",
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            formatter: function (params: any) {
              return "{a|" + params.name + "}\n\n{b|" + params.value + "%}";
            },
            rich: {
              a: {
                color: "rgba(16, 184, 250, 1)",
                fontSize: 14,
                fontFamily: "SourceHanSansCN, sans-serif",
                textAlign: "center",
              },
              b: {
                color: "rgba(16, 184, 250, 1)",
                fontSize: 14,
                fontFamily: "texgyreadventor, sans-serif",
                textAlign: "center",
                textShadowColor: "rgba(102, 225, 223, 0.5)",
                textShadowBlur: 10,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
              },
            },
          },
        },
        {
          value: 10,
          name: "未完成",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
          label: {
            show: true,
            position: "outside",
            formatter: function (params: any) {
              return "{a|" + params.name + "}\n\n{b|" + params.value + "%}";
            },
            rich: {
              a: {
                color: "rgba(34, 217, 137, 1)",
                fontSize: 14,
                fontFamily: "SourceHanSansCN, sans-serif",
                textAlign: "center",
              },
              b: {
                color: "rgba(34, 217, 137, 1)",
                fontSize: 14,
                fontFamily: "texgyreadventor, sans-serif",
                textAlign: "center",
                textShadowColor: "rgba(102, 225, 223, 0.5)",
                textShadowBlur: 10,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
              },
            },
          },
        },
        {
          value: 190,
          name: "已完成",
          itemStyle: {
            color: "rgba(16, 132, 250, 1)",
          },
          label: {
            show: true,
            position: "outside",
            formatter: function (params: any) {
              return "{a|" + params.name + "}\n\n{b|" + params.value + "%}";
            },
            rich: {
              a: {
                color: "rgba(16, 132, 250, 1)",
                fontSize: 14,
                fontFamily: "SourceHanSansCN, sans-serif",
                textAlign: "center",
              },
              b: {
                color: "rgba(16, 132, 250, 1)",
                fontSize: 14,
                fontFamily: "texgyreadventor, sans-serif",
                textAlign: "center",
                textShadowColor: "rgba(102, 225, 223, 0.5)",
                textShadowBlur: 10,
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
              },
            },
          },
        },
      ],
      itemStyle: {
        borderWidth: 2,
        borderType: "solid", // 设置边框样式为实线
        borderColor: "rgba(108, 128, 151, 0.2)",
        emphasis: {
          borderWidth: 0,
        },
      },
    },
    {
      name: "阴影",
      type: "pie",
      radius: ["75%", "80%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(108, 128, 151, 0.2)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxWidth: 138,
      },
      option: {
        series: [
          {
            radius: ["40%", "50%"],
            label: {
              rich: {
                a: {
                  fontSize: 12,
                },
                b: {
                  fontSize: 14,
                },
              },
            },
            emphasis: {
              label: {
                fontSize: 16,
              },
            },
          },
          {
            radius: ["35%", "40%"],
          },
        ],
      },
    },
  ],
};

const equipmentOption1 = {
  title: {
    text: "设备保养计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "设备保养计划",
      type: "pie",
      radius: ["55%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        formatter: function (params: any) {
          return "{a|" + params.name + "}\n\n{b|" + params.value + "%}";
        },
        rich: {
          a: {
            color: "rgba(208, 222, 238, 1)",
            fontSize: 18,
            fontFamily: "SourceHanSansCN, sans-serif",
            textAlign: "center",
          },
          b: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "texgyreadventor, sans-serif",
            textAlign: "center",
            textShadowColor: "rgba(102, 225, 223, 1)",
            textShadowBlur: 10,
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          position: "inside",
          color: "rgba(255, 255, 255, 1)",
          fontSize: 32, // 设置字体大小
          lineHeight: 80,
          fontFamily: "texgyreadventor, sans-serif",
          textShadowColor: "rgba(102, 225, 223, 1)",
          textShadowBlur: 10,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2,
          formatter: "{b}",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 18,
          name: "设备二",
          itemStyle: {
            color: "rgba(21, 99, 255, 1)",
          },
        },
        {
          value: 12,
          name: "设备三",
          itemStyle: {
            color: "rgba(52, 255, 191, 1)",
          },
        },
        {
          value: 34,
          name: "设备一",
          itemStyle: {
            color: "rgba(21, 154, 255, 1)",
          },
        },
        {
          value: 18,
          name: "设备四",
          itemStyle: {
            color: "rgba(102, 225, 223, 1)",
          },
        },
        {
          value: 12,
          name: "设备五",
          itemStyle: {
            color: "rgba(102, 225, 223, 1)",
          },
        },
      ],
      itemStyle: {
        borderWidth: 2,
        borderType: "solid", // 设置边框样式为实线
        borderColor: "rgba(108, 128, 151, 0.2)",
        emphasis: {
          borderWidth: 0,
        },
      },
    },
    {
      name: "阴影",
      type: "pie",
      radius: ["75%", "80%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(108, 128, 151, 0.2)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxWidth: 138,
      },
      option: {
        series: [
          {
            radius: ["40%", "50%"],
            label: {
              rich: {
                a: {
                  fontSize: 12,
                },
                b: {
                  fontSize: 14,
                },
              },
            },
            emphasis: {
              label: {
                fontSize: 16,
              },
            },
          },
          {
            radius: ["35%", "40%"],
          },
        ],
      },
    },
  ],
};

const equipmentOption2 = {
  // graphic: [
  // {
  //   type: 'image',
  //   id: 'logo',
  //   z: 10,
  //   left: 'center',
  //   top: 'center',
  //   style: {
  //     image: '/circle@2x.png',
  //     width: 100,
  //     height: 100
  //   }
  // },
  // }
  // ],
  title: {
    text: "设备维修计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "设备维修计划",
      type: "pie",
      radius: ["55%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderWidth: 3,
        borderType: "solid", // 设置边框样式为实线
        borderColor: "rgba(108, 128, 151, 0.2)",
        emphasis: {
          borderWidth: 0,
        },
      },
      label: {
        show: true,
        position: "center",
        formatter: function (params: any) {
          return "{a|" + params.name + "}\n\n{b|" + params.value + "%}";
        },
        rich: {
          a: {
            color: "rgba(208, 222, 238, 1)",
            fontSize: 18,
            fontFamily: "SourceHanSansCN, sans-serif",
            textAlign: "center",
          },
          b: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "texgyreadventor, sans-serif",
            textAlign: "center",
            textShadowColor: "rgba(102, 225, 223, 1)",
            textShadowBlur: 10,
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          position: "inside",
          color: "rgba(255, 255, 255, 1)",
          fontSize: 32, // 设置字体大小
          lineHeight: 80,
          fontFamily: "texgyreadventor, sans-serif",
          textShadowColor: "rgba(102, 225, 223, 1)",
          textShadowBlur: 10,
          textShadowOffsetX: 2,
          textShadowOffsetY: 2,
          formatter: "{b}",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 18,
          name: "设备三",
          itemStyle: {
            color: "rgba(21, 99, 255, 1)",
          },
        },
        {
          value: 12,
          name: "设备一",
          itemStyle: {
            color: "rgba(52, 255, 191, 1)",
          },
        },
        {
          value: 34,
          name: "设备二",
          itemStyle: {
            color: "rgba(21, 154, 255, 1)",
          },
        },
        {
          value: 18,
          name: "设备四",
          itemStyle: {
            color: "rgba(102, 225, 223, 1)",
          },
        },
        {
          value: 12,
          name: "设备五",
          itemStyle: {
            color: "rgba(102, 225, 223, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      radius: ["75%", "80%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(108, 128, 151, 0.2)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxWidth: 138,
      },
      option: {
        series: [
          {
            radius: ["40%", "50%"],
            label: {
              rich: {
                a: {
                  fontSize: 12,
                },
                b: {
                  fontSize: 14,
                },
              },
            },
            emphasis: {
              label: {
                fontSize: 16,
              },
            },
          },
          {
            radius: ["35%", "40%"],
          },
        ],
      },
    },
  ],
};

const equipmentOption3 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  title: {
    text: "设备检测记录",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
      // fontSize: 14,
    },
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["设备一", "设备二", "设备三", "设备四", "设备五"],
      axisLabel: {
        fontFamily: "SourceHanSansCN, sans-serif",
        fontSize: 14,
        color: "rgba(189, 198, 216, 1)",
        lineStyle: {
          color: "rgba(192, 206, 231, 0.35)",
        },
        // formatter: function (value: any) {
        //   return value.split("$").join("\n");
        // }
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        fontFamily: "SourceHanSansCN, sans-serif",
        fontSize: 14,
        color: "rgba(189, 198, 216, 1)",
        lineStyle: {
          color: "rgba(192, 206, 231, 0.35)",
        },
      },
    },
  ],
  series: [
    {
      name: "次数",
      type: "bar",
      barGap: 0,
      label: labelOption,
      // emphasis: {
      //   focus: 'series'
      // },
      showBackground: true,
      backgroundStyle: {
        color: "rgba(108, 128, 151, 0.2)",
      },
      data: [
        {
          value: 28,
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "rgba(21, 154, 255, 0)" },
              { offset: 0, color: "rgba(21, 154, 255, 1)" },
            ]),
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowBlur: 0,
            shadowOffsetY: 3,
          },
        },
        {
          value: 12,
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "rgba(102, 225, 223, 0)" },
              { offset: 0, color: "rgba(102, 225, 223, 1)" },
            ]),
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowBlur: 0,
            shadowOffsetY: 3,
          },
        },
        {
          value: 16,
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "rgba(208, 222, 238, 0)" },
              { offset: 0, color: "rgba(208, 222, 238, 1)" },
            ]),
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowBlur: 0,
            shadowOffsetY: 3,
          },
        },
        {
          value: 18,
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "rgba(21, 99, 255, 0)" },
              { offset: 0, color: "rgba(21, 99, 255, 1)" },
            ]),
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowBlur: 0,
            shadowOffsetY: 3,
          },
        },
        {
          value: 12,
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 1, color: "rgba(52, 255, 191, 0)" },
              { offset: 0, color: "rgba(52, 255, 191, 1)" },
            ]),
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowBlur: 0,
            shadowOffsetY: 3,
          },
        },
      ],
      barWidth: 8,
    },
  ],
  media: [
    {
      query: {
        maxWidth: 166,
      },
      option: {
        xAxis: [
          {
            axisLabel: {
              fontSize: 8,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              fontSize: 8,
            },
          },
        ],
      },
    },
  ],
};

const assetOption1 = {
  title: {
    text: "资产保养计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
      // fontSize: 14,
    },
  },
  series: [
    {
      name: "资产保养计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      silent: true,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "98%";
        },
        emphasis: {
          label: {
            show: false,
          },
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "资产保养计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
          // position: 'inside',
          // fontSize: 32, // 设置字体大小
          // lineHeight: 80,
          // fontFamily: 'SourceHanSansCN, sans-serif',
          // textShadowColor: 'rgba(102, 225, 223, 1)',
          // textShadowBlur: 10,
          // textShadowOffsetX: 2,
          // textShadowOffsetY: 2,
          // formatter: '{b}',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "98%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const assetOption2 = {
  title: {
    text: "资产检测记录",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "资产检测记录",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      silent: true,
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "90%";
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "资产检测记录",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "90%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const assetOption3 = {
  title: {
    text: "设备保养计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "设备保养计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      silent: true,
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "90%";
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "设备保养计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "90%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const assetOption4 = {
  title: {
    text: "资产维修计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "资产维修计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      silent: true,
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "80%";
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "资产维修计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "80%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const assetOption5 = {
  title: {
    text: "资产到期",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "资产到期",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      silent: true,
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "10%";
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "资产到期",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "10%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const assetOption6 = {
  title: {
    text: "设备维修计划",
    textAlign: "center",
    left: "50%",
    textStyle: {
      fontFamily: "YouSheBiaoTi, sans-serif",
      color: "#fff",
    },
  },
  series: [
    {
      name: "设备维修计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      silent: true,
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: "center",
        fontSize: 40, // 设置字体大小
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "texgyreadventor, sans-serif",
        textShadowColor: "rgba(102, 225, 223, 1)",
        textShadowBlur: 10,
        textShadowOffsetX: 2,
        textShadowOffsetY: 2,
        formatter: function (params: any) {
          return "85%";
        },
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "",
          itemStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
      ],
    },
    {
      name: "设备维修计划",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      startAngle: 350,
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 24,
          name: "资产四",
          itemStyle: {
            color: "rgba(34, 138, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影一",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产三",
          itemStyle: {
            color: "rgba(34, 217, 137, 1)",
          },
        },
        {
          value: 1,
          name: "阴影二",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产二",
          itemStyle: {
            color: "rgba(240, 243, 247, 1)",
          },
        },
        {
          value: 1,
          name: "阴影三",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
        {
          value: 24,
          name: "资产一",
          itemStyle: {
            color: "rgba(34, 193, 217, 1)",
          },
        },
        {
          value: 1,
          name: "阴影四",
          itemStyle: {
            color: "rgba(27, 39, 51, 1)",
          },
        },
      ],
    },
    {
      name: "阴影",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["42%", "48%"],
      // top: '5%',
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: "阴影",
          itemStyle: {
            color: "rgba(19, 87, 122, 0.3)",
          },
        },
      ],
    },
  ],
  media: [
    {
      query: {
        maxHeight: 100,
      },
      option: {
        series: [
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
            label: {
              fontSize: 18, // 设置字体大小
            },
            emphasis: {
              label: {
                fontSize: 24, // 设置字体大小
              },
            },
          },
          {
            center: ["50%", "60%"],
            radius: ["30%", "60%"],
          },
          {
            center: ["50%", "60%"],
            radius: ["32%", "38%"],
          },
        ],
      },
    },
    {
      query: {
        minHeight: 230,
      },
      option: {
        title: {
          textStyle: {
            fontSize: 35,
          },
        },
        series: [
          {
            label: {
              show: true,
              position: "center",
              fontSize: 60, // 设置字体大小
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "texgyreadventor, sans-serif",
              textShadowColor: "rgba(102, 225, 223, 1)",
              textShadowBlur: 10,
              textShadowOffsetX: 2,
              textShadowOffsetY: 2,
              formatter: function (params: any) {
                return "85%";
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          },
        ],
      },
    },
  ],
};

const internetOfThingsOption1 = {
  graphic: [
    {
      type: "image",
      transition: ["x", "y"],
      id: "logo",
      z: 10,
      left: "center",
      top: "center",
      style: {
        image: "/data_tempture@2x.png",
        width: 28,
        height: 40,
      },
    },
  ],
  grid: {
    top: 0,
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 60,
      title: {
        text: "温度预警",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        // color: 'rgba(255, 87, 51, 1)',
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 38,
          name: "温度报警",
        },
      ],
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 0.5097,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(244, 135, 2, 0.8)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, 0],
        formatter: ["{a|{value}}", "{b|℃}"].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 58,
      },
      option: {
        series: [
          {
            // center: ['50%', '30%'],
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        graphic: [
          {
            type: "image",
            transition: ["x", "y"],
            id: "logo",
            z: 10,
            left: "center",
            top: "center",
            style: {
              image: "/data_tempture@2x.png",
              width: 65,
              height: 92.5,
            },
          },
        ],
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 50,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const internetOfThingsOption2 = {
  graphic: [
    {
      type: "image",
      transition: ["x", "y"],
      id: "logo",
      z: 10,
      left: "center",
      top: "center",
      style: {
        image: "/data_water@2x.png",
        width: 36,
        height: 36,
      },
    },
  ],
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 20,
      title: {
        text: "湿度监测",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 10,
          name: "湿度监测",
        },
      ],
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, 0],
        formatter: ["{a|{value}}", "{b|%}"].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
      pointer: {
        show: false,
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 96,
      },
      option: {
        series: [
          {
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        graphic: [
          {
            type: "image",
            transition: ["x", "y"],
            id: "logo",
            z: 10,
            left: "center",
            top: "center",
            style: {
              image: "/data_water@2x.png",
              width: 85,
              height: 85,
            },
          },
        ],
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 50,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const internetOfThingsOption3 = {
  graphic: [
    {
      type: "image",
      transition: ["x", "y"],
      id: "logo",
      z: 10,
      left: "center",
      top: "center",
      style: {
        image: "/data_qiya@2x.png",
        width: 34,
        height: 36,
      },
    },
  ],
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 76,
      title: {
        text: "气压报警",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 38,
          name: "气压报警",
        },
      ],
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, 0],
        formatter: ["{a|{value}}", "{b|Kpa}"].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
      pointer: {
        show: false,
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 96,
      },
      option: {
        series: [
          {
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        graphic: [
          {
            type: "image",
            transition: ["x", "y"],
            id: "logo",
            z: 10,
            left: "center",
            top: "center",
            style: {
              image: "/data_qiya@2x.png",
              width: 80,
              height: 82.5,
            },
          },
        ],
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 50,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const internetOfThingsOption4 = {
  graphic: [
    {
      type: "image",
      transition: ["x", "y"],
      id: "logo",
      z: 10,
      left: "center",
      top: "center",
      style: {
        image: "/data_jingai@2x.png",
        width: 36,
        height: 36,
      },
    },
  ],
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 20,
      title: {
        text: "井盖倾斜",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        // color: 'rgba(255, 87, 51, 1)',
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 0,
          name: "井盖倾斜",
        },
      ],
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 0.5097,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
              {
                offset: 0,
                color: "rgba(244, 135, 2, 0.8)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, 0],
        formatter: ["{a|{value}}", "{b|个}"].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
      pointer: {
        show: false,
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 96,
      },
      option: {
        series: [
          {
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        graphic: [
          {
            type: "image",
            transition: ["x", "y"],
            id: "logo",
            z: 10,
            left: "center",
            top: "center",
            style: {
              image: "/data_jingai@2x.png",
              width: 85,
              height: 85,
            },
          },
        ],
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 50,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const internetOfThingsOption5 = {
  graphic: [
    {
      type: "image",
      transition: ["x", "y"],
      id: "logo",
      z: 10,
      left: "center",
      top: "center",
      style: {
        image: "/data_jingnei@2x.png",
        width: 28,
        height: 33,
      },
    },
  ],
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 2,
      title: {
        text: "水位告警",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        // color: 'rgba(255, 87, 51, 1)',
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 1,
          name: "水位告警",
        },
      ],
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 0.5097,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(244, 135, 2, 0.8)", // 100% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, 0],
        formatter: ["{a|{value}}", "{b|处}"].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            // color: 'rgba(255, 87, 51, 1)',
            color: "rgba(255, 255, 255, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
      pointer: {
        show: false,
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 96,
      },
      option: {
        series: [
          {
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        graphic: [
          {
            type: "image",
            transition: ["x", "y"],
            id: "logo",
            z: 10,
            left: "center",
            top: "center",
            style: {
              image: "/data_jingnei@2x.png",
              width: 65,
              height: 77.5,
            },
          },
        ],
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 50,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
const internetOfThingsOption9 = {
  series: [
    {
      name: "Pressure",
      type: "gauge",
      min: 0,
      max: 60,
      title: {
        text: "更多",
        textAlign: "center",
        offsetCenter: [0, "100%"],
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "SourceHanSansCN, sans-serif",
      },
      data: [
        {
          value: 30,
          name: "更多",
        },
      ],
      progress: {
        show: true,
        roundCap: true,
        width: 10,
        itemStyle: {
          // 设置线性渐变（0%,rgba(21, 131, 202, 1)，50.97%,rgba(45, 198, 199, 1)，100%,rgba(244, 135, 2, 0.8)）
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(21, 131, 202, 1)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(45, 198, 199, 1)", // 50.97% 处的颜色
              },
            ],
          },
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        offsetCenter: [0, "-20%"],
        formatter: [
          "{a|...}",
          // '{a|{value}}',
          // '{b|℃}'
        ].join(""),
        // value加上后缀℃，value字号为14px，value字体为SourceHanSansCN，value字体颜色为rgba(255, 87, 51, 1),摄氏度符号字号为10px，摄氏度符号字体为SourceHanSansCN，摄氏度符号字体颜色为rgba(255, 87, 51, 1)
        rich: {
          a: {
            color: "rgba(255, 255, 255, 1)",
            fontSize: 36,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
          b: {
            color: "rgba(255, 87, 51, 1)",
            fontSize: 16,
            fontFamily: "SourceHanSansCN, sans-serif",
          },
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 8, // 设置条形宽度
          opacity: 0.2,
        },
      },
      axisLabel: {
        show: false,
        fontSize: 12, // 设置文字大小
      },
      pointer: {
        show: false,
      },
    },
  ],
  media: [
    {
      query: {
        maxHeight: 96,
      },
      option: {
        series: [
          {
            detail: {
              rich: {
                a: {
                  fontSize: 20,
                },
                b: {
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
    {
      query: {
        minHeight: 202,
      },
      option: {
        series: [
          {
            // center: ['50%', '30%'],
            title: {
              fontSize: 32,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16, // 设置条形宽度
                opacity: 0.2,
              },
            },
            detail: {
              rich: {
                a: {
                  fontSize: 90,
                },
                b: {
                  fontSize: 40,
                },
              },
            },
          },
        ],
      },
    },
  ],
};

export {
  carData,
  firefightingData,
  ticketOption,
  patrolInspectionOption,
  equipmentOption1,
  equipmentOption2,
  equipmentOption3,
  assetOption1,
  assetOption2,
  assetOption3,
  assetOption4,
  assetOption5,
  assetOption6,
  internetOfThingsOption1,
  internetOfThingsOption2,
  internetOfThingsOption3,
  internetOfThingsOption4,
  internetOfThingsOption5,
  internetOfThingsOption9,
};
