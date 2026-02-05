
import Clock from "../../components/clock";
import { useNavigate } from "react-router-dom";


const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1>Blog</h1>
      <Clock />
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Blog;