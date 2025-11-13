import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-50 text-center">
      <img
        src={`https://via.placeholder.com/600x400.png?text=Case+${id}+Details`}
        alt={`Case ${id}`}
        className="rounded-2xl shadow-lg mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
        Case {id} Details
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10 text-base md:text-lg">
        This page shows the full case study details. Replace this placeholder
        text with your project overview, research insights, and process images.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
      >
        ← Back to Cases
      </button>
    </section>
  );
};

export default Details;
