import styled from "styled-components";
import AutoAdjust from "../packages";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import bg from './bg.png';
import logo from './logo.png';
import top_center from './top_center.png';
import top_left from './top_left.png';
import top_right from './top_right.png';
import top_right_top from './top_right_top.png';
import top_left_top from './top_left_top.png';
import daihuikuan from './daihuikuan.png';
import shuzhihua from './shuzhihua.png';
import weather from './weather.png';
import a1 from './a1.png';
import a2 from './a2.png';
import b1 from './b1.png';
import b2 from './b2.png';
import c1 from './c1.png';
import modalbg from './modalbg.png'
import contentbg from './contentbg.png'
import a1_1 from './chengse.png';
import a1_2 from './1_2.png';
import a2_1 from './lanse.png';
import a2_2 from './2_2.png';
import a3_1 from './chengse.png';
import a4_1 from './hongse.png';
import a4_2 from './4_2.png';
import a5_1 from './chengse.png';
import a6_1 from './lvse.png';
import a6_2 from './6_2.png';
import Date from '../Date';
import select from './select.png';
import selectIcon from './selectIcon.png';
import modalbtn1 from './modalbtn1.png';
import modalbtn2 from './modalbtn2.png';
import modalbtn3 from './modalbtn3.png';
import contentbtn1b from './contentbtn1b.png';
import contentbtn2b from './contentbtn2b.png';
import contentbtn3b from './contentbtn3b.png';
import contentbtn4b from './contentbtn4b.png';
import contentbtn5b from './contentbtn5b.png';
import contentbtn6b from './contentbtn6b.png';
import contentbtn7b from './contentbtn7b.png';
import contentbtn8b from './contentbtn8b.png';
import contentbtn9b from './contentbtn9b.png';

import contentbtn1 from './contentbtn1.png';
import contentbtn2 from './contentbtn2.png';
import contentbtn3 from './contentbtn3.png';
import contentbtn4 from './contentbtn4.png';
import contentbtn5 from './contentbtn5.png';
import contentbtn6 from './contentbtn6.png';
import contentbtn7 from './contentbtn7.png';
import contentbtn8 from './contentbtn8.png';
import contentbtn9 from './contentbtn9.png';


import boxdzbl from './boxdzbl.png';
import boxbg from './boxbg.png';
import boxdrg from './boxdrg.png';
import boxhead from './boxhead.png';
import boxname from './boxname.png';
import boxshuzhihua from './boxshuzhihua.png';
import boxtimeIcon from './boxtimeIcon.png';
import boxline from './line.png';

import modalfan from './modalfan.png';
import loadinbg from './loadinbg.png';
import modalx from './modalx.png';
import modalzen from './modalzen.png';

export default () => {
  const [loading, setLoading] = useState(true);
  const [currentModal, setCurrentModal] = useState(1);
  
  const [detail, setDetail] = useState(false);
  const [current,setCurrent] = useState(1)
  const [option,setOption] = useState('2023年项目')
  const [selectOpen,setSelectOpen] = useState(false)
  const options = [
    {
      value: '2023',
      lable: '2023年项目'
    },
    {
      value: '2022',
      lable: '2022年项目'
    },
  ]
  setTimeout(() => {
      setLoading(false)
  }, 2000);
  useEffect(() => {
    new AutoAdjust({
      querySelector: ".big-screen1",
    });
  }, []);

  const Alist =  [
    {
      money: '500,000,000',
      text: '待回款',
      icon: a1,
      icon2: a2,
      style:{
        color: 'color: rgba(255, 103, 20, 1);'
      }
    },
    {
      money: '89,000,000',
      text: '数字化待开票',
      icon: b1,
      icon2: b2,
      color: '#2DCDFF',
      style:{
        marginLeft: '37px',
        marginRight: '41px'
      }
    },
    {
      money: '89,000,000',
      text: '软件待开票',
      icon: c1,
      icon2: b2,
      color: '#2DCDFF',
      style:{
       
      }
    }
  ]

  const Blist =  [
    {
      icon: a1_1,
      icon2: a1_2,
      number: '8900',
      text1: '数字化',
      text: '未验收',
      style:{
      }
    },
    {
      icon: a2_1,
      icon2: a2_2,
      number: '1900',
      text1: '软件',
      text: '未验收',
      style:{
        bottom:'1px'
      }
    },
    {
      icon: a3_1,
      icon2: a1_2,
      number: '8600',
      text1: '数字化',
      text: '无合同',
      style:{
      }
    },
    {
      icon: a4_1,
      icon2: a4_2,
      number: '5800',
      text1: '软件',
      text: '无合同',
      style:{
      }
    },
    {
      icon: a5_1,
      icon2: a1_2,
      number: '3900',
      text1: '有验收单',
      text: '无合同',
      style:{
      }
    },
    {
      icon: a6_1,
      icon2: a6_2,
      number: '3500',
      text1: '项目',
      text: '实施中',
      style:{
      }
    },
  ]

  const Clist =  [
    {
      title: '中山（医疗软件联众电子病例一期）',
      name:'客户：复旦大学附属中山医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdzbl,
    },
    {
      title: '七院(医疗软件-联众电子病历系统一期)',
      name:'客户：上海市第七人民医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdrg,
      style: {marginLeft:"51px"}
    },
    {
      title: '云南省基于疾病诊断相关组（DRGs）',
      name:'客户：元阳县民族医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdrg,
      style: {marginLeft:"51px"}
    },
    {
      title: '病案数字化系统项目',
      name:'客户：南阳市中心医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdzbl,
      style: {marginLeft:"51px"}
    },
    {
      title: '门诊病案数字化项目',
      name:'客户：上海市虹口区精神卫生中心',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
    },
    {
      title: '病案数字化项目（二期）',
      name:'客户：上海长征医院',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
      style: {marginLeft:"51px"}
    },
    {
      title: '医院病案数字化项目（二期）',
      name:'客户：中国人民解放军联勤保障部队第九二四医院',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
      style: {marginLeft:"51px"}
    },
    {
      title: '病案数字化项目（二期）',
      name:'客户：北京市垂杨柳医院',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
      style: {marginLeft:"51px"}
    },
    {
      title: '云南省基于疾病诊断相关组（DRGs） ',
      name:'客户：蒙自市人民医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdrg,
    },
    {
      title: '云南省基于疾病诊断相关组（DRGs） ',
      name:'客户：元阳县民族医院',
      endDate: '交付日期：2023.06.25',
      icon: boxdzbl,
      style: {marginLeft:"51px"}
    },
    {
      title: '病案数字化项目',
      name:'客户：南昌大学第一附属医院',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
      style: {marginLeft:"51px"}
    },
    {
      title: '病案数字化项目（二期）',
      name:'客户：淄博市淄川区医院',
      endDate: '交付日期：2023.06.25',
      icon: boxshuzhihua,
      style: {marginLeft:"51px"}
    },
  ]
  return (
    <Rooted className="big-screen1">
      {
        loading &&  <div className="loadingBox">
          <img src={loadinbg}/>
          <span className="tips">加载中...</span>
          <div className="loader loader--style8 loading" title="7">
          <svg version="1.1" id="Layer_1"  x="0px" y="0px"
            width="48px" height="60px" viewBox="0 0 48 60"  >
            <linearGradient id="Gradient2">
              <stop offset="0%" stop-color="#2dcdffd9"/>
              <stop offset="100%" stop-color="#2dcdff"/>
            </linearGradient>
            <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#2dcdff82"/>
              <stop offset="100%" stop-color="#2dcdff"/>
            </linearGradient>
            <linearGradient id="Gradient0" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#2dcdff1f"/>
              <stop offset="100%" stop-color="#2dcdff"/>
            </linearGradient>
            <rect x="0" y="20" width="6" height="44" fill="url(#Gradient0)" opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="16; 44; 16" begin="0s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="16; 5; 16" begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="16" y="20" width="6" height="44" fill="url(#Gradient1)"  opacity="0.2">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="16; 44; 16" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="16; 5; 16" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="32" y="20" width="6" height="44"   opacity="0.2" fill="url(#Gradient2)">
              <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="height" attributeType="XML" values="16; 44; 16" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
              <animate attributeName="y" attributeType="XML" values="16; 5; 16" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
        </div>
      }
      {
        detail &&<>
          <div className="modal">
            <div className="title">项目详情</div>
            <img className="close" onClick={()=> setDetail(false)} src={modalx} alt="" />
            <div className="btn1 btn" onClick={()=> { setCurrentModal(1)}} style={currentModal ==1 ? {backgroundImage: `url(${modalzen})`}: {}}>合同内容</div>
            <div className="btn2 btn" onClick={()=> { setCurrentModal(2)}} style={currentModal ==2 ?{backgroundImage: `url(${modalzen})`}: {}}>合同标的</div>
            <div className="btn3 btn" onClick={()=> { setCurrentModal(3)}} style={currentModal ==3 ?{backgroundImage: `url(${modalzen})`}: {}}>合同主体</div>
            <div className="btn4 btn" onClick={()=> { setCurrentModal(4)}} style={currentModal ==4 ?{backgroundImage: `url(${modalfan})`}: {}}>合同附件</div>
            <div className="btn5 btn" onClick={()=> { setCurrentModal(5)}} style={currentModal ==5 ?{backgroundImage: `url(${modalfan})`}: {}}>合同实施附件</div>
            <div className="btn6 btn" onClick={()=> { setCurrentModal(6)}} style={currentModal ==6 ?{backgroundImage: `url(${modalfan})`}: {}} >合同外</div>
          </div>
          <div className="cover" onClick={()=> setDetail(false)}></div>
        </>
      }
      <Header>
        <div className="left__component">
          <img src={top_left_top}/>
          <div className="date"><Date></Date></div>
        </div>
        <div className="title">
            <img src={logo}/>
            <div className="logoName">上海联众产品运营数据中心</div>
        </div>
        <div className="right__component">
          <img src={top_right_top}/>
          <div className="weather">
            <img src={weather}/>
            <span className="a">多云</span>
            <span className="b">32</span> 
            <span className="c">℃</span>
          </div>
        </div>
      </Header>
      <Content>
        <div className="left__component">
          {
            Alist.map(({icon,text,money,style,color,icon2})=> {
              return <div className="chunk" style={style}>
                <div className="money">
                  <span>￥</span>{money}</div>
                <div className="text" style={{color}}>{text}</div>
                <div  style={{position: 'relative',    width: '100%'}}>
                  <img className="icon1" src={icon}/>
                  <img className="icon2" src={icon2}/>
                  </div>
              </div>
            })
          }
        </div>
        <div className="right__component">
        {
            Blist.map(({text,text1,number,icon,icon2,style})=> {
              return <div className="chunk">
                <div className="top" style={{backgroundImage: `url(${icon})`}}>
                  <div className="number">{number}<span>项</span></div>
                  <div className="text1">{text1}</div>
                  <div className="text">{text}</div>
                </div>
                <img className="bottom" style={style||{}} src={icon2}/>
              </div>
            })
          }
        </div>
      </Content>
      <Content2>
        <div className="btns">
          <div className="select" onClick={()=> setSelectOpen(true)} >
            <span className="text">{option}</span>
            <img className="icon" src={selectIcon} alt="" />
            {
              selectOpen && <div className="options">
              {options.map((option)=> <div onClick={(event)=> {
                setOption(option.lable)
                setSelectOpen(false)
                event.stopPropagation() 
              }} className="option">
                {option.lable}
              </div>)}
            </div>
            }
          </div>
          <div className={`btn ${current == 1 && 'btnSel'}`} style={{backgroundImage: `url(${current == 1?contentbtn1b:contentbtn1})`}} onClick={()=> { setCurrent(1)}}>
            <span className="btn1" >合同</span>
          </div>
          <div className={`btn ${current == 2 && 'btnSel'}`} style={{backgroundImage: `url(${current == 2?contentbtn2b:contentbtn2})`}}  onClick={()=> { setCurrent(2)}} >
            <span className="btn2">招投标</span>
          </div>
          <div className={`btn ${current == 3 && 'btnSel'}`} style={{backgroundImage: `url(${current == 3?contentbtn3b:contentbtn3})`}} onClick={()=> { setCurrent(3)}} >
            <span className="btn3">数字化</span>
          </div>
          <div className={`btn ${current == 4 && 'btnSel'}`} style={{backgroundImage: `url(${current == 4?contentbtn4b:contentbtn4})`}} onClick={()=> { setCurrent(4)}} >
            <span className="btn4">DRG</span>
          </div>
          <div className={`btn ${current == 5 && 'btnSel'}`} style={{backgroundImage: `url(${current == 5?contentbtn5b:contentbtn5})`}} onClick={()=> { setCurrent(5)}} >
            <span className="btn5">病案首页</span>
          </div>
          <div className={`btn ${current == 6 && 'btnSel'}`} style={{backgroundImage: `url(${current == 6?contentbtn6b:contentbtn6})`}} onClick={()=> { setCurrent(6)}} >
           <span className="btn6">客户</span>
          </div>
          <div className={`btn ${current == 7 && 'btnSel'}`} style={{backgroundImage: `url(${current == 7?contentbtn7b:contentbtn7})`}} onClick={()=> { setCurrent(7)}} >
           <span className="btn7">待实施</span>
          </div>
          <div className={`btn ${current == 8 && 'btnSel'}`} style={{backgroundImage: `url(${current == 8?contentbtn8b:contentbtn8})`}} onClick={()=> { setCurrent(8)}} >
           <span className="btn8">实施中</span>
          </div>
          <div className={`btn ${current == 9 && 'btnSel'}`} style={{backgroundImage: `url(${current == 9?contentbtn9b:contentbtn9})`}} onClick={()=> { setCurrent(9)}} >
           <span className="btn9">已验收</span>
          </div>
        </div>
        <div className="con">
          {
            Clist.map(({name,title,endDate,icon,style})=> <div onClick={()=> setDetail(true)} style={style} className="con_c con_c_box">
            <img className="topImg" src={boxhead} alt="" />
            <img className="customerImg" src={boxname} alt="" />
            <img  className="dateImg" src={boxtimeIcon} alt="" />           
            <img className="bottomImg" src={boxbg} alt="" />
            <img className="boxlineImg" src={boxline} alt="" />
            <span className="title">{title}</span>
            <span className="date">{endDate}</span>
            <span className="name">{name}</span>
            <img className="typeImg" src={icon} alt="" />   
          </div> )
          }
        </div>
      </Content2>
    </Rooted>
  );
};

const Rooted = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-color: #000F1C;
  .cover {
    width: 100%;
    height: 100%;
    position:fixed;
    z-index: 11;
    opacity: 0.6;
    background: rgba(0, 15, 28, 1);
  }
  .close {
    cursor: pointer;
    position: absolute;
    width: 79px;
    height: 45px;
    right:0px;
  }
  .modal {
    width: 1166px;
    height: 463px;
    position:fixed;
    z-index: 100;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background-size: 100%;
    background-image: url(${modalbg});
    .title {
      position: absolute;
      left:520px;
      top:5px;
      font-family: 阿里妈妈数黑体;
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20.4px;
      color: rgba(237, 254, 255, 1);
      text-align: left;
      vertical-align: top;
    }
    .btn {
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      vertical-align: top;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 137px;
      height: 32px;
      position: absolute;
      top: 10px;
      background-size: 100%;
    }
    .btn1 {
      left: 47px;
      background-image: url(${modalbtn1});
    }
    .btn2 {
      left: 175px;
      background-image: url(${modalbtn1});
    }
    .btn3 {
      left: 302px;
      background-image: url(${modalbtn1});
    }
    .btn4 {
      left: 674px;
      background-image: url(${modalbtn3});
    }
    .btn5 {
      left: 802px;
      background-image: url(${modalbtn3});
    }
    .btn6 {
      left: 929px;
      background-image: url(${modalbtn3});
    }
  }
  
  .loadingBox {
    border-radius: 8px;
    width: 259.73px;
    height: 172px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    z-index: 11;
    

    img {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .tips {
      position: absolute;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 28.96px;
      color: rgb(255, 255, 255);
      text-align: left;
      vertical-align: top;
      inset: -83px 0 0 0;
      width: 80px;
      height: 29px;
      margin: auto;
    }

    .loading{ 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0px;
      margin: auto;
      width: 27px;
      height: 38px;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  .title {
    font-size: 60px;
    width: 740px;
    height: 83px;
    background-image: url(${top_center});
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      margin-top: -13px;
    }
    .logoName {
      font-family: 阿里妈妈数黑体;
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 6px;
      line-height: 60px;
      margin-bottom: 19px;
      color: rgb(255, 255, 255);
      margin-left: 11px;
    }
  }
  .left__component {
    position: absolute;
    left: 0px;
    top:0;
    height: 65px;
    width: 658px;
    background-image: url(${top_left});
    img {
      width: 338px;
      hight:47px;
    }
    .date {
      font-family: Oswald;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 29.64px;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      left: 19px;
      top: 8.02px;  
    }
  }
  .right__component {
    position: absolute;
    right: 0px;
    top:0;
    cursor: pointer;
    height: 65px;
    width: 634px;
    background-image: url(${top_right});
    & > img {
      width: 338px;
      hight:47px;
      right: 0;
      position: absolute;
    }
    .weather {
      top:7px;
      position: absolute;
      right: 0;
      width: 123px;
      .a{
        font-family: Oswald;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 29.64px;
        color: rgba(255, 255, 255, 1);
      }
      .b{
        font-family: Oswald;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 29px;
        color: rgba(255, 255, 255, 1);
      }
      .c{
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 29px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
        font-family: Oswald;
      } 
      img {
        width: 24px;
        hight: 24px;
      }
    }
  }
`;
const Content = styled.div`
  display: flex;
  margin-top:20px;

  .left__component {
    height: 258px;
    width: 680px;
    margin-left:32px;
    background-image: url(${daihuikuan});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
    background-size: 100% 100%;
    .chunk {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 193px;
      height: 178px;
      
      img {
        width: 77px;
        height: 70px;
      }
      .icon1 {
        top: 23px;
        width: 30px;
        height: 28px;
        position: absolute;
        left: 0;
        right: 0;
        animation-name: beat;
        /*动画名称*/
        animation-duration: .8s;
        /*设置秒数*/
        animation-timing-function: linear;
        /*速度曲线*/
        animation-iteration-count: infinite;
        /*播放次数*/
        animation-direction: alternate;
        /*逆向播放*/
        animation-play-state: running;
        margin: auto;
      }
      .icon2 {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
      }
      .text {
        font-family: 阿里妈妈数黑体;
        font-size: 26px;
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 30px;
        color: rgba(255, 103, 20, 1);
        text-align: center;
        margin-bottom:18px;
      }
      .money {
        margin-bottom:12px;
        font-family: Oswald;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 47.42px;
        color: rgba(255, 255, 255, 1);
        font-size: 32px;
        font-weight: 700;
        span {
          font-family: SOURCEHANSANSCN;
          font-size: 20px;
        }
      }
    }
  }
  .right__component {
    height: 258px;
    margin-left:20px;
    width: 1156px;
    background-repeat: no-repeat;
    background-image: url(${shuzhihua});
    display: flex;
    background-size: 100% 100%;
    align-items: center;

    .chunk {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 195px;
      height: 208px;
      position: relative;
      .top {
        position: absolute;
        width:167px;
        height: 160px;
        background-size: 100%;
        z-index:1;
        animation-name: beat;
        /*动画名称*/
        animation-duration: .5s;
        /*设置秒数*/
        animation-timing-function: linear;
        /*速度曲线*/
        animation-iteration-count: infinite;
        /*播放次数*/
        animation-direction: alternate;
        /*逆向播放*/
        animation-play-state: running;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .number {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 35.42px;
          font-family: Oswald;
          color: rgba(255, 255, 255, 1);
          span {
            font-family: 阿里妈妈数黑体;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: NaNpx;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            vertical-align: baseline;
          }
        }
        .text1{
          font-family: 阿里妈妈数黑体;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.85px;
          line-height: 24px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          vertical-align: top;
        }
        .text{
          font-family: 阿里妈妈数黑体;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.85px;
          line-height: 24px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          vertical-align: top;
        }
      }
      .bottom {
        position: absolute;
        bottom:10px;
        width:167px;
        margin-top: -30px;
      }
    }
  }
`;


const Content2 = styled.div`
  margin-top:20px;
  background-image: url(${contentbg});
  width: 1856px;
  height: 689px;
  margin-left: 32px;
  background-size: cover;

  .btns {
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:44px;
    .select {
      cursor: pointer;
      margin-left: 17px;
      width: 182px;
      display: inline-block;
      height: 52px;
      background-image: url(${select});
      background-size:100%;
      position: relative;
      .options {
        width: 100%;
        position: absolute;
        top: 110%;
        background-image: url(${select});
        background-size:100% 100%;
        background: #091724;
        z-index: 99;
        .option {
          padding: 10px;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 26px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          vertical-align: top;
        }
        .option:hover {
          cursor: pointer;
          background: #0d293c
        }
      }
      .text {
        top:13px;
        left: 22px;
        position: absolute;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 26px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
      }
      .icon {
        left:144px;
        top:21px;
        position: absolute;
        width: 23px;
        height: 14px;
      }
    }
    .btn {
      position: relative;
      background-size: 100%;
      cursor: pointer;
      width: 162px;
      height: 57.49px;
      margin-left:20px;
      .btn1,.btn4,.btn6 {
        left:91px;
      }
      .btn5 {
        left:72px;
      }
      span {
        left:82px;
        position: absolute;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
        top:16px;
      }
    }

    .btnSel {
      span {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 28.96px;
      color: rgba(255, 195, 0, 1);
      text-align: center;
      vertical-align: top;
      top:12px;
      }
    }
  }

  .con {
    .select {
      margin-left: 17px;
      width: 182px;
      height: 52px;
      background-image: url(${select});
    }
    .con_c_box {
      width: 418px;
      height: 156px;
      position: relative;
      cursor: pointer;
      display: inline-block;

      .title {
        position: absolute;
        top:20px;
        left:21px;
        font-family: 阿里妈妈数黑体;
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
      }
      .date {
        top: 114px;
        font-family: "黑体";
        left :45px;
        position: absolute;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
      }
      .name {
        top: 69px;
        font-family: "黑体";
        left :32px;
        position: absolute;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(20, 200, 255, 1);
        text-align: left;
        vertical-align: top;
      }
      .topImg {
        width: 400px;
        height: 46px;
        position: absolute;
      }
      .bottomImg {
        width: 100%;
        bottom:0px;
        position: absolute;
      }
      .customerImg {
        left: 20px;
        top: 68px;  
        width: 231px;
        height: 28px;
        position: absolute;
      }
      .typeImg {
        left: 316px;
        top: 99px;
        width: 86px;
        height: 55px;
        position: absolute;
      }
      .dateImg {
        width: 15px;
        height: 15px;
        position: absolute;
        top:120px;
        left:22px;
      }
      .boxlineImg {
        width: 346px;
        position: absolute;
        top:58px;
        left:29px;
      }
    }

    .con_c {
      margin-top:25px;
      width: 418px;
      height: 156px;
      margin-left:20px;
    }
  }
`