import { useState } from "react";

const ProductsCard = ({ images = [], title }) => {
  const [hovered, setHovered] = useState(false);

  const displayImage = images.length > 1 ? (hovered ? images[1] : images[0]) : "grittyOPouch1.jpg";

  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-4 w-64 text-center transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={displayImage}
          alt={title || "Product Image"}
          className="w-full h-full object-cover rounded-lg transition-all duration-300"
        />
      </div>
      <p className="font-serif font-bold text-lg text-black mt-2">{title}</p>
    </div>
  );
};

export default ProductsCard;
