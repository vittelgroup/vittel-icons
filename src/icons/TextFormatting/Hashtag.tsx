import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Hashtag: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1843 3.01712C10.7271 3.1189 11.0847 3.64146 10.9829 4.18429L10.4549 7H15.4201L16.0171 3.81571C16.1189 3.27288 16.6415 2.91534 17.1843 3.01712C17.7271 3.1189 18.0847 3.64146 17.9829 4.18429L17.4549 7H20C20.5523 7 21 7.44771 21 8C21 8.55228 20.5523 9 20 9H17.0799L15.9549 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H15.5799L14.9829 20.1843C14.8811 20.7271 14.3585 21.0846 13.8157 20.9829C13.2729 20.8811 12.9153 20.3585 13.0171 19.8157L13.5451 17H8.57993L7.98287 20.1843C7.88109 20.7271 7.35854 21.0846 6.81571 20.9829C6.27289 20.8811 5.91535 20.3585 6.01713 19.8157L6.54507 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H6.92007L8.04507 9H5C4.44772 9 4 8.55228 4 8C4 7.44771 4.44772 7 5 7H8.42007L9.01713 3.81571C9.11891 3.27288 9.64146 2.91534 10.1843 3.01712ZM10.0799 9L8.95493 15H13.9201L15.0451 9H10.0799Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M10.9831 4.18429C11.0848 3.64146 10.7273 3.1189 10.1845 3.01712C9.64164 2.91534 9.11909 3.27288 9.01731 3.81571L6.01731 19.8157C5.91553 20.3585 6.27307 20.8811 6.81589 20.9829C7.35872 21.0846 7.88127 20.7271 7.98305 20.1843L10.9831 4.18429Z" fill="currentColor"/>
<path d="M17.9831 4.18429C18.0848 3.64146 17.7273 3.1189 17.1845 3.01712C16.6416 2.91534 16.1191 3.27288 16.0173 3.81571L13.0173 19.8157C12.9155 20.3585 13.2731 20.8811 13.8159 20.9829C14.3587 21.0846 14.8813 20.7271 14.9831 20.1843L17.9831 4.18429Z" fill="currentColor"/>
</g>
<path d="M5 7H15.4203L15.0453 9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7Z" fill="currentColor"/>
<path d="M20 9H17.0801L17.4551 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9Z" fill="currentColor"/>
<path d="M4 15H6.92025L6.54525 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15Z" fill="currentColor"/>
<path d="M19 17H8.58011L8.95511 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4L7 20M17 4L14 20M5 8H20M4 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
  }
};

export default Hashtag;