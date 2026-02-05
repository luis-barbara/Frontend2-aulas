import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/">Frontend II</Link>
            </div>
            <nav className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/search">Search</Link>

            </nav>
        </div>
    )
}

export default Navbar;