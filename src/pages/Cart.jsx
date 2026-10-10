
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
    <div>
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map(item => (
            <div className="product-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              <h3>{item.title}</h3>

              <p className="price">
                ₹{(item.price * 85).toFixed(0)}
              </p>

              <div>
                <button onClick={() => onDecrease(item.id)}>
                  −
                </button>

                <span> Quantity: {item.quantity} </span>

                <button onClick={() => onIncrease(item.id)}>
                  +
                </button>
              </div>

              <button
                className="add-button"
                onClick={() => onRemove(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <h2>Total: ₹{totalPrice.toFixed(0)}</h2>
    </div>
  )
}

export default Cart