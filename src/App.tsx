import React from 'react';
import {
  Star,
  Moon,
  Sun,
  ShoppingCart,
  X,
  Plus,
  Minus,
  Heart,
  Check,
  Truck,
  Shield,
  Award,
  ArrowRight,
  Timer,
  Settings,
} from 'lucide-react';
import { useProduct } from './components/ProductContext';
import { PRODUCT, REVIEWS, GALLERY_IMAGES } from './components/ProductData';

function App() {
  const {
    cartQuantity,
    selectedColor,
    selectedImage,
    isCartOpen,
    isDarkMode,
    setIsCartOpen,
    setSelectedImage,
    setSelectedColor,
    addToCart,
    updateQuantity,
    toggleDarkMode,
  } = useProduct();

  const total = cartQuantity * PRODUCT.price;

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-dark text-gray-100" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-dark-lighter/90' : 'bg-white/90'} backdrop-blur-md border-b border-primary/20`}>
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold flex items-center gap-3">
              <Star className="w-10 h-10 text-primary animate-pulse-slow" />
              <span className="text-gradient">StarGaze</span>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleDarkMode}
                className="p-3 hover:bg-primary/10 rounded-full transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-7 h-7" />
                ) : (
                  <Moon className="w-7 h-7" />
                )}
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 hover:bg-primary/10 rounded-full transition-colors"
              >
                <ShoppingCart className="w-7 h-7" />
                {cartQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-full max-w-xl ${
              isDarkMode ? "bg-dark-lighter" : "bg-white"
            } p-8 shadow-xl transition-all duration-300 transform translate-x-0`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gradient">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            {cartQuantity === 0 ? (
              <div className="text-center py-12 text-gray-400 text-lg">
                Your cart is empty
              </div>
            ) : (
              <>
                <div className="space-y-6 mb-8">
                  <div className={`${isDarkMode ? 'bg-dark-light' : 'bg-gray-50'} p-6 rounded-xl hover-card`}>
                    <div className="flex gap-6">
                      <img
                        src={PRODUCT.images[0]}
                        alt={PRODUCT.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{PRODUCT.name}</h3>
                        <p className="text-gray-400 mb-2">
                          {PRODUCT.colors[selectedColor]}
                        </p>
                        <p className="text-primary text-lg font-semibold">
                          ${PRODUCT.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <button
                            onClick={() => updateQuantity(-1)}
                            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <span className="text-lg">{cartQuantity}</span>
                          <button
                            onClick={() => updateQuantity(1)}
                            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-primary/20 pt-6">
                  <div className="flex justify-between mb-6">
                    <span className="text-xl">Total</span>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity text-white">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark"></div>
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2000"
            alt="Galaxy background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="text-center lg:text-left hero-content">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary text-lg">Premium Quality</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 text-gradient leading-tight">
                Your Personal Galaxy
              </h1>
              <p className="text-2xl lg:text-3xl mb-12 text-gray-300 leading-relaxed">
                {PRODUCT.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button
                  onClick={addToCart}
                  className="bg-gradient-to-r from-primary to-secondary px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 text-white"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Add to Cart - ${PRODUCT.price}
                </button>
                <button className="bg-gradient-to-r from-primary/20 to-secondary/20 text-white border-2 border-primary px-12 py-6 rounded-full text-xl font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6" />
                  Add to Wishlist
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`aspect-square rounded-3xl overflow-hidden ${isDarkMode ? 'bg-dark-light' : 'bg-gray-50'} p-12 animate-float`}>
                <img
                  src={PRODUCT.images[selectedImage]}
                  alt={PRODUCT.name}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <div className="flex justify-center gap-6 mt-8">
                {PRODUCT.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className={`section-spacing ${isDarkMode ? 'bg-dark-lighter' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient">
            Amazing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCT.features.map((feature, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-dark-light' : 'bg-white'} feature-card rounded-xl hover-card`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xl">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`section-spacing ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient">
            See It In Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className="relative group hover-card">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full gallery-image object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{image.title}</h3>
                    <p className="text-lg text-white">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={`section-spacing ${isDarkMode ? 'bg-dark-lighter' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 review-grid">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-dark-light' : 'bg-white'} p-10 rounded-2xl hover-card`}
              >
                <div className="flex gap-2 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg mb-6`}>{review.text}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">{review.name}</p>
                  {review.verified && (
                    <span className="text-sm text-primary flex items-center gap-2">
                      <Check className="w-4 h-4" /> Verified Purchase
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-3">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`section-spacing-sm ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="benefits-section grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className={`text-center hover-card p-10 rounded-2xl ${isDarkMode ? 'bg-dark-light' : 'bg-gray-50'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Truck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Free Shipping</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>Free delivery on all orders over $50</p>
            </div>
            <div className={`text-center hover-card p-10 rounded-2xl ${isDarkMode ? 'bg-dark-light' : 'bg-gray-50'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">180-Day Warranty</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>Full coverage for peace of mind</p>
            </div>
            <div className={`text-center hover-card p-10 rounded-2xl ${isDarkMode ? 'bg-dark-light' : 'bg-gray-50'}`}>
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>High-quality materials and build</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-dark-lighter' : 'bg-gray-900'} py-20 border-t border-primary/20`}>
        <div className="container mx-auto">
          <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-gradient">StarGaze</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Bringing the magic of the galaxy into your home with our
                innovative star projector.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">Quick Links</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#features" className="text-lg hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-lg hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="text-lg hover:text-primary transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">Support</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="#faq" className="text-lg hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="text-lg hover:text-primary transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#warranty" className="text-lg hover:text-primary transition-colors">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">Contact</h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li>Email: support@stargaze.com</li>
                <li>Phone: +44 123 456 7890</li>
                <li>Hours: Mon-Fri 9am-5pm GMT</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-16 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 StarGaze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;