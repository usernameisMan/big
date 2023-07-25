import styled from 'styled-components';

export const Wrapper = styled.div`
  > .top {
    display: flex;
    justify-content: space-between;
  }

  > .content {
    display: flex;
    margin-top: 36px;

    .left {
      margin-right: 109px;
    }
  }

  .tags {
    display: flex;
    gap: 20px;
  }

  .warranty {
    width: 317px;
  }

  .warrantyChart {
    position: relative;
    width: 317px;
    height: 317px;
    padding-top: 61px;
    font-size: 64px;
    font-weight: 500;
    line-height: 96px;
    text-align: center;

    svg {
      position: absolute;
      left: 0;
      top: 0;
    }
    .wave {
      position: absolute;
      top: 0px;
      right: 0;
      margin: auto;
      left: 0;
      bottom: 0;
      width: 70%;
      height: 70%;
      border-radius: 50%;
      overflow: hidden;
      font-size: 0;
      cursor: pointer;
      flex-shrink: 0;
      animation: water-wave linear infinite;
    }
    .wave1 {
      display: block;
      position: absolute;
      top: 65%;
      left: -30%;
      background: #3aa0ff;
      opacity: 0.7;
      width: 200%;
      height: 200%;
      border-radius: 40%;
      animation: inherit;
      animation-duration: 5s;    
      background: linear-gradient(0deg, #8CF1EB, #8CF1EB),
      linear-gradient(180deg, #8CF1EB -39.58%, rgba(140, 241, 235, 0) 99.99%);     
    }
    .wave2 {
      display: block;
      position: absolute;
      top: 65%;
      left: -40%;
      background: linear-gradient(0deg, #E6E6E6, #ffffff),
      linear-gradient(180deg, #E6E6E6 -79.01%, rgba(255, 255, 255, 0) 100%);    
      opacity: 0.7;
      width: 200%;
      height: 200%;
      border-radius: 35%;
      animation: inherit;
      animation-duration: 7s;
    }

    @keyframes water-wave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .warrantyText {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 27px;
  }

  .openOrder {
    display: flex;
    align-items: baseline;
    width: 317px;
    height: 104px;
    border: 3px solid #ffd977;
    padding-top: 16px;
    padding-left: 33px;
    margin-top: 39px;

    .text {
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      margin-left: 16px;
      margin-right: 16px;
    }

    .number {
      font-size: 48px;
      font-weight: 500;
      line-height: 72px;
    }
  }

  ul.list {
    display: flex;
    flex-direction: column;
    gap: 34px;

    li {
      display: flex;
      align-items: center;
      text-align: center;
      img {
        margin-right: 24px;
        width: 72px;
        height: 72px;
      }
      .text {
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
      }
      .number {
        font-size: 48px;
        font-weight: 500;
        line-height: 72px;
      }
    }
  }

  ul.pendingOrder {
    margin-right: 135px;
  }
`;

export const Tag = styled.div`
  width: 200px;
  height: 64px;
  padding: 11px 44px;
  border-radius: 4px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: #e6e6e6;
  background-color: #0a20294d;

  &.current {
    color: #8cf1eb;
    border: 2px solid #8cf1eb;
    width: 204px;
  }
`;
