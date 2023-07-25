import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import d11 from "./svgs/d11.svg"
import d12 from "./svgs/d12.svg"
import d13 from "./svgs/d13.svg"
import d21 from "./svgs/d21.svg"
import d22 from "./svgs/d22.svg"
import d23 from "./svgs/d23.svg"
import solid_smallnote from "./svgs/fa-solid_smallnote.svg"
import solid_tools from "./svgs/fa-solid_tools.svg"

import { useState } from 'react';

type Props = {};

export default function Right({}: Props) {

  const [deviceDatas,setDeviceData] = useState([
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
      deviceDatas.map(({img,tools,style,name, number})=>
      <div className='chunk' style={style || {}}>
        <img className='icon' src={img}/>
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
   <div className='today'></div>
   <SectionTitle>物联网设备告警</SectionTitle>
   <div className='things'></div>
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

  .things {}

  .fire {}
`