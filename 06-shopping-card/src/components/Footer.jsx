import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba tecnica de React 🐣 <span>@Silvester</span></h4>
      <h5>ShoppingCard con useContext & useReducer</h5>
      {/* {
        JSON.stringify(filters, null, 1)
      } */}
      {/* {
        JSON.stringify(cart, null, 1)
      } */}
    </footer>
  )
} 