import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-screen w-full bg-cover bg-center text-white px-6"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white">
          Start Your Healthy Snacking Journey With Us
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white opacity-90">
          Discover delicious and nutritious snacks that fit your lifestyle.
        </p>
        <div className="mt-10 flex gap-4">
          <Link to="/recipes">
            <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              View Recipes
            </button>
          </Link>
          <Link to="/products">
            <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
