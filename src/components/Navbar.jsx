
import { Link } from 'react-router-dom'

function Navbar({ cartCount, wishlistCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Shop<span>Easy</span>
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist" className="wishlist-nav-link">
          ♥ Wishlist ({wishlistCount})
        </Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar