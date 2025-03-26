import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CodeAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.00015 8L5 12L9.00015 16M15.0001 8L19 12L15.0001 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70727 7.29291C10.0978 7.68344 10.0978 8.3166 9.70724 8.70712L6.41424 12L9.70724 15.2929C10.0978 15.6834 10.0978 16.3166 9.70727 16.7071C9.31675 17.0976 8.68359 17.0976 8.29306 16.7071L4.29291 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29291 11.2929L8.29306 7.29288C8.68359 6.90236 9.31675 6.90237 9.70727 7.29291ZM14.2931 7.29288C14.6836 6.90236 15.3168 6.90237 15.7073 7.29291L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.7073 16.7071C15.3168 17.0976 14.6836 17.0976 14.2931 16.7071C13.9025 16.3166 13.9025 15.6834 14.293 15.2929L17.5858 12L14.293 8.70709C13.9025 8.31656 13.9025 7.6834 14.2931 7.29288Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.00015 8L5 12L9.00015 16M15.0001 8L19 12L15.0001 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M14.2929 7.29288C14.6834 6.90236 15.3166 6.90237 15.7071 7.29291L19.707 11.2929C20.0975 11.6834 20.0975 12.3166 19.707 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L17.5857 12L14.2929 8.70709C13.9024 8.31656 13.9024 7.6834 14.2929 7.29288Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70727 7.29291C10.0978 7.68344 10.0978 8.3166 9.70724 8.70712L6.41424 12L9.70724 15.2929C10.0978 15.6834 10.0978 16.3166 9.70727 16.7071C9.31675 17.0976 8.68359 17.0976 8.29306 16.7071L4.29291 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29291 11.2929L8.29306 7.29288C8.68359 6.90236 9.31675 6.90237 9.70727 7.29291Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.00015 8L5 12L9.00015 16M15.0001 8L19 12L15.0001 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CodeAlt;