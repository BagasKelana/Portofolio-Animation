import * as React from 'react';
import { SVGProps } from 'react';
const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={45}
    width={45}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#06B6D4"
      d="M22.5 9c-6 0-9.75 3-11.25 8.997 2.25-2.999 4.875-4.123 7.875-3.374 1.712.428 2.935 1.67 4.29 3.044 2.205 2.238 4.758 4.83 10.335 4.83 6 0 9.75-3 11.25-8.998-2.25 2.999-4.875 4.124-7.875 3.374-1.711-.428-2.935-1.67-4.289-3.044C30.63 11.591 28.076 9 22.5 9ZM11.25 22.496c-6 0-9.75 3-11.25 8.998 2.25-3 4.875-4.124 7.875-3.374 1.711.428 2.935 1.67 4.29 3.043 2.205 2.239 4.759 4.83 10.335 4.83 6 0 9.75-3 11.25-8.998-2.25 3-4.875 4.124-7.875 3.374-1.712-.427-2.935-1.67-4.29-3.043-2.205-2.238-4.758-4.83-10.335-4.83Z"
    />
  </svg>
);
export default TailwindIcon;