import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BracketsRound: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.61914 3C6.37761 5.33579 5 8.50702 5 12C5 15.493 6.37761 18.6642 8.61914 21M15.3809 3C17.6224 5.33579 19 8.50702 19 12C19 15.493 17.6224 18.6642 15.3809 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.31154 2.27849C9.71003 2.66089 9.72306 3.29392 9.34066 3.6924C7.27064 5.84946 6 8.77529 6 12C6 15.2247 7.27064 18.1505 9.34066 20.3076C9.72306 20.7061 9.71003 21.3391 9.31154 21.7215C8.91306 22.1039 8.28003 22.0909 7.89763 21.6924C5.48457 19.1779 4 15.7613 4 12C4 8.23874 5.48457 4.82212 7.89763 2.3076C8.28003 1.90912 8.91306 1.89609 9.31154 2.27849ZM14.6885 2.27849C15.0869 1.89609 15.72 1.90912 16.1024 2.3076C18.5154 4.82212 20 8.23874 20 12C20 15.7613 18.5154 19.1779 16.1024 21.6924C15.72 22.0909 15.0869 22.1039 14.6885 21.7215C14.29 21.3391 14.2769 20.7061 14.6593 20.3076C16.7294 18.1505 18 15.2247 18 12C18 8.77529 16.7294 5.84946 14.6593 3.6924C14.2769 3.29392 14.29 2.66089 14.6885 2.27849Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.61914 3C6.37761 5.33579 5 8.50702 5 12C5 15.493 6.37761 18.6642 8.61914 21M15.3809 3C17.6224 5.33579 19 8.50702 19 12C19 15.493 17.6224 18.6642 15.3809 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.31154 2.27849C9.71003 2.66089 9.72306 3.29392 9.34066 3.6924C7.27064 5.84946 6 8.77529 6 12C6 15.2247 7.27064 18.1505 9.34066 20.3076C9.72306 20.7061 9.71003 21.3391 9.31154 21.7215C8.91306 22.1039 8.28003 22.0909 7.89763 21.6924C5.48457 19.1779 4 15.7613 4 12C4 8.23874 5.48457 4.82212 7.89763 2.3076C8.28003 1.90912 8.91306 1.89609 9.31154 2.27849Z" fill="currentColor"/>
<path opacity="0.3" d="M14.6885 2.27849C15.0869 1.89609 15.72 1.90912 16.1024 2.3076C18.5154 4.82212 20 8.23874 20 12C20 15.7613 18.5154 19.1779 16.1024 21.6924C15.72 22.0909 15.0869 22.1039 14.6885 21.7215C14.29 21.3391 14.2769 20.7061 14.6593 20.3076C16.7294 18.1505 18 15.2247 18 12C18 8.77529 16.7294 5.84946 14.6593 3.6924C14.2769 3.29392 14.29 2.66089 14.6885 2.27849Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.61914 3C6.37761 5.33579 5 8.50702 5 12C5 15.493 6.37761 18.6642 8.61914 21M15.3809 3C17.6224 5.33579 19 8.50702 19 12C19 15.493 17.6224 18.6642 15.3809 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default BracketsRound;