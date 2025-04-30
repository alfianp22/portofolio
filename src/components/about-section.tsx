export default function AboutSection() {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="p-12 text-center bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl max-w-4xl mx-auto my-20 transform transition-all hover:scale-105"
    >
      <h2 className="text-4xl font-extrabold mb-4 relative inline-block">
        <span className="relative z-10">About Me</span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
      </h2>

      <p className="text-lg leading-relaxed text-white/90 font-medium max-w-2xl mx-auto mb-8">
        I am{" "}
        <span className="text-cyan-200 font-semibold">
          Full-Stack Web Developer
        </span>{" "}
        focused on building lightweight, fast, and scalable web applications to
        support your business needs.
      </p>

      <div className="mt-8">
        <a
          href="#contactme"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contactme");
          }}
          className="px-8 py-4 bg-cyan-400 text-white font-semibold rounded-full shadow-xl transition duration-300 hover:bg-cyan-500 hover:scale-105"
        >
          📩 Contact Me
        </a>
      </div>
    </section>
  );
}
