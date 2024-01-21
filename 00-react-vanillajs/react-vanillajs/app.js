import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import React from "https://esm.sh/react@18.2.0";

const appDomElement = document.getElementById('app')

const h = React.createElement

const button1 = h('button', { "data-id": 123 }, 'boton 1')
const button2 = h('button', { "data-id": 456 }, 'boton 2')
const button3 = h('button', { "data-id": 789 }, 'boton 3')

const app = h(React.Fragment, null, [ button1, button2, button3 ])

const root = ReactDOM.createRoot(appDomElement)
root.render(app)