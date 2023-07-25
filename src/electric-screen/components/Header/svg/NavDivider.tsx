import { SVGProps } from 'react';

const NavDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={33}
    fill='#E6E6E6'
    {...props}
  >
    <path
      d='M.911 3.15A2 2 0 0 1 2.802.5h7.77a2 2 0 0 1 1.892 1.35l9.625 28a2 2 0 0 1-1.891 2.65h-7.77a2 2 0 0 1-1.892-1.35l-9.625-28Z'
      opacity={0.8}
    />
  </svg>
);
export default NavDivider;
