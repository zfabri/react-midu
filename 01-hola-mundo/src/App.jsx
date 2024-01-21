import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'

export function App() {
  // const format = (username) => `@${username}`
  // const formattedUserName = <span>@hola</span>

  // const fabian = { isFollowing: true, userName: 'Silvester022' }
  // const hector = { isFollowing: false, userName: 'facebook' }

  // const [name, setName] = useState('Silvester022')
  // const [isFollowing, setIsFollowing] = useState(false)
  // console.log(isFollowing);

  const users = [
    {
      userName: 'Silvester022',
      name: 'Fabian Zam',
      isFollowing: true
    },
    {
      userName: 'facebook',
      name: 'Face',
      isFollowing: false
    },
    {
      userName: 'meta',
      name: 'Meta',
      isFollowing: false
    }
  ]

  return (
    <section className='App'>
      {/* <TwitterFollowCard {...fabian}>
          Fabián Zambrano
        </ TwitterFollowCard>
        
        <TwitterFollowCard {...hector}>
          Hector Hugo
        </ TwitterFollowCard> */}

      {/* esto es un comentario */}

      {/* <button 
        onClick={() => setName('facebook') }>
        Cambio Nombre
      </button> */}
      
      {/* <TwitterFollowCard userName='Silvester022' initialIsFollowing={true}>
        Fabián Zambrano
      </ TwitterFollowCard>

      <button 
        onClick={ () => setIsFollowing(!isFollowing) }>
        Cambiar estado de app
      </button> */}

      {/* {
        users.map(user => {
          const { isFollowing, name, userName } = user

          return (
            <TwitterFollowCard 
              userName={userName}
              isFollowing={isFollowing} >
                {name}
            </TwitterFollowCard>
          )
        })
      } */}
      
      {
        users.map(({ isFollowing, name, userName }) => (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              isFollowing={isFollowing} >
                {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}