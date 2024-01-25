import ReactDOM from 'react-dom/client';

import './index.css'
import { App } from './App'
import { FiltersProvider } from './context/filters'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)