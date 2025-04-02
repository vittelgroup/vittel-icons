import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BracketRoundRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3C12.2415 5.33579 13.6191 8.50702 13.6191 12C13.6191 15.493 12.2415 18.6642 10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.3076 2.27849C8.90912 2.66089 8.89608 3.29392 9.27848 3.6924C11.3485 5.84946 12.6191 8.77529 12.6191 12C12.6191 15.2247 11.3485 18.1505 9.27848 20.3076C8.89608 20.7061 8.90912 21.3391 9.3076 21.7215C9.70608 22.1039 10.3391 22.0909 10.7215 21.6924C13.1346 19.1779 14.6191 15.7613 14.6191 12C14.6191 8.23874 13.1346 4.82212 10.7215 2.3076C10.3391 1.90912 9.70608 1.89609 9.3076 2.27849Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.3076 2.27849C8.90912 2.66089 8.89608 3.29392 9.27848 3.6924C11.3485 5.84946 12.6191 8.77529 12.6191 12C12.6191 15.2247 11.3485 18.1505 9.27848 20.3076C8.89608 20.7061 8.90912 21.3391 9.3076 21.7215C9.70608 22.1039 10.3391 22.0909 10.7215 21.6924C13.1346 19.1779 14.6191 15.7613 14.6191 12C14.6191 8.23874 13.1346 4.82212 10.7215 2.3076C10.3391 1.90912 9.70608 1.89609 9.3076 2.27849Z" fill="currentColor"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.6191 12H14.6191C14.6191 15.7613 13.1346 19.1779 10.7215 21.6924C10.3391 22.0909 9.70608 22.1039 9.3076 21.7215C8.90912 21.3391 8.89609 20.7061 9.27849 20.3076C11.3485 18.1505 12.6191 15.2247 12.6191 12Z" fill="currentColor"/>
<path d="M9.27849 3.6924C8.89609 3.29392 8.90912 2.66089 9.3076 2.27849C9.70608 1.89609 10.3391 1.90912 10.7215 2.3076C13.1346 4.82212 14.6191 8.23874 14.6191 12H12.6191C12.6191 8.77529 11.3485 5.84946 9.27849 3.6924Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3C12.2415 5.33579 13.6191 8.50702 13.6191 12C13.6191 15.493 12.2415 18.6642 10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
  }
};

export default BracketRoundRight;