import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Hola en español'
  },
  en: {
    title: 'About us',
    button: 'Go to home',
    description: 'Hi in english'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es') 

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="Image profile" width={150} />
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}