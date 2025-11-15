// src/pages/AboutUs.jsx
import React from "react";
import resumePDF from "../../assets/Abdullah_CV_NODE_JS-1.pdf";
import { LiaFileDownloadSolid } from "react-icons/lia";
import Images from "../../Helper/ImgConstant";

export default function AboutUs() {
  const projects = [
  {
    id: 1,
    title: "LandPricer",
    category: "REAL ESTATE | PROPTECH | RENTAL & LEASING", //  ✅ Correct
    role: "UX STRATEGY | DESIGN SYSTEM | INTERACTION DESIGN",
    year: "2024",
    image: Images.LANDPRICER_HOME_IMG,
  },
  {
    id: 2,
    title: "Healink",
    category: "HEALTHCARE | HEALTH TECH | MOBILE APP", // Corrected from HOME SERVICES
    role: "SERVICE DESIGN & PRODUCT STRATEGY | MOBILE APP",
    year: "2021",
    image: Images.HEALINK_ADMIN_DASHBOARD_IMG,
  },
  {
    id: 3,
    title: "ParryScript",
    category: "SOCIAL MEDIA | LIFESTYLE & ENTERTAINMENT", // ✅ Seems correct
    role: "USER ENGAGEMENT & RETENTION | SOCIAL UX",
    year: "2022",
    image: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
  },
  {
    id: 4,
    title: "Valor Sport",
    category: "EDTECH | SPORTS TECH | AI", // Slightly more precise than generic
    role: "UX AUDIT/DESIGN | AI-POWERED CONTENT SUMMARIZATION",
    year: "2025",
    image: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
  },
  {
    id: 5,
    title: "eFile Ny1033",
    category: "E-GOVERNMENT | DOCUMENT MANAGEMENT | CONSUMER SERVICES", // Corrected
    role: "UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH",
    year: "2023",
    image: Images.eFILE_HOME1_IMG,
  },
  {
    id: 6,
    title: "HR Chromatics",
    category: "E-COMMERCE | RETAIL | CONSUMER GOODS", // ✅ Seems correct
    role: "UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH",
    year: "2023",
    image: Images.HRCHROMATICS_CONTACTUS_IMG,
  },
];


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 py-16 font-sans">
      {/* Header */}
      <header className="w-full flex flex-wrap justify-center gap-2 items-center py-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-500 uppercase">
          MUHAMMAD
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
          ABDULLAH
        </h1>
      </header>

      {/* Tagline Section */}
      <section className="text-center p-4 sm:px-8  max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-700 mb-2">
          <span className="font-semibold text-black">Specialize</span> in crafting
        </h2>
        <h3 className="text-2xl sm:text-3xl font-light text-gray-700 mb-2">
          unique, people-focused <span className="font-semibold text-black">visual experiences</span>
        </h3>
        <h4 className="text-2xl sm:text-3xl font-light text-gray-700 mb-8">
          strategies that bring ideas to life
        </h4>

        <div className="space-y-5 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
          <p>
            With over 8 years of experience, I lead product design for SaaS,
            Real Estate, Enterprise-level applications, health-tech, AI tools,
            and more. I transform complex challenges into intuitive,
            user-centered solutions that drive business growth.
          </p>
          <p>
            My approach integrates user research, strategic design, and empathy
            to deliver meaningful experiences that connect people with products.
          </p>
        </div>

        {/* Resume Button */}
        <div className="mt-10">
       <a
                     href={resumePDF}
                     download="Muhammad_Abdullah_Resume.pdf"
                     className="inline-flex gap-2  justify-center items-center px-6 py-3 border border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
                   >
                     Download My Resume
                     <LiaFileDownloadSolid size={30} className="text-yellow-500" />
                   </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-gray-300 py-16 px-4">
        <div className="bg-black text-gray-400 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-light leading-snug">
              <span className="text-white font-semibold">Specialize</span> in crafting{" "}
              <span className="block text-gray-400">
                unique, people-focused{" "}
                <span className="text-white font-semibold">Visual Looks</span>
              </span>
              strategies that bring ideas to life
            </h1>
            <p className="text-xs mt-3 text-gray-600 italic">[About]</p>
          </div>

          {/* Right Section */}
          <div className="text-sm sm:text-base text-gray-400 leading-relaxed">
            <p className="mb-4">
              I specialize in developing unique, people-centered marketing
              strategies driven by a deep understanding of human behavior.
            </p>
            <p>
              By combining creativity with effective communication, I transform
              ideas into impactful messages that inspire action and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
     <section className="w-full max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
  {/* Header */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-6 md:gap-12">
    <div>
      <p className="text-sm text-gray-400 font-medium tracking-tight mb-2">
        (Projects)
      </p>
    </div>
    <div className="md:max-w-3xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug text-gray-900">
        Digital partner for brands, startups, and agencies. Working across
        e-commerce, SaaS, fintech, fashion, and B2B.
      </h2>
    </div>
  </div>

  {/* Project Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {projects.map((project) => (
      <div
        key={project.id}
        className="group flex flex-col transition-transform duration-300 hover:-translate-y-2"
      >
        <p className="text-gray-400 font-medium mb-1">{project.id}.</p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">({project.category})</p>
        <div className="relative overflow-hidden rounded-xl w-full aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
