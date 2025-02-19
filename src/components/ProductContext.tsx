import React, { createContext, useContext, useState, useCallback } from 'react';

interface ProductContextType {
  cartQuantity: number;
  selectedColor: number;
  selectedImage: number;
  isCartOpen: boolean;
  isDarkMode: boolean;
  setCartQuantity: (quantity: number) => void;
  setSelectedColor: (color: number) => void;
  setSelectedImage: (image: number) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  setIsDarkMode: (isDark: boolean) => void;
  addToCart: () => void;
  updateQuantity: (change: number) => void;
  toggleDarkMode: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const addToCart = useCallback(() => {
    setCartQuantity((prev) => prev + 1);
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((change: number) => {
    setCartQuantity((prev) => Math.max(0, prev + change));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        cartQuantity,
        selectedColor,
        selectedImage,
        isCartOpen,
        isDarkMode,
        setCartQuantity,
        setSelectedColor,
        setSelectedImage,
        setIsCartOpen,
        setIsDarkMode,
        addToCart,
        updateQuantity,
        toggleDarkMode,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};