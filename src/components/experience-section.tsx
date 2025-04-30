"use client";
import Image from "next/image";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "TechNova Solutions",
      period: "2022 - Present",
      description:
        "Developed and maintained scalable web applications using React, Next.js, and Node.js. Focused on clean code and performance optimization.",
      image: "/fullstack.png",
    },
    {
      role: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2020 - 2022",
      description:
        "Built interactive and responsive user interfaces with Tailwind CSS and React. Collaborated closely with UI/UX designers to bring modern web designs to life.",
      image: "/frontend.png",
    },
    {
      role: "Junior Web Developer",
      company: "Startup Labs",
      period: "2019 - 2020",
      description:
        "Assisted in building MVP web products and fixing bugs. Gained strong experience in HTML, CSS, JavaScript, and teamwork in an agile environment.",
      image: "/juniorweb.png",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl shadow-xl max-w-5xl mx-auto my-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-6 relative inline-block">
          <span className="relative z-10">Experience</span>
          <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:scale-[1.02] hover:border-yellow-300 transition-all duration-300"
          >
            <div className="w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-white/20 flex items-center justify-center p-2">
              <Image
                src={exp.image}
                alt={`${exp.role} illustration`}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-300 mb-1">
                {exp.role}
              </h3>
              <p className="text-lg font-medium mb-1">{exp.company}</p>
              <p className="italic text-sm text-white/80 mb-3">{exp.period}</p>
              <p className="text-white/90">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
