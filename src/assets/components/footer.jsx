import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
          
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white">Scomatah Enterprise</h2>
            <p className="mt-2 text-sm">
            We are passionate about promoting health and sustainability through our plantain-based products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/sustainability" className="hover:text-white">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold text-white">Contact Information</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="text-teal-400 w-5 h-5" />
                +233240042791
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-teal-400 w-5 h-5" />
                Schomatah.guy2@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-teal-400 w-5 h-5" />
                Agogo, Asante Akim North, Ghana
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <Link to="/" className="text-gray-400 hover:text-white text-xl">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white text-xl">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white text-xl">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 pt-6">
          © 2025 Scomatah Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
