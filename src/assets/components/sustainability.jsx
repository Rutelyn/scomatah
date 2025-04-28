import tainIceStraw3 from "../images/tainIceStraw3.jpg";

const Sustainability = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen background image */}
      <img
        src={tainIceStraw3}
        alt="Strawberry Plantain Ice Cream"
        className="absolute top-0 left-0 w-full h-fit object-cover"
      />

      {/* Centered Card */}
      <div className="relative flex items-center justify-center h-full">
        <div className=" bg-opacity-80 backdrop-blur-md rounded-2xl p-10 shadow-2xl max-w-md text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sustainability</h1>
          <p className="text-lg text-white mb-2">
            Fresh ideas for a sustainable plantain journey.
          </p>
          <p className="text-lg text-white">
            Empowering farmers, reducing waste, inspiring communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
