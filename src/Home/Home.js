import React, { useState } from 'react';
import projects from '../projectDetails';
import arzepak from '../assets/arzepak-thumb.png';
import ping from '../assets/ping-thumb.png';
import favvo from '../assets/fayvo-thumb.png';
import dealcart from '../assets/dealcart-thumb.png';
import engagedScholar from '../assets/engaged-scholar-thumb.png';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (currentPage === 'cases') {
    return (
      <div className="min-h-screen bg-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <div className="text-black font-bold text-lg">MA.</div>
          <button
            onClick={() => setCurrentPage('home')}
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            ← BACK TO HOME
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative px-6 py-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                    {/* Main Project Card */}
                    <div className="lg:col-span-12">
                      <div className="text-center mb-4">
                        <h1 className="text-2xl font-black mb-2">{project.title}</h1>
                        <p className="text-sm text-gray-600 mb-1">{project.subtitle}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{project.category}</p>
                      </div>
                      <div
                        className="mb-4 cursor-pointer flex flex-col items-center"
                        onClick={() => {
                          if (project.fullCase) {
                            navigate(`/case-study/${project.slug}`);
                          }
                        }}
                      >
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-1/2 h-auto object-cover rounded shadow mb-4"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-black' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Project Navigation */}
        <div className="px-6 mb-8">
          <div className="flex justify-center space-x-8 flex-wrap">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-sm font-medium transition-colors ${currentSlide === index
                  ? 'text-black font-bold'
                  : 'text-gray-500 hover:text-black'
                  }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Homepage
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="text-black font-bold">MA.</div>
        <div className="flex gap-1">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 pb-12">
        <div className="text-sm text-gray-600 mb-8">
          HELLO, I AM MITCHELL M. I AM
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-7xl font-black leading-tight">
              CRAFTING SEAMLESS,<br />
              HUMAN-CENTERED<br />
              EXPERIENCES SINCE<br />
              <span className="text-blue-600">2016</span>
            </h1>
          </div>

          <div className="max-w-xs text-right">
            <div className="w-12 h-12 bg-gray-500 mb-4 ml-auto"></div>
            <p className="text-sm text-gray-600">
              I solve business challenges with strategic product & UX design.
              Optimizing customer journeys through data-driven insights for
              measurable digital growth.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end mt-12">
          <div className="text-sm">
            <span className="text-gray-600">CONTACT FOR US</span><br />
            <span className="font-semibold">HELLO@MITCHELL.COM</span>
          </div>
          <div className="text-sm text-right">
            <span className="text-gray-600">CLIENT CASE</span><br />
            <span className="font-semibold">SPRINT DIESEL</span>
          </div>
        </div>
      </div>

      {/* Behind the Design Section */}
      <div className="px-6 py-8 border-t border-dashed border-gray-400">
        <h2 className="text-lg font-bold mb-8">BEHIND THE DESIGN</h2>

        <div className="max-w-2xl">
          <h3 className="text-xl font-bold mb-6">
            CRAFTING PURPOSEFUL EXPERIENCES:<br />
            WHERE HUMAN UNDERSTANDING FUELS<br />
            DIGITAL INNOVATION
          </h3>

          <p className="text-sm text-gray-600 mb-8">
            With over 8 years of experience, I lead product design for SaaS, Real Estate, Enterprise
            web applications, healthcare, AI tech and many more. I transform complex challenges
            through user-centered design thinking, robust research methodologies, and seamless
            cross-functional collaboration. My approach combines deep user empathy with business
            acumen to create research, strategic design, and empathy to deliver impactful experiences.
          </p>

          <button className="border border-black px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors">
            DOWNLOAD MY RESUME →
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="px-6 py-12">
        <h2 className="text-lg font-bold mb-8">SELECTED CASES</h2>

        {/* Project Card */}
        {[
          {
            title: "ARZEPAK",
            image: arzepak,
            categories: "REAL ESTATE | PROPTECH | RENTAL & LEASING",
            services: "UX STRATEGY | DESIGN SYSTEM | INTERACTION DESIGN",
            year: "2024",
          },
          {
            title: "PING",
            image: ping,
            categories: "HOME SERVICES | CONSUMER TECH | CONSUMER GOODS",
            services: "SERVICE DESIGN & PRODUCT STRATEGY | MOBILE & APP",
            year: "2024",
          },
          {
            title: "FAVVO",
            image: favvo,
            categories: "SOCIAL MEDIA | LIFESTYLE & ENTERTAINMENT",
            services: "USER ENGAGEMENT & RETENTION | SOCIAL UX",
            year: "2023",
          },
          {
            title: "DEALCART",
            image: dealcart,
            categories: "E-COMMERCE | RETAIL | CONSUMER GOODS",
            services: "UX STRATEGY | DESIGN SYSTEMS | MOBILE UX APPROACH",
            year: "2023",
          },
          {
            title: "ENGAGED SCHOLAR",
            image: engagedScholar,
            categories: "EDTECH | RESEARCH & LEARNING | UX",
            services: "UX AUDIT REDESIGN | UX-POWERED CONTENT GAMIFICATION",
            year: "2023",
          },
        ].map((project, index) => (
          <div key={index} className="bg-white px-8 py-8 border-b w-full group cursor-pointer hover:bg-gray-100 transition-colors rounded">
            <div className="flex items-center gap-6 w-full">

              {/* Left: Project Title */}
              <div className="w-[100px] flex-shrink-0">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
              </div>

              {/* Image with hover effect and 10px right spacing */}
              <div className="w-[280px] flex-shrink-0 overflow-hidden mr-[80px]" onClick={() => setCurrentPage('cases')}>
                <img
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-[160px] object-cover rounded-md shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Center + Right: Descriptions separated and spaced from Year */}
              <div className="flex flex-1 items-center text-sm font-semibold text-black tracking-wide">
                <div className="flex-1 whitespace-nowrap pr-4">{project.categories}</div>
                <div className="flex-1 whitespace-nowrap px-4">{project.services}</div>
                <div className="whitespace-nowrap text-md font-bold pl-4">{project.year}</div>
              </div>

            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-end">
          <button
            className="border border-black px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            onClick={() => setCurrentPage('cases')}
          >
            VIEW ALL CASES →
          </button>
        </div>
      </div>


      {/* Skills and Awards */}
      <div className="w-full px-6 py-12 grid grid-cols-2 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-lg font-bold mb-8">TOOLBOX FIELDS</h2>
          <ul className="space-y-3 text-sm">
            <li className="font-semibold">HUMAN-CENTERED PRODUCT DESIGN</li>
            <li className="font-semibold">END-TO-END UX DESIGN & THINKING</li>
            <li className="font-semibold">STRATEGIC BRAND & DESIGN SYSTEMS</li>
            <li className="font-semibold">CROSS-PLATFORM INTERFACE DESIGN</li>
            <li className="font-semibold">DESIGN LEADERSHIP & MENTORSHIP</li>
            <li className="font-semibold">GLOBAL INSIGHT, TAILORED IMPACT</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-lg font-bold mb-8">AWARDS & RECOGNITIONS</h2>
          <ul className="space-y-3 text-sm">
            <li className="font-semibold">NATIONAL DESIGN CONFERENCE</li>
            <li className="font-semibold">D FOR DIGITAL</li>
            <li className="font-semibold">DESIGN JURY BOARD</li>
          </ul>
        </div>
      </div>


      {/* About Section */}
      <div className="px-6 py-8 border-t border-dashed border-gray-400">
        <h2 className="text-sm text-gray-600 mb-4">BRANDS I'VE EMPOWERED THROUGH DESIGN</h2>

        <div className="mb-12">
          <p className="text-lg font-bold leading-relaxed">
            THROUGH 8+ YEARS OF STRATEGIC, COLLABORATIVE DESIGN, I'VE
            HELPED STARTUPS AND GLOBAL TEAMS ACROSS HEALTHCARE, AI,
            REAL ESTATE, AND SAAS CREATE THOUGHTFUL EXPERIENCES THAT
            RESONATE WITH USERS AND ELEVATE BRANDS.
          </p>
        </div>

        {/* Brand Tags */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-12">
          <span>GACHES</span>
          <span>DIGIAID</span>
          <span>ORIGAMI</span>
          <span>SEQUAL</span>
          <span>GRANNA</span>
          <span>LIFTKIT</span>
          <span>SPACERS</span>
          <span>DIGIAID</span>
          <span>ORIGAMI</span>
          <span>DEALCART</span>
          <span>DUKAN</span>
          <span>WWF</span>
          <span>FAVVO</span>
          <span>MEDICA</span>
          <span>RAYT</span>
          <span>ARZEPAK</span>
          <span>DUKAN</span>
          <span>WWF</span>
          <span>FAVVO</span>
          <span>MEDICA</span>
          <span>BRIC</span>
          <span>PAY</span>
          <span>DELUXE</span>
          <span>PUFFS</span>
          <span>LIVE IT</span>
          <span>PING</span>
          <span>PIVAAS</span>
          <span>CRYPTIN</span>
          <span>POSTPAY</span>
          <span>DELUXE</span>
          <span>PUFFS</span>
          <span>LIVE IT</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600 mb-2">HAVE A BOLD IDEA?</p>
          <p className="text-lg font-bold">LET'S BRING IT TO LIFE.</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">START THE CONVERSATION</p>
          <p className="text-lg font-bold">HELLO@MOHSINAMIN.COM</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-6 py-4 border-t border-gray-400 flex justify-between items-center">
        <div className="text-black font-bold">MA.</div>
        <div className="flex gap-6 text-sm">
          <span>INSTAGRAM</span>
          <span>BEHANCE</span>
          <span>DRIBBBLE</span>
          <span>LINKEDIN</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;