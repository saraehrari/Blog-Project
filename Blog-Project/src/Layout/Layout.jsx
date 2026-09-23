
import { Outlet } from "react-router-dom"; 
import Navbar from "../Components/Navbar"; 
export default function Layout({ isAuth }) 
{ return ( 
<div> 
    <Navbar isAuth={isAuth} /> 
    <main className="container py-4">
         <Outlet /> 
         </main> 
         </div> ); }