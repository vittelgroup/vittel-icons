import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MaskSnorkel: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3V17.5C21 19.433 19.433 21 17.5 21H17C15.3431 21 14 19.6569 14 18M3 9V12C3 13.1046 3.89543 14 5 14H8.29594C8.63342 14 8.95038 13.8379 9.14797 13.5643C9.56749 12.9835 10.4325 12.9835 10.852 13.5643C11.0496 13.8379 11.3666 14 11.7041 14H15C16.1046 14 17 13.1046 17 12V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 3C22 2.44772 21.5523 2 21 2C20.4477 2 20 2.44772 20 3V17.5C20 18.8807 18.8807 20 17.5 20H17C15.8954 20 15 19.1046 15 18C15 17.4477 14.5523 17 14 17C13.4477 17 13 17.4477 13 18C13 20.2091 14.7909 22 17 22H17.5C19.9853 22 22 19.9853 22 17.5V3Z" fill="currentColor"/>
<path d="M5 6C3.34315 6 2 7.34315 2 9V12C2 13.6569 3.34315 15 5 15H8.29594C8.95453 15 9.57305 14.6837 9.95865 14.1498C9.96647 14.139 9.97223 14.1356 9.97594 14.1338C9.98128 14.1311 9.98957 14.1287 10 14.1287C10.0104 14.1287 10.0187 14.1311 10.0241 14.1338C10.0278 14.1356 10.0335 14.139 10.0414 14.1498C10.4269 14.6837 11.0455 15 11.7041 15H15C16.6569 15 18 13.6569 18 12V9C18 7.34315 16.6569 6 15 6H5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 12V9C3 7.89543 3.89543 7 5 7H15C16.1046 7 17 7.89543 17 9V12C17 13.1046 16.1046 14 15 14H11.7041C11.3666 14 11.0496 13.8379 10.852 13.5643C10.4325 12.9835 9.56749 12.9835 9.14797 13.5643C8.95038 13.8379 8.63342 14 8.29594 14H5C3.89543 14 3 13.1046 3 12Z" fill="currentColor"/>
<path d="M21 3V17.5C21 19.433 19.433 21 17.5 21H17C15.3431 21 14 19.6569 14 18M3 9V12C3 13.1046 3.89543 14 5 14H8.29594C8.63342 14 8.95038 13.8379 9.14797 13.5643C9.56749 12.9835 10.4325 12.9835 10.852 13.5643C11.0496 13.8379 11.3666 14 11.7041 14H15C16.1046 14 17 13.1046 17 12V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 12V9C3 7.89543 3.89543 7 5 7H15C16.1046 7 17 7.89543 17 9V12C17 13.1046 16.1046 14 15 14H11.7041C11.3666 14 11.0496 13.8379 10.852 13.5643C10.4325 12.9835 9.56749 12.9835 9.14797 13.5643C8.95038 13.8379 8.63342 14 8.29594 14H5C3.89543 14 3 13.1046 3 12Z" fill="currentColor"/>
<path d="M21 3V17.5C21 19.433 19.433 21 17.5 21H17C15.3431 21 14 19.6569 14 18M3 9V12C3 13.1046 3.89543 14 5 14H8.29594C8.63342 14 8.95038 13.8379 9.14797 13.5643C9.56749 12.9835 10.4325 12.9835 10.852 13.5643C11.0496 13.8379 11.3666 14 11.7041 14H15C16.1046 14 17 13.1046 17 12V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3V17.5C21 19.433 19.433 21 17.5 21H17C15.3431 21 14 19.6569 14 18M3 9V12C3 13.1046 3.89543 14 5 14H8.29594C8.63342 14 8.95038 13.8379 9.14797 13.5643C9.56749 12.9835 10.4325 12.9835 10.852 13.5643C11.0496 13.8379 11.3666 14 11.7041 14H15C16.1046 14 17 13.1046 17 12V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MaskSnorkel;