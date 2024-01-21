const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => {
      // if(!res.ok) return setFactError('No se ha podido recuperar la cita')
      if (!res.ok) throw new Error('Error fetching fact')

      return res.json()
    })
    .then(data => {
      const { fact } = data

      return fact
    })
    .catch((err) => { }) // el catch se dispara cuando hay un error con la peticion

  // no puedes usar react query, SWR, axios, apollo
  // useEffect(() => {
  //   async function getRandomFact() {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  // }, [])
}