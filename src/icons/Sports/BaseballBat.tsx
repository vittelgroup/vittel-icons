import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BaseballBat: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5M3 19L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.7071 2.29289C17.3166 1.90237 16.6834 1.90237 16.2929 2.29289L9.82562 8.76016C9.06561 9.52018 8.43309 10.3977 7.95242 11.3591L6.25873 14.7465C5.87419 15.5156 5.36818 16.2176 4.76016 16.8256L3.46919 18.1166C3.09117 17.9157 2.61136 17.9744 2.29289 18.2929C1.90237 18.6834 1.90237 19.3166 2.29289 19.7071L4.29289 21.7071C4.68342 22.0976 5.31658 22.0976 5.70711 21.7071C6.02557 21.3886 6.08433 20.9088 5.8834 20.5308L7.17438 19.2398C7.78239 18.6318 8.48444 18.1258 9.25352 17.7413L13.9472 15.3944C14.0433 15.3464 14.1311 15.2831 14.2071 15.2071L21.7071 7.70711C22.0976 7.31658 22.0976 6.68342 21.7071 6.29289L17.7071 2.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5L3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727Z" fill="currentColor"/>
<path d="M3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5M3 19L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5L3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727Z" fill="currentColor"/>
<path d="M3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5M3 19L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 19.5L5.46727 17.5327C6.15128 16.8487 6.72055 16.0589 7.15315 15.1937L8.84685 11.8063C9.27945 10.9411 9.84872 10.1513 10.5327 9.46727L17 3L21 7L13.5 14.5L8.80631 16.8468C7.9411 17.2795 7.15128 17.8487 6.46727 18.5327L4.5 20.5M3 19L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default BaseballBat;