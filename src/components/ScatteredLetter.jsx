import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ScatteredLetter({ x, y, rotation, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotation - 45 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ 
        opacity: { duration: 0.5, delay: delay },
        scale: { type: "spring", stiffness: 260, damping: 20, delay: delay },
        rotate: { type: "spring", stiffness: 260, damping: 20, delay: delay }
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        pointerEvents: 'auto'
      }}
    >
      <div className="mini-envelope">
        <div className="mini-envelope-flap" />
        <div style={{ position: 'absolute', zIndex: 5, pointerEvents: 'none' }}>
          <Heart size={14} color="#ff4d6d" fill="#ff4d6d" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255, 77, 109, 0.5))' }} />
        </div>
      </div>
    </motion.div>
  );
}
