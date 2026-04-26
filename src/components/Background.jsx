import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Background() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 100 + Math.random() * 20, 
      size: Math.random() * 15 + 10,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{
            position: 'absolute',
            left: `${heart.x}%`,
            color: 'var(--primary-color)',
            opacity: 0.4,
          }}
          initial={{ y: `${heart.y}vh` }}
          animate={{
            y: ['100vh', '-20vh'],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
