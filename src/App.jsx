import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./assets/components/aboutUs";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landingPage";
import Products from "./assets/components/products";
import Recipes from "./assets/components/recipes";
import Sustainability from "./assets/components/sustainability";
import ContactUs from "./assets/components/contactUs";
import YogurtPunch from "./assets/components/yogurtPunch";
import SweetBlend from "./assets/components/sweetBlend";
import ChilledTreat from "./assets/components/chilledTreat";
import BerryMix from "./assets/components/berryMix";
import FruityDelight from "./assets/components/fruityDelight";
import PlantainShake from "./assets/components/plantainShake";
import ThankYou from "./assets/components/thankYou";

const router = createBrowserRouter(
  [
    {path: "/",
        element: <RootLayout/>,
        children:[
          {
            index: true,
            element: <LandingPage/>
          },
          
          {
            name: "Home",
            path: "/"
        },
        
        {
          path: "/about",
          element: <AboutUs/>
        },
        {
          path: "/products",
          element: <Products/>
        },
        {
          path: "/recipes",
          element: <Recipes/>
        },
        {
            path: "/sustainability",
            element: <Sustainability/>
          },
          {
            path: "/contactus",
            element: <ContactUs/>
          },
        
        ]
      },
      {
        path: "/yogurtpunch",
        element: <YogurtPunch/>
      },
      {
        path: "/sweetblend",
        element: <SweetBlend/>
      },
      {
        path: "/chilledtreat",
        element: <ChilledTreat/>
      },
      {
        path: "/berrymix",
        element: <BerryMix/>
      },
      {
        path: "/fruitydelight",
        element: <FruityDelight/>
      },
      {
        path: "/plantainshake",
        element: <PlantainShake/>
      },
      {
        path: "/thankyou",
        element: <ThankYou/>
      },
  ]  
)
function App() {
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}
export default App