import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const ContactUs = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store form data in localStorage or context if needed
    navigate("/thankyou"); // Redirect to Thank You page
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-600">Get in Touch</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Let's collaborate and create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="text-teal-500 w-5 h-5" />
              <span>+233 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-teal-500 w-5 h-5" />
              <span>scomatahenterprise@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-teal-500 w-5 h-5" />
              <span>Accra, Ghana</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Partner With Us</h2>
          <p className="text-gray-700">
            We welcome partnerships with local businesses and distributors. Let's work together
            to bring high-quality, sustainable products to more people.
          </p>
          <p className="text-gray-700 mt-2">
            Reach out via email or follow us on social media to start a conversation.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-teal-600 mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
          <select name="queryType" value={formData.queryType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md">
            <option>General Inquiry</option>
            <option>Partnership</option>
            <option>Product Inquiry</option>
            <option>Support</option>
          </select>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md h-28" required></textarea>
          <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
