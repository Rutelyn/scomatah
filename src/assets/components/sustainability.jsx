import { useState, useEffect } from "react";
import tainIce3 from "../images/tainIce3.jpg";
import tainIceStraw3 from "../images/tainIceStraw3.jpg";
import tainIceVan3 from "../images/tainIceVan3.jpg";

const images = [tainIce3, tainIceStraw3, tainIceVan3];

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

      <div className="absolute inset-0 flex flex-col place-items-end m-12 text-white px-6 bg-opacity-20">
        <h1 className="text-7xl font-bold mb-4 animate-fade-in">Sustainability</h1>
        <p className="text-lg mb-2 animate-fade-in-delay">Focus on reducing waste in the plantain supply chain.</p>
        <p className="text-lg animate-fade-in-delay-2">Community programs supporting local farmers.</p>
      </div>
    </div>
  );
};

export default Sustainability;
