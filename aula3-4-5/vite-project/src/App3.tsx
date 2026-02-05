import "./App3.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About} from "./pages/pages";
import Post from "./pages/blog/Post";
import Navbar from "./components/layout/Navbar";
import Search from "./pages/search/Search";


function App3() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App3;