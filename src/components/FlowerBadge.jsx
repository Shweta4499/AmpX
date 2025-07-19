import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Player } from '@lottiefiles/react-lottie-player';
import sparkleAnim from '../lotties/sparkle.json';

export default function FlowerBadge() {
  const [isActive, setIsActive] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/sounds/background.mp3');
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const handleClick = () => {
    if (isActive) {
      // Turn off
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsActive(false);
      setShowSparkle(false);
    } else {
      // Turn on
      setIsActive(true);
      setShowSparkle(true);
      audioRef.current.play();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Remove sparkles after 3 seconds
      setTimeout(() => setShowSparkle(false), 3000);
    }
  };

  // 🧡 Sparkle positions relative to the flower
  const sparkleStyles = [
    'top-[-30px] left-[-10px]',
  'top-[-40px] left-[40px]',
  'top-[20px] left-[60px]',
  'top-[60px] left-[-20px]',
  'top-[50px] left-[40px]',
  'top-[-25px] left-[70px]',
  ];

  return (
    <div className="fixed bottom-6 left-6 w-24 h-24 z-50">
      {/* ✨ Sparkles Behind Flower */}
      {showSparkle &&
        sparkleStyles.map((pos, i) => (
          <Player
            key={i}
            autoplay
            keepLastFrame
            src={sparkleAnim}
            className={`absolute w-24 h-24 z-0 pointer-events-none ${pos}`}
            speed={1 + i * 0.1}
          />
        ))}

      {/* 🌸 Flower Front Layer */}
      <img
        src={isActive ? '/assets/gifs/flower.gif' : '/assets/images/flower.png'}
        alt="Flower"
        onClick={handleClick}
        className="relative z-10 w-full h-full cursor-pointer drop-shadow-[0_0_12px_pink] hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
