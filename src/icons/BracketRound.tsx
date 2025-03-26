import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BracketRound: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.6191 3C11.3776 5.33579 10 8.50702 10 12C10 15.493 11.3776 18.6642 13.6191 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3115 2.27849C14.71 2.66089 14.7231 3.29392 14.3407 3.6924C12.2706 5.84946 11 8.77529 11 12C11 15.2247 12.2706 18.1505 14.3407 20.3076C14.7231 20.7061 14.71 21.3391 14.3115 21.7215C13.9131 22.1039 13.28 22.0909 12.8976 21.6924C10.4846 19.1779 9 15.7613 9 12C9 8.23874 10.4846 4.82212 12.8976 2.3076C13.28 1.90912 13.9131 1.89609 14.3115 2.27849Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.6191 3C11.3776 5.33579 10 8.50702 10 12C10 15.493 11.3776 18.6642 13.6191 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11 12H9C9 15.7613 10.4846 19.1779 12.8976 21.6924C13.28 22.0909 13.9131 22.1039 14.3115 21.7215C14.71 21.3391 14.7231 20.7061 14.3407 20.3076C12.2706 18.1505 11 15.2247 11 12Z" fill="currentColor"/>
<path d="M14.3407 3.6924C14.7231 3.29392 14.71 2.66089 14.3115 2.27849C13.9131 1.89609 13.28 1.90912 12.8976 2.3076C10.4846 4.82212 9 8.23874 9 12H11C11 8.77529 12.2706 5.84946 14.3407 3.6924Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.6191 3C11.3776 5.33579 10 8.50702 10 12C10 15.493 11.3776 18.6642 13.6191 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default BracketRound;