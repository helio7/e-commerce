import logo from '../../logo-lightblue-2642-991-black-border.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar () {
   return(
      <nav id="navbar">
         <Link to='/home'>
            <img id="navbar-logo" src={logo} alt="logo"/>
         </Link>
         <div id="navbar-links-container">
            <a>Products</a>
            <a>About us</a>
            <a>Contact</a>
         </div>
      </nav>
   );
}

export default NavBar;