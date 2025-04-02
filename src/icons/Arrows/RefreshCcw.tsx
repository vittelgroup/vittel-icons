import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RefreshCcw: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55228 2 4 2.44772 4 3V5.75001L5.33308 4.54654C7.1016 2.96367 9.43946 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.23965 22 3.25835 18.6747 2.24781 14.2213C2.12559 13.6827 2.46314 13.147 3.00173 13.0248C3.54032 12.9026 4.07601 13.2401 4.19823 13.7787C5.0066 17.3412 8.194 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.95117 4 8.0843 4.76888 6.66847 6.03542L5.60001 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H3C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.66848 6.03542C8.08431 4.76888 9.95117 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C8.194 20 5.00661 17.3412 4.19823 13.7787C4.07602 13.2401 3.54033 12.9026 3.00174 13.0248C2.46315 13.147 2.1256 13.6827 2.24782 14.2213C3.25836 18.6747 7.23966 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C9.43947 2 7.10162 2.96367 5.33309 4.54655L2.32991 7.25773C1.91996 7.62782 1.88765 8.26016 2.25774 8.6701C2.62783 9.08005 3.26016 9.11236 3.67011 8.74227L6.66848 6.03542Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55228 2 4 2.44772 4 3V7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H3C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default RefreshCcw;