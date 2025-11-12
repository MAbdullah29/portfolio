import React, { useState } from 'react';

const PingCaseStudy = () => {
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
            { id: 'problem', label: 'Problem' },
            { id: 'vision', label: 'Vision' },
            { id: 'research', label: 'Research' },
            { id: 'insights', label: 'Insights' },
            { id: 'solution', label: 'Solution' },
            { id: 'design', label: 'Design' },
            { id: 'impact', label: 'Impact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full transition-colors ${
                activeSection === item.id ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              title={item.label}
            />
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <section id="overview" className="pt-24 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-4">HASSLE-FREE LIFESTYLE</div>
              <h1 className="text-5xl font-black mb-6">PING</h1>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                A Mobile-First Platform for Home Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Built trust between users and handymen through clear flows, verified profiles, and a frictionless booking experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UX Strategy", "User Flows", "Mobile-first UI Design", "Design System", "Developer Handoff"].map((role, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gray-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <span className="text-gray-500 font-medium">[PING_HERO_MOBILE_IMAGE]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What We Were Solving?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                In local service marketplaces, trust and transparency are broken. Consumers often feel unsure about who's coming into their home, while handymen struggle to find consistent, credible work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Existing platforms lacked clear booking flows, upfront pricing, and service accountability — creating hesitation on both sides. Ping set out to simplify that experience by building a trust-first platform for consumers and independent service providers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[PROBLEM_ILLUSTRATION_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[SERVICE_CATEGORIES_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Vision */}
      <section id="vision" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">The Product Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            The core objective was to design a platform that helps users confidently book trusted service providers while giving handymen a reliable stream of work. Our success would be measured not only by usability but by trust, conversion, and consistency.
          </p>
          <h3 className="text-xl font-bold mb-6">We focused on three key outcomes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <h4 className="font-bold mb-3">Build Trust</h4>
              <p className="text-gray-600 text-sm">Through verified profiles, transparent pricing, and a simple review system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <h4 className="font-bold mb-3">Reduce Friction</h4>
              <p className="text-gray-600 text-sm">In the booking process to drive conversions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <h4 className="font-bold mb-3">Provide Scale</h4>
              <p className="text-gray-600 text-sm">Give handymen a scalable, efficient way to receive and manage service requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section id="research" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Identifying Gaps in the Market</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Weaknesses</th>
                  <th className="px-6 py-4 text-left font-semibold">User Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">MAHIR</td>
                  <td className="px-6 py-4 text-gray-600">No upfront pricing, generic service descriptions</td>
                  <td className="px-6 py-4 text-red-600">Low trust and high bounce rates</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Urban Company</td>
                  <td className="px-6 py-4 text-gray-600">Premium pricing, inconsistent local availability</td>
                  <td className="px-6 py-4 text-red-600">Users abandon before booking</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Karigar</td>
                  <td className="px-6 py-4 text-gray-600">Poor user interface, lack of user reviews</td>
                  <td className="px-6 py-4 text-red-600">Users hesitate to book unknown providers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Super Tasker</td>
                  <td className="px-6 py-4 text-gray-600">Outdated workflows, lack of verified professionals</td>
                  <td className="px-6 py-4 text-red-600">Users drop off before task confirmation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section id="insights" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What We Learned from Users</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Ping targets urban consumers aged 25–45 who seek quick, reliable home services, and handymen aged 22–50 looking for steady income and flexible work. With 5–7 million potential users and 2–3 million vendors across Pakistan, Ping connects demand with untapped supply in the local service market.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consumer Insights */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-800">Key Insights from Users (Consumers)</h3>
              <div className="space-y-4">
                {[
                  "I don't know who's coming to my house. There's no real trust in the system.",
                  "Sometimes they don't even show up, and I have no way to report it.",
                  "Prices are vague and I don't want to negotiate every time.",
                  "I'd rather use WhatsApp because at least I can talk to someone directly."
                ].map((quote, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-800 italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Insights */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-800">Key Insights from Providers</h3>
              <div className="space-y-4">
                {[
                  "We don't get real jobs, just random messages that go nowhere.",
                  "There's no proper way to show my skills or build a profile.",
                  "Platforms take a cut but offer no real support or visibility.",
                  "I get asked to do things that are not in my skill set."
                ].map((quote, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <p className="text-orange-800 italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
            <p className="text-yellow-800 font-medium text-center">
              These conversations highlighted one core truth: both sides lacked trust, structure, and consistency. Our design had to rebuild the service relationship, not just digitize it.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solution" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Turning Research into Action!</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Once we understood the recurring pain points on both sides of the service platform, we translated those into clear UX priorities. Each feature in Ping was grounded in either trust-building, friction-reduction, or value-clarity.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">User Pain Point</th>
                  <th className="px-6 py-4 text-left font-semibold">UX Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-red-600">"I don't trust who I'm booking."</td>
                  <td className="px-6 py-4 text-green-600">Verified handyman profiles with clear ratings & badges</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-red-600">"Prices are always unclear."</td>
                  <td className="px-6 py-4 text-green-600">Upfront pricing per service category before booking</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-red-600">"They sometimes don't show up or cancel last minute."</td>
                  <td className="px-6 py-4 text-green-600">Real-time tracking and accountability system</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-red-600">"I get random requests I can't handle." (Handyman)</td>
                  <td className="px-6 py-4 text-green-600">Customizable service offerings and availability settings</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-red-600">"I have no way to build credibility." (Handyman)</td>
                  <td className="px-6 py-4 text-green-600">Profile with completed jobs, ratings, and skill tags</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Flows & Wireframes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">User Flows & Wireframes</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Based on our insights, we mapped out user journeys for both consumers and service providers. Our goal was to reduce friction, set clearer expectations, and simplify the entire interaction, from discovery to service completion.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[USER_FLOW_WIREFRAMES_IMAGE]</span>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[BOOKING_FLOW_IMAGE]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final UI & Visual System */}
      <section id="design" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Final UI & Visual System</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            The UI was built in Figma with components tied to a flexible, scalable design system. Accessibility and tap targets were considered throughout, with mobile as the primary use case.
          </p>

          {/* Onboarding Screens */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Onboarding Screens</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 h-96 rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-gray-500">[ONBOARDING_1_IMAGE]</span>
                </div>
                <h4 className="font-bold mb-2">Affordable, reliable handymen nearby. Just a tap away!</h4>
                <p className="text-sm text-gray-600">Just few clicks and you will get the best services that will make your life easy.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 h-96 rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-gray-500">[ONBOARDING_2_IMAGE]</span>
                </div>
                <h4 className="font-bold mb-2">Verified, trustworthy pros. Peace of mind!</h4>
                <p className="text-sm text-gray-600">Just few clicks and you will get the best services that will make your life easy.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 h-96 rounded-3xl flex items-center justify-center mb-4">
                  <span className="text-gray-500">[ONBOARDING_3_IMAGE]</span>
                </div>
                <h4 className="font-bold mb-2">Seamless booking and payment. Convenient for you!</h4>
                <p className="text-sm text-gray-600">Just few clicks and you will get the best services that will make your life easy.</p>
              </div>
            </div>
          </div>

          {/* Service Booking */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Service Booking</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[HOME_SCREEN_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[SERVICE_CATEGORY_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[SERVICE_DETAIL_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[CART_SCREEN_IMAGE]</span>
              </div>
            </div>
          </div>

          {/* Booking to Feedback */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Booking to Feedback</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[TRACKING_SCREEN_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[BOOKINGS_LIST_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[PAYMENT_SCREEN_IMAGE]</span>
              </div>
              <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">[RATING_SCREEN_IMAGE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Reflection */}
      <section id="impact" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Impact & Reflection</h2>
          <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
            The biggest success of Ping wasn't just launching a working platform — it was creating a more confident and structured experience for users and handymen alike. The platform quickly built trust through clear booking steps, verified profiles, and smooth handoffs.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
              "Mohsin's professionalism and discipline enabled us to have a fruitful collaboration with Ping team, despite time and budget constraints. We were able to create a product that met the client's goals and expectations and continues to be used and evolved to this day."
            </blockquote>
            <div>
              <p className="font-bold text-lg">Fazel Rehman</p>
              <p className="text-blue-600">Head of Product at Deal Cart</p>
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
              { title: 'DEALCART', category: 'E-Commerce Platform', image: '[DEALCART_PREVIEW]' },
              { title: 'HUMAAN-AI', category: 'AI Assistant Platform', image: '[HUMAAN_PREVIEW]' }
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

export default PingCaseStudy;