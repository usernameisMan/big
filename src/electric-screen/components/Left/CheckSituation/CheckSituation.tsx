
import { useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import checkedBg from './images/checked-bg.png';
import rectifiedBg from './images/rectified-bg.png';
import notRectifiedBg from './images/notRectified-bg.png';
import waitRectifyBg from './images/waitRectify-bg.png';
import cn from 'classnames';
import CheckSituationDonutChart from './CheckSituationDonutChart';

type Props = {};

export default function CheckSituation({}: Props) {
  const [checked, setChecked] = useState(24);
  const [rectified, setRectified] = useState(12);
  const [notRectified, setNotRectified] = useState(5);
  const [waitRectify, setWaitRectify] = useState(5);

  const list = [
    {
      bgImageSrc: checkedBg,
      name: '已检查',
      value: checked,
      Icon: (
        <svg
          width='54'
          height='51'
          viewBox='0 0 54 51'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M40.6667 50.6667L33.3333 42.6667L36.4267 39.52L40.6667 43.76L50.24 34.1867L53.3333 37.9467M46.6667 0C47.0203 0 47.3594 0.140476 47.6095 0.390525C47.8595 0.640573 48 0.979711 48 1.33333V27.6267C46.2933 27.0133 44.5067 26.6667 42.6667 26.6667C38.56 26.6667 34.8267 28.2667 32 30.8267V10.9333L16 5.33333V37.0667L26.7733 40.8C26.6667 41.44 26.6667 42.0533 26.6667 42.6667C26.6667 43.8933 26.8267 45.12 27.0933 46.2933L16 42.4L1.76 47.92C1.57333 48 1.46667 48 1.33333 48C0.979711 48 0.640573 47.8595 0.390525 47.6095C0.140476 47.3594 0 47.0203 0 46.6667V6.34667C0 5.73333 0.426666 5.25333 0.933333 5.06667L16 0L32 5.6L46.2133 0'
            fill='#E6E6E6'
          />
        </svg>
      ),
    },
    {
      bgImageSrc: rectifiedBg,
      name: '已整改',
      value: rectified,
      Icon: (
        <svg
          width='64'
          height='64'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M32.4461 0.00297312C14.4508 -0.240081 -0.240081 14.4508 0.00297312 32.4461C0.242951 49.7045 14.2955 63.757 31.5539 63.997C49.5522 64.2431 64.24 49.5522 63.9939 31.5569C63.757 14.2955 49.7045 0.242951 32.4461 0.00297312ZM29.8632 29.611L37.7933 20.5349C38.2229 20.0433 38.8302 19.7424 39.4816 19.6986C40.133 19.6547 40.7752 19.8715 41.2668 20.3011C41.7584 20.7307 42.0592 21.338 42.1031 21.9894C42.1469 22.6408 41.9302 23.283 41.5006 23.7746L33.5706 32.8507C33.3579 33.0941 33.0993 33.2932 32.8096 33.4367C32.5199 33.5802 32.2048 33.6652 31.8823 33.687C31.5597 33.7087 31.236 33.6666 30.9297 33.5633C30.6234 33.4599 30.3405 33.2972 30.0971 33.0845C29.8536 32.8718 29.6545 32.6132 29.511 32.3235C29.3675 32.0338 29.2825 31.7187 29.2608 31.3961C29.2391 31.0736 29.2811 30.7499 29.3845 30.4436C29.4878 30.1373 29.6505 29.8544 29.8632 29.611ZM23.8853 43.5866C23.4238 44.0478 22.798 44.3069 22.1455 44.3069C21.493 44.3069 20.8672 44.0478 20.4057 43.5866L13.0294 36.2026C12.801 35.974 12.6198 35.7025 12.4962 35.4038C12.3726 35.1051 12.3091 34.785 12.3092 34.4617C12.3094 34.1385 12.3732 33.8184 12.497 33.5198C12.6209 33.2212 12.8023 32.9499 13.031 32.7214C13.2597 32.493 13.5311 32.3118 13.8298 32.1882C14.1285 32.0646 14.4486 32.0011 14.7719 32.0012C15.0952 32.0014 15.4152 32.0652 15.7138 32.189C16.0124 32.3129 16.2837 32.4943 16.5122 32.723L23.8961 40.1069C24.3559 40.5699 24.6131 41.1965 24.6111 41.849C24.609 42.5015 24.348 43.1265 23.8853 43.5866ZM51.0828 23.7746L33.8721 43.465C33.6504 43.7191 33.3788 43.9249 33.0742 44.0697C32.7696 44.2144 32.4385 44.295 32.1015 44.3065H32.0184C31.695 44.3065 31.3747 44.2429 31.0759 44.1191C30.7771 43.9953 30.5057 43.8138 30.2771 43.585L22.9024 36.2011C22.4409 35.7393 22.1819 35.113 22.1821 34.4602C22.1824 33.8073 22.4421 33.1813 22.9039 32.7199C23.3657 32.2585 23.992 31.9994 24.6448 31.9997C25.2977 32 25.9237 32.2596 26.3851 32.7214L30.9693 37.3102C31.0885 37.4294 31.2309 37.5229 31.3876 37.5848C31.5444 37.6467 31.7122 37.6758 31.8807 37.6701C32.0492 37.6645 32.2147 37.6243 32.367 37.5521C32.5193 37.4799 32.6551 37.3771 32.766 37.2502L47.3801 20.5349C47.8097 20.0433 48.417 19.7424 49.0684 19.6986C49.7198 19.6547 50.3619 19.8715 50.8536 20.3011C51.3452 20.7307 51.646 21.338 51.6899 21.9894C51.7337 22.6408 51.517 23.283 51.0874 23.7746H51.0828Z'
            fill='#82C5F9'
          />
        </svg>
      ),
    },
    {
      bgImageSrc: notRectifiedBg,
      name: '未整改',
      value: notRectified,
      Icon: (
        <svg
          width='54'
          height='47'
          viewBox='0 0 54 47'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.60576 47.0002C1.52443 47.0002 -0.399805 43.6627 1.14405 40.996L23.5396 2.31281C25.0803 -0.348329 28.9223 -0.348335 30.463 2.31281L52.8586 40.996C54.4024 43.6627 52.4782 47.0002 49.3968 47.0002H4.60576ZM27.0013 39.0002C27.7569 39.0002 28.3906 38.7442 28.9026 38.2322C29.4146 37.7202 29.6697 37.0873 29.668 36.3335C29.668 35.5779 29.412 34.9442 28.9 34.4322C28.388 33.9202 27.7551 33.6651 27.0013 33.6668C26.2457 33.6668 25.612 33.9228 25.1 34.4348C24.588 34.9468 24.3329 35.5797 24.3346 36.3335C24.3346 37.0891 24.5906 37.7228 25.1026 38.2348C25.6146 38.7468 26.2475 39.0019 27.0013 39.0002ZM24.3346 31.0002H29.668V17.6668H24.3346V31.0002Z'
            fill='#FFD977'
          />
        </svg>
      ),
    },
    {
      bgImageSrc: waitRectifyBg,
      name: '待整改',
      value: waitRectify,
      Icon: (
        <svg
          width='54'
          height='54'
          viewBox='0 0 54 54'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M45.6654 53.6668H8.33203C6.2103 53.6668 4.17547 52.824 2.67518 51.3237C1.17489 49.8234 0.332031 47.7886 0.332031 45.6668V3.00016C0.332031 2.29292 0.612983 1.61464 1.11308 1.11454C1.61318 0.614448 2.29145 0.333496 2.9987 0.333496H40.332C41.0393 0.333496 41.7176 0.614448 42.2176 1.11454C42.7177 1.61464 42.9987 2.29292 42.9987 3.00016V35.0002H53.6654V45.6668C53.6654 47.7886 52.8225 49.8234 51.3222 51.3237C49.8219 52.824 47.7871 53.6668 45.6654 53.6668ZM42.9987 40.3335V45.6668C42.9987 46.3741 43.2796 47.0523 43.7797 47.5524C44.2798 48.0525 44.9581 48.3335 45.6654 48.3335C46.3726 48.3335 47.0509 48.0525 47.551 47.5524C48.0511 47.0523 48.332 46.3741 48.332 45.6668V40.3335H42.9987ZM10.9987 13.6668V19.0002H32.332V13.6668H10.9987ZM10.9987 24.3335V29.6668H32.332V24.3335H10.9987ZM10.9987 35.0002V40.3335H24.332V35.0002H10.9987Z'
            fill='#8CF1EB'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='mt-10 w-full font-medium'>
      <SectionTitle className='mb-10'>检查情况</SectionTitle>
      <ul className='flex flex-wrap gap-x-[366px] gap-y-6 relative'>
        {list.map((item, index) => {
          const isRight = index === 1 || index === 3;

          return (
            <li
              key={item.name}
              className={cn('w-[317px] h-[149px] relative', {
                'pt-9 pl-9': index === 0,
                'pt-[33px] pl-[29px]': index === 1,
                'pt-[54px] pl-9': index === 2,
                'pt-[58px] pl-[34px]': index === 3,
              })}
            >
              <img
                src={item.bgImageSrc}
                alt={item.name}
                className='w-full h-full absolute left-0 top-0'
              />
              <div
                className={cn('flex items-baseline', {
                  'flex-row-reverse justify-end': isRight,
                })}
              >
                <span
                  className={cn('text-[48px] leading-[72px] w-[90px]', {
                    'text-right': isRight,
                  })}
                >
                  {item.value}
                </span>
                <span
                  className={cn('text-[24px] leading-[36px]', {
                    'mr-4': !isRight,
                    'ml-4': isRight,
                  })}
                >
                  {item.name}
                </span>
                {item.Icon}
              </div>
            </li>
          );
        })}
        <div className='w-full h-full absolute flex items-center justify-center left-0 top-0'>
          <CheckSituationDonutChart
            className='w-[265px] h-[256px]'
            checked={checked}
            rectified={rectified}
            notRectified={notRectified}
            waitRectify={waitRectify}
          />
        </div>
      </ul>
    </div>
  );
}
