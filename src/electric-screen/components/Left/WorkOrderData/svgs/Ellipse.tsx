import { SVGProps } from "react"

const Ellipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={317}
    height={317}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M317 158.5c0 87.537-70.963 158.5-158.5 158.5S0 246.037 0 158.5 70.963 0 158.5 0 317 70.963 317 158.5Zm-285.3 0c0 70.03 56.77 126.8 126.8 126.8s126.8-56.77 126.8-126.8S228.53 31.7 158.5 31.7 31.7 88.47 31.7 158.5Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={158.5}
        x2={158.5}
        y1={14.152}
        y2={317}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#82C5F9" />
        <stop offset={1} stopColor="#8CF1EB" />
      </linearGradient>
    </defs>
  </svg>
)
export default Ellipse
