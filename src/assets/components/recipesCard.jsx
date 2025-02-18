const RecipesCard = ({ icon, title, description, subtitle, className }) => {
    return (
      <div
        className={`relative flex flex-col items-start border rounded-lg shadow-lg p-6 h-auto w-full transform transition-transform hover:scale-105 hover:shadow-xl ${className}`}
      >
        {/* Icon Section */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-4">
          {icon}
        </div>
  
        {/* Title */}
        <h1 className="text-black font-bold text-xl sm:text-2xl mb-2">{title}</h1>
  
        {/* Description */}
        <p className="text-white text-sm sm:text-base mb-4 leading-relaxed">
          {description}
        </p>
  
        {/* Subtitle */}
        <h3 className="text-white font-semibold text-sm sm:text-lg">
          {subtitle}
        </h3>
      </div>
    );
  };
  
  export default RecipesCard;
  