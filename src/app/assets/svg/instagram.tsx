import * as React from 'react';
import { SVGProps } from 'react';
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16} // ubah width sesuai kebutuhan Anda
    height={16} // ubah height sesuai kebutuhan Anda
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={22}
      height={22}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
      />
      <path
        fill="#000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
      <path fill="#000" d="M6.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </mask>
    <g mask="url(#a)">
      <path fill="#FFFFFF" d="M24 0H0v24h24V0Z" />
    </g>
  </svg>
);
export default InstagramIcon;
