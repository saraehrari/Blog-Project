import { NavLink } from "react-router-dom";
const linkClass=({isActive})=>{
    "nav-link"+(isActive ? " fw-bold text-primary" :"")
}
export default function Layout({isAuth}){
return(
    <div>
        <nav className="navbar navbar-expand bg-light border-bottom">
              <div className="container">
                <span className="navbar-brand fw-bold">
                    My Simple Blog
                </span>
                <div className="navbar-nav">
                      <NavLink className={linkClass} to="/">Home</NavLink>
                      <NavLink className={linkClass} to="/blog">Blog</NavLink>
                      <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
                      <NavLink className={linkClass} to="/login">Login</NavLink>

                </div>
              </div>
        </nav>

        <span className="badge text-bg-secondery">
            {isAuth ? "Logged In" : "Logge Out"}
        </span>
    </div>
)
}