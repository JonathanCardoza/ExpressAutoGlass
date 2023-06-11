import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/home/Home.tsx'
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { Header } from './modules/index.tsx'
import { Gallery } from './pages/gallery/gallery.tsx';
import { AppRoutes } from './app-routes.tsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
    <Header />
    <div className='app'><AppRoutes/></div>
    </Router>
  </React.StrictMode>,
)
