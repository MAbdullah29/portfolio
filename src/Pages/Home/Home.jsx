import {
  SiReact,
  SiDocker,
  SiNestjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiSololearn,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJest,
  SiGit,
  SiPostman,
} from "react-icons/si";
import {
  FaProjectDiagram,
  FaRocket,
  FaLightbulb,
  FaPencilRuler,
  FaTools,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaPalette,
  FaMobile,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Images from "../../Helper/ImgConstant";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowDown, FaAws, FaCode, FaUsers } from "react-icons/fa";
import { MdSpeed, MdSecurity } from "react-icons/md";
import "../../../src/";
import abdullahImage from "../../assets/abdullah.png";
import resumePDF from "../../assets/Abdullah_CV_NODE_JS-1.pdf";
import { MdDevices, MdCloudDone } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const skills = [
    {
      name: "React",
      icon: SiReact,
      level: 90,
      animation: "animate-spin-fast",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: 85,
      animation: "animate-bounce-icon",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 70,
      animation: "animate-pulse-icon",
      category: "Database",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 80,
      animation: "animate-wiggle-icon",
      category: "Backend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 95,
      animation: "animate-rotate-slow",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 85,
      animation: "animate-spin-fast",
      category: "Frontend",
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      level: 70,
      animation: "animate-bounce-icon",
      category: "Backend",
    },
    {
      name: "Docker",
      icon: SiDocker,
      level: 65,
      animation: "animate-float-icon",
      category: "DevOps",
    },
    {
      name: "AWS",
      icon: FaAws,
      level: 75,
      animation: "animate-spin-slow",
      category: "Cloud",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 85,
      animation: "animate-pulse-icon",
      category: "Language",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 95,
      animation: "animate-wiggle-icon",
      category: "Language",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      level: 75,
      animation: "animate-bounce-icon",
      category: "Database",
    },
  ];

  const additionalSkills = [
    { name: "Redis", icon: SiRedis },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Jest", icon: SiJest },
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
  ];

  const steps = [
    {
      icon: FaLightbulb,
      color: "text-yellow-500",
      animation: "group-hover:rotate-12",
      title: "Discovery & Research",
      desc: "Deep dive into your business goals, target audience, and competitive landscape. We define success metrics and create a strategic roadmap.",
      details: [
        "Stakeholder interviews",
        "Market analysis",
        "User personas",
        "Project scope definition",
      ],
    },
    {
      icon: FaPencilRuler,
      color: "text-violet-500",
      animation: "group-hover:-rotate-12",
      title: "Design & Prototype",
      desc: "Create intuitive wireframes and high-fidelity mockups. Interactive prototypes allow you to experience the product before development begins.",
      details: [
        "Wireframes",
        "Visual design",
        "Interactive prototypes",
        "Design system creation",
      ],
    },
    {
      icon: FaTools,
      color: "text-cyan-500",
      animation: "group-hover:scale-110",
      title: "Development & Testing",
      desc: "Transform designs into clean, efficient code. Rigorous testing ensures everything works perfectly across all devices and browsers.",
      details: [
        "Agile development",
        "Code reviews",
        "Unit & integration tests",
        "QA testing",
      ],
    },
    {
      icon: FaCheckCircle,
      color: "text-green-500",
      animation: "group-hover:",
      title: "Launch & Support",
      desc: "Seamless deployment with zero downtime. Ongoing support, monitoring, and optimization ensure long-term success.",
      details: [
        "Deployment strategy",
        "Performance monitoring",
        "Bug fixes",
        "Feature updates",
      ],
    },
  ];

  const achievements = [
    {
      icon: FaProjectDiagram,
      number: "120+",
      label: "Projects Completed",
      description: "Successfully delivered diverse projects across industries",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      metric: "On-time delivery: 95%",
    },
    {
      icon: FaUsers,
      number: "80+",
      label: "Happy Clients",
      description: "Building lasting partnerships through exceptional work",
      gradient: "from-cyan-400 via-blue-500 to-sky-600",
      metric: "Repeat clients: 70%",
    },
    {
      icon: FaStar,
      number: "4.9/5",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations with quality work",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      metric: "5-star reviews: 89%",
    },
    {
      icon: FaTrophy,
      number: "15+",
      label: "Awards & Recognition",
      description: "Industry recognition for innovative solutions",
      gradient: "from-pink-400 via-rose-500 to-purple-600",
      metric: "Featured projects: 12",
    },
  ];

  const services = [
    {
      icon: FaCode,
      iconColor: "text-violet-600",
      gradient: "from-violet-50 via-purple-50 to-indigo-50",
      title: "Full-Stack Development",
      description:
        "Build robust, scalable applications with modern technologies and best practices. From database design to user interface, I handle every layer of your application.",
      features: [
        "React, Next.js & TypeScript expertise",
        "Node.js, Express & MongoDB backend",
        "RESTful API & GraphQL integration",
        "Cloud deployment (AWS, Vercel, Netlify)",
        "Performance optimization & SEO",
      ],
      stats: { projects: "50+", satisfaction: "98%" },
    },
    {
      icon: FaMobile,
      iconColor: "text-cyan-600",
      gradient: "from-cyan-50 via-blue-50 to-sky-50",
      title: "Responsive Web Design",
      description:
        "Create beautiful, mobile-first interfaces that work flawlessly across all devices. Every pixel is crafted with care for optimal user experience.",
      features: [
        "Mobile-first design approach",
        "Cross-browser compatibility",
        "Accessibility (WCAG) compliance",
        "Progressive Web Apps (PWA)",
        "Interactive animations & micro-interactions",
      ],
      stats: { projects: "75+", satisfaction: "99%" },
    },
    {
      icon: FaPalette,
      iconColor: "text-pink-600",
      gradient: "from-pink-50 via-rose-50 to-red-50",
      title: "UI/UX Design",
      description:
        "Design intuitive, engaging user experiences backed by research and testing. Transform complex problems into simple, elegant solutions.",
      features: [
        "User research & persona development",
        "Wireframing & prototyping (Figma)",
        "Design systems & brand identity",
        "Usability testing & iteration",
        "Conversion rate optimization",
      ],
      stats: { projects: "60+", satisfaction: "97%" },
    },
    {
      icon: FaRocket,
      iconColor: "text-orange-600",
      gradient: "from-orange-50 via-amber-50 to-yellow-50",
      title: "Performance & Optimization",
      description:
        "Supercharge your web applications with lightning-fast load times and seamless interactions. Speed matters for both users and search rankings.",
      features: [
        "Core Web Vitals optimization",
        "Code splitting & lazy loading",
        "Image & asset optimization",
        "Caching strategies & CDN setup",
        "Real-time monitoring & analytics",
      ],
      stats: { projects: "40+", satisfaction: "100%" },
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FinTech Inc.",
      text: "Working with Muhammad transformed our product completely. His attention to detail and technical expertise is truly unmatched! The application he built exceeded all our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      name: "Michael Lee",
      role: "Product Manager, TechNova",
      text: "Creative solutions and smooth execution throughout the project. Highly recommend him for digital product design and development. A true professional!",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Founder, Startup Hub",
      text: "A pleasure to work with! Our app now delivers exactly the experience we envisioned. Outstanding work and great communication. Will definitely work together again!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
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
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "Revolutionizing online pharmaceutical services with secure prescription management",
    },
    {
      id: 1,
      title: "LandPricer",
      category: "REAL ESTATE | PROPTECH | LAND ADVISORY",
      role: "UX STRATEGY | DESIGN SYSTEM | INTERACTIVE CHATBOX FOR LAND QUERIES",
      year: "2024",
      image: Images.LANDPRICER_HOME_IMG,
      tech: ["Next.js", "NestJS", "PostgreSQL", "AI Integration"],
      description:
        "AI-powered land valuation platform with intelligent query system",
    },
    {
      id: 2,
      title: "Healink",
      category: "HEALTHCARE | DENTAL HOSPITAL | HEALTH TECH",
      role: "MANAGEMENT APP FOR ADMIN, DOCTOR, STAFF & PATIENT | PATIENT CAN VIEW REPORTS, PROCEDURES & DENTAL CHART",
      year: "2024",
      image: Images.HEALINK_ADMIN_DASHBOARD_IMG,
      tech: ["React", "Express", "MongoDB", "AWS S3"],
      description:
        "Comprehensive healthcare management system for dental practices",
    },
    {
      id: 4,
      title: "Valor Sport",
      category: "EDTECH | SPORTS TECH | AI",
      role: "UX AUDIT/DESIGN | AI-POWERED CONTENT SUMMARIZATION",
      year: "2025",
      image: Images.VALOR_SPORT_CARD_CARD_DETAILS_IMG,
      tech: ["Next.js", "OpenAI", "TailwindCSS", "Redis"],
      description:
        "AI-enhanced sports education platform with smart content delivery",
    },
    {
      id: 5,
      title: "eFile Ny1033",
      category: "E-GOVERNMENT | DOCUMENT MANAGEMENT | TAX PAYMENT",
      role: "UX STRATEGY | DESIGN SYSTEM | MOBILE-FIRST TAX PAYMENT PLATFORM",
      year: "2025",
      image: Images.eFILE_HOME1_IMG,
      tech: ["React", "Node.js", "Docker", "AWS"],
      description:
        "Streamlined government tax filing with mobile-first approach",
    },
    {
      id: 6,
      title: "HR Chromatics",
      category: "E-COMMERCE | RETAIL | CONSUMER GOODS",
      role: "UX STRATEGY | DESIGN SYSTEM | MOBILE 1ST APPROACH",
      year: "2025",
      image: Images.HRCHROMATICS_CONTACTUS_IMG,
      tech: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      description:
        "Modern e-commerce platform with seamless checkout experience",
    },
  ];

  const [hoveredCase, setHoveredCase] = useState(null);

  return (
    <>
      {/* Smooth scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-yellow-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ===== COMBINED HERO & ACHIEVEMENTS SECTION ===== */}
      <section className="px-4 md:px-8 mx-auto max-w-screen-2xl min-h-screen  flex flex-col justify-center overflow-x-hidden relative">
        {/* ===== Intro Text ===== */}
        <p className="text-xs md:text-sm lg:text-md xl:text-lg uppercase px-4 font-semibold text-center md:text-left animate-float mt-5">
          Hello, I am{" "}
          <span className="text-violet-800 font-semibold">
            Muhammad Abdullah
          </span>{" "}
          & I am
        </p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 py-4 relative">
          {/* ==== LEFT TEXT ==== */}
          <div className="text-center md:text-left flex-1 animate-fade-in-left px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              Crafting seamless, <br />{" "}
              <span className="text-violet-800"> human-centered</span> <br />{" "}
              experiences since{" "}
              <span className="text-yellow-500 animate-wiggle-icon inline-block hover:scale-110 transition-transform duration-300">
                2022.
              </span>
            </h2>
            <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Transforming ideas into powerful digital solutions. Specializing
              in full-stack development, UI/UX design, and creating applications
              that users love to interact with.
            </p>
          </div>

          {/* ==== RIGHT IMAGE + ORBITING ICONS ==== */}
          <div className="relative flex justify-center items-center w-full md:w-1/2 flex-1 group animate-fade-in-right min-h-[280px] sm:min-h-[320px] md:min-h-[450px] lg:min-h-[500px]">
            {/* Background Gradient Circle */}
            <div className="absolute w-5/6 max-w-[480px] aspect-square rounded-full bg-gradient-to-br from-violet-500/20 via-yellow-500/20 to-cyan-500/20 blur-3xl animate-pulse"></div>

            {/* Rotating Rings */}
            <div className="absolute w-[90%] max-w-[460px] aspect-square border-2 border-dashed border-violet-300/50 rounded-full animate-spin-slow"></div>
            <div
              className="absolute w-[95%] max-w-[480px] aspect-square border border-yellow-300/30 rounded-full animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "20s",
              }}
            ></div>

            {/* Profile Image */}
            <div className="relative z-20 w-40 sm:w-48 md:w-64 lg:w-72 aspect-square">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-yellow-500 to-cyan-500 blur-2xl opacity-40 group-hover:opacity-70 animate-pulse transition-opacity duration-500"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden   transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]">
                <img
                  src={abdullahImage}
                  alt="Muhammad Abdullah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Orbiting Tech Icons */}
            <div className="absolute w-full h-full rounded-full">
              {/* Example Top Center - MongoDB */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 animate-float group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all">
                  <SiMongodb size={32} className="text-green-500" />
                </div>
              </div>

              {/* Right Center - Express */}
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2 animate-float-delayed group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-all">
                  <SiExpress size={32} className="text-black" />
                </div>
              </div>

              {/* Bottom Center - React */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 animate-float group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-sky-500/50 transition-all">
                  <SiReact
                    size={36}
                    className="text-sky-400 animate-spin-fast"
                  />
                </div>
              </div>

              {/* Left Center - Node.js */}
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 animate-float-delayed group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all">
                  <SiNodedotjs size={32} className="text-green-400" />
                </div>
              </div>

              {/* Top Right - AWS */}
              <div className="absolute top-[5%] right-[5%] animate-float group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all">
                  <FaAws size={28} className="text-orange-400" />
                </div>
              </div>

              {/* Bottom Right - Docker */}
              <div className="absolute bottom-[5%] right-[5%] animate-float-delayed group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all">
                  <SiDocker size={28} className="text-blue-400" />
                </div>
              </div>

              {/* Bottom Left - Next.js */}
              <div className="absolute bottom-[5%] left-[5%] animate-float group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-all">
                  <SiNextdotjs size={28} className="text-black" />
                </div>
              </div>

              {/* Top Left - NestJS */}
              <div className="absolute top-[5%] left-[5%] animate-float-delayed group-hover:scale-125 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm p-2.5 md:p-3 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all">
                  <SiNestjs size={28} className="text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== Contact & Explore Button ==== */}
        <div className="w-full mt-8 md:mt-6 p-4 text-gray-700 animate-fade-in-up flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6">
          <div className="hover:scale-105 transition-transform duration-300">
            <p className="text-xs uppercase font-medium tracking-wide text-gray-500">
              Let's connect
            </p>
            <a
              href="mailto:abdullahzafar17@gmail.com"
              className="text-xs sm:text-sm text-violet-800 font-semibold hover:underline break-all hover:text-yellow-500 transition-colors duration-300"
            >
              abdullahzafar17@gmail.com
            </a>
          </div>

          <button
            onClick={smoothScrollToBottom}
            className="group relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-widest font-semibold border-2 border-yellow-500 text-yellow-500 rounded-full overflow-hidden duration-300 hover:bg-yellow-500 hover:text-black cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-sm sm:text-base font-bold">
              Explore More
            </span>
            <span className="relative z-10 animate-bounce text-base sm:text-lg">
              <FaArrowDown />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </section>

      <section className="relative  p-4 md:p-8 mx-auto max-w-screen-2xl min-h-screen flex flex-col justify-center overflow-x-hidden bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative  mx-auto">
          <div className="text-start ">
            <h3 className="text-lg text-violet-800 uppercase tracking-wide p-4 md:p-8 max-w-screen-2xl mx-auto font-semibold animate-fade-in-down">
              Proven Track Record
            </h3>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
              Impact By{" "}
              <span className="text-transparent bg-clip-text text-yellow-500 inline-block hover:scale-105 transition-transform duration-300">
                Numbers
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-md md:text-lg max-w-2xl mx-auto leading-relaxed my-3">
              A track record of delivering excellence and building lasting
              relationships with clients worldwide. These numbers represent real
              projects, real people, and real results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(`achievement-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-8 md:p-10 rounded-3xl shadow-2xl bg-gradient-to-br ${achievement.gradient} hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer overflow-hidden group text-white`}
                >
                  <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center justify-between">
                    <div className="relative z-10 text-5xl md:text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ">
                      <Icon />
                    </div>

                    <h3 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 drop-shadow-lg">
                      {achievement.number}
                    </h3>
                  </div>

                  <p className="relative z-10 text-xl md:text-2xl font-bold mb-3 text-white/90">
                    {achievement.label}
                  </p>

                  <p className="relative z-10 text-sm md:text-base text-white/80 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="relative z-10 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-xs md:text-sm font-semibold">
                      {achievement.metric}
                    </span>
                  </div>

                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/20 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10 blur-3xl animate-pulse animation-delay-2000"></div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-1000"></div>
                </div>
              );
            })}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: MdSpeed,
                label: "Avg Load Time",
                value: "< 2s",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: MdSecurity,
                label: "Security Score",
                value: "A+",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: MdDevices,
                label: "Device Coverage",
                value: "100%",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: MdCloudDone,
                label: "Uptime",
                value: "99.9%",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-violet-300 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div
                      className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <StatIcon className="text-3xl text-white" />
                    </div>
                    <div className="text-3xl font-bold text-violet-800 mb-1">
                      {stat.value}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <h3 className="text-lg text-violet-800 uppercase tracking-wide p-4 md:p-8 max-w-screen-2xl mx-auto font-semibold animate-fade-in-down">
        Philosophy & Approach
      </h3>
      {/* ===== RESUME DOWNLOAD SECTION ===== */}
      <section className="p-4 md:p-8 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 text-black min-h-screen flex items-center">
        <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row md:items-stretch gap-12 md:gap-16 w-full h-full">
          <div className="flex-1 w-full md:h-auto h-96 flex justify-center items-center group">
            <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={Images.CODE_IMG}
                alt="Design Illustration"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-violet-900/50 transition-colors duration-500"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 justify-center bg-white p-4 rounded-3xl shadow-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in-left">
              Crafting purposeful{" "}
              <span className="text-yellow-500 hover:scale-105 inline-block transition-transform duration-300">
                experiences...
              </span>{" "}
              <br />
              Where human understanding fuels{" "}
              <span className="text-violet-800  ">digital innovation.</span>
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed animate-fade-in-up">
              I believe in creating more than just functional applications—I
              build experiences that resonate with users. Specializing in
              full-stack development with the MERN stack, I focus on creating
              scalable, performant applications that solve real-world problems.
              From concept to deployment, every line of code is written with
              clean architecture, security, and user experience in mind.
            </p>

            <p
              className="text-gray-600 text-sm leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              My work spans healthcare, fintech, e-commerce, and real estate,
              bringing modern web technologies to diverse industries. I'm
              passionate about staying current with the latest tech trends while
              maintaining a strong foundation in proven development practices.
            </p>

            <div
              className="mt-4 animate-fade-in-up text-center mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href={resumePDF}
                download="Muhammad_Abdullah_Resume.pdf"
                className="inline-flex gap-2 bg-black text-yellow-500 justify-center items-center px-8 py-4 border-2 border-black rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download My Resume <SiSololearn className="animate-spin-fast" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <h3 className="text-lg text-violet-800 uppercase tracking-wide p-4 md:p-8 max-w-screen-2xl mx-auto font-semibold animate-fade-in-down">
        what i offer{" "}
      </h3>
      <section className="relative p-4 md:p-8 min-h-screen   flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 w-full">
          {/* Header */}

          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Comprehensive{" "}
              <span className="text-transparent text-yellow-500 inline-block hover:scale-105 transition-transform duration-300">
                Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
              From initial concept to final deployment, I provide end-to-end
              services that cover every aspect of modern web development.
            </p>

            <p className="text-violet-800 font-semibold text-lg">
              Let's build something amazing together 🚀
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(`service-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-8  rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-violet-800 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden`}
                >
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Decorative Corners */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-tr-full transform -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center justify-center p-2  backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon
                          className={`text-5xl md:text-6xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>

                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray- black text-base mb-6 font-medium">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-800 group-hover:text-gray-900 transition-all duration-300"
                          style={{
                            transitionDelay: `${i * 50}ms`,
                            transform:
                              hoveredCard === `service-${idx}`
                                ? "translateX(4px)"
                                : "translateX(0)",
                          }}
                        >
                          <span className="flex-shrink-0 animate-spin-fast w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mr-3 mt-0.5 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="font-medium text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3 flex-wrap">
                      <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-violet-700">
                          {service.stats.projects} Projects
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-green-700">
                          {service.stats.satisfaction} Satisfaction
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 via-yellow-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          
        </div>
      </section>

      {/* ===== SELECTED CASES SECTION ===== */}
      <section className="bg-white text-black p-4 md:p-8 lg:py-16 xl:py-24 mx-auto max-w-screen-2xl min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto w-full">
          <h3 className="text-lg text-violet-800 uppercase tracking-wide mb-4 font-semibold animate-fade-in-down">
            Featured Projects
          </h3>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 animate-fade-in-left">
            Selected <span className="text-yellow-500">Case Studies</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl animate-fade-in-right">
            Explore my recent work across various industries. Each project
            represents a unique challenge and innovative solution tailored to
            specific business needs.
          </p>
          <hr className="border-t-2 border-gray-300 mb-8 animate-slide-in-left" />

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 text-xs sm:text-sm uppercase font-semibold text-black border-b-2 border-gray-200 pb-3">
              <div className="col-span-1 sm:col-span-2 font-semibold">
                Project
              </div>
              <div className="hidden sm:block col-span-4">Industry</div>
              <div className="hidden lg:block col-span-4">Role</div>
              <div className="col-span-1 text-right">Year</div>
            </div>

            <div className="divide-y divide-gray-200">
              {cases.map((item, idx) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 items-center py-5 cursor-pointer transition-all duration-300 relative animate-fade-in-up hover:bg-gradient-to-r hover:from-violet-50 hover:to-yellow-50 ${
                    hoveredCase === item.id ? "bg-gray-100" : ""
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  onMouseEnter={() => setHoveredCase(item.id)}
                  onMouseLeave={() => setHoveredCase(null)}
                  onClick={() =>
                    navigate(`/details/${item.id}`, {
                      state: {
                        clickedImage: item.image,
                      },
                    })
                  }
                >
                  <div className="col-span-2 sm:col-span-2 font-bold text-violet-800 text-sm hover:text-yellow-500 transition-colors duration-300">
                    {item.title}
                  </div>

                  <div className="hidden sm:block col-span-4 text-gray-600 text-xs md:text-sm">
                    {item.category}
                  </div>

                  <div className="hidden lg:block col-span-4 text-gray-600 text-xs md:text-sm">
                    {item.role}
                  </div>

                  <div className="col-span-2 sm:col-span-1 text-right text-gray-800 font-semibold text-sm">
                    {item.year}
                  </div>

                  {hoveredCase === item.id && (
                    <div className="absolute left-0 top-full mt-2 sm:mt-2 bg-white p-4 rounded-lg shadow-2xl border-2 border-violet-200 z-20 w-72 sm:w-96 transition-all duration-300 transform scale-100 animate-fade-in-up">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 sm:h-48 object-cover rounded-md mb-3 hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-xs text-gray-700 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-violet-100 text-violet-800 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-6 sm:mt-8 animate-fade-in-up">
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 border-2 border-black rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              View All Projects{" "}
              <span>
                <SiSololearn className="animate-spin-fast text-yellow-500" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== SKILLS & EXPERTISE SECTION ===== */}
      <h3 className="text-lg text-violet-800 uppercase tracking-wide p-4 md:p-8 max-w-screen-2xl mx-auto font-semibold animate-fade-in-down">
        Technical Expertise
      </h3>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 p-4 md:p-8">
        <div className="bg-black max-w-screen-2xl text-white rounded-3xl p-10 w-full text-center shadow-2xl">
          <div className="py-6 animate-fade-in-down">
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-snug mb-6">
              <span className="text-yellow-500 font-semibold hover:scale-105 inline-block transition-transform duration-300">
                Mastering
              </span>{" "}
              the art of{" "}
              <span className="block text-white">
                modern web development with{" "}
                <span className="text-violet-800 font-semibold hover:text-yellow-500 transition-colors duration-300">
                  cutting-edge
                </span>
              </span>
              technologies and tools
            </h1>
            <p className="text-sm mt-3 text-cyan-400 italic animate-pulse max-w-3xl mx-auto">
              Building scalable applications with the MERN stack, designing
              beautiful interfaces, and delivering exceptional user experiences
              through clean, maintainable code
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-start gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 cursor-pointer animate-fade-in-up border border-gray-800 hover:border-yellow-500"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-center justify-around gap-3 w-full">
                      <Icon
                        className={`text-6xl md:text-8xl text-cyan-400 group-hover:text-yellow-500 ${skill.animation} transition-colors duration-300`}
                      />
                      <div className="text-left">
                        <h1 className="text-white text-md md:text-2xl group-hover:text-yellow-500 font-semibold transition-colors duration-300">
                          {skill.name}
                        </h1>
                        <p className="text-gray-400 text-xs group-hover:text-cyan-400 transition-colors duration-300">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Skills */}
            <div
              className="mt-8 pt-8 border-t border-gray-800 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
                Additional Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {additionalSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-gray-900 px-5 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer group border border-gray-800 hover:border-cyan-400 hover:scale-110"
                    >
                      <Icon className="text-2xl text-cyan-400 group-hover:text-yellow-500 transition-colors duration-300" />
                      <span className="text-sm text-white group-hover:text-yellow-500 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block mb-4">
              <span className="text-sm md:text-base text-violet-800 uppercase tracking-widest font-bold px-4 py-2 bg-white rounded-full border border-yellow-500/20">
                My Approach
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-violet-800">My Development</span>{" "}
              <span className="text-yellow-500">Process</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A systematic approach to building exceptional digital products.
              From discovery to delivery, every step is carefully planned and
              executed to ensure success.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  onMouseEnter={() => setHoveredCard(`step-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 md:p-8 rounded-3xl shadow-xl border-2 border-gray-200 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer hover:border-violet-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex mb-3 justify-between items-center bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl shadow-lg group-hover:shadow-xl">
                    <div className=" p-4  transition-all duration-500">
                      <Icon
                        className={`${s.color} ${s.animation} text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-125`}
                      />
                    </div>

                    <h4 className="relative z-10 text-xl  font-bold  text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-violet-800 transition-all duration-300">
                      {s.title}
                    </h4>
                  </div>

                  <p className="relative z-10 text-gray-700 text-xs  mb-4  group-hover:text-gray-900 transition-colors duration-300">
                    {s.desc}
                  </p>

                  <ul className="relative z-10 space-y-2">
                    {s.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-xs md:text-sm text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-all duration-300"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          transform:
                            hoveredCard === `step-${idx}`
                              ? "translateX(4px)"
                              : "translateX(0)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-28 bg-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-black mb-4 animate-fade-in-down">
            Client{" "}
            <span className="text-yellow-500 hover:scale-105 inline-block transition-transform duration-300">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Don't just take my word for it—hear what clients have to say about
            working together. Building lasting relationships through exceptional
            work and dedication.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer group hover:border-violet-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span
                      key={idx}
                      className="text-yellow-500 text-xl group-hover:scale-125 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 0.05}s` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-200 group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold group-hover:text-violet-800 transition-colors duration-300">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-24 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ready to bring your{" "}
            <span className="text-yellow-500 hover:scale-105 inline-block transition-transform duration-300">
              vision to life?
            </span>
          </h2>
          <p
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Whether you're a startup with a groundbreaking idea or an
            established business looking to modernize, I'm here to help. Let's
            collaborate and create something extraordinary that makes a real
            impact.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start a Conversation
            </Link>
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
