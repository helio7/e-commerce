import logo from './logo-lightblue-2642-991-black-border.png';
import './App.css';

function App() {
  return (
    <div id="app-container">
      <nav id="navbar">
        <img id="navbar-logo" src={logo} alt="logo"/>
        <div id="navbar-links-container">
          <a>Products</a>
          <a>About us</a>
          <a>Contact</a>
        </div>
      </nav>
      <div id="main-content-container">
        <div id="products-menu-container"></div>
        <div id="products-cards-container">
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
          <div class="product-card"></div>
        </div>
      </div>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;
