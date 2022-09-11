import React from 'react'
import ReactDOM from 'react-dom/client'
import GifLookingApp from './Pages/GifLookingApp'
import './assets/styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifLookingApp />
  </React.StrictMode>
)
