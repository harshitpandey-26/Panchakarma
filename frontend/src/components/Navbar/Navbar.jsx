import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo_2.png"
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <ul>
        <li>About</li>
        <li>Therapies</li>
        <li>Find Clinics</li>
        <li><Link to="/login">Login</Link> </li>
        <li className={styles.cta}>Get Started</li>
      </ul>
    </nav>
  );
}

export default Navbar;
