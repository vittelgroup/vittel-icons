import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleBolt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 7L9 12H15L11.5 17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.3192 7.57355C13.6359 7.1211 13.5259 6.49757 13.0735 6.18085C12.621 5.86414 11.9975 5.97417 11.6808 6.42662L8.18077 11.4266C7.96694 11.7321 7.94083 12.1312 8.11302 12.4619C8.28522 12.7926 8.62713 13.0001 9 13.0001H13.0793L10.6808 16.4266C10.3641 16.8791 10.4741 17.5026 10.9265 17.8193C11.379 18.136 12.0025 18.026 12.3192 17.5735L15.8192 12.5735C16.0331 12.2681 16.0592 11.869 15.887 11.5383C15.7148 11.2075 15.3729 11.0001 15 11.0001H10.9207L13.3192 7.57355Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M12.5 7L9 12H15L11.5 17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3192 7.57355C13.6359 7.1211 13.5259 6.49757 13.0735 6.18085C12.621 5.86414 11.9975 5.97417 11.6808 6.42662L8.18077 11.4266C7.96694 11.7321 7.94083 12.1312 8.11302 12.4619C8.28522 12.7926 8.62713 13.0001 9 13.0001H13.0793L10.6808 16.4266C10.3641 16.8791 10.4741 17.5026 10.9265 17.8193C11.379 18.136 12.0025 18.026 12.3192 17.5735L15.8192 12.5735C16.0331 12.2681 16.0592 11.869 15.887 11.5383C15.7148 11.2075 15.3729 11.0001 15 11.0001H10.9207L13.3192 7.57355Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 7L9 12H15L11.5 17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleBolt;