import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Source Han Sans CN;
  font-weight: 400;
  margin-left: 304px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Time = styled.div`
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  div {
    display: flex;
    align-items: baseline;

    .time {
      margin-right: 20px;
      font-size: 64px;
      height: 87px;
      line-height: 87px;
    }
    .date {
      font-size: 32px;
      height: 43.39px;
      line-height: 43.39px;
    }
  }

  .lunar {
    font-size: 24px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 81px;
  background-color: #fff;
  margin-left: 40px;
  margin-right: 40px;
`;

export const Weather = styled.div`
  display: flex;

  .left {
    margin-right: 12px;
  }

  .right {
    font-size: 64px;
    line-height: 87px;
    letter-spacing: -0.035em;
    text-align: center;

    .unit {
      font-size: 48px;
      line-height: 65px;
      letter-spacing: -0.035em;
      text-align: center;
    }
  }

  .cloudyText {
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
`;

export const PM = styled.div`
  font-size: 64px;
  line-height: 87px;
  text-align: center;

  .bottom {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 32px;
  svg {
    cursor: pointer;
  }
`;
