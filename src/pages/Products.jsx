
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Products({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log('Error:', error))
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <h1>Our Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        className="search-input"
      />

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Products