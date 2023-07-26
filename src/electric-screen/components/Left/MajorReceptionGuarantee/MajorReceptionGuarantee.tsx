import { useEffect, useRef } from 'react';
import SectionTitle from '../../common/SectionTitle';
import cn from 'classnames';

type Props = {};

export default function MajorReceptionGuarantee({}: Props) {
  const listEle = useRef<HTMLUListElement>(null);

  const titleList = [
    {
      name: '通知时间',
      icon: (
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.0013 27.3332C6.6373 27.3332 0.667969 21.3638 0.667969 13.9998C0.667969 6.63584 6.6373 0.666504 14.0013 0.666504C21.3653 0.666504 27.3346 6.63584 27.3346 13.9998C27.3346 21.3638 21.3653 27.3332 14.0013 27.3332ZM14.0013 24.6665C16.8303 24.6665 19.5434 23.5427 21.5438 21.5423C23.5442 19.5419 24.668 16.8288 24.668 13.9998C24.668 11.1709 23.5442 8.45775 21.5438 6.45736C19.5434 4.45698 16.8303 3.33317 14.0013 3.33317C11.1723 3.33317 8.45922 4.45698 6.45883 6.45736C4.45844 8.45775 3.33464 11.1709 3.33464 13.9998C3.33464 16.8288 4.45844 19.5419 6.45883 21.5423C8.45922 23.5427 11.1723 24.6665 14.0013 24.6665ZM15.3346 13.9998H20.668V16.6665H12.668V7.33317H15.3346V13.9998Z'
            fill='#8CF1EB'
          />
        </svg>
      ),
    },
    {
      name: '被通知部门',
      icon: (
        <svg
          width='29'
          height='30'
          viewBox='0 0 29 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.3333 12.3333H10V17.6667H23.3333V12.3333ZM19.3333 3H10V8.33333H19.3333V3ZM27.3333 21.6667H10V27H27.3333V21.6667Z'
            fill='#8CF1EB'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8.82031 3.00018C8.82031 2.34748 9.34943 1.81836 10.0021 1.81836H19.3355C19.9882 1.81836 20.5173 2.34748 20.5173 3.00018V8.33351C20.5173 8.98621 19.9882 9.51533 19.3355 9.51533H10.0021C9.34943 9.51533 8.82031 8.98621 8.82031 8.33351V3.00018ZM11.1839 4.182V7.15169H18.1536V4.182H11.1839ZM8.82031 12.3335C8.82031 11.6808 9.34943 11.1517 10.0021 11.1517H23.3355C23.9882 11.1517 24.5173 11.6808 24.5173 12.3335V17.6668C24.5173 18.3195 23.9882 18.8487 23.3355 18.8487H10.0021C9.34943 18.8487 8.82031 18.3195 8.82031 17.6668V12.3335ZM11.1839 13.5153V16.485H22.1536V13.5153H11.1839ZM8.82031 21.6668C8.82031 21.0141 9.34943 20.485 10.0021 20.485H27.3355C27.9882 20.485 28.5173 21.0141 28.5173 21.6668V27.0002C28.5173 27.6529 27.9882 28.182 27.3355 28.182H10.0021C9.34943 28.182 8.82031 27.6529 8.82031 27.0002V21.6668ZM11.1839 22.8487V25.8184H26.1536V22.8487H11.1839Z'
            fill='#8CF1EB'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1.33416 0.484863C1.98686 0.484863 2.51598 1.01398 2.51598 1.66668V4.48486H9.33416C9.98686 4.48486 10.516 5.01398 10.516 5.66668C10.516 6.31938 9.98686 6.8485 9.33416 6.8485H2.51598V13.8182H9.33416C9.98686 13.8182 10.516 14.3473 10.516 15C10.516 15.6527 9.98686 16.1818 9.33416 16.1818H2.51598V23.1515H9.33416C9.98686 23.1515 10.516 23.6806 10.516 24.3333C10.516 24.986 9.98686 25.5152 9.33416 25.5152H2.51598V28.3333C2.51598 28.986 1.98686 29.5152 1.33416 29.5152C0.681462 29.5152 0.152344 28.986 0.152344 28.3333V1.66668C0.152344 1.01398 0.681462 0.484863 1.33416 0.484863Z'
            fill='#8CF1EB'
          />
        </svg>
      ),
    },
    {
      name: '通知内容',
      icon: (
        <svg
          width='24'
          height='30'
          viewBox='0 0 24 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.3333 2.66667H15.76C15.2 1.12 13.7333 0 12 0C10.2667 0 8.8 1.12 8.24 2.66667H2.66667C1.2 2.66667 0 3.86667 0 5.33333V26.6667C0 28.1333 1.2 29.3333 2.66667 29.3333H21.3333C22.8 29.3333 24 28.1333 24 26.6667V5.33333C24 3.86667 22.8 2.66667 21.3333 2.66667ZM12 2.66667C12.7333 2.66667 13.3333 3.26667 13.3333 4C13.3333 4.73333 12.7333 5.33333 12 5.33333C11.2667 5.33333 10.6667 4.73333 10.6667 4C10.6667 3.26667 11.2667 2.66667 12 2.66667ZM21.3333 26.6667H2.66667V5.33333H5.33333V9.33333H18.6667V5.33333H21.3333V26.6667Z'
            fill='#8CF1EB'
          />
        </svg>
      ),
    },
  ];

  const contentList = new Array(20).fill(null).map((item, index) => ({
    time: '2023/07/21  12:03:08',
    department: `部门名称${index}`,
    content: '通知内容通知内容通知内容',
  }));

  useEffect(() => {
    if (listEle.current) {
      const liHeight = listEle.current.querySelector('li')?.offsetHeight ?? 0;
      const ulHeight = liHeight * contentList.length;
      listEle.current.animate(
        [
          // keyframes
          { transform: 'translateY(0px)' },
          { transform: `translateY(-${ulHeight}px)` },
        ],
        {
          // timing options
          duration: 10000,
          iterations: Infinity,
        },
      );

      listEle.current.getAnimations({ subtree: true }).map((animation) => {
        console.log(`📄 ~ elem.getAnimations ~ animation:`, animation);

        return animation.finished;
      });
    }
  }, []);

  const pauseAnimation = () => {
    if (listEle.current) {
      listEle.current.getAnimations({ subtree: true }).map((animation) => {
        console.log(`📄 ~ elem.getAnimations ~ animation:`, animation);
        animation.pause();
      });
    }
  };

  const playAnimation = () => {
    if (listEle.current) {
      listEle.current.getAnimations({ subtree: true }).map((animation) => {
        console.log(`📄 ~ elem.getAnimations ~ animation:`, animation);
        animation.play();
      });
    }
  };

  return (
    <section className='mt-10'>
      <SectionTitle className='mb-10'>重大接待保障</SectionTitle>
      {/* table */}
      <div className='w-[1000px] h-[652px] pt-8 bg-[rgba(10,32,41,0.6)]'>
        {/* table title */}
        <div className="px-12 mb-6">
          <div className='flex mb-6'>
            {titleList.map((item, index) => {
              return (
                <div
                  className={cn('flex items-center', {
                    'w-[236px] mr-4': index === 0,
                    'w-[318px] mr-4 justify-center': index === 1,
                    'w-[318px] justify-center': index === 2,
                  })}
                  key={item.name}
                >
                  <span className='mr-2'>{item.icon}</span>
                  <span className='text-[rgba(140,241,235,1)] text-[24px] leading-[36px]'>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className='w-full h-[2px] bg-[rgba(230,230,230,0.4)]' />
        </div>

        {/* table body */}
        <div
          className='my-10 bg-n-300 h-[504px] mx-auto overflow-hidden'
          onMouseEnter={() => pauseAnimation()}
          onMouseLeave={() => playAnimation()}
        >
          <ul ref={listEle}>
            {/* 复制了一份 list 用于轮播   */}
            {contentList.concat(contentList).map((item, index) => {
              const isOdd = index % 2 === 0;

              return (
                <li
                  className={cn(
                    'flex text-center font-medium text-[rgba(230,230,230,1)] items-center h-[84px] px-12',
                    {
                      'bg-[#0f2b3b]': isOdd,
                    },
                  )}
                  key={index}
                >
                  <div
                    className={cn('w-[236px] text-[24px] leading-[36px] mr-6')}
                  >
                    {item.time}
                  </div>
                  <div className='w-[310px] font-bold text-[28px] leading-[42px] mr-6'>
                    {item.department}
                  </div>
                  <div className='w-[310px] text-[24px] leading-[36px]'>
                    {item.content}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
