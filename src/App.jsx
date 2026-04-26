import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PicnicScene from './components/PicnicScene';
import QuestionView from './components/QuestionView';
import LoadingHeart from './components/LoadingHeart';
import ScatteredLetter from './components/ScatteredLetter';
import StationeryModal from './components/StationeryModal';
import TreeShadow from './components/TreeShadow';
import Background from './components/Background';
import HeartPadlock from './components/HeartPadlock';
import MusicPlayer from './components/MusicPlayer';
import './index.css';

const lettersData = [
  { id: 1, x: 26, y: 43, rotation: -5, message: "My dearest Kristaleen,\n\nIt's already been one month of us officially being together. I still remember the day when we first met on Facebook, our first few chats were a little awkward since you said that you just came from your practice and all. And we continued that dynamic for a few days until we finally had a proper conversation lol. And meeting you for the first time, finding out how shy you were was really cute. And I'm glad we met, I couldn't even begin to imagine how different the last 4 months would be without you.\n\nAnd sometimes you ask yourself why I love you right? Let me answer that. It's because of how much we clicked in such a short amount of time. I'm really grateful and happy for having such a caring and loving girlfriend. I know I can't get you everything right now, but someday I'll give you the world.\n\nI love you, now and forever lovelove;\n\nForever yours,\nEarl" },
  { id: 2, x: 12, y: 75, rotation: -15, message: "Thank you for being my home.\n\nThe place I can stop pretending to be a person I'm not, the place I can be weak, the place I can be vulnerable and the place I can be myself.\n\nThank you for making me feel like I'm the only one in the world who is worthy of your love. Thank you for always seeing through my flaws, accepting them and choosing to love me regardless." },
  { id: 3, x: 50, y: 65, rotation: 10, message: "Thank you for giving me the peace of mind found myself begging for.\n\nWith you, the things I had to beg for before were given to me without a second thought. Thank you for giving me the things I thought I'd never be able to receive at all. Thank you for finally giving me the security I longed for to finally feel safe being with someone.\n\nI know there are still some parts of me that I need to work on, but with you by my side, I know I can do it. Thank you for loving me despite all my flaws. I love you, and I'll always love you no matter what." },
  { id: 4, x: 75, y: 53, rotation: -5, message: "Thank you for making me feel loved.\n\nI know you're not the most romantic person, but I can feel all the love from your actions. I know this is one of the parts of yourself you often worry about. But rest assured, your efforts are seen and the love is received.\n\nAnd honestly, I find it really cute how you get shy with some things. It's a stark contrast to the intimidating look and vibe you give off, and I absolutely adore when you want to get cuddled and babied. Just so you know, you're the only person I felt safe enough to do these things with, so I'm in your hands." },
  { id: 5, x: 78, y: 87, rotation: 20, message: "Lovelove,\n\nI know life has been hard on the both of us. And we have our own silent battles. I hope you know that this time, you aren't alone anymore and you have me to lean on. I'll always be here for you, no matter what. And I'll always love you no matter what.\n\nFrom your lovable little idiot,\nEarl" }
];

function App() {
  const [view, setView] = useState('question');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleYes = () => {
    setView('padlock');
  };

  const handleUnlock = () => {
    setView('loading');
    setTimeout(() => {
      setView('picnic');
    }, 2000);
  };

  const handleLetterClick = (message) => {
    setSelectedMessage(message);
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>

      <PicnicScene>
        <AnimatePresence>
          {view === 'picnic' && lettersData.map((letter, index) => (
            <ScatteredLetter
              key={letter.id}
              x={letter.x}
              y={letter.y}
              rotation={letter.rotation}
              delay={index * 0.15}
              onClick={() => handleLetterClick(letter.message)}
            />
          ))}
        </AnimatePresence>
      </PicnicScene>

      <AnimatePresence>
        {(view === 'question' || view === 'padlock') && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: '#ffe4e8',
              zIndex: 5
            }}
          >
            <Background />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}>
        <AnimatePresence mode="wait">
          {view === 'question' && (
            <QuestionView key="question" onYes={handleYes} />
          )}

          {view === 'padlock' && (
            <HeartPadlock key="padlock" onUnlock={handleUnlock} />
          )}

          {view === 'loading' && (
            <LoadingHeart key="loading" />
          )}
        </AnimatePresence>
      </div>

      <TreeShadow />

      <StationeryModal
        isOpen={!!selectedMessage}
        onClose={handleCloseModal}
        message={selectedMessage}
      />

      <MusicPlayer autoStart={view === 'picnic'} />

    </div>
  );
}

export default App;
