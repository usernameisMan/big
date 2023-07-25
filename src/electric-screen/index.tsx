import styled from 'styled-components';
import AutoAdjust from '../packages';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Center from './components/Center/Center';
import Right from './components/Right/Right';
import globalBg from './images/global-bg.png';
import leftBg from './images/lightDayBg/左.png';
import rightBg from './images/lightDayBg/右.png';
export default function ElectricScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new AutoAdjust({
      querySelector: '.big-screen1',
      designWidth: 4800,
      designHeight: 2700,
    });
  }, []);

  return (
    <Root className='big-screen1'>
      <img className='leftBg' src={leftBg} alt='' />
      <img className='rightBg' src={rightBg} alt='' />
      <Header />
      <Content>
        <Left />
        <Center />
        <Right />
      </Content>
    </Root>
  );
}

const Root = styled.div`
  font-family: Source Han Sans CN;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url(${globalBg});
  padding-left: 72px;
  padding-top: 64px;

  .leftBg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .rightBg {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2360px;
  margin-top: 20px;
  z-index: 2;
`;
