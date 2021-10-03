import { Link } from "react-router-dom";

const Navbar = ({ signOut }) => {
  return (
    <nav className="nav">
      <div className="phone">
        <p className="phone-text">+91 99999 99999</p>
      </div>
      <div className="nav-div">
        <Link className="nav-item center" to="/">
          ABOUT
        </Link>
        <div className="nav-item center">INDUSTRIES</div>
        <div className="nav-item center">SERVICES</div>
        <div className="nav-item center">PROJECT</div>
        <Link className="nav-item center" to="/training">
          TRAINING
        </Link>
        <div className="nav-item center">CONTACT US</div>
        <div className="nav-item center px-3 " onClick={signOut}>
          LOG OUT
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
