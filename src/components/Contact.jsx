export default function Contact() {
  return (
    <div className="text-center p-6">
      {/* Profile Image */}
      <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg mb-4">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-purple-500">Contact Me</h2>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        Got a question, collaboration idea, or just want to say hi? I'd love to hear from you!
      </p>
      <div className="w-full max-w-md mx-auto">
      {/* Contact Info */}
      <div className="mt-6 space-y-4 text-left inline-block">
        <p>
          📩 <span className="font-semibold">Email:</span>{' '}
          <a
            href="mailto:shwetagurav4499@gmail.com"
            className="text-purple-600 hover:underline"
          >
            shwetagurav4499@gmail.com
          </a>
        </p>

        <p>
          📱 <span className="font-semibold">Instagram:</span>{' '}
          <a
            href="https://instagram.com/ampx_1007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            @Shweta Gurav
          </a>
        </p>

        <p>
          💼 <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/shweta-gurav-a81018229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Shweta Gurav
          </a>
        </p>

        <p>
          📺 <span className="font-semibold">YouTube:</span>{' '}
          <a
            href="https://youtube.com/@ampx_1007?si=p0p8I37cgltsylUv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Shweta Gurav
          </a>
        </p>
      </div>
      </div>
      {/* Footer Note */}
      <p className="mt-6 text-sm text-gray-500">I'll try to respond as soon as I can! 🌼</p>
    </div>
  );
}
