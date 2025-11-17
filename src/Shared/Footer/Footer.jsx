import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowUp } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const Footer = () => {
const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/mabdullahzafar29/",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Mabdullah29",
    label: "GitHub",
    color: "hover:bg-gray-800",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:abdullahzafar17@gmail.com",
    label: "Gmail",
    color: "hover:bg-red-600",
  },
  {
    icon: <FaSquareUpwork />,
    href: "https://www.upwork.com/freelancers/~018577915e2a47387a?mp_source=share",
    label: "Upwork",
    color: "hover:bg-green-600",
  },
];


  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact-us" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-gray-300 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-12 md:py-16">
        {/* ===== Top Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 animate-fade-in-up">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
              Have a bold idea?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Let's bring it to{" "}
              <span className="text-yellow-500">
                life.
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="flex-1 text-left md:text-right animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
              Start the conversation
            </p>
            <a
              href="mailto:abdullahzafar17@gmail.com"
              className="inline-flex items-center gap-2 font-semibold text-violet-800 text-base md:text-lg hover:text-yellow-500 transition-colors duration-300 group"
            >
              <FaEnvelope className="group-hover:scale-125 transition-transform duration-300" />
              <span className="hover:underline break-all">
                abdullahzafar17@gmail.com
              </span>
            </a>
            <p className="text-gray-600 text-sm mt-2">
              I typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 w-full mb-12"></div>

        {/* ===== Middle Section - Quick Links & Social ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-yellow-500">
              MA.
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full-Stack Developer & UI/UX Designer specializing in creating
              exceptional digital experiences with the MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-violet-800 hover:font-semibold transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-yellow-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`group relative w-11 h-11 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-700 ${item.color} hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl text-xl`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
                    {item.icon}
                  </span>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 w-full mb-8"></div>

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center md:text-left">
            <p>
              © {currentYear}{" "}
              <span className="font-semibold text-gray-900">
                Muhammad Abdullah
              </span>
              . All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with React, Tailwind CSS & ❤️
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex gap-2 bg-black text-yellow-500 justify-center items-center px-8 py-4 border-2 border-black rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300 animate-bounce" />
          </button>
        </div>

        {/* Extra Info */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-xs text-gray-500">
            Available for freelance opportunities • Remote work • Let's create
            something amazing together
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
