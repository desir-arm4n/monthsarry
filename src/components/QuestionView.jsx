import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import khocGif from '../assets/khóc.gif';

export default function QuestionView({ onYes }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleNoHover = () => {
    const randomX = (Math.random() * 300) - 150;
    const randomY = (Math.random() * 300) - 150;
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="glass-card" style={{
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        pointerEvents: 'auto'
      }}>
        <img 
          src={khocGif} 
          alt="Cute crying gif" 
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'contain',
            borderRadius: '10px'
          }}
        />

        <h1 style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'var(--primary-color)'
        }}>
          Do you love me?
        </h1>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', position: 'relative' }}>
          <motion.button 
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
          >
            Yes
          </motion.button>
          
          <motion.button 
            className="btn"
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
          >
            No
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
