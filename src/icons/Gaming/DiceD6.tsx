import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DiceD6: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7L12 3L21 7M3 7L12 11M3 7V17L12 21M12 21L21 17V7M12 21V11M12 11L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.70307 7.96235C2.37243 7.8154 2 8.05743 2 8.41925V17C2 17.3952 2.23273 17.7533 2.59386 17.9138L10.2969 21.3374C10.6276 21.4844 11 21.2423 11 20.8805V11.9748C11 11.7772 10.8836 11.5982 10.7031 11.5179L2.70307 7.96235Z" fill="currentColor"/>
<path d="M13 20.8805C13 21.2423 13.3724 21.4844 13.7031 21.3374L21.4061 17.9138C21.7673 17.7533 22 17.3952 22 17V8.41925C22 8.05743 21.6276 7.8154 21.2969 7.96235L13.2969 11.5179C13.1164 11.5982 13 11.7772 13 11.9748V20.8805Z" fill="currentColor"/>
<path d="M19.972 6.36259C20.3679 6.18663 20.3679 5.62474 19.972 5.44878L12.4061 2.08619C12.1476 1.97127 11.8524 1.97127 11.5939 2.08619L4.02804 5.44878C3.63213 5.62474 3.63213 6.18663 4.02804 6.36259L11.7969 9.81543C11.9262 9.87289 12.0738 9.87289 12.2031 9.81543L19.972 6.36259Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 7L12 3L21 7V17L12 21L3 17V7Z" fill="currentColor"/>
<path d="M3 7L12 3L21 7M3 7L12 11M3 7V17L12 21M12 21L21 17V7M12 21V11M12 11L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M19.9713 6.36259C20.3672 6.18663 20.3672 5.62474 19.9713 5.44878L12.4055 2.08619C12.1469 1.97127 11.8518 1.97127 11.5932 2.08619L4.0274 5.44878C3.63149 5.62474 3.63149 6.18663 4.0274 6.36259L11.7963 9.81543C11.9256 9.87289 12.0731 9.87289 12.2024 9.81543L19.9713 6.36259Z" fill="currentColor"/>
<path d="M2.70307 7.96236C2.37243 7.81541 2 8.05743 2 8.41926V17C2 17.3952 2.23273 17.7533 2.59386 17.9138L10.2969 21.3374C10.6276 21.4844 11 21.2423 11 20.8805V11.9748C11 11.7772 10.8836 11.5982 10.7031 11.5179L2.70307 7.96236Z" fill="currentColor"/>
<path d="M13 20.8805C13 21.2423 13.3724 21.4844 13.7031 21.3374L21.4061 17.9138C21.7673 17.7533 22 17.3952 22 17V8.41926C22 8.05743 21.6276 7.81541 21.2969 7.96236L13.2969 11.5179C13.1164 11.5982 13 11.7772 13 11.9748V20.8805Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7L12 3L21 7M3 7L12 11M3 7V17L12 21M12 21L21 17V7M12 21V11M12 11L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default DiceD6;