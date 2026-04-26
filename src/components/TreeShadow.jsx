export default function TreeShadow() {
  return (
    <svg 
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 4,
      }}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <filter id="treeBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      <g filter="url(#treeBlur)" fill="rgba(0, 30, 0, 0.22)">
        
        <path 
          d="M 60 0 
             Q 55 10, 58 20 
             Q 52 25, 54 35 
             Q 48 45, 51 55 
             Q 48 65, 60 70 
             Q 70 65, 80 75 
             Q 95 70, 90 90 
             Q 85 98, 95 100 
             L 100 100 L 100 0 Z" 
        />
        
        <circle cx="53" cy="15" r="3.5" />
        <circle cx="48" cy="30" r="4.5" />
        <circle cx="47" cy="48" r="3.5" />
        <circle cx="55" cy="72" r="5" />
        <circle cx="75" cy="80" r="4" />
        <circle cx="85" cy="95" r="4.5" />
        <circle cx="65" cy="65" r="3" />
      </g>
    </svg>
  );
}
