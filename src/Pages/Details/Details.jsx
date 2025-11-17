import React, { useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { projectData } from "../../data/projectdata";
import { 
  FaArrowLeft, 
  FaTimes, 
  FaExpand, 
  FaCheckCircle, 
  FaLightbulb,
  FaArrowRight,
  FaDownload,
  FaShare,
  FaRegCalendarAlt,
  FaRegSmile,
  FaBolt,
  FaLock,
  FaBullseye,
  FaRegLightbulb
} from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { MdOutlinePhotoLibrary, MdOutlineTrackChanges } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TbClockHour10 } from "react-icons/tb";
import { SiSololearn } from "react-icons/si";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projectData.find((p) => p.id === parseInt(id));

  // Hero image passed from previous page
  const clickedImage = location.state?.clickedImage || null;

  // Modal only opens when user clicks on an image inside the page
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("screens");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen  bg-gradient-to-b from-gray-50 via-white to-gray-50">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-violet-800 font-semibold transition-colors duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="hidden sm:inline">Back to Projects</span>
            </button>
            
            <div className="flex items-center gap-3">
              <Link to={"/contact"} className="inline-flex gap-2 bg-black text-yellow-500 justify-center items-center px-8 py-4 border-2 border-black rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Hire Me
<SiSololearn className="animate-spin-fast" />              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-800 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-800 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              {project.category || "Case Study"}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl text-yellow-500 lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              {project.title}
            </h1>

            {/* Overview */}
            <p className="text-md md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              {project.overview}
            </p>

            {/* Stats Grid */}
    <div
  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-2xl mx-auto animate-fade-in-up"
  style={{ animationDelay: "0.2s" }}
>
  {[
    {
      label: "Screens",
      value: project?.images?.length || 0,
      icon: <MdOutlinePhotoLibrary />,
      color: "text-violet-400 group-hover:text-violet-300",
      glow: "group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]"
    },
    {
      label: "Year",
      value: project?.year || "2024",
      icon: <FaRegCalendarAlt />,
      color: "text-sky-400 group-hover:text-sky-300",
      glow: "group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"
    },
    {
      label: "Duration",
      value: project?.duration || "3-6 Months",
      icon: <TbClockHour10 />,
      color: "text-amber-400 group-hover:text-amber-300",
      glow: "group-hover:shadow-[0_0_15px_rgba(251,191,36,0.6)]"
    },
    {
      label: "Status",
      value: "Completed",
      icon: <IoCheckmarkDoneCircleOutline />,
      color: "text-emerald-400 group-hover:text-emerald-300",
      glow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]"
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className={`
        bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20
        hover:bg-white/20 hover:-translate-y-1 transition-all duration-300
        group ${item.glow}
      `}
    >
      {/* Animated Icon */}
      <div
        className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.color}`}
      >
        {item.icon}
      </div>

      <p className="text-white/70 text-sm font-medium mb-1">{item.label}</p>
      <p className="text-white font-bold text-xl tracking-wide">{item.value}</p>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      {clickedImage && (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 -mt-20 mb-16 relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in-up">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-violet-500 to-yellow-500 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl shadow-2xl">
                <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl bg-gray-50">
                  <img
                    src={clickedImage}
                    alt={project.title}
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                
                {/* Image Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 bg-yellow-500 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-lg flex items-center gap-1.5">
                  <SlScreenDesktop className="text-xs md:text-sm" />
                  <span className="hidden sm:inline">Featured View</span>
                  <span className="sm:hidden">Featured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-12">
        
        {/* Tab Navigation */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap gap-4 justify-center bg-white rounded-2xl p-2 shadow-md">
            {[
              { id: "screens", label: `Screens`, count: project.images?.length || 0, icon: <SlScreenDesktop className="text-lg" /> },
              { id: "overview", label: "Overview", icon: <FaLightbulb className="text-lg" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeTab === tab.id ? "bg-white/20" : "bg-violet-100 text-violet-700"
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="max-w-screen-2xl mx-auto space-y-16 animate-fade-in-up">
            
            {/* Project Role & Responsibilities */}
            <div className="bg-yellow-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
                My Role & Responsibilities
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-violet-800 mb-4">Role</h3>
                  <p className="text-gray-700 text-lg">
                    {project.role || "Full Stack Developer & UI/UX Designer"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-violet-800 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {[
                      "UI/UX Design & Prototyping",
                      "Frontend Development",
                      "Backend API Development",
                      "Database Design & Management",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="bg-gradient-to-br from-violet-50 to-yellow-50 rounded-3xl p-8 md:p-12 border-2 border-violet-100">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-violet-600 rounded-full"></span>
                  Key Features & Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium leading-relaxed">{feature}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process & Challenges */}

<div className="grid md:grid-cols-2 gap-8">
  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-violet-800 ">
    <div className="text-4xl mb-4 text-yellow-500">
      <FaBullseye />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Goals</h3>
    <p className="text-gray-700 leading-relaxed">
      Create a user-friendly, scalable platform that streamlines operations and 
      enhances user experience through intuitive design and robust functionality.
    </p>
  </div>

  <div className="bg-white border-2 border-violet-800 rounded-3xl p-8 shadow-lg ">
    <div className="text-4xl mb-4 text-blue-500">
      <FaRegLightbulb />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Approach</h3>
    <p className="text-gray-700 leading-relaxed">
      Implemented modern web technologies with focus on performance, security, 
      and user experience. Iterative design process with continuous feedback integration.
    </p>
  </div>
</div>

          </div>
        )}

        {/* Screens Tab - Enhanced Layout */}
        {activeTab === "screens" && (
          <div className="space-y-24 max-w-7xl mx-auto">
            {project.images.map((item, index) => (
              <div
                key={index}
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-6 py-2 rounded-full text-sm font-bold mb-4">
                    <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                    Screen {index + 1} of {project.images.length}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {item.heading}
                  </h2>
                  {item.subheading && (
                    <p className="text-lg text-violet-600 font-semibold">
                      {item.subheading}
                    </p>
                  )}
                </div>

                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    } group relative`}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-500 bg-white p-2 sm:p-3 md:p-4"
                      onClick={() => setSelectedImage(item.src)}
                    >
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-violet-500 to-yellow-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                      {/* Image */}
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                        <img
                          src={item.src}
                          alt={item.heading}
                          className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="text-white flex flex-col items-center gap-2 sm:gap-3">
                            <FaExpand className="text-2xl sm:text-3xl md:text-4xl" />
                            <span className="text-sm sm:text-base font-semibold">Click to expand</span>
                          </div>
                        </div>
                      </div>

                      {/* Number Badge */}
                      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl shadow-xl border-2 sm:border-4 border-white z-10">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    } space-y-6`}
                  >
                    {/* Description Card */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-gray-100 hover:border-violet-300 transition-all duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <MdOutlineTrackChanges className="text-white text-xl" />
                        </div>
                        <span>Description</span>
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    {/* Features Card */}
                    {item.features && item.features.length > 0 && (
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-violet-200 hover:border-violet-300 transition-all duration-300">
                        <h3 className="text-lg sm:text-xl font-bold text-violet-900 mb-5 flex items-center gap-2">
                          <FaCheckCircle className="text-violet-600 text-lg sm:text-xl flex-shrink-0" />
                          <span>Key Features</span>
                        </h3>
                        <ul className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-xs sm:text-sm font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Design Note Card */}
                    {item.designNote && (
                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 sm:p-6 rounded-2xl border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-300">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <FaLightbulb className="text-yellow-500 text-lg sm:text-xl flex-shrink-0 animate-pulse" />
                          <span>Design Philosophy</span>
                        </h3>
                        <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed">
                          "{item.designNote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {index < project.images.length - 1 && (
                  <div className="mt-24 flex items-center gap-4 max-w-2xl mx-auto">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                      <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                      <span>Next Screen</span>
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Project Outcomes Section */}

<div className="max-w-screen-2xl mx-auto mt-24 mb-16">
  <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>

    <div className="relative">
      <h2 className="text-3xl text-violet-800 md:text-4xl font-bold mb-8 text-center">
        Project <span className="text-yellow-500">Outcomes</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaRegSmile className="mx-auto text-5xl mb-4 text-yellow-400" />,
            title: "User-Centered Design",
            desc: "Designed with user needs and behaviors at the forefront",
            bgColor: "bg-yellow-500/10",
            hoverColor: "hover:border-yellow-500/50",
          },
          {
            icon: <FaBolt className="mx-auto text-5xl mb-4 text-blue-400" />,
            title: "High Performance",
            desc: "Optimized for speed and efficiency across all devices",
            bgColor: "bg-blue-500/10",
            hoverColor: "hover:border-blue-500/50",
          },
          {
            icon: <FaLock className="mx-auto text-5xl mb-4 text-purple-400" />,
            title: "Secure & Reliable",
            desc: "Built with security best practices and data protection",
            bgColor: "bg-purple-500/10",
            hoverColor: "hover:border-purple-500/50",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`backdrop-blur-sm p-6 rounded-2xl border border-white/10 ${item.hoverColor} ${item.bgColor} transition-all duration-300 hover:-translate-y-2 text-center`}
          >
            {item.icon}
            <h3 className="text-xl text-yellow-500 font-bold mb-3">{item.title}</h3>
            <p className="text-white/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* CTA Section */}
        <div className="max-w-screen-2xl mx-auto text-center py-16 animate-fade-in-up">
          <div className="bg-gradient-to-br from-violet-100 to-yellow-50 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interested in Working <span className="text-yellow-500">Together?</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create something amazing for your business. I'm always excited to take on 
              new challenges and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <FaArrowRight />
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full-Screen Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl w-full h-full flex items-center justify-center animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-600 transition-all duration-300 z-10 hover:scale-110 shadow-lg flex items-center gap-2 font-semibold"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="text-xl" />
              <span className="hidden sm:inline">Close</span>
            </button>

            {/* Image */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-h-full p-4">
              <img
                src={selectedImage}
                alt="Full size"
                className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium">
              Click anywhere outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
