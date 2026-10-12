
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Shop<span>Easy</span>
          </Link>
          <p>
            Discover your favourites and enjoy a simple,
            easy shopping experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="footer-note">
          <h3>Happy Shopping!</h3>
          <p>Find something you love, every day.</p>
          <Link to="/products" className="footer-shop-link">
            Explore Products →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEasy. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer