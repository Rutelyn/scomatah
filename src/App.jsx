import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./assets/components/aboutUs";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landingPage";
import Products from "./assets/components/products";
import Recipes from "./assets/components/recipes";
import Sustainability from "./assets/components/sustainability";
import ContactUs from "./assets/components/contactUs";

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
      }
    
  ]  
)
function App() {
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}