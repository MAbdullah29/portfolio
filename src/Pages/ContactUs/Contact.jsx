import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImage from "../../assets/abdullah.png";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FaSquareUpwork, FaUpwork } from "react-icons/fa6";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // EmailJS Configuration
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

    // Template params that will be sent to your email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
      to_email: "abdullahzafar17@gmail.com", // Your email
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again or email me directly.",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col items-center">
      {/* Hero Section */}
      <div className="max-w-6xl w-full text-center py-12 animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Let's Build Something{" "}
          <span className="text-yellow-500">Amazing</span> Together
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be 
          part of your vision. Whether it's a personal project, a startup, or an enterprise 
          solution, let's turn it into reality using cutting-edge MERN stack technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for freelance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Remote collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
            <span>Quick response time</span>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full shadow-2xl overflow-hidden rounded-3xl bg-white animate-fade-in-up mb-12">
        {/* Left Side - Image & Info */}
        <div className="lg:w-1/2 w-full h-full bg-gradient-to-br from-violet-900 via-violet-800 to-black p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="relative z-10">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Get In Touch
  </h2>
  <p className="text-gray-300 mb-8">
    Fill out the form and I'll respond within 24 hours. You can also reach 
    me directly through any of the channels below.
  </p>

  {/* Contact Info Cards */}
  <div className="space-y-4 mb-8">
    <a
      href="mailto:abdullahzafar17@gmail.com"
      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="bg-yellow-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
        <FaEnvelope className="text-white text-xl" />
      </div>
      <div>
        <p className="text-white font-semibold">Email</p>
        <p className="text-gray-300 text-sm">abdullahzafar17@gmail.com</p>
      </div>
    </a>

    <a
      href="https://www.upwork.com/freelancers/~018577915e2a47387a?mp_source=share"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
        <FaUpwork className="text-white text-xl" />
      </div>
      <div>
        <p className="text-white font-semibold">Upwork</p>
        <p className="text-gray-300 text-sm">Hire me on Upwork</p>
      </div>
    </a>
  </div>

  {/* Social Links */}
  <div>
    <p className="text-white font-semibold mb-4">Connect on Social</p>
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/mabdullahzafar29/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 backdrop-blur-sm p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-white text-2xl" />
      </a>

      <a
        href="https://github.com/Mabdullah29"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black backdrop-blur-sm p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
      >
        <FaGithub className="text-white text-2xl" />
      </a>

    
    </div>
  </div>
</div>


          {/* Profile Image */}
          <div className="relative z-10 mt-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src={ContactImage}
                alt="Muhammad Abdullah"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            Send Me a Message
          </h2>
          <p className="text-gray-600 mb-6">
            I'll respond as soon as possible. All fields are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                required
              />
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                required
              />
            </div>

            {/* Subject Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject (Optional)
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
              />
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project, ideas, or how I can help..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-gray-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-600 to-violet-800 text-white py-4 px-6 rounded-xl font-semibold hover:from-violet-700 hover:to-violet-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelope className="text-lg" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {status.message && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-center gap-3 animate-fade-in-up ${
                status.type === "success"
                  ? "bg-green-100 text-green-800 border-2 border-green-200"
                  : "bg-red-100 text-red-800 border-2 border-red-200"
              }`}
            >
              {status.type === "success" ? (
                <FaCheckCircle className="text-2xl flex-shrink-0" />
              ) : (
                <FaExclamationCircle className="text-2xl flex-shrink-0" />
              )}
              <p className="font-medium">{status.message}</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100">
          <div className="bg-violet-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">💼</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Professional Services
          </h3>
          <p className="text-gray-600 text-sm">
            Full-stack development, UI/UX design, and consulting services for businesses 
            of all sizes.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100" style={{animationDelay: '0.1s'}}>
          <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
          <p className="text-gray-600 text-sm">
            I typically respond within 24 hours. For urgent matters, please mention it in 
            your message.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100" style={{animationDelay: '0.2s'}}>
          <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🌍</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
          <p className="text-gray-600 text-sm">
            Working with clients worldwide. Remote-friendly with flexible scheduling across 
            time zones.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-xl mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What's your typical response time?",
              a: "I respond to all inquiries within 24 hours. For project proposals, I'll provide a detailed response within 48 hours.",
            },
            {
              q: "What technologies do you specialize in?",
              a: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with Next.js, TypeScript, Tailwind CSS, and various cloud services.",
            },
            {
              q: "Do you work with international clients?",
              a: "Absolutely! I work with clients from around the world and am comfortable with remote collaboration across different time zones.",
            },
            {
              q: "What's your project process?",
              a: "I follow a structured process: Discovery → Design → Development → Delivery. Each phase includes regular communication and feedback loops.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Instructions */}
      <div className="max-w-4xl w-full bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl mb-12">
        <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
          <FaExclamationCircle />
          EmailJS Setup Required
        </h3>
        <p className="text-yellow-800 text-sm mb-4">
          To enable the contact form, please set up EmailJS:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-yellow-800 text-sm">
          <li>Sign up at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">emailjs.com</a></li>
          <li>Create an email service (Gmail, Outlook, etc.)</li>
          <li>Create an email template</li>
          <li>Copy your Service ID, Template ID, and Public Key</li>
          <li>Replace the placeholder values in the code (lines 24-26)</li>
          <li>Install EmailJS: <code className="bg-yellow-100 px-2 py-1 rounded">npm install @emailjs/browser</code></li>
        </ol>
      </div>
    </div>
  );
};

export default ContactUs;
