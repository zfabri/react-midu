import { BUTTONS, EVENTS } from './consts'

function navigate(href) {
  window.history.pushState({}, '', href) // se cambia la url
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // se crea un evento
  window.dispatchEvent(navigationEvent) // se despacha
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent =  target === undefined || target === '_self'

    if(isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
} 