import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoadingHeart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          color: 'var(--primary-color)',
          filter: 'drop-shadow(0 0 20px rgba(255, 77, 109, 0.6))'
        }}
      >
        <Heart size={120} fill="currentColor" />
      </motion.div>
    </motion.div>
  );
}
