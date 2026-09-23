import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../Data/Data";

export default function Blogdetailes(){
    const {id}= useParams();
    const navigate= useNavigate();

    const post=getPost(id);


    if(!post){
        return <p>Post not found</p>
    }

    return(
      <div>
        <h1>
            {post.title}
        </h1>

        <p className="text-secondery">URL Param: {id}</p>
        <button className="btn btn-outline-secondery" onClick={()=> navigate(-1)}>👈Back</button>
        </div>
    )
}