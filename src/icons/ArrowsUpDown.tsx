import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowsUpDown: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V21M12 3L16 7M12 3L8 7M12 21L8 17M12 21L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V18.5858L15.2929 16.2929C15.6834 15.9024 16.3166 15.9024 16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071L12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071L7.29289 17.7071C6.90237 17.3166 6.90237 16.6834 7.29289 16.2929C7.68342 15.9024 8.31658 15.9024 8.70711 16.2929L11 18.5858V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V21M12 3L16 7M12 3L8 7M12 21L8 17M12 21L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071L7.29289 17.7071C6.90237 17.3166 6.90237 16.6834 7.29289 16.2929C7.68342 15.9024 8.31658 15.9024 8.70711 16.2929L11 18.5858V12H13V18.5858L15.2929 16.2929C15.6834 15.9024 16.3166 15.9024 16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071L12.7071 21.7071Z" fill="currentColor"/>
<path d="M12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11 5.41421V12H13V5.41421L15.2929 7.70711C15.6834 8.09763 16.3166 8.09763 16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289L12.7071 2.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V21M12 3L16 7M12 3L8 7M12 21L8 17M12 21L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowsUpDown;