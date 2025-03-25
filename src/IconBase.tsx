import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const IconBase = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, children, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} {...props}>
      {children}
    </svg>
  )
);

export default IconBase;
