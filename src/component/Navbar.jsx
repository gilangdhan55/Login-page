import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/home">About</Link> |  
    </nav>
  );
};

export default Navbar;
