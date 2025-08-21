export const StarsIcon = ({ className = "", ...props }) => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M60 10L65.45 44.55L90 30L75.45 54.55L110 60L75.45 65.45L90 90L65.45 75.45L60 110L54.55 75.45L30 90L44.55 65.45L10 60L44.55 54.55L30 30L54.55 44.55L60 10Z"
      fill="currentColor"
      opacity="0.8"
    />
    <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="95" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="25" cy="95" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="95" cy="95" r="2" fill="currentColor" opacity="0.6" />
  </svg>
)
