import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SlashFlip: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 21L8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4064 21.9138C16.9111 21.6895 17.1384 21.0986 16.9141 20.5939L8.91406 2.59387C8.68976 2.08918 8.0988 1.86189 7.59411 2.08619C7.08943 2.3105 6.86213 2.90146 7.08644 3.40614L15.0864 21.4061C15.3107 21.9108 15.9017 22.1381 16.4064 21.9138Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 21L8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.4064 21.9138C16.9111 21.6895 17.1384 21.0986 16.9141 20.5939L8.91406 2.59387C8.68976 2.08918 8.0988 1.86189 7.59411 2.08619C7.08943 2.3105 6.86213 2.90146 7.08644 3.40614L15.0864 21.4061C15.3107 21.9108 15.9017 22.1381 16.4064 21.9138Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 21L8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default SlashFlip;