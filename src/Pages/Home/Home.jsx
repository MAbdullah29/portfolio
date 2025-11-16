import { FaArrowDown, FaAws } from "react-icons/fa";
import abdullahImage from "../../assets/abdullah.png";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiSololearn,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";
  import { FaCompass, } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";


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
    {
      name: "Next.js",
      icon: SiNextdotjs, // make sure to import this
      level: 85,
      animation: "animate-spin-fast",
    },
    {
      name: "NestJS",
      icon: SiNestjs, // make sure to import this
      level: 70,
      animation: "animate-bounce-icon",
    },
    {
      name: "Docker",
      icon: SiDocker,
      level: 65,
      animation: "animate-float-icon",
    },
    { name: "AWS", icon: FaAws, level: 75, animation: "animate-spin-slow" },
  ];
  const steps = [
    {
      step: "1",
      title: "Discover",
      desc: "Understand business goals and user needs.",
      icon: FaCompass,
      animation: "animate-spin-fast", // Tailwind animation class
      color: "text-yellow-500",
    },
    {
      step: "2",
      title: "Define",
      desc: "Establish clear objectives and success metrics.",
      icon: MdOutlineAssignment,
      animation: "animate-pulse",
      color: "text-green-400",
    },
    {
      step: "3",
      title: "Design",
      desc: "Craft intuitive, thoughtful user experiences.",
      icon: SiAffinitydesigner ,
      animation: "animate-spin-slow",
      color: "text-cyan-400",
    },
    {
      step: "4",
      title: "Deliver",
      desc: "Launch, test, and iterate for continuous growth.",
      icon: CiDeliveryTruck ,
      animation: "animate- ",
      color: "text-orange-400",
    },
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

  const cases = [
    {
      id: 3,
      title: "ParryScript",
      category: "PHARMACEUTICAL | MEDICINE E-COMMERCE | HEALTHCARE",
      role: "ONLINE MEDICINE BUY & SELL PLATFORM | USER ENGAGEMENT & RETENTION",
      year: "2023",
      image: Images.PARRYSCRIPT_PARRY_SCRIPT_IMG,
    },
    {
      id: 1,
      title: "LandPricer",
      category: "REAL ESTATE | PROPTECH | LAND ADVISORY",
      role: "UX STRATEGY | DESIGN SYSTEM | INTERACTIVE CHATBOX FOR LAND QUERIES",
      year: "2024",
      image: Images.LANDPRICER_HOME_IMG,
    },
    {
      id: 2,
      title: "Healink",
      category: "HEALTHCARE | DENTAL HOSPITAL | HEALTH TECH",
      role: "MANAGEMENT APP FOR ADMIN, DOCTOR, STAFF & PATIENT | PATIENT CAN VIEW REPORTS, PROCEDURES & DENTAL CHART",
      year: "2024",
      image: Images.HEALINK_ADMIN_DASHBOARD_IMG,
    },
    ,
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
  category: "E-GOVERNMENT | DOCUMENT MANAGEMENT | TAX PAYMENT",
  role: "UX STRATEGY | DESIGN SYSTEM | MOBILE-FIRST TAX PAYMENT PLATFORM",
  year: "2025",
  image: Images.eFILE_HOME1_IMG,
}
,
    {
      id: 6,
      title: "HR Chromatics",
      category: "E-COMMERCE | RETAIL | CONSUMER GOODS", 
      role: "UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH",
      year: "2025",
      image: Images.HRCHROMATICS_CONTACTUS_IMG,
    },
  ];
  const [hoveredCase, setHoveredCase] = useState(null);
  return (
    <>
     <section className="p-4 md:p-8 mx-auto max-w-screen-2xl min-h-screen flex flex-col justify-center">

  {/* Small intro text */}
  <p className="text-xs md:text-sm lg:text-md xl:text-lg uppercase px-4 font-semibold text-center md:text-left">
    Hello, I am <span className="text-violet-800 font-semibold">Muhammad Abdullah</span> & I am
  </p>

  {/* Main Hero Content */}
  <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-4 overflow-hidden">
    
    {/* ==== LEFT TEXT ==== */}
    <div className="text-center md:text-left flex-1">
      <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
        Crafting seamless, <br /> human-centered <br /> experiences since <br />
        <span className="text-yellow-500 animate-pulse-icon">2022.</span>
      </h2>
    </div>

    {/* ==== RIGHT IMAGE WITH ORBITING ICONS ==== */}
    <div className="relative flex justify-center md:justify-end w-full md:w-1/2 flex-1 group ">

      {/* Orbiting Icons */}
      <div className="absolute w-[260px] sm:w-[330px] md:w-[420px] h-[260px] sm:h-[330px] md:h-[420px] rounded-full animate-spin-slow z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float">
          <SiMongodb size={36} className="text-green-500 icon-skill" />
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 animate-float-delayed">
          <SiExpress size={36} className="text-black icon-skill" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float">
          <SiReact size={40} className="text-sky-400 animate-spin-fast icon-skill" />
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 animate-float-delayed">
          <SiNodedotjs size={36} className="text-green-400 icon-skill" />
        </div>

        <div className="absolute top-6 right-6 animate-float">
          <FaAws size={34} className="text-orange-400 icon-skill" />
        </div>

        <div className="absolute bottom-6 right-6 animate-float-delayed">
          <SiDocker size={34} className="text-blue-400 icon-skill" />
        </div>

        <div className="absolute bottom-6 left-6 animate-float">
          <SiNextdotjs size={34} className="text-black icon-skill" />
        </div>

        <div className="absolute top-6 left-6 animate-float-delayed">
          <SiNestjs size={34} className="text-red-600 icon-skill" />
        </div>
      </div>

      {/* Profile Image */}
      <img
        src={abdullahImage}
        alt="Muhammad Abdullah"
        className="relative z-20 w-3/4 sm:w-2/3 md:w-full max-w-md rounded-full bg-black object-cover transform duration-500 group-hover:scale-105 group-hover:rotate-1"
      />
    </div>
  </div>

  {/* ==== BOTTOM CONTACT + SCROLL ==== */}
  <div className="w-full mt-6 p-4 text-gray-700">
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left gap-6">

      {/* Contact Info */}
      <div>
        <p className="text-xs uppercase font-medium tracking-wide">Contact me @</p>
        <a href="mailto:abdullahzafar17@gmail.com" className="text-sm text-violet-800 font-semibold hover:underline break-all">
          abdullahzafar17@gmail.com
        </a>
      </div>

      {/* Scroll Button */}
      <button className="group relative flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest font-semibold border border-yellow-500 text-yellow-500 rounded-full overflow-hidden duration-300 hover:bg-black hover:text-yellow-500 hover:border-black">
        <span className="relative z-10 text-base">Scroll down</span>
        <span className="relative z-10 animate-bounce text-lg"><FaArrowDown /></span>
        <span className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-20 blur-xl duration-500"></span>
      </button>

    </div>
  </div>

</section>


      {/* ===== Resume Download Section ===== */}
<section className="p-4 md:p-8 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 text-black min-h-screen flex items-center">
  <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row md:items-stretch gap-12 md:gap-16 w-full h-full">
    
    {/* Left: Image Section */}
    <div className="flex-1 w-full md:h-auto h-96  flex justify-center items-center animate-fadeInRight">
      <img
        src={Images.CODE_IMG}
        alt="Design Illustration"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>

    {/* Right: Text Section */}
    <div className="flex-1 flex flex-col gap-6 animate-fadeInLeft justify-center">
      {/* Small subheading */}
<h3 className="text-lg text-violet-800 uppercase tracking-wide mb-4 font-semibold">
            what i do best
          </h3>
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
        Crafting purposeful{" "}
        <span className="text-yellow-500">experiences...</span> <br />
        Where human understanding fuels{" "}
        <span className="text-violet-800">digital innovation.</span>
      </h2>

      {/* Button Section */}
      <div className="mt-4 text-center">
        <a
          href={resumePDF}
          download="Muhammad_Abdullah_Resume.pdf"
          className="inline-flex gap-2 bg-black text-yellow-500 justify-center items-center px-6 py-3 border rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Download My Resume <SiSololearn className="animate-spin-fast" />
        </a>
      </div>
    </div>

  </div>
</section>







      <section className="bg-white text-black p-4 md:p-8 lg:py-16 xl:py-24 mx-auto max-w-screen-2xl  min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <h3 className="text-lg text-violet-800 uppercase tracking-wide mb-4 font-semibold">
            Selected Cases
          </h3>
          <hr className="border-t border-gray-300 mb-8" />

          {/* List */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 text-xs sm:text-sm uppercase font-semibold text-black border-b border-gray-200">
              <div className="col-span-1 sm:col-span-2 font-semibold">
                Project
              </div>
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
                      state: {
                        clickedImage: hoveredCase ? item.image : item.image,
                      },
                    })
                  }
                >
                  {/* Project */}
                  <div className="col-span-2 sm:col-span-2 font-bold text-violet-800 text-sm">
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
      <h3 className="text-lg text-violet-800 uppercase tracking-wide  p-4 md:p-8 max-w-screen-2xl mx-auto font-semibold">
        Skills & Expertise
      </h3>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 p-4 md:p-8">
        <div className="bg-black max-w-screen-2xl text-white rounded-2xl p-10  w-full grid md:grid-cols-1 text-center">
          {/* Left Text */}
          <div className="animate-fadeIn py-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-snug mb-6">
              <span className="text-yellow-500 font-semibold">Specialize</span>{" "}
              in crafting{" "}
              <span className="block text-white">
                unique, people-focused{" "}
                <span className="text-violet-800 font-semibold">
                  Visually Look
                </span>
              </span>
              strategies that bring ideas to life
            </h1>
            <p className="text-xs  mt-3 text-cyan-400  italic">
              Designing interfaces, building functional apps, and creating
              visual stories
            </p>
            {/* <div>
              <img
                src={abdullahImage}
                alt="Abdullah"
                className="w-full max-w-lg rounded-full"
              />
            </div> */}
          </div>

          {/* Right Skills */}
          <div className="animate-slideUp">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col items-start gap-3 
             hover:scale-105 hover:drop-shadow-[0_0_5px_#facc15] transition-transform duration-300"
                  >
                    <div className="flex items-center justify-around gap-3 w-full">
                      <Icon
                        className={`text-8xl text-cyan-400 group-hover:text-yellow-500 ${skill.animation} transition-colors duration-300`}
                      />
                      <h1 className="text-white text-2xl group-hover:text-yellow-500 font-semibold transition-colors duration-300">
                        {skill.name}
                      </h1>
                    </div>

                    {/* Animated progress bar */}
                    {/* <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-3 bg-cyan-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1.5s ease-in-out",
                        }}
                      ></div>
                    </div>

                    <p className="text-gray-400 group-hover:text-yellow-500 text-xs transition-colors duration-300">
                      {skill.level}%
                    </p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
       <section className="bg-black py-28  min-h-screen flex items-center">
     <div className="max-w-6xl mx-auto px-6 text-center">
  <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-violet-800 font-bold mb-16 animate-fadeIn">
    Here’s how <span className="text-yellow-500">it works</span>
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
    {steps.map((s) => {
      const Icon = s.icon; // get icon component
      return (
        <div
          key={s.step}
          className="group bg-white p-10 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg animate-slideUp"
        >
          {/* Icon */}
          <Icon
            className={`${s.color} ${s.animation} text-5xl mx-auto mb-4 transition-transform duration-500 group-hover:scale-125`}
          />

          {/* Step Number */}
          <h3 className="text-4xl font-extrabold text-violet-800 mb-3">{s.step}</h3>

          {/* Step Title */}
          <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-500 transition-colors duration-300">
            {s.title}
          </h4>

          {/* Step Description */}
          <p className="text-gray-600 text-sm">{s.desc}</p>
        </div>
      );
    })}
  </div>

  <p className="text-yellow-500 text-sm max-w-lg mx-auto leading-relaxed animate-fadeIn delay-200">
    Every project starts with a conversation. Let’s build something meaningful together.
  </p>
</div>

      </section>

      {/* ===== Testimonials Section ===== */}
      {/* <section className="py-28 bg-white  min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-violet-800 mb-16 animate-fadeIn">Testimonials</h2>
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
      </section> */}
    </>
  );
};

export default Home;
