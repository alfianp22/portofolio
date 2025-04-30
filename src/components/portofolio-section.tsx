import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio site designed to showcase my work, skills, and experience. Built with Next.js and Tailwind CSS, it features smooth animations, responsive design, and a clean UI.",
      image: "/personalweb.png",
      border: "border-green-400",
    },
    {
      title: "Company Profile Website – Innovantex",
      description:
        "Developed a professional company profile website for a tech startup, featuring dynamic content management, service pages, and custom design elements. Built with Next.js and integrated with Contentful CMS.",
      image: "/companyprofil.png",
      border: "border-green-300",
    },
    {
      title: "Blog Platform – TechTalks",
      description:
        "Created a minimalist blog platform with markdown support, tagging system, and search functionality. Focused on performance and SEO, built using Next.js and styled with Chakra UI.",
      image: "/blogplatform.png",
      border: "border-green-400",
    },
    {
      title: "Event Landing Page – Startup Weekend 2024",
      description:
        "Designed and developed a landing page for a startup event with a countdown timer, speaker lineup, and registration integration. Optimized for mobile and fast load times.",
      image: "/eventlandingpage.png",
      border: "border-green-400",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white text-center rounded-3xl shadow-xl max-w-6xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold mb-12 relative inline-block">
        <span className="relative z-10">Portofolio</span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex md:flex-row flex-col items-start gap-4 p-6 rounded-2xl shadow-md border-2 ${project.border} bg-white/10 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105`}
          >
            <div className="w-28 h-28 relative flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-green-300">{project.title}</h3>
              <p className="text-white/100">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
