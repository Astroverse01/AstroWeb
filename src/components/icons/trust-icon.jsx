export const TrustIcon = ({ className = "", ...props }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M30 8L35 15L43 12L40 20L48 23L40 26L43 34L35 31L30 38L25 31L17 34L20 26L12 23L20 20L17 12L25 15L30 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="30" cy="23" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M27 23L29 25L33 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="48" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
    <circle cx="8" cy="52" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="52" cy="52" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
)
