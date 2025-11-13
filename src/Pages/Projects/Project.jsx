import React from "react";

const Project = () => {
  

  const projectsImages = [
    {
      title: "Bankoor",
      role: "UI/UX Design",
      description: "A fintech app helping users manage money with clarity and confidence.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1b6dbcd0c9?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Fayvo",
      role: "UX Strategy",
      description: "A recommendation app built to connect people through shared interests.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Pingo",
      role: "Product Design",
      description: "A social platform to connect and share experiences with friends.",
      image: "https://images.unsplash.com/photo-1580910051073-52e5aa7a0b1f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Arzepak",
      role: "Brand Identity",
      description: "Rebranding a logistics platform with a modern and trustworthy look.",
      image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e19?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Notebook",
      role: "Interface Design",
      description: "Creating a consistent visual system across web and mobile experiences.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Fayvo Dashboard",
      role: "UI System",
      description: "Building a robust admin dashboard for analytics and team collaboration.",
      image: "https://images.unsplash.com/photo-1632727040604-8cb1f9b6b440?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const steps = [
    { step: "1", title: "Discover", desc: "Understand business goals and user needs." },
    { step: "2", title: "Define", desc: "Establish clear objectives and success metrics." },
    { step: "3", title: "Design", desc: "Craft intuitive, thoughtful user experiences." },
    { step: "4", title: "Deliver", desc: "Launch, test, and iterate for continuous growth." },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FinTech Inc.",
      text: "Working with this team transformed our product. Their attention to detail is unmatched!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Michael Lee",
      role: "Product Manager, TechNova",
      text: "Creative solutions and smooth execution. Highly recommend them for digital product design.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Emily Davis",
      role: "Founder, Startup Hub",
      text: "A pleasure to work with! Our app now delivers exactly the experience we envisioned.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <main className="font-sans text-gray-900">
         

      {/* ===== Hero Section ===== */}
      <section className="text-center py-28 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fadeIn">
          Crafting seamless human-centered experiences since 2016.
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fadeIn delay-200">
          Partnering with startups and global teams to build digital products that delight users and drive results.
        </p>
      </section>

      {/* ===== Projects Section ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 space-y-28">
        {projectsImages.map((p, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center transition-transform duration-500 hover:scale-105 animate-slideUp`}
          >
            {/* Image */}
            <div
              className={`relative ${i % 2 === 0 ? "md:order-1" : "md:order-2"} flex justify-center`}
            >
              <div className="bg-white p-3 rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div
              className={`${
                i % 2 === 0 ? "md:order-2 text-left" : "md:order-1 text-left md:text-right"
              }`}
            >
              <h3 className="text-3xl font-bold mb-2">{p.title}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {p.role}
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {p.description}
              </p>
              <button className="text-indigo-600 font-semibold hover:underline">
                View Case Study →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== How It Works Section ===== */}
      <section className="bg-gray-100 py-28 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 animate-fadeIn">Here’s how it works</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg animate-slideUp"
              >
                <h3 className="text-4xl font-extrabold text-indigo-600 mb-3">{s.step}</h3>
                <h4 className="text-lg font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed animate-fadeIn delay-200">
            Every project starts with a conversation. Let’s build something meaningful together.
          </p>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 animate-fadeIn">Testimonials</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl animate-slideUp"
              >
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
