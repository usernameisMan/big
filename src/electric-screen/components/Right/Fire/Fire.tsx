import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import fire1 from '../svgs/fire1.svg'
import fire2 from '../svgs/fire2.svg'
import fire3 from '../svgs/fire3.svg'
import fire4 from '../svgs/fire4.svg'
import line from '../svgs/fireLine.svg'
type Props = {};

export default function Today({ }: Props) {
  const [list, setList] = useState([
    {
      deviceName: "隔膜式气压罐",
      deviceLocaiton: "烟草仓库",
      state:"正常",
      result: "已处理",
    },
    {
      deviceName: "自动排气阀",
      deviceLocaiton: "烟草仓库",
      state:"正常",
      result: "已处理",
    },
    {
      deviceName: "彩色摄像机",
      deviceLocaiton: "毛麻仓库",
      state:"正常",
      result: "已处理",
    },
    {
      deviceName: "门禁控制器",
      deviceLocaiton: "明华糖厂",
      state:"异常",
      result: "未处理",
    },
    {
      deviceName: "门控制板",
      deviceLocaiton: "明华糖厂",
      state:"异常",
      result: "未处理",
    },
    {
      deviceName: "门控制板",
      deviceLocaiton: "明华糖厂",
      state:"异常",
      result: "处理中",
    },
    {
      deviceName: "门控制板",
      deviceLocaiton: "明华糖厂",
      state:"异常",
      result: "处理中",
    },
    {
      deviceName: "门控制板",
      deviceLocaiton: "明华糖厂",
      state:"异常",
      result: "处理中",
    },
  ])
  return <Wrapper>
    <div className="bg"></div>
    <img className="bgLine" src={line}/>
    <div className='tableHeader'>
      <div className='tableHeaderItem'>
        <img src={fire1} alt="" />
        设备名称
      </div>
      <div className='tableHeaderItem' style={{
           position: 'relative',
           right: '-45px',
      }}>
        <img src={fire2} alt="" />
        设备位置
      </div>
      <div className='tableHeaderItem' style={{
           position: 'relative',
           right: '-45px',
      }}>
        <img src={fire3} alt="" />
        保障情况
      </div>
      <div className='tableHeaderItem'>
        <img src={fire4} alt="" />
        处理结果
      </div>
    </div>
    <div className='tableBody'>
     {
      list.map(({deviceLocaiton,deviceName,state,result})=>  <div className='bodyItem'>
      <div className={`bodyLeft`}>
        <div className='name'>{deviceName}</div>
        <div>{deviceLocaiton}</div>
        <div>
          {state !== '正常' && <img src=""/>}
          {state}
        </div>
      </div>
      {
        result == '未处理'  && <div className='result untreated' >{result}</div>
      }
      {
        result == '处理中'  && <div className='result treating' >{result}</div>
      }
      {
        result == '已处理'  && <div className='result treated' >{result}</div>
      }
    </div>)
     }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 648px;
  margin-top:40px;

  .tableBody {
    height: 508px;
    overflow: scroll;
    margin-top: 56px;
    z-index: 2;
    position: relative;
    font-family: Source Han Sans CN;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    .bodyItem {
      z-index: 2;
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-left: 24px;
      margin-bottom: 40px;  
    }
    .result {
      width: 232px;
      height: 58px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      //styleName: 正文;
      font-family: Source Han Sans CN;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
    }

    .untreated {
      color: #ffffff;
      background: #FE5F7D;
      //styleName: 图表小标题;
      font-family: Source Han Sans CN;
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0em;
      text-align: left;    
    } 
    .treating {
      color: #8CF1EB;
      border: 3px solid #8CF1EB
    }
    .bodyLeft {
      display: inline-flex;
      width: 696px;
      justify-content: space-between;
      
      .name {
        white-space: nowrap;
        width: 122px;
        font-family: Source Han Sans CN;
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  .tableHeader {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    margin-right:54px;
    padding-top: 32px;
  } 
  .tableHeaderItem {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: Source Han Sans CN;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    img {
      margin-right: 8px;
    }
  }
  .bgLine {
    position: absolute;
    z-index:1;
    width: 696px;
    left: 24px;
    top:92px;
  }
  .bg {
    position: absolute;
    z-index:1;
    width: 744px;
    height: 648px;
    top: 0;
    left: 0;
    border-radius: 8px;
    background: #0A202999;
  }
`