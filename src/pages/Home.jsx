
import { Link } from 'react-router-dom'

function Home() {
  const categories = [
    { name: "Electronics", icon: "🎧", value: "electronics" },
    { name: "Jewellery", icon: "💎", value: "jewelery" },
    { name: "Men's Clothing", icon: "👕", value: "men's clothing" },
    { name: "Women's Clothing", icon: "👗", value: "women's clothing" }
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">✨ YOUR HAPPY SHOPPING PLACE</p>

          <h1>
            Find Your
            <span> Perfect Style</span>
          </h1>

          <p className="hero-description">
            Discover amazing products at great prices.
            Your next favourite find is just a click away!
          </p>

          <Link to="/products" className="shop-now-button">
            Shop Now →
          </Link>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">🛍️</div>
          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✧</span>
        </div>
      </section>

      {/* Promotional banner */}
      <section className="promo-banner">
        <div>
          <p className="promo-label">A LITTLE SOMETHING FOR YOU ✨</p>
          <h2>Make Every Find Special</h2>
          <p>Explore our collection and discover something you love.</p>
        </div>

        <Link to="/products" className="promo-button">
          Explore Collection →
        </Link>
      </section>

      {/* Shop by category */}
      <section className="category-section">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h2>Shop by Category</h2>
          <span>Find something that matches your style.</span>
        </div>

        <div className="category-grid">
          {categories.map(category => (
            <Link
              key={category.value}
              to={`/products?category=${encodeURIComponent(category.value)}`}
              className="category-card"
            >
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <span className="category-arrow">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-features">
        <div className="feature-item">
          <span>🛒</span>
          <h3>Easy Shopping</h3>
          <p>Find products with ease.</p>
        </div>

        <div className="feature-item">
          <span>💜</span>
          <h3>Made for You</h3>
          <p>Discover your favourites.</p>
        </div>

        <div className="feature-item">
          <span>✨</span>
          <h3>Simple Experience</h3>
          <p>Enjoy shopping your way.</p>
        </div>
      </section>
    </div>
  )
}

export default Home