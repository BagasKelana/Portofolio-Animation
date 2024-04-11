import * as React from 'react';
import { SVGProps } from 'react';
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16} // ubah width sesuai kebutuhan Anda
    height={16} // ubah height sesuai kebutuhan Anda
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#ffffff"
      fillRule="evenodd"
      d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16ZM6.667 9.333a1.333 1.333 0 0 0-1.334 1.334v6.666a1.333 1.333 0 1 0 2.667 0v-6.666a1.333 1.333 0 0 0-1.333-1.334Zm4-1.333a1.333 1.333 0 0 0-1.334 1.333v8a1.333 1.333 0 1 0 2.667 0v-4.88a5.541 5.541 0 0 1 1.857-1.324c.444-.189 1.112-.266 1.576-.12.154.04.291.127.391.251.07.093.176.301.176.74v5.333a1.333 1.333 0 1 0 2.667 0V12c0-.893-.227-1.688-.699-2.325a3.387 3.387 0 0 0-1.735-1.21c-1.202-.377-2.534-.168-3.424.214a7.76 7.76 0 0 0-.83.416A1.334 1.334 0 0 0 10.667 8Zm-4-2.667a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LinkedinIcon;
