// src/components/WaveBackground.jsx
import Wave from 'react-wavify';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 w-full">
        <Wave
          fill="#f9a8d4" // Tailwind pink-300
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.25,
            points: 4,
          }}
          className="opacity-70"
        />
      </div>
    </div>
  );
}
