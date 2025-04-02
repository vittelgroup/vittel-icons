import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BlockBrick: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7.5H21M3 12H21M3 16.5H21M12 21V16.5M12 12V7.5M16 16.5V12M16 7.5V3M8 16.5V12M8 7.5V3M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 2H3C2.44772 2 2 2.44772 2 3V6.5H7V2Z" fill="currentColor"/>
<path d="M2 8.5V11H11V8.5H2Z" fill="currentColor"/>
<path d="M2 13V15.5H7V13H2Z" fill="currentColor"/>
<path d="M2 17.5V21C2 21.5523 2.44772 22 3 22H11V17.5H2Z" fill="currentColor"/>
<path d="M13 22H21C21.5523 22 22 21.5523 22 21V17.5H13V22Z" fill="currentColor"/>
<path d="M22 15.5V13H17V15.5H22Z" fill="currentColor"/>
<path d="M22 11V8.5H13V11H22Z" fill="currentColor"/>
<path d="M22 6.5V3C22 2.44772 21.5523 2 21 2H17V6.5H22Z" fill="currentColor"/>
<path d="M15 2H9V6.5H15V2Z" fill="currentColor"/>
<path d="M9 13H15V15.5H9V13Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 3H3V21H21V3Z" fill="currentColor"/>
<path d="M3 7.5H21M3 12H21M3 16.5H21M12 21V16.5M12 12V7.5M16 16.5V12M16 7.5V3M8 16.5V12M8 7.5V3M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5H7V2H9V6.5H15V2H17V6.5H22V8.5H13V11H22V13H17V15.5H22V17.5H13V22H11V17.5H2V15.5H7V13H2V11H11V8.5H2V6.5ZM9 13H15V15.5H9V13Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7.5H21M3 12H21M3 16.5H21M12 21V16.5M12 12V7.5M16 16.5V12M16 7.5V3M8 16.5V12M8 7.5V3M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default BlockBrick;