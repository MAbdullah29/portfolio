import React, { useState } from 'react';

const HumaanAICaseStudy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex justify-between items-center p-6">
          <div className="text-black font-bold text-lg">MA.</div>
          <div className="flex items-center space-x-6">
            <button className="text-sm text-gray-600 hover:text-black transition-colors">
              ← BACK TO CASES
            </button>
            <button className="text-sm text-gray-600 hover:text-black transition-colors">
              HOME
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'challenge', label: 'Challenge' },
            { id: 'ownership', label: 'Ownership' },
            { id: 'structure', label: 'Structure' },
            { id: 'wireframes', label: 'Wireframes' },
            { id: 'flows', label: 'Flows' },
            { id: 'design', label: 'Design' },
            { id: 'impact', label: 'Impact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full transition-colors ${
                activeSection === item.id ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
              title={item.label}
            />
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <section id="overview" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-black mb-6">HUMAAN-AI</h1>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                A Collaborative Learning Platform Enhanced by Contextual AI
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Human AI is a platform designed to help students and teachers collaborate in group workspaces while accessing contextual AI support. From role-based onboarding to chat threads and workspaces, I designed the system architecture, flows, and UI for a clean, scalable MVP experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UX Flow Mapping", "Product Architecture", "UI Design", "Role-Based Interactions", "Developer Handoff"].map((role, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-80 bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center">
                  <span className="text-gray-500 font-medium">[HUMAAN_AI_HERO_IMAGE]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The client came with a clear vision: create an AI-enhanced collaboration tool where students can ask questions, form groups, and get contextual support from an AI assistant. However, due to strict deadlines and early-stage constraints, we skipped traditional UX research and moved directly into product structure and interface planning.
              </p>
              
              <h3 className="text-xl font-bold mb-4">The platform needed to support:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Student-to-AI conversations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Group workspaces and chats</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">A clean UI with role-based logic and scalable flows</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[CHALLENGE_ILLUSTRATION_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[AI_WORKSPACE_PREVIEW_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Took Ownership Of */}
      <section id="ownership" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What I Took Ownership Of</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            As the lead designer, I was responsible for defining the platform's structure, crafting user flows, and designing high-fidelity UI for both student and teacher experiences. I worked closely with the client to translate their product vision into an actionable MVP — one that could scale quickly, even without early-stage research.
          </p>

          <h3 className="text-xl font-bold mb-6">Key responsibilities:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-400">
                <h4 className="font-semibold mb-2">Flow Definition</h4>
                <p className="text-gray-600 text-sm">Defined core flows for students, teachers, and AI interaction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-400">
                <h4 className="font-semibold mb-2">Role-Based Logic</h4>
                <p className="text-gray-600 text-sm">Mapped role-based onboarding and group workspace logic.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-400">
                <h4 className="font-semibold mb-2">UI Design</h4>
                <p className="text-gray-600 text-sm">Designed all high-fidelity UI screens for Human-AI.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-400">
                <h4 className="font-semibold mb-2">Design System</h4>
                <p className="text-gray-600 text-sm">Established consistent layout, spacing, and modular components.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-400">
                <h4 className="font-semibold mb-2">Developer Handoff</h4>
                <p className="text-gray-600 text-sm">Delivered developer-ready assets and annotated flows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Structure & User Flows */}
      <section id="structure" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Product Structure & User Flows</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Without a formal discovery phase, I focused on designing flows that could support clear collaboration and AI-assisted learning across different user types. The system needed to feel intuitive for students, structured for teachers, and smart enough to accommodate AI-driven conversations, all within a scalable, role-based environment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[USER_FLOW_DIAGRAM_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[SYSTEM_ARCHITECTURE_IMAGE]</span>
            </div>
          </div>

          {/* Flow Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-indigo-500 rounded"></div>
              </div>
              <h3 className="font-bold mb-2">Student Flow</h3>
              <p className="text-gray-600 text-sm">Intuitive navigation for learning and collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
              </div>
              <h3 className="font-bold mb-2">Teacher Flow</h3>
              <p className="text-gray-600 text-sm">Structured interface for managing and guiding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="font-bold mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">Contextual assistance throughout the platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes & Design Direction */}
      <section id="wireframes" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Wireframes & Design Direction</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Once flows were mapped and roles clarified, I translated the system logic into mid-fidelity wireframes. This step helped align the client on layout hierarchy, navigation logic, and the dynamic behavior of group-based interactions before committing to visual styling.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[WIREFRAME_LOGIN_IMAGE]</span>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[WIREFRAME_ONBOARDING_IMAGE]</span>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[WIREFRAME_DASHBOARD_IMAGE]</span>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Examples */}
      <section id="flows" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Detailed User Flows</h2>
          
          {/* Onboarding Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Onboarding</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[LOGIN_SCREEN_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[PROFILE_SETUP_IMAGE]</span>
              </div>
            </div>
          </div>

          {/* Landing & AI Assistance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Landing & AI Assistance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[MAIN_DASHBOARD_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[AI_CHAT_INTERFACE_IMAGE]</span>
              </div>
            </div>
          </div>

          {/* Managed Workspace Groups */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Managed Workspace Groups</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[WORKSPACE_LIST_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[CREATE_WORKSPACE_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[WORKSPACE_SETTINGS_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design System */}
      <section id="design" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Design System & Components</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            The final design system was built with scalability in mind, featuring consistent components, clear typography hierarchy, and a color palette that supports both learning focus and AI interaction clarity.
          </p>

          {/* Design System Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Core Components</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[BUTTON_COMPONENTS_IMAGE]</span>
                </div>
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[INPUT_COMPONENTS_IMAGE]</span>
                </div>
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[CARD_COMPONENTS_IMAGE]</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Color & Typography</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[COLOR_PALETTE_IMAGE]</span>
                </div>
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[TYPOGRAPHY_SCALE_IMAGE]</span>
                </div>
                <div className="bg-gray-100 h-16 rounded flex items-center justify-center">
                  <span className="text-gray-500">[ICON_SYSTEM_IMAGE]</span>
                </div>
              </div>
            </div>
          </div>

          {/* High-Fidelity Screens */}
          <h3 className="text-2xl font-bold mb-8">High-Fidelity Interface Screens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_DASHBOARD_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_CHAT_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_WORKSPACE_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_SETTINGS_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_PROFILE_IMAGE]</span>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[HI_FI_AI_INTERFACE_IMAGE]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Showcase */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Platform Features</h2>
          
          <div className="space-y-16">
            {/* Feature 1: AI-Powered Learning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contextual AI Assistant</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Students can ask questions and receive contextual, educational responses from the AI assistant. The system provides sources, related topics, and follows up with relevant learning materials.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time question answering</li>
                  <li>• Source attribution and verification</li>
                  <li>• Contextual follow-up suggestions</li>
                  <li>• Learning path recommendations</li>
                </ul>
              </div>
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[AI_CONVERSATION_FEATURE_IMAGE]</span>
              </div>
            </div>

            {/* Feature 2: Collaborative Workspaces */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">[WORKSPACE_COLLABORATION_IMAGE]</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Collaborative Learning Spaces</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Create and manage group workspaces where students and teachers can collaborate, share resources, and engage in structured learning activities with AI assistance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Role-based access control</li>
                  <li>• Real-time collaboration tools</li>
                  <li>• Workspace analytics and insights</li>
                  <li>• Seamless member management</li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Analytics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Learning Analytics</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Track learning progress, collaboration patterns, and AI interaction insights to help both students and educators understand learning effectiveness and areas for improvement.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal learning insights</li>
                  <li>• Collaboration metrics</li>
                  <li>• AI interaction analysis</li>
                  <li>• Progress tracking over time</li>
                </ul>
              </div>
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[ANALYTICS_DASHBOARD_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Testimonial */}
      <section id="impact" className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Project Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            The HUMAAN-AI platform successfully delivered a scalable MVP that bridges the gap between traditional learning and AI-enhanced education. The role-based architecture and intuitive interface design enabled quick user adoption and provided a solid foundation for future feature development.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
              "I am highly satisfied with both the quality of work and the timely delivery. He appreciated how we consistently put ourselves in the users' shoes ensuring every design decision was grounded in real user needs and context."
            </blockquote>
            <div>
              <p className="font-bold text-lg">Jie</p>
              <p className="text-indigo-600">Head of Product</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="font-bold mb-2">User Roles</h3>
              <p className="text-gray-600 text-sm">Successfully designed for students, teachers, and AI interactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">15+</span>
              </div>
              <h3 className="font-bold mb-2">Interface Screens</h3>
              <p className="text-gray-600 text-sm">Comprehensive UI design covering all user journeys</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">MVP</span>
              </div>
              <h3 className="font-bold mb-2">Rapid Deployment</h3>
              <p className="text-gray-600 text-sm">Delivered scalable MVP within tight deadline constraints</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Next Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ARZEPAK', category: 'Real Estate Platform', image: '[ARZEPAK_PREVIEW]' },
              { title: 'PING', category: 'Home Services Platform', image: '[PING_PREVIEW]' },
              { title: 'DEALCART', category: 'E-Commerce Platform', image: '[DEALCART_PREVIEW]' }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{project.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Have a bold idea?</h2>
            <p className="text-xl mb-8">Let's bring it to life.</p>
            <div>
              <p className="text-gray-400 mb-2">Start the conversation</p>
              <p className="text-xl font-bold">hello@mohsinamin.com</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <div className="text-white font-bold text-lg">MA.</div>
            <div className="flex gap-6 text-sm">
              <span className="hover:text-gray-300 cursor-pointer">INSTAGRAM</span>
              <span className="hover:text-gray-300 cursor-pointer">BEHANCE</span>
              <span className="hover:text-gray-300 cursor-pointer">DRIBBBLE</span>
              <span className="hover:text-gray-300 cursor-pointer">LINKEDIN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HumaanAICaseStudy;