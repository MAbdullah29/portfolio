import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { projectData } from "../../data/projectdata";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projectData.find((p) => p.id === parseInt(id));

  // Hero image passed from previous page
  const clickedImage = location.state?.clickedImage || null;

  // Modal only opens when user clicks on an image inside the page
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 md:px-16 py-4  bg-gray-50">
      {/* Hero Image */}
      {clickedImage && (
        <div className="mb-14  flex justify-center animate-fadeIn">
          <img
            src={clickedImage}
            alt="Selected Case"
            className="w-full  md:h-96 object-contain rounded-3xl  transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Project Title */}
      <div className="text-center mb-14 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">
          {project.title}
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{project.overview}</p>
      </div>

      {/* Images with Text */}
      <div className="space-y-20">
        {project.images.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } animate-fadeIn`}
          >
            {/* Image */}
            <div
              className="flex-1 overflow-hidden object-cover rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item.src)} // Modal opens only on click
            >
              <img
                src={item.src}
                alt={item.heading}
                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text Box */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.heading}</h3>
              <p className="text-gray-700 text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 h-auto sm- z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full object-contain max-h-[80vh] transition-transform duration-300 hover:scale-105"
            />
            <button
              className="absolute top-3 right-3 bg-black text-yellow-500 font-semibold rounded-xl px-2 py-1 hover:bg-yellow-500 hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="text-center mt-20">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-yellow-500 text-white text-lg rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          ← Back to Projects
        </button>
      </div>
    </section>
  );
};

export default Details;
