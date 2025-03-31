import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WonSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12L8 19L10 12M6 12L4 5M6 12H3M6 12H10M14 12L16 19L18 12M14 12L12 5L10 12M14 12H10M14 12H18M18 12L20 5M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.72528 4.03849C4.25631 3.88677 4.8098 4.19426 4.96152 4.72529L6.7543 11H9.2457L11.0385 4.72529C11.1611 4.29599 11.5535 4.00001 12 4.00001C12.4465 4.00001 12.8389 4.29599 12.9615 4.72529L14.7543 11H17.2457L19.0385 4.72529C19.1902 4.19426 19.7437 3.88677 20.2747 4.03849C20.8058 4.19021 21.1132 4.7437 20.9615 5.27473L19.3257 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H18.7543L16.9615 19.2747C16.8389 19.704 16.4465 20 16 20C15.5535 20 15.1611 19.704 15.0385 19.2747L13.2457 13H10.7543L8.96152 19.2747C8.83887 19.704 8.44648 20 8 20C7.55352 20 7.16113 19.704 7.03848 19.2747L5.2457 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.67427L3.03848 5.27473C2.88675 4.7437 3.19424 4.19021 3.72528 4.03849ZM7.32573 13L8 15.36L8.67427 13H7.32573ZM11.3257 11H12.6743L12 8.64007L11.3257 11ZM15.3257 13L16 15.36L16.6743 13H15.3257Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12L8 19L10 12M6 12L4 5M6 12H3M6 12H10M14 12L16 19L18 12M14 12L12 5L10 12M14 12H10M14 12H18M18 12L20 5M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M4.96178 4.72554C4.81006 4.1945 4.25657 3.88701 3.72554 4.03873C3.1945 4.19046 2.88701 4.74394 3.03873 5.27498L4.67445 11H6.75449L4.96178 4.72554Z" fill="currentColor"/>
<path d="M7.32591 13L8.00026 15.3602L8.6746 13H10.7546L8.96178 19.275C8.83912 19.7043 8.44674 20.0003 8.00026 20.0003C7.55378 20.0003 7.16139 19.7043 7.03873 19.275L5.24588 13H7.32591Z" fill="currentColor"/>
<path d="M11.3261 11H9.24603L11.0387 4.72554C11.1614 4.29623 11.5538 4.00026 12.0003 4.00026C12.4467 4.00026 12.8391 4.29623 12.9618 4.72554L14.7545 11H12.6745L12.0003 8.64031L11.3261 11Z" fill="currentColor"/>
<path d="M13.2459 13L15.0387 19.275C15.1614 19.7043 15.5538 20.0003 16.0003 20.0003C16.4467 20.0003 16.8391 19.7043 16.9618 19.275L18.7546 13H16.6746L16.0003 15.3602L15.3259 13H13.2459Z" fill="currentColor"/>
<path d="M17.246 11H19.3261L20.9618 5.27498C21.1135 4.74394 20.806 4.19046 20.275 4.03873C19.7439 3.88701 19.1905 4.1945 19.0387 4.72554L17.246 11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12L8 19L10 12M6 12L4 5M6 12H3M6 12H10M14 12L16 19L18 12M14 12L12 5L10 12M14 12H10M14 12H18M18 12L20 5M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default WonSign;