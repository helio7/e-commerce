import './index.css';
import ProductCard from '../../components/ProductCard';

function ProductsPage() {
  return (
    <div id="app-container">
      <div id="main-content-container">
        <div id="products-menu-container"></div>
        <div id="products-cards-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;