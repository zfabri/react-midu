import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const ClearCart = () => {
    setCart([])
  }

  const addToCart = product => {
    // se verifica si el producto esta en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const RemoveFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      ClearCart,
      RemoveFromCart
    }} >
      {children}
    </ CartContext.Provider>
  )
}