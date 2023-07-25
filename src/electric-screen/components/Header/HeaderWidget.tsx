import styled from 'styled-components';

type Props = {};

export default function HeaderWidget({}: Props) {
  return (
    <Wrapper>
      <Time>
        <div>
          <span className='time'>13:10:02</span>
          <span className='date'>2022/3/14</span>
        </div>
        <span className=''>壬寅虎年 农历二月十二</span>
      </Time>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 304px;
  display: flex;
`;

const Time = styled.div`
  font-family: Source Han Sans CN;
  font-size: 64px;
  font-weight: 400;
  line-height: 87px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
`;
