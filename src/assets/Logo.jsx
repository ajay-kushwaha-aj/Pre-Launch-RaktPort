export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dropGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444"/>
          <stop offset="100%" stopColor="#7f1d1d"/>
        </linearGradient>
        <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Outer glow ring */}
      <circle cx="24" cy="24" r="22" fill="rgba(185,28,28,0.12)" stroke="rgba(185,28,28,0.3)" strokeWidth="1"/>
      {/* Blood drop shape */}
      <path d="M24 8 C24 8 12 20 12 28 C12 35.18 17.37 41 24 41 C30.63 41 36 35.18 36 28 C36 20 24 8 24 8Z"
        fill="url(#dropGrad)" opacity="0.95"/>
      {/* Inner highlight */}
      <path d="M24 13 C24 13 16 22 16 28 C16 32.97 19.58 37 24 37"
        stroke="url(#glowGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* R letter */}
      <text x="24" y="33" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="800"
        fontSize="13" fill="white" letterSpacing="-0.5">R</text>
    </svg>
  )
}
