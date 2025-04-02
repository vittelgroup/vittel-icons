import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Football: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.15234 11.8458L11.844 3.15417M12.1523 20.8458L20.844 12.1542M9 12L12 9M12 15L15 12M21 21H14C7.92487 21 3 16.0751 3 10V3H10C16.0751 3 21 7.92487 21 14V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.4937 2.09206C11.0043 2.0313 10.5058 2 10 2H3C2.44772 2 2 2.44772 2 3V10C2 10.5058 2.0313 11.0043 2.09206 11.4937L11.4937 2.09206Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.6113 13.7915C3.80178 17.3691 6.63088 20.1982 10.2085 21.3887C10.2342 21.3554 10.2624 21.3234 10.2929 21.2929L21.2929 10.2929C21.3234 10.2624 21.3554 10.2342 21.3887 10.2085C20.1982 6.63088 17.3691 3.80178 13.7915 2.6113C13.7658 2.64457 13.7376 2.67658 13.7071 2.70711L2.70711 13.7071C2.67658 13.7376 2.64457 13.7658 2.6113 13.7915ZM12.7071 8.29289C13.0976 8.68342 13.0976 9.31658 12.7071 9.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289ZM15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929L11.2929 14.2929C10.9024 14.6834 10.9024 15.3166 11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L15.7071 12.7071Z" fill="currentColor"/>
<path d="M21.9079 12.5063L12.5063 21.9079C12.9957 21.9687 13.4942 22 14 22H21C21.5523 22 22 21.5523 22 21V14C22 13.4942 21.9687 12.9957 21.9079 12.5063Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M14 21H21V14C21 7.92487 16.0751 3 10 3H3V10C3 16.0751 7.92487 21 14 21Z" fill="currentColor"/>
<path d="M3.15234 11.8458L11.844 3.15417M12.1523 20.8458L20.844 12.1542M9 12L12 9M12 15L15 12M21 21H14C7.92487 21 3 16.0751 3 10V3H10C16.0751 3 21 7.92487 21 14V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M14 21H21V14C21 7.92487 16.0751 3 10 3H3V10C3 16.0751 7.92487 21 14 21Z" fill="currentColor"/>
<path d="M3.15234 11.8458L11.844 3.15417M12.1523 20.8458L20.844 12.1542M9 12L12 9M12 15L15 12M21 21H14C7.92487 21 3 16.0751 3 10V3H10C16.0751 3 21 7.92487 21 14V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.15234 11.8458L11.844 3.15417M12.1523 20.8458L20.844 12.1542M9 12L12 9M12 15L15 12M21 21H14C7.92487 21 3 16.0751 3 10V3H10C16.0751 3 21 7.92487 21 14V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Football;