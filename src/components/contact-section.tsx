"use client";

export default function ContactSection() {
  return (
    <section
      id="contactme"
      className="py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl shadow-xl max-w-4xl mx-auto my-20 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-6 relative inline-block">
        <span className="relative z-10">Contact Me</span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
      </h2>

      <p className="text-lg mb-8 text-white/90 font-medium">
        Feel free to reach out if you want to collaborate or just have a chat! I
        am always open for exciting projects and new opportunities.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:alfianp811@gmail.com"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:from-indigo-500 hover:to-cyan-500 transition duration-300"
        >
          📧 Email Me
        </a>
        <a
          href="https://wa.me/6285117025878"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:from-indigo-500 hover:to-cyan-500 transition duration-300"
        >
          💬 WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/alfian-putra-0636a3361/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:from-indigo-500 hover:to-cyan-500 transition duration-300"
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}
