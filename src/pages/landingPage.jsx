import AboutUs from "../assets/components/aboutUs"
import ContactUs from "../assets/components/contactUs"
import HeroSection from "../assets/components/heroSection"
import Products from "../assets/components/products"
import Sustainability from "../assets/components/sustainability"

import { getSheetsData } from "../assets/lib/readSheet"

const LandingPage = async () => {
  const data = await getSheetsData()
  console.log("data:", data)
  return (
    <div>
<HeroSection/>
<AboutUs/>
<Products/>
<Sustainability/>
<ContactUs/>

    </div>
  )
}

export default LandingPage