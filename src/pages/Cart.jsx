
function Cart({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * 85 * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p className="products-eyebrow">YOUR SHOPPING BAG</p>
        <h1>My Cart 🛒</h1>
        <p>Review your favourites before you check out.</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <span>🛍️</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <h3>{item.title}</h3>

                <p className="cart-item-price">
                  ₹{(item.price * 85).toFixed(0)}
                </p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => onDecrease(item.id)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>Qty: {item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => onIncrease(item.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-cart-button"
                  onClick={() => onRemove(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total Amount</span>
            <strong>₹{totalPrice.toFixed(0)}</strong>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart