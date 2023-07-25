import styled from 'styled-components';
import NavDivider from './svg/NavDivider';
import { useState } from 'react';
import HeaderWidget from './HeaderWidget';
import React from 'react';

type Props = {};

export default function Header({}: Props) {
  const [currentNav, setCurrentNav] = useState(2);

  const navList = [
    '规划实施系统',
    '智慧经济',
    '公共空间',
    '智慧楼宇',
    '智战',
    '智眼',
    '运维',
  ];

  return (
    <Wrapper>
      <Title>
        <div className='big'>杨浦滨江智慧公共空间</div>
        <div className='small-box'>
          <span>人民城市人民建</span>
          <span>人民城市为人民</span>
        </div>
      </Title>
      <Nav>
        {navList.map((name, index) => {
          const isFirst = index === 0;
          return (
            <React.Fragment key={name}>
              {isFirst && (
                <NavDivider fill={currentNav === 0 ? '#8CF1EB' : '#E6E6E6'} />
              )}
              <NavText
                onClick={() => setCurrentNav(index)}
                isCurrent={index === currentNav}
              >
                {name}
              </NavText>
              <NavDivider
                fill={
                  currentNav === index || currentNav === index + 1
                    ? '#8CF1EB'
                    : '#E6E6E6'
                }
              />
            </React.Fragment>
          );
        })}
      </Nav>

      <HeaderWidget />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 2;
  width: 4656px;
  height: 166px;
  display: flex;
  margin-bottom: 38px;
`;

const Title = styled.div`
  width: 891px;
  height: 166px;
  color: white;
  margin-right: 360px;
  .big {
    font-family: PangMenZhengDao;
    font-size: 96px;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: center;
  }
  .small-box {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
    span {
      font-family: Source Han Sans CN;
      font-size: 36px;
      font-weight: 350;
      line-height: 54px;
      letter-spacing: 0.625em;
      text-align: left;
    }
  }
`;

const Nav = styled.div`
  font-family: Source Han Sans CN;
  font-size: 48px;
  font-weight: 500;
  line-height: 65px;
  letter-spacing: 2px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const NavText = styled.span<any>`
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
  font-weight: ${(props) => (props.isCurrent ? '900' : '500')};
  color: ${(props) =>
    props.isCurrent ? 'rgba(255, 255, 255, 1)' : 'rgba(230, 230, 230, 1)'};
`;
