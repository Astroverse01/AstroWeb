export const PrivacyIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Shield outline */}
    <path
      d="M40 8L20 16V32C20 48 40 64 40 64C40 64 60 48 60 32V16L40 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lock inside shield */}
    <rect x="32" y="28" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M36 28V24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24V28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Key hole */}
    <circle cx="40" cy="34" r="1.5" fill="currentColor" />
    {/* Decorative elements */}
    <circle cx="15" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="65" cy="15" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="70" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="60" r="1" fill="currentColor" opacity="0.4" />
  </svg>
)
