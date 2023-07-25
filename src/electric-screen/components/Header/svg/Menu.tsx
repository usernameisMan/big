import * as React from 'react';
import { SVGProps } from 'react';
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={36}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      d='M1.5 15A1.5 1.5 0 0 1 0 13.5V1.503a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5V13.5a1.5 1.5 0 0 1-1.5 1.5h-12Zm21 0a1.5 1.5 0 0 1-1.5-1.5V1.503a1.5 1.5 0 0 1 1.5-1.5h11.997a1.5 1.5 0 0 1 1.5 1.5V13.5a1.5 1.5 0 0 1-1.5 1.5H22.5Zm-21 21A1.5 1.5 0 0 1 0 34.5v-12A1.5 1.5 0 0 1 1.5 21h12a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-12Zm21 0a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h11.997a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H22.5Z'
    />
  </svg>
);
export default Menu;
