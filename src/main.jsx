import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './assets/pages/Home.jsx'
import App from './App.jsx'
import Game from './assets/pages/Game.jsx'
import Search from './assets/pages/Search.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path='/' element={<Home />} />
          <Route path='game/:id' element={<Game />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
