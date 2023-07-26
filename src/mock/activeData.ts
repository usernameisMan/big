const assetData = [
  {
    name: "灯类",
    normal: 600,
    abnormal: 0,
    posInfo: ["34", "35", "4", "20", "25"],
  },
  {
    name: "椅子类",
    normal: 10,
    abnormal: 0,
    posInfo: ["38", "39", "4", "20", "25"],
  },
  {
    name: "标牌",
    normal: 600,
    abnormal: 0,
    posInfo: ["29", "32", "4", "20", "25"],
  },
  {
    name: "配电箱类",
    normal: 10,
    abnormal: 0,
    posInfo: ["33", "4", "20", "25"],
  },
  {
    name: "栏杆扶手类",
    normal: 2,
    abnormal: 0,
    posInfo: ["40", "4", "20", "25"],
  },
  {
    name: "废物箱类",
    normal: 1,
    abnormal: 0,
    posInfo: ["28", "4", "20", "25"],
  },
  {
    name: "井盖类",
    normal: 1,
    abnormal: 0,
    posInfo: ["31", "50", "51", "20", "25"],
  },
  {
    name: "其他设施",
    normal: 1,
    abnormal: 0,
    posInfo: ["36", "37", "4", "20", "25"],
  },
  {
    name: "园艺草类",
    normal: 1,
    abnormal: 0,
    posInfo: ["41", "42", "4", "20", "25"],
  },
  {
    name: "乔木类",
    normal: 1,
    abnormal: 0,
    posInfo: ["45", "4", "20", "25"],
  },
  {
    name: "绿篱、灌木类",
    normal: 1,
    abnormal: 0,
    posInfo: ["43", "44", "46", "48", "4", "20", "25"],
  },
];

const iotData = [
  {
    iotType: "井盖",
    normal: 600,
    abnormal: 1,
    posInfo: ["20", "25"],
  },
  {
    iotType: "垃圾桶",
    normal: 200,
    abnormal: 1,
    posInfo: ["20", "25"],
  },
  {
    iotType: "车辆定位",
    normal: 10,
    abnormal: 1,
    posInfo: ["29", "20", "25"],
  },
  {
    iotType: "防汛",
    normal: 10,
    abnormal: 1,
    posInfo: ["54", "20", "25"],
  },
  {
    iotType: "小型气象站",
    normal: 1,
    abnormal: 1,
    posInfo: ["47", "25"],
  },
  {
    iotType: "消防",
    normal: 1,
    abnormal: 1,
    posInfo: ["52", "53", "20"],
  },
];

const allPos = [
  {
    id: "1",
    type: "TrashCan_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "2",
    type: "CarPositioning_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "3",
    type: "ServiceCenter_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "4",
    type: "ManholeCover_Unselect_E",
    group: "1001",
    state: "0",
  },
  {
    id: "5",
    type: "TrafficPoliceInformation_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "6",
    type: "Substation_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "7",
    type: "StreetLamp_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "8",
    type: "StreetLamp_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "9",
    type: "Other_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "10",
    type: "Other_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "11",
    type: "Chair_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "12",
    type: "Chair_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "13",
    type: "Handrail_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "14",
    type: "ArtGrass_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "15",
    type: "ArtGrass_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "16",
    type: "ArtGrass_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "17",
    type: "ArtGrass_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "18",
    type: "ArtGrass_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "19",
    type: "Fence_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "20",
    type: "WeatheStation_Unselect_E",
    group: "1001",
    state: "0",
  },
  {
    id: "21",
    type: "Fence_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "22",
    type: "Handrail_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "23",
    type: "ManholeCover_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "24",
    type: "ManholeCover_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "25",
    type: "FireFighting_Unselect_E",
    group: "1001",
    state: "0",
  },
  {
    id: "26",
    type: "FireFighting_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "27",
    type: "WaterLevel_Unselect",
    group: "1001",
    state: "0",
  },
  {
    id: "28",
    type: "TrashCan_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "29",
    type: "CarPositioning_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "30",
    type: "ServiceCenter_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "31",
    type: "ManholeCover_Select_E",
    group: "1001",
    state: "0",
  },
  {
    id: "32",
    type: "TrafficPoliceInformation_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "33",
    type: "Substation_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "34",
    type: "StreetLamp_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "35",
    type: "StreetLamp_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "36",
    type: "Other_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "37",
    type: "Other_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "38",
    type: "Chair_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "39",
    type: "Chair_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "40",
    type: "Handrail_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "41",
    type: "ArtGrass_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "42",
    type: "ArtGrass_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "43",
    type: "ArtGrass_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "44",
    type: "ArtGrass_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "45",
    type: "ArtGrass_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "46",
    type: "Fence_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "47",
    type: "WeatheStation_Select_E",
    group: "1001",
    state: "0",
  },
  {
    id: "48",
    type: "Fence_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "49",
    type: "Handrail_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "50",
    type: "ManholeCover_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "51",
    type: "ManholeCover_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "52",
    type: "FireFighting_Select_E",
    group: "1001",
    state: "0",
  },
  {
    id: "53",
    type: "FireFighting_Select",
    group: "1001",
    state: "0",
  },
  {
    id: "54",
    type: "WaterLevel_Select",
    group: "1001",
    state: "0",
  },
];

const pruductIotData = [
  {
    iotType: "车辆定位",
    normal: 10,
    abnormal: 1,
    posInfo: ["6", "2", "3", "10"],
  },
  {
    iotType: "防汛",
    normal: 10,
    abnormal: 1,
    posInfo: ["10", "2", "3"],
  },
  {
    iotType: "小型气象站",
    normal: 1,
    abnormal: 1,
    posInfo: ["7", "3", "10"],
  },
  {
    iotType: "消防",
    normal: 1,
    abnormal: 1,
    posInfo: ["8", "2", "10"],
  },
];

const pruductPos: any[] = [
  // {
  //   id: "1",
  //   type: "CarPositioning_Unselect",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "车辆出入口标牌",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "绿之丘",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.538775",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.254539",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: {
  //       lat: "31.25665567729493",
  //       lon: "121.53447349734748",
  //       alt: "0",
  //     },
  //   },
  // },
  // {
  //   id: "2",
  //   type: "WeatheStation_Unselect_E",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "模拟气象站",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "绿之丘",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.53676",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.252917",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: {
  //       lat: "31.255029483688546",
  //       lon: "121.53245260949325",
  //       alt: "0",
  //     },
  //   },
  // },
  // {
  //   id: "3",
  //   type: "FireFighting_Unselect_E",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "消防1",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "明华糖仓",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5357403",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2569368",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2569368", lon: "121.5357403", alt: "0" },
  //   },
  // },
  // {
  //   id: "4",
  //   type: "FireFighting_Unselect",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "消防2",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "明华糖仓",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5357403",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2569368",
  //     },
  //     {
  //       key: "设备状态",
  //       value: "正常",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2570485", lon: "121.5356469", alt: "0" },
  //   },
  // },
  // {
  //   id: "5",
  //   type: "WaterLevel_Unselect",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "水位",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "丹东路渡口",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5298060",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2535775",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2535775", lon: "121.5298060", alt: "0" },
  //   },
  // },
  // {
  //   id: "6",
  //   type: "CarPositioning_Select",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "车辆出入口标牌",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "绿之丘",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.538775",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.254539",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: {
  //       lat: "31.25665567729493",
  //       lon: "121.53447349734748",
  //       alt: "0",
  //     },
  //   },
  // },
  // {
  //   id: "7",
  //   type: "WeatheStation_Select_E",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "模拟气象站",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "绿之丘",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.53676",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.252917",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: {
  //       lat: "31.255029483688546",
  //       lon: "121.53245260949325",
  //       alt: "0",
  //     },
  //   },
  // },
  // {
  //   id: "8",
  //   type: "FireFighting_Select_E",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "消防1",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "明华糖仓",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5357403",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2569368",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2569368", lon: "121.5357403", alt: "0" },
  //   },
  // },
  // {
  //   id: "9",
  //   type: "FireFighting_Select",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "消防2",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "明华糖仓",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5357403",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2569368",
  //     },
  //     {
  //       key: "设备状态",
  //       value: "正常",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2570485", lon: "121.5356469", alt: "0" },
  //   },
  // },
  // {
  //   id: "10",
  //   type: "WaterLevel_Select",
  //   group: "equipment",
  //   animType: "0",
  //   clickmusic: "0",
  //   poiMsg: [
  //     {
  //       key: "设备名称",
  //       value: "水位",
  //     },
  //     {
  //       key: "设备地址",
  //       value: "丹东路渡口",
  //     },
  //     {
  //       key: "设备经度",
  //       value: "121.5298060",
  //     },
  //     {
  //       key: "设备纬度",
  //       value: "31.2535775",
  //     },
  //     {
  //       key: "工单状态",
  //       value: "处理中",
  //     },
  //   ],
  //   poiPos: {
  //     CoordinateSystem: "WGS84",
  //     Coordinate: { lat: "31.2535775", lon: "121.5298060", alt: "0" },
  //   },
  // },
];

export { assetData, iotData, allPos, pruductIotData, pruductPos };
