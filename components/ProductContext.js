"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProduct = exports.ProductProvider = void 0;
var react_1 = require("react");
var ProductContext = (0, react_1.createContext)(undefined);
var ProductProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), cartQuantity = _b[0], setCartQuantity = _b[1];
    var _c = (0, react_1.useState)(0), selectedColor = _c[0], setSelectedColor = _c[1];
    var _d = (0, react_1.useState)(0), selectedImage = _d[0], setSelectedImage = _d[1];
    var _e = (0, react_1.useState)(false), isCartOpen = _e[0], setIsCartOpen = _e[1];
    var _f = (0, react_1.useState)(true), isDarkMode = _f[0], setIsDarkMode = _f[1];
    var addToCart = (0, react_1.useCallback)(function () {
        setCartQuantity(function (prev) { return prev + 1; });
        setIsCartOpen(true);
    }, []);
    var updateQuantity = (0, react_1.useCallback)(function (change) {
        setCartQuantity(function (prev) { return Math.max(0, prev + change); });
    }, []);
    var toggleDarkMode = (0, react_1.useCallback)(function () {
        setIsDarkMode(function (prev) { return !prev; });
    }, []);
    return (react_1.default.createElement(ProductContext.Provider, { value: {
            cartQuantity: cartQuantity,
            selectedColor: selectedColor,
            selectedImage: selectedImage,
            isCartOpen: isCartOpen,
            isDarkMode: isDarkMode,
            setCartQuantity: setCartQuantity,
            setSelectedColor: setSelectedColor,
            setSelectedImage: setSelectedImage,
            setIsCartOpen: setIsCartOpen,
            setIsDarkMode: setIsDarkMode,
            addToCart: addToCart,
            updateQuantity: updateQuantity,
            toggleDarkMode: toggleDarkMode,
        } }, children));
};
exports.ProductProvider = ProductProvider;
var useProduct = function () {
    var context = (0, react_1.useContext)(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
};
exports.useProduct = useProduct;
