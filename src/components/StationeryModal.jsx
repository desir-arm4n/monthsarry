import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PolaroidTemplate from './PolaroidTemplate';

export default function StationeryModal({ isOpen, onClose, message, imageUrl }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100
          }}
          onClick={onClose}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '500px' }}>
            <motion.div
              initial={{ scale: 0.8, y: 50, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="custom-scrollbar"
              style={{
                width: '100%',
                backgroundColor: '#fffdf8',
                padding: '40px',
                borderRadius: '5px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                position: 'relative',
                maxHeight: '80vh',
                overflowY: 'auto',
                border: '1px solid #e1d5c9'
              }}
            >
              <p style={{
                fontFamily: '"Caveat", cursive',
                fontSize: '1.8rem',
                color: '#333',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                paddingBottom: '60px' // Increased padding to avoid overlap
              }}>
                {message}
              </p>
            </motion.div>

            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#888',
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            <PolaroidTemplate 
              style={{ 
                bottom: '-60px', 
                right: '-60px',
                zIndex: 11,
                pointerEvents: 'none'
              }} 
              rotation={12}
              imageUrl={imageUrl}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
