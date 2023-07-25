import styled from 'styled-components';
import AutoAdjust from '../packages';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Center from './components/Center/Center';
import Right from './components/Right/Right';
import globalBg from './images/global-bg.png'

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
      <Header />
      <Content>
        <Left/>
        <Center/>
        <Right/>
      </Content>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url(${globalBg});
`;

const Content = styled.div`
  display: flex;
  height: 2360px;
  margin-top: 20px;
`;
