export default function HeroSection() {
  // Handle scroll to target section
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element dengan id ${targetId} tidak ditemukan.`);
    }
  };

  return (
    <section
      id="hero-section"
      className="py-20 px-6 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-sm">
            👋 Halo, I Am <span className="text-cyan-300">Alfian</span>
          </h1>
          <p className="text-2xl mb-4 font-bold text-white">
            Full-Stack Web Developer
          </p>
          <p className="text-md text-white/90 mb-6 max-w-md font-medium">
            Membangun solusi web yang ringan, cepat, dan scalable untuk
            kebutuhan bisnismu.
          </p>
          <p className="italic text-sm text-cyan-200 mb-8">
            📍 Lokasi: Kota Hujan, Jawa Barat
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("portfolio");
              }}
              className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-full shadow-md hover:bg-cyan-500 transition duration-300"
            >
              🚀 Lihat Portofolio
            </a>
            <a
              href="#contactme"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contactme");
              }}
              className="px-6 py-3 bg-sky-400 text-white font-semibold rounded-full shadow-md hover:bg-sky-500 transition duration-300"
            >
              📩 Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end md:mr-10">
          <div className="relative group">
            <img
              src="/sayatampan.jpeg"
              alt="calon pemenang baloon door"
              className="w-72 h-72 object-cover rounded-2xl border-4 border-white shadow-xl transition duration-300 group-hover:scale-105"
            />
            <span className="absolute -inset-1 rounded-2xl border-2 border-cyan-300 animate-pulse opacity-30 group-hover:opacity-60"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
