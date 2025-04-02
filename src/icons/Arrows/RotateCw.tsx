import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RotateCw: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 20.5C6.80558 20.5 3 16.6944 3 12C3 7.30558 6.80558 3.5 11.5 3.5C16.1944 3.5 20 7.30558 20 12C20 13.5433 19.5887 14.9905 18.8698 16.238M22.5 15L18.8698 16.238M17.1747 12.3832L18.5289 16.3542L18.8698 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.75329 6.25329 2.5 11.5 2.5C16.7467 2.5 21 6.75329 21 12C21 12.892 20.8768 13.756 20.6465 14.5756L22.1772 14.0535C22.6999 13.8753 23.2682 14.1545 23.4465 14.6772C23.6247 15.1999 23.3455 15.7682 22.8228 15.9465L18.8517 17.3007C18.6007 17.3863 18.3259 17.3687 18.0879 17.2517C17.8499 17.1348 17.6681 16.928 17.5825 16.677L16.2282 12.706C16.0499 12.1832 16.3292 11.615 16.8519 11.4367C17.3746 11.2584 17.9429 11.5377 18.1212 12.0604L18.7536 13.9149C18.9143 13.304 19 12.6624 19 12C19 7.85786 15.6421 4.5 11.5 4.5C7.35786 4.5 4 7.85786 4 12C4 16.1421 7.35786 19.5 11.5 19.5C12.0523 19.5 12.5 19.9477 12.5 20.5C12.5 21.0523 12.0523 21.5 11.5 21.5C6.25329 21.5 2 17.2467 2 12Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 20.5C6.80558 20.5 3 16.6944 3 12C3 7.30558 6.80558 3.5 11.5 3.5C16.1944 3.5 20 7.30558 20 12C20 13.5433 19.5887 14.9905 18.8698 16.238M22.5 15L18.8698 16.238M17.1747 12.3832L18.5289 16.3542L18.8698 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5C12.0523 21.5 12.5 21.0523 12.5 20.5C12.5 19.9477 12.0523 19.5 11.5 19.5C7.35786 19.5 4 16.1421 4 12C4 7.85786 7.35786 4.5 11.5 4.5C15.6421 4.5 19 7.85786 19 12C19 12.6622 18.9144 13.3036 18.7538 13.9142L19.153 15.085L20.6464 14.5757C20.8768 13.7561 21 12.8921 21 12C21 6.75329 16.7467 2.5 11.5 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8523 11.4366C17.375 11.2583 17.9433 11.5376 18.1216 12.0603L19.153 15.0849L22.1776 14.0534C22.7003 13.8752 23.2686 14.1544 23.4469 14.6771C23.6251 15.1999 23.3459 15.7681 22.8232 15.9464L18.8521 17.3006C18.6011 17.3862 18.3263 17.3686 18.0883 17.2516C17.8503 17.1347 17.6685 16.9279 17.5828 16.6769L16.2286 12.7059C16.0503 12.1831 16.3296 11.6149 16.8523 11.4366Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 20.5C6.80558 20.5 3 16.6944 3 12C3 7.30558 6.80558 3.5 11.5 3.5C16.1944 3.5 20 7.30558 20 12C20 13.5433 19.5887 14.9905 18.8698 16.238M22.5 15L18.8698 16.238M17.1747 12.3832L18.5289 16.3542L18.8698 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default RotateCw;