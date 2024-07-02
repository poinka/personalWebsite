import ReactDOM from 'react-dom/client'
import React from 'react'
import MainPage from './MainPage.tsx'
import './style.css'

const mainPage = ReactDOM.createRoot(
  document.getElementById('mainPage') as HTMLElement,
)
mainPage.render(<MainPage />)
