export const VisionIcon = ({ className = "", ...props }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    <path d="M50 10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 80V90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M90 50H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 50H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M79 21L72 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 72L21 79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M79 79L72 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 28L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="85" cy="15" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="15" cy="85" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="85" cy="85" r="2" fill="currentColor" opacity="0.6" />
  </svg>
)
