import { useEffect, useRef, useState } from 'react';

const MusicPlayer = ({ autoStart }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeIn = (audioElement) => {
    audioElement.volume = 0;
    audioElement.play();
    let volume = 0;
    const fadeInterval = setInterval(() => {
      if (volume < 0.4) {
        volume += 0.03;
        audioElement.volume = Math.min(volume, 0.5);
      } else {
        clearInterval(fadeInterval);
      }
    }, 200);
  };

  useEffect(() => {
    if (autoStart && !isPlaying) {
      fadeIn(audioRef.current);
      setIsPlaying(true);
    }
  }, [autoStart]);

  const toggleMusic = () => {
    if (!isPlaying) {
      fadeIn(audioRef.current);
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} id="bg-music" loop>
        <source src="/sincerely-i-love-you.mp3" type="audio/mpeg" />
      </audio>

      <div id="music-control" className="music-btn" onClick={toggleMusic}>
        <span id="music-icon">{isPlaying ? '♫' : '♪'}</span>
      </div>
    </>
  );
};

export default MusicPlayer;
