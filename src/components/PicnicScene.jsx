import { useState } from 'react';
import TabletProp from './TabletProp';

let currentSeed = 12345;
function seededRandom() {
  let t = currentSeed += 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
const Tulip = ({ cx, cy, scale, rotate, colorMain, colorSide, bloomed }) => {
  const bloomScale = bloomed ? scale * 1.2 : scale;
  const bloomRotate = bloomed ? rotate * 1.5 : rotate;
  const bloomCx = bloomed ? cx + (cx - 50) * 0.3 : cx;
  const bloomCy = bloomed ? cy - 5 : cy;

  return (
    <g 
      transform={`translate(${bloomCx}, ${bloomCy}) scale(${bloomScale}) rotate(${bloomRotate})`}
      style={{ transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <path d="M -8 0 C -12 -35 12 -35 8 0 L 0 15 Z" fill={colorMain} style={{ transition: 'fill 0.5s ease' }} />
      <path d="M 0 15 C -25 5 -20 -35 -8 -30 C -2 -20 0 0 0 15 Z" fill={colorSide} style={{ transition: 'fill 0.5s ease' }} />
      <path d="M 0 15 C 25 5 20 -35 8 -30 C 2 -20 0 0 0 15 Z" fill={colorSide} style={{ transition: 'fill 0.5s ease' }} />
    </g>
  );
};

const ChocolateCakeScene = () => (
  <svg viewBox="0 0 200 200" style={{ width: '260px', height: '260px', filter: 'drop-shadow(4px 6px 8px rgba(0,0,0,0.5))', transform: 'rotate(-5deg)' }}>
    <circle cx="100" cy="110" r="95" fill="#2b2d30" />
    <circle cx="100" cy="110" r="85" fill="#1e1f22" />
    <circle cx="35" cy="130" r="2" fill="#361502" />
    <circle cx="25" cy="120" r="1.5" fill="#1f0a00" />
    <circle cx="45" cy="150" r="2.5" fill="#361502" />
    <circle cx="150" cy="170" r="1.5" fill="#361502" />
    <g>
      <path d="M 54 54 A 65 65 0 1 1 35 100 L 35 115 A 65 65 0 1 0 54 69 Z" fill="#2d1303" />
      <path d="M 100 100 L 54 54 L 54 69 L 100 115 Z" fill="#1a0a01" />
      <path d="M 100 100 L 35 100 L 35 115 L 100 115 Z" fill="#4a2511" />
      <path d="M 100 100 L 35 100 A 65 65 0 1 0 54 54 Z" fill="#30160a" />
      <path d="M 55 160 Q 90 180 130 150 Q 150 130 145 100" fill="none" stroke="#4a1d04" strokeWidth="12" strokeLinecap="round" />
      <path d="M 155 80 Q 140 50 100 50 Q 80 50 70 65" fill="none" stroke="#4a1d04" strokeWidth="9" strokeLinecap="round" />
      <path d="M 80 110 Q 110 90 120 120" fill="none" stroke="#4a1d04" strokeWidth="7" strokeLinecap="round" />
      <path d="M 65 155 Q 90 165 115 145" fill="none" stroke="#753511" strokeWidth="3" strokeLinecap="round" />
      <path d="M 145 80 Q 135 60 105 60" fill="none" stroke="#753511" strokeWidth="3" strokeLinecap="round" />
    </g>
    <g transform="translate(-25, -12) rotate(-5, 100, 100)">
      <path d="M 54 54 A 65 65 0 0 0 35 100 L 35 115 A 65 65 0 0 1 54 69 Z" fill="#2d1303" />
      <path d="M 100 100 L 54 54 L 54 69 L 100 115 Z" fill="#4a2511" />
      <path d="M 100 100 L 35 100 L 35 115 L 100 115 Z" fill="#1a0a01" />
      <path d="M 100 100 L 54 54 A 65 65 0 0 0 35 100 Z" fill="#30160a" />
      <path d="M 80 90 Q 60 70 45 90" fill="none" stroke="#4a1d04" strokeWidth="6" strokeLinecap="round" />
      <path d="M 75 88 Q 65 78 50 90" fill="none" stroke="#753511" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

const TulipBouquet = () => {
  const [bloomed, setBloomed] = useState(false);
  const leaves = [
    { d: "M 50 100 L 10 15 L 20 60 Z", fill: "#4a9c1e", transformOffset: -10 },
    { d: "M 50 100 L 90 15 L 80 60 Z", fill: "#4a9c1e", transformOffset: 10 },
    { d: "M 45 90 L 25 5 L 35 45 Z", fill: "#5ebd26", transformOffset: -15 },
    { d: "M 55 90 L 75 5 L 65 45 Z", fill: "#5ebd26", transformOffset: 15 },
    { d: "M 50 90 L 50 -5 L 55 40 Z", fill: "#357811", transformOffset: 0 },
    { d: "M 50 100 L 5 45 L 20 70 Z", fill: "#5ebd26", transformOffset: -20 },
    { d: "M 50 100 L 95 45 L 80 70 Z", fill: "#5ebd26", transformOffset: 20 },
  ];

  return (
    <svg 
      viewBox="0 0 100 160" 
      style={{ 
        width: '150px', 
        height: '240px', 
        filter: 'drop-shadow(3px 8px 6px rgba(0,0,0,0.3))', 
        transform: 'rotate(-25deg)',
        cursor: 'pointer',
        pointerEvents: 'auto',
        overflow: 'visible'
      }}
      onClick={(e) => {
        e.stopPropagation();
        setBloomed(!bloomed);
      }}
    >
      {leaves.map((l, i) => (
        <path 
          key={i} 
          d={l.d} 
          fill={l.fill} 
          style={{
            transform: bloomed ? `rotate(${l.transformOffset}deg)` : 'rotate(0deg)',
            transformOrigin: '50px 100px',
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        />
      ))}
      <path d="M 30 50 L 40 90 M 70 50 L 60 90 M 50 40 L 50 90 M 20 60 L 45 90 M 80 60 L 55 90" stroke="#4c9e24" strokeWidth="2.5" />
      <Tulip cx={35} cy={30} scale={0.65} rotate={-10} colorMain="#e5383b" colorSide="#ba1826" bloomed={bloomed} /> 
      <Tulip cx={50} cy={25} scale={0.7} rotate={5} colorMain="#ffffff" colorSide="#f0f0f0" bloomed={bloomed} /> 
      <Tulip cx={65} cy={30} scale={0.65} rotate={15} colorMain="#ff6685" colorSide="#ff335e" bloomed={bloomed} /> 
      <Tulip cx={22} cy={48} scale={0.7} rotate={-25} colorMain="#ffc2d1" colorSide="#ff99b0" bloomed={bloomed} /> 
      <Tulip cx={35} cy={45} scale={0.65} rotate={-15} colorMain="#ffffff" colorSide="#f0f0f0" bloomed={bloomed} /> 
      <Tulip cx={50} cy={42} scale={0.75} rotate={0} colorMain="#e5383b" colorSide="#ba1826" bloomed={bloomed} /> 
      <Tulip cx={65} cy={45} scale={0.7} rotate={15} colorMain="#ffc2d1" colorSide="#ff99b0" bloomed={bloomed} /> 
      <Tulip cx={78} cy={50} scale={0.7} rotate={25} colorMain="#ffffff" colorSide="#f0f0f0" bloomed={bloomed} /> 
      <Tulip cx={40} cy={60} scale={0.75} rotate={-10} colorMain="#ff6685" colorSide="#ff335e" bloomed={bloomed} /> 
      <Tulip cx={60} cy={60} scale={0.75} rotate={10} colorMain="#e5383b" colorSide="#ba1826" bloomed={bloomed} /> 
      <path d="M 15 80 C 30 88, 70 88, 85 80 L 50 160 Z" fill="#ebb27d" />
      <path d="M 15 80 C 25 83, 35 85, 45 85 L 50 160 Z" fill="#f2c79a" />
    </svg>
  );
};

const PondEdge = () => (
  <svg viewBox="0 0 200 200" style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '500px', height: '500px', zIndex: 0, overflow: 'visible' }}>
    <path d="M 50 200 Q 100 100 200 50 L 200 200 Z" fill="#48cae4" opacity="0.8" />
    <path d="M 60 200 Q 110 110 200 60 L 200 200 Z" fill="#90e0ef" opacity="0.9" />
    <path d="M 80 200 Q 130 130 200 80 L 200 200 Z" fill="#0096c7" />

    <g transform="translate(150, 140) rotate(-15) scale(0.6)">
      <g className="lily-pad">
        <path d="M 0 0 C -40 -30 -40 30 0 40 C 40 30 40 -30 0 0 Z" fill="#52b788" />
        <path d="M 0 10 L 0 40" stroke="#40916c" strokeWidth="2" />
        <circle cx="5" cy="5" r="8" fill="#ffb3c1" />
        <circle cx="5" cy="5" r="4" fill="#ff4d6d" />
      </g>
    </g>

    <g transform="translate(110, 180) rotate(40) scale(0.4)">
      <g className="lily-pad" style={{ animationDelay: '-1.5s' }}>
        <path d="M 0 0 C -40 -30 -40 30 0 40 C 40 30 40 -30 0 0 Z" fill="#74c69d" />
      </g>
    </g>
  </svg>
);

export default function PicnicScene({ children }) {

  currentSeed = 12345;

  const flowers = Array.from({ length: 15 }).map((_, i) => ({
    id: `flower-${i}`,
    top: `${seededRandom() * 90 + 5}%`,
    left: `${seededRandom() * 90 + 5}%`,
    scale: seededRandom() * 0.5 + 0.5,
    rotate: seededRandom() * 360,
    color: seededRandom() > 0.5 ? '#fff0f3' : '#ffd60a'
  }));

  const pebbles = Array.from({ length: 25 }).map((_, i) => ({
    id: `pebble-${i}`,
    top: `${seededRandom() * 90 + 5}%`,
    left: `${seededRandom() * 90 + 5}%`,
    width: `${seededRandom() * 8 + 4}px`,
    height: `${seededRandom() * 6 + 4}px`,
    rotate: seededRandom() * 360,
    borderRadius: `${seededRandom() * 40 + 30}% ${seededRandom() * 40 + 30}% ${seededRandom() * 40 + 30}% ${seededRandom() * 40 + 30}%`,
    color: ['#9e9e9e', '#bdbdbd', '#757575', '#a1887f', '#8d6e63'][Math.floor(seededRandom() * 5)]
  }));

  const stoneWalkway = Array.from({ length: 15 }).map((_, i) => ({
    id: `walkway-stone-${i}`,
    bottom: `${i * 7 - 5}%`,
    left: `${5 + Math.sin(i * 0.4) * 3 + seededRandom() * 2}%`,
    width: `${seededRandom() * 30 + 80}px`,
    height: `${seededRandom() * 20 + 50}px`,
    rotate: seededRandom() * 40 - 20,
    borderRadius: `${seededRandom() * 20 + 40}% ${seededRandom() * 20 + 40}% ${seededRandom() * 20 + 40}% ${seededRandom() * 20 + 40}%`,
    color: ['#8c8c8c', '#a6a6a6', '#999999', '#737373', '#b3b3b3'][Math.floor(seededRandom() * 5)],
    boxShadow: 'inset -2px -4px 6px rgba(0,0,0,0.2), 2px 4px 6px rgba(0,0,0,0.3)'
  }));

  const grassPatches = Array.from({ length: 120 }).map((_, i) => ({
    id: `grass-${i}`,
    top: `${seededRandom() * 95}%`,
    left: `${seededRandom() * 95}%`,
    scale: seededRandom() * 0.5 + 0.6,
    delay: `${seededRandom() * 4}s`,
    duration: `${seededRandom() * 2 + 3}s`
  }));

  const clovers = Array.from({ length: 18 }).map((_, i) => ({
    id: `clover-${i}`,
    top: `${seededRandom() * 95}%`,
    left: `${seededRandom() * 95}%`,
    rotate: seededRandom() * 360,
    scale: seededRandom() * 0.4 + 0.6,
  }));

  const fallenLeaves = Array.from({ length: 12 }).map((_, i) => ({
    id: `fleaf-${i}`,
    top: `${seededRandom() * 95}%`,
    left: `${seededRandom() * 95}%`,
    rotate: seededRandom() * 360,
    scale: seededRandom() * 0.4 + 0.6,
    color: ['#f4a261', '#e76f51', '#e9c46a'][Math.floor(seededRandom() * 3)]
  }));

  const mushrooms = Array.from({ length: 6 }).map((_, i) => ({
    id: `mush-${i}`,
    top: `${seededRandom() * 90 + 5}%`,
    left: `${seededRandom() * 90 + 5}%`,
    scale: seededRandom() * 0.3 + 0.7,
  }));

  const petals = Array.from({ length: 12 }).map((_, i) => ({
    id: `petal-${i}`,
    top: `${seededRandom() * 40 - 20}vh`,
    left: `${seededRandom() * 40 - 20}vw`,
    animationDuration: `${seededRandom() * 15 + 15}s`,
    animationDelay: `${seededRandom() * 10}s`,
    scale: seededRandom() * 0.5 + 0.5,
  }));



    return (
    <div className="bg-grass">

      {grassPatches.map(patch => (
        <div key={patch.id} style={{
          position: 'absolute',
          top: patch.top,
          left: patch.left,
          transform: `scale(${patch.scale})`,
          width: '20px',
          height: '24px',
          zIndex: 0
        }}>

          <div className="patch-sway" style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            animationDelay: patch.delay,
            animationDuration: patch.duration
          }}>
            <div style={{ position: 'absolute', bottom: 0, left: '-4px', width: '8px', height: '16px', backgroundColor: '#6ca85a', borderRadius: '100% 0 0 0', transformOrigin: 'bottom right', transform: 'rotate(-25deg)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '2px', width: '10px', height: '24px', backgroundColor: '#6ca85a', borderRadius: '50% 50% 0 0' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '10px', width: '8px', height: '14px', backgroundColor: '#6ca85a', borderRadius: '0 100% 0 0', transformOrigin: 'bottom left', transform: 'rotate(25deg)' }} />
          </div>
        </div>
      ))}

      {clovers.map(clover => (
        <div key={clover.id} style={{ position: 'absolute', top: clover.top, left: clover.left, transform: `scale(${clover.scale}) rotate(${clover.rotate}deg)`, width: '20px', height: '20px', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '2px', left: '6px', width: '8px', height: '8px', backgroundColor: '#589e41', borderRadius: '50%', boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', top: '8px', left: '2px', width: '8px', height: '8px', backgroundColor: '#589e41', borderRadius: '50%', boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', top: '8px', left: '10px', width: '8px', height: '8px', backgroundColor: '#589e41', borderRadius: '50%', boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', top: '10px', left: '9px', width: '2px', height: '10px', backgroundColor: '#4a8f33', borderRadius: '1px', transform: 'rotate(-15deg)' }} />
        </div>
      ))}

      {fallenLeaves.map(leaf => (
        <div key={leaf.id} style={{ position: 'absolute', top: leaf.top, left: leaf.left, transform: `scale(${leaf.scale}) rotate(${leaf.rotate}deg)`, width: '15px', height: '20px', zIndex: 0, opacity: 0.9 }}>
          <div style={{ width: '15px', height: '20px', backgroundColor: leaf.color, borderRadius: '0 10px 0 10px', boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-4px', left: '0px', width: '2px', height: '6px', backgroundColor: '#8a5a44', transform: 'rotate(45deg)' }} />
        </div>
      ))}

      {mushrooms.map(mush => (
        <div key={mush.id} style={{ position: 'absolute', top: mush.top, left: mush.left, transform: `scale(${mush.scale})`, width: '20px', height: '20px', zIndex: 0 }}>
          <div style={{ position: 'absolute', bottom: '0', left: '6px', width: '8px', height: '10px', backgroundColor: '#faedcd', borderRadius: '3px' }} />
          <div style={{ position: 'absolute', top: '0', left: '0', width: '20px', height: '12px', backgroundColor: '#d00000', borderRadius: '10px 10px 3px 3px', overflow: 'hidden', boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)' }}>
            <div style={{ position: 'absolute', top: '2px', left: '3px', width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: '5px', left: '12px', width: '5px', height: '3px', backgroundColor: 'white', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: '7px', left: '5px', width: '3px', height: '3px', backgroundColor: 'white', borderRadius: '50%' }} />
          </div>
        </div>
      ))}

      {flowers.map(flower => (
        <div key={flower.id} style={{
          position: 'absolute',
          top: flower.top,
          left: flower.left,
          transform: `scale(${flower.scale}) rotate(${flower.rotate}deg)`,
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.95
        }}>

          <div style={{ position: 'absolute', width: '20px', height: '7px', backgroundColor: flower.color, borderRadius: '4px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', width: '7px', height: '20px', backgroundColor: flower.color, borderRadius: '4px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />

          <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: '#ffca3a', borderRadius: '50%', zIndex: 1, boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.2)' }} />
        </div>
      ))}

      {pebbles.map(pebble => (
        <div key={pebble.id} style={{
          position: 'absolute',
          top: pebble.top,
          left: pebble.left,
          width: pebble.width,
          height: pebble.height,
          backgroundColor: pebble.color,
          borderRadius: pebble.borderRadius,
          transform: `rotate(${pebble.rotate}deg)`,
          boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)',
          opacity: 0.9
        }} />
      ))}

      <div className="cloud-shadow" />

      {petals.map(petal => (
        <div key={petal.id} className="drifting-petal" style={{
          top: petal.top,
          left: petal.left,
          transform: `scale(${petal.scale})`,
          animation: `drift ${petal.animationDuration} linear ${petal.animationDelay} infinite`
        }} />
      ))}

      {stoneWalkway.map(stone => (
        <div key={stone.id} style={{
          position: 'absolute',
          bottom: stone.bottom,
          left: stone.left,
          width: stone.width,
          height: stone.height,
          backgroundColor: stone.color,
          borderRadius: stone.borderRadius,
          transform: `rotate(${stone.rotate}deg)`,
          boxShadow: stone.boxShadow,
          zIndex: 0
        }} />
      ))}

      <PondEdge />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '800px',
        height: '80%',
        maxHeight: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <div className="picnic-mat" style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }} />

        <div style={{ position: 'absolute', top: '10%', left: '10%', zIndex: 1 }}>
          <TulipBouquet />
        </div>

        <div style={{ position: 'absolute', top: '15%', left: '35%', zIndex: 1, transform: 'rotate(4deg)' }}>
          <TabletProp />
        </div>

        <div style={{ position: 'absolute', top: '10%', right: '5%', zIndex: 1 }}>
          <ChocolateCakeScene />
        </div>

        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
