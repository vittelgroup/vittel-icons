import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowCircleUpRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.4998 8C9.94753 8 9.49981 8.44772 9.49981 9C9.49981 9.55228 9.94753 10 10.4998 10H12.5856L8.29289 14.2928C7.90237 14.6834 7.90237 15.3165 8.2929 15.7071C8.68343 16.0976 9.31659 16.0976 9.70711 15.707L13.9998 11.4143V13.5C13.9998 14.0523 14.4475 14.5 14.9998 14.5C15.5521 14.5 15.9998 14.0523 15.9998 13.5V9C15.9998 8.44772 15.5521 8 14.9998 8H10.4998Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4998 8C9.94753 8 9.49981 8.44772 9.49981 9C9.49981 9.55228 9.94753 10 10.4998 10H12.5856L8.29289 14.2928C7.90237 14.6834 7.90237 15.3165 8.2929 15.7071C8.68343 16.0976 9.31659 16.0976 9.70711 15.707L13.9998 11.4143V13.5C13.9998 14.0523 14.4475 14.5 14.9998 14.5C15.5521 14.5 15.9998 14.0523 15.9998 13.5V9C15.9998 8.44772 15.5521 8 14.9998 8H10.4998Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ArrowCircleUpRight;