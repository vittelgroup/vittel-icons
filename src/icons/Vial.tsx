import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Vial: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 9L9.50038 19.5C8.11966 20.8807 5.88109 20.8807 4.50038 19.5C3.11967 18.1193 3.11967 15.8807 4.50038 14.5L15 4M14.0004 3L21.0004 10M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2933 2.29289C13.6838 1.90237 14.317 1.90237 14.7075 2.29289L21.7075 9.29289C22.098 9.68342 22.098 10.3166 21.7075 10.7071C21.317 11.0976 20.6838 11.0976 20.2933 10.7071L20.0002 10.414L10.2075 20.2071C8.43626 21.9783 5.56451 21.9783 3.79327 20.2071C2.02204 18.4359 2.02204 15.5641 3.79326 13.7929C7.0575 10.5285 10.3217 7.26419 13.586 3.99982L13.2933 3.70711C12.9027 3.31658 12.9027 2.68342 13.2933 2.29289ZM15.0002 5.41404L9.41444 11H16.5859L18.586 8.99982L15.0002 5.41404Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4.50038 19.5C3.11967 18.1193 3.11967 15.8807 4.50038 14.5L7 12H17L9.50038 19.5C8.11966 20.8807 5.88109 20.8807 4.50038 19.5Z" fill="currentColor"/>
<path d="M20 9L9.50038 19.5C8.11966 20.8807 5.88109 20.8807 4.50038 19.5C3.11967 18.1193 3.11967 15.8807 4.50038 14.5L15 4M14.0004 3L21.0004 10M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13.3284 2.29289C13.719 1.90237 14.3521 1.90237 14.7426 2.29289L21.7426 9.29289C22.1332 9.68342 22.1332 10.3166 21.7426 10.7071C21.3521 11.0976 20.719 11.0976 20.3284 10.7071L20.0354 10.414L10.2427 20.2071C8.47141 21.9783 5.59966 21.9783 3.82843 20.2071C2.05719 18.4359 2.05719 15.5641 3.82842 13.7929C7.09266 10.5285 10.3569 7.26419 13.6211 3.99982L13.3284 3.70711C12.9379 3.31658 12.9379 2.68342 13.3284 2.29289ZM15.0354 5.41404L9.4496 11H16.621L18.6211 8.99982L15.0354 5.41404Z" fill="currentColor"/>
<path d="M9.41444 10.9999H16.5856L8.79327 18.7928C7.80308 19.783 6.19767 19.783 5.20748 18.7928C4.2173 17.8026 4.2173 16.1972 5.20749 15.207L9.41444 10.9999Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 9L9.50038 19.5C8.11966 20.8807 5.88109 20.8807 4.50038 19.5C3.11967 18.1193 3.11967 15.8807 4.50038 14.5L15 4M14.0004 3L21.0004 10M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Vial;