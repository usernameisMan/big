/**
 * @description: 设置物体显示距离
 * @return {*}
 */
const setDistance = {
  functionName: "Set3DPoiDistance",
  backFunctionName: "BackSet3DPoiDistance",
  functionParameters: [
    {
      key: "Distance",
      value: {
        Distance: "50000",
      },
    },
  ],
};

/**
 * @description: 设置建筑物是否可以点击
 * @return {*}
 */
const setBuildClicked = {
  functionName: "SetBuildCanClicked",
  backFunctionName: "BackSetBuildCanClicked",
  functionParameters: [
    {
      key: "buildclicked",
      value: "true",
    },
  ],
};

/**
 * @description: 设置分辨率
 * @return {*}
 */
const changeResolution = {
  functionName: "SetResolution",
  backFunctionName: "BackSetResolution",
  functionParameters: [
    {
      key: "ResolutionInfo",
      value: { width: "4800", height: "2700" },
    },
  ],
};

/**
 * @description: 设置建筑物大小
 * @return {*}
 */
const changeBuildingSize = {
  functionName: "Set3DPoiSizeByType",
  backFunctionName: "BackSet3DPoiSizeByType",
  functionParameters: [
    {
      key: "poiInfo",
      value: [
        {
          type: "equipment",
          size: 0.5,
        },
      ],
    },
  ],
};

/**
 * @description: 添加点位
 * @return {*}
 */
let addPos = {
  functionName: "Add3DPoi",
  backFunctionName: "BackAdd3DPoi",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

/**
 * @description: 显示所有未选择点位
 * @return {*}
 */
let setNormalPos = {
  functionName: "Change3DPoiState",
  backFunctionName: "BackChange3DPoiState",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

/**
 * @description: 显示所有点位
 * @return {*}
 */
let showAllPos = {
  functionName: "Change3DPoiState",
  backFunctionName: "BackChange3DPoiState",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

/**
 * @description: 隐藏所有点位
 * @return {*}
 */
let hiddenAllPos = {
  functionName: "Change3DPoiState",
  backFunctionName: "BackChange3DPoiState",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

/**
 * @description: 移除所有点位
 * @return {*}
 */
let removePos = {
  functionName: "Dele3DPoi",
  backFunctionName: "BackDele3DPoi",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

let setPosSize = {
  functionName: "Set3DPoiSizeByType",
  backFunctionName: "BackSet3DPoiSizeByType",
  functionParameters: [
    {
      key: "poiInfo",
      value: [
        {
          type: "equipment_1",
          size: 0.5,
        },
        {
          type: "ManholeCover_Unselect",
          size: 0.5,
        },
        {
          type: "TrashCan_Unselect",
          size: 0.5,
        },
        {
          type: "WaterLevel_Unselect",
          size: 0.5,
        },
        {
          type: "WaterLevel_Unselect",
          size: 0.5,
        },
      ],
    },
  ],
};

/**
 * @description: 设置点位状态
 * @return {*}
 */
let changePosState = {
  functionName: "Change3DPoiState",
  backFunctionName: "BackChange3DPoiState",
  functionParameters: [
    {
      key: "poiInfo",
      value: [],
    },
  ],
};

export {
  addPos,
  showAllPos,
  hiddenAllPos,
  removePos,
  changeResolution,
  changeBuildingSize,
  changePosState,
  setDistance,
  setPosSize,
  setNormalPos,
  setBuildClicked,
};
