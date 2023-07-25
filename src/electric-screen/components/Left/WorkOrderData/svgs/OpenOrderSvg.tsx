import * as React from "react"
import { SVGProps } from "react"
const OpenOrderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={46}
    fill="none"
    {...props}
  >
    <path
      fill="#FFD977"
      d="m22.474 28.25 7.424-7.423-2.474-2.475-7.42 7.424-7.428-7.42-2.474 2.47 7.424 7.424-7.42 7.42 2.47 2.478L20 30.725l7.424 7.423 2.474-2.474-7.42-7.424h-.004ZM30.5 5.5h8.75v40.25H.75V5.5H9.5V9h21V5.5ZM13 5.5V.25h14V5.5H13Z"
    />
  </svg>
)
export default OpenOrderSvg
