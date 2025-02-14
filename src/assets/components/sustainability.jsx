import grittyPouch3 from "../images/grittyPPouch3.jpg";

const Sustainability = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={grittyPouch3}
        alt="Sustainability"
        className="absolute top-0 left-0 w-full h-full opacity-80"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Sustainability</h1>
        <p className="text-lg mb-2">Focus on reducing waste in the plantain supply chain.</p>
        <p className="text-lg">Community programs supporting local farmers.</p>
      </div>
    </div>
  );
};

export default Sustainability;
