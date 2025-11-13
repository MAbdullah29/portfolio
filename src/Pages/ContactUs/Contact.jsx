import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImage from "../../assets/abdullah.png"; // Replace with your image path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setSuccess("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
        Let’s Build Something Amazing Together
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        I’m always open to discussing new projects, ideas, or opportunities. 
        Whether it’s a personal project, a startup, or a business idea, I’ll help 
        you turn it into reality using the power of the MERN stack.
      </p>

      {/* Side-by-Side Contact Section */}
   <div className="flex flex-col md:flex-row max-w-6xl w-full shadow-lg overflow-hidden">
  
  <div className="md:w-1/2 w-full h-full">
    <img 
      src={ContactImage} 
      alt="Contact Us" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="md:w-1/2 w-full bg-white p-8 flex flex-col justify-between">
    <div>
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-700 mb-6">
        Have a project in mind? Fill out the form below and I’ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject (Optional)"
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    {success && <p className="mt-4 text-center text-green-600">{success}</p>}
  </div>
</div>


    </div>
  );
};

export default ContactUs;
