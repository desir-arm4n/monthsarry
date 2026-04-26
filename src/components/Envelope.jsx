import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Envelope({ isOpen, onOpen }) {
  return (
    <motion.div
      whileHover={{ scale: isOpen ? 1 : 1.05 }}
      whileTap={{ scale: isOpen ? 1 : 0.95 }}
      onClick={!isOpen ? onOpen : undefined}
      style={{
        cursor: isOpen ? 'default' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="envelope">
        <motion.div
          className="envelope-flap"
          initial={{ rotateX: 0, zIndex: 4 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 1 : 4 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none'
        }}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              color: 'var(--primary-color)',
              filter: 'drop-shadow(0 0 10px rgba(255, 77, 109, 0.8))'
            }}
          >
            <Heart size={40} fill="currentColor" />
          </motion.div>
        </div>
      </div>
      {!isOpen && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            marginTop: '30px',
            color: 'var(--secondary-color)',
            fontSize: '0.9rem',
          }}
        >
          Click to Open
        </motion.p>
      )}
    </motion.div>
  );
}
