import React from "react";
import { useNavigate } from "react-router-dom";
import resumePDF from "../../assets/Abdullah_CV_NODE_JS-1.pdf";
import Images from "../../Helper/ImgConstant";
import { SiSololearn, SiReact, SiNodedotjs, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaAward, FaCode, FaUsers, FaRocket, FaSchool, FaEye } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

export default function AboutUs() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "LandPricer",
      category: "REAL ESTATE | PROPTECH | LAND ADVISORY",
      role: "UX STRATEGY | DESIGN SYSTEM | INTERACTION DESIGN",
      year: "2024",
      image: Images.LANDPRICER_HOME_IMG,
    },
    {
      id: 2,
      title: "Healink",
      category: "HEALTHCARE | DENTAL HOSPITAL | HEALTH TECH",
      role: "MANAGEMENT APP FOR ADMIN, DOCTOR, STAFF & PATIENT",
      year: "2024",
      image: Images.HEALINK_ADMIN_DASHBOARD_IMG,
    },
    {
      id: 3,
      title: "ParryScript",
      category: "PHARMACEUTICAL | MEDICINE E-COMMERCE | HEALTHCARE",
      role: "USER ENGAGEMENT & RETENTION | E-COMMERCE UX",
      year: "2023",
      image: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
    },
    {
      id: 4,
      title: "Valor Sport",
      category: "EDTECH | SPORTS TECH | AI",
      role: "UX AUDIT/DESIGN | AI-POWERED CONTENT SUMMARIZATION",
      year: "2025",
      image: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
    },
    {
      id: 5,
      title: "eFile Ny1033",
      category: "E-GOVERNMENT | DOCUMENT MANAGEMENT | TAX PAYMENT",
      role: "UX STRATEGY | DESIGN SYSTEM | MOBILE-FIRST TAX PAYMENT PLATFORM",
      year: "2025",
      image: Images.eFILE_HOME1_IMG,
    },
    {
      id: 6,
      title: "HR Chromatics",
      category: "E-COMMERCE | RETAIL | CONSUMER GOODS",
      role: "UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH",
      year: "2025",
      image: Images.HRCHROMATICS_CONTACTUS_IMG,
    },
  ];

  const skills = [
    { name: "Full-Stack Development", icon: FaCode, percent: 95 },
    { name: "UI/UX Design", icon: FaAward, percent: 90 },
    { name: "Team Collaboration", icon: FaUsers, percent: 92 },
    { name: "Problem Solving", icon: FaRocket, percent: 98 },
  ];

  const timeline = [
    {
      year: "Apr 2022 - Mar 2025",
      title: "Argon-Tech, Lahore",
      desc: "Began professional Mern Stack Dev and building real-world applications for clients",
    },
    {
      year: "Mar 2025 - Sep 2025)",
      title: "AdvanturaLabs, Lahore ",
      desc: "Mastered the MERN stack and delivered multiple successful projects",
    },
    {
      year: "Sep 2025 - Current",
      title: "Eastlancers Islamabaad",
      desc: "Built complex applications with AI integration and real-time features",
    },
  
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 text-gray-900 py-8 md:py-12 font-sans">
      {/* Header */}
      <header className="w-full flex flex-wrap justify-center gap-3 items-center py-8 md:py-12 text-center animate-fade-in-down">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-yellow-500 uppercase hover:scale-105 transition-transform duration-300">
          MUHAMMAD
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight uppercase hover:scale-105 transition-transform duration-300">
          ABDULLAH
        </h1>
      </header>

      {/* Subtitle */}
      <div className="text-center px-4 mb-8 animate-fade-in-up">
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          Full-Stack Developer | UI/UX Designer | Problem Solver
        </p>
      </div>

      {/* Stats Section */}
  
    <section className="w-full max-w-screen-2xl mx-auto px-4 mb-16">

      {/* Styled Heading */}
      

      {/* Card */}
      <div className="flex justify-center">
        <div className="
          relative overflow-hidden bg-white/70 backdrop-blur-xl 
          border border-white/40 rounded-2xl p-8 shadow-[0px_10px_35px_rgba(80,0,150,0.15)]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_10px_45px_rgba(150,0,200,0.25)]
          group max-w-xl cursor-default
        ">
          
          {/* Shine hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-700"></div>
<div className="flex justify-center gap-6 items-center">
  <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-yellow-500 mx-auto mt-2 rounded-full"></div>
      </div>
       <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-800 to-yellow-500 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
            <RiGraduationCapFill className="text-white text-3xl" />
          </div>
</div>
          {/* Icon */}
         

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-violet-800 ">
            Bachelor of Science in Software Engineering
          </h3>

          <p className="text-black font-medium">
            COMSATS University Islamabad, Taxila Campus
          </p>

          Description
          <p className="mt-5 text-gray-700 text-sm">
            Passionate about full-stack development, modern system design, and cloud-native ecosystems.
            Throughout my studies, I have worked on advanced MERN-based projects, REST APIs, secure backend 
            architectures, and performance-driven scalable applications using modern software engineering 
            principles and best practices.
          </p> 

          <div className="mt-5">
            <h4 className="font-semibold text-gray-900 mb-2">Key Areas of Study:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>MERN Stack + API Development</li>
              <li>Cloud, Docker & Deployment</li>
              <li>Design Patterns & System Design</li>
              <li>Data Structures, Algorithms & OOP</li>
              <li>Database Modeling & Security</li>
            </ul>
          </div>


        </div>
      </div>
    </section>


      {/* Main Content Section */}
      <section className="text-center p-4 sm:px-8 max-w-4xl animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-3">
          <span className="font-semibold text-yellow-500">Passionate</span> about
          crafting
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-3">
          unique, people-focused{" "}
          <span className="font-semibold text-violet-800">digital experiences</span>
        </h3>
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-10">
          that transform ideas into reality
        </h4>

        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            With over 3 years of hands-on experience, I specialize in building
            modern web applications that solve real-world problems. My expertise
            spans across full-stack development using the MERN stack, UI/UX
            design, and cloud technologies.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I've had the privilege of working on diverse projects spanning
            healthcare, real estate, fintech, e-commerce, and government
            services. Each project has taught me valuable lessons about user
            needs, technical challenges, and the importance of clean,
            maintainable code.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            My approach integrates thorough user research, strategic design
            thinking, and robust development practices to deliver solutions that
            not only meet business objectives but also provide exceptional user
            experiences that drive engagement and growth.
          </p>
        </div>

        {/* Resume Download Button */}
        <div
          className="mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={resumePDF}
            download="Muhammad_Abdullah_Resume.pdf"
            className="inline-flex gap-3 bg-black text-yellow-500 justify-center items-center px-8 py-4 border-2 border-black rounded-full text-base font-semibold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download My Resume
            <SiSololearn className="animate-spin-fast text-xl" />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-down">
          Core <span className="text-yellow-500">Competencies</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-violet-100 p-4 rounded-xl">
                    <Icon className="text-3xl text-violet-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-violet-600 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-2 font-semibold">
                  {skill.percent}%
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="w-full bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in-down">
            My professional <span className="text-yellow-500">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-500 to-yellow-500 hidden md:block"></div>

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex-1 text-left md:text-right md:pr-8">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                      idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-violet-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug mb-6">
                <span className="text-yellow-500 font-semibold">
                  Specialize
                </span>{" "}
                in crafting{" "}
                <span className="block text-white">
                  unique, people-focused{" "}
                  <span className="text-violet-800 font-semibold">
                    digital solutions
                  </span>
                </span>
                that bring ideas to life
              </h2>
              <p className="text-xs mt-4 text-gray-500 italic uppercase tracking-wide">
                My Philosophy
              </p>
            </div>

            {/* Right Section */}
            <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4 animate-fade-in-right">
              <p>
                I believe technology should empower people, not complicate their
                lives. That's why I focus on creating intuitive, accessible
                solutions that feel natural to use.
              </p>
              <p>
                Every project is an opportunity to solve unique challenges
                through creative thinking and technical excellence. I combine
                deep understanding of user behavior with modern development
                practices to build applications that users love and businesses
                depend on.
              </p>
              <p className="text-yellow-500 font-semibold">
                Let's transform your vision into a digital reality that makes a
                real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
            Tech <span className="text-yellow-500">Stack</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Building modern applications with industry-leading technologies
          </p>
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up">
            {[
              { icon: SiReact, name: "React", color: "text-sky-400", Animation:"animate-spin-fast" },
              { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
              { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
              { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon
                    className={`text-6xl ${tech.color} group-hover:scale-125 transition-transform duration-300`}
                  />
                  <span className="text-gray-700 font-semibold">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-6 md:gap-12">
          <div className="animate-fade-in-left">
            <p className="text-sm text-violet-800 font-medium tracking-tight mb-2 uppercase">
              Featured Work
            </p>
          </div>
          <div className="md:max-w-3xl animate-fade-in-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900 mb-4">
             <span className="text-yellow-500">Digital partner</span>  for brands, startups, and agencies
            </h2>
            <p className="text-gray-600 text-lg">
              Working across e-commerce, SaaS, fintech, healthcare, and B2B
              sectors
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => navigate(`/details/${project.id}`)}
              className="group flex flex-col transition-transform duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-violet-800 font-medium mb-2 text-sm">
                {String(project.id).padStart(2, "0")}.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-violet-800 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">({project.category})</p>
              <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute   inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                 <div className="flex justify-center items-center gap-2">
  <span className="flex items-center text-white font-semibold bg-yellow-500 rounded-3xl p-2 px-4">
    View Project
    <FaEye className="ml-2 animate-pulse" size={24} />
  </span>
</div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-violet-800 mb-6">
            Ready to Start Your{" "}
            <span className="text-yellow-500">Project?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean
            code and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
