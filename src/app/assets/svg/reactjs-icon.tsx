import * as React from 'react';
import { SVGProps } from 'react';
const ReactjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={45}
    width={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#61DAFB"
        d="M22.12 25.892c2.179 0 3.944-1.56 3.944-3.486 0-1.925-1.765-3.485-3.944-3.485-2.178 0-3.943 1.56-3.943 3.485 0 1.925 1.765 3.486 3.944 3.486Z"
      />
      <path
        stroke="#61DAFB"
        strokeWidth={5}
        d="M22.12 29.875c10.891 0 19.72-3.344 19.72-7.469s-8.829-7.468-19.72-7.468c-10.89 0-19.719 3.343-19.719 7.468s8.829 7.469 19.72 7.469Z"
      />
      <path
        stroke="#61DAFB"
        strokeWidth={5}
        d="M15.05 26.371c5.905 9.934 13.856 16.212 17.76 14.022 3.905-2.19 2.284-12.018-3.62-21.952C23.286 8.507 15.335 2.23 11.43 4.42c-3.904 2.19-2.283 12.018 3.62 21.952Z"
      />
      <path
        stroke="#61DAFB"
        strokeWidth={5}
        d="M15.05 18.441c-5.903 9.934-7.524 19.762-3.62 21.952 3.905 2.19 11.856-4.088 17.76-14.022 5.904-9.934 7.525-19.762 3.62-21.952-3.904-2.19-11.855 4.088-17.76 14.022Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h45v45H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ReactjsIcon;
