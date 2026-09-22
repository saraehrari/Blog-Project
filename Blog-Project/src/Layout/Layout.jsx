
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


export default function Layout({isAuth}){
return(
    <div>
       <Navbar isAuth={isAuth}/>


        <div className="container py-4"> 
        <Outlet/>
        </div>

        
    </div>
)
}