//rrd imports
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="continer">
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="works">Works</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
