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

export default function IoTDevice({}: Props) {
  const [state,setState] = useState(false)
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

  useEffect(() => {
    // @ts-ignore 设置分辨率
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
        window.ue.interface.broadcast("PSAPI", JSON.stringify(setNormalPos));

        // @ts-ignore 修改建筑物大小
        window.ue.interface.broadcast(
          "PSAPI",
          JSON.stringify(changeBuildingSize)
        );

        // @ts-ignore 显示所有建筑物
        window.ue.interface.broadcast("PSAPI", JSON.stringify(setBuildingPos));

        // @ts-ignore 设置建筑物可点击
        window.ue.interface.broadcast("PSAPI", JSON.stringify(setBuildClicked));

        // @ts-ignore 设置点位大小
        window.ue.interface.broadcast("PSAPI", JSON.stringify(setPosSize));

        // @ts-ignore 设置显示距离
        window.ue.interface.broadcast("PSAPI", JSON.stringify(setDistance));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {
        state && <>
        {/* list */}
        <div className='w-[744px] h-[476px] bg-[rgba(10,32,41,0.6)] border-2 border-solid border-[rgba(130,197,249,1)] font-medium p-8'>
    {/* list title */}
    <ul className='flex text-[24px] leading-[36px] justify-between items-center'>
      <li className='text-[#E6E6E6] flex-1'>数据类型</li>
      <li className='text-[#8CF1EB] w-[120px] flex-1 text-center'>正常</li>
      <li className='text-[#FE5F7D] flex items-center flex-1 text-right justify-end'>
        {abnormalIcon}
        <span className='ml-2'>异常</span>
      </li>
    </ul>

    <div className='h-[2px] bg-[rgba(230,230,230,0.4)] my-8' />

    {/* list content */}
    <ul className='space-y-10'>
      {list.map((item) => {
        return (
          <li
            className='flex justify-between items-center text-[24px] leading-[36px]'
            key={item.name}
          >
            <div className='text-[#E6E6E6] text-[28px] leading-[42px] flex flex-1'>
              {item.icon}
              <span className='ml-2'>{item.name}</span>
            </div>
            <div className='text-[#8CF1EB] text-center flex-1'>
              {item.normalValue}
            </div>
            <div className='text-[#FE5F7D] text-right flex-1'>
              {item.abnormalValue}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
  </>
      }

      {/* title */}
      <div className='mt-8 cursor-pointer' onClick={()=> setState(!state)} >
        <div  className='text-[40px] leading-[60px] font-bold text-center'>
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
