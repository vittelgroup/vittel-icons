import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Code: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2425 3.03009C14.7783 3.16404 15.1041 3.70698 14.9701 4.24277L10.9701 20.2428C10.8362 20.7786 10.2933 21.1043 9.75746 20.9704C9.22167 20.8364 8.89591 20.2935 9.02986 19.7577L13.0299 3.7577C13.1638 3.22191 13.7067 2.89615 14.2425 3.03009ZM7.70711 7.29313C8.09763 7.68365 8.09763 8.31682 7.70711 8.70734L4.41421 12.0002L7.70711 15.2931C8.09763 15.6837 8.09763 16.3168 7.70711 16.7073C7.31658 17.0979 6.68342 17.0979 6.29289 16.7073L2.29289 12.7073C1.90237 12.3168 1.90237 11.6837 2.29289 11.2931L6.29289 7.29313C6.68342 6.90261 7.31658 6.90261 7.70711 7.29313ZM16.2929 7.29313C16.6834 6.90261 17.3166 6.90261 17.7071 7.29313L21.7071 11.2931C22.0976 11.6837 22.0976 12.3168 21.7071 12.7073L17.7071 16.7073C17.3166 17.0979 16.6834 17.0979 16.2929 16.7073C15.9024 16.3168 15.9024 15.6837 16.2929 15.2931L19.5858 12.0002L16.2929 8.70734C15.9024 8.31682 15.9024 7.68365 16.2929 7.29313Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M14.2428 3.03009C14.7786 3.16404 15.1043 3.70698 14.9704 4.24277L10.9704 20.2428C10.8364 20.7786 10.2935 21.1043 9.7577 20.9704C9.22191 20.8364 8.89615 20.2935 9.03009 19.7577L13.0301 3.7577C13.164 3.22191 13.707 2.89615 14.2428 3.03009Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 7.29289C8.09763 7.68342 8.09763 8.31658 7.70711 8.70711L4.41421 12L7.70711 15.2929C8.09763 15.6834 8.09763 16.3166 7.70711 16.7071C7.31658 17.0976 6.68342 17.0976 6.29289 16.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L6.29289 7.29289C6.68342 6.90237 7.31658 6.90237 7.70711 7.29289ZM16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L19.5858 12L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Code;