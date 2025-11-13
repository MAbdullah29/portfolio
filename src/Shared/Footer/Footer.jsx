import React from "react";
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      color: "from-pink-500 to-purple-500",
      bg: "bg-pink-500",
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaBehance />,
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-600",
      href: "#",
      label: "Behance",
    },
    {
      icon: <FaDribbble />,
      color: "from-pink-400 to-pink-600",
      bg: "bg-pink-500",
      href: "#",
      label: "Dribbble",
    },
    {
      icon: <FaLinkedin />,
      color: "from-blue-600 to-cyan-500",
      bg: "bg-blue-700",
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      color: "from-green-400 to-green-600",
      bg: "bg-green-500",
      href: "https://wa.me/923001234567",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      color: "from-red-400 to-red-600",
      bg: "bg-red-500",
      href: "mailto:hello@mohsinamin.com",
      label: "Gmail",
    },
  ];

  return (
    <footer className="w-full border-t border-gray-300 px-8  py-8 bg-white text-black overflow-hidden">
      <div className=" mx-auto flex flex-col gap-8">
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
              href="mailto:hello@mohsinamin.com"
              className="font-semibold text-sm md:text-base hover:underline break-all"
            >
              hello@mohsinamin.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 w-full"></div>

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            MA.
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full bg-white`}
              >
                {/* Gradient Border */}
                <span
                  className={`absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr ${item.color} animate-gradient`}
                >
                  <span className="flex items-center justify-center w-full h-full bg-white rounded-full"></span>
                </span>

                {/* Colored Icon */}
                <span
                  className={`relative text-2xl ${item.bg} text-white rounded-full p-2 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 ease-in-out`}
                >
                  {item.icon}
                </span>

                {/* Glow effect */}
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-50 rounded-full blur-md bg-gradient-to-tr ${item.color} transition-opacity duration-300`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
