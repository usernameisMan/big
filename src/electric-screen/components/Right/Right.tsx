import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import d11 from "./svgs/d11.svg"
import d12 from "./svgs/d12.svg"
import d13 from "./svgs/d13.svg"
import d21 from "./svgs/d21.svg"
import d22 from "./svgs/d22.svg"
import d23 from "./svgs/d23.svg"
import f10 from "./svgs/fu10.svg"
import solid_smallnote from "./svgs/fa-solid_smallnote.svg"
import solid_tools from "./svgs/fa-solid_tools.svg"
import { Progress, Space } from 'antd';
import { useState } from 'react';
import Today from './Today/Today';

type Props = {};

export default function Right({ }: Props) {
  const [temperature, setTemperature] = useState(-10)

  const [deviceDatas, setDeviceData] = useState([
    {
      img: d11,
      tools: solid_smallnote,
      name: "新建检测数",
      number: 85
    },
    {
      img: d12,
      tools: solid_smallnote,
      name: "正在检测数",
      number: 90,
      style: {
        marginLeft: '70px',
        marginRight: '70px',
      }
    },
    {
      img: d13,
      tools: solid_smallnote,
      name: "已完成检测数",
      number: 95
    },
    {
      img: d21,
      tools: solid_tools,
      name: "新建保养数",
      number: 61,
      style: {
        marginTop: '32px'
      }
    },
    {
      img: d22,
      tools: solid_tools,
      name: "正在保养数",
      number: 78,
      style: {
        marginTop: '32px',
        marginLeft: '70px',
        marginRight: '70px',
      }
    },
    {
      img: d23,
      tools: solid_tools,
      name: "已保养数",
      number: 84,
      style: {
        marginTop: '32px',
      }
    }
  ])

  return <Wrapper>
    <SectionTitle>设备数据</SectionTitle>
    <div className='deviceData'>

      {
        deviceDatas.map(({ img, tools, style, name, number }) =>
          <div className='chunk' style={style || {}}>
            <img className='icon' src={img} />
            <div className='content'>
              <div>
                <img className='tools' src={tools} alt="" />
                {name}
              </div>
              <div>
                <span className='number'>{number}</span>
                <span>个</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
    <SectionTitle>当日设备告警数（0-100）</SectionTitle>
    <Today />
    <SectionTitle>物联网设备告警</SectionTitle>
    <div className='things'>
      <div className='progressBox'>
        {temperature <= 0 && <img src={f10} alt="" />}
        {temperature >= 1 && <img src={f10} alt="" />}
        {temperature >= 30 && <img src={f10} alt="" />}
        {temperature >= 40 && <img src={f10} alt="" />}
        <span className='text'>温度报警</span>
      </div>
      <div className='progressBox' style={{ margin: '0 284px 0 284px' }}>
        <Progress size={[144, 144]} className='progress' strokeWidth={10} strokeColor={"#8CF1EB"} type="circle" percent={75} format={(percent) => <>{percent}<span className='unit'> %</span></>} />
        <span className='text'>湿度监测</span>
      </div>
      <div className='progressBox'>
        <Progress size={[144, 144]} className='progress' strokeWidth={10} type="circle" strokeColor={"#8CF1EB"} percent={75} format={(percent) => <>{percent}<span className='unit'> Kpa</span></>} />
        <span className='text'>气压报警</span>
      </div>
      <div className='progressBox'>
        <Progress size={[144, 144]} className='progress' strokeWidth={10} type="circle" strokeColor={"#8CF1EB"} percent={75} format={(percent) => <>{percent}<span className='unit'> 个</span></>} />
        <span className='text'>井盖倾斜</span>
      </div>
      <div className='progressBox' style={{ margin: '0 284px 0 284px' }}>
        <Progress size={[144, 144]} className='progress' strokeWidth={10} type="circle" strokeColor={"#8CF1EB"} percent={75} format={(percent) => <>{percent}<span className='unit'> 处</span></>} />
        <span className='text'>水位告警</span>
      </div>
      <div className='progressBox' >
        <Progress size={[144, 144]} className='progress' strokeWidth={10} type="circle" strokeColor={"#FFD977"} percent={3} format={(percent) => <>{percent}<span className='unit'> 处</span></>} />
        <span className='text'>垃圾桶满溢</span>
      </div>
    </div>
    <SectionTitle>消防数据</SectionTitle>
    <div className='fire'></div>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 1000px;
  height: 2360px;
  margin-right:72px;

  .deviceData {
    margin-top:40px;
    margin-bottom: 40px;
    width: 1050px;
    height: 248px;
    top: 100px;
    gap: 32px;
    .chunk {
      display: inline-block;
      width: 296px;
      height: 108px;
    }
    .icon {
      vertical-align: top;
      width: 96px;
      height: 96px;
      border-radius: 20px;
      border: 4px;
      display: inline-block;
    }
    .content {
      color: #E6E6E6;
      font-family: Source Han Sans CN;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
      display: inline-block;
      margin-left:24px;
      .tools {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .number {
        font-family: Source Han Sans CN;
      font-size: 48px;
      font-weight: 500;
      line-height: 72px;
      letter-spacing: 0em;
      text-align: left;
        color: #FFFFFF;
        margin-right:8px;
      }
    }
  }

  .today {}

  .things {
    margin-top:40px;
    .progressBox {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      margin-bottom: 96px;
    }
    .text {
      top:160px;
      left:22px;
      position:absolute;
      display: block;
      //styleName: 正文;
      font-family: Source Han Sans CN;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: center;
      
    }
    .progress {
      .ant-progress-text {
        font-family: Source Han Sans CN;
        font-size: 40px;
        font-weight: 500;
        line-height: 60px;
        letter-spacing: 0em;
        color: #ffffff;
      }
      .unit {
        font-family: Source Han Sans CN;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        
      }
    }
  }

  .fire {}
`