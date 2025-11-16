import React from "react";
import { useNavigate } from "react-router-dom";
import { projectData, ProjectImages } from "../../data/projectdata"; // Your real projects
import { FaEye } from "react-icons/fa";

const Project = () => {
  const navigate = useNavigate();





  return (
    <main className=" text-gray-900 bg-gradient-to-b from-gray-200 to-gray-300">
      {/* ===== Hero Section ===== */}
    <section className="text-center py-8 bg-gray-50">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fadeIn">
    Explore  <span className="text-yellow-500">My Projects:</span> Real Solutions,<span className="text-violet-800">Real Impact</span> 
  </h1>
  
  <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6 animate-fadeIn delay-200">
    A curated collection of projects showcasing my work in web and mobile applications, UX/UI design, and full-stack development.
  </p>

  <p className="text-gray-700 text-md max-w-2xl mx-auto mb-4 animate-fadeIn delay-300">
    Each project demonstrates problem-solving, innovative design, and practical implementation.
  </p>

  <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-6 animate-fadeIn delay-400">
    To see the full details of any project, click on the <span className="font-semibold text-yellow-500">View Case Study</span> button below.
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

            <div
              className={`${
                i % 2 === 0 ? "md:order-2 text-left bg-white p-8 rounded-2xl shadow-lg" : "md:order-1 text-left bg-white p-8 rounded-2xl shadow-lg"
              }`}
            >
              <h3 className="text-3xl text-violet-800 font-bold mb-2">{p.title}</h3>
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
                className="inline-flex gap-2 bg-black text-yellow-500 justify-center items-center px-6 py-3 border  rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 text-center"
              >
                View Case Study 
                <span>
                  <FaEye className="animate-shake-icon"  size={24} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== How It Works Section ===== */}
     
    </main>
  );
};

export default Project;
