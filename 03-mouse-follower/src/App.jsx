import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log({clientX, clientY});
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup method
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  // change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // datos sobre el useEffect
  // undefined -> se ejecuta cada vez que se renderiza el componnente
  // [enabled] -> se ejecuta cuando cambia la dependencia y cuando se monta el componente
  // [] -> solo se ejecuta una vez cuando se monta el componente

  return (
    <>
      <div 
          style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            border: '1px solid #fff',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`
          }} />

      <button
        onClick={() => setEnabled(!enabled)}>
        { enabled ? 'Desactivar' : 'Activar' } seguir puntero
      </button>
    </>
  )
}

export function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {
        mounted && <FollowMouse />
      }

      <button
        onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse Component
      </button>
    </main>
  )
}