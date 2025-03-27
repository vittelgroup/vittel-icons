import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Mailbox: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V18M7 12H10M17.5 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V18H14M17.5 6C19.433 6 21 7.567 21 9.5V18H14M17.5 6C15.567 6 14 7.567 14 9.5V18M15 3H12V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3C11 2.44772 11.4477 2 12 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H13V5H17C17.0543 5 17.1077 5.00433 17.1597 5.01268C17.272 5.00428 17.3855 5 17.5 5C19.9853 5 22 7.01472 22 9.5V18C22 18.5523 21.5523 19 21 19H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19H3C2.44772 19 2 18.5523 2 18L2 10.7587C1.99999 9.95373 1.99998 9.28937 2.04419 8.74817C2.09012 8.18608 2.18868 7.66937 2.43597 7.18404C2.81947 6.43139 3.43139 5.81947 4.18404 5.43597C4.66937 5.18868 5.18608 5.09012 5.74818 5.04419C6.28937 4.99998 6.95373 4.99999 7.7587 5L11 5V3ZM15 17H20V9.5C20 8.11929 18.8807 7 17.5 7C16.1193 7 15 8.11929 15 9.5V17ZM6 12C6 11.4477 6.44772 11 7 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H7C6.44772 13 6 12.5523 6 12Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 10.8V18H14V9.5C14 7 16 6 17 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8Z" fill="currentColor"/>
<path d="M12 21V18M7 12H10M17.5 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V18H14M17.5 6C19.433 6 21 7.567 21 9.5V18H14M17.5 6C15.567 6 14 7.567 14 9.5V18M15 3H12V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M7.7587 5H17.5C15.0147 5 13 7.01472 13 9.5V18C13 18.5523 13.4477 19 14 19L3 19C2.44772 19 2 18.5523 2 18V10.7587C1.99999 9.95373 1.99998 9.28936 2.0442 8.74818C2.09012 8.18608 2.18868 7.66938 2.43598 7.18404C2.81947 6.43139 3.43139 5.81947 4.18404 5.43598C4.66938 5.18868 5.18608 5.09012 5.74818 5.0442C6.28936 4.99998 6.95375 4.99999 7.7587 5Z" fill="currentColor"/>
<path d="M12 2C11.4477 2 11 2.44772 11 3V5H13V4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H12Z" fill="currentColor"/>
<path d="M11 21V19H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21Z" fill="currentColor"/>
<path d="M17.5 5C15.0147 5 13 7.01472 13 9.5V18C13 18.5523 13.4477 19 14 19H21C21.5523 19 22 18.5523 22 18V9.5C22 7.01472 19.9853 5 17.5 5Z" fill="currentColor"/>
<path d="M6 12C6 11.4477 6.44772 11 7 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H7C6.44772 13 6 12.5523 6 12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V18M7 12H10M17.5 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V18H14M17.5 6C19.433 6 21 7.567 21 9.5V18H14M17.5 6C15.567 6 14 7.567 14 9.5V18M15 3H12V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Mailbox;