import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './Home.tsx'
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { Header } from './modules/index.tsx'
import { Gallery } from './pages/gallery.tsx';
import { AppRoutes } from './app-routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
    <AppRoutes/>
    {/* <Home/> */}
    {/* <Gallery/> */}
    </Router>
  </React.StrictMode>,
)
