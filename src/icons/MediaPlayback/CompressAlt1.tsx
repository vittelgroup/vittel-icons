import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CompressAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M15 9H19.5M15 9V4.5M9 15L3 21M9 15H4.5M9 15V19.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L17.4142 8H19.5C20.0523 8 20.5 8.44772 20.5 9C20.5 9.55228 20.0523 10 19.5 10H15C14.4477 10 14 9.55228 14 9V4.5C14 3.94772 14.4477 3.5 15 3.5C15.5523 3.5 16 3.94772 16 4.5V6.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289ZM8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289ZM3.5 15C3.5 14.4477 3.94772 14 4.5 14H9C9.55228 14 10 14.4477 10 15V19.5C10 20.0523 9.55228 20.5 9 20.5C8.44772 20.5 8 20.0523 8 19.5V17.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L6.58579 16H4.5C3.94772 16 3.5 15.5523 3.5 15Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M15 9H19.5M15 9V4.5M9 15L3 21M9 15H4.5M9 15V19.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.3" x="8.99023" y="7.57532" width="10.5024" height="2" rx="1" transform="rotate(45 8.99023 7.57532)" fill="#0000CC"/>
<path d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L17.4142 8H19.5C20.0523 8 20.5 8.44772 20.5 9C20.5 9.55228 20.0523 10 19.5 10H15C14.4477 10 14 9.55228 14 9V4.5C14 3.94772 14.4477 3.5 15 3.5C15.5523 3.5 16 3.94772 16 4.5V6.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" fill="currentColor"/>
<path d="M3.5 15C3.5 14.4477 3.94772 14 4.5 14H9C9.55228 14 10 14.4477 10 15V19.5C10 20.0523 9.55228 20.5 9 20.5C8.44772 20.5 8 20.0523 8 19.5V17.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L6.58579 16H4.5C3.94772 16 3.5 15.5523 3.5 15Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M15 9H19.5M15 9V4.5M9 15L3 21M9 15H4.5M9 15V19.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CompressAlt1;