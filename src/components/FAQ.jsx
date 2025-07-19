export default function FAQ() {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-500">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Here are a few quick answers to things people often ask:
        </p>
  
        <div className="mt-6 text-left max-w-md mx-auto space-y-5">
          <div>
            <h3 className="font-semibold text-green-600">💻 What technologies do you use?</h3>
            <p className="text-gray-700">
              I mostly work with React, HTML, CSS, JavaScript, and love using GSAP, Framer Motion, and Three.js for animation and 3D effects.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold text-green-600">🎨 Do you design as well?</h3>
            <p className="text-gray-700">
              Yes! I enjoy crafting clean UI/UX designs and often illustrate icons and elements myself.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold text-green-600">🚀 Are you available for freelance work?</h3>
            <p className="text-gray-700">
              Yes — feel free to reach out via email or Instagram DMs!
            </p>
          </div>
        </div>
      </div>
    );
  }
  