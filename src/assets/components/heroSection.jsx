import bgYellow from "../images/bgYellow.png";
import ProductsButton from "./productsButton";
import RecipeButton from "./recipeButton";

const HeroSection = () => {
  return (
    
    <div 
    className="relative grid place-items-center h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${bgYellow})` }}
  >
    <h2 className="text-4xl font-bold text-white text-center max-w-2xl">
      Start Your Healthy Snacking Journey With Us
    </h2>
    <div className="relative grid grid-rows-1 ">
    <ProductsButton/> <RecipeButton/>
    </div>
    
  </div>
  
     
  )
}

export default HeroSection