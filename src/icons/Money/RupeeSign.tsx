import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RupeeSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00003 4C5.00003 3.44772 5.44774 3 6.00003 3H18C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H14.7429C15.3265 5.7067 15.737 6.56169 15.9093 7.5H18C18.5523 7.5 19 7.94772 19 8.5C19 9.05228 18.5523 9.5 18 9.5H15.9093C15.4391 12.0601 13.1961 14 10.5 14H8.41424L13.7071 19.2929C14.0977 19.6834 14.0977 20.3166 13.7071 20.7071C13.3166 21.0976 12.6834 21.0976 12.2929 20.7071L5.29292 13.7071C5.00692 13.4211 4.92137 12.991 5.07615 12.6173C5.23093 12.2436 5.59557 12 6.00003 12H10.5C12.0855 12 13.4248 10.9457 13.8551 9.5H6.00003C5.44774 9.5 5.00003 9.05228 5.00003 8.5C5.00003 7.94772 5.44774 7.5 6.00003 7.5H13.8551C13.4248 6.05426 12.0855 5 10.5 5H6.00003C5.44774 5 5.00003 4.55228 5.00003 4Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M6.00003 3C5.44774 3 5.00003 3.44772 5.00003 4C5.00003 4.55228 5.44774 5 6.00003 5H10.5C12.0855 5 13.4248 6.05426 13.8551 7.5H15.9093C15.737 6.56169 15.3265 5.7067 14.7429 5H18C18.5523 5 19 4.55228 19 4C19 3.44772 18.5523 3 18 3H6.00003Z" fill="currentColor"/>
<path d="M15.9093 9.5H13.8551C13.4248 10.9457 12.0855 12 10.5 12H6.00003C5.59557 12 5.23093 12.2436 5.07615 12.6173C4.92137 12.991 5.00692 13.4211 5.29292 13.7071L12.2929 20.7071C12.6834 21.0976 13.3166 21.0976 13.7071 20.7071C14.0977 20.3166 14.0977 19.6834 13.7071 19.2929L8.41424 14H10.5C13.1961 14 15.4391 12.0601 15.9093 9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.5C5 7.94772 5.44772 7.5 6 7.5H18C18.5523 7.5 19 7.94772 19 8.5C19 9.05228 18.5523 9.5 18 9.5H6C5.44772 9.5 5 9.05228 5 8.5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default RupeeSign;