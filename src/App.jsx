
import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems')
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem(
      'wishlistItems',
      JSON.stringify(wishlistItems)
    )
  }, [wishlistItems])

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
    setCartItems(items =>
      items.filter(item => item.id !== id)
    )
  }

  function handleToggleWishlist(product) {
    setWishlistItems(items =>
      items.some(item => item.id === product.id)
        ? items.filter(item => item.id !== product.id)
        : [...items, product]
    )
  }

  function handleRemoveFromWishlist(id) {
    setWishlistItems(items =>
      items.filter(item => item.id !== id)
    )
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <HashRouter>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistItems.length}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              onAddToCart={handleAddToCart}
              wishlistItems={wishlistItems}
              onToggleWishlist={handleToggleWishlist}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              onRemove={handleRemoveFromWishlist}
              onAddToCart={handleAddToCart}
            />
          }
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

      <Footer />
    </HashRouter>
  )
}

export default App