
import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem('cartItems')
  return savedCart ? JSON.parse(savedCart) : []
})
useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])
function handleAddToCart(product) {
  setCartItems(previousItems => {
    const existingItem = previousItems.find(
      item => item.id === product.id
    )

    if (existingItem) {
      return previousItems.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 0) + 1
            }
          : item
      )
    }

    return [...previousItems, { ...product, quantity: 1 }]
  })
}

  function handleIncrease(id) {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function handleDecrease(id) {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  function handleRemove(id) {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <HashRouter>
      <nav>
        <h2>ShopEasy</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart 🛒 ({cartCount})</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App