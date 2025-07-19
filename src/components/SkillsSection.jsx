import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, Stars } from "@react-three/drei";

// Skills array
const skills = [
  "HTML", "CSS", "JavaScript", "React", "GSAP", "Tailwind",
  "Three.js", "Git", "Figma", "Framer Motion"
];

// Random color palette
const colors = ["#ff6ec7", "#ffa07a", "#00d4ff", "#ffcc00", "#c084fc"];

// Get cube position in a circular layout
function getPosition(index) {
  const angle = (index / skills.length) * Math.PI * 2;
  const radius = 3;
  const x = radius * Math.cos(angle);
  const y = (Math.random() - 0.5) * 2;
  const z = radius * Math.sin(angle);
  return [x, y, z];
}

// Cube with floating animation
function FloatingCube({ skill, index }) {
  const position = getPosition(index);
  const color = colors[index % colors.length];

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
        <Html distanceFactor={10} center>
          <div className="text-white text-[10px] sm:text-xs font-semibold bg-black/50 px-1 py-0.5 rounded">
            {skill}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
// ✅ Main component jo full 3D scene show karta hai
export default function SkillsSection() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-yellow-300 text-base sm:text-xl font-bold z-10">
        My Skills 🧊
      </h2>

      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <Stars radius={30} depth={40} count={1500} factor={4} fade />
        {skills.map((skill, index) => (
          <FloatingCube key={skill} skill={skill} index={index} />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
