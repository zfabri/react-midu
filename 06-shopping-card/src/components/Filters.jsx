import { useId } from 'react'

import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFiltersId = useId()
  const categoryFiltersId = useId()

  const handleChangeMinPrice = (event) => {
    const newPrice = event.target.value
    
    setFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }
  
  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFiltersId}>Precio</label>
        <input
          type='range'
          id={minPriceFiltersId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice} 
          value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFiltersId}>Categoria</label>
        <select id={categoryFiltersId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}