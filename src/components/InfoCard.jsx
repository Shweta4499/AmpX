import { useEffect } from 'react';
import { motion } from 'framer-motion';// ✨ Animation ke liye
import confetti from 'canvas-confetti';//🎉 Confetti effect jab card open ho
import Lottie from 'lottie-react';
import useSound from '../utils/useSound';
// 🟡 Lottie animation files import
import aboutAnim from '../lotties/about.json';
import linksAnim from '../lotties/links.json';
import workAnim from '../lotties/work.json';
import faqAnim from '../lotties/faq.json';
import contactAnim from '../lotties/contact.json';

// 🔠 Components jo card ke andar dikhte hain
import About from './About';
import SkillsSection from './SkillsSection';
import FAQ from './FAQ';
import Work from './Work';
import Contact from './Contact';
import Experience from './Experience';
import Resume from './Resume';
import SmilingStar from './SmilingStar';
import Star from './Star';

// 🔵 Background gradients for different sections
const bgColors = {
  about: 'from-pink-200 to-pink-100',
  skills: 'from-yellow-200 to-yellow-100',
  work: 'from-blue-200 to-blue-100',
  faq: 'from-green-200 to-green-100',
  contact: 'from-purple-200 to-purple-100',
  star: 'from-yellow-100 to-yellow-50',
};
// 🟠 Specific lottie animation har section ke liye
const animations = {
  about: aboutAnim,
  links: linksAnim,
  work: workAnim,
  faq: faqAnim,
  contact: contactAnim,
};



export default function InfoCard({ label, onClose }) {

// ✅ Components mapping jo label ke hisaab se render hoga

  const Components = {
    about: About,
    skills: SkillsSection,
    work: Work,
    faq: FAQ,
    contact: Contact,
    experience:Experience,
    resume:Resume,
    star: Star,
  };
    // 🧩 Jo component render karna hai usse select karo

  const DynamicComponent = Components[label];
  const bgClass = bgColors[label] || 'from-gray-100 to-white';
  const lottieAnim = animations[label];
  const playClick = useSound('/assets/sounds/click.mp3');

  useEffect(() => {
    confetti({ particleCount: 100, spread: 50, origin: { y: 0.6 } });
  }, []);

  return (
    <motion.div
      className={`bg-gradient-to-br ${bgClass} border border-gray-300 shadow-2xl w-[90vw] max-w-3xl min-h-[75vh] rounded-3xl overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🔝 Top bar with close button */}
      <div className="bg-gray-900 text-white px-5 py-3 flex justify-between items-center rounded-t-3xl">
        <h3 className="text-lg sm:text-xl font-semibold capitalize">
          {label} section
        </h3>
        <motion.button
          onClick={() => {
            playClick();// 🔊 Sound on close
            onClose(); // ❌ Close the card
          }}
          whileTap={{ rotate: 90, scale: 0.9 }}
          className="hover:text-red-400 transition p-1"
        >
            {/* ❌ Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

       {/* 📜 Content section with component and animation */}
      <div className="overflow-y-auto max-h-[calc(100vh-120px)] px-4 pb-6 pt-4">
      {DynamicComponent ? <DynamicComponent /> : <p>Section not found.
</p>}

       
        </div>
      


      
    </motion.div>
  );
}
