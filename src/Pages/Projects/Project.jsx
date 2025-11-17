import React from "react";
import { useNavigate } from "react-router-dom";
import { projectData, ProjectImages } from "../../data/projectdata";
import { FaEye, FaArrowRight } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const Project = () => {
  const navigate = useNavigate();

  return (
    <main className="text-gray-900 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* ===== Hero Section ===== */}
      <section className="relative text-center py-16 md:py-24 bg-gradient-to-br from-violet-100 via-white to-yellow-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-200 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-float-delayed"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-down">
            Explore My <span className="text-yellow-500">Projects</span>
            <br />
            <span className="text-violet-800">Real Solutions, Real Impact</span>
          </h1>

          <p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            A curated collection of projects showcasing my expertise in web and
            mobile applications, UX/UI design, and full-stack development using
            the MERN stack.
          </p>

          <p
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Each project demonstrates problem-solving skills, innovative design
            thinking, and practical implementation of modern web technologies to
            deliver exceptional user experiences.
          </p>

          <div
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <FaEye className="text-yellow-500 text-xl" />
            <p className="text-gray-700 text-sm font-medium">
              Click{" "}
              <span className="font-bold text-violet-800">
                "View Case Study"
              </span>{" "}
              to explore details
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div
            className="flex justify-center gap-6 mt-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="group flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <SiReact className="text-3xl text-sky-400 animate-spin-slow" />
              </div>
              <span className="text-xs text-gray-600 font-medium">React</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <SiNodedotjs className="text-3xl text-green-500" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Node.js</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <SiMongodb className="text-3xl text-green-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">MongoDB</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <SiExpress className="text-3xl text-gray-700" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Express</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <h3 className="text-4xl font-bold text-violet-800 mb-2">15+</h3>
              <p className="text-gray-600 text-sm">Completed Projects</p>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">6</h3>
              <p className="text-gray-600 text-sm">Industries Served</p>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-4xl font-bold text-green-500 mb-2">100%</h3>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-4xl font-bold text-cyan-500 mb-2">3+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 space-y-32">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-yellow-500">Case Studies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Dive deep into each project to understand the challenges, solutions,
            and impact created through thoughtful design and robust development.
          </p>
        </div>

        {projectData.map((p, i) => (
          <div
            key={p.id}
            className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-transform duration-500 hover:scale-[1.02] animate-fade-in-up`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Image */}
            <div
              className={`relative ${
                i % 2 === 0 ? "md:order-1" : "md:order-2"
              } flex justify-center group`}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-yellow-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Image Container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform group-hover:scale-105 transition-transform duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={ProjectImages[i].image}
                      alt={p.title}
                      className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onClick={() =>
                        navigate(`/details/${p.id}`, {
                          state: { clickedImage: ProjectImages[i].image },
                        })
                      }
                    />
                    {/* Overlay on Hover */}
                    
                  </div>

                  {/* Project Number Badge */}
                  <div className="absolute -top-4 -left-4 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-125 transition-transform duration-300">
                    {i + 1}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`${
                i % 2 === 0 ? "md:order-2 text-left" : "md:order-1 text-left"
              } space-y-6`}
            >
              <div>
                <span className="inline-block bg-violet-100 text-violet-800 px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  {p.year}
                </span>
                <h3 className="text-3xl md:text-4xl text-violet-800 font-bold mb-3 hover:text-yellow-500 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 font-semibold uppercase mb-4 tracking-wide">
                  {p.category}
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {p.overview}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {ProjectImages[i].tech?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-yellow-500 hover:text-black transition-colors duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  navigate(`/details/${p.id}`, {
                    state: { clickedImage: ProjectImages[i].image },
                  })
                }
                className="group inline-flex gap-3 bg-black text-yellow-500 justify-center items-center px-8 py-4 border-2 border-black rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Case Study
                <FaEye className="text-xl animate-pulse" />
              </button>

              {/* Key Features */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-semibold uppercase mb-3 tracking-wide">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {p.keyFeatures?.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Process Overview ===== */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-down">
            How I Build <span className="text-yellow-500">Great Products</span>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto animate-fade-in-up">
            A systematic, client-focused approach that ensures every project
            exceeds expectations and delivers measurable results.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals, users, and market to build the right foundation.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Creating intuitive interfaces and seamless user experiences through iteration.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building robust, scalable applications with clean code and best practices.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Launching your product with ongoing support and performance optimization.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-yellow-500 mb-4 group-hover:scale-125 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-gradient-to-br from-violet-100 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Have a Project in <span className="text-yellow-500">Mind?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into reality. Whether it's a
            new product, redesign, or feature enhancement, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
