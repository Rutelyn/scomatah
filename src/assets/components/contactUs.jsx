import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12 lg:px-20">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-600">Get in Touch</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Let's collaborate and create something amazing together.
        </p>
      </div>

      {/* Contact Details & Partnership Inquiry */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
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

        {/* Partnership Inquiry */}
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

      {/* Social Media Links */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold text-teal-600">Connect With Us</h2>
        <p className="text-gray-700 mt-2">Follow us for updates and engagement.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link to="/" className="text-gray-600 hover:text-teal-500 transition">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link to="/" className="text-gray-600 hover:text-teal-500 transition">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link to="/" className="text-gray-600 hover:text-teal-500 transition">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
