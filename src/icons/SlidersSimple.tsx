import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SlidersSimple: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 8.5C8 9.88071 6.88071 11 5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6C6.88071 6 8 7.11929 8 8.5ZM8 8.5H21M16 15.5C16 16.8807 17.1193 18 18.5 18C19.8807 18 21 16.8807 21 15.5C21 14.1193 19.8807 13 18.5 13C17.1193 13 16 14.1193 16 15.5ZM16 15.5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.5C2 6.567 3.567 5 5.5 5C7.08551 5 8.42479 6.05426 8.85506 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H8.85506C8.42479 10.9457 7.08551 12 5.5 12C3.567 12 2 10.433 2 8.5ZM15.1449 14.5C15.5752 13.0543 16.9145 12 18.5 12C20.433 12 22 13.567 22 15.5C22 17.433 20.433 19 18.5 19C16.9145 19 15.5752 17.9457 15.1449 16.5H3C2.44772 16.5 2 16.0523 2 15.5C2 14.9477 2.44772 14.5 3 14.5H15.1449Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M5.5 11C6.88071 11 8 9.88071 8 8.5C8 7.11929 6.88071 6 5.5 6C4.11929 6 3 7.11929 3 8.5C3 9.88071 4.11929 11 5.5 11Z" fill="currentColor"/>
<path d="M18.5 18C19.8807 18 21 16.8807 21 15.5C21 14.1193 19.8807 13 18.5 13C17.1193 13 16 14.1193 16 15.5C16 16.8807 17.1193 18 18.5 18Z" fill="currentColor"/>
</g>
<path d="M8 8.5C8 9.88071 6.88071 11 5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6C6.88071 6 8 7.11929 8 8.5ZM8 8.5H21M16 15.5C16 16.8807 17.1193 18 18.5 18C19.8807 18 21 16.8807 21 15.5C21 14.1193 19.8807 13 18.5 13C17.1193 13 16 14.1193 16 15.5ZM16 15.5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8.85506 9.5H21C21.5523 9.5 22 9.05228 22 8.5C22 7.94772 21.5523 7.5 21 7.5H8.85506C8.94936 7.81685 9 8.15251 9 8.5C9 8.84749 8.94936 9.18315 8.85506 9.5Z" fill="currentColor"/>
<path d="M15.1449 14.5H3C2.44772 14.5 2 14.9477 2 15.5C2 16.0523 2.44772 16.5 3 16.5H15.1449C15.0506 16.1831 15 15.8475 15 15.5C15 15.1525 15.0506 14.8169 15.1449 14.5Z" fill="currentColor"/>
</g>
<path d="M5.5 12C7.433 12 9 10.433 9 8.5C9 6.567 7.433 5 5.5 5C3.567 5 2 6.567 2 8.5C2 10.433 3.567 12 5.5 12Z" fill="currentColor"/>
<path d="M18.5 19C20.433 19 22 17.433 22 15.5C22 13.567 20.433 12 18.5 12C16.567 12 15 13.567 15 15.5C15 17.433 16.567 19 18.5 19Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 8.5C8 9.88071 6.88071 11 5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6C6.88071 6 8 7.11929 8 8.5ZM8 8.5H21M16 15.5C16 16.8807 17.1193 18 18.5 18C19.8807 18 21 16.8807 21 15.5C21 14.1193 19.8807 13 18.5 13C17.1193 13 16 14.1193 16 15.5ZM16 15.5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SlidersSimple;