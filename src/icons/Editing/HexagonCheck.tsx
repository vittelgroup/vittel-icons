import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HexagonCheck: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12.3333L10.4615 15L16 8.99998M2 12L7 3.33972H17L22 12L17 20.6602H7L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.28827 11.5001C2.10964 11.8095 2.10964 12.1907 2.28827 12.5001L6.71092 20.1604C6.88955 20.4698 7.21968 20.6604 7.57695 20.6604H16.4222C16.7795 20.6604 17.1096 20.4698 17.2883 20.1604L21.7109 12.5001C21.8896 12.1907 21.8896 11.8095 21.7109 11.5001L17.2883 3.83984C17.1096 3.53044 16.7795 3.33984 16.4222 3.33984H7.57695C7.21968 3.33984 6.88955 3.53044 6.71092 3.83984L2.28827 11.5001ZM16.6778 8.2652C17.0836 8.6398 17.1089 9.27246 16.7343 9.67829L11.1959 15.6783C11.0066 15.8834 10.7402 16 10.4611 16C10.182 16 9.91556 15.8834 9.72625 15.6783L7.26471 13.0116C6.89011 12.6058 6.91542 11.9731 7.32124 11.5985C7.72706 11.2239 8.35972 11.2492 8.73432 11.6551L10.4611 13.5257L15.2647 8.32172C15.6393 7.9159 16.272 7.8906 16.6778 8.2652Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M2 12.0001L7 3.33984H17L22 12.0001L17 20.6604H7L2 12.0001Z" fill="currentColor"/>
<path d="M8 12.3333L10.4615 15L16 8.99998M2 12L7 3.33972H17L22 12L17 20.6602H7L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2.28827 11.5001C2.10964 11.8095 2.10964 12.1907 2.28827 12.5001L6.71092 20.1604C6.88955 20.4698 7.21968 20.6604 7.57695 20.6604H16.4222C16.7795 20.6604 17.1096 20.4698 17.2883 20.1604L21.7109 12.5001C21.8896 12.1907 21.8896 11.8095 21.7109 11.5001L17.2883 3.83984C17.1096 3.53044 16.7795 3.33984 16.4222 3.33984H7.57695C7.21968 3.33984 6.88955 3.53044 6.71092 3.83984L2.28827 11.5001Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6783 8.2652C17.0841 8.6398 17.1094 9.27246 16.7348 9.67829L11.1963 15.6783C11.007 15.8834 10.7406 16 10.4615 16C10.1824 16 9.91605 15.8834 9.72674 15.6783L7.2652 13.0116C6.8906 12.6058 6.9159 11.9731 7.32172 11.5985C7.72755 11.2239 8.3602 11.2492 8.73481 11.6551L10.4615 13.5257L15.2652 8.32172C15.6398 7.9159 16.2725 7.8906 16.6783 8.2652Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12.3333L10.4615 15L16 8.99998M2 12L7 3.33972H17L22 12L17 20.6602H7L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default HexagonCheck;