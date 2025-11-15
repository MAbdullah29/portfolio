import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:hello@mohsinamin.com",
      label: "Gmail",
    },
    {
      icon: <FaSquareUpwork />,
      href: "https://www.upwork.com/freelancers/~yourprofile",
      label: "Upwork",
    },
  ];

  return (
    <footer className="w-full border-t border-gray-300 px-6  py-8 bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        {/* ===== Top Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Have a bold idea?
            </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Let’s bring it to life.
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Start the conversation
            </p>
            <a
              href="mailto:abdullahzafar17@gmail.com"
              className="font-semibold text-sm md:text-base hover:underline break-all"
            >
              abdullahzafar17@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 w-full"></div>

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            MA.
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 text-black 
                 hover:bg-black hover:text-yellow-500 transition-all duration-300 ease-in-out
                 transform hover:scale-110 hover:-rotate-6 hover:shadow-lg text-2xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
