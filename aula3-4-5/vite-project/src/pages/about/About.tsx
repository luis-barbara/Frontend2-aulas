
import Clock from "../../components/clock";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1>About</h1>
      <Clock />
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default About;
