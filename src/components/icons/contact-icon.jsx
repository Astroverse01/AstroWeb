export const ContactIcon = ({ className = "", ...props }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="10" y="20" width="80" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M10 30L50 55L90 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="25" cy="15" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="75" cy="15" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="15" cy="85" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="85" cy="85" r="3" fill="currentColor" opacity="0.6" />
  </svg>
)
