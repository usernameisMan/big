import styled from 'styled-components';
import WorkOrderData from './WorkOrderData/WorkOrderData';
import CheckAmount from './CheckAmount/CheckAmount';

type Props = {};

export default function Left({}: Props) {
  return (
    <Wrapper>
      <WorkOrderData />
      <CheckAmount />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 2360px;
`;
