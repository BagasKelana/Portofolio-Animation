import * as React from 'react';
import { SVGProps } from 'react';
const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <rect width={45} height={45} fill="#1C1C1C" rx={7} />
    <rect
      width={44.8}
      height={44.8}
      x={0.1}
      y={0.1}
      stroke="#DFDFDF"
      strokeOpacity={0.3}
      strokeWidth={0.2}
      rx={6.9}
    />
    <path
      fill="#0ACF83"
      d="M17.052 41.11c3.573 0 6.473-2.9 6.473-6.472v-6.473h-6.473a6.475 6.475 0 0 0-6.473 6.473c0 3.573 2.9 6.473 6.473 6.473Z"
    />
    <path
      fill="#A259FF"
      d="M10.58 22.19c0-3.299 2.899-5.975 6.472-5.975h6.473v11.95h-6.473c-3.573 0-6.473-2.677-6.473-5.975Z"
    />
    <path
      fill="#F24E1E"
      d="M10.58 9.742c0-3.573 2.899-6.473 6.472-6.473h6.473v12.946h-6.473a6.475 6.475 0 0 1-6.473-6.473Z"
    />
    <path
      fill="#FF7262"
      d="M23.525 3.269H29.5c3.298 0 5.975 2.9 5.975 6.473s-2.677 6.473-5.975 6.473h-5.975V3.269Z"
    />
    <path
      fill="#1ABCFE"
      d="M35.475 22.19a5.977 5.977 0 0 1-5.975 5.975 5.977 5.977 0 0 1-5.975-5.975 5.977 5.977 0 0 1 5.975-5.975 5.977 5.977 0 0 1 5.975 5.975Z"
    />
  </svg>
);
export default FigmaIcon;
