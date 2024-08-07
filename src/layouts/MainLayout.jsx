import { Outlet } from "react-router-dom"
import Navbar from "../components/layout-components/Navbar"
import Footer from "../components/layout-components/Footer"

const MainLayout = () => {
  return (
    <>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default MainLayout