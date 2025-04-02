import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Asterisk: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V20M19 7L5 17M5 7L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3C12.5524 3 13.0001 3.44772 13.0001 4V10.0568L18.4188 6.18627C18.8683 5.86526 19.4928 5.96935 19.8138 6.41876C20.1348 6.86817 20.0307 7.49272 19.5813 7.81373L13.7205 12L19.5813 16.1863C20.0307 16.5073 20.1348 17.1318 19.8138 17.5812C19.4928 18.0307 18.8683 18.1347 18.4188 17.8137L13.0001 13.9432V20C13.0001 20.5523 12.5524 21 12.0001 21C11.4478 21 11.0001 20.5523 11.0001 20V13.9432L5.58132 17.8137C5.1319 18.1347 4.50735 18.0307 4.18634 17.5812C3.86534 17.1318 3.96943 16.5073 4.41884 16.1863L10.2796 12L4.41884 7.81373C3.96943 7.49272 3.86534 6.86817 4.18634 6.41876C4.50735 5.96935 5.1319 5.86526 5.58132 6.18627L11.0001 10.0568V4C11.0001 3.44772 11.4478 3 12.0001 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V20M19 7L5 17M5 7L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3C12.5524 3 13.0001 3.44772 13.0001 4V10.0568L18.4188 6.18627C18.8683 5.86526 19.4928 5.96935 19.8138 6.41876C20.1348 6.86817 20.0307 7.49272 19.5813 7.81373L13.7205 12L19.5813 16.1863C20.0307 16.5073 20.1348 17.1318 19.8138 17.5812C19.4928 18.0307 18.8683 18.1347 18.4188 17.8137L13.0001 13.9432V20C13.0001 20.5523 12.5524 21 12.0001 21C11.4478 21 11.0001 20.5523 11.0001 20V13.9432L5.58132 17.8137C5.1319 18.1347 4.50735 18.0307 4.18634 17.5812C3.86534 17.1318 3.96943 16.5073 4.41884 16.1863L10.2796 12L4.41884 7.81373C3.96943 7.49272 3.86534 6.86817 4.18634 6.41876C4.50735 5.96935 5.1319 5.86526 5.58132 6.18627L11.0001 10.0568V4C11.0001 3.44772 11.4478 3 12.0001 3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V20M19 7L5 17M5 7L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Asterisk;