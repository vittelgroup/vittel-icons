import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BluetoothSlash: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17L12 12M17 17L12 22V12M3 3L12 12M21 21L12 12M14.8252 9.1748L17 7L12 2V6.34961" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.7071 7.70714L14.8242 10.59L13.41 9.17583L15.5858 7.00003L13 4.41424V8.76584L11 6.76584V2.00003C11 1.59557 11.2436 1.23093 11.6173 1.07615C11.991 0.921369 12.4211 1.00692 12.7071 1.29292L17.7071 6.29292C18.0976 6.68345 18.0976 7.31661 17.7071 7.70714Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 18.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711C5.0572 6.47141 7.82148 9.23573 10.5858 12L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0977 7.31658 18.0977 7.70711 17.7071L11 14.4142V22C11 22.4045 11.2436 22.7691 11.6173 22.9239C11.991 23.0787 12.4211 22.9931 12.7071 22.7071L17 18.4142ZM15.5858 17L13 14.4142V19.5858L15.5858 17Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M17 7L12 2V12V22L17 17L12 12L17 7Z" fill="currentColor"/>
<path d="M7 17L12 12M17 17L12 22V12M3 3L12 12M21 21L12 12M14.8252 9.1748L17 7L12 2V6.34961" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M14.8242 10.59L17.7071 7.70714C18.0976 7.31661 18.0976 6.68345 17.7071 6.29292L12.7071 1.29292C12.4211 1.00692 11.991 0.921369 11.6173 1.07615C11.2436 1.23093 11 1.59557 11 2.00003V6.76584L13 8.76584V4.41424L15.5858 7.00003L13.41 9.17583L14.8242 10.59Z" fill="currentColor"/>
<path d="M17 18.4142L15.5858 17L13 19.5858V14.4142L10.5858 12L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0977 7.31658 18.0977 7.70711 17.7071L11 14.4142V22C11 22.4045 11.2436 22.7691 11.6173 22.9239C11.991 23.0787 12.4211 22.9931 12.7071 22.7071L17 18.4142Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17L12 12M17 17L12 22V12M3 3L12 12M21 21L12 12M14.8252 9.1748L17 7L12 2V6.34961" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default BluetoothSlash;