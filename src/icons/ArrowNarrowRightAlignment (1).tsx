import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowNarrowRightAlignment (1): React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V4C19 3.44772 19.4477 3 20 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071C10.9024 16.3166 10.9024 15.6834 11.2929 15.2929L13.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H13.5858L11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V4C19 3.44772 19.4477 3 20 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071C10.9024 16.3166 10.9024 15.6834 11.2929 15.2929L13.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H13.5858L11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289Z" fill="currentColor"/>
</svg>
        )
  }
};

export default ArrowNarrowRightAlignment (1);