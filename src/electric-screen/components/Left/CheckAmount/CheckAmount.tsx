import { useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import CheckAmountDonutChart from './CheckAmountDonutChart';

type Props = {};

export default function CheckAmount({}: Props) {
  const [finishedAmount, setFinishedAmount] = useState(14);
  const [unfinishedAmount, setUnfinishedAmount] = useState(7);
  const amount = finishedAmount + unfinishedAmount;
  const finishedPercent = (finishedAmount / amount) * 100
  const unfinishedPercent = (unfinishedAmount / amount) * 100

  return (
    <div className='mt-10 font-medium'>
      <SectionTitle className='mb-10'>检查总数</SectionTitle>
      <div>
        <div>
          <span className='font-medium mr-7 text-[64px] leading-[96px]'>
            {amount}
          </span>
          <span className='font-medium text-[24px] leading-[36px]'>
            巡检计划
          </span>
        </div>
        {/* 百分比长条 */}
        <div className='w-[1000px] h-[40px] bg-[rgba(230,230,230,0.3)] rounded-[8px] mb-6'>
          <div
            style={{ width: `${finishedAmount}%` }}
            className='bg-[#8CF1EB] h-[40px] rounded-[8px]'
          ></div>
        </div>

        <div className='w-[659px] h-[78px] flex justify-end items-center w-full'>
          <div className='flex items-center mr-[86px]'>
            <CheckAmountDonutChart
              className='w-[48px] h-[48px]'
              mainAmount={finishedAmount}
              amount={amount}
            />
            <span className='text-[#E6E6E6] text-[24px] ml-4'>已完成</span>
          </div>
          <div className='text-[48px] text-[#8CF1EB] mr-[220px] w-[96px] text-right'>
            {finishedAmount}
          </div>
          <div className='text-[48px] text-[#8CF1EB]'>
            {finishedPercent.toFixed(2)}
            <span className='text-[20xp]'>%</span>
          </div>
        </div>

        <div className='w-[659px] h-[78px] flex justify-end items-center w-full'>
          <div className='flex items-center mr-[86px]'>
            <CheckAmountDonutChart
              className='w-[48px] h-[48px]'
              mainAmount={unfinishedAmount}
              amount={amount}
              mainColor='#E6E6E6'
            />
            <span className='text-[#E6E6E6] text-[24px] ml-4'>未完成</span>
          </div>
          <div className='text-[48px] text-[#8CF1EB] mr-[220px] w-[96px] text-right'>
            {unfinishedAmount}
          </div>
          <div className='text-[48px] text-[#8CF1EB]'>
            {unfinishedPercent.toFixed(2)}
            <span className='text-[20xp]'>%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
