import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'

describe('Router', () => {
  // antes de cada test, limpia la pantalla
  beforeEach(() => {
    cleanup()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} /> )
    expect(true).toBeTruthy()
  })

  it('should render 404 if not routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getAllByText('200')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('Home')).toBeTruthy()
  })
})