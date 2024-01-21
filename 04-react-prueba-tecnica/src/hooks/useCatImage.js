import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    // const firstWord = fact.split(' ').slice(0, 3).join(' ')
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      })
  }, [fact])

  return { imageUrl }
}