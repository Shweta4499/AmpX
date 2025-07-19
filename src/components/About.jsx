import React from 'react';
import profilePic from '/assets/profile.png'; // ✅ Profile pic ko yahan se import kar rahe hai
export default function About() {
  return (
    <div className="min-h-screen px-6 py-5 bg-white text-gray-800 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
          <img
            src={profilePic}
            alt="Shweta"
            className="w-full h-full object-cover"
          />
        </div>

 {/* 📝 Scrollable Details Section - bio content scroll hone layak banaya hai */}        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl font-bold text-pink-500">Shweta Gurav</h2>
          <p className="mt-3 text-gray-600">
            Frontend Developer passionate about creating immersive, interactive websites.
          </p>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[50vh] px-2">
        <p className="mb-4 leading-relaxed text-gray-700">
          Hey there! 👋 I’m <strong>Shweta</strong>, a passionate{" "}
          <strong>Frontend Developer</strong> skilled in
          <span className="text-purple-500 font-semibold">
            {" "}React, HTML, CSS, and JavaScript
          </span>.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          I love building{" "}
          <span className="text-blue-500 font-semibold">
            3D, animated websites
          </span>{" "}
          using libraries like Three.js and GSAP to create delightful digital experiences.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          My design approach blends clean UI with fun microinteractions and smooth animations,
          aiming to craft web experiences that are both functional and inspiring.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Beyond coding, I enjoy exploring creative tech, learning new frameworks,
          and experimenting with frontend performance and interactivity techniques.
        </p>
      </div>
    </div>
  );
}
