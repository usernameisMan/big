import styled from 'styled-components';
import IoTDevice from './IoTDevice/IoTDevice';

type Props = {};

export default function Center({}: Props) {
  return (
    <Wrapper>
      <IoTDevice />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 744px;
  bottom: 72px;
  left: 2028px;
`;
