
import { Link } from "react-router-dom";
import { posts } from "../Data/Data";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>

      <ul className="list-group">
        {posts.map((p) => (
          <li
            key={p.id}
            className="list-group-item d-flex justify-content-between"
          >
            {p.title}

            <Link
              to={`/blog/${p.id}`}
              className="btn btn-sm btn-primary"
            >
              View Blog
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

