import * as React from 'react';
import { SVGProps } from 'react';
const PrismaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={45}
    width={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#2D3748"
        fillRule="evenodd"
        d="M4.398 30.888a2.24 2.24 0 0 1-.018-2.371L21.207 1.07c.936-1.527 3.195-1.393 3.945.233l15.372 33.344a2.241 2.241 0 0 1-1.392 3.085l-23.911 7.173a2.241 2.241 0 0 1-2.537-.946L4.398 30.888Zm18.75-21.793c.162-.808 1.268-.924 1.595-.168l10.603 24.535a.84.84 0 0 1-.53 1.139l-16.522 4.931a.84.84 0 0 1-1.064-.97l5.918-29.467Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h45v45H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PrismaIcon;
