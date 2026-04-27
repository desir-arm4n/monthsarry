import { useEffect, useRef, useState } from 'react';

const MusicPlayer = ({ autoStart, style }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const fadeIn = (audioElement) => {
    if (!audioElement) return;
    audioElement.volume = 0;
    audioElement.play().catch(err => console.log("Auto-play blocked or failed", err));
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
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setCurrentTime(audio.currentTime);
    const setAudioData = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setAudioData);

    if (autoStart && !isPlaying) {
      fadeIn(audio);
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', setAudioData);
    };
  }, [autoStart]);

  const toggleMusic = (e) => {
    if (e) e.stopPropagation();
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="ipod-wrapper" style={{ ...style, pointerEvents: 'auto' }}>
      <audio ref={audioRef} id="bg-music" loop>
        <source src="/sincerely-i-love-you.mp3" type="audio/mpeg" />
      </audio>

      {/* Earphone Wires */}
      <svg className="earphone-wires" viewBox="0 0 100 100" style={{ position: 'absolute', top: '20px', left: '40px', width: '150px', height: '150px', pointerEvents: 'none', zIndex: -1 }}>
        <path
          d="M 10 10 Q 30 50 60 40 T 90 70"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 10 10 Q 5 60 40 80 T 70 95"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Earbuds */}
        <g transform="translate(90, 70) rotate(30)">
          <ellipse cx="0" cy="0" rx="4" ry="6" fill="#f5f5f5" />
          <circle cx="0" cy="0" r="2" fill="#d0d0d0" />
        </g>
        <g transform="translate(70, 95) rotate(-20)">
          <ellipse cx="0" cy="0" rx="4" ry="6" fill="#f5f5f5" />
          <circle cx="0" cy="0" r="2" fill="#d0d0d0" />
        </g>
      </svg>

      <div className={`ipod-device ${isPlaying ? 'is-playing' : ''}`}>
        <div className="ipod-screen">
          <div className="screen-content">
            <div className="song-info">
              <div className="song-title-container">
                <div className="song-title">Sincerely, I Love You</div>
              </div>
              <div className="song-artist">YukiV4554</div>
            </div>
            
            <div className="timeline-container">
              <div className="timeline-bar">
                <div className="timeline-progress" style={{ width: `${(currentTime / (duration || 1)) * 100}%` }} />
              </div>
              <div className="time-labels">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration || 0)}</span>
              </div>
            </div>

            <div className="screen-controls">
              <span className="ctrl-icon small">⏮</span>
              <span className="ctrl-icon large">{isPlaying ? '⏸' : '▶'}</span>
              <span className="ctrl-icon small">⏭</span>
            </div>
          </div>
        </div>

        <div className="ipod-click-wheel" onClick={toggleMusic}>
          <div className="center-button" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
