import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CoffinCross: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 7V17M9 10H15M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00003 2C8.73481 2 8.48046 2.10536 8.29292 2.29289L3.29292 7.29289C3.01348 7.57233 2.92482 7.99013 3.06668 8.35898L8.06668 21.359C8.21522 21.7452 8.58626 22 9.00003 22H15C15.4138 22 15.7848 21.7452 15.9334 21.359L20.9334 8.35898C21.0752 7.99013 20.9866 7.57233 20.7071 7.29289L15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2H9.00003ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9H9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H13V7Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 3H15L20 8L15 21H9L4 8L9 3Z" fill="currentColor"/>
<path d="M12 7V17M9 10H15M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.00003 2C8.73481 2 8.48046 2.10536 8.29292 2.29289L3.29292 7.29289C3.01348 7.57233 2.92482 7.99013 3.06668 8.35898L8.06668 21.359C8.21522 21.7452 8.58626 22 9.00003 22H15C15.4138 22 15.7848 21.7452 15.9334 21.359L20.9334 8.35898C21.0752 7.99013 20.9866 7.57233 20.7071 7.29289L15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2H9.00003ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9H9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H13V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9H9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H13V7Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 7V17M9 10H15M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CoffinCross;