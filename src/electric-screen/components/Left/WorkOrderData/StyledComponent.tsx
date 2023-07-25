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
