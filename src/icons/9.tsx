import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon9: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.2422 12L10 21M6.5 8.5C6.5 5.46243 8.96243 3 12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 11.5376 15.0376 14 12 14C8.96243 14 6.5 11.5376 6.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.51472 4 7.5 6.01472 7.5 8.5C7.5 10.9853 9.51472 13 12 13C13.3872 13 14.6277 12.3724 15.4532 11.3856C15.4653 11.3699 15.4779 11.3547 15.4908 11.34C16.1217 10.5654 16.5 9.57689 16.5 8.5C16.5 6.01472 14.4853 4 12 4ZM17.037 12.6086C17.9515 11.4889 18.5 10.0585 18.5 8.5C18.5 4.91015 15.5899 2 12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0899 8.41015 15 12 15C12.3391 15 12.6721 14.974 12.9972 14.924L9.1783 20.4301C8.86354 20.8839 8.97627 21.5069 9.43009 21.8217C9.8839 22.1365 10.5069 22.0237 10.8217 21.5699L17.037 12.6086Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.2422 12L10 21M6.5 8.5C6.5 5.46243 8.96243 3 12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 11.5376 15.0376 14 12 14C8.96243 14 6.5 11.5376 6.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.51472 4 7.5 6.01472 7.5 8.5C7.5 10.9853 9.51472 13 12 13C13.3872 13 14.6277 12.3724 15.4532 11.3856C15.4653 11.3699 15.4779 11.3547 15.4908 11.34C16.1217 10.5654 16.5 9.57689 16.5 8.5C16.5 6.01472 14.4853 4 12 4ZM17.037 12.6086C17.9515 11.4889 18.5 10.0585 18.5 8.5C18.5 4.91015 15.5899 2 12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0899 8.41015 15 12 15C12.3391 15 12.6721 14.974 12.9972 14.924L9.1783 20.4301C8.86354 20.8839 8.97627 21.5069 9.43009 21.8217C9.8839 22.1365 10.5069 22.0237 10.8217 21.5699L17.037 12.6086Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.2422 12L10 21M6.5 8.5C6.5 5.46243 8.96243 3 12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 11.5376 15.0376 14 12 14C8.96243 14 6.5 11.5376 6.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default 9;