import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DiceD4: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3L3 15L12 21M12 3L21 15L12 21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 4.16669C11 3.68619 10.3883 3.48229 10.1 3.86669L2.20001 14.4C2.0351 14.6199 1.96796 14.898 2.01436 15.1689C2.06076 15.4398 2.21662 15.6796 2.44531 15.8321L10.2226 21.017C10.5549 21.2385 11 21.0003 11 20.6009V4.16669Z" fill="currentColor"/>
<path d="M13 20.601C13 21.0003 13.4451 21.2385 13.7774 21.017L21.5547 15.8321C21.7834 15.6796 21.9392 15.4398 21.9857 15.1689C22.0321 14.898 21.9649 14.6199 21.8 14.4L13.9 3.86668C13.6117 3.48227 13 3.68617 13 4.16668V20.601Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 15L12 3L21 15L12 21L3 15Z" fill="currentColor"/>
<path d="M12 3L3 15L12 21M12 3L21 15L12 21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M13 20.6009C13 21.0002 13.4451 21.2384 13.7774 21.0169L21.5547 15.832C21.7834 15.6796 21.9392 15.4397 21.9857 15.1688C22.0321 14.8979 21.9649 14.6198 21.8 14.4L13.9 3.86662C13.6117 3.48221 13 3.68611 13 4.16662V20.6009Z" fill="currentColor"/>
<path d="M11 4.16662C11 3.68611 10.3883 3.48221 10.1 3.86662L2.20001 14.3999C2.0351 14.6198 1.96796 14.8979 2.01436 15.1688C2.06076 15.4397 2.21662 15.6795 2.44531 15.832L10.2226 21.0169C10.5549 21.2384 11 21.0002 11 20.6009V4.16662Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3L3 15L12 21M12 3L21 15L12 21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default DiceD4;