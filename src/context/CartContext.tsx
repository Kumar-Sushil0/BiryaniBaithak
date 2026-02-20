"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'veg' | 'non-veg';
  description: string;
  variant?: string; // e.g., "Half", "Full", "Plain", "Butter"
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('biryani-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('biryani-cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      // Create unique key combining id and variant
      const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
      const existingItem = prevCart.find((cartItem) => {
        const cartKey = cartItem.variant ? `${cartItem.id}-${cartItem.variant}` : cartItem.id;
        return cartKey === itemKey;
      });
      
      if (existingItem) {
        return prevCart.map((cartItem) => {
          const cartKey = cartItem.variant ? `${cartItem.id}-${cartItem.variant}` : cartItem.id;
          return cartKey === itemKey
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });
      }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, variant?: string) => {
    setCart((prevCart) => prevCart.filter((item) => {
      const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
      const targetKey = variant ? `${id}-${variant}` : id;
      return itemKey !== targetKey;
    }));
  };

  const updateQuantity = (id: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    
    setCart((prevCart) =>
      prevCart.map((item) => {
        const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
        const targetKey = variant ? `${id}-${variant}` : id;
        return itemKey === targetKey ? { ...item, quantity } : item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
