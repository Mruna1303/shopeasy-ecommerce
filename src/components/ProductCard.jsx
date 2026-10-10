
function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />

      <h3>{name}</h3>

      <p className="price">
        ₹{(price * 85).toFixed(0)}
      </p>

      <button
        className="add-button"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard