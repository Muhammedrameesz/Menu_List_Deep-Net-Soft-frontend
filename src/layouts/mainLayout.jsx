import HomeNavBar from "../navbars/navbar.jsx"
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer.jsx"


export default function Mainayout() {
  return (
    <>
    <HomeNavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
