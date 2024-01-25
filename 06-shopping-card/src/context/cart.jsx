import { createContext, useReducer } from 'react'

import { cartReducer, cardInitialState } from '../reducers/carts'

export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cardInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  
  const clearCart = () => dispatch({
    type: 'REMOVE_FROM_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }} >
      {children}
    </ CartContext.Provider>
  )
}