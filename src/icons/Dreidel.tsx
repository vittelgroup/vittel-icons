import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Dreidel: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3L16 8M16 8L21 13L17 17M16 8L11 3L7 7M17 17L7 7M17 17L13.5858 20.4142C13.2107 20.7893 12.702 21 12.1716 21H5C3.89543 21 3 20.1046 3 19V11.8284C3 11.298 3.21071 10.7893 3.58579 10.4142L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.2929 2.29289C10.6834 1.90237 11.3166 1.90237 11.7071 2.29289L16 6.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L17.4142 8L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071L18.4142 17L7 5.58579L10.2929 2.29289Z" fill="currentColor"/>
<path d="M5.58579 7L2.87868 9.70711C2.31607 10.2697 2 11.0328 2 11.8284V19C2 20.6569 3.34315 22 5 22H12.1716C12.9672 22 13.7303 21.6839 14.2929 21.1213L17 18.4142L5.58579 7Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 11.8284V19C3 20.1046 3.89543 21 5 21H12.1716C12.702 21 13.2107 20.7893 13.5858 20.4142L17 17L21 13L16 8L11 3L7 7L3.58579 10.4142C3.21071 10.7893 3 11.298 3 11.8284Z" fill="currentColor"/>
<path d="M21 3L16 8M16 8L21 13L17 17M16 8L11 3L7 7M17 17L7 7M17 17L13.5858 20.4142C13.2107 20.7893 12.702 21 12.1716 21H5C3.89543 21 3 20.1046 3 19V11.8284C3 11.298 3.21071 10.7893 3.58579 10.4142L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M10.2943 2.29289C10.6848 1.90237 11.318 1.90237 11.7085 2.29289L16.0014 6.58579L20.2943 2.29289C20.6848 1.90237 21.318 1.90237 21.7085 2.29289C22.099 2.68342 22.099 3.31658 21.7085 3.70711L17.4156 8L21.7085 12.2929C22.099 12.6834 22.099 13.3166 21.7085 13.7071L17 18.41L5.58984 7L10.2943 2.29289Z" fill="currentColor"/>
<path d="M5.58579 7L2.87868 9.70711C2.31607 10.2697 2 11.0328 2 11.8284V19C2 20.6569 3.34315 22 5 22H12.1716C12.9672 22 13.7303 21.6839 14.2929 21.1213L17 18.4142L5.58579 7Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3L16 8M16 8L21 13L17 17M16 8L11 3L7 7M17 17L7 7M17 17L13.5858 20.4142C13.2107 20.7893 12.702 21 12.1716 21H5C3.89543 21 3 20.1046 3 19V11.8284C3 11.298 3.21071 10.7893 3.58579 10.4142L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Dreidel;