import { useState, useEffect } from 'react';


const START_DATE = new Date('2026-03-28T13:41:00+08:00');

export default function TabletProp() {
  const [timeElapsed, setTimeElapsed] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (showMessage) return;
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - START_DATE.getTime());

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ d, h, m, s });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      onClick={handleClick}
      style={{
        width: '190px',
        height: '110px',
        backgroundColor: '#f4f4f5', 
        border: '2px solid #e4e4e7',
        borderRadius: '16px', 
        padding: '8px 14px',
        boxShadow: '4px 6px 10px rgba(0,0,0,0.25), inset -2px -2px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        fontFamily: "'Courier New', monospace",
        cursor: 'pointer',
        transition: 'transform 0.2s ease'
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      
      <div style={{ position: 'absolute', left: '6px', width: '5px', height: '5px', backgroundColor: '#71717a', borderRadius: '50%' }} />

      <div style={{
        flex: 1,
        height: '100%',
        backgroundColor: '#fff0f3', 
        border: '1px solid #fce4ec',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 0px 0px 15px rgba(255, 182, 193, 0.4)',
        transition: 'all 0.5s ease',
        overflow: 'hidden'
      }}>
        {showMessage ? (
          <div style={{
            color: '#ff4d6d',
            fontSize: '18px',
            fontWeight: '900',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            animation: 'heartBeat 1s infinite'
          }}>
            I Love You!
          </div>
        ) : (
          <>
            <div style={{
              color: '#d81159',
              fontSize: '11px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              Days Together
            </div>

            <div style={{
              display: 'flex',
              gap: '4px',
              color: '#8f2d56',
              fontWeight: 'bold',
              fontSize: '15px',
              fontVariantNumeric: 'tabular-nums' 
            }}>
              <span>{timeElapsed.d}d</span>
              <span style={{ opacity: 0.4 }}>:</span>
              <span>{timeElapsed.h.toString().padStart(2, '0')}h</span>
              <span style={{ opacity: 0.4 }}>:</span>
              <span>{timeElapsed.m.toString().padStart(2, '0')}m</span>
              <span style={{ opacity: 0.4 }}>:</span>
              <span>{timeElapsed.s.toString().padStart(2, '0')}s</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
