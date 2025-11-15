import React from "react";
import { useNavigate } from "react-router-dom";
import { projectData, ProjectImages } from "../../data/projectdata"; // Your real projects

const Project = () => {
  const navigate = useNavigate();

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
    <main className=" text-gray-900 bg-gradient-to-b from-gray-200 to-gray-300">
      {/* ===== Hero Section ===== */}
      <section className="text-center  bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fadeIn">
          Crafting seamless human-centered experiences since <span className="text-yellow-500">2022.</span> 
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fadeIn delay-200">
          Partnering with startups and global teams to build digital products that delight users and drive results.
        </p>
      </section>

      {/* ===== Projects Section ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 space-y-28">
        {projectData.map((p, i) => (
          <div
            key={p.id}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center transition-transform duration-300 hover:scale-105 animate-slideUp`}
          >
            {/* Image */}
            <div
              className={`relative ${i % 2 === 0 ? "md:order-1" : "md:order-2"} flex justify-center`}
            >
              <div className="bg-white p-3 rounded-3xl shadow-lg overflow-hidden cursor-pointer">
                <img
                  src={ProjectImages[i].image} 
                  alt={p.title}
                  className="rounded-2xl w-full h-auto object-cover"
                  onClick={() =>
                    navigate(`/details/${p.id}`, { state: { clickedImage: ProjectImages[i].image } })
                  }
                />
              </div>
            </div>

            {/* Info */}
            <div
              className={`${
                i % 2 === 0 ? "md:order-2 text-left bg-white p-8 rounded-2xl shadow-lg" : "md:order-1 text-left bg-white p-8 rounded-2xl shadow-lg"
              }`}
            >
              <h3 className="text-3xl text-black font-bold mb-2">{p.title}</h3>
              <p className="text-xs    font-semibold mb-4">
                {p.overview}
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {p.category}
              </p>
              <button
                onClick={() =>
                  navigate(`/details/${p.id}`, { state: { clickedImage: ProjectImages[i].image } })
                }
                className="text-yellow-500 bg-black font-semibold rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
              >
                View Case Study 
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
