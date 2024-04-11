import * as React from 'react';
import { SVGProps } from 'react';
const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect width={45} height={45} fill="#000" rx={10} />
      <path
        fill="#000"
        d="M22.5 45C34.926 45 45 34.926 45 22.5 45 10.073 34.926 0 22.5 0S0 10.073 0 22.5C0 34.926 10.074 45 22.5 45Z"
      />
      <path
        fill="url(#b)"
        d="M37.377 39.38 17.285 13.5H13.5v17.992h3.028V17.346L35 41.21a22.607 22.607 0 0 0 2.377-1.831Z"
      />
      <path fill="url(#c)" d="M31.75 13.5h-3v18h3v-18Z" />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={27.25}
        x2={36.125}
        y1={29.125}
        y2={40.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={30.25}
        x2={30.2}
        y1={13.5}
        y2={26.719}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <rect width={45} height={45} fill="#fff" rx={10} />
      </clipPath>
    </defs>
  </svg>
);
export default NextjsIcon;
