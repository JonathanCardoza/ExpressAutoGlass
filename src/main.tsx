import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { Header } from './modules/index.tsx'
// import { AppRoutes } from './app-routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
    {/* <AppRoutes/> */}
    <App/>
    </Router>
  </React.StrictMode>,
)
