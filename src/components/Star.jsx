export default function Star() {
  return (
    // Full screen height + Flex centering
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-16">
      
      {/* Star icon with bounce animation */}
      <img
        src="../assets/icons/star.png"
        alt="Star"
        className="w-32 h-32 mb-16 animate-bounce"
      />

      {/* Introductory text */}
      <p className="mt-4 text-gray-700 leading-relaxed max-w-md">
        Hey there! 👋 I’m <strong>Shweta</strong>, a passionate{" "}
        <strong>Frontend Developer</strong> skilled in
        <span className="text-purple-500 font-semibold">
          {" "}React, HTML, CSS, and JavaScript
        </span>.
      </p>
    </div>
  );
}
