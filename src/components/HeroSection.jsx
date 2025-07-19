import { motion } from 'framer-motion';
import useSound from '../utils/useSound';// 🔊 Custom hook to play sound
import SmilingStar from './SmilingStar';// 🌟 Optional floating star element
import useIsMobile from '../utils/useIsMobile'// 📱 Custom hook to detect if device is mobile

export default function HeroSection({ onItemClick, darkMode }) {
  const isMobile = useIsMobile();
  
  const clickSound = useSound('/assets/sounds/click.mp3');

  const navItems = [
    { label: 'about', src: '/assets/icons/about.png' },
    { label: 'skills', src: '/assets/icons/skills.png' },
    { label: 'work', src: '/assets/icons/work.png' },
    { label: 'faq', src: '/assets/icons/FAQ.png' },
    { label: 'contact', src: '/assets/icons/contacts.png' },
    { label: 'experience', src: '/assets/icons/experience.png' },
    { label: 'resume', src: '/assets/icons/resume.png' },
  ];
// ✅ Agar mobile device hai toh star icon add karte hain
  if (isMobile) {
    navItems.push({ label: 'star', src: '/assets/images/star.png' });
  }

  
 // 🖱️ Jab koi icon click ho, tab sound bajao aur parent ko label bhejo
  const handleClick = (label) => {
    clickSound();//🔊 Play click sound
   
    onItemClick(label);// 📨 Parent ko bataye ki kaunsa item click hua
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${
        darkMode
          ? 'from-gray-800 to-gray-700 border-white text-white'
          : 'from-pink-100 to-pink-100 border-gray-800 text-black'
      } shadow-xl w-full sm:w-[90vw] md:w-[70vw] lg:w-[45vw] max-w-3xl min-h-[60vh] sm:min-h-[80vh] rounded-3xl px-4 sm:px-6 py-6 relative z-10 flex flex-col justify-between`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
       {/* ⭐️ Star tabhi dikhega jab device mobile nahi ho */}
      {!isMobile && <SmilingStar />}      

      {/* 📦 Saara content isme rakha gaya hai */}
      <div className="flex flex-col gap-y-6 flex-grow">
        {/*  nav bar jisme 'Home' likha hai */}
        <div
          className={`${
            darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white'
          } rounded-xl px-5 py-3 flex justify-between items-center shadow-inner`}
        >
          <h3 className="text-lg sm:text-xl font-semibold capitalize tracking-wide">
            Home
          </h3>
        </div>

        {/* 👋 Intro Content */}
        <div className="text-center flex-grow flex flex-col justify-center">
  <h1
    className={`text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-tight ${
      darkMode ? 'text-white' : 'text-gray-900'
    }`}
  >
    hi! <span className="font-bold text-orange-500">I’m Shweta</span>
  </h1>

  <p
    className={`mt-4 text-[clamp(1.2rem,3vw,1.8rem)] max-w-xl mx-auto ${
      darkMode ? 'text-gray-300' : 'text-gray-700'
    }`}
  >
    illustrator · frontend developer· creative coder  </p>
</div>


        {/* 🔽 Navigation buttons/icons — yeh clickable hai */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 max-w-3xl mx-auto pt-4">
          {navItems.map((item, idx) => (
           <motion.div
           key={idx}
           onClick={() => handleClick(item.label)}
           whileTap={{ scale: 0.95 }}
           whileHover={{ scale: 1.05 }}
           className={`w-20 flex flex-col items-center justify-center cursor-pointer rounded-xl px-3 py-3 shadow-md transition-all duration-300
             ${
               darkMode
                 ? 'bg-white text-black'
                 : 'bg- text-gray-800 hover:bg-gray-200'
             }`}
         >
         
              <img
                src={item.src}
                alt={item.label}
                className="w-12 h-12 object-contain"
              />
              <span className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-300 text-center capitalize">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
