import { Link } from "react-router-dom";
import logo3 from '../../assets/logo3.jpg'
import './style.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" ><img src={logo3} alt="" /></Link>
      <div className="items">
        <Link to="/" >MASSOTERAPIA</Link>
        <Link to="/contatti">CONTATTI</Link>
        <Link to="/newsletter">NEWSLETTER</Link>
      </div>
    </nav>
  );
};

export default Navbar;
