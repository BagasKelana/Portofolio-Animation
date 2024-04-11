import * as React from 'react';
import { SVGProps } from 'react';
const CssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#264DE4"
      d="m42.379 0-3.615 40.495L22.515 45 6.311 40.502 2.7 0h39.679Z"
    />
    <path
      fill="#2965F1"
      d="m35.67 37.917 3.088-34.605H22.54v38.245l13.13-3.64Z"
    />
    <path
      fill="#EBEBEB"
      d="m10.978 18.333.445 4.968H22.54v-4.968H10.98ZM22.54 8.28H10.083l.451 4.967H22.54V8.279ZM22.54 36.402v-5.168l-.022.006-5.533-1.494-.353-3.962h-4.987l.696 7.8 10.176 2.824.022-.006Z"
    />
    <path
      fill="#fff"
      d="m28.639 23.3-.577 6.443-5.54 1.495v5.168l10.184-2.822.074-.84 1.168-13.077.12-1.334.898-10.054H22.521v4.968h7l-.452 5.086h-6.548v4.968h6.117Z"
    />
  </svg>
);
export default CssIcon;
