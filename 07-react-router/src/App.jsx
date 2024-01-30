import { Suspense, lazy } from 'react'

import './App.css'
import HomePage from './pages/Home'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'
import AboutPage from './pages/About.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx')) // import dinamico

const routes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404} >
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}