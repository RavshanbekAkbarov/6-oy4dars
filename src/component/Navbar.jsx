//rrd imports
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <NavLink to="/">myMarket</NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
