"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Donald Trump",
      role: "CEO, TechCorp",
      text: "Working with Alfian has been an amazing experience! He is highly skilled and helped us build a fast and responsive website.",
      image: "/donaltrump.png",
    },
    {
      name: "King Salman",
      role: "Product Manager, Innovantex",
      text: "ألفيان مطور رائع! عمله دائمًا سريع ويجلب أفكارًا جديدة لكل مشروع. أنصح بالتعامل مع Alfian بشدة!",
      image: "/kingsalman.png",
    },
    {
      name: "Xi Jinping",
      role: "Designer, CreativeHub",
      text: "我非常推荐 Alfian！他的技术非常出色，总能解决我交给他的技术难题。",
      image: "/xijinping.png",
    },
  ];

  return (
    <section
      id="testimonial"
      className="py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white text-center rounded-3xl shadow-2xl max-w-6xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold mb-8 relative inline-block">
        <span className="relative z-10">Testimonial</span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-300 rounded-full z-0 blur-sm opacity-80"></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:scale-[1.03] hover:shadow-xl hover:border-yellow-300 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-28 h-28 rounded-full border-4 border-red-900 shadow-xl transition duration-300 hover:scale-105 object-center object-cover"
                style={{ imageRendering: "auto" }}
              />
            </div>
            <p className="text-lg font-medium text-white/90 mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="font-bold text-green-300">{testimonial.name}</p>
            <p className="text-sm font-bold text-white">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
