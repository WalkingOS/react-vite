import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

// initializes a React application and renders the App component into an HTML element with the id "root."
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
