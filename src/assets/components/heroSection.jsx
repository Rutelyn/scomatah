import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import grittyOPouch3 from "../images/grittyOPouch3.jpg";
import grittyPPouch3 from "../images/grittyPPouch3.jpg";
import tainIce3 from "../images/tainIce3.jpg";
import tainIceStraw3 from "../images/tainIceStraw3.jpg";
import tainIceVan3 from "../images/tainIceVan3.jpg";

const images = [grittyOPouch3, grittyPPouch3, tainIce3, tainIceStraw3, tainIceVan3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-100"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Start Your Healthy Snacking Journey With Us
        </h2>
        <div className="mt-10 flex gap-4">
          <Link to="/recipes">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              View Recipes
            </button>
          </Link>
          <Link to="/products">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
