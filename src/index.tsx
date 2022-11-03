import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Header from './components/Header'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
)
