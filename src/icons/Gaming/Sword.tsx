import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Sword: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 14L20 7L21 3L17 4L10 11M5 11L13 19L11 20L8 18L5 21L3 19L6 16L4 13L5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21.9701 3.24256C22.0553 2.90178 21.9555 2.54129 21.7071 2.29291C21.4587 2.04453 21.0982 1.94468 20.7575 2.02988L16.7575 3.02988C16.5816 3.07384 16.4211 3.16476 16.2929 3.29291L9.29289 10.2929C8.90237 10.6834 8.90237 11.3166 9.29289 11.7071L12.2929 14.7071C12.6834 15.0977 13.3166 15.0977 13.7071 14.7071L20.7071 7.70713C20.8353 7.57897 20.9262 7.41839 20.9701 7.24256L21.9701 3.24256Z" fill="currentColor"/>
<path d="M5.70711 10.2929C5.47981 10.0656 5.15711 9.96144 4.83982 10.0129C4.52253 10.0644 4.24933 10.2653 4.10557 10.5528L3.10557 12.5528C2.94509 12.8738 2.96889 13.2561 3.16795 13.5547L4.7132 15.8726L2.29289 18.2929C1.90237 18.6834 1.90237 19.3166 2.29289 19.7071L4.29289 21.7071C4.68342 22.0977 5.31658 22.0977 5.70711 21.7071L8.12742 19.2868L10.4453 20.8321C10.7439 21.0311 11.1262 21.0549 11.4472 20.8944L13.4472 19.8944C13.7347 19.7507 13.9356 19.4775 13.9871 19.1602C14.0386 18.8429 13.9344 18.5202 13.7071 18.2929L5.70711 10.2929Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M13 14L20 7L21 3L17 4L10 11L13 14Z" fill="currentColor"/>
<path d="M13 19L5 11L4 13L6 16L3 19L5 21L8 18L11 20L13 19Z" fill="currentColor"/>
</g>
<path d="M13 14L20 7L21 3L17 4L10 11M5 11L13 19L11 20L8 18L5 21L3 19L6 16L4 13L5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M21.9701 3.24256C22.0553 2.90178 21.9555 2.54129 21.7071 2.29291C21.4587 2.04453 21.0982 1.94468 20.7575 2.02988L16.7575 3.02988C16.5816 3.07384 16.4211 3.16476 16.2929 3.29291L9.29289 10.2929C8.90237 10.6834 8.90237 11.3166 9.29289 11.7071L12.2929 14.7071C12.6834 15.0977 13.3166 15.0977 13.7071 14.7071L20.7071 7.70713C20.8353 7.57897 20.9262 7.41839 20.9701 7.24256L21.9701 3.24256Z" fill="currentColor"/>
<path d="M5.70711 10.2929C5.47981 10.0656 5.15711 9.96143 4.83982 10.0129C4.52253 10.0644 4.24933 10.2653 4.10557 10.5528L3.10557 12.5528C2.94509 12.8738 2.96889 13.2561 3.16795 13.5547L4.7132 15.8726L2.29289 18.2929C1.90237 18.6834 1.90237 19.3166 2.29289 19.7071L4.29289 21.7071C4.68342 22.0976 5.31658 22.0976 5.70711 21.7071L8.12742 19.2868L10.4453 20.8321C10.7439 21.0311 11.1262 21.0549 11.4472 20.8944L13.4472 19.8944C13.7347 19.7507 13.9356 19.4775 13.9871 19.1602C14.0386 18.8429 13.9344 18.5202 13.7071 18.2929L5.70711 10.2929Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 14L20 7L21 3L17 4L10 11M5 11L13 19L11 20L8 18L5 21L3 19L6 16L4 13L5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Sword;