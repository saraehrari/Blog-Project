import { useState } from "react";
 import { Routes, Route } from "react-router-dom";
  import Layout from "./Layout/Layout"; 
  import Home from "./Pages/Home";
   import Blog from "./Pages/Blog"; 
   import BlogDetails from "./Pages/BlogDetails"; 
   import Login from "./Pages/Login";
    import Dashboard from "./Pages/Dashboard";
     import ProtectedRoute from "./Components/ProtectedRoute"; 
     
     function App() {
         const [isAuth, setIsAuth] = useState(false); 
         function onLogin() {
             setIsAuth(true); 
            }
              return (
                 <Routes> 
                    <Route element={
                        <Layout isAuth={isAuth} />}> 
                        <Route path="/" element={<Home />} /> 
                        <Route path="/blog" element={<Blog />} /> 
                        <Route path="/blog/:id" element={<BlogDetails />} /> 
                        <Route path="/login" element={<Login onLogin={onLogin} />} /> 
                        <Route path="/dashboard" element={ <ProtectedRoute isAuth={isAuth}> 
                            <Dashboard />
                             </ProtectedRoute> } /> 
                             </Route>
                             
                              </Routes>
                               ); }
                               export default App;