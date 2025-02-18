import { Link } from "react-router-dom";
import RecipesCard from "../components/recipesCard";
import { HandshakeIcon, } from "lucide-react";

const Recipes = () => {
  return (
    <div className="h-full py-12 bg-gray-100 sm:px-10">
      <div className="flex justify-center">
        <h3 className="font-bold text-black text-lg sm:text-2xl">Enjoy Delicious Recipes</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        
        <Link to="/yogurtpunch" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Yogurt Punch" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="More" 
            className="bg-[#E1151E] "
          />
        </Link>

        <Link to="/fruitydelight" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Fruity Delight" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="More" 
            className="bg-[#FDCD15] "
          />
        </Link>

        <Link to="/sweetblend" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Sweet Blend" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="Learn More" 
            className="bg-[#2D427B] "
          />
        </Link>

        <Link to="/plantainshake" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Plantain Shake" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="Learn More" 
            className="bg-[#10CC9F] "
          />
        </Link>

        <Link to="/berrymix" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Berry Mix" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="Learn More" 
            className="bg-[#E8238D] "
          />
        </Link>

        <Link to="/chilledtreat" className="block">
          <RecipesCard 
            icon={<HandshakeIcon />} 
            title="Chilled Treat" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            subtitle="Learn More" 
            className="bg-[#AACB47]"
          />
        </Link>

      </div>
    </div>
  );
};

export default Recipes;
