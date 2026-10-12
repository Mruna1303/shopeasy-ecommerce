
function ProductCard({
  name,
  price,
  image,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
          loading="lazy"
        />

        <button
          type="button"
          className={`wishlist-heart ${isWishlisted ? 'active' : ''}`}
          onClick={onToggleWishlist}
          aria-label={
            isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'
          }
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>

      <div className="product-card-content">
        <h3>{name}</h3>

        <p className="price">
          ₹{(price * 85).toFixed(0)}
        </p>

        <button
          type="button"
          className="add-button"
          onClick={onAddToCart}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard