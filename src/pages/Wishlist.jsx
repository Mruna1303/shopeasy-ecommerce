
import { Link } from 'react-router-dom'

function Wishlist({ wishlistItems, onRemove, onAddToCart }) {
  return (
    <main className="products-page">
      <section className="products-heading">
        <p className="products-eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>My Wishlist ❤️</h1>
        <p>Keep the products you love in one place.</p>
      </section>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <span>💜</span>
          <h2>Your wishlist is empty</h2>
          <p>Find something you love and save it here.</p>
          <Link to="/products" className="shop-now-button">
            Explore Products →
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlistItems.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-card-content">
                <h3>{product.title}</h3>
                <p className="price">
                  ₹{(product.price * 85).toFixed(0)}
                </p>

                <button
                  className="add-button"
                  onClick={() => onAddToCart(product)}
                >
                  + Add to Cart
                </button>

                <button
                  className="wishlist-remove"
                  onClick={() => onRemove(product.id)}
                >
                  ♡ Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Wishlist