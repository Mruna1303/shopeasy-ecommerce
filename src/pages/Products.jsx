
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Products({ onAddToCart, wishlistItems, onToggleWishlist }) {
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
  const location = useLocation()

  const selectedCategory = new URLSearchParams(location.search)
    .get('category')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load products')
        }
        return response.json()
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Product loading error:', error))
  }, [])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const matchesCategory = !selectedCategory ||
      product.category.toLowerCase() === selectedCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  const categoryTitle = selectedCategory
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    : 'All Products'

  return (
    <main className="products-page">
      <section className="products-heading">
        <p className="products-eyebrow">FIND YOUR FAVOURITES</p>
        <h1>{categoryTitle}</h1>
        <p>Discover something you'll love.</p>
      </section>

      <div className="products-toolbar">
        <input
          className="search-input"
          type="search"
          placeholder="Search products..."
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />

        <span className="product-count">
          {filteredProducts.length} products
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
          
            <ProductCard
              key={product.id}
              name={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() => onAddToCart(product)}
              isWishlisted={wishlistItems.some(
                item => item.id === product.id
              )}
              onToggleWishlist={() => onToggleWishlist(product)}
            />
          ))}
        </div>
      ) : (
        <p className="empty-products">
          {products.length === 0
            ? 'Loading products...'
            : 'No products found. Try another search.'}
        </p>
      )}
    </main>
  )
}

export default Products