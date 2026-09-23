
import { Link } from "react-router-dom"; 
import { posts } from "../Data/Data"; 
export default function Blog() 
{ return (
   <div>
     <h1>Blog</h1> 
     <ul className="list-group">
       {posts.map((post) => ( 
        <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center" > 
        <span>{post.title}</span>
         <Link to={`/blog/${post.id}`} className="btn btn-sm btn-primary" >
          View Blog 
          </Link>
           </li> 
           ))}
            </ul>
             </div> 
             ); }

