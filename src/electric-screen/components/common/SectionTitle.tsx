import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <Wrapper>
      <div />
      <span>{children}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 12px;
    height: 32px;
    border-radius: 2px;
    background-color: #8cf1eb;
    margin-right: 12px;
  }

  span {
    font-family: Source Han Sans CN;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.08em;
    text-align: left;
    color: #8CF1EB;
  }
`;
