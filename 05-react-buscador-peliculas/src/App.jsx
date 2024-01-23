import "./App.css"
import debounce from 'just-debounce-it'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirtInput = useRef(true)

  useEffect(() => {
    if (isFirtInput.current) {
      isFirtInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
  }, [search])

  return { search, setSearch, error }
}

export function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  // const inputRef = useRef()

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   // const fields = new window.FormData(event.target)
  //   // const query = fields.get('query')

  //   const { query } = Object.fromEntries(
  //     new window.FormData(event.target)
  //   )

  //   console.log( query )
  // }

  // forma de usar el useRef
  // const counter = useRef(0)
  // counter.current++
  // console.log(counter.current);

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  // useEffect(() => {
  //   console.log('newGetMovies received')
  // }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>

        {/* <form className='form' onSubmit={handleSubmit}> */}
        <form className='form' onSubmit={handleSubmit}>
          {/* <input ref={inputRef} placeholder='Power Ranger, Avengers, Las abejas' /> */}
          <input onChange={handleChange} value={search} name="query" placeholder='Power Ranger, Avengers, Las abejas' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>

        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
