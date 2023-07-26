import axios from "axios";

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @description: set token to request header
 * @param {boolean} isNeedToken
 * @return {*}
 */
const setHeaderToken = (isNeedToken: boolean) => {};

/**
 * @description: get request
 * @param {string} url
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const get = (
  url: string,
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url,
    params,
  });
};

/**
 * @description: post request
 * @param {string} url
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const post = (
  url: string,
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "post",
    url,
    data: params,
  });
};

/**
 * @description: IoT平台-获取设备列表
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const listInternetData = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/Internet/listInternetData",
    data: params,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: IoT平台-获取固定资产设备列表
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const listAssetData = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/Internet/listAssetData",
    data: params,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取天气信息
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getWeatherInfo = (
  params: any = {
    appId: "259797201",
    appSecret: "644a3bec6f8082a637f66bd9",
    city: "杨浦",
    province: "上海",
  },
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "post",
    // url: "/open/weather/info",
    url: "/weather",
    data: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取工单数据
 * @return {*}
 */
export const getTicketInfo = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/ticket/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取巡检数据
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getPatrolInspectionInfo = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/patrolInspection/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取巡检情况
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getPatrolInspectionData = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/patrolInspection/data",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取车辆数据
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getCarInfo = (params: any = {}, isNeedToken: boolean = false) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/Internet/car/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取资产数据
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getAssetsInfo = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/assets/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取资产使用情况
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getAssetsUseData = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/assets/useData",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取物联网设备数据
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getIotInfo = (params: any = {}, isNeedToken: boolean = false) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/Internet/IoT/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @description: 获取消防数据
 * @param {any} params
 * @param {boolean} isNeedToken
 * @return {*}
 */
export const getFirefightingInfo = (
  params: any = {},
  isNeedToken: boolean = false
) => {
  setHeaderToken(isNeedToken);
  return instance({
    method: "get",
    url: "/open/firefighting/info",
    params: params,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
