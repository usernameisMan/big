import styled from 'styled-components';
import WorkOrderData from './WorkOrderData/WorkOrderData';

type Props = {};

export default function Left({}: Props) {
  return (
    <Wrapper>
      <WorkOrderData />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 2360px;
`;
