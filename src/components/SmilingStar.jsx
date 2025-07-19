import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import useSound from '../utils/useSound';
import useIsMobile from '../utils/useIsMobile'; // ✅ import
import sparkleAnim from '../lotties/sparkle.json';

export default function SmilingStar() {
  const [isActive, setIsActive] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const playClick = useSound('/assets/sounds/star-click.mp3');
  const controls = useAnimation();
  const isMobile = useIsMobile(); // ✅ get device check

  const handleClick = () => {
    playClick();

    if (!isActive) {
      setIsActive(true);
      setShowSparkle(true);

      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });

      setTimeout(() => {
        setShowSparkle(false);
      }, 3000);
    } else {
      setIsActive(false);
      setShowSparkle(false);
      controls.stop();
      controls.set({ y: 0 });
    }
  };

  // ✅ Don't render on mobile here
  if (isMobile) return null;

  return (
    <div className="absolute top-[-100px] left-[-120px] z-50 hidden md:block">
      {/* ⭐ Smiling Star */}
      <motion.img
        src="/assets/images/star.png"
        alt="Smiling Star"
        className="w-[150px] h-[170px] cursor-pointer drop-shadow-xl"
        animate={controls}
        onClick={handleClick}
      />

      {/* ✨ Sparkle Animation */}
      {showSparkle && (
        <Player
          src={sparkleAnim}
          autoplay
          loop={false}
          keepLastFrame={true}
          style={{
            position: 'absolute',
            top: -40,
            left: -40,
            width: '180px',
            height: '180px',
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
}
