export const TechIcon = ({ className = "", ...props }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="8" y="15" width="44" height="30" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="30" cy="30" r="3" fill="currentColor" />
    <path d="M15 8L20 12L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 8L40 12L45 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 44L20 48L15 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 44L40 48L45 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="5" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="5" r="1.5" fill="currentColor" opacity="0.5" />
    <circle cx="5" cy="55" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="55" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
)
