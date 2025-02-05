import { Outlet } from "react-router-dom"
import Navbar from "../assets/components/navbar"
import Footer from "../assets/components/footer"

const RootLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default RootLayout