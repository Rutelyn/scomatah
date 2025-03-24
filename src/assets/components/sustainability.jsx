import { useState, useEffect } from "react";
import grittyPouch3 from "../images/grittyPPouch3.jpg";
import grittyAlt1 from "../images/grittyAlt1.jpg";
import grittyAlt2 from "../images/grittyAlt2.jpg";

const images = [grittyPouch3, grittyAlt1, grittyAlt2];

const Sustainability = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Sustainability"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-90"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Sustainability</h1>
        <p className="text-lg mb-2 animate-fade-in-delay">Focus on reducing waste in the plantain supply chain.</p>
        <p className="text-lg animate-fade-in-delay-2">Community programs supporting local farmers.</p>
      </div>
    </div>
  );
};

export default Sustainability;
