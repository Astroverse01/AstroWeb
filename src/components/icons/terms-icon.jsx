export const TermsIcon = ({ className = "", ...props }) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Document outline */}
    <path
      d="M20 10H50L60 20V65C60 67.2091 58.2091 69 56 69H24C21.7909 69 20 67.2091 20 65V10Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Folded corner */}
    <path
      d="M50 10V20H60"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Text lines */}
    <line x1="28" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="38" x2="48" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="46" x2="52" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="54" x2="44" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Signature line */}
    <line x1="28" y1="62" x2="40" y2="62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Decorative elements */}
    <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="65" cy="12" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="68" cy="65" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="55" r="1" fill="currentColor" opacity="0.4" />
  </svg>
)
