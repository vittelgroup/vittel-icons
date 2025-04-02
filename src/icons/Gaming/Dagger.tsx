import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Dagger: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V7M6 7H18M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7ZM18 7C17.4477 7 17 7.44772 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 7.44772 18.5523 7 18 7ZM9 11V18L12 21L15 18V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V6H6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10C7.10457 10 8 9.10457 8 8H16C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6H13V3Z" fill="currentColor"/>
<path d="M9 10C8.44772 10 8 10.4477 8 11V18C8 18.2652 8.10536 18.5196 8.29289 18.7071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L15.7071 18.7071C15.8946 18.5196 16 18.2652 16 18V11C16 10.4477 15.5523 10 15 10H9Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M7 8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8Z" fill="currentColor"/>
<path d="M19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8Z" fill="currentColor"/>
<path d="M9 11V18L12 21L15 18V11H9Z" fill="currentColor"/>
</g>
<path d="M12 3V7M6 7H18M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7ZM18 7C17.4477 7 17 7.44772 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 7.44772 18.5523 7 18 7ZM9 11V18L12 21L15 18V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M9 10C8.44772 10 8 10.4477 8 11V18C8 18.2652 8.10536 18.5196 8.29289 18.7071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L15.7071 18.7071C15.8946 18.5196 16 18.2652 16 18V11C16 10.4477 15.5523 10 15 10H9Z" fill="currentColor"/>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V6H6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10C7.10457 10 8 9.10457 8 8H16C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6H13V3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V7M6 7H18M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7ZM18 7C17.4477 7 17 7.44772 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 7.44772 18.5523 7 18 7ZM9 11V18L12 21L15 18V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Dagger;