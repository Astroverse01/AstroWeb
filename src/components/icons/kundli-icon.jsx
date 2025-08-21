export const KundliIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
    <line x1="40" y1="15" x2="40" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="55" x2="40" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="65" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="25" y1="40" x2="15" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 23L52 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 52L23 57" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 57L52 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 28L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="40" cy="40" r="3" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="68" cy="12" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="68" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="68" cy="68" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
)
