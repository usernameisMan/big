import styled from "styled-components";
import AutoAdjust from "../packages";
import { useEffect, useState } from "react";

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    new AutoAdjust({
      querySelector: ".big-screen1",
      designWidth: 4800,
      designHeight: 2700,
    });
  }, []);


  return (
    <Rooted className="big-screen1">
      <Header>
      <Title>
        <div className="big">杨浦滨江智慧公共空间</div>
        <div className="small-box">
          <span>人民城市人民建</span>
          <span>人民城市为人民</span>
        </div>
      </Title>
      </Header>
      <Content>
      </Content>
    </Rooted>
  );
};

const Rooted = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  position: relative;
  top:64px;
  left: 72px;
  width: 4656px;
  height: 166px;
`;

const Title = styled.div`
  width: 891px;
  height: 166px;
  .big {
    font-family: PangMenZhengDao;
    font-size: 96px;
    font-weight: 400;
    line-height: 110px;
    letter-spacing: 0em;
    text-align: center;
  }
  .small-box{
    display: flex;
    justify-content: space-between;
    margin-top:2px;
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

const Content = styled.div`
  display: flex;
  margin-top:20px;
`;