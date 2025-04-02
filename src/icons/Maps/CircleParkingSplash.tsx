import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleParkingSplash: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.08737 3.48174C10.0009 3.16946 10.9807 3 12 3C16.9706 3 21 7.02944 21 12C21 13.0196 20.8304 13.9997 20.518 14.9134M18.3639 18.364C16.7352 19.9927 14.4852 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51791 4.00477 7.27051 5.62976 5.64233M3 3L21 21M13.6966 8.09834C14.5115 8.33429 15.155 8.9737 15.3966 9.78613M9.5 9.5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.5 10.5C16.5 11.0232 16.3852 11.5195 16.1795 11.9652L20.8584 16.6442C21.5875 15.2565 22 13.6764 22 12C22 6.47715 17.5228 2 12 2C10.3236 2 8.74353 2.41251 7.35578 3.14157L11.2142 7H13C14.933 7 16.5 8.567 16.5 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25705 5.67127C2.84637 7.39514 2 9.59873 2 12C2 17.5228 6.47715 22 12 22C14.4013 22 16.6049 21.1536 18.3287 19.7429L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L4.25705 5.67127ZM8.5 9.91421L12.5858 14H10.5V16C10.5 16.5523 10.0523 17 9.5 17C8.94772 17 8.5 16.5523 8.5 16V9.91421Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/>
<path d="M9.08737 3.48174C10.0009 3.16946 10.9807 3 12 3C16.9706 3 21 7.02944 21 12C21 13.0196 20.8304 13.9997 20.518 14.9134M18.3639 18.364C16.7352 19.9927 14.4852 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51791 4.00477 7.27051 5.62976 5.64233M3 3L21 21M13.6966 8.09834C14.5115 8.33429 15.155 8.9737 15.3966 9.78613M9.5 9.5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M4.25705 5.67127C2.84637 7.39514 2 9.59873 2 12C2 17.5228 6.47715 22 12 22C14.4013 22 16.6049 21.1536 18.3287 19.7429L12.5858 14H10.5V16C10.5 16.5523 10.0523 17 9.5 17C8.94772 17 8.5 16.5523 8.5 16V9.91421L4.25705 5.67127Z" fill="currentColor"/>
<path d="M16.1795 11.9652C16.3852 11.5195 16.5 11.0232 16.5 10.5C16.5 8.567 14.933 7 13 7H11.2142L7.35578 3.14157C8.74353 2.41251 10.3236 2 12 2C17.5228 2 22 6.47715 22 12C22 13.6764 21.5875 15.2565 20.8584 16.6442L16.1795 11.9652Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.08737 3.48174C10.0009 3.16946 10.9807 3 12 3C16.9706 3 21 7.02944 21 12C21 13.0196 20.8304 13.9997 20.518 14.9134M18.3639 18.364C16.7352 19.9927 14.4852 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51791 4.00477 7.27051 5.62976 5.64233M3 3L21 21M13.6966 8.09834C14.5115 8.33429 15.155 8.9737 15.3966 9.78613M9.5 9.5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleParkingSplash;