"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var ProductContext_1 = require("./components/ProductContext");
var ProductData_1 = require("./components/ProductData");
function App() {
    var _a = (0, ProductContext_1.useProduct)(), cartQuantity = _a.cartQuantity, selectedColor = _a.selectedColor, selectedImage = _a.selectedImage, isCartOpen = _a.isCartOpen, isDarkMode = _a.isDarkMode, setIsCartOpen = _a.setIsCartOpen, setSelectedImage = _a.setSelectedImage, setSelectedColor = _a.setSelectedColor, addToCart = _a.addToCart, updateQuantity = _a.updateQuantity, toggleDarkMode = _a.toggleDarkMode;
    var total = cartQuantity * ProductData_1.PRODUCT.price;
    // Persist dark mode preference in localStorage
    (0, react_1.useEffect)(function () {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);
    return react_1.default.createElement("div", {
        className: "min-h-screen ".concat(isDarkMode ? "bg-dark text-gray-100" : "bg-gray-100 text-gray-900"),
    }, react_1.default.createElement("nav", {
        className: "fixed w-full z-50 ".concat(isDarkMode ? "bg-dark-lighter/90" : "bg-white/90", " backdrop-blur-md border-b border-primary/20"),
    }, react_1.default.createElement("div", { className: "container mx-auto py-6" }, react_1.default.createElement("div", { className: "flex justify-between items-center" }, react_1.default.createElement("div", { className: "text-3xl font-bold flex items-center gap-3" }, react_1.default.createElement(lucide_react_1.Star, {
        className: "w-10 h-10 text-primary animate-pulse-slow",
    }), react_1.default.createElement("span", { className: "text-gradient" }, "StarGaze")), react_1.default.createElement("div", { className: "flex items-center gap-6" }, react_1.default.createElement("button", {
        onClick: toggleDarkMode,
        className: "p-3 hover:bg-primary/10 rounded-full transition-colors",
        "aria-label": "Toggle Dark Mode",
    }, isDarkMode
        ? react_1.default.createElement(lucide_react_1.Sun, { className: "w-7 h-7" })
        : react_1.default.createElement(lucide_react_1.Moon, { className: "w-7 h-7" })), react_1.default.createElement("button", {
        onClick: function () { return setIsCartOpen(true); },
        className: "relative p-3 hover:bg-primary/10 rounded-full transition-colors",
        "aria-label": "Open Cart",
    }, react_1.default.createElement(lucide_react_1.ShoppingCart, { className: "w-7 h-7" }), cartQuantity > 0 &&
        react_1.default.createElement("span", {
            className: "absolute -top-1 -right-1 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center",
        }, cartQuantity)))))), isCartOpen &&
        react_1.default.createElement("div", { className: "fixed inset-0 z-50" }, react_1.default.createElement("div", {
            className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            onClick: function () { return setIsCartOpen(false); },
        }), react_1.default.createElement("div", {
            className: "absolute right-0 top-0 h-full w-full max-w-xl ".concat(isDarkMode ? "bg-dark-lighter" : "bg-white", " p-8 shadow-xl transition-all duration-300 transform translate-x-0"),
        }, react_1.default.createElement("div", { className: "flex justify-between items-center mb-8" }, react_1.default.createElement("h2", { className: "text-3xl font-bold text-gradient" }, "Your Cart"), react_1.default.createElement("button", {
            onClick: function () { return setIsCartOpen(false); },
            className: "p-2 hover:bg-primary/10 rounded-full transition-colors",
            "aria-label": "Close Cart",
        }, react_1.default.createElement(lucide_react_1.X, { className: "w-7 h-7" }))), cartQuantity === 0
            ? react_1.default.createElement("div", { className: "text-center py-12 text-gray-400 text-lg" }, "Your cart is empty")
            : react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", { className: "space-y-6 mb-8" }, react_1.default.createElement("div", {
                className: "".concat(isDarkMode ? "bg-dark-light" : "bg-gray-50", " p-6 rounded-xl hover-card"),
            }, react_1.default.createElement("div", { className: "flex gap-6" }, react_1.default.createElement("img", {
                src: ProductData_1.PRODUCT.images[0],
                alt: ProductData_1.PRODUCT.name,
                className: "w-32 h-32 object-cover rounded-lg",
            }), react_1.default.createElement("div", { className: "flex-1" }, react_1.default.createElement("h3", { className: "text-xl font-semibold mb-2" }, ProductData_1.PRODUCT.name), react_1.default.createElement("p", { className: "text-gray-400 mb-2" }, ProductData_1.PRODUCT.colors[selectedColor]), react_1.default.createElement("p", { className: "text-primary text-lg font-semibold" }, "\u00A3", ProductData_1.PRODUCT.price.toFixed(2)), react_1.default.createElement("div", { className: "flex items-center gap-4 mt-4" }, react_1.default.createElement("button", {
                onClick: function () { return updateQuantity(-1); },
                className: "p-2 hover:bg-primary/10 rounded-full transition-colors",
                "aria-label": "Decrease Quantity",
            }, react_1.default.createElement(lucide_react_1.Minus, { className: "w-5 h-5" })), react_1.default.createElement("span", { className: "text-lg" }, cartQuantity), react_1.default.createElement("button", {
                onClick: function () { return updateQuantity(1); },
                className: "p-2 hover:bg-primary/10 rounded-full transition-colors",
                "aria-label": "Increase Quantity",
            }, react_1.default.createElement(lucide_react_1.Plus, { className: "w-5 h-5" }))))))), react_1.default.createElement("div", { className: "border-t border-primary/20 pt-6" }, react_1.default.createElement("div", { className: "flex justify-between mb-6" }, react_1.default.createElement("span", { className: "text-xl" }, "Total"), react_1.default.createElement("span", { className: "text-xl font-bold" }, "\u00A3", total.toFixed(2))), react_1.default.createElement("button", {
                className: "w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity",
            }, "Checkout"))))), react_1.default.createElement("header", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-32",
    }, react_1.default.createElement("div", { className: "absolute inset-0 z-0" }, react_1.default.createElement("div", {
        className: "absolute inset-0 bg-gradient-to-b from-transparent to-dark",
    }), react_1.default.createElement("img", {
        src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2000",
        alt: "Galaxy background",
        className: "w-full h-full object-cover opacity-40",
    })), react_1.default.createElement("div", { className: "container mx-auto z-10" }, react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center" }, react_1.default.createElement("div", { className: "text-center lg:text-left hero-content" }, react_1.default.createElement("div", {
        className: "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8",
    }, react_1.default.createElement(lucide_react_1.Star, { className: "w-5 h-5 text-primary" }), react_1.default.createElement("span", { className: "text-primary text-lg" }, "Premium Quality")), react_1.default.createElement("h1", {
        className: "text-6xl lg:text-8xl font-bold mb-8 text-gradient leading-tight",
    }, "Your Personal Galaxy"), react_1.default.createElement("p", {
        className: "text-2xl lg:text-3xl mb-12 text-gray-300 leading-relaxed",
    }, ProductData_1.PRODUCT.description), react_1.default.createElement("div", {
        className: "flex flex-col sm:flex-row gap-6 justify-center lg:justify-start",
    }, react_1.default.createElement("button", {
        onClick: addToCart,
        className: "bg-gradient-to-r from-primary to-secondary px-12 py-6 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3",
    }, react_1.default.createElement(lucide_react_1.ShoppingCart, { className: "w-6 h-6" }), "Add to Cart - \u00A3", ProductData_1.PRODUCT.price), react_1.default.createElement("button", {
        className: "border-2 border-primary px-12 py-6 rounded-full text-xl font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-3",
    }, react_1.default.createElement(lucide_react_1.Heart, { className: "w-6 h-6" }), "Add to Wishlist"))), react_1.default.createElement("div", { className: "relative" }, react_1.default.createElement("div", {
        className: "aspect-square rounded-3xl overflow-hidden ".concat(isDarkMode ? "bg-dark-light" : "bg-gray-50", " p-12 animate-float"),
    }, react_1.default.createElement("img", {
        src: ProductData_1.PRODUCT.images[selectedImage],
        alt: ProductData_1.PRODUCT.name,
        className: "w-full h-full object-contain",
    })), react_1.default.createElement("div", { className: "flex justify-center gap-6 mt-8" }, ProductData_1.PRODUCT.images.map(function (image, index) {
        return react_1.default.createElement("button", {
            key: index,
            onClick: function () { return setSelectedImage(index); },
            className: "w-24 h-24 rounded-xl overflow-hidden border-2 transition-colors ".concat(selectedImage === index
                ? "border-primary"
                : "border-transparent"),
        }, react_1.default.createElement("img", {
            src: image,
            alt: "View ".concat(index + 1),
            className: "w-full h-full object-cover",
        }));
    })))))), react_1.default.createElement("section", {
        className: "section-spacing ".concat(isDarkMode ? "bg-dark-lighter" : "bg-gray-50"),
    }, react_1.default.createElement("div", { className: "container mx-auto" }, react_1.default.createElement("h2", {
        className: "text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient",
    }, "Amazing Features"), react_1.default.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
    }, ProductData_1.PRODUCT.features.map(function (feature, index) {
        return react_1.default.createElement("div", {
            key: index,
            className: "".concat(isDarkMode ? "bg-dark-light" : "bg-white", " feature-card rounded-xl hover-card"),
        }, react_1.default.createElement("div", { className: "flex items-start gap-6" }, react_1.default.createElement("div", {
            className: "w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0",
        }, react_1.default.createElement(lucide_react_1.Check, { className: "w-7 h-7" })), react_1.default.createElement("p", { className: "text-xl" }, feature)));
    })))), react_1.default.createElement("section", { className: "section-spacing ".concat(isDarkMode ? "bg-dark" : "bg-white") }, react_1.default.createElement("div", { className: "container mx-auto" }, react_1.default.createElement("h2", {
        className: "text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient",
    }, "See It In Action"), react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12" }, ProductData_1.GALLERY_IMAGES.map(function (image, index) {
        return react_1.default.createElement("div", { key: index, className: "relative group hover-card" }, react_1.default.createElement("img", {
            src: image.url,
            alt: image.title,
            className: "w-full gallery-image object-cover rounded-2xl",
        }), react_1.default.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
        }, react_1.default.createElement("div", { className: "absolute bottom-0 p-8" }, react_1.default.createElement("h3", { className: "text-2xl font-semibold mb-2" }, image.title), react_1.default.createElement("p", { className: "text-lg text-gray-300" }, image.description))));
    })))), react_1.default.createElement("section", {
        className: "section-spacing ".concat(isDarkMode ? "bg-dark-lighter" : "bg-gray-50"),
    }, react_1.default.createElement("div", { className: "container mx-auto" }, react_1.default.createElement("h2", {
        className: "text-5xl lg:text-6xl font-bold text-center mb-24 text-gradient",
    }, "Customer Reviews"), react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 review-grid" }, ProductData_1.REVIEWS.map(function (review, index) {
        return react_1.default.createElement("div", {
            key: index,
            className: "".concat(isDarkMode ? "bg-dark-light" : "bg-white", " p-10 rounded-2xl hover-card"),
        }, react_1.default.createElement("div", { className: "flex gap-2 mb-6" }, Array.from({ length: review.rating }).map(function (_, i) {
            return react_1.default.createElement(lucide_react_1.Star, {
                key: i,
                className: "w-6 h-6 text-yellow-400 fill-yellow-400",
            });
        })), react_1.default.createElement("p", { className: "text-gray-400 text-lg mb-6" }, review.text), react_1.default.createElement("div", { className: "flex justify-between items-center" }, react_1.default.createElement("p", { className: "text-xl font-semibold" }, review.name), review.verified &&
            react_1.default.createElement("span", {
                className: "text-sm text-primary flex items-center gap-2",
            }, react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }), " Verified Purchase")), react_1.default.createElement("p", { className: "text-sm text-gray-400 mt-3" }, review.date));
    })))), react_1.default.createElement("section", {
        className: "section-spacing-sm ".concat(isDarkMode ? "bg-dark" : "bg-white"),
    }, react_1.default.createElement("div", { className: "container mx-auto" }, react_1.default.createElement("div", {
        className: "benefits-section grid grid-cols-1 md:grid-cols-3 gap-16",
    }, react_1.default.createElement("div", {
        className: "text-center hover-card p-10 rounded-2xl ".concat(isDarkMode ? "bg-dark-light" : "bg-gray-50"),
    }, react_1.default.createElement("div", {
        className: "w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center",
    }, react_1.default.createElement(lucide_react_1.Truck, {
        className: "w-12 h-12 text-primary",
    })), react_1.default.createElement("h3", { className: "text-2xl font-semibold mb-4" }, "Free Shipping"), react_1.default.createElement("p", { className: "text-gray-400 text-lg" }, "Free delivery on all orders over \u00A350")), react_1.default.createElement("div", {
        className: "text-center hover-card p-10 rounded-2xl ".concat(isDarkMode ? "bg-dark-light" : "bg-gray-50"),
    }, react_1.default.createElement("div", {
        className: "w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center",
    }, react_1.default.createElement(lucide_react_1.Shield, {
        className: "w-12 h-12 text-primary",
    })), react_1.default.createElement("h3", { className: "text-2xl font-semibold mb-4" }, "180-Day Warranty"), react_1.default.createElement("p", { className: "text-gray-400 text-lg" }, "Full coverage for peace of mind")), react_1.default.createElement("div", {
        className: "text-center hover-card p-10 rounded-2xl ".concat(isDarkMode ? "bg-dark-light" : "bg-gray-50"),
    }, react_1.default.createElement("div", {
        className: "w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center",
    }, react_1.default.createElement(lucide_react_1.Award, {
        className: "w-12 h-12 text-primary",
    })), react_1.default.createElement("h3", { className: "text-2xl font-semibold mb-4" }, "Premium Quality"), react_1.default.createElement("p", { className: "text-gray-400 text-lg" }, "High-quality materials and build"))))), react_1.default.createElement("footer", {
        className: "".concat(isDarkMode ? "bg-dark-lighter" : "bg-gray-900", " py-20 border-t border-primary/20"),
    }, react_1.default.createElement("div", { className: "container mx-auto" }, react_1.default.createElement("div", {
        className: "footer-content grid grid-cols-1 md:grid-cols-4 gap-16",
    }, react_1.default.createElement("div", null, react_1.default.createElement("div", { className: "flex items-center gap-3 mb-6" }, react_1.default.createElement(lucide_react_1.Star, { className: "w-8 h-8 text-primary" }), react_1.default.createElement("span", { className: "text-2xl font-bold text-gradient" }, "StarGaze")), react_1.default.createElement("p", { className: "text-gray-400 text-lg leading-relaxed" }, "Bringing the magic of the galaxy into your home with our innovative star projector.")), react_1.default.createElement("div", null, react_1.default.createElement("h3", { className: "text-2xl font-bold mb-6 text-gray-100" }, "Quick Links"), react_1.default.createElement("ul", { className: "space-y-4 text-gray-400" }, react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#features",
        className: "text-lg hover:text-primary transition-colors",
    }, "Features")), react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#gallery",
        className: "text-lg hover:text-primary transition-colors",
    }, "Gallery")), react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#reviews",
        className: "text-lg hover:text-primary transition-colors",
    }, "Reviews")))), react_1.default.createElement("div", null, react_1.default.createElement("h3", { className: "text-2xl font-bold mb-6 text-gray-100" }, "Support"), react_1.default.createElement("ul", { className: "space-y-4 text-gray-400" }, react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#faq",
        className: "text-lg hover:text-primary transition-colors",
    }, "FAQ")), react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#shipping",
        className: "text-lg hover:text-primary transition-colors",
    }, "Shipping")), react_1.default.createElement("li", null, react_1.default.createElement("a", {
        href: "#warranty",
        className: "text-lg hover:text-primary transition-colors",
    }, "Warranty")))), react_1.default.createElement("div", null, react_1.default.createElement("h3", { className: "text-2xl font-bold mb-6 text-gray-100" }, "Contact"), react_1.default.createElement("ul", { className: "space-y-4 text-gray-400 text-lg" }, react_1.default.createElement("li", null, "Email: support@stargaze.com"), react_1.default.createElement("li", null, "Phone: +44 123 456 7890"), react_1.default.createElement("li", null, "Hours: Mon-Fri 9am-5pm GMT")))), react_1.default.createElement("div", {
        className: "border-t border-primary/20 mt-16 pt-8 text-center text-gray-400",
    }, react_1.default.createElement("p", { className: "text-lg" }, "\u00A9 2025 StarGaze. All rights reserved.")))));
}
exports.default = App;
