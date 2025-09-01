import { Link } from "react-router-dom";
import logo from '../../assets/logo2.jpg'

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}><img src={logo} alt="" /></Link>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
