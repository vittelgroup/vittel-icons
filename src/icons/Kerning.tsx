import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Kerning: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2 7L6 17L10 7M14 17L18 7L22 17M14.8 15H21.2M8.5 21L15.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8627 2.06802C16.3774 2.26819 16.6324 2.84774 16.4323 3.36247L9.43227 21.3625C9.2321 21.8772 8.65255 22.1322 8.13782 21.932C7.62309 21.7319 7.36809 21.1523 7.56826 20.6376L14.5683 2.63758C14.7684 2.12285 15.348 1.86785 15.8627 2.06802ZM1.62888 6.07155C2.14166 5.86643 2.72363 6.11585 2.92874 6.62863L6.00027 14.3074L9.07179 6.62863C9.2769 6.11585 9.85887 5.86643 10.3717 6.07155C10.8844 6.27666 11.1339 6.85863 10.9287 7.37142L6.92874 17.3714C6.77688 17.7511 6.40917 18 6.00027 18C5.59136 18 5.22365 17.7511 5.07179 17.3714L1.07179 7.37142C0.866676 6.85863 1.11609 6.27666 1.62888 6.07155ZM18.0003 6.00002C18.4092 6.00002 18.7769 6.24898 18.9287 6.62863L22.1203 14.6075C22.1263 14.6216 22.132 14.6359 22.1374 14.6503L22.9287 16.6286C23.1339 17.1414 22.8844 17.7234 22.3717 17.9285C21.8589 18.1336 21.2769 17.8842 21.0718 17.3714L20.5232 16H15.4773L14.9287 17.3714C14.7236 17.8842 14.1417 18.1336 13.6289 17.9285C13.1161 17.7234 12.8667 17.1414 13.0718 16.6286L13.8631 14.6503C13.8685 14.6359 13.8742 14.6216 13.8802 14.6076L17.0718 6.62863C17.2237 6.24898 17.5914 6.00002 18.0003 6.00002ZM16.2773 14H19.7232L18.0003 9.69261L16.2773 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21.0008 15H15.0008H14.8008L18.0008 7L21.2008 15H21.0008Z" fill="currentColor"/>
<path d="M2 7L6 17L10 7M14 17L18 7L22 17M14.8 15H21.2M8.5 21L15.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M1.62888 6.07155C2.14166 5.86643 2.72363 6.11585 2.92874 6.62863L6.00027 14.3074L9.07179 6.62863C9.2769 6.11585 9.85887 5.86643 10.3717 6.07155C10.8844 6.27666 11.1339 6.85863 10.9287 7.37141L6.92874 17.3714C6.77688 17.7511 6.40917 18 6.00027 18C5.59136 18 5.22365 17.7511 5.07179 17.3714L1.07179 7.37141C0.866676 6.85863 1.11609 6.27666 1.62888 6.07155ZM18.0003 6.00002C18.4092 6.00002 18.7769 6.24897 18.9287 6.62863L22.9287 16.6286C23.1339 17.1414 22.8844 17.7234 22.3717 17.9285C21.8589 18.1336 21.2769 17.8842 21.0718 17.3714L20.5232 16H15.4773L14.9287 17.3714C14.7236 17.8842 14.1417 18.1336 13.6289 17.9285C13.1161 17.7234 12.8667 17.1414 13.0718 16.6286L17.0718 6.62863C17.2237 6.24897 17.5914 6.00002 18.0003 6.00002ZM16.2773 14H19.7232L18.0003 9.6926L16.2773 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8627 2.06802C16.3774 2.26819 16.6324 2.84774 16.4323 3.36247L9.43227 21.3625C9.2321 21.8772 8.65255 22.1322 8.13782 21.932C7.62309 21.7319 7.36809 21.1523 7.56826 20.6376L14.5683 2.63758C14.7684 2.12285 15.348 1.86785 15.8627 2.06802Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2 7L6 17L10 7M14 17L18 7L22 17M14.8 15H21.2M8.5 21L15.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Kerning;