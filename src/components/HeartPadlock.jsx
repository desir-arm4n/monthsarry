import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeartPadlock({ onUnlock }) {
  const [digits, setDigits] = useState([0, 0, 0, 0]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const correctCode = [0, 3, 2, 8];

  const handleDigitChange = (index, delta) => {
    if (isUnlocked) return;
    const newDigits = [...digits];
    newDigits[index] = (newDigits[index] + delta + 10) % 10;
    setDigits(newDigits);
  };

  useEffect(() => {
    if (digits.every((d, i) => d === correctCode[i])) {
      setIsUnlocked(true);
      setTimeout(onUnlock, 1500); 
    }
  }, [digits, onUnlock]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '100%',
      height: '100%',
      pointerEvents: 'auto'
    }}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        style={{ position: 'relative', width: '320px', height: '320px' }}
      >
        
        <svg viewBox="0 -20 100 120" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 15px 25px rgba(255, 77, 109, 0.4))' }}>
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={isUnlocked ? "#95d5b2" : "#ff758f"} />
              <stop offset="100%" stopColor={isUnlocked ? "#40916c" : "#c9184a"} />
            </linearGradient>
            <linearGradient id="shackleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#adb5bd" />
              <stop offset="30%" stopColor="#f8f9fa" />
              <stop offset="70%" stopColor="#ced4da" />
              <stop offset="100%" stopColor="#6c757d" />
            </linearGradient>
            <linearGradient id="shackleShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
            </linearGradient>
          </defs>

          
          <motion.path 
            d="M 30 30 L 30 15 A 20 20 0 0 1 70 15 L 70 30" 
            fill="none" 
            stroke="url(#shackleGrad)" 
            strokeWidth="10" 
            strokeLinecap="round"
            style={{ 
              originX: 0.9, 
              originY: 0.875,
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' 
            }}
            animate={{ 
              rotate: isUnlocked ? 35 : 0
            }}
            transition={{ type: "spring", stiffness: 150 }}
          />

          
          <motion.path 
            d="M 30 30 L 30 15 A 20 20 0 0 1 70 15 L 70 30" 
            fill="none" 
            stroke="url(#shackleShadow)" 
            strokeWidth="10" 
            strokeLinecap="round"
            style={{ 
              originX: 0.9, 
              originY: 0.875 
            }}
            animate={{ 
              rotate: isUnlocked ? 35 : 0
            }}
            transition={{ type: "spring", stiffness: 150 }}
          />

          <motion.path 
            d="M 50 95 C 20 75 5 50 5 30 C 5 15 25 10 40 20 C 45 25 50 30 50 30 C 50 30 55 25 60 20 C 75 10 95 15 95 30 C 95 50 80 75 50 95" 
            fill="url(#heartGrad)" 
            style={{ transition: 'fill 0.5s ease' }}
          />

          <path d="M 12 35 C 12 20 25 15 35 22 Q 40 25 45 35 Q 30 45 15 65 Q 12 50 12 35 Z" fill="rgba(255,255,255,0.15)" />
          <path d="M 15 25 Q 30 15 45 25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 85 25 Q 70 15 55 25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          gap: '6px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
          backdropFilter: 'blur(12px)',
          padding: '10px 14px',
          borderRadius: '16px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.7)'
        }}>
          {digits.map((digit, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <motion.button 
                whileHover={{ scale: 1.2, color: '#ff758f' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDigitChange(i, 1)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '14px', color: '#ff4d6d', padding: '2px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}
              >▲</motion.button>
              
              <div style={{ 
                fontSize: '20px', 
                fontWeight: '900', 
                width: '28px', 
                height: '32px',
                textAlign: 'center', 
                color: '#2b2b2b',
                background: 'linear-gradient(180deg, #dee2e6 0%, #ffffff 50%, #dee2e6 100%)',
                borderRadius: '6px',
                border: '1px solid #adb5bd',
                boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.15), inset 0 -4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(255,255,255,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Courier New", Courier, monospace',
                textShadow: '0 1px 0 rgba(255,255,255,0.8)'
              }}>
                {digit}
              </div>

              <motion.button 
                whileHover={{ scale: 1.2, color: '#ff758f' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDigitChange(i, -1)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '14px', color: '#ff4d6d', padding: '2px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}
              >▼</motion.button>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginTop: '40px', textAlign: 'center' }}
      >
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#ff4d6d', 
          fontWeight: 'bold', 
          marginBottom: '5px',
          fontFamily: '"Inter", sans-serif' 
        }}>
          {isUnlocked ? "Correct! ❤️" : "Enter the secret code"}
        </p>
        {!isUnlocked && <p style={{ color: '#ffb3c1', fontSize: '0.9rem', fontStyle: 'italic' }}>Hint: Our Special Date (MMDD)</p>}
      </motion.div>
    </div>
  );
}
