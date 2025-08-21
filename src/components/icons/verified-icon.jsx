export const VerifiedIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M40 8L45 18H56L47 26L51 37L40 31L29 37L33 26L24 18H35L40 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="40" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M36 28L39 31L44 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 45V55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 60H45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="60" cy="15" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="15" cy="65" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="65" cy="65" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
)
