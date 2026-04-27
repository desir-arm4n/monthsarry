import React from 'react';

export default function PolaroidTemplate({ style, rotation = -5, imageUrl }) {
  return (
    <div
      style={{
        width: '140px',
        height: '145px',
        backgroundColor: '#fff',
        padding: '10px 10px 30px 10px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        transform: `rotate(${rotation}deg)`,
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        ...style
      }}
    >
      <div
        style={{
          width: '100%',
          height: '105px', // Approx 4:3 for 120px width
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          border: '1px solid #ddd'
        }}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Polaroid" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            width="50%"
            height="50%"
            style={{ opacity: 0.3 }}
          >
            <rect x="10" y="20" width="80" height="60" fill="none" stroke="#666" strokeWidth="2" />
            <circle cx="35" cy="40" r="8" fill="none" stroke="#666" strokeWidth="2" />
            <path d="M 10 80 L 40 50 L 60 70 L 75 60 L 90 80" fill="none" stroke="#666" strokeWidth="2" />
          </svg>
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '40px',
          height: '3px',
          backgroundColor: '#f5f5f5',
          borderRadius: '2px'
        }}
      />
    </div>
  );
}
