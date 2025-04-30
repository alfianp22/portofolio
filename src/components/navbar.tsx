import Header from "./header";

export default function Navbar() {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero-section"
          className="text-[#42f5f5] text-2xl font-bold italic tracking-wide hover:text-cyan-300 transition-colors duration-300"
        >
          <Header></Header>
        </a>
        <div className="flex space-x-6">
          {[
            { label: "About", link: "about" },
            { label: "Skills", link: "skill" },
            { label: "Experience", link: "experience" },
            { label: "Portfolio", link: "portfolio" },
            { label: "Testimonial", link: "testimonial" },
            { label: "Contact", link: "contactme" },
          ].map((item, index) => (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.link);
              }}
              className="text-white font-bold hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
