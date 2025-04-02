import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CodesandboxLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 7L11.5263 11L3 7M21 7V17L11.5263 21L3 17V7M21 7L11.5263 3L3 7M11.5249 6.99998L11.512 6.99395M11.512 6.99395L7.26172 4.99998M11.512 6.99395L11.4986 6.99998M11.512 6.99395L16.11 4.93591M17 18.6889V14L21 12M7 18.8765V14L3 12M11.5 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 17L7 18.8765V14L3 12V17Z" fill="currentColor"/>
<path d="M17 18.6889L21 17V12L17 14V18.6889Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26172 4.99998L11.512 6.99395L16.11 4.93591L11.5263 3L7.26172 4.99998Z" fill="currentColor"/>
<path d="M21 7L11.5263 11L3 7M21 7V17M21 7L16.11 4.93591M3 7V17M3 7L11.5263 3M3 7L7.26172 4.99998M11.5263 3L7.26172 4.99998M11.5263 3L16.11 4.93591M11.5249 6.99998L11.512 6.99395M11.512 6.99395L7.26172 4.99998M11.512 6.99395L11.4986 6.99998M11.512 6.99395L16.11 4.93591M21 17L11.5263 21L3 17M21 17L17 18.6889V14L21 12V17ZM3 17L7 18.8765V14L3 12V17ZM11.5 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 17L7 18.8765V14L3 12V17Z" fill="currentColor"/>
<path d="M17 18.6889L21 17V12L17 14V18.6889Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26172 4.99998L11.512 6.99395L16.11 4.93591L11.5263 3L7.26172 4.99998Z" fill="currentColor"/>
</g>
<path d="M21 7L11.5263 11L3 7M21 7V17M21 7L16.11 4.93591M3 7V17M3 7L11.5263 3M3 7L7.26172 4.99998M11.5263 3L7.26172 4.99998M11.5263 3L16.11 4.93591M11.5249 6.99998L11.512 6.99395M11.512 6.99395L7.26172 4.99998M11.512 6.99395L11.4986 6.99998M11.512 6.99395L16.11 4.93591M21 17L11.5263 21L3 17M21 17L17 18.6889V14L21 12V17ZM3 17L7 18.8765V14L3 12V17ZM11.5 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.4">
<path d="M21 7L11.5263 11L3 7V12L7 14V18.8765L11.5 20.9877L11.5263 21L17 18.6889V14L21 12V7Z" fill="currentColor"/>
<path d="M11.5263 11L21 7L16.11 4.93591L11.512 6.99395L7.26172 4.99998L3 7L11.5263 11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9154 2.07879C11.6542 1.96847 11.3584 1.97423 11.1017 2.09462L2.57516 6.09473C2.22415 6.25946 2 6.61226 2 7V17C2 17.3878 2.2242 17.7406 2.57528 17.9053L10.9444 21.8316C11.1033 21.938 11.2944 22 11.5 22L11.5132 21.9999C11.6498 22.0017 11.7867 21.9755 11.9153 21.9212L21.389 17.9212C21.7593 17.7649 22 17.402 22 17V7C22 6.59798 21.7593 6.23505 21.3889 6.07871L11.9154 2.07879ZM4 11.382V8.57371L10.5 11.6231V19.4139L8 18.2411V14C8 13.6212 7.786 13.275 7.44721 13.1056L4 11.382ZM12.5 19.5034V11.6744L20 8.5077V11.382L16.5528 13.1056C16.214 13.275 16 13.6212 16 14V18.0256L12.5 19.5034ZM11.5477 9.90547L18.4288 7.00013L16.1217 6.02628L12.0633 7.8428C11.8997 7.94712 11.7078 8.00252 11.5121 8.00014C11.309 8.00279 11.1102 7.94312 10.9428 7.83149L7.26246 6.1049L5.35449 7L11.5477 9.90547Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 7L11.5263 11L3 7M21 7V17L11.5263 21L3 17V7M21 7L11.5263 3L3 7M11.5249 6.99998L11.512 6.99395M11.512 6.99395L7.26172 4.99998M11.512 6.99395L11.4986 6.99998M11.512 6.99395L16.11 4.93591M17 18.6889V14L21 12M7 18.8765V14L3 12M11.5 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CodesandboxLogo;