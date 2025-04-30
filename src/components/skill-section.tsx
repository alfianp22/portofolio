"use client";

export default function SkillSection() {
  const skills = [
    {
      name: "React.js",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "Next.js",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "Tailwind CSS",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "TypeScript",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "JavaScript",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "HTML",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
    {
      name: "CSS",
      color: "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white",
    },
  ];

  return (
    <section
      id="skill"
      className="py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white text-center rounded-3xl shadow-2xl max-w-5xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold mb-8 relative inline-block">
        <span className="relative z-10">My Skills</span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
      </h2>

      <div className="flex justify-center flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform duration-300 ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
