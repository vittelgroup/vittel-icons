import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Map: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5.38197L3.44721 3.10557C3.13723 2.95058 2.76909 2.96714 2.47427 3.14935C2.17945 3.33156 2 3.65342 2 4V17C2 17.3788 2.214 17.725 2.55279 17.8944L8 20.618V5.38197Z" fill="currentColor"/>
<path d="M10 20.618V5.38197L14 3.38197V18.618L10 20.618Z" fill="currentColor"/>
<path d="M16 18.618L20.5528 20.8944C20.8628 21.0494 21.2309 21.0329 21.5257 20.8507C21.8205 20.6684 22 20.3466 22 20V7C22 6.62123 21.786 6.27497 21.4472 6.10557L16 3.38197V18.618Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M9 7L3 4V17L9 20V7Z" fill="currentColor"/>
<path d="M15 17L21 20V7L15 4V17Z" fill="currentColor"/>
</g>
<path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M9 21V5.88197L14.5528 3.10557C14.6936 3.03519 14.8468 3 15 3V18.118L9.44721 20.8944C9.30645 20.9648 9.15322 21 9 21Z" fill="currentColor"/>
<path d="M9 5.88197L3.44721 3.10557C3.13723 2.95058 2.76909 2.96714 2.47427 3.14935C2.17945 3.33156 2 3.65342 2 4V17C2 17.3788 2.214 17.725 2.55279 17.8944L8.55279 20.8944C8.69355 20.9648 8.84678 21 9 21V5.88197Z" fill="currentColor"/>
<path d="M15 18.118L20.5528 20.8944C20.8628 21.0494 21.2309 21.0329 21.5257 20.8507C21.8205 20.6684 22 20.3466 22 20V7C22 6.62123 21.786 6.27497 21.4472 6.10557L15.4472 3.10557C15.3064 3.03519 15.1532 3 15 3V18.118Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Map;