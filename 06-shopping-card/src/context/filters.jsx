import { createContext, useState } from 'react'

// este es el que tenemos que consumir
export const FiltersContext = createContext()

// este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 1000
  })

  return (
    <FiltersContext.Provider value={{
        filters,
        setFilters
      }}>
      {children}
    </FiltersContext.Provider>
  )
}

