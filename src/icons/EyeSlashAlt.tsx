import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const EyeSlashAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L5.22786 6.64207C3.24335 8.46952 2 11.0896 2 14C2 14.5523 2.44772 15 3 15C3.55228 15 4 14.5523 4 14C4 11.6418 5.02032 9.52196 6.64358 8.05779L8.06031 9.47453C6.79786 10.5745 6 12.1941 6 14C6 17.3137 8.68629 20 12 20C13.8059 20 15.4255 19.2021 16.5255 17.9397L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289Z" fill="currentColor"/>
<path d="M12.2179 8.00388L17.9961 13.7821C17.884 10.6416 15.3584 8.11599 12.2179 8.00388Z" fill="currentColor"/>
<path d="M8.75298 4.53896L10.3785 6.16443C10.9021 6.05663 11.4444 6 12 6C16.4183 6 20 9.58172 20 14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14C22 8.47715 17.5228 4 12 4C10.8634 4 9.77109 4.18962 8.75298 4.53896Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M7 14C7 16.7614 9.23858 19 12 19C13.895 19 15.5438 17.9458 16.3919 16.3919L9.60814 9.60815C8.0542 10.4562 7 12.105 7 14Z" fill="currentColor"/>
<path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M12.2178 8.00391L17.996 13.7821C17.8839 10.6417 15.3582 8.11601 12.2178 8.00391Z" fill="currentColor"/>
<path d="M8.06031 9.47455C6.79786 10.5745 6 12.1941 6 14C6 17.3137 8.68629 20 12 20C13.8059 20 15.4255 19.2022 16.5255 17.9397L8.06031 9.47455Z" fill="currentColor"/>
</g>
<path d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L6.64358 8.05779C5.02032 9.52196 4 11.6418 4 14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14C2 11.0896 3.24335 8.46952 5.22786 6.64207L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="currentColor"/>
<path d="M10.3784 6.16443L8.75293 4.53896C9.77104 4.18962 10.8634 4 12 4C17.5228 4 22 8.47715 22 14C22 14.5523 21.5522 15 21 15C20.4477 15 20 14.5523 20 14C20 9.58172 16.4182 6 12 6C11.4444 6 10.9021 6.05663 10.3784 6.16443Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default EyeSlashAlt;