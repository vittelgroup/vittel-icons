import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MediumLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 16V8M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12ZM18 12C18 14.2091 17.1046 16 16 16C14.8954 16 14 14.2091 14 12C14 9.79086 14.8954 8 16 8C17.1046 8 18 9.79086 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7Z" fill="currentColor"/>
<path d="M16 7C14.8649 7 14.1064 7.8942 13.6914 8.72436C13.2464 9.61434 13 10.7738 13 12C13 13.2262 13.2464 14.3857 13.6914 15.2756C14.1064 16.1058 14.8649 17 16 17C17.1351 17 17.8936 16.1058 18.3086 15.2756C18.7536 14.3857 19 13.2262 19 12C19 10.7738 18.7536 9.61434 18.3086 8.72436C17.8936 7.8942 17.1351 7 16 7Z" fill="currentColor"/>
<path d="M22 8C22 7.44772 21.5523 7 21 7C20.4477 7 20 7.44772 20 8V16C20 16.5523 20.4477 17 21 17C21.5523 17 22 16.5523 22 16V8Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z" fill="currentColor"/>
<path d="M18 12C18 14.2091 17.1046 16 16 16C14.8954 16 14 14.2091 14 12C14 9.79086 14.8954 8 16 8C17.1046 8 18 9.79086 18 12Z" fill="currentColor"/>
</g>
<path d="M21 16V8M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12ZM18 12C18 14.2091 17.1046 16 16 16C14.8954 16 14 14.2091 14 12C14 9.79086 14.8954 8 16 8C17.1046 8 18 9.79086 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M13.6914 8.72436C14.1064 7.8942 14.8649 7 16 7C17.1351 7 17.8936 7.8942 18.3086 8.72436C18.7536 9.61434 19 10.7738 19 12C19 13.2262 18.7536 14.3857 18.3086 15.2756C17.8936 16.1058 17.1351 17 16 17C14.8649 17 14.1064 16.1058 13.6914 15.2756C13.2464 14.3857 13 13.2262 13 12C13 10.7738 13.2464 9.61434 13.6914 8.72436Z" fill="currentColor"/>
<path d="M22 8C22 7.44772 21.5523 7 21 7C20.4477 7 20 7.44772 20 8V16C20 16.5523 20.4477 17 21 17C21.5523 17 22 16.5523 22 16V8Z" fill="currentColor"/>
</g>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 16V8M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12ZM18 12C18 14.2091 17.1046 16 16 16C14.8954 16 14 14.2091 14 12C14 9.79086 14.8954 8 16 8C17.1046 8 18 9.79086 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MediumLogo;