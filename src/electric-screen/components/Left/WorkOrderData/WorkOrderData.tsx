import styled from 'styled-components';
import SectionTitle from '../../common/SectionTitle';
import { Tag, Wrapper } from './StyledComponent';
import Ellipse from './svgs/Ellipse';
import OpenOrderSvg from './svgs/OpenOrderSvg';
import deliveryOrderSrc from './images/delivery-order.png';
import handleOrderSrc from './images/handle-order.png';
import checkOrderSrc from './images/check-order.png';
import confirmOrderSrc from './images/confirm-order.png';
import finishedOrderSrc from './images/finished-order.png'

type Props = {};

export default function WorkOrderData({}: Props) {
  const pendingOrderList = [
    {
      imageSrc: deliveryOrderSrc,
      name: '待分派工单',
      number: 22,
    },
    {
      imageSrc: handleOrderSrc,
      name: '待处理工单',
      number: 7,
    },
    {
      imageSrc: checkOrderSrc,
      name: '待验收工单',
      number: 6,
    },
    {
      imageSrc: confirmOrderSrc,
      name: '待确认工单',
      number: 11,
    },
  ];

  const finishedOrderList = [
    {
      imageSrc: finishedOrderSrc,
      name: '已分派工单',
      number: 34,
    },
    {
      imageSrc: finishedOrderSrc,
      name: '已处理工单',
      number: 4,
    },
    {
      imageSrc: finishedOrderSrc,
      name: '已验收工单',
      number: 8,
    },
    {
      imageSrc: finishedOrderSrc,
      name: '已确认工单',
      number: 4,
    },
  ];

  return (
    <Wrapper>
      <div className='top'>
        <SectionTitle>工单数据</SectionTitle>
        <div className='tags'>
          <Tag className='current'>整体情况</Tag>
          <Tag>最近三天</Tag>
        </div>
      </div>

      <div className='content'>
        <div className='left'>
          {/* 累计报修工单 */}
          <div className='warranty'>
            <div className='warrantyChart'>
              <Ellipse />
              <span>56</span>
            </div>
            <div className='warrantyText'>累计报修工单</div>
          </div>

          {/* 未结案工单 */}
          <div className='openOrder'>
            <OpenOrderSvg />
            <span className='text'>未结案工单</span>
            <span className='number'>5</span>
          </div>
        </div>

        <ul className='list pendingOrder'>
          {pendingOrderList.map((item) => {
            return (
              <li key={item.name}>
                <img src={item.imageSrc} alt={item.name} />
                <div>
                  <div className='text'>{item.name}</div>
                  <div className='number'>{item.number}</div>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className='list'>
          {finishedOrderList.map((item) => {
            return (
              <li key={item.name}>
                <img src={item.imageSrc} alt={item.name} />
                <div>
                  <div className='text'>{item.name}</div>
                  <div className='number'>{item.number}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
}
