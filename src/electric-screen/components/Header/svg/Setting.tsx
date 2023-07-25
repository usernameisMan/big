import * as React from 'react';
import { SVGProps } from 'react';
const Setting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={44}
    height={44}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      stroke='#fff'
      strokeLinejoin='round'
      strokeWidth={4}
      d='M16.284 41.17a19.994 19.994 0 0 1-8.696-5.303 6 6 0 0 0-5.182-9.838A20.091 20.091 0 0 1 2 21.999c0-2.09.32-4.105.916-6H3a6 6 0 0 0 5.385-8.65 19.968 19.968 0 0 1 8.267-4.626 6 6 0 0 0 8.484 2.393 6 6 0 0 0 2.212-2.393 19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 41.084 16 19.99 19.99 0 0 1 42 22c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838 19.996 19.996 0 0 1-8.696 5.303 6.003 6.003 0 0 0-11.432 0Z'
    />
    <path
      fill='#000'
      stroke='#000'
      strokeLinejoin='round'
      strokeWidth={4}
      d='M22 29a7.001 7.001 0 0 0 4.95-11.95A6.998 6.998 0 0 0 15 22a7 7 0 0 0 7 7Z'
    />
  </svg>
);
export default Setting;
