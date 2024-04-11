import * as React from 'react';
import { SVGProps } from 'react';
const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path fill="#E44D26" d="M6.31 40.516 2.7 0h39.684l-3.61 40.494L22.51 45" />
    <path fill="#F16529" d="M22.542 41.555V3.325h16.221l-3.095 34.566" />
    <path
      fill="#EBEBEB"
      d="M10.072 8.28h12.47v4.967H15.52l.459 5.086h6.563v4.955H11.429L10.072 8.28Zm1.576 17.502h4.987l.35 3.97 5.557 1.488v5.185L12.347 33.58"
    />
    <path
      fill="#fff"
      d="M34.968 8.28H22.52v4.967h11.988l.46-4.966Zm-.908 10.053H22.52v4.966h6.125l-.58 6.453-5.545 1.488v5.163l10.173-2.822"
    />
  </svg>
);
export default HtmlIcon;
