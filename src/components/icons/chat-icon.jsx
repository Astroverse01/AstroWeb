export const ChatIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="10" y="15" width="50" height="35" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M25 55L35 45H60C64.4183 45 68 41.4183 68 37V23C68 18.5817 64.4183 15 60 15H20C15.5817 15 12 18.5817 12 23V37C12 41.4183 15.5817 45 20 45H25V55Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="30" r="2" fill="currentColor" />
    <circle cx="35" cy="30" r="2" fill="currentColor" />
    <circle cx="45" cy="30" r="2" fill="currentColor" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="65" cy="10" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="70" cy="60" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
)
