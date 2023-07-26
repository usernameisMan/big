import {
  abnormalIcon,
  listIcon1,
  listIcon2,
  listIcon3,
  listIcon4,
} from "./svgs";
import line603 from "./images/Line-603.png";
import rectangle from "./images/Rectangle.png";
import {
  addPos,
  changeBuildingSize,
  changePosState,
  changeResolution,
  hiddenAllPos,
  removePos,
  setBuildClicked,
  setDistance,
  setNormalPos,
  setPosSize,
  showAllPos,
} from "../../../../mock/ueInterface";
import { useEffect, useState } from "react";
import { pruductPos } from "../../../../mock/activeData";
import { listInternetData } from "../../../../utils/request";
import { gcj02towgs84 } from "../../../../utils/transformUtil";
import { hiddenBuilding, setBuildingPos } from "../../../../mock/pos";

type Props = {};

let lastButtonPosEle: any = null;
let lastIndex: number = -1;
let lastIotIndex: number = -1;
let activeAssetIndex: number = -1;
let activeIotIndex: number = -1;
let posAddData: any = pruductPos;
let iotData: any = [];
let posStateData: any = [];
let posShowAllData: any = [];
let posHideAllData: any = [];
let removePosData: any = [];

let removePosDetail = {
  id: "",
  type: "",
};

let posDetail = {
  id: "",
  type: "",
  group: "equipment",
  animType: "0",
  clickmusic: "0",
  poiMsg: [],
  poiPos: {
    CoordinateSystem: "WGS84",
    Coordinate: {
      lat: "",
      lon: "",
      alt: "1.0",
    },
  },
};

let posStateDetail = {
  id: "",
  type: "",
  group: "equipment",
  state: "",
};

let iotDetail = {
  iotType: "",
  normal: 0,
  abnormal: 0,
  posInfo: [],
};

export default function IoTDevice({}: Props) {
  const [state, setState] = useState(false);

  const list = [
    {
      name: "井盖",
      icon: listIcon1,
      normalValue: 20,
      abnormalValue: 0,
    },
    {
      name: "垃圾桶",
      icon: listIcon2,
      normalValue: 18,
      abnormalValue: 1,
    },
    {
      name: "水位",
      icon: listIcon3,
      normalValue: 1,
      abnormalValue: 0,
    },
    {
      name: "气象站",
      icon: listIcon4,
      normalValue: 1,
      abnormalValue: 0,
    },
  ];

  const handleIotPosition = (index: number, posIndexArray: string[]) => {
    // TODO: 修改当前激活的按钮样式

    let state: string;

    if (activeIotIndex === index) {
      // 隐藏其它类型
      state = "0";
    } else {
      // 显示所有类型
      state = "1";
    }

    if (state === "1") {
      // @ts-ignore
      window.ue &&
        // @ts-ignore
        window.ue.interface.broadcast("PSAPI", JSON.stringify(showAllPos));
    } else {
      const posInfo = JSON.parse(JSON.stringify(posStateData));
      posInfo.forEach((posItem: any) => {
        // 将posIndexArray中的点位state设置为1
        if (posIndexArray.includes(posItem.id)) {
          posItem.state = "1";
        } else {
          posItem.state = "0";
        }
      });

      changePosState.functionParameters[0].value = posInfo;
      // @ts-ignore
      window.ue &&
        // @ts-ignore
        window.ue.interface.broadcast("PSAPI", JSON.stringify(changePosState));
    }
  };

  /**
   * @description: 处理点位数据
   * @param {any} data
   * @return {*}
   */
  const processPosData = (data: any) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      if (item.name === "YPLJT0017") {
        continue;
      }
      // 取出item中的id、latNs、ingEw、addr、serialNumber添加到posData中
      posDetail.id = (Number(item.id) + 100).toString();

      if (item.type === "wellLid") {
        posDetail.type = "ManholeCover_Unselect";
      }
      if (item.type === "trashCan") {
        posDetail.type = "TrashCan_Unselect";
      }
      if (item.type === "waterLevel") {
        posDetail.type = "WaterLevel_Unselect";
      }
      if (item.type === "meteorologicalStation") {
        posDetail.type = "WeatheStation_Unselect";
      }

      const posArray = gcj02towgs84(item.ingEw, item.latNs);

      posDetail.poiPos.Coordinate.lat = posArray[1].toString();
      posDetail.poiPos.Coordinate.lon = posArray[0].toString();

      const poiMsgDetail = [
        {
          key: "设备名称",
          value: item.name,
        },
        {
          key: "设备地址",
          value: "绿之丘",
        },
        {
          key: "设备经度",
          value: posArray[0].toString(),
        },
        {
          key: "设备纬度",
          value: posArray[1].toString(),
        },
        {
          key: "工单状态",
          value: "处理中",
        },
      ];
      // @ts-ignore
      posDetail.poiMsg = poiMsgDetail;

      // 添加未选择状态到posData中
      posAddData.push(JSON.parse(JSON.stringify(posDetail)));

      posDetail.id = (Number(item.id) + 1000).toString();
      if (item.type === "wellLid") {
        posDetail.type = "ManholeCover_Select";
      }
      if (item.type === "trashCan") {
        posDetail.type = "TrashCan_Select";
      }
      if (item.type === "waterLevel") {
        posDetail.type = "WaterLevel_Select";
      }
      if (item.type === "meteorologicalStation") {
        posDetail.type = "WeatheStation_Select";
      }

      // 添加选择状态到posData中
      posAddData.push(JSON.parse(JSON.stringify(posDetail)));
    }

    processPosState();
  };

  /**
   * @description: 处理点位状态数据
   * @return {*}
   */
  const processPosState = () => {
    iotData = [];
    let manholeCoverIndexArray: string[] = [];
    let trashCanIndexArray: string[] = [];
    let waterLevelIndexArray: string[] = [];
    let weatherStationIndexArray: string[] = [];

    for (let index = 0; index < posAddData.length; index++) {
      const item = posAddData[index];
      posStateDetail.id = item.id;
      posStateDetail.type = item.type;
      removePosDetail.id = item.id;
      removePosDetail.type = item.type;

      removePosData.push(JSON.parse(JSON.stringify(removePosDetail)));

      if (posStateDetail.type.includes("_Unselect")) {
        posStateDetail.state = "1";
      } else {
        posStateDetail.state = "0";
      }

      posStateData.push(JSON.parse(JSON.stringify(posStateDetail)));
      posShowAllData.push(JSON.parse(JSON.stringify(posStateDetail)));

      posStateDetail.state = "0";
      posHideAllData.push(JSON.parse(JSON.stringify(posStateDetail)));

      if (posStateDetail.type === "ManholeCover_Select") {
        manholeCoverIndexArray.push(posStateDetail.id);
      }
      if (posStateDetail.type === "TrashCan_Select") {
        trashCanIndexArray.push(posStateDetail.id);
      }
      if (posStateDetail.type === "WaterLevel_Select") {
        waterLevelIndexArray.push(posStateDetail.id);
      }
      if (posStateDetail.type === "WeatheStation_Select") {
        weatherStationIndexArray.push(posStateDetail.id);
      }
    }

    iotDetail.iotType = "气象站";
    iotDetail.normal = weatherStationIndexArray.length;
    iotDetail.abnormal = 0;
    // @ts-ignore
    iotDetail.posInfo = weatherStationIndexArray;
    // 添加固定点位 2,3
    // @ts-ignore
    iotDetail.posInfo.push("2");
    // @ts-ignore
    iotDetail.posInfo.push("3");
    // @ts-ignore
    iotDetail.posInfo.push("10");
    // 放置于最前
    iotData.unshift(JSON.parse(JSON.stringify(iotDetail)));

    iotDetail.iotType = "水位";
    iotDetail.normal = waterLevelIndexArray.length;
    iotDetail.abnormal = 0;
    // @ts-ignore
    iotDetail.posInfo = waterLevelIndexArray;
    // 添加固定点位 2,3
    // @ts-ignore
    iotDetail.posInfo.push("2");
    // @ts-ignore
    iotDetail.posInfo.push("3");
    // @ts-ignore
    iotDetail.posInfo.push("10");
    // 放置于最前
    iotData.unshift(JSON.parse(JSON.stringify(iotDetail)));

    iotDetail.iotType = "垃圾桶";
    iotDetail.normal = trashCanIndexArray.length;
    iotDetail.abnormal = 0;
    // @ts-ignore
    iotDetail.posInfo = trashCanIndexArray;
    // 添加固定点位 2,3
    // @ts-ignore
    iotDetail.posInfo.push("2");
    // @ts-ignore
    iotDetail.posInfo.push("3");
    // @ts-ignore
    iotDetail.posInfo.push("10");
    // 放置于最前
    iotData.unshift(JSON.parse(JSON.stringify(iotDetail)));

    iotDetail.iotType = "井盖";
    iotDetail.normal = manholeCoverIndexArray.length;
    iotDetail.abnormal = 0;
    // @ts-ignore
    iotDetail.posInfo = manholeCoverIndexArray;
    // @ts-ignore
    iotDetail.posInfo.push("2");
    // @ts-ignore
    iotDetail.posInfo.push("3");
    // @ts-ignore
    iotDetail.posInfo.push("10");
    // 放置于最前
    iotData.unshift(JSON.parse(JSON.stringify(iotDetail)));
  };

  useEffect(() => {
    // @ts-ignore 设置分辨率
    window.ue &&
      // @ts-ignore
      window.ue.interface.broadcast("PSAPI", JSON.stringify(changeResolution));

    addPos.functionParameters[0].value = posAddData;
    setNormalPos.functionParameters[0].value = posStateData;
    showAllPos.functionParameters[0].value = posShowAllData;
    hiddenAllPos.functionParameters[0].value = posHideAllData;
    removePos.functionParameters[0].value = removePosData;

    listInternetData({
      status: 0,
    })
      .then((data) => {
        // 处理数据
        processPosData(data.data);

        // @ts-ignore 显示所有点位
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast("PSAPI", JSON.stringify(setNormalPos));

        // @ts-ignore 修改建筑物大小
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast(
            "PSAPI",
            JSON.stringify(changeBuildingSize)
          );

        // @ts-ignore 显示所有建筑物
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast(
            "PSAPI",
            JSON.stringify(setBuildingPos)
          );

        // @ts-ignore 设置建筑物可点击
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast(
            "PSAPI",
            JSON.stringify(setBuildClicked)
          );

        // @ts-ignore 设置点位大小
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast("PSAPI", JSON.stringify(setPosSize));

        // @ts-ignore 设置显示距离
        window.ue &&
          // @ts-ignore
          window.ue.interface.broadcast("PSAPI", JSON.stringify(setDistance));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {state && (
        <>
          {/* list */}
          <div className="w-[744px] h-[476px] bg-[rgba(10,32,41,0.6)] border-2 border-solid border-[rgba(130,197,249,1)] font-medium p-8">
            {/* list title */}
            <ul className="flex text-[24px] leading-[36px] justify-between items-center">
              <li className="text-[#E6E6E6] flex-1">数据类型</li>
              <li className="text-[#8CF1EB] w-[120px] flex-1 text-center">
                正常
              </li>
              <li className="text-[#FE5F7D] flex items-center flex-1 text-right justify-end">
                {abnormalIcon}
                <span className="ml-2">异常</span>
              </li>
            </ul>

            <div className="h-[2px] bg-[rgba(230,230,230,0.4)] my-8" />

            {/* list content */}
            <ul className="space-y-10">
              {iotData.map((item, index) => {
                return (
                  <li
                    className="flex justify-between items-center text-[24px] leading-[36px]"
                    key={index}
                    onClick={() => handleIotPosition(index, item.posInfo)}
                  >
                    <div className="text-[#E6E6E6] text-[28px] leading-[42px] flex flex-1">
                      {/* {item.icon}
                      <span className="ml-2">{item.name}</span> */}

                      <span className="ml-2">{item.iotType}</span>
                    </div>
                    <div className="text-[#8CF1EB] text-center flex-1">
                      {item.normal}
                    </div>
                    <div className="text-[#FE5F7D] text-right flex-1">
                      {item.abnormal}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {/* title */}
      <div className="mt-8 cursor-pointer" onClick={() => setState(!state)}>
        <div className="text-[40px] leading-[60px] font-bold text-center">
          物联网设备
        </div>
        <div className="w-[1440px] relative translate-x-[-348px] mt-[17px] translate-y-[17px]">
          <div className="flex items-center justify-center absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <img src={rectangle} alt="" />
          </div>
          <div className="absolute left-[0] top-[50%] translate-y-[-50%]">
            <img src={line603} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
