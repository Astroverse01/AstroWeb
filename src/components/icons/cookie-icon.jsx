export const CookieIcon = ({ className = "", ...props }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
    <circle cx="40" cy="35" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="60" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="35" cy="55" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="55" cy="60" r="3.5" fill="currentColor" opacity="0.8" />
    <circle cx="45" cy="65" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="65" cy="55" r="2.5" fill="currentColor" opacity="0.7" />
    <path
      d="M25 45C25 45 30 40 35 45C40 50 45 45 50 50"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
  </svg>
)
