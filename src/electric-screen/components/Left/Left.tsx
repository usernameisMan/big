
import styled from 'styled-components';
import WorkOrderData from './WorkOrderData/WorkOrderData';
import CheckAmount from './CheckAmount/CheckAmount';
import CheckSituation from './CheckSituation/CheckSituation';
import MajorReceptionGuarantee from './MajorReceptionGuarantee/MajorReceptionGuarantee';

type Props = {};

export default function Left({}: Props) {
  return (
    <Wrapper>
      <WorkOrderData />
      <CheckAmount />
      <CheckSituation />
      <MajorReceptionGuarantee />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  height: 2360px;
`;
