interface IWeather {
  // /**
  //  * 空气质量状况无量纲指数
  //  */
  // AQI?: string;
  // /**
  //  * 日间温度
  //  */
  // dayTemp?: string;
  // /**
  //  * 日间天气
  //  */
  // dayWeather?: string;
  // /**
  //  * 夜间温度
  //  */
  // nightTemp?: string;
  // /**
  //  * 夜间天气
  //  */
  // nightWeather?: string;
  date: string;
  lunarDate: string;
  weather: string;
  temperature : string;
  time: string;
  pmConcentration: string;
  weatherImgId: string;
}

interface ITicket {
  /**
   * 待验收工单数量
   */
  pendingAcceptance: number;
  /**
   * 待派工单数量
   */
  pendingAssignment: number;
  /**
   * 待确认工单数量
   */
  pendingConfirmation: number;
  /**
   * 待处理工单数量
   */
  pendingProcessing: number;
  /**
   * 已处理工单数量
   */
  processed: number;
  /**
   * 累计数量
   */
  total: number;
  /**
   * 未完成工单数量
   */
  unfinished: number;
}

interface IPatrolInspection {
  /**
   * 已完成数量
   */
  finished: number;
  /**
   * 累计数量
   */
  total: number;
  /**
   * 未完成数量
   */
  unfinished: number;
}

interface IPatrolInspectionData {
  /**
   * 发现异常数量
   */
  foundAbnormality: number;
  /**
   * 待整改数量
   */
  pendingRectification: number;
  /**
   * 已整改数量
   */
  rectified: number;
  /**
   * 共检查数量
   */
  total: number;
}

interface ICarPark {
  /**
   * 停车场名称
   */
  parkinglot: string;
  /**
   * 空闲车位数量
   */
  parkingSpace: number;
}

interface IAssetInspection {
  /**
   * 资产预警占比(0~100%)
   */
  assetEarlyWarning: string;
  /**
   * 资产检测记录占比(0~100%)
   */
  assetInspectionRecord: string;
  /**
   * 资产保养计划占比(0~100%)
   */
  assetMaintenancePlan: string;
  /**
   * 资产维修计划占比(0~100%)
   */
  assetRepairPlan: string;
  /**
   * 设备保养计划占比(0~100%)
   */
  equipmentMaintenancePlan: string;
  /**
   * 设备维修计划占比(0~100%)
   */
  equipmentRepairPlan: string;
}

interface IAssetInspectionData {
  /**
   * 资产数量
   */
  assetCount: number;
  /**
   * 资产名称
   */
  assetName: string;
}

interface IIoT {
  /**
   * 气压(Kpa)
   */
  airPressure: string;
  /**
   * 湿度(%)
   */
  humidity: string;
  /**
   * 温度(℃)
   */
  temperature: string;
  /**
   * 水位告警数量(个) (与地图水位告警数量对应)
   */
  waterLevel: string;
  /**
   * 井盖倾斜(个) (与地图异常井盖数量对应)
   */
  wellCoverTilt: string;
}

interface IFirefighting {
  /**
   * 异常设备id数组
   */
  abnormalIds: string[];
  /**
   * 设备名称
   */
  name: string;
  /**
   * 设备位置
   */
  position: string;
  /**
   * 处理结果(0未处理 1已处理)
   */
  processingResult: string;
  /**
   * 保障情况(0异常 1正常)
   */
  status: string;
}

interface IIoTAsset {
  /**
   * 设备地址
   */
  addr: string;
  /**
   * 高度
   */
  alt: string;
  /**
   * 设备id
   */
  id: string;
  /**
   * 经度
   */
  ingEw: string;
  /**
   * 纬度
   */
  latNs: string;
  /**
   * 设备名称
   */
  name: string;
  /**
   * 设备状态(0异常 1正常)
   */
  status: number;
  /**
   * 设备类别(目前有井盖、垃圾桶、车辆定位、防汛、小型气象站、消防))
   */
  type: string;
}

interface IFixedAsset {
  assetsInfo: IAssetsInfo[];
  /**
   * 资产所属建筑物
   */
  buildingTag: string;
}

interface IAssetsInfo {
  /**
   * 异常数量
   */
  abnormal: string;
  /**
   * 资产类别(标牌、灯类、椅子类、配电箱类、园艺草类、乔木类、绿篱灌木类、栏杆扶手类、废物箱类、井盖类、其它设施)
   */
  assetType: string;
  /**
   * 正常数量
   */
  normal: string;
}

export type {
  IWeather,
  ITicket,
  IPatrolInspection,
  IPatrolInspectionData,
  ICarPark,
  IAssetInspection,
  IAssetInspectionData,
  IIoT,
  IFirefighting,
  IIoTAsset,
  IFixedAsset,
};
