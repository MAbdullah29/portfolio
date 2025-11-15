import { FaArrowDown, FaAws } from "react-icons/fa";
import abdullahImage from "../../assets/abdullah.png";
import { LiaFileDownloadSolid } from "react-icons/lia";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiSololearn,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

// Import your CV PDF file from the assets folder
import resumePDF from "../../assets/Abdullah_CV_NODE_JS-1.pdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Images from "../../Helper/ImgConstant";

const Home = () => {
  const navigate = useNavigate();
  const skills = [
    { name: "React", icon: SiReact, level: 90, animation: "animate-spin-fast" },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: 85,
      animation: "animate-bounce-icon",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 70,
      animation: "animate-pulse-icon",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 80,
      animation: "animate-wiggle-icon",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 95,
      animation: "animate-rotate-slow",
    },
    { name: "Figma", icon: SiFigma, level: 90, animation: "animate-fadeIn" },
    {
      name: "Photoshop",
      icon: SiAdobephotoshop,
      level: 70,
      animation: "animate-shake-icon",
    },
    {
      name: "Docker",
      icon: SiDocker,
      level: 65,
      animation: "animate-float-icon",
    },
    { name: "AWS", icon: FaAws, level: 75, animation: "animate-spin-slow" },
  ];

  const cases = [
  {
    id: 1,
    title: "LandPricer",
    category: "REAL ESTATE | PROPTECH | RENTAL & LEASING", // ✅ Correct
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
]
;

  const [hoveredCase, setHoveredCase] = useState(null);
  return (
    <>
      <section className=" p-4 md:p-8 lg:py-16 xl:py-24 mx-auto max-w-screen-2xl">
        <p className="text-xs md:text-sm lg:text-md xl:text-lg uppercase mb-4 p-4 font-semibold">
          Hello, I am{" "}
          <span className="text-violet-800 font-semibold">
            Muhammad Abdullah
          </span>{" "}
          & I am
        </p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8   py-16 overflow-hidden">
          {/* ===== TEXT SECTION ===== */}
          <div className="text-center md:text-left animate-fadeInUp">
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold leading-tight tracking-tight">
              Crafting seamless, <br />
              human-centered <br />
              experiences since <br />
              <span className="text-yellow-500 animate-pulse">2022.</span>
            </h2>
          </div>

          {/* ===== IMAGE + ORBITING ICONS SECTION ===== */}
          <div className="relative flex justify-center md:justify-end w-full md:w-1/2 group animate-fadeIn">
            {/* Glowing Code Frame */}

            {/* ===== Orbiting Icons ===== */}
            <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] rounded-full animate-spin-slow z-10">
              {/* MongoDB */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-float">
                <SiMongodb
                  size={36}
                  className="text-green-500 drop-shadow-glow hover:scale-125 hover:drop-shadow-[0_0_20px_#22c55e] transition-all duration-300"
                />
              </div>

              {/* Express */}
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 animate-float-delayed">
                <SiExpress
                  size={36}
                  className="text-black drop-shadow-glow hover:scale-125 hover:drop-shadow-[0_0_20px_#e5e7eb] transition-all duration-300"
                />
              </div>

              {/* React */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-float">
                <SiReact
                  size={40}
                  className="text-sky-400 drop-shadow-glow animate-spin-fast hover:scale-125 hover:drop-shadow-[0_0_25px_#38bdf8] transition-all duration-300"
                />
              </div>

              {/* Node.js */}
              <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 animate-float-delayed">
                <SiNodedotjs
                  size={36}
                  className="text-green-400 drop-shadow-glow hover:scale-125 hover:drop-shadow-[0_0_20px_#22c55e] transition-all duration-300"
                />
              </div>

              {/* AWS */}
              <div className="absolute top-10 right-10 animate-float">
                <FaAws
                  size={34}
                  className="text-orange-400 drop-shadow-glow hover:scale-125 hover:drop-shadow-[0_0_20px_#f59e0b] transition-all duration-300"
                />
              </div>

              {/* Docker */}
              <div className="absolute bottom-10 left-10 animate-float-delayed">
                <SiDocker
                  size={34}
                  className="text-blue-400 drop-shadow-glow hover:scale-125 hover:drop-shadow-[0_0_20px_#3b82f6] transition-all duration-300"
                />
              </div>
            </div>

            {/* ===== Image ===== */}
            <img
              src={abdullahImage}
              alt="Muhammad Abdullah"
              className="relative z-20 w-3/4 sm:w-2/3 md:w-full max-w-md rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 "
            />
          </div>
        </div>

        {/* ===== About Text ===== */}
        <div className=" mt-6 p-4 text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 w-full flex justify-end">
          <p className="max-w-sm">
            I solve business challenges with strategic product & UX design.
            Optimizing customer journeys through data-driven insights for
            measurable digital growth.
          </p>
        </div>

        {/* ===== Contact + Scroll Button ===== */}
        <div className="flex flex-col sm:flex-row p-4 justify-between items-center sm:items-end gap-6 py-3 lg:mt-16 text-center sm:text-left">
          {/* Contact Info */}
          <div>
            <p className="text-xs uppercase font-medium tracking-wide">
              Contact me @
            </p>
            <a
              href="mailto:abdullahzafar17@gmail.com"
              className="text-sm text-violet-800 font-semibold hover:underline break-all"
            >
              abdullahzafar17@gmail.com
            </a>
          </div>

          {/* Scroll Down */}
          <div className="flex justify-center sm:justify-end p-4">
            <button className="group relative flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest font-semibold border border-yellow-500 text-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-500 hover:text-white focus:outline-none">
              <span className="relative z-10 text-base">Scroll down</span>
              <span className="relative z-10 animate-bounce text-lg">
                <FaArrowDown />
              </span>
              <span className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Resume Download Section ===== */}
      <section className=" p-4 md:p-8  max-w-screen-2xl  mx-auto bg-white text-black">
        <div className=" mx-auto flex flex-col md:flex-row md:items-start gap-12 md:gap-16 items-center">
          {/* Left: Heading */}
          <div className="flex-1">
            <p className="text-xs uppercase font-medium tracking-wide mb-2">
              Behind the Design
            </p>
            <h2 className="text-3xl lg:text-5xl  font-bold leading-snug">
              Crafting purposeful{" "}
              <span className="text-yellow-500">experiences...</span>
              <br />
              Where human understanding fuels{" "}
              <span className="text-yellow-500"> digital innovation.</span>
            </h2>
          </div>

          {/* Right: Description + Download Button */}
          <div className="flex-1 items-center flex flex-col justify-start gap-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              With over 8 years of experience, I lead product design for SaaS,
              Real Estate, Enterprise-level applications, health-tech, AI tools,
              and many more. I transform complex challenges into intuitive,
              scalable, user-centered solutions that drive business growth.
            </p>

            {/* ✅ Correct download link */}
            <a
              href={resumePDF}
              download="Muhammad_Abdullah_Resume.pdf"
              className="inline-flex gap-2  justify-center items-center px-6 py-3 border border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
            >
              Download My Resume
              <LiaFileDownloadSolid size={30} className="text-yellow-500" />
            </a>
          </div>
        </div>
      </section>

        <section className="bg-white text-black p-4 md:p-8 lg:py-16 xl:py-24 mx-auto max-w-screen-2xl">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <h3 className="text-sm uppercase tracking-wide mb-4 font-semibold">
          Selected Cases
        </h3>
        <hr className="border-t border-gray-300 mb-8" />

        {/* List */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 text-xs sm:text-sm uppercase font-semibold text-gray-500 border-b border-gray-200">
            <div className="col-span-1 sm:col-span-2 font-semibold">Project</div>
            <div className="hidden sm:block col-span-4">Industry</div>
            <div className="hidden lg:block col-span-4">Role</div>
            <div className="col-span-1 text-right">Year</div>
          </div>

          <div className="divide-y divide-gray-200">
            {cases.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 items-center py-4 cursor-pointer transition-all duration-300 relative ${
                  hoveredCase === item.id ? "bg-gray-100" : ""
                }`}
                onMouseEnter={() => setHoveredCase(item.id)}
                onMouseLeave={() => setHoveredCase(null)}
                onClick={() =>
                  navigate(`/details/${item.id}`, {
                    state: { clickedImage: hoveredCase ? item.image : item.image },
                  })
                }
              >
                {/* Project */}
                <div className="col-span-2 sm:col-span-2 font-bold text-black text-sm">
                  {item.title}
                </div>

                {/* Industry */}
                <div className="hidden sm:block col-span-4 text-gray-600 text-xs md:text-sm">
                  {item.category}
                </div>

                {/* Role */}
                <div className="hidden lg:block col-span-4 text-gray-600 text-xs md:text-sm">
                  {item.role}
                </div>

                {/* Year */}
                <div className="col-span-2 sm:col-span-1 text-right text-gray-800 font-semibold text-sm">
                  {item.year}
                </div>

                {/* Hover Image */}
                {hoveredCase === item.id && (
                  <div className="absolute left-0 top-full mt-2 sm:mt-2 bg-white p-2 rounded-lg shadow-lg border border-gray-100 z-20 w-72 sm:w-80 transition-transform duration-300 transform scale-105">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 border border-black rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Cases{" "}
            <span>
              <SiSololearn className="animate-spin-fast text-yellow-500" />
            </span>
          </button>
        </div>
      </div>
    </section>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 p-4">
        <div className="bg-black text-gray-400 rounded-2xl p-10  w-full grid md:grid-cols-2 gap-12">
          {/* Left Text */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl font-light leading-snug mb-6">
              <span className="text-white font-semibold">Specialize</span> in
              crafting{" "}
              <span className="block text-gray-400">
                unique, people-focused{" "}
                <span className="text-white font-semibold">Visually Look</span>
              </span>
              strategies that bring ideas to life
            </h1>
            <p className="text-xs mt-3 text-gray-600 italic">
              Designing interfaces, building functional apps, and creating
              visual stories
            </p>
            <div>
              <img
                src={abdullahImage}
                alt="Abdullah"
                className="w-full max-w-lg rounded-full"
              />
            </div>
          </div>

          {/* Right Skills */}
          <div className="animate-slideUp">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col items-start gap-3 
                     hover:scale-105 hover:drop-shadow-glow transition-transform duration-300"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Icon
                        className={`text-3xl text-cyan-400 ${skill.animation} transition-all duration-300`}
                      />
                      <h4 className="text-white font-semibold">{skill.name}</h4>
                    </div>

                    {/* Animated progress bar */}
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-3 bg-cyan-400 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1.5s ease-in-out",
                        }}
                      ></div>
                    </div>

                    <p className="text-gray-400 text-xs">{skill.level}%</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

  

    </>
  );
};

export default Home;
