import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Scythe: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.3935 6.97651C8.38298 2.64155 15.418 1.91062 21.0973 4.78374C15.7064 4.3631 10.1776 6.1192 5.93875 10.052M3 6.50014L15 21.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.59025 7.57335L2.22963 7.13761C1.87751 6.71213 1.93698 6.08176 2.36246 5.72964C2.68466 5.46299 3.12436 5.43237 3.47175 5.61799C8.71546 1.55141 15.788 0.97749 21.5478 3.89134C21.9739 4.10688 22.1882 4.59359 22.0594 5.05338C21.9306 5.51317 21.4947 5.81777 21.0186 5.78062C16.1904 5.40389 11.2492 6.86409 7.3265 10.1594L15.7704 20.3625C16.1225 20.7879 16.0631 21.4183 15.6376 21.7704C15.2121 22.1226 14.5818 22.0631 14.2296 21.6376L5.20084 10.7278C5.17731 10.7022 5.15538 10.6756 5.13503 10.6483L2.65567 7.6524C2.64962 7.64579 2.64363 7.63909 2.63772 7.63229C2.62103 7.61308 2.60521 7.59342 2.59025 7.57335Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3.39355 6.97651C8.38304 2.64155 15.4181 1.91062 21.0974 4.78374C15.7065 4.3631 10.1777 6.1192 5.93881 10.052L3.39355 6.97651Z" fill="currentColor"/>
<path d="M3.3935 6.97651C8.38298 2.64155 15.418 1.91062 21.0973 4.78374C15.7064 4.3631 10.1776 6.1192 5.93875 10.052M3 6.50014L15 21.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3.47168 5.61813C3.5831 5.67763 3.68502 5.75937 3.77054 5.8627L7.32649 10.1595C11.2492 6.86412 16.1904 5.40388 21.0187 5.78062C21.4948 5.81777 21.9307 5.51317 22.0595 5.05338C22.1883 4.59359 21.974 4.10688 21.5479 3.89134C15.7881 0.977458 8.71541 1.55142 3.47168 5.61813Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36246 5.72988C2.78794 5.37776 3.4183 5.43723 3.77042 5.8627L15.7704 20.3627C16.1225 20.7882 16.0631 21.4185 15.6376 21.7707C15.2121 22.1228 14.5818 22.0633 14.2296 21.6378L2.22963 7.13784C1.87751 6.71236 1.93698 6.082 2.36246 5.72988Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.3935 6.97651C8.38298 2.64155 15.418 1.91062 21.0973 4.78374C15.7064 4.3631 10.1776 6.1192 5.93875 10.052M3 6.50014L15 21.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Scythe;