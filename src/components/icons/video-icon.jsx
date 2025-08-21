export const VideoIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="8" y="20" width="45" height="30" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M53 25L68 15V55L53 45V25Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="35" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <polygon points="28,31 28,39 34,35" fill="currentColor" />
    <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="60" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="15" cy="65" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="70" cy="70" r="2" fill="currentColor" opacity="0.6" />
  </svg>
)
