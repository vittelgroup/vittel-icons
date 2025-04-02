import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Coffin: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29292 2.29289C8.48046 2.10536 8.73481 2 9.00003 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289L20.7071 7.29289C20.9866 7.57233 21.0752 7.99013 20.9334 8.35898L15.9334 21.359C15.7848 21.7452 15.4138 22 15 22H9.00003C8.58626 22 8.21522 21.7452 8.06668 21.359L3.06668 8.35898C2.92482 7.99013 3.01348 7.57233 3.29292 7.29289L8.29292 2.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 3H15L20 8L15 21H9L4 8L9 3Z" fill="currentColor"/>
<path d="M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.29292 2.29289C8.48046 2.10536 8.73481 2 9.00003 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289L20.7071 7.29289C20.9866 7.57233 21.0752 7.99013 20.9334 8.35898L15.9334 21.359C15.7848 21.7452 15.4138 22 15 22H9.00003C8.58626 22 8.21522 21.7452 8.06668 21.359L3.06668 8.35898C2.92482 7.99013 3.01348 7.57233 3.29292 7.29289L8.29292 2.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 3H15L20 8L15 21H9L4 8L9 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Coffin;