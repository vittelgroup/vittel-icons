import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowNarrowDownMove (1): React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4ZM12 7C12.5523 7 13 7.44772 13 8V17.5858L15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929L11 17.5858V8C11 7.44772 11.4477 7 12 7Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4ZM12 7C12.5523 7 13 7.44772 13 8V17.5858L15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929L11 17.5858V8C11 7.44772 11.4477 7 12 7Z" fill="currentColor"/>
</svg>
        )
  }
};

export default ArrowNarrowDownMove (1);