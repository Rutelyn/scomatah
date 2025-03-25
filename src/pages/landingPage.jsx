import AboutUs from "../assets/components/aboutUs"
import ContactUs from "../assets/components/contactUs"
import HeroSection from "../assets/components/heroSection"
import Products from "../assets/components/products"
import Sustainability from "../assets/components/sustainability"

import { getSheetsData } from "../assets/lib/readSheet"

const LandingPage = async () => {
  const data = await getSheetsData()
  const {heroSection, aboutUs, products} = data;
  console.log("data:", data)
  return (
    <div>
<HeroSection data={hero}/>
<AboutUs data={abt}/>
<Products data={pro}/>
<Sustainability/>
<ContactUs/>

    </div>
  )
}

export default LandingPage