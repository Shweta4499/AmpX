import { useState } from 'react';
import HeroSection from './components/HeroSection';
import InfoCard from './components/InfoCard';
import WaveBackground from './components/WaveBackground';
import FlowerBadge from './components/FlowerBadge';
import { AnimatePresence } from 'framer-motion';

export default function App() {
   // 🌟 Active card ke liye state — kaunsa card click hua hai wo track karega
  const [activeCard, setActiveCard] = useState(null);

  // 🌗 Dark mode on/off toggle karne ke liye state
  const [darkMode, setDarkMode] = useState(false);

  // 🌓 Theme toggle function — dark ya light mode toggle karega
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ease-in-out ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      {/* 🌙 Dark Mode Toggle */}
      <button
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-md z-50 text-lg sm:text-base"
        onClick={toggleDarkMode}
        title="Toggle Theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* 🌸 Flower Animation */}
      <FlowerBadge darkMode={darkMode} />

      {/* 🌊 Wave Background - positioned behind everything */}
      <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none overflow-hidden">
        <WaveBackground />
      </div>

      {/* 🔥 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] pt-16 pb-8 px-4 sm:px-8">
        {/* Hero */}
        <HeroSection onItemClick={setActiveCard} darkMode={darkMode} />

        {/* InfoCard Overlay */}
        <AnimatePresence>
          {activeCard && (
            <div className="absolute top-[50%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-40 w-[90%] sm:w-auto">
              <InfoCard
                label={activeCard}
                onClose={() => setActiveCard(null)}
                darkMode={darkMode}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
      {/* 🌟 Mobile Screen Message */}
<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-100 text-pink-800 text-sm px-4 py-2 rounded-xl shadow-md z-50 sm:hidden">
  💖 Hey there! This site sparkles best on bigger screens. Try it on a tablet or desktop for the full magic! ✨
</div>

    </div>
  );
}
