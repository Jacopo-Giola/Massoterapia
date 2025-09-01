import { Link } from "react-router-dom";
import { useState } from "react";
import logo3 from '../../assets/logo3.jpg'
import './style.css'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className='navbar'>
      <Link to="/" onClick={closeMenu}><img src={logo3} alt="" /></Link>
      <div className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
       <div className={`items ${open ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>MASSOTERAPIA</Link>
        <Link to="/contatti" onClick={closeMenu}>CONTATTI</Link>
        <Link to="/newsletter" onClick={closeMenu}>NEWSLETTER</Link>
      </div>
    </nav>
  );
};

export default Navbar;
